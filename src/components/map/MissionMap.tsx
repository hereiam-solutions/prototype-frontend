import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvent,
  useMap,
  ZoomControl,
  LayersControl,
  LayerGroup,
  Polyline,
  Polygon,
} from "react-leaflet";
import L, { Icon, latLng } from "leaflet";
import "leaflet/dist/leaflet.css";
import mockLocationData from "../../data/locationData.json";
import { ActiveMarkerType } from "./mapTypes";
import GetCurrentLocation from "./mapEvents/CurrentLocationMarker";
import SetMapCenter from "./mapEvents/SetMapCenter";
import SetMarker from "./mapEvents/SetMarker";
import ActivateActionMenu from "./mapEvents/ActivateActionMenu";
import useActionMenu from "../../hooks/useActionMenu";
import { Location } from "./mapTypes";
import useRealm from "../../hooks/useRealm";
import { realmFunctionNames } from "../../data/realm/functions";
import useMission from "../../hooks/useMission";
import { HazardSchema } from "../../data/realm/schema/hazard";
import HazardMarker from "./markers/HazardMarker";
import { LocationSchema } from "../../data/realm/schema/location";
import { PatientSchema } from "../../data/realm/schema/patient";
import PatientMarker from "./markers/PatientMarker";
import LocationMarker from "./markers/LocationMarker";
import useMissionMap from "../../hooks/useMissionMap";

const MissionMap = () => {
  const { realm } = useRealm();
  const { activeMission } = useMission();
  const { activeTileLayer, reRenderBoolean } = useMissionMap();

  const [patients, setPatients] = useState<PatientSchema[]>([]);
  const [hazards, setHazards] = useState<HazardSchema[]>([]);
  const [locations, setLocations] = useState<LocationSchema[]>([]);

  const tileLayerRef = useRef(null);

  useEffect(() => {
    const getAllMarkers = async () => {
      try {
        if (realm.currentUser) {
          // call the Realm function
          const patientsResponse = await realm.currentUser.callFunction(
            realmFunctionNames.getAllPatientsForMission,
            { mission: activeMission?._id.toString() }
          );

          const hazardsResponse = await realm.currentUser.callFunction(
            realmFunctionNames.getAllHazardsForMission,
            { mission: activeMission?._id.toString() }
          );

          const locationsResponse = await realm.currentUser.callFunction(
            realmFunctionNames.getAllLocationsForMission,
            { mission: activeMission?._id.toString() }
          );

          setPatients(patientsResponse as PatientSchema[]);
          setLocations(locationsResponse as LocationSchema[]);
          setHazards(hazardsResponse as HazardSchema[]);
        }

        if (tileLayerRef.current) {
          // @ts-ignore
          tileLayerRef.current.setUrl(activeTileLayer);
        }
      } catch (e) {
        console.log(e);
      }
    };
    getAllMarkers();
  }, [reRenderBoolean, activeTileLayer]);

  const polygonOptions = {
    color: "red",
    opacity: 0.5,
    weight: 3,
    fill: true,
    fillColor: "red",
    fillOpacity: 0.05,
  };

  return (
    <>
      <StyledMapContainer
        center={[0, 0]}
        zoom={13}
        scrollWheelZoom={false}
        tap={true}
        attributionControl={false}
      >
        <TileLayer ref={tileLayerRef} url={activeTileLayer} />

        <LayersControl
          collapsed={true}
          hideSingleBase={true}
          position="topright"
        >
          <LayersControl.Overlay checked={true} name="Mission Border">
            <LayerGroup>
              <Polygon
                pathOptions={polygonOptions}
                positions={
                  activeMission?.geoJSON.coordinates as L.LatLngExpression[][]
                }
              />
            </LayerGroup>
          </LayersControl.Overlay>

          <LayersControl.Overlay checked={true} name="Hazards">
            <LayerGroup>
              {hazards.map((hazard: HazardSchema) => (
                <HazardMarker
                  key={hazard._id.toString()}
                  id={hazard._id}
                  coordinates={hazard.geoJSON.coordinates}
                  type={hazard.hazard_type}
                />
              ))}
            </LayerGroup>
          </LayersControl.Overlay>

          <LayersControl.Overlay checked={true} name="Locations">
            <LayerGroup>
              {locations.map((location: LocationSchema) => (
                <LocationMarker
                  key={location._id.toString()}
                  id={location._id}
                  coordinates={location.geoJSON.coordinates}
                  type={location.type}
                  status={location.status}
                />
              ))}
            </LayerGroup>
          </LayersControl.Overlay>

          <LayersControl.Overlay checked={true} name="Patients">
            <LayerGroup>
              {patients.map((patient: PatientSchema) => (
                <PatientMarker
                  key={patient._id.toString()}
                  id={patient._id}
                  coordinates={patient.geoJSON.coordinates}
                  type={patient.injuries}
                />
              ))}
            </LayerGroup>
          </LayersControl.Overlay>
        </LayersControl>

        <GetCurrentLocation />
        <ActivateActionMenu />
        <SetMarker />

        {/* <SetMapCenter /> */}
      </StyledMapContainer>
    </>
  );
};

// styled components
const StyledMapContainer = styled(MapContainer)`
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;

export default MissionMap;

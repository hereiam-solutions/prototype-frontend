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

const fireHazardIcon = new Icon({
  iconUrl: "/fire_hazard_icon.svg",
  iconSize: [25, 25],
});

const MissionMap = () => {
  //   const hazardsRef = useRef<L.Layer>();
  //   const casualtiesRef = useRef();
  //   const booRef = useRef();

  const { realm } = useRealm();
  const { activeMission } = useMission();

  const [patients, setPatients] = useState<PatientSchema[]>([]);
  const [hazards, setHazards] = useState<HazardSchema[]>([]);
  const [locations, setLocations] = useState<LocationSchema[]>([]);

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
      } catch (e) {
        console.log(e);
      }
    };
    getAllMarkers();
  }, []);

  return (
    <>
      <StyledMapContainer
        center={[0, 0]}
        zoom={13}
        scrollWheelZoom={false}
        tap={true}
        attributionControl={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <LayersControl
          collapsed={true}
          hideSingleBase={true}
          position="topright"
        >
          <LayersControl.Overlay checked={true} name="Locations">
            <LayerGroup>
              {locations.map((location: LocationSchema) => (
                <LocationMarker
                  key={location._id.toString()}
                  coordinates={location.geoJSON.coordinates}
                  type={location.type}
                />
              ))}
            </LayerGroup>
          </LayersControl.Overlay>

          <LayersControl.Overlay checked={true} name="Hazards">
            <LayerGroup>
              {hazards.map((hazard: HazardSchema) => (
                <HazardMarker
                  key={hazard._id.toString()}
                  coordinates={hazard.geoJSON.coordinates}
                  type={hazard.hazard_type}
                />
              ))}
            </LayerGroup>
          </LayersControl.Overlay>
          <LayersControl.Overlay checked={true} name="Patients">
            <LayerGroup>
              {patients.map((patient: PatientSchema) => (
                <PatientMarker
                  key={patient._id.toString()}
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

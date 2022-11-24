import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import {
  MapContainer,
  TileLayer,
  LayersControl,
  LayerGroup,
  Polygon,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import GetCurrentLocation from "./mapEvents/CurrentLocationMarker";
import SetMarker from "./mapEvents/SetMarker";
import ActivateActionMenu from "./mapEvents/ActivateActionMenu";
import useRealm from "../../hooks/useRealm";
import { realmFunctionNames } from "../../data/realm/functions";
import useMission from "../../hooks/useMission";
import { HazardSchema } from "../../data/realm/schema/hazard";
import HazardMarker from "./markers/HazardMarker";
import { PatientSchema } from "../../data/realm/schema/patient";
import PatientMarker from "./markers/PatientMarker";
import { LocationSchema } from "../../data/realm/schema/location";
import LocationMarker from "./markers/LocationMarker";
import { SignalSchema } from "../../data/realm/schema/signal";
import SignalMarker from "./markers/SignalMarker";
import useMissionMap from "../../hooks/useMissionMap";


const MissionMap = () => {
  const { realm } = useRealm();
  const { activeMission } = useMission();
  const { activeTileLayer, reRenderBoolean } = useMissionMap();

  const [patients, setPatients] = useState<PatientSchema[]>([]);
  // const [victims, setVictims] = useState<VictimSchema[]>([]);
  const [hazards, setHazards] = useState<HazardSchema[]>([]);
  const [locations, setLocations] = useState<LocationSchema[]>([]);
  const [signals, setSignals] = useState<SignalSchema[]>([]);

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
          
          // const victimsResponse = await realm.currentUser.callFunction(
          //  realmFunctionNames.getAllVictimsForMission,
          //  { mission: activeMission?._id.toString() }
          //);
          

          const hazardsResponse = await realm.currentUser.callFunction(
            realmFunctionNames.getAllHazards,
            { mission: activeMission?._id.toString() }
          );

          const locationsResponse = await realm.currentUser.callFunction(
            realmFunctionNames.getAllLocations,
            { mission: activeMission?._id.toString() }
          );

          const signalsResponse = await realm.currentUser.callFunction(
            realmFunctionNames.getAllSignalsForMission,
            { mission: activeMission?._id.toString() }
          );

          setPatients(patientsResponse as PatientSchema[]);
          // setVictims(victimsResponse as VictimSchema[]);
          setLocations(locationsResponse as LocationSchema[]);
          setHazards(hazardsResponse as HazardSchema[]);
          setSignals(signalsResponse as SignalSchema[]);
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
  }, [reRenderBoolean, activeTileLayer, realm.currentUser, activeMission]);

  const polygonOptions = {
    color: "#cf151e",
    opacity: 0.5,
    weight: 3,
    fill: true,
    fillColor: "#cf151e",
    fillOpacity: 0.05,
  };

  return (
    <>
      <StyledMapContainer
        center={[52.454937, 13.525194]}
        zoom={13}
        maxZoom={18}
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
                <HazardMarker hazard={hazard} key={hazard._id.toString()} />
              ))}
            </LayerGroup>
          </LayersControl.Overlay>

          <LayersControl.Overlay checked={true} name="Locations">
            <LayerGroup>
              {locations.map((location: LocationSchema) => (
                <LocationMarker
                  location={location}
                  key={location._id.toString()}
                />
              ))}
            </LayerGroup>
          </LayersControl.Overlay>

          <LayersControl.Overlay checked={true} name="Suspected vitims">
            <LayerGroup>
              {signals.map((signal: SignalSchema) => (
                <SignalMarker signal={signal} key={signal._id.toString()} />
              ))}
            </LayerGroup>
          </LayersControl.Overlay>

          <LayersControl.Overlay checked={true} name="Patients">
            <LayerGroup>
              {patients.map((patient: PatientSchema) => (
                <PatientMarker patient={patient} key={patient._id.toString()} />
              ))}
            </LayerGroup>
          </LayersControl.Overlay>
          
          {/** 
          <LayersControl.Overlay checked={true} name="Victims">
            <LayerGroup>
              {victims.map((victim: VictimSchema) => (
                <VictimMarker victim={victim} key={victim._id.toString()} />
              ))}
            </LayerGroup>
          </LayersControl.Overlay>
          */}

        </LayersControl>

        <GetCurrentLocation />
        <ActivateActionMenu />
        <SetMarker />
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

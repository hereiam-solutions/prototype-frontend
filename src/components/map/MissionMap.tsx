import React, { useEffect, useRef, useState } from "react";

import useRealm from "../../hooks/useRealm";
import { realmFunctionNames } from "../../data/realm/functions";

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

import useMission from "../../hooks/useMission";
import useMissionMap from "../../hooks/useMissionMap";

import { HazardSchema } from "../../data/realm/schema/hazard";
import HazardMarker from "./markers/HazardMarker";
import { PatientSchema } from "../../data/realm/schema/patient";
import PatientMarker from "./markers/PatientMarker";
import { LocationSchema } from "../../data/realm/schema/location";
import LocationMarker from "./markers/LocationMarker";
import { SignalSchema } from "../../data/realm/schema/signal";
import SignalMarker from "./markers/SignalMarker";

import { useTranslation } from 'react-i18next';

import styled from "styled-components";

const MissionMap = () => {
  const { realm } = useRealm();
  const { activeMission } = useMission();
  const { activeTileLayer, reRenderBoolean } = useMissionMap();

  const [patients, setPatients] = useState<PatientSchema[]>([]);
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

  const { t } = useTranslation();

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
          <LayersControl.Overlay checked={true} name={t("Mission Border")}>
            <LayerGroup>
              <Polygon
                pathOptions={polygonOptions}
                positions={
                  activeMission?.geoJSON.coordinates as L.LatLngExpression[][]
                }
              />
            </LayerGroup>
          </LayersControl.Overlay>

          <LayersControl.Overlay checked={true} name={t("Hazards")}>
            <LayerGroup>
              {hazards.map((hazard: HazardSchema) => (
                <HazardMarker hazard={hazard} key={hazard._id.toString()} />
              ))}
            </LayerGroup>
          </LayersControl.Overlay>

          <LayersControl.Overlay checked={true} name={t("Locations")}>
            <LayerGroup>
              {locations.map((location: LocationSchema) => (
                <LocationMarker
                  location={location}
                  key={location._id.toString()}
                />
              ))}
            </LayerGroup>
          </LayersControl.Overlay>

          <LayersControl.Overlay checked={true} name={t("Suspected")}>
            <LayerGroup>
              {signals.map((signal: SignalSchema) => (
                <SignalMarker signal={signal} key={signal._id.toString()} />
              ))}
            </LayerGroup>
          </LayersControl.Overlay>

          <LayersControl.Overlay checked={true} name={t("Victims")}>
            <LayerGroup>
              {patients.map((patient: PatientSchema) => (
                <PatientMarker patient={patient} key={patient._id.toString()} />
              ))}
            </LayerGroup>
          </LayersControl.Overlay>
        
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

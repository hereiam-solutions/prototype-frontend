import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
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
} from 'react-leaflet';
import { Icon, latLng } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import mockLocationData from '../../data/locationData.json';
import { ActiveMarkerType } from './mapTypes';
import GetInitialLocation from './mapEvents/GetInitialLocation';
import SetMapCenter from './mapEvents/SetMapCenter';
import SetMarker from './mapEvents/SetMarker';
import ActivateActionMenu from './mapEvents/ActivateActionMenu';
import useActionMenu from '../../hooks/useActionMenu';
import { Location } from './mapTypes';

const fireHazardIcon = new Icon({
  iconUrl: '/fire_hazard_icon.svg',
  iconSize: [25, 25],
});

const Map = () => {
  const hazardsRef = useRef();
  const casualtiesRef = useRef();
  const booRef = useRef();

  return (
    <>
      <StyledMapContainer
        center={[0, 0]}
        zoom={13}
        scrollWheelZoom={false}
        tap={true}
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
          <LayersControl.Overlay checked={true} name="Fires">
            <LayerGroup>
              {mockLocationData.features.map((location) => (
                <Marker
                  key={location.id}
                  position={[location.latitude, location.longitude]}
                  icon={fireHazardIcon}
                >
                  <Popup>{location.name}</Popup>
                </Marker>
              ))}
            </LayerGroup>
          </LayersControl.Overlay>

          <LayersControl.Overlay name="Casualties">
            <LayerGroup>
              {mockLocationData.features.map((location) => (
                <Marker
                  key={location.id}
                  position={[location.latitude, location.longitude]}
                  icon={fireHazardIcon}
                >
                  <Popup>{location.name}</Popup>
                </Marker>
              ))}
            </LayerGroup>
          </LayersControl.Overlay>
        </LayersControl>

        <GetInitialLocation />
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

export default Map;

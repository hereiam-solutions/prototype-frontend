import { useEffect, useState } from 'react';
import styled from 'styled-components';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvent,
  useMap,
} from 'react-leaflet';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import mockLocationData from '../../data/locationData.json';
import { ActiveMarkerType } from './mapTypes';
import GetInitialLocation from './mapEvents/GetInitialLocation';
import SetMapCenter from './mapEvents/SetMapCenter';
import SetMarker from './mapEvents/SetMarker';
import ActivateActionMenu from './mapEvents/ActivateActionMenu';

const fireHazardIcon = new Icon({
  iconUrl: '/fire_hazard_icon.svg',
  iconSize: [25, 25],
});

const Map = () => {
  const [activeMarker, setActiveMarker] = useState<ActiveMarkerType | null>(
    null
  );

  return (
    <>
      <StyledMapContainer
        center={[52.520008, 13.404954]}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {mockLocationData.features.map((location) => (
          <Marker
            key={location.id}
            position={[location.latitude, location.longitude]}
            icon={fireHazardIcon}
            eventHandlers={{ click: () => setActiveMarker(location) }}
          />
        ))}
        {activeMarker && (
          <Popup
            position={[activeMarker.latitude, activeMarker.longitude]}
            eventHandlers={{ popupclose: () => setActiveMarker(null) }}
          >
            {activeMarker.name}
          </Popup>
        )}

        <GetInitialLocation />
        <ActivateActionMenu />
        <SetMarker
          activeMarker={activeMarker}
          setActiveMarker={setActiveMarker}
        />
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

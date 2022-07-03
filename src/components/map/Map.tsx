import React, { useState } from 'react';
import styled from 'styled-components';
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';

import mockLocationData from '../../data/locationData.json';

const fireHazardIcon = new Icon({
  iconUrl: '/fire_hazard_icon.svg',
  iconSize: [25, 25],
});

type Location = [latitude: number, longitude: number];

type ActiveMarkerType = {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
};

const Map = () => {
  //   const map = useMap();

  const [currentLocation, setCurrentLocation] = useState<Location>([
    52.520008, 13.404954,
  ]);
  const defaultZoom = 13;

  const [activeMarker, setActiveMarker] = useState<ActiveMarkerType | null>(
    null
  );

  return (
    <>
      <StyledMapContainer
        center={currentLocation}
        zoom={defaultZoom}
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

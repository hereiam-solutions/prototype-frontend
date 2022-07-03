import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { MapContainer, TileLayer, useMap, Marker, Popup, useMapEvents } from 'react-leaflet';
import { Icon, latLng } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

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

  const mapRef = useRef();
  useEffect(() => {
    const { current = {} } = mapRef;
    const { leafletElement: map } = current;
    map.locate({
    setView: true,
    });
    map.on('locationfound', handleOnLocationFound);
  }, []);

  function handleOnLocationFound(event: { latlng: any; accuracy: any; }) {
    const { current = {} } = mapRef;
    const { leafletElement: map } = current;
    const latlng = event.latlng;
    const radius = event.accuracy;
    const circle = L.circle(latlng, radius);
    circle.addTo(map);
  }


  const [activeMarker, setActiveMarker] = useState<ActiveMarkerType | null>(
    null
  );

  return (
    <>
      <StyledMapContainer
        ref={mapRef}
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

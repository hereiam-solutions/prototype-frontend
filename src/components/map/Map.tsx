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

function GetInitialLocation() {
  const map = useMap();

  const [currentLocation, setCurrentLocation] = useState<Location>([
    52.520008, 13.404954,
  ]);

  useEffect(() => {
    map.locate().on('locationfound', function (e) {
      const currentCoordinates: Location = [e.latlng.lat, e.latlng.lng];
      setCurrentLocation(currentCoordinates);
    });
  }, [map]);

  map.setView(currentLocation);
  return null;
}

function SetCenterToBerlinMitte() {
  const map = useMapEvent('click', () => {
    map.setView([52.520008, 13.404954]);
  });
  return null;
}

const Map = () => {
  const [currentLocation, setCurrentLocation] = useState<Location>([
    52.520008, 13.404954,
  ]);

  useEffect(() => {
    const getCurrentLocation = async () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setCurrentLocation([
              position.coords.latitude,
              position.coords.longitude,
            ]);

            // map.setView(currentLocation);
          },
          (error) => {
            console.log(error);
          }
        );
      } else {
        alert('Geolocation is not supported by this browser.');
      }
    };

    getCurrentLocation();
  }, []);

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

        <GetInitialLocation />
        <SetCenterToBerlinMitte />
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

import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useState } from 'react';

type position = {
  latitude: number;
  longitude: number;
};

const changePosition = (center: position, zoom: number) => {
  const map = useMap();
  map.setView(center, zoom);
  return null;
};

const Map = () => {
  const [currentLocation, setCurrentLocation] = useState<position>({
    latitude: 51.505,
    longitude: -0.09,
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log('Latitude is :', position.coords.latitude);
      console.log('Longitude is :', position.coords.longitude);

      const location = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      };

      setCurrentLocation(location);
    });
  }, []);

  return (
    <MapContainer
      center={[currentLocation.latitude, currentLocation.longitude]}
      zoom={14}
      scrollWheelZoom={false}
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[40.8054, -74.0241]} draggable={true}>
        <Popup>Hey ! you found me</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;

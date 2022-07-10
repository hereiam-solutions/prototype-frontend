import { useEffect, useState } from 'react';
import {
  useMap,
  useMapEvents,
  useMapEvent,
  Marker,
  Popup,
} from 'react-leaflet';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Location } from '../mapTypes';

const locationIcon = new Icon({
  iconUrl: '/location.svg',
  iconSize: [25, 25],
});

function GetCurrentLocation() {
  const map = useMapEvents({
    locationfound(e) {
      setCurrentLocation([e.latlng.lat, e.latlng.lng]);
    },
  });

  let center = map.getCenter();

  const [currentLocation, setCurrentLocation] = useState<Location>([
    center.lat,
    center.lng,
  ]);

  useEffect(() => {
    map.locate({
      setView: true,
      enableHighAccuracy: true,
      //   watch: true,
      maxZoom: 13,
    });
  }, [map]);

  return (
    <Marker position={currentLocation} icon={locationIcon}>
      <Popup>YOU!</Popup>
    </Marker>
  );
}

export default GetCurrentLocation;

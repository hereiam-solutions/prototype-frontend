import { useEffect, useState } from 'react';
import { useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import { Location } from '../mapTypes';

// this react leaflet component returns a map instance that is centered on the current location of the user
// the return map instance is used as the initial map that is shown when the app is opened
// or no mission is active
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

export default GetInitialLocation;

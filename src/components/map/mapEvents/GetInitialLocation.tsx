import { useEffect, useState } from 'react';
import { useMap, useMapEvents, useMapEvent } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import { Location } from '../mapTypes';
import useActionMenu from '../../../hooks/useActionMenu';

type GetInitialLocationProps = {
  initialLocation: Location;
};
// this react leaflet component returns a map instance that is centered on the current location of the user
// the return map instance is used as the initial map that is shown when the app is opened
// or no mission is active
function GetInitialLocation() {
  //   const map = useMap();

  const [currentLocation, setCurrentLocation] = useState<Location>([40, 40]);

  //   const map = useMapEvents({
  //     click() {
  //       console.log('load event');
  //       map.locate();
  //     },
  //     locationfound(e) {
  //       console.log('location found event');
  //       const currentCoordinates: Location = [e.latlng.lat, e.latlng.lng];
  //       setCurrentLocation(currentCoordinates);
  //     },
  //   });

  //   const map = useMapEvent('click', () => {
  //     console.log('load event');
  //     map.locate().on('locationfound', function (e) {
  //       const currentCoordinates: Location = [e.latlng.lat, e.latlng.lng];
  //       setCurrentLocation(currentCoordinates);
  //     });
  //   });
  const {
    isActionMenuOpen,
    isCreateMarkerDrawOpen,
    isCreateMarkerModeEnabled,
    isInitialMapLoad,
    setIsInitialMapLoad,
  } = useActionMenu();

  const map = useMap();

  useEffect(() => {
    map.locate({
      setView: true,
      enableHighAccuracy: true,
      //   watch: true,
      maxZoom: 20,
    });
  }, [map]);

  return null;
}

export default GetInitialLocation;

// function GetInitialLocation() {
// 	const [currentLocation, setCurrentLocation] = useState<Location>([
// 	  30.520008, 13.404954,
// 	]);

// 	const map = useMapEvent('load', () => {
// 	  map.locate().on('locationfound', function (e) {
// 		const currentCoordinates: Location = [e.latlng.lat, e.latlng.lng];
// 		setCurrentLocation(currentCoordinates);
// 	  });
// 	});

// 	map.setView(currentLocation);
// 	return null;
//   }

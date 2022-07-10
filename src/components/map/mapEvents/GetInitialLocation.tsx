import { useEffect, useState } from 'react';
import { useMap, useMapEvents, useMapEvent } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import { Location } from '../mapTypes';
import useActionMenu from '../../../hooks/useActionMenu';

// type GetInitialLocationProps = {
//   initialLocation: Location;
// };

function GetInitialLocation() {
  //   const {
  //     isActionMenuOpen,
  //     isCreateMarkerDrawOpen,
  //     isCreateMarkerModeEnabled,
  //     isInitialMapLoad,
  //     setIsInitialMapLoad,
  //   } = useActionMenu();

  const map = useMap();

  useEffect(() => {
    map.locate({
      setView: true,
      enableHighAccuracy: true,
      //   watch: true,
      maxZoom: 13,
    });
  }, [map]);

  return null;
}

export default GetInitialLocation;

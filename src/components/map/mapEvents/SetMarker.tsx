import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMapEvents, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';
import { ActiveMarkerType, MarkerType } from '../mapTypes';
import axios from 'axios';
import useActionMenu from '../../../hooks/useActionMenu';
import useCreateMarker from '../../../hooks/useCreateMarker';
import useNavigation from '../../../hooks/useNavigation';

type Location = [latitude: number, longitude: number];

const fireHazardIcon = new Icon({
  iconUrl: '/fire_hazard_icon.svg',
  iconSize: [25, 25],
});

// type SetMarkerPropsType = {
//   activeMarker: ActiveMarkerType | null;
//   setActiveMarker: React.Dispatch<
//     React.SetStateAction<ActiveMarkerType | null>
//   >;
// };

function SetMarker() {
  let navigate = useNavigate();

  const { isDrawOpen, setIsDrawOpen } = useNavigation();

  const {
    isActionMenuOpen,
    setIsActionMenuOpen,
    isCreateMarkerModeEnabled,
    setIsCreateMarkerModeEnabled,
    markerType,
  } = useActionMenu();

  const { setLocation } = useCreateMarker();

  const map = useMapEvents({
    async click(e) {
      if (isCreateMarkerModeEnabled) {
        setLocation([e.latlng.lat, e.latlng.lng]);

        setIsDrawOpen(true);

        if (markerType === MarkerType.HAZARD) {
          navigate(`create-${MarkerType.HAZARD}`);
        }
        if (markerType === MarkerType.CASUALTY) {
          navigate(`create-${MarkerType.CASUALTY}`);
        }
        if (markerType === MarkerType.BOO) {
          navigate(`create-${MarkerType.BOO}`);
        }

        map.setView(e.latlng, map.getZoom());

        setIsCreateMarkerModeEnabled(false);
      }
    },
  });

  return null;

  //   return markerLocation ? (
  //     <Marker
  //       position={markerLocation}
  //       icon={fireHazardIcon}
  //       eventHandlers={{
  //         click: () =>
  //           setActiveMarker({
  //             id: 444,
  //             name: 'Marker',
  //             latitude: markerLocation[0],
  //             longitude: markerLocation[1],
  //           }),
  //       }}
  //     />
  //   ) : null;
}

export default SetMarker;

import React, { useEffect, useState } from 'react';
import { useMapEvents, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';
import { ActiveMarkerType } from '../mapTypes';
import axios from 'axios';
import useActionMenu from '../../../hooks/useActionMenu';

// type Location = [latitude: number, longitude: number];

// type SetMarkerPropsType = {
//   activeMarker: ActiveMarkerType | null;
//   setActiveMarker: React.Dispatch<
//     React.SetStateAction<ActiveMarkerType | null>
//   >;
// };

function ActivateActionMenu() {
  const { setIsActionMenuOpen } = useActionMenu();
  const [markerLocation, setMarkerLocation] = useState<Location | null>(null);

  const map = useMapEvents({
    contextmenu(e) {
      // this event should only be triggerable whenever the user clicked
      // the action in the cross menu to create a Marker
      // TODO: open the draw corresponding to creating a Marker
      //   const response = await axios.get()
      setIsActionMenuOpen(true);
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

export default ActivateActionMenu;

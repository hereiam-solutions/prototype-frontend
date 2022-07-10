import React, { useEffect, useState } from 'react';
import { useMapEvents, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';
import { ActiveMarkerType } from '../mapTypes';
import axios from 'axios';
import useActionMenu from '../../../hooks/useActionMenu';

function ActivateActionMenu() {
  const { setIsActionMenuOpen } = useActionMenu();
  const [markerLocation, setMarkerLocation] = useState<Location | null>(null);

  const map = useMapEvents({
    contextmenu(e) {
      setIsActionMenuOpen(true);
    },
  });

  return null;
}

export default ActivateActionMenu;

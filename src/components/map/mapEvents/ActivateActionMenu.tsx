import React, { useEffect, useState, useContext } from 'react';
import { useMapEvents, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';
import { ActiveMarkerType, screenCoordinatesType } from '../mapTypes';
import axios from 'axios';
import useActionMenu from '../../../hooks/useActionMenu';
import useTheme from '../../../hooks/useTheme';
import { ThemeContext } from 'styled-components';

function ActivateActionMenu() {
  const { setIsActionMenuOpen } = useActionMenu();

  const themeContext = useContext(ThemeContext);

  const map = useMapEvents({
    contextmenu(e) {
      // get the dimensions of the screen
      const screenDimensions = e.sourceTarget._size;

      // get the coordinates of the location the user has clicked on the screen
      const screenCoordinates: screenCoordinatesType = e.containerPoint;

      // right click on desktop opens the actionMenu but the coordinates given by the event will be 0.
      // therefore right clicking on desktop will open the actionMenu in the middle of the screen.
      if (screenCoordinates.x === 0 && screenCoordinates.y === 0) {
        themeContext.x = screenDimensions.x / 2;
        themeContext.y = screenDimensions.y / 2;
      } else {
        themeContext.x = screenCoordinates.x;
        themeContext.y = screenCoordinates.y;
      }

      setIsActionMenuOpen(true);
    },
  });

  return null;
}

export default ActivateActionMenu;

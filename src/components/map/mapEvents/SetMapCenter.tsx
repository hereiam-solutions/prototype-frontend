import { useMapEvent } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function SetMapCenter() {
  const map = useMapEvent('click', () => {
    map.setView([52.520008, 13.404954]);
  });
  return null;
}

export default SetMapCenter;

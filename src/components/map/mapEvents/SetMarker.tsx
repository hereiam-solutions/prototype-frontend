import { useNavigate } from 'react-router-dom';
import { useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { MarkerType } from '../mapTypes';
import useActionMenu from '../../../hooks/useActionMenu';
import useCreateMarker from '../../../hooks/useCreateMarker';
import useNavigation from '../../../hooks/useNavigation';

function SetMarker() {
  let navigate = useNavigate();

  const { setIsDrawOpen } = useNavigation();

  const {
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
}

export default SetMarker;

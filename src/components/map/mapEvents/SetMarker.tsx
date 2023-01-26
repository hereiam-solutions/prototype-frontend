import { useNavigate } from "react-router-dom";
import { useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { MarkerType } from "../mapTypes";
import useActionMenu from "../../../hooks/useActionMenu";
import useCreateMarker from "../../../hooks/useCreateMarker";
import useNavigation from "../../../hooks/useNavigation";
import useModal from "../../../hooks/useModal";

function SetMarker() {
  let navigate = useNavigate();

  const { setIsDrawOpen } = useNavigation();
  const { setIsModalActive } = useModal();

  const {
    isCreateMarkerModeEnabled,
    setIsCreateMarkerModeEnabled,
    markerType,
  } = useActionMenu();

  const {
    setCreateMarkerLocation: setLocation,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    createMarkerLocation: location,
  } = useCreateMarker();

  const map = useMapEvents({
    async click(e) {
      if (isCreateMarkerModeEnabled) {
        setLocation([e.latlng.lat, e.latlng.lng]);

        setIsModalActive(false);

        setIsDrawOpen(true);

        if (markerType === MarkerType.HAZARD) {
          navigate(`create-${MarkerType.HAZARD}`);
        }
        if (markerType === MarkerType.PATIENT) {
          navigate(`create-${MarkerType.PATIENT}`);
        }
        if (markerType === MarkerType.LOCATION) {
          navigate(`create-${MarkerType.LOCATION}`);
        }
        if (markerType === MarkerType.SIGNAL) {
          navigate(`create-${MarkerType.SIGNAL}`);
        }
        if (markerType === MarkerType.WORKSITE) {
          navigate(`create-${MarkerType.WORKSITE}`);
        }

        map.setView(e.latlng, map.getZoom());

        setIsCreateMarkerModeEnabled(false);
      }
    },
  });

  return null;
}

export default SetMarker;

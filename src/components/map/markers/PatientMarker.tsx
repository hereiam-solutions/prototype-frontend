import { Marker } from "react-leaflet";
import { Icon } from "leaflet";
import { Location } from "../mapTypes";
import { injuries } from "../../../data/realm/schema/patient";

const PatientIcon = new Icon({
  iconUrl: "/icons/assets/Action/Aktion=Verletzte.svg",
  iconSize: [25, 25],
});

type Props = {
  coordinates: Location;
  type: injuries;
};

const PatientMarker = (props: Props) => {
  return (
    <Marker
      position={[props.coordinates[0], props.coordinates[1]]}
      icon={PatientIcon}
    >
      {/* <Popup>{location.name}</Popup> */}
    </Marker>
  );
};

export default PatientMarker;

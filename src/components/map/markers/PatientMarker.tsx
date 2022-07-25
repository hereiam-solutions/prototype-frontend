import { Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import { Location } from "../mapTypes";
import {
  DeletePatientArgs,
  injuries,
} from "../../../data/realm/schema/patient";
import { useEffect, useState } from "react";
import { BSON } from "realm-web";
import useRealm from "../../../hooks/useRealm";
import useMission from "../../../hooks/useMission";
import useMissionMap from "../../../hooks/useMissionMap";
import { realmFunctionNames } from "../../../data/realm/functions";

const PatientIcon = new Icon({
  iconUrl: "/icons/assets/Action/Aktion=Verletzte.svg",
  iconSize: [25, 25],
});

type Props = {
  id: BSON.ObjectId;
  coordinates: Location;
  type: injuries;
};

const PatientMarker = (props: Props) => {
  const { realm } = useRealm();
  const { activeMission } = useMission();
  const { reRenderBoolean, setReRenderBoolean } = useMissionMap();

  const deletePatient = async () => {
    if (activeMission) {
      const args: DeletePatientArgs = {
        _id: props.id.toString(),
      };

      if (realm.currentUser) {
        // call the Realm function
        const response = await realm.currentUser.callFunction(
          realmFunctionNames.deletePatient,
          args
        );

        console.log(response);
      }

      setReRenderBoolean(!reRenderBoolean);
    }
  };

  return (
    <Marker
      position={[props.coordinates[0], props.coordinates[1]]}
      icon={PatientIcon}
    >
      <Popup>
        <div onClick={deletePatient}>Mark Patient as rescued</div>
      </Popup>
    </Marker>
  );
};

export default PatientMarker;

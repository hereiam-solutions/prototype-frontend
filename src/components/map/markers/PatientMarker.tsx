import { Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import {
  DeletePatientArgs,
  PatientSchema,
} from "../../../data/realm/schema/patient";
import useRealm from "../../../hooks/useRealm";
import useMission from "../../../hooks/useMission";
import useMissionMap from "../../../hooks/useMissionMap";
import { realmFunctionNames } from "../../../data/realm/functions";

// styling imports
import {
  StyledPopupContentWrapper,
  StyledPopupHeading,
  StyledDate,
  StyledSection,
  StyledBoldText,
  StyledStatusText,
  StyledDeactivateButton,
} from "./styles/markerStyles";

const PatientIcon = new Icon({
  iconUrl: "/icons/assets/Action/Aktion=Verletzte.svg",
  iconSize: [30, 30],
});

type Props = {
  patient: PatientSchema;
};

const PatientMarker = ({ patient }: Props) => {
  const { realm } = useRealm();
  const { activeMission } = useMission();
  const { reRenderBoolean, setReRenderBoolean } = useMissionMap();

  const deletePatient = async () => {
    if (activeMission) {
      const args: DeletePatientArgs = {
        _id: patient._id.toString(),
      };

      if (realm.currentUser) {
        // call the Realm function
        await realm.currentUser.callFunction(
          realmFunctionNames.deletePatient,
          args
        );
      }

      setReRenderBoolean(!reRenderBoolean);
    }
  };

  return (
    <Marker
      position={[
        patient.geoJSON.coordinates[0],
        patient.geoJSON.coordinates[1],
      ]}
      icon={PatientIcon}
    >
      <Popup>
        <StyledPopupContentWrapper>
          
          <StyledPopupHeading>Victim</StyledPopupHeading>

          <StyledStatusText>{patient.status}</StyledStatusText>


          <StyledSection>
            
            <StyledBoldText>{patient.agegroup} years</StyledBoldText>
            <StyledBoldText>{patient.gender}</StyledBoldText>

          </StyledSection>

          <StyledSection>
      
            <StyledBoldText>{patient.injuries} Injuries</StyledBoldText>
          
          </StyledSection>

          <StyledDeactivateButton onClick={deletePatient}>
            Rescued
          </StyledDeactivateButton>

          <StyledDate>
            {new Date(patient.timestamp).toLocaleString()}
          </StyledDate>

        </StyledPopupContentWrapper>
      </Popup>
    </Marker>
  );
};

export default PatientMarker;

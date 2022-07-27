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
  StyledText,
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
          <StyledPopupHeading>Patient</StyledPopupHeading>

          <StyledDate>
            {new Date(patient.timestamp).toLocaleString()}
          </StyledDate>

          <StyledSection>
            <StyledBoldText>Status: </StyledBoldText>
            <StyledText>{patient.status}</StyledText>
          </StyledSection>

          <StyledSection>
            <StyledBoldText>Injuries: </StyledBoldText>
            <StyledText>{patient.injuries}</StyledText>
          </StyledSection>

          <StyledSection>
            <StyledBoldText>Gender: </StyledBoldText>
            <StyledText>{patient.gender}</StyledText>
          </StyledSection>

          <StyledSection>
            <StyledBoldText>Age Group: </StyledBoldText>
            <StyledText>{patient.agegroup}</StyledText>
          </StyledSection>

          <StyledSection>
            <StyledBoldText>Team Member?: </StyledBoldText>
            <StyledText> {patient.isTeamMember ? "Yes" : "No"}</StyledText>
          </StyledSection>

          <StyledDeactivateButton onClick={deletePatient}>
            Mark as rescued
          </StyledDeactivateButton>
        </StyledPopupContentWrapper>
      </Popup>
    </Marker>
  );
};

export default PatientMarker;

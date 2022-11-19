import { Marker, Popup } from "react-leaflet";
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

//divlogo for leaflet
import { divIcon } from "leaflet";
import { renderToStaticMarkup } from "react-dom/server";
import styled from "styled-components";
import { RiCreativeCommonsByFill } from "react-icons/ri";

type Props = {
  patient: PatientSchema;
};

//customize logo
let iconSize = 30;
const StyledLocationMarker = styled.button`
 background-color: var(--base-light);
 border-radius: 50px;
`;
const iconMarker = renderToStaticMarkup(
  <div>
    <StyledLocationMarker>
      <RiCreativeCommonsByFill
        size={iconSize}
      />
    </StyledLocationMarker>
  </div>
);

const PatientIcon = divIcon({
  html: iconMarker,
  className: 'victim',
  iconAnchor: [0, 0],
});

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

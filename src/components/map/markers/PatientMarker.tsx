import { useState } from "react";
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
  StyledBoldText,
  StyledSection,
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
 background-color: ${(props) => props.theme.alertColor};
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

  const [toggleExtrication, setToggleExtrication] = useState(false)
  const [toggleHandover, setToggleHandover] = useState(false)
  const [toggleForensics, setToggleForensics] = useState(false)

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

          {/* include Identifier */}
          <StyledSection>
            <StyledShortSign>
              <StyledVictimID>
                {patient.identifier}
              </StyledVictimID>
              <StyledHint>
                Write this ID clearly <br />
                readable on the victim.
              </StyledHint>
            </StyledShortSign>
          </StyledSection>

          <StyledSection>
            <StyledStatus>{patient.status}</StyledStatus>
          </StyledSection>

          <StyledSection>     
            <StyledBoldText>{patient.agegroup} years</StyledBoldText>
            <StyledBoldText>{patient.gender}</StyledBoldText>
          </StyledSection>

          {/* EXTRICATION */}
          <StyledSection>
            <StyledExtricationSection> 
              <button
                onClick={() => setToggleExtrication(!toggleExtrication)}
                className="toggleButton"
              >
              EXTRICATION
              </button>
              {toggleExtrication && (
                <>
                  <br />
                  <StyledBoldText>Level: {patient.extricatedLevel}</StyledBoldText>
                  <StyledBoldText>Address: {patient.foundStreetAddress}</StyledBoldText>
                  <StyledBoldText>Position: {patient.positionInStructure}</StyledBoldText>
                </>
              )}
            </StyledExtricationSection>
          </StyledSection>

          {/* HANDOVER */}
          <StyledSection>
            <StyledHandoverSection>
              <button
                onClick={() => setToggleHandover(!toggleHandover)}
                className="toggleButton"
              >
                HANDOVER
              </button>
              {toggleHandover && (
                <>
                  <br />
                  <StyledBoldText>To: {patient.handover}</StyledBoldText>
                  <StyledBoldText>Contact: {patient.handoverTo}</StyledBoldText>
                </>
              )}
            </StyledHandoverSection>
          </StyledSection>

          {/* FORENSICS */}
          <StyledSection>
            <StyledForensicsSection>
              <button
                onClick={() => setToggleForensics(!toggleForensics)}
                className="toggleButton"
              >
                FORENSICS
              </button>
              {toggleForensics && (
                <>
                  <br />
                  <StyledBoldText>Hair: {patient.hair}</StyledBoldText>
                  <StyledBoldText>Face: {patient.face}</StyledBoldText>
                  <StyledBoldText>Clothing: {patient.clothing}</StyledBoldText>
                  <StyledBoldText>Bodymarks: {patient.bodymarks}</StyledBoldText>
                </>
              )}
            </StyledForensicsSection>
          </StyledSection>

          <br />
          <StyledDeactivateButton onClick={deletePatient}>
            CLOSE CASE
          </StyledDeactivateButton>

          <StyledDate>
            {new Date(patient.timestamp).toLocaleString()}
          </StyledDate>

        </StyledPopupContentWrapper>
      </Popup>
    </Marker>
  );
};

const StyledStatus = styled.div`

  width: 100%;
  self-align: center;
  padding: 0.5rem;

  color: ${(props) => props.theme.buttonFontColor};
  font-size: 1.3rem;
  font-weight: 500;
  text-align: center;

  border: 1px solid ${(props) => props.theme.buttonFontColor};
  border-radius: ${(props) => props.theme.primaryBorderRadius};

`;

const StyledShortSign = styled.div`

  width: 100%;
  padding: 0.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border: 1px solid ${(props) => props.theme.buttonFontColor};
  border-radius: ${(props) => props.theme.primaryBorderRadius};

  opacity: 0.3;

`;

const StyledHint = styled.div`
  margin-top: 0.3rem;

  font-size: 0.8rem;
  font-weight: 300;
  text-align: center;
`;

const StyledVictimID = styled.div`
  font-size: 1.3rem;
  font-weight: 500;
`;

const StyledExtricationSection = styled.div`
  margin-top: 1rem;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledHandoverSection = styled.div`
  margin-top: 1rem;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledForensicsSection = styled.div`
  margin-top: 1rem;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default PatientMarker;

import { useState } from "react";
import { Marker, Popup } from "react-leaflet";
import {
  DeletePatientArgs,
  PatientSchema,
} from "../../../data/realm/schema/patient";

import useRealm from "../../../hooks/useRealm";
import { realmFunctionNames } from "../../../data/realm/functions";

import useMission from "../../../hooks/useMission";
import useMissionMap from "../../../hooks/useMissionMap";

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

import { useTranslation } from 'react-i18next';

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

  const { t } = useTranslation();

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
                {t("Patient.idhint")}
              </StyledHint>

            </StyledShortSign>

          </StyledSection>

          <StyledLocate>

            <StyledCoordinates>
              {patient.geoJSON.coordinates[0]}
              <br />
              {patient.geoJSON.coordinates[1]}
            </StyledCoordinates>

            <StyledBoldText>{t("Patient.adr")} {patient.foundStreetAddress}</StyledBoldText>
            <StyledBoldText>Worksite: AAA</StyledBoldText>
            <StyledBoldText>Team: GER-02</StyledBoldText>

          </StyledLocate>
          <br />
          <StyledSection>
            <StyledBoldText>{patient.agegroup} {t("Patient.years")}</StyledBoldText>
            <StyledBoldText>{patient.gender}</StyledBoldText>
          </StyledSection>

          <StyledBoldText>{t("Patient.condition")} {patient.condition}</StyledBoldText>
          <StyledBoldText>{t("Patient.injuries")} {patient.injury}</StyledBoldText>
          <br />
          <StyledStatus>{patient.status}</StyledStatus>

          {/* EXTRICATION */}
          <StyledSection>
            <StyledExtricationSection> 
              <button
                onClick={() => setToggleExtrication(!toggleExtrication)}
                className="toggleButton"
              >
                {t("Patient.extriction")}
              </button>
              {toggleExtrication && (
                <>
                  <br />
                  <StyledBoldText>{t("Patient.floor")} {patient.floorLevel}</StyledBoldText>
                  <StyledBoldText>{t("Patient.pos")} {patient.positionInStructure}</StyledBoldText>
                  <StyledBoldText>{t("Patient.level")} {patient.extricatedLevel}</StyledBoldText> 
                  <StyledBoldText>{t("Patient.time")} {patient.timeExtrication}</StyledBoldText>       
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
                {t("Patient.handover")} 
              </button>
              {toggleHandover && (
                <>
                  <br />
                  <StyledBoldText>{t("Patient.to")} {patient.handover}</StyledBoldText>
                  <StyledBoldText>{t("Patient.cont")} {patient.handoverTo}</StyledBoldText>
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
                {t("Patient.forensics")}
              </button>
              {toggleForensics && (
                <>
                  <br />
                  <StyledBoldText>{t("Patient.hair")}: {patient.hair}</StyledBoldText>
                  <StyledBoldText>{t("Patient.face")}: {patient.face}</StyledBoldText>
                  <StyledBoldText>{t("Patient.clothing")}: {patient.clothing}</StyledBoldText>
                  <StyledBoldText>{t("Patient.bodymarks")}: {patient.bodymarks}</StyledBoldText>
                </>
              )}
            </StyledForensicsSection>
          </StyledSection>

          {/* NOTES */}
          <br />
          <StyledSection>
            <StyledNotes>
              <StyledBoldText>{t("Patient.notes")}:<br />{patient.notes}</StyledBoldText>
            </StyledNotes>
          </StyledSection>

          <br />
          <StyledDeactivateButton onClick={deletePatient}>
            {t("Patient.close")}
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
min-width: 40vw;
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
  min-width: 40vw;
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

const StyledLocate = styled.div`
  witdh: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledExtricationSection = styled.div`
  margin-top: 1rem;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  button {
    font-weight: 800;
  }
`;

const StyledHandoverSection = styled.div`
  margin-top: 1rem;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  button {
    font-weight: 800;
  }
`;

const StyledForensicsSection = styled.div`
  margin-top: 1rem;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  button {
    font-weight: 800;
  }
`;

const StyledCoordinates = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  font-size: 0.7rem;
  font-weight: 300;
`;

const StyledNotes = styled.div`
  width: 100%;
  font-size: 0.8rem;
  font-weight: 500;
`;

export default PatientMarker;

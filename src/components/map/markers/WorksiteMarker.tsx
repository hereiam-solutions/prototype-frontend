import { useState } from "react";
import { Marker, Popup } from "react-leaflet";
import {
  DeleteWorksiteArgs,
  WorksiteSchema,
} from "../../../data/realm/schema/worksite";

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
import { RiLoginBoxFill } from "react-icons/ri";

import { useTranslation } from 'react-i18next';

type Props = {
  worksite: WorksiteSchema;
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
      <RiLoginBoxFill
        size={iconSize}
      />
    </StyledLocationMarker>
  </div>
);

const WorksiteIcon = divIcon({
  html: iconMarker,
  className: 'victim',
  iconAnchor: [0, 0],
});

const WorksiteMarker = ({ worksite }: Props) => {
  const { realm } = useRealm();
  const { activeMission } = useMission();
  const { reRenderBoolean, setReRenderBoolean } = useMissionMap();

  const deleteWorksite = async () => {
    if (activeMission) {
      const args: DeleteWorksiteArgs = {
        _id: worksite._id.toString(),
      };

      if (realm.currentUser) {
        // call the Realm function
        await realm.currentUser.callFunction(
          realmFunctionNames.deleteWorksite,
          args
        );
      }

      setReRenderBoolean(!reRenderBoolean);
    }
  };

  const [toggleStructure, setToggleStructure] = useState(true)
  const [togglePlanning, setTogglePlanning] = useState(false)
  const [toggleSituation, setToggleSituation] = useState(false)
  const [toggleRisks, setToggleRisks] = useState(false)

  const { t } = useTranslation();

  return (
    <Marker
      position={[
        worksite.geoJSON.coordinates[0],
        worksite.geoJSON.coordinates[1],
      ]}
      icon={WorksiteIcon}
    >
      <Popup>
        <StyledPopupContentWrapper>
          
          <StyledPopupHeading>Worksite</StyledPopupHeading>

          {/* include Identifier */}
          <StyledSection>

            <StyledShortSign>

              <StyledVictimID>
                {worksite.identifier}
              </StyledVictimID>

            </StyledShortSign>

          </StyledSection>

          <StyledLocate>

            <StyledCoordinates>
              {worksite.geoJSON.coordinates[0]}
              <br />
              {worksite.geoJSON.coordinates[1]}
            </StyledCoordinates>

            <StyledBoldText>{t("Worksite.address")} {worksite.address}</StyledBoldText>

          </StyledLocate>
          <br />
          <StyledSection>
            <StyledBoldText>{t("Worksite.boundaries")} {worksite.boundaries}</StyledBoldText>
          </StyledSection>

          {/* STRUCTURE */}
          <StyledSection>
            <StyledStructureSection> 
              <button
                onClick={() => setToggleStructure(!toggleStructure)}
                className="toggleButton"
              >
                {t("Worksite.structure")}
              </button>
              {toggleStructure && (
                <>
                  <br />
                  <StyledBoldText>{t("Worksite.constructiontype")} {worksite.constructionType}</StyledBoldText>
                  <StyledBoldText>{t("Worksite.buildinguse")} {worksite.buildingUse}</StyledBoldText>
                  <StyledBoldText>{t("Worksite.floorarea")} {worksite.floorArea}</StyledBoldText> 
                  <StyledBoldText>{t("Worksite.floornumber")} {worksite.floorNumber}</StyledBoldText> 
                  <StyledBoldText>{t("Worksite.basementnumber")} {worksite.basementNumber}</StyledBoldText>
                  <StyledBoldText>{t("Worksite.collapse")} {worksite.collapse}</StyledBoldText>
                  <StyledBoldText>{t("Worksite.damage")} {worksite.damage}</StyledBoldText>
                  <StyledBoldText>{t("Worksite.voids")} {worksite.voids}</StyledBoldText>
                  <StyledBoldText>{t("Worksite.triagelevel")} {worksite.worksiteTriageLevel}</StyledBoldText>
                </>
              )}
            </StyledStructureSection>
          </StyledSection>

          {/* PLANNING */}
          <StyledSection>
            <StyledPlanningSection>
              <button
                onClick={() => setTogglePlanning(!togglePlanning)}
                className="toggleButton"
              >
                {t("Worksite.planning")} 
              </button>
              {togglePlanning && (
                <>
                  <br />
                  <StyledBoldText>{t("Worksite.missingpersons")} {worksite.missingPersons}</StyledBoldText>
                  <StyledBoldText>{t("Worksite.confirmedlive")} {worksite.confirmedLive}</StyledBoldText>
                  <StyledBoldText>{t("Worksite.confirmedvictims")} {worksite.confirmedVictims}</StyledBoldText>
                  <StyledBoldText>{t("Worksite.needsressources")}</StyledBoldText>

                  <StyledBoldText>{t("Worksite.logisticalneed")}</StyledBoldText>
                  <StyledList>
                    {worksite.logisticalNeeds.map(
                      (logisticalNeed: string, index: number) => {
                        return (
                          <StyledListEntry key={index}>{logisticalNeed=""}</StyledListEntry>
                        );
                      }
                    )}
                  </StyledList>

                  <StyledBoldText>{t("Worksite.nextactionplan")}</StyledBoldText>
                  <StyledList>
                    {worksite.nextActionPlan.map(
                      (nextActionPlano: string, index: number) => {
                        return (
                          <StyledListEntry key={index}>{nextActionPlano = ""}</StyledListEntry>
                        );
                      }
                    )}
                  </StyledList>
                </>
              )}
            </StyledPlanningSection>
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

const StyledLocate = styled.div`
  witdh: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledStructureSection = styled.div`
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

const StyledPlanningSection = styled.div`
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

const StyledList = styled.ul`
  margin: 0;
  color: ${(props) => props.theme.primaryFontColor};
`;

const StyledListEntry = styled.li`
  color: ${(props) => props.theme.buttonFontColor};
  background-color: ${(props) => props.theme.buttonColor};

  margin-bottom: 0.3rem;
  padding: 0.2rem 0.6rem;

  font-weight: 500;

  list-style: none;
  display: inline-block;
  margin-right: 1rem;

  border-radius: 12px;
`;

export default WorksiteMarker;

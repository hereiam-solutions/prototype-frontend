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
import { RiLoginBoxLine } from "react-icons/ri";

import { useTranslation } from 'react-i18next';

type Props = {
  worksite: WorksiteSchema;
};

//customize logo
let iconSize = 30;
const StyledLocationMarker = styled.button`
 color: ${(props) => props.theme.alertColor};
`;
const iconMarker = renderToStaticMarkup(
  <div>
    <StyledLocationMarker>
      <RiLoginBoxLine
        size={iconSize}
      />
    </StyledLocationMarker>
  </div>
);

const WorksiteIcon = divIcon({
  html: iconMarker,
  className: 'worksite',
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
  const [toggleRisk, setToggleRisk] = useState(false)

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

          {/* SITUATION */}
          <StyledSection>
            <StyledSituationSection>
              <button
                onClick={() => setToggleSituation(!toggleSituation)}
                className="toggleButton"
              >
                {t("Patient.forensics")}
              </button>
              {toggleSituation && (
                <>
                  <br />
                  <StyledBoldText>{t("Worksite.operatingteams")}</StyledBoldText>
                  <StyledList>
                    {worksite.operatingTeams.map(
                      (operatingTeam: string, index: number) => {
                        return (
                          <StyledListEntry key={index}>{operatingTeam = ""}</StyledListEntry>
                        );
                      }
                    )}
                  </StyledList>
                  <StyledBoldText>{t("Worksite.operatinglevel")} {worksite.operatingLevel}</StyledBoldText>
                  <StyledBoldText>{t("Worksite.livevictims")} {worksite.liveVictimsExtricated}</StyledBoldText>
                  <StyledBoldText>{t("Worksite.deadvictims")} {worksite.deadVictimsRecovered}</StyledBoldText>
                  
                  <StyledBoldText>{t("Worksite.otheractivities")}</StyledBoldText>
                  <StyledList>
                    {worksite.otherOperationalActivities.map(
                      (otherOperationalActiviti: string, index: number) => {
                        return (
                          <StyledListEntry key={index}>{otherOperationalActiviti = ""}</StyledListEntry>
                        );
                      }
                    )}
                  </StyledList>

                  <StyledBoldText>{t("Worksite.worksitecontacts")}</StyledBoldText>
                  <StyledList>
                    {worksite.worksiteRelevantContacts.map(
                      (worksiteRelevantContact: string, index: number) => {
                        return (
                          <StyledListEntry key={index}>{worksiteRelevantContact = ""}</StyledListEntry>
                        );
                      }
                    )}
                  </StyledList>

                </>
              )}
            </StyledSituationSection>
          </StyledSection>

          {/* RISK */}
          <StyledSection>
            <StyledRiskSection>
              <button
                onClick={() => setToggleRisk(!toggleRisk)}
                className="toggleButton"
              >
                {t("Worksite.risk")}
              </button>
              {toggleRisk && (
                <>
                  <br />

                  <StyledBoldText>{t("Worksite.innerhazards")} {worksite.innerHazards}</StyledBoldText>
                  <StyledBoldText>{t("Worksite.unusualhazard")} {worksite.unusualHazards}</StyledBoldText>

                </>
              )}
            </StyledRiskSection>
          </StyledSection>

          {/* NOTES */}
          <br />
          <StyledSection>
            <StyledNotes>
              <StyledBoldText>{t("Worksite.notes")}:<br />{worksite.notice}</StyledBoldText>
            </StyledNotes>
          </StyledSection>

          <br />
          <StyledDeactivateButton onClick={deleteWorksite}>
            {t("Worksite.close")}
          </StyledDeactivateButton>

          <StyledDate>
            {new Date(worksite.timestamp).toLocaleString()}
          </StyledDate>

        </StyledPopupContentWrapper>
      </Popup>
    </Marker>
  );
};

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

const StyledSituationSection = styled.div`
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

const StyledRiskSection = styled.div`
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

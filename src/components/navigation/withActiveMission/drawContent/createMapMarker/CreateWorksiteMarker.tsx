import { useState } from "react";

// type imports
import { realmFunctionNames } from "../../../../../data/realm/functions";

// hook imports
import useCreateMarker from "../../../../../hooks/useCreateMarker";
import useMission from "../../../../../hooks/useMission";
import useRealm from "../../../../../hooks/useRealm";
import useMissionMap from "../../../../../hooks/useMissionMap";
import useNavigation from "../../../../../hooks/useNavigation";

import {
  CreateWorksiteArgs,
  constructionTypes,
  buildingUses,
  collapses,
  operatingLevels,
  voids,
  worksiteTriageLevels,
  innerHazards,
  
} from "../../../../../data/realm/schema/worksite";

import SingleDropdown from "../../../ui/SingleDropdown";

import { useTranslation } from 'react-i18next';

import styled from "styled-components";

const CreatePatientMarker = () => {
  const { realm } = useRealm();
  const { createMarkerLocation: location } = useCreateMarker();
  const { activeMission } = useMission();
  const { setIsDrawOpen } = useNavigation();
  const { reRenderBoolean, setReRenderBoolean } = useMissionMap();

  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async () => {
    try {

      if (activeMission) {
        const args: CreateWorksiteArgs = {
          
          address: addressValue,
          boundaries: boundariesValue,
          constructionType: selectedConstructionType as constructionTypes,
          buildingUse: selectedBuildingUse as buildingUses,
          floorArea: floorAreaValue,
          floorNumber: floorNumberValue,
          basementNumber: basementNumberValue,
          collapse: selectedCollapse as collapses,
          damage: damageValue,
          voids: selectedVoid as voids,
          operatingTeams: operatingTeamsValue,
          operatingLevel: selectedOperatingLevel as operatingLevels,
          worksiteTriageLevel: selectedWorksiteTriageLevel as worksiteTriageLevels,
          missingPersons: missingPersonsValue,
          confirmedLive: confirmedLiveValue,
          confirmedVictims: confirmedVictimsValue,
          needsMedical: needsMedicalValue,
          needsFirefighting: needsFirefightingValue,
          needsDecon: needsDeconValue,
          needsPumping: needsPumpingValue,
          needsDogSearch: needsDogSearchValue,
          needsTechnicalSearch: needsTechnicalSearchValue,
          needsShoring: needsShoringValue,
          needsBreaking: needsBreakingValue,
          needsLifting: needsLiftingValue,
          needsRoping: needsRopingValue,
          liveVictimsExtricated: liveVictimsExtricatedValue,
          deadVictimsRecovered: deadVictimsRecoveredValue,
          otherOperationalActivities: otherOperationalActivitiesValue,
          logisticalNeeds: logisticalNeedsValue,
          nextActionPlan: nextActionPlanValue,
          worksiteRelevantContacts: worksiteRelevantContactsValue,
          hasHazmat: hasHazmatValue,
          innerHazards: selectedInnerHazards as innerHazards,
          unusualHazards: unusualHazardsValue,
          notice: noticeValue,
          mission: activeMission._id.toString(),
          geoJSON: { type: "Point", coordinates: location },
        };

        setLoading(true);

        if (realm.currentUser) {
          // call the Realm function
          await realm.currentUser.callFunction(
            realmFunctionNames.createWorksite,
            args
          );
        }

        setLoading(false);
        setReRenderBoolean(!reRenderBoolean);
        setIsDrawOpen(false);
      }
    } catch (e) {
      console.log(
        "There has been an error while calling the Realm custom function called:",
        realmFunctionNames.createWorksite,
        "Error:",
        e
      );
    }
  };

  // address
  const [addressValue, setAddressValue] = useState<string>("");

  const handleAddressChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setAddressValue(event.currentTarget.value);
  };

  // boundaries
  const [boundariesValue, setBoundariesValue] = useState<string>("");

  const handleBoundariesChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setBoundariesValue(event.currentTarget.value);
  };

  // constructionType
  const [selectedConstructionType, setSelectedConstructionType] = useState<string>(
    constructionTypes.CONCRETECONSTRUCTION
  );

  const handleConstructionTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedConstructionType(e.currentTarget.value);
  };

  // buildingUse
  const [selectedBuildingUse, setSelectedBuildingUse] = useState<string>(
    buildingUses.LIVING
  );

  const handleBuildingUseChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedBuildingUse(e.currentTarget.value);
  };

  // floorArea
  const [floorAreaValue, setFloorAreaValue] = useState<string>("");

  const handleFloorAreaChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFloorAreaValue(event.currentTarget.value);
  };

  // floorNumber
  const [floorNumberValue, setFloorNumberValue] = useState<string>("");

  const handleFloorNumberChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFloorNumberValue(event.currentTarget.value);
  };

  // basementNumber
  const [basementNumberValue, setBasementNumberValue] = useState<string>("");

  const handleBasementNumberChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setBasementNumberValue(event.currentTarget.value);
  };

  // collapse
  const [selectedCollapse, setSelectedCollapse] = useState<string>(
    collapses.OUTSPREAD
  );

  const handleCollapseChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCollapse(e.currentTarget.value);
  };

  // damage
  const [damageValue, setDamageValue] = useState<string>("");

  const handleDamageChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDamageValue(event.currentTarget.value);
  };

  // voids
  const [selectedVoid, setSelectedVoid] = useState<string>(
    voids.SMALL
  );

  const handleVoidsChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedVoid(e.currentTarget.value);
  };

  // operatingTeams
  const [operatingTeamValue, setOperatingTeamValue] = useState<string>("");
  const [operatingTeamsValue, setOperatingTeamsValue] = useState<string[]>([]);

  const handleOperatingTeamChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setOperatingTeamValue(event.currentTarget.value);
  };

  const handleOperatingTeamsChange = (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (operatingTeamValue) {
      const operatingTeams: string[] = operatingTeamsValue;
      operatingTeams.push(operatingTeamValue);

      setOperatingTeamsValue(operatingTeams);
      setOperatingTeamValue("");
    }
  };

  const handleRemoveObject = (operatingTeamToBeRemoved: string) => {
    const operatingTeams: string[] = operatingTeamsValue;

    const reducedOperatingTeams = operatingTeams.filter(
      (operatingTeam: string) => operatingTeam !== operatingTeamToBeRemoved
    );

    setOperatingTeamsValue(reducedOperatingTeams);
  };

  // operatingLevel
  const [selectedOperatingLevel, setSelectedOperatingLevel] = useState<string>(
    operatingLevels.ASR3
  );

  const handleOperatingLevelChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOperatingLevel(e.currentTarget.value);
  };

  // worksiteTriageLevel
  const [selectedWorksiteTriageLevel, setSelectedWorksiteTriageLevel] = useState<string>(
    worksiteTriageLevels.B
  );

  const handleWorksiteTriageLevelChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedWorksiteTriageLevel(e.currentTarget.value);
  };

  //missingPersons
  const [missingPersonsValue, setMissingPersonsValue] = useState<string>("");

  const handleMissingPersonsChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setMissingPersonsValue(event.currentTarget.value);
  };

  // confirmedLive
  const [confirmedLiveValue, setConfirmedLiveValue] = useState<string>("");

  const handleConfirmedLiveChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setConfirmedLiveValue(event.currentTarget.value);
  };

  // confirmedVictims
  const [confirmedVictimsValue, setConfirmedVictimsValue] = useState<string>("");

  const handleConfirmedVictimsChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setConfirmedVictimsValue(event.currentTarget.value);
  };

  // needsMedical
  const [needsMedicalValue, setNeedsMedicalValue] = useState(false);

  const handleNeedsMedicalChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNeedsMedicalValue(e.target.checked);
  };

  // needsFirefighting
  const [needsFirefightingValue, setNeedsFirefightingValue] = useState(false);

  const handleNeedsFirefightingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNeedsFirefightingValue(e.target.checked);
  };

  // needsDecon
  const [needsDeconValue, setNeedsDeconValue] = useState(false);

  const handleNeedsDeconChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNeedsDeconValue(e.target.checked);
  };

  // needsPumping
  const [needsPumpingValue, setNeedsPumpingValue] = useState(false);

  const handleNeedsPumpingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNeedsPumpingValue(e.target.checked);
  };

  // needsDogSearch
  const [needsDogSearchValue, setNeedsDogSearchValue] = useState(false);

  const handleNeedsDogSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNeedsDogSearchValue(e.target.checked);
  };

  // needsTechnicalSearch
  const [needsTechnicalSearchValue, setNeedsTechnicalSearchValue] = useState(false);

  const handleNeedsTechnicalSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNeedsTechnicalSearchValue(e.target.checked);
  };

  // needsShoring
  const [needsShoringValue, setNeedsShoringValue] = useState(false);

  const handleNeedsShoringChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNeedsShoringValue(e.target.checked);
  };

  // needsBreaking
  const [needsBreakingValue, setNeedsBreakingValue] = useState(false);

  const handleNeedsBreakingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNeedsBreakingValue(e.target.checked);
  };

  // needsLifting
  const [needsLiftingValue, setNeedsLiftingValue] = useState(false);

  const handleNeedsLiftingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNeedsLiftingValue(e.target.checked);
  };

  // needsRoping
  const [needsRopingValue, setNeedsRopingValue] = useState(false);

  const handleNeedsRopingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNeedsRopingValue(e.target.checked);
  };

  // liveVictimsExtricated
  const [liveVictimsExtricatedValue, setLiveVictimsExtricatedValue] = useState<string>("");

  const handleLiveVictimsExtricatedChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setLiveVictimsExtricatedValue(event.currentTarget.value);
  };

  // deadVictimsRecovered
  const [deadVictimsRecoveredValue, setDeadVictimsRecoveredValue] = useState<string>("");

  const handleDeadVictimsRecoveredChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDeadVictimsRecoveredValue(event.currentTarget.value);
  };

  // otherOperationalActivities
  const [otherOperationalActivitiValue, setOtherOperationalActivitiValue] = useState<string>("");
  const [otherOperationalActivitiesValue, setOtherOperationalActivitiesValue] = useState<string[]>([]);

  const handleOtherOperationalActivitiChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setOtherOperationalActivitiValue(event.currentTarget.value);
  };

  const handleOtherOperationalActivitiesChange = (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (otherOperationalActivitiValue) {
      const otherOperationalActivities: string[] = otherOperationalActivitiesValue;
      otherOperationalActivities.push(otherOperationalActivitiValue);

      setOtherOperationalActivitiesValue(otherOperationalActivities);
      setOtherOperationalActivitiValue("");
    }
  };

  const handleRemoveActiviti = (otherOperationalActivitiToBeRemoved: string) => {
    const otherOperationalActivities: string[] = otherOperationalActivitiesValue;

    const reducedOtherOperationalActivities = otherOperationalActivities.filter(
      (otherOperationalActiviti: string) => otherOperationalActiviti !== otherOperationalActivitiToBeRemoved
    );

    setOtherOperationalActivitiesValue(reducedOtherOperationalActivities);
  };

  // logisticalNeeds
  const [logisticalNeedValue, setLogisticalNeedValue] = useState<string>("");
  const [logisticalNeedsValue, setLogisticalNeedsValue] = useState<string[]>([]);

  const handlelogisticalNeedChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setLogisticalNeedValue(event.currentTarget.value);
  };

  const handleLogisticalNeedsChange = (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (logisticalNeedValue) {
      const logisticalNeeds: string[] = logisticalNeedsValue;
      logisticalNeeds.push(logisticalNeedValue);

      setLogisticalNeedsValue(logisticalNeeds);
      setLogisticalNeedValue("");
    }
  };

  const handleRemoveNeeds = (logisticalNeedToBeRemoved: string) => {
    const logisticalNeeds: string[] = logisticalNeedsValue;

    const reducedLogisticalNeeds = logisticalNeeds.filter(
      (logisticalNeed: string) => logisticalNeed !== logisticalNeedToBeRemoved
    );

    setLogisticalNeedsValue(reducedLogisticalNeeds);
  };

  // nextActionPlan
  const [nextActionPlanoValue, setNextActionPlanoValue] = useState<string>("");
  const [nextActionPlanValue, setNextActionPlanValue] = useState<string[]>([]);

  const handleNextActionPlanoChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setNextActionPlanoValue(event.currentTarget.value);
  };

  const handleNextActionPlanChange = (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (nextActionPlanoValue) {
      const nextActionPlan: string[] = nextActionPlanValue;
      nextActionPlan.push(nextActionPlanoValue);

      setNextActionPlanValue(nextActionPlan);
      setNextActionPlanoValue("");
    }
  };

  const handleRemovePlans = (nextActionPlanoToBeRemoved: string) => {
    const nextActionPlan: string[] = nextActionPlanValue;

    const reducedNextActionPlan = nextActionPlan.filter(
      (nextActionPlano: string) => nextActionPlano !== nextActionPlanoToBeRemoved
    );

    setNextActionPlanValue(reducedNextActionPlan);
  };

  // worksiteRelevantContacts
  const [worksiteRelevantContactValue, setWorksiteRelevantContactValue] = useState<string>("");
  const [worksiteRelevantContactsValue, setWorksiteRelevantContactsValue] = useState<string[]>([]);

  const handleWorksiteRelevantContactChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setWorksiteRelevantContactValue(event.currentTarget.value);
  };

  const handleWorksiteRelevantContactsChange = (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (worksiteRelevantContactValue) {
      const worksiteRelevantContacts: string[] = worksiteRelevantContactsValue;
      worksiteRelevantContacts.push(worksiteRelevantContactValue);

      setWorksiteRelevantContactsValue(worksiteRelevantContacts);
      setWorksiteRelevantContactValue("");
    }
  };

  const handleRemoveContacts = (worksiteRelevantContactToBeRemoved: string) => {
    const worksiteRelevantContacts: string[] = worksiteRelevantContactsValue;

    const reducedWorksiteRelevantContacts = worksiteRelevantContacts.filter(
      (worksiteRelevantContact: string) => worksiteRelevantContact !== worksiteRelevantContactToBeRemoved
    );

    setWorksiteRelevantContactsValue(reducedWorksiteRelevantContacts);
  };

  // hasHazmat
  const [hasHazmatValue, setHasHazmatValue] = useState(false);

  const handleHasHazmatChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHasHazmatValue(e.target.checked);
  };

  // innerHazards
  const [selectedInnerHazards, setSelectedInnerHazards] = useState<string>(
    innerHazards.ASBESTOS
  );

  const handleInnerHazardsChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedInnerHazards(e.currentTarget.value);
  };

  // unusualHazards
  const [unusualHazardsValue, setUnusualHazardsValue] = useState<string>("");

  const handleUnusualHazardsChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setUnusualHazardsValue(event.currentTarget.value);
  };

  // notice
  const [noticeValue, setNoticeValue] = useState<string>("");

  const handleNoticeChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setNoticeValue(event.currentTarget.value);
  };

  // toggle areas

  const [toggleExtrication, setToggleExtrication] = useState(false)
  const [toggleHandover, setToggleHandover] = useState(false)
  const [toggleForensics, setToggleForensics] = useState(false)

  const { t } = useTranslation();

  return (
    <StyledDrawWrapper>
      <StyledDrawHeader>
        <StyledHeading>{ t("Patient.headline")}</StyledHeading>
      </StyledDrawHeader>

      <StyledContentWrapper>

        <StyledSectionWrapper>
          <StyledSecondaryHeading>{t("Patient.age")}</StyledSecondaryHeading>

          <SingleDropdown
            options={ageGroupDropwdownOptions}
            value={selectedAgeGroup}
            label={""}
            onChange={handleAgeGroupChange}
          />
        </StyledSectionWrapper>

        <StyledSectionWrapper>
          <StyledSecondaryHeading>{t("Patient.gender")}</StyledSecondaryHeading>

          <SingleDropdown
            options={genderDropwdownOptions}
            value={selectedGender}
            label={""}
            onChange={handleGenderChange}
          />
        </StyledSectionWrapper>

        <StyledSectionWrapper>
          <StyledSecondaryHeading>{t("Patient.condition")}</StyledSecondaryHeading>

          <SingleDropdown
            options={conditionDropwdownOptions}
            value={selectedCondition}
            label={""}
            onChange={handleConditionChange}
          />
        </StyledSectionWrapper>

        <StyledSectionWrapper>
          <StyledSecondaryHeading>{t("Patient.injuries")}</StyledSecondaryHeading>

          <SingleDropdown
            options={injuriesDropwdownOptions}
            value={selectedInjury}
            label={""}
            onChange={handleInjuryChange}
          />
        </StyledSectionWrapper>

        <StyledSectionWrapper>
          <StyledSecondaryHeading>{t("Patient.status")}</StyledSecondaryHeading>

          <SingleDropdown
            options={statusDropwdownOptions}
            value={selectedStatus}
            label={""}
            onChange={handleStatusChange}
          />
        </StyledSectionWrapper>

        {/* EXTRICATION */}
        <br />
        <button
          onClick={() => setToggleExtrication(!toggleExtrication)}
          className="toggleButton"
        >
          {t("Patient.extriction")}
        </button>
        {toggleExtrication && (
          <>
            <StyledSectionWrapper>
              <StyledSecondaryHeading>{t("Patient.extrictlevel")}</StyledSecondaryHeading>
              <StyledHint>{t("Patient.extrictlevelhint")}</StyledHint>
              <SingleDropdown
                options={extricatedLevelDropwdownOptions}
                value={selectedLevel}
                label={""}
                onChange={handleLevelChange}
              />
            </StyledSectionWrapper>

            <StyledSectionWrapper>

              <StyledSecondaryHeading>{t("Patient.floor")}</StyledSecondaryHeading>
              <StyledHint>{t("Patient.floorhint")}</StyledHint>
              <StyledInput
                type="text"
                value={floorValue}
                onChange={handleFloorChange}
              />
            </StyledSectionWrapper>

            <StyledSectionWrapper>

              <StyledSecondaryHeading>{t("Patient.position")}</StyledSecondaryHeading>
              <StyledHint>{t("Patient.positionhint")}</StyledHint>
              <StyledInput
                type="text"
                value={positionValue}
                onChange={handlePositionChange}
              />
            </StyledSectionWrapper>

            <StyledSectionWrapper>

              <StyledSecondaryHeading>{t("Patient.time")}</StyledSecondaryHeading>
              <StyledHint>{t("Patient.timehint")}</StyledHint>
              <StyledInput
                type="text"
                value={timeValue}
                onChange={handleTimeChange}
              />
            </StyledSectionWrapper>

            <StyledSectionWrapper>
              <StyledSecondaryHeading>{t("Patient.address")}</StyledSecondaryHeading>
              <StyledHint>{t("Patient.addresshint")}</StyledHint>
              <StyledInput
                type="text"
                value={foundValue}
                onChange={handleFoundChange}
              />
            </StyledSectionWrapper>
          </>
        )}

        {/* HANDOVER */}
        <br />
        <button
          onClick={() => setToggleHandover(!toggleHandover)}
          className="toggleButton"
        >
          {t("Patient.handover")}
        </button>
        {toggleHandover && (
          <>
            <StyledSectionWrapper>
              <StyledSecondaryHeading>{t("Patient.handoverto")}</StyledSecondaryHeading>
              <StyledHint>{t("Patient.handovertohint")}</StyledHint>
              <SingleDropdown
                options={handoverDropwdownOptions}
                value={selectedHandover}
                label={""}
                onChange={handleHandoverChange}
              />
            </StyledSectionWrapper>
            <br />
            <StyledSectionWrapper>
              <StyledSecondaryHeading>{t("Patient.handovercontact")}</StyledSecondaryHeading>
              <StyledHint>{t("Patient.handovercontacthint")}</StyledHint>
              <StyledInput
                type="text"
                value={handoverToValue}
                onChange={handleHandoverToChange}
              />
            </StyledSectionWrapper>
          </>
        )}

        {/* FORENSICS */}
        <br />
        <button
          onClick={() => setToggleForensics(!toggleForensics)}
          className="toggleButton"
        >
          {t("Patient.forensics")}
        </button>
        {toggleForensics && (
          <>
            <StyledSectionWrapper>
              <StyledSecondaryHeading>{t("Patient.hair")}</StyledSecondaryHeading>
              <StyledHint>{t("Patient.hairhint")}</StyledHint>
              <StyledInput
                type="text"
                value={hairValue}
                onChange={handleHairChange}
              />
            </StyledSectionWrapper>

            <StyledSectionWrapper>
              <StyledSecondaryHeading>{t("Patient.face")}</StyledSecondaryHeading>
              <StyledHint>{t("Patient.facehint")}</StyledHint>
              <StyledInput
                type="text"
                value={faceValue}
                onChange={handleFaceChange}
              />
            </StyledSectionWrapper>

            <StyledSectionWrapper>
              <StyledSecondaryHeading>{t("Patient.clothing")}</StyledSecondaryHeading>
              <StyledHint>{t("Patient.clothinghint")}</StyledHint>
              <StyledInput
                type="text"
                value={clothingValue}
                onChange={handleClothingChange}
              />
            </StyledSectionWrapper>

            <StyledSectionWrapper>
              <StyledSecondaryHeading>{t("Patient.bodymarks")}</StyledSecondaryHeading>
              <StyledHint>{t("Patient.bodymarkshint")}</StyledHint>
              <StyledInput
                type="text"
                value={bodymarksValue}
                onChange={handleBodymarksChange}
              />
            </StyledSectionWrapper>

          </>
        )}

        (/* outside toggle */)
        <br />
        <StyledSectionWrapper>
          <StyledSecondaryHeading>{t("Patient.notes")}</StyledSecondaryHeading>
          <StyledHint>{t("Patient.noteshint")}</StyledHint>
          <StyledInput
            value={notesValue}
            onChange={handleNotesChange}
          />
        </StyledSectionWrapper>
        
        {/* SUBMIT */}
        <br />
        <StyledButton onClick={handleSubmit}>
          {t(loading ? "loading..." : "Submit Victim")}
        </StyledButton>

      </StyledContentWrapper>
    </StyledDrawWrapper>
  );
};

const StyledDrawWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;

  background: ${(props) => props.theme.primaryBackgroundColor};
`;

const StyledDrawHeader = styled.div`
  padding-bottom: 1rem;
  margin-bottom: 0.8rem;

  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledHeading = styled.p`
  font-weight: 500;
  font-size: 1.5rem;
  color: ${(props) => props.theme.primaryFontColor};
`;

const StyledContentWrapper = styled.div`
  /* padding-top: 8rem; */
  width: 100%;
  background: ${(props) => props.theme.primaryBackgroundColor};

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.5rem;

  overflow-y: scroll;
`;

const StyledSectionWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
`;

const StyledSecondaryHeading = styled.p`
  font-weight: 500;
  font-size: 1.4rem;
  color: ${(props) => props.theme.primaryFontColor};
`;

// styled components for this component only
const StyledButton = styled.button`
  width: 60%;
  height: 3rem;

  margin-top: 0.5rem;
  margin-bottom: 4rem;

  font-weight: 700;
  text-align: center;

  align-self: center;

  color: ${(props) => props.theme.buttonFontColor};
  background-color: ${(props) => props.theme.buttonColor};

  border: 1px solid ${(props) => props.theme.formSubmitBorderColor};
  border-radius: ${(props) => props.theme.inputBorderRadius};
`;

const StyledInput = styled.input`
  background-color: ${(props) => props.theme.primaryBackgroundColor};
  color: ${(props) => props.theme.formFieldColor};

  border: 1px solid ${(props) => props.theme.formFieldColor};
  border-radius: ${(props) => props.theme.inputBorderRadius};

  font-size: 1rem;
  line-height: 1.5rem;
  font-style: normal;
  font-weight: 500;

  width: 100%;
  /* margin-top: 0.6rem; */
  padding: 0.75rem;
`;

const StyledHint = styled.div`
margin-top: -0.4rem;
font-size: 0.8rem;
font-weight: 300;
`;

// dropdown options
const ageGroupDropwdownOptions = [
  { label: ageGroups.BABY, value: ageGroups.BABY },
  { label: ageGroups.PRESCHOOLER, value: ageGroups.PRESCHOOLER },
  { label: ageGroups.CHILD, value: ageGroups.CHILD },
  { label: ageGroups.ADOLESCENT, value: ageGroups.ADOLESCENT },
  { label: ageGroups.ADULT, value: ageGroups.ADULT },
  { label: ageGroups.ELDERLY, value: ageGroups.ELDERLY },
];

const genderDropwdownOptions = [
  { label: genders.MALE, value: genders.MALE },
  { label: genders.FEMALE, value: genders.FEMALE },
  { label: genders.DIVERSE, value: genders.DIVERSE },
];

const conditionDropwdownOptions = [
  { label: conditions.LIVE, value: conditions.LIVE },
  { label: conditions.DECEASED, value: conditions.DECEASED },
];

const injuriesDropwdownOptions = [
  { label: injuries.NONE, value: injuries.NONE },
  { label: injuries.STABLE, value: injuries.STABLE },
  { label: injuries.CRITICAL, value: injuries.CRITICAL },
];

const statusDropwdownOptions = [
  { label: statuses.IMMEDIATE, value: statuses.IMMEDIATE },
  { label: statuses.DELAYED, value: statuses.DELAYED },
  { label: statuses.MINIMAL, value: statuses.MINIMAL },
  { label: statuses.EXPECTANT, value: statuses.EXPECTANT },
  { label: statuses.LOST, value: statuses.LOST },
  { label: statuses.AFFECTED, value: statuses.AFFECTED },
];

const extricatedLevelDropwdownOptions = [
  { label: extricatedLevels.ASSISTED, value: extricatedLevels.ASSISTED },
  { label: extricatedLevels.DEBRIS, value: extricatedLevels.DEBRIS },
  { label: extricatedLevels.ASR3, value: extricatedLevels.ASR3 },
  { label: extricatedLevels.ASR4, value: extricatedLevels.ASR4 },
  { label: extricatedLevels.ASR5, value: extricatedLevels.ASR5 },
];

const handoverDropwdownOptions = [
  { label: handovers.FAMILY, value: handovers.FAMILY },
  { label: handovers.LOCALS, value: handovers.LOCALS },
  { label: handovers.AMBULANCE, value: handovers.AMBULANCE },
  { label: handovers.MEDICAL, value: handovers.MEDICAL },
  { label: handovers.FIELD, value: handovers.FIELD },
  { label: handovers.HELICOPTER, value: handovers.HELICOPTER },
  { label: handovers.HOSPITAL, value: handovers.HOSPITAL },
  { label: handovers.MORTUARY, value: handovers.MORTUARY },
  { label: handovers.OTHER, value: handovers.OTHER },
];

export default CreatePatientMarker;

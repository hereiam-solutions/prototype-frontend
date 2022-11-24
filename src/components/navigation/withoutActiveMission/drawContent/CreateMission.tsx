/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import styled from "styled-components";
import SingleDropdown from "../../ui/SingleDropdown";

// type / enum imports
import {
  CreateMissionArgs,
  MissionSchema,
  RiskLevel,
  SecurityLevel,
} from "../../../../data/realm/schema/mission";
import { disasterTypesEnum } from "../../../map/mapTypes";

import useMission from "../../../../hooks/useMission";

import useRealm from "../../../../hooks/useRealm";
import { realmFunctionNames } from "../../../../data/realm/functions";

import { useNavigate } from "react-router-dom";
import useNavigation from "../../../../hooks/useNavigation";

import useTheme from "../../../../hooks/useTheme";
import { ThemeEnum } from "../../../../context/ThemeContext";

import useModal from "../../../../hooks/useModal";

const CreateMission = () => {
  // contexts
  const navigate = useNavigate();
  const { realm } = useRealm();
  const { setActiveMission } = useMission();
  const { polygonDrawingCoordinates } = useMission();
  const { setIsDrawOpen } = useNavigation();
  const { currentTheme } = useTheme();
  const { setIsModalActive, setModalContent } = useModal();

  // request for mission creation
  const handleMissionSubmit = async () => {
    try {
      // handle empty population value case
      let estimatedPopulationValue = 0;
      if (populationValue !== "") {
        estimatedPopulationValue = parseInt(populationValue);
      }

      const args: CreateMissionArgs = {
        identifier: identifierValue,
        disasterType: selectedDisasterType,
        objectives: objectivesValue,
        roleAndMandates: rolesValue,
        threatsAndRisks: risksValue,
        riskLevel: selectedRiskLevel,
        estimatedPopulation: estimatedPopulationValue,
        securityLevel: selectedSecurityLevel,
        evacuationRoute: routeValue,
        additionalEvacuationSignal: signalValue,
        safeHaven: havenValue,
        nextHospital: hospitalValue,
        nextVeterinary: veterinaryValue,      
        start_of_mission: startingTimeISOStringValue,
        end_of_mission: new Date().toISOString(),
        geoJSON: { type: "Polygon", coordinates: polygonDrawingCoordinates }, 
      };

      // call the Realm function
      if (realm.currentUser) {
        await realm.currentUser.refreshCustomData();

        await realm.currentUser.callFunction(
          realmFunctionNames.createMission,
          args
        );

        await realm.currentUser.refreshCustomData();

        const newActiveMission = await realm.currentUser.callFunction(
          realmFunctionNames.getCurrentMission
        );

        setActiveMission(newActiveMission as MissionSchema);

        setModalContent("Mission created and set as your active Mission!");

        setTimeout(() => {
          setIsModalActive(false);
        }, 5000);

        setIsModalActive(true);
      }

      setIsDrawOpen(false);
      navigate("/mission");
    } catch (e) {
      console.log(
        "There has been an error while calling the Realm custom function called:",
        realmFunctionNames.createMission,
        "Error:",
        e
      );

      navigate("/");
    }
  };

  // identifier
  const [identifierValue, setIdentifierValue] = useState<string>("");

  const handleIdentifierChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setIdentifierValue(event.currentTarget.value);
  };

  // disastertype
  const [selectedDisasterType, setSelectedDisasterType] = useState<string>(
    disasterTypesEnum.DROUGHT
  );

  const handleDisasterTypeChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedDisasterType(e.currentTarget.value);
  };

  // objectives
  const [objectiveValue, setObjectiveValue] = useState<string>("");
  const [objectivesValue, setObjectivesValue] = useState<string[]>([]);

  const handleObjectiveChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setObjectiveValue(event.currentTarget.value);
  };

  const handleObjectivesChange = (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (objectiveValue) {
      const objectives: string[] = objectivesValue;
      objectives.push(objectiveValue);

      setObjectivesValue(objectives);
      setObjectiveValue("");
    }
  };

  const handleRemoveObject = (objectiveToBeRemoved: string) => {
    const objectives: string[] = objectivesValue;

    const reducedObjectives = objectives.filter(
      (objective: string) => objective !== objectiveToBeRemoved
    );

    setObjectivesValue(reducedObjectives);
  };

  // Role and Mandates
  const [roleValue, setRoleValue] = useState<string>("");
  const [rolesValue, setRolesValue] = useState<string[]>([]);

  const handleRoleChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRoleValue(event.currentTarget.value);
  };

  const handleRolesChange = (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (roleValue) {
      const roles: string[] = rolesValue;
      roles.push(roleValue);

      setRolesValue(roles);
      setRoleValue("");
    }
  };

  const handleRemoveRole = (roleToBeRemoved: string) => {
    const roles: string[] = rolesValue;

    const reducedRoles = roles.filter(
      (role: string) => role !== roleToBeRemoved
    );

    setRolesValue(reducedRoles);
  };

  // Threats and Risks
  const [riskValue, setRiskValue] = useState<string>("");
  const [risksValue, setRisksValue] = useState<string[]>([]);

  const handleRiskChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRiskValue(event.currentTarget.value);
  };

  const handleRisksChange = (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (riskValue) {
      const risks: string[] = risksValue;
      risks.push(riskValue);

      setRisksValue(risks);
      setRiskValue("");
    }
  };

  const handleRemoveRisk = (riskToBeRemoved: string) => {
    const risks: string[] = risksValue;

    const reducedRisks = risks.filter(
      (risk: string) => risk !== riskToBeRemoved
    );

    setRolesValue(reducedRisks);
  };

  // risk level
  const [selectedRiskLevel, setSelectedRiskLevel] = useState<string>(
    RiskLevel.ONE
  );

  const handleRiskLevelChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedRiskLevel(e.currentTarget.value);
  };

  // estimated population
  const [populationValue, setPopulationValue] = useState<string>("");

  const handlePopulationChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPopulationValue(event.currentTarget.value);
  };

  // security level
  const [selectedSecurityLevel, setSelectedSecurityLevel] = useState<string>(
    SecurityLevel.ZERO
  );

  const handleSecurityLevelChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedSecurityLevel(e.currentTarget.value);
  };

  // evacuationRoute
  const [routeValue, setRouteValue] = useState<string>("");

  const handleRouteChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRouteValue(event.currentTarget.value);
  };

  // additionalEvacuationSignal
  const [signalValue, setSignalValue] = useState<string>("");

  const handleSignalChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSignalValue(event.currentTarget.value);
  };

  // safeHaven
  const [havenValue, setHavenValue] = useState<string>("");

  const handleHavenChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setHavenValue(event.currentTarget.value);
  };

  // nextHospital
  const [hospitalValue, setHospitalValue] = useState<string>("");

  const handleHospitalChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setHospitalValue(event.currentTarget.value);
  };

  // nextVeterinary
  const [veterinaryValue, setVeterinaryValue] = useState<string>("");

  const handleVeterinaryChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setVeterinaryValue(event.currentTarget.value);
  };

  // starting time
  const [startingTimeValue, setStartingTimeValue] = useState<string>("");
  const [startingTimeISOStringValue, setStartingTimeISOStringValue] =
    useState<string>("");

  const handleStartingTimeChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    let start = event.currentTarget.value;
    const date = new Date(start);
    const isoStart = date.toISOString();

    setStartingTimeValue(start);
    setStartingTimeISOStringValue(isoStart);
  };

  const [togglePlaning, setTogglePlaning] = useState(false)
  const [toggleSecurity, setToggleSecurity] = useState(false)
  const [toggleDeployed, setToggleDeployed] = useState(false)
  const [toggle360, setToggle360] = useState(false)

  return (
    <StyledDrawWrapper>
      <StyledDrawHeader>
        <StyledHeading>Define Mission</StyledHeading>
      </StyledDrawHeader>

      <StyledContentWrapper>

        {/* Identifier */}
        <StyledSectionWrapper>
          <StyledSecondaryHeading>Mission name</StyledSecondaryHeading>
          <StyledInput
            value={identifierValue}
            onChange={handleIdentifierChange}
            placeholder="Give this mission a meaningfull name..."
          />
        </StyledSectionWrapper>

        {/* Disaster Type */}
        <StyledSectionWrapper>
          <StyledSecondaryHeading>Disaster type</StyledSecondaryHeading>
          <StyledHint>Select the main disaster type for this mission.</StyledHint>
          <SingleDropdown
            options={disasterDropdownOptions}
            value={selectedDisasterType}
            label={""}
            onChange={handleDisasterTypeChange}
          />
        </StyledSectionWrapper>

        <br />
        {/* MISSION PLANING */}

        <button
          onClick={() => setTogglePlaning(!togglePlaning)}
          className="toggleButton"
        >
          MISSION PLANING
        </button>
        {togglePlaning && (
          <>
            {/* Objectives */}
            <StyledSectionWrapper>

              <StyledSecondaryHeading>Mission objectives</StyledSecondaryHeading>
              <StyledHint>Define the main objectives for this mission based on strategy.</StyledHint>

              <StyledList>
                {objectivesValue.map((objective: string, index: number) => {
                  return (
                    <StyledListEntry key={index}>
                      {objective}
                      <StyledObjectiveButton
                        onClick={() => handleRemoveObject(objective)}
                      >
                        X
                      </StyledObjectiveButton>
                    </StyledListEntry>
                  );
                })}
              </StyledList>

              <StyledForm onSubmit={handleObjectivesChange}>

                <StyledFormContentWrapper>
                  <StyledInput
                    value={objectiveValue}
                    onChange={handleObjectiveChange}
                  />
                  <StyledFormButton type="submit">+</StyledFormButton>
                </StyledFormContentWrapper>

              </StyledForm>

            </StyledSectionWrapper>

            {/* Roles and mandates */}
            <StyledSectionWrapper>

              <StyledSecondaryHeading>Role and Mandates</StyledSecondaryHeading>
              <StyledHint>Define the main role and mandates for this mission based on lema contract.</StyledHint>

              <StyledList>
                {rolesValue.map((role: string, index: number) => {
                  return (
                    <StyledListEntry key={index}>
                      {role}
                      <StyledObjectiveButton
                        onClick={() => handleRemoveObject(role)}
                      >
                        X
                      </StyledObjectiveButton>
                    </StyledListEntry>
                  );
                })}
              </StyledList>

              <StyledForm onSubmit={handleRolesChange}>

                <StyledFormContentWrapper>
                  <StyledInput
                    value={roleValue}
                    onChange={handleRoleChange}
                  />
                  <StyledFormButton type="submit">+</StyledFormButton>
                </StyledFormContentWrapper>

              </StyledForm>

            </StyledSectionWrapper>

            {/* Threats and Risks */}
            <StyledSectionWrapper>

              <StyledSecondaryHeading>Threats and risks</StyledSecondaryHeading>
              <StyledHint>Define the main threats and risks for this mission.</StyledHint>

              <StyledList>
                {risksValue.map((risk: string, index: number) => {
                  return (
                    <StyledListEntry key={index}>
                      {risk}
                      <StyledObjectiveButton
                        onClick={() => handleRemoveRisk(risk)}
                      >
                        X
                      </StyledObjectiveButton>
                    </StyledListEntry>
                  );
                })}
              </StyledList>

              <StyledForm onSubmit={handleRisksChange}>

                <StyledFormContentWrapper>
                  <StyledInput
                    value={riskValue}
                    onChange={handleRiskChange}
                  />
                  <StyledFormButton type="submit">+</StyledFormButton>
                </StyledFormContentWrapper>

              </StyledForm>

            </StyledSectionWrapper>

            {/* Risk Level */}
            <StyledSectionWrapper>
              <StyledSecondaryHeading>Risk level</StyledSecondaryHeading>
              <StyledHint>Set the initial risk level for this mission.</StyledHint>

              <SingleDropdown
                options={riskLevelDropdownOptions}
                value={selectedRiskLevel}
                label={""}
                onChange={handleRiskLevelChange}
              />
            </StyledSectionWrapper>

            {/* Estimated Population */}
            <StyledSectionWrapper>
              <StyledSecondaryHeading>Estimated affected population</StyledSecondaryHeading>
              <StyledHint>How many people may be infected by this disaster?</StyledHint>

              <StyledInput
                type="number"
                value={populationValue}
                onChange={handlePopulationChange}
              />
            </StyledSectionWrapper>
          </>
        )}

        {/* MISSION SECURITY */}

        <button
          onClick={() => setToggleSecurity(!toggleSecurity)}
          className="toggleButton"
        >
          MISSION SECURITY
        </button>
        {toggleSecurity && (
          <>
            <StyledSectionWrapper>
              <StyledSecondaryHeading>Security level</StyledSecondaryHeading>
              <StyledHint>Set the initial security level for this mission.</StyledHint>

              <SingleDropdown
                options={securityLevelDropdownOptions}
                value={selectedSecurityLevel}
                label={""}
                onChange={handleSecurityLevelChange}
              />
            </StyledSectionWrapper>

            {/* evacuationRoute */}
            <StyledSectionWrapper>
              <StyledSecondaryHeading>Evacuation Route</StyledSecondaryHeading>
              <StyledHint>Describe the planned evacuation route.</StyledHint>
              <StyledInput
                value={routeValue}
                onChange={handleRouteChange}
                placeholder="..."
              />
            </StyledSectionWrapper>

            {/* additionalEvacuationSignal */}
            <StyledSectionWrapper>
              <StyledSecondaryHeading>Evacuation Signal</StyledSecondaryHeading>
              <StyledHint>Make the evacuation signal public.</StyledHint>
              <StyledInput
                value={signalValue}
                onChange={handleSignalChange}
                placeholder="..."
              />
            </StyledSectionWrapper>

            {/* additionalEvacuationSignal */}
            <StyledSectionWrapper>
              <StyledSecondaryHeading>Safe haven</StyledSecondaryHeading>
              <StyledHint>Set a safe haven place like BoO.</StyledHint>
              <StyledInput
                value={havenValue}
                onChange={handleHavenChange}
                placeholder="..."
              />
            </StyledSectionWrapper>

            {/* nextHospital */}
            <StyledSectionWrapper>
              <StyledSecondaryHeading>Next Hospital</StyledSecondaryHeading>
              <StyledHint>Where is the next Hospital?</StyledHint>
              <StyledInput
                value={hospitalValue}
                onChange={handleHospitalChange}
                placeholder="..."
              />
            </StyledSectionWrapper>

            {/* nextVeterinary */}
            <StyledSectionWrapper>
              <StyledSecondaryHeading>Next Veterinary</StyledSecondaryHeading>
              <StyledHint>Where is the next Veterinary?</StyledHint>
              <StyledInput
                value={veterinaryValue}
                onChange={handleVeterinaryChange}
                placeholder="..."
              />
            </StyledSectionWrapper>
          </>
        )}

        {/* DEPLOYED */}

        <button
          onClick={() => setToggleDeployed(!toggleDeployed)}
          className="toggleButton"
        >
          ALSO DEPLOYED
        </button>
        {toggleDeployed && (
          <>
            Coming soon
          </>
        )}

        {/* 360 */}

        <button
          onClick={() => setToggle360(!toggle360)}
          className="toggleButton"
        >
          360
        </button>
        {toggle360 && (
          <>
            Coming soon
          </>
        )}

        
        {/* Mission starts */}
        <StyledSectionWrapper>
          <StyledSecondaryHeading>Mission starts</StyledSecondaryHeading>
          <StyledHint>Set date and time, this mission will start.</StyledHint>
          <StyledTimeInput
            type="datetime-local"
            value={startingTimeValue}
            onChange={handleStartingTimeChange}
          />
        </StyledSectionWrapper>
        

        <StyledButton onClick={handleMissionSubmit}>
          {startingTimeISOStringValue ? "Submit" : "Starting time required"}
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
  font-size: 2rem;
  color: ${(props) => props.theme.primaryFontColor};
`;

const StyledContentWrapper = styled.div`
  /* padding-top: 41rem; */
  width: 100%;
  background: ${(props) => props.theme.primaryBackgroundColor};

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2.5rem;

  overflow-y: scroll;
`;

const StyledSectionWrapper = styled.div`
  width: 100%;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;
`;

const StyledSecondaryHeading = styled.p`
  font-weight: 500;
  font-size: 1.4rem;
  color: ${(props) => props.theme.primaryFontColor};
`;

// this component only

const StyledButton = styled.button`
  width: 60%;
  height: 3rem;

  margin-top: 1.5rem;
  margin-bottom: 4rem;

  font-size: 1.2rem;
  font-weight: 500;
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

const StyledForm = styled.form``;

const StyledFormContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  height: 3rem;
`;

const StyledFormButton = styled.button`
  width: 20%;
  height: 100%;

  font-size: 1.5rem;
  font-weight: 700;

  text-align: center;
  align-self: center;

  color: ${(props) => props.theme.primaryBackgroundColor};
  background-color: ${(props) => props.theme.buttonColor};

  border: 1px solid ${(props) => props.theme.formSubmitBorderColor};
  border-radius: ${(props) => props.theme.inputBorderRadius};
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

  font-size: 1.2rem;
  font-weight: 500;

  list-style: none;
  display: inline-block;
  margin-right: 1rem;

  border-radius: 12px;
`;

const StyledObjectiveButton = styled.span`
  color: ${(props) => props.theme.primaryBackgroundColor};

  font-weight: 200;
  opacity: 0.7;

  margin-left: 0.7rem;
`;

const StyledTimeInput = styled.input`
  background-color: ${(props) => props.theme.primaryBackgroundColor};
  border: 1px solid ${(props) => props.theme.formFieldColor};
  border-radius: ${(props) => props.theme.inputBorderRadius};
  color: ${(props) => props.theme.formFieldColor};
  font-size: 1rem;
  line-height: 1.5rem;
  font-style: normal;
  font-weight: 500;
  width: 100%;

  padding: 0.75rem;

  color-scheme: ${(props) =>
    props.theme.primaryFontColor === "#FFFFFF" ? "dark" : "light"};
`;

const StyledHint = styled.div`
margin-top: -0.4rem;
font-size: 0.8rem;
font-weight: 300;
`;

// dropdown options
const disasterDropdownOptions = [
  { label: disasterTypesEnum.DROUGHT, value: disasterTypesEnum.DROUGHT },
  {
    label: disasterTypesEnum.ARMEDCONFLICTS,
    value: disasterTypesEnum.ARMEDCONFLICTS,
  },
  { label: disasterTypesEnum.WARS, value: disasterTypesEnum.WARS },
  { label: disasterTypesEnum.TERRORISM, value: disasterTypesEnum.TERRORISM },
  {
    label: disasterTypesEnum.CROWDACCIDENTS,
    value: disasterTypesEnum.CROWDACCIDENTS,
  },
  {
    label: disasterTypesEnum.STRUCTURALFAILURES,
    value: disasterTypesEnum.STRUCTURALFAILURES,
  },
  { label: disasterTypesEnum.EARTHQUAKE, value: disasterTypesEnum.EARTHQUAKE },
  {
    label: disasterTypesEnum.VOLCANICACTIVITY,
    value: disasterTypesEnum.VOLCANICACTIVITY,
  },
  { label: disasterTypesEnum.TSUNAMI, value: disasterTypesEnum.TSUNAMI },
  { label: disasterTypesEnum.ROCKFALL, value: disasterTypesEnum.ROCKFALL },
  { label: disasterTypesEnum.AVALANCHE, value: disasterTypesEnum.AVALANCHE },
  { label: disasterTypesEnum.LANDSLIDE, value: disasterTypesEnum.LANDSLIDE },
  { label: disasterTypesEnum.SUBSIDENCE, value: disasterTypesEnum.SUBSIDENCE },
  {
    label: disasterTypesEnum.TROPICALSTORM,
    value: disasterTypesEnum.TROPICALSTORM,
  },
  {
    label: disasterTypesEnum.WINTERSTORM,
    value: disasterTypesEnum.WINTERSTORM,
  },
  {
    label: disasterTypesEnum.LOCALORCONVECTIVESTORM,
    value: disasterTypesEnum.LOCALORCONVECTIVESTORM,
  },
  { label: disasterTypesEnum.RIVERFLOOD, value: disasterTypesEnum.RIVERFLOOD },
  { label: disasterTypesEnum.FLASHFLOOD, value: disasterTypesEnum.FLASHFLOOD },
  {
    label: disasterTypesEnum.COASTALFLOOD,
    value: disasterTypesEnum.COASTALFLOOD,
  },
  { label: disasterTypesEnum.HEATWAVE, value: disasterTypesEnum.HEATWAVE },
  { label: disasterTypesEnum.COLDWAVE, value: disasterTypesEnum.COLDWAVE },
  {
    label: disasterTypesEnum.EXTREMEWINTERCONDITIONS,
    value: disasterTypesEnum.EXTREMEWINTERCONDITIONS,
  },
  { label: disasterTypesEnum.FORESTFIRE, value: disasterTypesEnum.FORESTFIRE },
  { label: disasterTypesEnum.LANDFIRES, value: disasterTypesEnum.LANDFIRES },
  { label: disasterTypesEnum.EPIDEMIC, value: disasterTypesEnum.EPIDEMIC },
  {
    label: disasterTypesEnum.INSECTINFESTATION,
    value: disasterTypesEnum.INSECTINFESTATION,
  },
  {
    label: disasterTypesEnum.ANIMALSTAMPEDE,
    value: disasterTypesEnum.ANIMALSTAMPEDE,
  },
  {
    label: disasterTypesEnum.METEORITORASTEORITIMPACT,
    value: disasterTypesEnum.METEORITORASTEORITIMPACT,
  },
  {
    label: disasterTypesEnum.SPACEWEATHER,
    value: disasterTypesEnum.SPACEWEATHER,
  },
  {
    label: disasterTypesEnum.INDUSTRIALACCIDENT,
    value: disasterTypesEnum.INDUSTRIALACCIDENT,
  },
  {
    label: disasterTypesEnum.TRANSPORTACCIDENT,
    value: disasterTypesEnum.TRANSPORTACCIDENT,
  },
  { label: disasterTypesEnum.COLLAPSE, value: disasterTypesEnum.COLLAPSE },
  { label: disasterTypesEnum.EXPLOSION, value: disasterTypesEnum.EXPLOSION },
  { label: disasterTypesEnum.OTHER, value: disasterTypesEnum.OTHER },
];

const riskLevelDropdownOptions = [
  { label: RiskLevel.ONE, value: RiskLevel.ONE },
  { label: RiskLevel.TWO, value: RiskLevel.TWO },
  { label: RiskLevel.THREE, value: RiskLevel.THREE },
  { label: RiskLevel.FOUR, value: RiskLevel.FOUR },
  { label: RiskLevel.FIVE, value: RiskLevel.FIVE },
];

const securityLevelDropdownOptions = [
  { label: SecurityLevel.ZERO, value: SecurityLevel.ZERO },
  { label: SecurityLevel.ONE, value: SecurityLevel.ONE },
  { label: SecurityLevel.TWO, value: SecurityLevel.TWO },
  { label: SecurityLevel.THREE, value: SecurityLevel.THREE },
  { label: SecurityLevel.FOUR, value: SecurityLevel.FOUR },
];

export default CreateMission;

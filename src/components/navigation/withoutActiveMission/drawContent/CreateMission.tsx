import React, { useState } from "react";
import styled from "styled-components";
import SingleDropdown from "../../SingleDropdown";

// type / enum imports
import {
  CreateMissionArgs,
  MissionSchema,
  RiskLevel,
  SecurityLevel,
} from "../../../../data/realm/schema/mission";
import { disasterTypesEnum } from "../../../map/mapTypes";
import useMission from "../../../../hooks/useMission";
import useNavigation from "../../../../hooks/useNavigation";
import useRealm from "../../../../hooks/useRealm";
import { realmFunctionNames } from "../../../../data/realm/functions";
import { useNavigate } from "react-router-dom";

const CreateMission = () => {
  // contexts
  const navigate = useNavigate();
  const { realm } = useRealm();
  const { setActiveMission } = useMission();
  const { polygonDrawingCoordinates } = useMission();
  const { setIsDrawOpen } = useNavigation();

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
        estimatedPopulation: estimatedPopulationValue,
        start_of_mission: startingTimeISOStringValue,
        end_of_mission: endingTimeISOStringValue,
        geoJSON: { type: "Polygon", coordinates: polygonDrawingCoordinates },
        disasterType: selectedDisasterType,
        objectives: objectivesValue,
        riskLevel: selectedRiskLevel,
        securityLevel: selectedSecurityLevel,
      };

      // call the Realm function
      if (realm.currentUser) {
        await realm.currentUser.callFunction(
          realmFunctionNames.createMission,
          args
        );

        await realm.currentUser.refreshCustomData();

        const newActiveMission = await realm.currentUser.callFunction(
          realmFunctionNames.getCurrentMission
        );

        setActiveMission(newActiveMission as MissionSchema);
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

  // disastertype
  const [selectedDisasterType, setSelectedDisasterType] = useState<string>(
    disasterTypesEnum.DROUGHT
  );

  const handleDisasterTypeChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedDisasterType(e.currentTarget.value);
  };

  // risk level
  const [selectedRiskLevel, setSelectedRiskLevel] = useState<string>(
    RiskLevel.ONE
  );

  const handleRiskLevelChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedRiskLevel(e.currentTarget.value);
  };

  // risk level
  const [selectedSecurityLevel, setSelectedSecurityLevel] = useState<string>(
    SecurityLevel.ZERO
  );

  const handleSecurityLevelChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedSecurityLevel(e.currentTarget.value);
  };

  // identifier
  const [identifierValue, setIdentifierValue] = useState<string>("");

  const handleIdentifierChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setIdentifierValue(event.currentTarget.value);
  };

  // estimated population
  const [populationValue, setPopulationValue] = useState<string>("0");

  const handlePopulationChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPopulationValue(event.currentTarget.value);
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

  // ending time
  const [endingTimeInputValue, setEndingTimeInputValue] = useState<string>("");
  const [endingTimeISOStringValue, setEndingTimeISOStringValue] =
    useState<string>("");

  const handleEndingTimeChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    let end = event.currentTarget.value;
    const date = new Date(end);
    const isoEnd = date.toISOString();

    setEndingTimeInputValue(end);
    setEndingTimeISOStringValue(isoEnd);
  };

  return (
    <>
      <StyledDashboardWrapper>
        <StyledHeader>Create a Mission</StyledHeader>

        <StyledDashboardContent>
          {/* <StyledSectionWrapper>
            <button onClick={handleDrawMission}>draw</button>
          </StyledSectionWrapper> */}

          <StyledSectionWrapper>
            <StyledSecondaryHeading>Type of Mission:</StyledSecondaryHeading>

            <SingleDropdown
              options={disasterDropdownOptions}
              value={selectedDisasterType}
              label={""}
              onChange={handleDisasterTypeChange}
            />
          </StyledSectionWrapper>

          <StyledSectionWrapper>
            <StyledSecondaryHeading>Risk Level:</StyledSecondaryHeading>

            <SingleDropdown
              options={riskLevelDropdownOptions}
              value={selectedRiskLevel}
              label={""}
              onChange={handleRiskLevelChange}
            />
          </StyledSectionWrapper>

          <StyledSectionWrapper>
            <StyledSecondaryHeading>Security Level:</StyledSecondaryHeading>

            <SingleDropdown
              options={securityLevelDropdownOptions}
              value={selectedSecurityLevel}
              label={""}
              onChange={handleSecurityLevelChange}
            />
          </StyledSectionWrapper>

          <StyledSectionWrapper>
            <StyledSecondaryHeading>
              Name of the Mission:
            </StyledSecondaryHeading>
            <StyledInput
              value={identifierValue}
              onChange={handleIdentifierChange}
            />
          </StyledSectionWrapper>

          <StyledSectionWrapper>
            <StyledSecondaryHeading>
              Estimated Population:
            </StyledSecondaryHeading>
            <StyledInput
              type="number"
              value={populationValue}
              onChange={handlePopulationChange}
            />
          </StyledSectionWrapper>

          <StyledSectionWrapper>
            <StyledSecondaryHeading>Mission Objectives:</StyledSecondaryHeading>

            <StyledList>
              {objectivesValue.map((objective: string, index: number) => {
                return (
                  <StyledListEntry key={index}>
                    {objective}
                    <span onClick={() => handleRemoveObject(objective)}>
                      {" "}
                      x
                    </span>
                  </StyledListEntry>
                );
              })}
            </StyledList>

            <form onSubmit={handleObjectivesChange}>
              <StyledInputWrapper>
                <StyledInput
                  value={objectiveValue}
                  onChange={handleObjectiveChange}
                />
                <StyledButton type="submit">+</StyledButton>
              </StyledInputWrapper>
            </form>
          </StyledSectionWrapper>

          <StyledSectionWrapper>
            <StyledSecondaryHeading>
              Mission Starting Time:
            </StyledSecondaryHeading>
            <input
              type="datetime-local"
              value={startingTimeValue}
              onChange={handleStartingTimeChange}
            />
          </StyledSectionWrapper>

          <StyledSectionWrapper>
            <StyledSecondaryHeading>
              Mission Ending Time:
            </StyledSecondaryHeading>
            <input
              type="datetime-local"
              value={endingTimeInputValue}
              onChange={handleEndingTimeChange}
            />
          </StyledSectionWrapper>

          {startingTimeISOStringValue && endingTimeISOStringValue && (
            <StyledButton onClick={handleMissionSubmit}>
              Submit Mission
            </StyledButton>
          )}
        </StyledDashboardContent>
      </StyledDashboardWrapper>
    </>
  );
};

const StyledDashboardWrapper = styled.div`
  position: absolute;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
  overflow-y: scroll;
  pointer-events: auto;
`;

const StyledHeader = styled.div`
  width: 80%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.primaryFontColor};
  font-size: 1.1rem;
  font-weight: 500;
  overflow: hidden;
`;

const StyledDashboardContent = styled.div`
  height: 55vh;
  width: 100%;
  padding: 2rem;

  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  /* align-items: center; */
  gap: 2rem;

  border-radius: ${(props) => props.theme.drawerBorderRadius}
    ${(props) => props.theme.drawerBorderRadius} 0 0;

  background: ${(props) => props.theme.secondaryBackgroundColor};

  overflow-x: hidden;
  overflow-y: scroll;

  z-index: 6;
`;

// styling
const StyledSectionWrapper = styled.div``;

const StyledSecondaryHeading = styled.div`
  align-self: start;
`;

const StyledInput = styled.input`
  width: 100%;
  height: 2rem;
  border: 1px solid black;
`;

const StyledList = styled.ul`
  color: white;
`;

const StyledListEntry = styled.li`
  list-style: none;
  display: inline-block;
  margin-right: 1rem;
`;

const StyledInputWrapper = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const StyledButton = styled.button`
  padding: 0.5rem;
  border-radius: 20px;
  color: white;
  background: grey;
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

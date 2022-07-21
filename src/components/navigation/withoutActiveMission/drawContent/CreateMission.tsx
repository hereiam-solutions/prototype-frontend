import React, { useState } from "react";
import styled from "styled-components";
import SingleDropdown from "../../SingleDropdown";

// type / enum imports
import {
  RiskLevel,
  SecurityLevel,
} from "../../../../data/realm/schema/mission";
import { disasterTypesEnum } from "../../../map/mapTypes";
import useMission from "../../../../hooks/useMission";
import useNavigation from "../../../../hooks/useNavigation";

const CreateMission = () => {
  // request for mission creation
  const handleMissionSubmit = async () => {
    // try {
    //   if (activeMission) {
    //     const args: CreateHazardArgs = {
    //       identifier: identifierValue,
    //       mission: activeMission._id,
    //       hazard_type: selectedType,
    //       status: "active",
    //       //   placed_by: new BSON.ObjectId(realm.currentUser?.id),
    //       location: { type: "Point", coordinates: location },
    //     };
    //     setLoading(true);
    //     if (realm.currentUser) {
    //       // call the Realm function
    //       await realm.currentUser.callFunction(
    //         realmFunctionNames.addHazard,
    //         args
    //       );
    //     }
    //     setLoading(false);
    //     setIsDrawOpen(false);
    //   }
    // } catch (e) {
    //   console.log(
    //     "There has been an error while calling the Realm custom function called:",
    //     realmFunctionNames.addHazard,
    //     "Error:",
    //     e
    //   );
    // }
  };

  //   const endOfMission = new Date().toISOString()

  //   const objectives = objectivesValue;

  // disastertype
  const [selectedDisasterType, setSelectedDisasterType] = useState<string>("");

  const handleDisasterTypeChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedDisasterType(e.currentTarget.value);
  };

  // risk level
  const [selectedRiskLevel, setSelectedRiskLevel] = useState<string>("");

  const handleRiskLevelChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedRiskLevel(e.currentTarget.value);
  };

  // risk level
  const [selectedSecurityLevel, setSelectedSecurityLevel] =
    useState<string>("");

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
  const [populationValue, setPopulationValue] = useState<string>("");

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

  const handleStartingTimeChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setStartingTimeValue(event.currentTarget.value);
    console.log("start", startingTimeValue);
  };

  // ending time
  const [endingTimeValue, setEndingTimeValue] = useState<string>("");

  const handleEndingTimeChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setEndingTimeValue(event.currentTarget.value);
    console.log("end", endingTimeValue);
  };

  // draw poly
  const {
    isPolygonDrawingActive,
    setIsPolygonDrawingActive,
    polygonDrawingCoordinates,
  } = useMission();
  const { isDrawOpen, setIsDrawOpen } = useNavigation();

  console.log("isDrawOpen", isDrawOpen);
  console.log("isPolygonDrawingActive", isPolygonDrawingActive);
  console.log("polygonDrawingCoordinates", polygonDrawingCoordinates);

  //   const handleDrawMission = () => {
  //     setIsDrawOpen(false);
  //     setIsPolygonDrawingActive(true);
  //     console.log(isPolygonDrawingActive);
  //   };

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
              value={endingTimeValue}
              onChange={handleEndingTimeChange}
            />
          </StyledSectionWrapper>

          <StyledButton onClick={handleMissionSubmit}>
            Submit Mission
          </StyledButton>
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

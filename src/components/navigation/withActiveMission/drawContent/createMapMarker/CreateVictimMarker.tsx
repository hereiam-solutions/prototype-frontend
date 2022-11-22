import { useState } from "react";
import styled from "styled-components";

// type imports
import { realmFunctionNames } from "../../../../../data/realm/functions";

// hook imports
import useCreateMarker from "../../../../../hooks/useCreateMarker";
import useMission from "../../../../../hooks/useMission";
import useRealm from "../../../../../hooks/useRealm";

import useNavigation from "../../../../../hooks/useNavigation";
import {
  ageGroups,
  CreateVictimArgs,
  extricatedLevels,
  genders,
  handovers,
  statuses,
} from "../../../../../data/realm/schema/victim";
import SingleDropdown from "../../../ui/SingleDropdown";
import useMissionMap from "../../../../../hooks/useMissionMap";

const CreateVictimMarker = () => {
  const { realm } = useRealm();
  const { createMarkerLocation: location } = useCreateMarker();
  const { activeMission } = useMission();
  const { setIsDrawOpen } = useNavigation();
  const { reRenderBoolean, setReRenderBoolean } = useMissionMap();

  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async () => {
    try {
      if (activeMission) {
        const args: CreateVictimArgs = {
          mission: activeMission._id.toString(),
          
          agegroup: selectedAgeGroup as ageGroups,
          gender: selectedGender as genders,
          status: selectedStatus as statuses,

          myAction: ActionsValue,

          extricatedLevel: selectedExLevel as extricatedLevels,
          total_extrication_from: exstartingTimeISOStringValue,
          total_extrication_to: exendTimeISOStringValue,
          positionInStructure: positionValue,
          foundStreetAddress: foundValue,
          
          handoverTo: handoverToValue,
          handover: selectedHandover as handovers,

          geoJSON: { type: "Point", coordinates: location },
        };

        setLoading(true);

        if (realm.currentUser) {
          // call the Realm function
          await realm.currentUser.callFunction(
            realmFunctionNames.createVictim,
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
        realmFunctionNames.createVictim,
        "Error:",
        e
      );
    }
  };

  // ageGroup
  const [selectedAgeGroup, setSelectedAgeGroup] = useState<string>(
    ageGroups.ADULT
  );

  const handleAgeGroupChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedAgeGroup(e.currentTarget.value);
  };

  // gender
  const [selectedGender, setSelectedGender] = useState<string>(genders.MALE);

  const handleGenderChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedGender(e.currentTarget.value);
  };

  // status
  const [selectedStatus, setSelectedStatus] = useState<string>(
    statuses.DELAYED
  );

  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedStatus(e.currentTarget.value);
  };

  // myActions
  const [actionValue, setActionValue] = useState<string>("");
  const [ActionsValue, setActionsValue] = useState<string[]>([]);

  const handleActionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setActionValue(event.currentTarget.value);
  };

  const handleActionsChange = (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (actionValue) {
      const actions: string[] = ActionsValue;
      actions.push(actionValue);

      setActionsValue(actions);
      setActionValue("");
    }
  };

  const handleRemoveObject = (actionToBeRemoved: string) => {
    const actions: string[] = ActionsValue;

    const reducedObjectives = actions.filter(
      (action: string) => action !== actionToBeRemoved
    );

    setActionsValue(reducedObjectives);
  };

  // extricatedLevel
  const [selectedExLevel, setSelectedExLevel] = useState<string>(
    extricatedLevels.ASR3
  );

  const handleExLevelChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedExLevel(e.currentTarget.value);
  };

  // Extriction starting time - total_extriction_from
  const [exstartingTimeValue, setExstartingTimeValue] = useState<string>("");
  const [exstartingTimeISOStringValue, setExStartingTimeISOStringValue] =
    useState<string>("");

  const handleExStartingTimeChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    let start = event.currentTarget.value;
    const date = new Date(start);
    const isoStart = date.toISOString();

    setExstartingTimeValue(start);
    setExStartingTimeISOStringValue(isoStart);
  };

  // Extriction end time - total_extriction_to
  const [exendTimeValue, setExEndTimeValue] = useState<string>("");
  const [exendTimeISOStringValue, setExEndTimeISOStringValue] =
    useState<string>("");

  const handleExEndTimeChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    let start = event.currentTarget.value;
    const date = new Date(start);
    const isoStart = date.toISOString();

    setExEndTimeValue(start);
    setExEndTimeISOStringValue(isoStart);
  };

  // positionInStructure
  const [positionValue, setPositionValue] = useState<string>("");

  const handlePositionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPositionValue(event.currentTarget.value);
  };

  // foundStreetAddress
  const [foundValue, setFoundValue] = useState<string>("");

  const handleFoundChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFoundValue(event.currentTarget.value);
  };

  // handover
  const [selectedHandover, setSelectedHandover] = useState<string>(
    handovers.CARRIER
  );

  const handleHandoverChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedHandover(e.currentTarget.value);
  };

  // handoverTo
  const [handoverToValue, setHandoverToValue] = useState<string>("");

  const handleHandoverToChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setHandoverToValue(event.currentTarget.value);
  };


  return (
    <StyledDrawWrapper>
      <StyledDrawHeader>
        <StyledHeading>Set Victim</StyledHeading>
      </StyledDrawHeader>

      <StyledContentWrapper>
        <StyledSectionWrapper>
          <StyledSecondaryHeading>Age Group:</StyledSecondaryHeading>

          <SingleDropdown
            options={ageGroupDropwdownOptions}
            value={selectedAgeGroup}
            label={""}
            onChange={handleAgeGroupChange}
          />
        </StyledSectionWrapper>

        <StyledSectionWrapper>
          <StyledSecondaryHeading>Gender:</StyledSecondaryHeading>

          <SingleDropdown
            options={genderDropwdownOptions}
            value={selectedGender}
            label={""}
            onChange={handleGenderChange}
          />
        </StyledSectionWrapper>

        <StyledSectionWrapper>
          <StyledSecondaryHeading>Status:</StyledSecondaryHeading>

          <SingleDropdown
            options={statusDropwdownOptions}
            value={selectedStatus}
            label={""}
            onChange={handleStatusChange}
          />
        </StyledSectionWrapper>

        {/* myActions */}
        <StyledSectionWrapper>

          <StyledSecondaryHeading>My Actions</StyledSecondaryHeading>
          <StyledHint>Describe your first actions on victim.</StyledHint>

          <StyledList>
            {ActionsValue.map((action: string, index: number) => {
              return (
                <StyledListEntry key={index}>
                  {action}
                  <StyledObjectiveButton
                    onClick={() => handleRemoveObject(action)}
                  >
                    X
                  </StyledObjectiveButton>
                </StyledListEntry>
              );
            })}
          </StyledList>

          <StyledForm onSubmit={handleActionsChange}>

            <StyledFormContentWrapper>
              <StyledInput
                value={actionValue}
                onChange={handleActionChange}
              />
              <StyledFormButton type="submit">+</StyledFormButton>
            </StyledFormContentWrapper>

          </StyledForm>

        </StyledSectionWrapper>

        <StyledSectionWrapper>
          <StyledSecondaryHeading>Extricated on mission level:</StyledSecondaryHeading>

          <SingleDropdown
            options={extricatedLevelDropwdownOptions}
            value={selectedExLevel}
            label={""}
            onChange={handleExLevelChange}
          />
        </StyledSectionWrapper>

        <StyledSectionWrapper>
          <StyledSecondaryHeading>Extriction starts</StyledSecondaryHeading>
          <StyledHint>Set date and time, the extriction starts.</StyledHint>
          <StyledTimeInput
            type="datetime-local"
            value={exstartingTimeValue}
            onChange={handleExStartingTimeChange}
          />
        </StyledSectionWrapper>

        <StyledSectionWrapper>
          <StyledSecondaryHeading>Extriction ends</StyledSecondaryHeading>
          <StyledHint>Set date and time, the extriction ends.</StyledHint>
          <StyledTimeInput
            type="datetime-local"
            value={exendTimeValue}
            onChange={handleExEndTimeChange}
          />
        </StyledSectionWrapper>

        <StyledSectionWrapper>
          <StyledSecondaryHeading>Position in structure:</StyledSecondaryHeading>
          <StyledInput
            value={positionValue}
            onChange={handlePositionChange}
            placeholder="Describe the position in the structure."
          />
        </StyledSectionWrapper>

        <StyledSectionWrapper>
          <StyledSecondaryHeading>Found on address:</StyledSecondaryHeading>
          <StyledInput
            value={foundValue}
            onChange={handleFoundChange}
            placeholder="Name the found address if possible."
          />
        </StyledSectionWrapper>

        <StyledSectionWrapper>
          <StyledSecondaryHeading>Handover to:</StyledSecondaryHeading>

          <SingleDropdown
            options={handoverDropwdownOptions}
            value={selectedHandover}
            label={""}
            onChange={handleHandoverChange}
          />
        </StyledSectionWrapper>

        <StyledSectionWrapper>
          <StyledSecondaryHeading>Handover Name:</StyledSecondaryHeading>
          <StyledInput
            value={handoverToValue}
            onChange={handleHandoverToChange}
            placeholder="Name / Contact Details the victim handed over to"
          />
        </StyledSectionWrapper>

        <StyledButton onClick={handleSubmit}>
          {loading ? "loading..." : "Submit Victim"}
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
  gap: 2.5rem;

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
  { label: extricatedLevels.ASR3, value: extricatedLevels.ASR3 },
  { label: extricatedLevels.ASR4, value: extricatedLevels.ASR4 },
  { label: extricatedLevels.ASR5, value: extricatedLevels.ASR5 },
];

const handoverDropwdownOptions = [
  { label: handovers.FAMILY, value: handovers.FAMILY },
  { label: handovers.LOCALS, value: handovers.LOCALS },
  { label: handovers.AMBULANCE, value: handovers.AMBULANCE },
  { label: handovers.MEDICAL, value: handovers.MEDICAL },
  { label: handovers.CARRIER, value: handovers.CARRIER },
  { label: handovers.HELICOPTER, value: handovers.HELICOPTER },
  { label: handovers.HOSPITAL, value: handovers.HOSPITAL },
  { label: handovers.MORTUARY, value: handovers.MORTUARY },
  { label: handovers.OTHER, value: handovers.OTHER },
];


export default CreateVictimMarker;

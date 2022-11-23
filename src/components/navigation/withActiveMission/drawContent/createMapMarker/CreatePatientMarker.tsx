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
  CreatePatientArgs,
  extricatedLevels,
  handovers,
  genders,
  statuses,
} from "../../../../../data/realm/schema/patient";
import SingleDropdown from "../../../ui/SingleDropdown";
import useMissionMap from "../../../../../hooks/useMissionMap";

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
        const args: CreatePatientArgs = {
          mission: activeMission._id.toString(),

          agegroup: selectedAgeGroup as ageGroups,
          gender: selectedGender as genders,
          status: selectedStatus as statuses,

          extricatedLevel: selectedExLevel as extricatedLevels,
          total_extrication_from: exstartingTimeISOStringValue,
          total_extrication_to: exendTimeISOStringValue,
          positionInStructure: positionValue,
          foundStreetAddress: foundValue,

          handoverTo: handoverToValue,
          handover: selectedHandover as handovers,

          hair: hairValue,
          face: faceValue,
          clothing: clothingValue,
          bodymarks: bodymarksValue,
          
          geoJSON: { type: "Point", coordinates: location },
        };

        setLoading(true);

        if (realm.currentUser) {
          // call the Realm function
          await realm.currentUser.callFunction(
            realmFunctionNames.createPatient,
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
        realmFunctionNames.createPatient,
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

  // hair
  const [hairValue, setHairValue] = useState<string>("");

  const handleHairChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setHairValue(event.currentTarget.value);
  };

  // face
  const [faceValue, setFaceValue] = useState<string>("");

  const handleFaceChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFaceValue(event.currentTarget.value);
  };

  // clothing
  const [clothingValue, setClothingValue] = useState<string>("");

  const handleClothingChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setClothingValue(event.currentTarget.value);
  };

  // bodymarks
  const [bodymarksValue, setBodymarksValue] = useState<string>("");

  const handleBodymarksChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setBodymarksValue(event.currentTarget.value);
  };

  const [toggleExtrication, setToggleExtrication] = useState(false)
  const [toggleHandover, setToggleHandover] = useState(false)
  const [toggleForensics, setToggleForensics] = useState(false)

  return (
    <StyledDrawWrapper>
      <StyledDrawHeader>
        <StyledHeading>Set Victim</StyledHeading>
      </StyledDrawHeader>

      <StyledContentWrapper>

        {/* include Identifier */}

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

        {/* EXTRICATION */}
        <br />
        <button
          onClick={() => setToggleExtrication(!toggleExtrication)}
          className="toggleButton"
        >
        EXTRICATION
        </button>
        {toggleExtrication && (
          <>
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
              <StyledSecondaryHeading>Extrication starts</StyledSecondaryHeading>
              <StyledHint>Set date and time, the extrication starts.</StyledHint>
              <StyledTimeInput
                type="datetime-local"
                value={exstartingTimeValue}
                onChange={handleExStartingTimeChange}
              />
            </StyledSectionWrapper>

            <StyledSectionWrapper>
              <StyledSecondaryHeading>Extrication ends</StyledSecondaryHeading>
              <StyledHint>Set date and time, the extrication ends.</StyledHint>
              <StyledTimeInput
                type="datetime-local"
                value={exendTimeValue}
                onChange={handleExEndTimeChange}
              />
            </StyledSectionWrapper>

            <StyledSectionWrapper>
              <StyledSecondaryHeading>Position in structure:</StyledSecondaryHeading>
              <StyledHint>Describe the position in the structure, such as floor or part of thge building.</StyledHint>
              <StyledInput
                type="text"
                value={positionValue}
                onChange={handlePositionChange}
              />
            </StyledSectionWrapper>

            <StyledSectionWrapper>
              <StyledSecondaryHeading>Found on address:</StyledSecondaryHeading>
              <StyledHint>State the address if possible.</StyledHint>
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
          HANDOVER
        </button>
        {toggleHandover && (
          <>
            <StyledSectionWrapper>
              <StyledSecondaryHeading>Handover to:</StyledSecondaryHeading>
              <SingleDropdown
                options={handoverDropwdownOptions}
                value={selectedHandover}
                label={""}
                onChange={handleHandoverChange}
              />
            </StyledSectionWrapper>
            <br />
            <StyledSectionWrapper>
              <StyledSecondaryHeading>Handover Contact:</StyledSecondaryHeading>
              <StyledHint>Contact details, the victim handed over to.</StyledHint>
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
          FORENSICS
        </button>
        {toggleForensics && (
          <>
            <StyledSectionWrapper>
              <StyledSecondaryHeading>Hair</StyledSecondaryHeading>
              <StyledHint>Describe the hair for later search and forensics.</StyledHint>
              <StyledInput
                type="textarea"
                value={hairValue}
                onChange={handleHairChange}
              />
            </StyledSectionWrapper>

            <StyledSectionWrapper>
              <StyledSecondaryHeading>Face</StyledSecondaryHeading>
              <StyledHint>Describe the face (like beard or glasses) for later search and forensics.</StyledHint>
              <StyledInput
                type="text"
                value={faceValue}
                onChange={handleFaceChange}
              />
            </StyledSectionWrapper>

            <StyledSectionWrapper>
              <StyledSecondaryHeading>Clothing</StyledSecondaryHeading>
              <StyledHint>Describe the clothing (like jacket, trousers or shoes) for later search and forensics.</StyledHint>
              <StyledInput
                type="text"
                value={clothingValue}
                onChange={handleClothingChange}
              />
            </StyledSectionWrapper>

            <StyledSectionWrapper>
              <StyledSecondaryHeading>Bodymarks</StyledSecondaryHeading>
              <StyledHint>Describe visible bodymarks for later search and forensics.</StyledHint>
              <StyledInput
                type="text"
                value={bodymarksValue}
                onChange={handleBodymarksChange}
              />
            </StyledSectionWrapper>
          </>
        )}

        
        {/* SUBMIT */}
        <br />
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

export default CreatePatientMarker;

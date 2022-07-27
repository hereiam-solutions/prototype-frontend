import { useState } from "react";
import styled from "styled-components";

// type imports
import { hazardTypes } from "../../../../map/mapTypes";
import { realmFunctionNames } from "../../../../../data/realm/functions";
import { CreateHazardArgs } from "../../../../../data/realm/schema/hazard";
import { BSON } from "realm-web";

// hook imports
import useCreateMarker from "../../../../../hooks/useCreateMarker";
import useMission from "../../../../../hooks/useMission";
import useRealm from "../../../../../hooks/useRealm";
import useRealmFunction from "../../../../../hooks/useRealmFunction";

// svg imports
import { ReactComponent as AvalanceIcon } from "../../../../../assets/Hazards/Alert=Avalanche.svg";

import useNavigation from "../../../../../hooks/useNavigation";
import {
  ageGroups,
  CreatePatientArgs,
  genders,
  injuries,
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
          injuries: selectedInjuries as injuries,
          isTeamMember: false,
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
    ageGroups.ZERO
  );

  const handleAgeGroupChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedAgeGroup(e.currentTarget.value);
  };

  // gender
  const [selectedGender, setSelectedGender] = useState<string>(genders.UNKNOWN);

  const handleGenderChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedGender(e.currentTarget.value);
  };

  // status
  const [selectedStatus, setSelectedStatus] = useState<string>(
    statuses.NOTURGENT
  );

  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedStatus(e.currentTarget.value);
  };

  // injuries
  const [selectedInjuries, setSelectedInjuries] = useState<string>(
    injuries.NONE
  );

  const handleInjuriesChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedInjuries(e.currentTarget.value);
  };

  return (
    <StyledDrawWrapper>
      <StyledDrawHeader>
        <StyledHeading>Patient</StyledHeading>
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

        <StyledSectionWrapper>
          <StyledSecondaryHeading>Injuries:</StyledSecondaryHeading>

          <SingleDropdown
            options={injuryDropwdownOptions}
            value={selectedInjuries}
            label={""}
            onChange={handleInjuriesChange}
          />
        </StyledSectionWrapper>

        <StyledButton onClick={handleSubmit}>
          {loading ? "loading..." : "Submit Patient"}
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

// dropdown options
const ageGroupDropwdownOptions = [
  { label: ageGroups.ZERO, value: ageGroups.ZERO },
  { label: ageGroups.ONE, value: ageGroups.ONE },
  { label: ageGroups.TWO, value: ageGroups.TWO },
  { label: ageGroups.THREE, value: ageGroups.THREE },
  { label: ageGroups.FOUR, value: ageGroups.FOUR },
];

const genderDropwdownOptions = [
  { label: genders.MALE, value: genders.MALE },
  { label: genders.FEMALE, value: genders.FEMALE },
  { label: genders.DIVERSE, value: genders.DIVERSE },
  { label: genders.UNKNOWN, value: genders.UNKNOWN },
];

const statusDropwdownOptions = [
  { label: statuses.ONGOINGCPR, value: statuses.ONGOINGCPR },
  { label: statuses.URGENT, value: statuses.URGENT },
  { label: statuses.LESSURGENT, value: statuses.LESSURGENT },
  { label: statuses.NOTURGENT, value: statuses.NOTURGENT },
];

const injuryDropwdownOptions = [
  { label: injuries.NONE, value: injuries.NONE },
  { label: injuries.STABLE, value: injuries.STABLE },
  { label: injuries.CRITICAL, value: injuries.CRITICAL },
];

export default CreatePatientMarker;

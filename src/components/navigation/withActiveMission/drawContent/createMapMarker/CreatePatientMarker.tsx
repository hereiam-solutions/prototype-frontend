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

const CreatePatientMarker = () => {
  const { realm } = useRealm();
  const { location } = useCreateMarker();
  const { activeMission } = useMission();
  const { setIsDrawOpen } = useNavigation();

  const [loading, setLoading] = useState<boolean>(false);

  const [selectedType, setSelectedType] = useState<hazardTypes>(
    hazardTypes.AVALANCHE
  );

  const [identifierValue, setIdentifierValue] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIdentifierValue(event.currentTarget.value);
  };

  const handleSubmit = async () => {
    try {
      if (activeMission) {
        const args: CreateHazardArgs = {
          identifier: identifierValue,
          mission: activeMission._id.toString(),
          hazard_type: selectedType,
          status: "active",
          geoJSON: { type: "Point", coordinates: location },
        };

        setLoading(true);

        if (realm.currentUser) {
          // call the Realm function
          await realm.currentUser.callFunction(
            realmFunctionNames.createHazard,
            args
          );
        }

        setLoading(false);
        setIsDrawOpen(false);
      }
    } catch (e) {
      console.log(
        "There has been an error while calling the Realm custom function called:",
        realmFunctionNames.createHazard,
        "Error:",
        e
      );
    }
  };

  return (
    <StyledWrapper>
      <StyledHeader>Set Hazard</StyledHeader>
      <StyledSecondaryHeading>Type of Hazard:</StyledSecondaryHeading>
      <StyledIconRow>
        <AvalanceIcon
          className={`icon ${
            selectedType === hazardTypes.AVALANCHE ? "selected" : ""
          }`}
          onClick={() => {
            setSelectedType(hazardTypes.AVALANCHE);
          }}
        />
      </StyledIconRow>

      <StyledSecondaryHeading>Hazard Description:</StyledSecondaryHeading>

      <StyledIdentifierInput
        onChange={handleInputChange}
        type="text"
        value={identifierValue}
      />

      <StyledButton onClick={handleSubmit}>
        {loading ? "loading..." : "Submit Hazard"}
      </StyledButton>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  height: 100%;
  width: 100%;

  padding: 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const StyledHeader = styled.h2``;

const StyledSecondaryHeading = styled.div`
  align-self: start;
`;

const StyledIconRow = styled.div`
  height: 60px;
  width: 100%;

  overflow: auto;
  white-space: nowrap;

  .icon {
    height: 50px;
    width: 50px;
  }

  .selected {
    background-color: grey;
    border-radius: 50%;
  }
`;

const StyledIdentifierInput = styled.input`
  width: 100%;
  height: 2rem;
  border: 1px solid black;
`;

const StyledButton = styled.button`
  padding: 0.5rem;
  border-radius: 20px;
  color: white;
  background: grey;
`;

export default CreatePatientMarker;

import { useState } from "react";
import styled from "styled-components";

// type imports
import { hazardTypes, locationTypes } from "../../../../map/mapTypes";
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
import { CreateLocationArgs } from "../../../../../data/realm/schema/location";

const CreateLocationMarker = () => {
  const { realm } = useRealm();
  const { createMarkerLocation: location } = useCreateMarker();
  const { activeMission } = useMission();
  const { setIsDrawOpen } = useNavigation();

  const [loading, setLoading] = useState<boolean>(false);

  const [selectedType, setSelectedType] = useState<locationTypes>(
    locationTypes.APPAREL
  );

  const [nameValue, setNameValue] = useState<string>("");

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNameValue(event.currentTarget.value);
  };

  const handleSubmit = async () => {
    try {
      if (activeMission) {
        const args: CreateLocationArgs = {
          status: "active",
          name: nameValue,
          mission: activeMission._id.toString(),
          type: selectedType,
          geoJSON: { type: "Point", coordinates: location },
        };

        setLoading(true);

        if (realm.currentUser) {
          // call the Realm function
          await realm.currentUser.callFunction(
            realmFunctionNames.createLocation,
            args
          );
        }

        setLoading(false);
        setIsDrawOpen(false);
      }
    } catch (e) {
      console.log(
        "There has been an error while calling the Realm custom function called:",
        realmFunctionNames.createLocation,
        "Error:",
        e
      );
    }
  };

  return (
    <StyledWrapper>
      <StyledHeader>Set Location</StyledHeader>
      <StyledSecondaryHeading>Type of :</StyledSecondaryHeading>
      <StyledIconRow>
        <AvalanceIcon
          className={`icon ${
            selectedType === locationTypes.APPAREL ? "selected" : ""
          }`}
          onClick={() => {
            setSelectedType(locationTypes.APPAREL);
          }}
        />
      </StyledIconRow>

      <StyledSecondaryHeading>Location Description:</StyledSecondaryHeading>

      <StyledInput onChange={handleNameChange} type="text" value={nameValue} />

      <StyledButton onClick={handleSubmit}>
        {loading ? "loading..." : "Submit Location"}
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

const StyledInput = styled.input`
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

export default CreateLocationMarker;

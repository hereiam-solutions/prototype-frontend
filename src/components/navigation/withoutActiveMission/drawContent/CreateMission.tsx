import React, { useState } from "react";
import styled from "styled-components";
import { disasterTypesEnum } from "../../../map/mapTypes";
import Accordion from "../../Accordion";

const CreateMission = () => {
  // disaster type
  const [selectedDisasterTypes, setSelectedDisasterTypes] = useState<
    disasterTypesEnum[]
  >([]);

  const [jo, setJo] = useState<string>("");

  const handleDisasterTypeClick = (disasterTypeValue: disasterTypesEnum) => {
    if (selectedDisasterTypes.includes(disasterTypeValue)) {
      // if the element is in the array, remove it
      let index = selectedDisasterTypes.indexOf(disasterTypeValue);
      selectedDisasterTypes.splice(index, 1);

      setJo("");
    } else {
      // if it is not already in the array, add it
      //   const newArray = [...selectedDisasterTypes, disasterTypeValue];
      const newArray = selectedDisasterTypes;
      newArray.push(disasterTypeValue);
      setSelectedDisasterTypes(newArray);

      setJo("selected");
    }

    console.log(selectedDisasterTypes);
    console.log(
      selectedDisasterTypes.includes(disasterTypesEnum.ARMEDCONFLICTS)
    );
  };

  // identifier
  const [identifierValue, setIdentifierValue] = useState<string>("");

  const handleIdentifierChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setIdentifierValue(event.currentTarget.value);
  };

  return (
    <>
      <StyledSecondaryHeading>Type of Mission:</StyledSecondaryHeading>
      <Accordion heading="Type of Mission:">
        <StyledDropdownItem
          className={`something ${
            selectedDisasterTypes.includes(disasterTypesEnum.DROUGHT)
              ? "selected"
              : ""
          }`}
          onClick={() => handleDisasterTypeClick(disasterTypesEnum.DROUGHT)}
        >
          {disasterTypesEnum.DROUGHT}
        </StyledDropdownItem>

        <StyledDropdownItem
          className={`something ${
            selectedDisasterTypes.includes(disasterTypesEnum.ARMEDCONFLICTS)
              ? "selected"
              : ""
          }`}
          onClick={() =>
            handleDisasterTypeClick(disasterTypesEnum.ARMEDCONFLICTS)
          }
        >
          {disasterTypesEnum.ARMEDCONFLICTS}
        </StyledDropdownItem>

        <StyledDropdownItem
          className={`something ${
            selectedDisasterTypes.includes(disasterTypesEnum.WARS)
              ? "selected"
              : ""
          }`}
          onClick={() => handleDisasterTypeClick(disasterTypesEnum.WARS)}
        >
          {disasterTypesEnum.WARS}
        </StyledDropdownItem>
      </Accordion>

      <StyledSecondaryHeading>Name of the Mission:</StyledSecondaryHeading>
      <StyledInput value={identifierValue} onChange={handleIdentifierChange} />
    </>
  );
};

const StyledSecondaryHeading = styled.div`
  align-self: start;
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

const StyledDropdownItem = styled.div`
  width: 100%;
`;

const StyledWrapper = styled.div`
  .selected {
    background-color: blue;
  }
`;
export default CreateMission;

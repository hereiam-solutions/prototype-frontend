import React, { useState } from 'react';
import styled from 'styled-components';

const CreateMission = () => {
  const [identifierValue, setIdentifierValue] = useState<string>('');

  const handleIdentifierChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setIdentifierValue(event.currentTarget.value);
  };

  return (
    <>
      <StyledInputHeading>Name of the Mission</StyledInputHeading>
      <StyledInput value={identifierValue} onChange={handleIdentifierChange} />
    </>
  );
};

const StyledInputHeading = styled.div``;
const StyledInput = styled.input``;

export default CreateMission;

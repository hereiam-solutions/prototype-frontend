import React from 'react';
import styled from 'styled-components';

import { RiDeleteBin6Line } from "react-icons/ri";

type Props = {};

const ClearData= (props: Props) => {
  return (
    <StyledClear>
        <SectionHeadline>Before you leave</SectionHeadline>
        <ClearLocalData />
        <ClearUserData />
            
    </StyledClear>
  )  
};



const TrashIcon = RiDeleteBin6Line;

const ClearLocalData = () => {
    return (
      <StyledClearLocal>
        <p>Clear local data</p>
        <TrashIcon />
      </StyledClearLocal>
    )
};

const ClearUserData = () => {
    return (
      <StyledClearUser>
        <p>Delete User</p>
        <TrashIcon />
      </StyledClearUser>
    )
};



const StyledClear= styled.div`

    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.4rem;

`;

const SectionHeadline = styled.div`
    width: 100%;
    margin-top: 1rem;

    padding: ${(props) => props.theme.sectionHeadlinePadding};

    border-radius: ${(props) => props.theme.buttonBorderRadius};

    background-color: ${(props) => props.theme.sectionHeadlineBackgroundColor};
    color: ${(props) => props.theme.sectionHeadlineColor};

`;

const StyledClearLocal = styled.div`
  align-self: start;

  width: 100%;
  margin-top: 0.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: ${(props) => props.theme.secondaryBackgroundColor};
  color: ${(props) => props.theme.secondaryFontColor};

  font-size: 1rem;
  font-weight: 500;
`;

const StyledClearUser = styled.div`
  align-self: start;

  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: ${(props) => props.theme.secondaryBackgroundColor};
  color: ${(props) => props.theme.secondaryFontColor};

  font-size: 1rem;
  font-weight: 500;
`;

export default ClearData;
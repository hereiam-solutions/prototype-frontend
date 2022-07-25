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
    margin-top: 2rem;
    width: 90vw;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.4rem;

    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const SectionHeadline = styled.div`
    width: 90vw;

    padding: ${(props) => props.theme.sectionHeadlinePadding};

    background-color: ${(props) => props.theme.sectionHeadlineBackgroundColor};
    color: ${(props) => props.theme.sectionHeadlineColor};

    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: ${(props) => props.theme.buttonBorderRadius} ${(props) => props.theme.buttonBorderRadius} 0 0;

`;

const StyledClearLocal = styled.div`
  align-self: start;

  width: 90vw;
  margin-top: 1rem;
  padding: 1rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: ${(props) => props.theme.secondaryBackgroundColor};
  color: ${(props) => props.theme.secondaryFontColor};

  font-size: 1rem;
  font-weight: 500;

  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const StyledClearUser = styled.div`
  align-self: start;

  width: 90vw;
  margin-top: 1rem;
  padding: 1rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: ${(props) => props.theme.secondaryBackgroundColor};
  color: ${(props) => props.theme.secondaryFontColor};

  font-size: 1rem;
  font-weight: 500;

  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

export default ClearData;
import React from 'react';
import styled from 'styled-components';
import Accordion from '../../Accordion';

type Props = {};

const Settings = (props: Props) => {
  return (
    <StyledSettingsWrapper>
      <StyledHeader>
        <p>Settings</p>
      </StyledHeader>

      <Accordion heading={'accordion heading'}>
        <Child />
        <SecondChild />
      </Accordion>

      <StyledSettingsContent></StyledSettingsContent>
    </StyledSettingsWrapper>
  );
};

const Child = () => {
  return <p>Inside Accordion</p>;
};

const SecondChild = () => {
  return <p>Inside Accordion</p>;
};

const StyledSettingsWrapper = styled.div`
  position: absolute;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
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

const StyledSettingsContent = styled.div`
  height: 55vh;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  flex-direction: column;
  margin-top: -0.2rem;
  border-radius: ${(props) => props.theme.drawerBorderRadius}
    ${(props) => props.theme.drawerBorderRadius} 0 0;
  background: ${(props) => props.theme.secondaryBackgroundColor};
  overflow-x: hidden;
  overflow-y: scroll;
  z-index: 6;
`;

export default Settings;

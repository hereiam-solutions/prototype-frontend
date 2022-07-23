import React from 'react';
import styled from 'styled-components';
import Accordion from '../../../Accordion';
import { RiContrast2Fill } from "react-icons/ri";

type Props = {};

const Settings = (props: Props) => {
  return (
    <StyledSettingsWrapper>
      <StyledHeader>
        <p>Settings</p>
      </StyledHeader>

      <Accordion heading={'MAP'}>
        <HintMapUse />
      </Accordion>

      <Accordion heading={'APPEARANCE'}>
        <ThemeSwitch />
      </Accordion>

      <StyledSettingsContent></StyledSettingsContent>
    </StyledSettingsWrapper>
  );
};

const HintMapUse = () => {
  return <p>Please use the setting on the map in this version.</p>;
};

const ThemeSwitchIcon = RiContrast2Fill;

const ThemeSwitch = () => {
  return (
    <StyledThemeSwitch>
      <p>Change Theme</p>
      <ThemeSwitchIcon />
    </StyledThemeSwitch>
  )
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
  margin-top: -0.2rem;

  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  flex-direction: column;

  
  border-radius: ${(props) => props.theme.drawerBorderRadius}
    ${(props) => props.theme.drawerBorderRadius} 0 0;
  background: ${(props) => props.theme.secondaryBackgroundColor};
  
  overflow-x: hidden;
  overflow-y: scroll;
  
  z-index: 6;
`;

const StyledThemeSwitch = styled.div`
  align-self: start;

  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: ${(props) => props.theme.secondaryBackgroundColor};
  color: ${(props) => props.theme.secondaryFontColor};

  font-size: 1.3rem;
  font-weight: 500;
`;

export default Settings;

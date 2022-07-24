import React from 'react';
import styled from 'styled-components';
import Accordion from '../../../Accordion';
import { RiContrast2Fill, RiTranslate, RiRoadMapLine } from "react-icons/ri";

type Props = {};

const Settings = (props: Props) => {
  return (
    <StyledSettingsWrapper>
      <StyledHeader>
        <p>Settings</p>
      </StyledHeader>

      <Accordion heading={'MAP'}>
        <AllowTracking />
      </Accordion>

      <Accordion heading={'INTERFACE'}>
        <LanguageSwitch />
        <ThemeSwitch />
      </Accordion>

      <StyledSettingsContent></StyledSettingsContent>
    </StyledSettingsWrapper>
  );
};
const AllowTrackingIcon = RiRoadMapLine;
const AllowTracking = () => {
  return (
    <StyledItemSwitch>
      <p>Track me</p>
      <AllowTrackingIcon />
    </StyledItemSwitch>
  )
};

//Choose Language
const LanguageSwitchIcon = RiTranslate;
const LanguageSwitch = () => {
  return (
    <StyledItemSwitch>
      <p>Choose Language</p>
      <LanguageSwitchIcon />
    </StyledItemSwitch>
  )
};

//Toggle
const ThemeSwitchIcon = RiContrast2Fill;
const ThemeSwitch = () => {
  return (
    <StyledItemSwitch>
      <p>Toggle Theme</p>
      <ThemeSwitchIcon />
    </StyledItemSwitch>
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

const SectionHeadline = styled.div`
  width: 100%;
  margin-top: 1rem;

  padding: ${(props) => props.theme.sectionHeadlinePadding};

  border-radius: ${(props) => props.theme.buttonBorderRadius};

  background-color: ${(props) => props.theme.sectionHeadlineBackgroundColor};
  color: ${(props) => props.theme.sectionHeadlineColor};

`;

const StyledItemSwitch = styled.div`
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

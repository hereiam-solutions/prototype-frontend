import React from 'react';
import styled from 'styled-components';

type Props = {};

const Settings = (props: Props) => {
  return (
    <StyledSettingsWrapper>

      <StyledSettingsHeader>
        <SettingsHeader />
      </StyledSettingsHeader>
     
      <StyledSettingsContent>
        

      </StyledSettingsContent>

    </StyledSettingsWrapper>
  )
};

const SettingsHeader = () => {
  return (
    <div>
      Settings
    </div>
  );
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

const StyledSettingsHeader = styled.div`
position: sticky;
top: 0px;
width: 100vw;
height: 3rem;
border-radius: ${(props) => props.theme.drawerBorderRadius} ${(props) => props.theme.drawerBorderRadius} 0 0;
background: ${(props) => props.theme.primaryBackgroundColor};
color: ${(props) => props.theme.primaryFontColor};
font-size: 1.4rem;
font-weight: 600;
display: flex;
align-items: center;
justify-content: space-around;
`;

const StyledSettingsContent = styled.div`
  height: 55vh;  
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  flex-direction: column;
  margin-top: -0.2rem;
  border-radius: ${(props) => props.theme.drawerBorderRadius} ${(props) => props.theme.drawerBorderRadius} 0 0;
  background: ${(props) => props.theme.secondaryBackgroundColor};
  overflow-x: hidden;
  overflow-y: scroll;
  z-index: 6;
`;

export default Settings;

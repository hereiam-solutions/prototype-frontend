import { useState } from 'react';
import styled from 'styled-components';
import MissionCard from '../drawContent/MissionCard';
import CreateMission from './CreateMission';

const Dashboard = () => {
  const [createMissionMode, setCreateMissionMode] = useState<boolean>(false);

  return (
    <StyledDashboardWrapper>
      <StyledHeader>Dashboard</StyledHeader>

      <StyledDashboardContent>
        {createMissionMode ? (
          <CreateMission />
        ) : (
          <>
            <MissionCard />
            <StyledDeactivated>
              <MissionCard />
            </StyledDeactivated>
          </>
        )}

        <StyledSwitchButton
          onClick={() => {
            setCreateMissionMode(!createMissionMode);
          }}
        >
          {createMissionMode ? 'Join a mission' : 'Create a mission'}
        </StyledSwitchButton>
      </StyledDashboardContent>
    </StyledDashboardWrapper>
  );
};

const StyledSwitchButton = styled.div`
  align-self: center;
`;

const StyledDashboardWrapper = styled.div`
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

const StyledDashboardContent = styled.div`
  height: 55vh;
  width: 100%;
  padding: 2rem;

  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 2rem;

  border-radius: ${(props) => props.theme.drawerBorderRadius}
    ${(props) => props.theme.drawerBorderRadius} 0 0;

  background: ${(props) => props.theme.secondaryBackgroundColor};

  overflow-x: hidden;
  overflow-y: scroll;

  z-index: 6;
`;

const StyledDeactivated = styled.div`
  opacity: 0.3;
`;

export default Dashboard;

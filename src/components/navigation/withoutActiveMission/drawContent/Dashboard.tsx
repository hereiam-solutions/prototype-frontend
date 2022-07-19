import styled from 'styled-components';
import MissionA from '../drawContent/MissionCard';

type Props = {};

const Dashboard = (props: Props) => {
  return (
    <StyledDashboardWrapper>
      <StyledHeader>Dashboard</StyledHeader>

      <StyledDashboardContent>
        <MissionA />
        <StyledDeactivated>
          <MissionA />
        </StyledDeactivated>
      </StyledDashboardContent>
    </StyledDashboardWrapper>
  );
};

const StyledDeactivated = styled.div`
  opacity: 0.3;
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

export default Dashboard;

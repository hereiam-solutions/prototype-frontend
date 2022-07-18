import React from 'react';
import styled from 'styled-components';
import MissionA from '../drawContent/MissionCard';

type Props = {};

const Dashboard = (props: Props) => {
  return (
    <StyledDashboardWrapper>

      <StyledDashboardHeader>
        <DashboardHeader />
      </StyledDashboardHeader>
     
      <StyledDashboardContent>
        
        <MissionA />
        <StyledDeactivated>
          <div>
            <MissionA />
          </div>
        </StyledDeactivated>
        
        
      </StyledDashboardContent>

    </StyledDashboardWrapper>

  );
};

const DashboardHeader = () => {
  return (
    <div>
      Dashboard
    </div>
  );
}

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

const StyledDashboardHeader = styled.div`
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

const StyledDashboardContent = styled.div`
  height: 55vh;  
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 2rem;
  border-radius: ${(props) => props.theme.drawerBorderRadius} ${(props) => props.theme.drawerBorderRadius} 0 0;
  background: ${(props) => props.theme.secondaryBackgroundColor};
  overflow-x: hidden;
  overflow-y: scroll;
  z-index: 6;
`;


export default Dashboard;

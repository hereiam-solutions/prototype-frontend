import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

type Props = {};

const Dashboard = (props: Props) => {
  return (
    <StyledDashboardWrapper>

      <StyledDashboardHeader>
        <DashboardHeader />
      </StyledDashboardHeader>
     
      <StyledDashboardContent>
        
        TEst
        <Link to="/mission"><StyledMissionJoinButton>Join this mission</StyledMissionJoinButton></Link>
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
  border-radius: ${(props) => props.theme.drawerBorderRadius} ${(props) => props.theme.drawerBorderRadius} 0 0;
  background: ${(props) => props.theme.secondaryBackgroundColor};
  overflow-x: hidden;
  overflow-y: scroll;
  z-index: 6;
`;
const StyledMissionJoinButton = styled.button`
  padding: 0.2rem 1rem 0.2rem 1rem;
  margin-top: 1.5rem;
  background-color: ${(props) => props.theme.formSubmitFillColor};
  border: 1px solid ${(props) => props.theme.formSubmitBorderColor};
  border-radius: ${(props) => props.theme.buttonBorderRadius};
  text-align: center;
  height: 3rem;
  color: ${(props) => props.theme.formSubmitTextColor};
  font-weight: 500;
`;

export default Dashboard;

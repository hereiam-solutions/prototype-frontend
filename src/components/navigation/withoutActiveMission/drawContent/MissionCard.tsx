import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CardContainer = styled.div`
    margin-top: 1.2rem;
    width: 80vw;
    height: auto;
    border: 2px solid ${(props) => props.theme.formFieldColor};
    border-radius: ${(props) => props.theme.primaryBorderRadius};
    font-size: 1.2em;
    color: ${props => props.theme.formFieldColor};
`;
const StyledMissionJoinButton = styled.button`
    padding: 0.2rem 1rem 0.2rem 1rem;
    margin-top: 1.5rem;
    background-color: ${(props) => props.theme.formSubmitFillColor};
    border: 1px solid ${(props) => props.theme.formSubmitBorderColor};
    border-radius: ${(props) => props.theme.buttonBorderRadius} ${(props) => props.theme.buttonBorderRadius} 0 0;
    text-align: center;
    height: 3rem;
    color: ${(props) => props.theme.formSubmitTextColor};
    font-weight: 500;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const MissionA = () => (
  <CardContainer>
    <Content>
      Mission Briefing
      <Link to="/mission"><StyledMissionJoinButton>Join this mission</StyledMissionJoinButton></Link>
    </Content>
  </CardContainer>
);

export default MissionA;
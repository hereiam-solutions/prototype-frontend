import React from 'react';
import styled from 'styled-components';

import { Card } from "./MissionCard/MissionCard";

const MyMissions = () => {

  return (
    <StyledMissionsWrapper>

      <SectionHeadline>
        My Missions
      </SectionHeadline>

      <CardContainer>
        <Card hazard={"Earthquake"} region={"Haiti"} role={"Rescue"}  from={"2021/08/15"} to={"2021/08/20"} />
        <Separator />
        <Card hazard={"Flood"} region={"Rhineland"} role={"Team leader"}  from={"2021/07/16"} to={"2021/07/22"} />
        <Separator />
        <Card hazard={"Explosion"} region={"Beirut"} role={"Dog handler"} from={"2020/08/04"} to={"2020/08/06"} />
      </CardContainer>

    </StyledMissionsWrapper>
  );
};



const CardContainer = styled.div`
  width: 90vw;
  padding: 1rem;
  height: auto;

  display: flex;
  align-items: top;
  justify-content: flex-start;
  
  border-radius: ${(props) => props.theme.buttonBorderRadius};
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  ooverflow-x: scroll;
  overflow-y: hidden;
`;

const Separator = styled.span`
  margin-left: 1rem;
  margin-right: 1rem;
`;

const StyledMissionsWrapper = styled.div`
  
  margin-top: 2rem;
  width: 90vw;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-bottom: 1px solid ${(props) => props.theme.sectionHeadlineBackgroundColor};
  
  pointer-events: auto;

  ul {
    list-style: none;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }

  li {
    width: 90vw;
    padding: 1rem;
  }
`;

const SectionHeadline = styled.div`
    width: 90vw;

    padding: ${(props) => props.theme.sectionHeadlinePadding};

    border-radius: ${(props) => props.theme.buttonBorderRadius} ${(props) => props.theme.buttonBorderRadius} 0 0;

    background-color: ${(props) => props.theme.sectionHeadlineBackgroundColor};
    color: ${(props) => props.theme.sectionHeadlineColor};

    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

export default MyMissions;
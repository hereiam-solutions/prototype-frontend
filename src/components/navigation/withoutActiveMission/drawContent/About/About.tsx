import React from "react";
import styled from "styled-components";
import Version from "./Version";
import Welcome from "./Welcome";
import Faq from "./FAQ";
import Legals from "./Legals";
import ClearData from "./ClearData";

const About = () => {
  return (
    <StyledAboutWrapper>
      <StyledDrawHeader>
        <StyledHeading>About</StyledHeading>
      </StyledDrawHeader>

      <StyledAboutContent>
        <Version />
        <Welcome />
        <Faq />
        <Legals />
        <ClearData />
      </StyledAboutContent>
    </StyledAboutWrapper>
  );
};

const StyledDrawHeader = styled.div`
  padding-bottom: 1rem;
  /* margin-bottom: 0.8rem; */

  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledHeading = styled.p`
  font-weight: 500;
  font-size: 2rem;
  color: ${(props) => props.theme.primaryFontColor};
`;

const StyledAboutWrapper = styled.div`
  position: absolute;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  pointer-events: auto;
`;

const StyledAboutContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0.5rem;
  justify-content: center;
  height: 55vh;
  overflow-x: hidden;
  overflow-y: scroll;
`;

export default About;

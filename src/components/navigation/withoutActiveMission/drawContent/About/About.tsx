import React from 'react';
import styled from 'styled-components';
import Version from './Version';
import Welcome from './Welcome';
import Faq from './FAQ';
import Legals from './Legals';
import ClearData from './ClearData';

type Props = {};

const About = (props: Props) => {
  return (
    <StyledAboutWrapper>

      <StyledHeader>
        <p>About</p>
      </StyledHeader>
     
      <StyledAboutContent>
        <Version />
        <Welcome />
        <Faq />
        <Legals />
        <ClearData />

      </StyledAboutContent>

    </StyledAboutWrapper>
  )  
};

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

const StyledHeader = styled.div`
  width: 80%;
  padding: 1rem;
  
  display: flex;
  justify-content: center;
  
  color: ${(props) => props.theme.primaryFontColor};
  font-size: 1.1rem;
  font-weight: 500;
  
  overflow: hidden;
`;

const StyledAboutContent = styled.div`
  height: 55vh;
  padding: 0.5rem;  
  
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  
  overflow-x: hidden;
  overflow-y: scroll; 
`;

export default About;
import React from 'react';
import styled from 'styled-components';

type Props = {};

const About = (props: Props) => {
  return (
    <StyledAboutWrapper>

      <StyledHeader>
        <p>About</p>
      </StyledHeader>
     
      <StyledAboutContent>

        <StyledAboutWelcome>
          <AboutWelcome />
        </StyledAboutWelcome>
        <div>
          testing
        </div>

      </StyledAboutContent>

    </StyledAboutWrapper>
  )  
};

const AboutWelcome = () => {
  return (
    <div>
      <p>Welcome and thank you for choosing to use hereIam. With well over 100 users worldwide, 
          you can save more lives by making better decisions.</p>
      <p>&nbsp;</p>    
      <p>hereIam is a project of Project X Consulting GmbH, a German based company - 
          supported by professionals and experts in Urban Search & Rescue from all over Europe.</p>
          
    </div>      
  );
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
  display: flex;
  flex-wrap: wrap;
  padding: 0.5rem;
  justify-content: space-around;
  height: 55vh;
  overflow-x: hidden;
  overflow-y: scroll;
  
`;
const StyledAboutWelcome = styled.div`
  margin: 0.4rem;
  padding: 1rem;
  width: 100%;
  font-size: 0.8rem;
  font-weight: 200;
`;



export default About;
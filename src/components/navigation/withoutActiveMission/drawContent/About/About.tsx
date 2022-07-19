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

const StyledAboutContent = styled.div`
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
const StyledAboutWelcome = styled.div`
padding: 2rem;
font-size: 0.8rem;
font-weight: 200;
`;



export default About;
import React from 'react';
import styled from 'styled-components';

type Props = {};

const About = (props: Props) => {
  return (
    <StyledAboutWrapper>

      <StyledAboutHeader>
        <AboutHeader />
      </StyledAboutHeader>
     
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
          supported by professionals and experts in Urban Search and Rescue from all over Europe.</p>
          <p>&nbsp;</p>    
      <p>hereIam is a project of Project X Consulting GmbH, a German based company - 
          supported by professionals and experts in Urban Search and Rescue from all over Europe.</p>
          <p>&nbsp;</p>    
      <p>hereIam is a project of Project X Consulting GmbH, a German based company - 
          supported by professionals and experts in Urban Search and Rescue from all over Europe.</p>
          <p>&nbsp;</p>    
      <p>hereIam is a project of Project X Consulting GmbH, a German based company - 
          supported by professionals and experts in Urban Search and Rescue from all over Europe.</p>
          <p>&nbsp;</p>    
      <p>hereIam is a project of Project X Consulting GmbH, a German based company - 
          supported by professionals and experts in Urban Search and Rescue from all over Europe.</p>
    </div>      
  );
};

function AboutHeader() {
  return (
    <div>
      About
    </div>
  );
}

const StyledAboutWrapper = styled.div`
position: absolute;
width: 100vw;
display: flex;
flex-direction: column;
align-items: center;
overflow: hidden;
pointer-events: auto;
`;

const StyledAboutHeader = styled.div`
position: sticky;
top: 0px;
width: 100vw;
height: 3rem;
border-radius: ${(props) => props.theme.drawerBorderRadius} ${(props) => props.theme.drawerBorderRadius} 5px 5px;
background: ${(props) => props.theme.primaryBackgroundColor};
color: ${(props) => props.theme.primaryFontColor};
font-size: 1.4rem;
font-weight: 600;
display: flex;
align-items: center;
justify-content: space-around;
opacity: 0.75;
overflow: hidden;
`;

const StyledAboutContent = styled.div`
  height: auto;  
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: column;
  margin-top: 1.2rem;
  overflow-x: hidden;
  overflow-y: scroll;
`;
const StyledAboutWelcome = styled.div`
padding: 2rem;
font-size: 0.8rem;
font-weight: 200;

`;



export default About;
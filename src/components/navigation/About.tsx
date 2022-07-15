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
        Text
      </StyledAboutContent>
      
    </StyledAboutWrapper>
  )  
};

const AboutHeader = () => {
  return (
    <div>
      About
    </div>
  );
};

const StyledAboutWrapper = styled.div`
position: absolute;
width: 100vw;
display: flex;
flex-direction: column;
align-items: flex-start;
`;

const StyledAboutHeader = styled.div`
position: relative;
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
`;

const StyledAboutContent = styled.div`
  padding: 2rem 1rem 1rem 1rem;
  font-size: 0.8rem;
  font-weight: 200;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export default About;
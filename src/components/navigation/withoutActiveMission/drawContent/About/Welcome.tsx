import React from 'react';
import styled from 'styled-components';

type Props = {};

const Welcome = (props: Props) => {
  return (
    <StyledAboutWelcome>
      <p>Welcome and thank you for choosing to use hereIam. With well over 100 users worldwide, 
          you can save more lives by making better decisions.</p>
      <p>&nbsp;</p>    
      <p>hereIam is a project of Project X Consulting GmbH, a German based company - 
          supported by professionals and experts in Urban Search & Rescue from all over Europe.</p>       
    </StyledAboutWelcome>
  )  
};

const StyledAboutWelcome = styled.div`
    width: 100%;
    margin: 0.4rem;
    padding: 1rem;
    font-size: 0.8rem;
    font-weight: 200;
`;

export default Welcome;
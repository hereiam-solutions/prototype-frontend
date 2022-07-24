import React from 'react'
import useRealm from '../../../../../hooks/useRealm';
import styled from 'styled-components';
import HeroImage from '../../../../../assets/k9search.jpg';

const ProfileHead = () => {
  return (
    <StyledHeadWrapper
      style={{ 
        backgroundImage: `url(${HeroImage})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}  
    >
      Hello World

    </StyledHeadWrapper>
  );
};

const StyledHeadWrapper = styled.div`
  height: 20vh;
  margin: 0;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  pointer-events: auto;

  zoom: 1;
  filter: alpha(opacity=20);
  opacity: 0.2;

  :hover {
    zoom: 1;
    filter: alpha(opacity=50);
    opacity: 0.5;
    -webkit-transition: opacity .15s ease-in-out;
    -moz-transition: opacity .15s ease-in-out;
    -ms-transition: opacity .15s ease-in-out;
    -o-transition: opacity .15s ease-in-out;
    transition: opacity .15s ease-in-out;

`;

export default ProfileHead;
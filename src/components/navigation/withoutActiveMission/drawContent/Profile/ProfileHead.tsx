import React from 'react'
import useRealm from '../../../../../hooks/useRealm';
import styled from 'styled-components';
import HeroImage from '../../../../../assets/k9search.jpg';
import { RiAtFill, RiEditBoxFill, RiRadarFill } from "react-icons/ri";

import { RiPhoneFill } from "react-icons/ri";

const PhoneIcon = RiPhoneFill;

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
    <StyledCom>
      <div>
        <ul className='comlist'>
          <li>phone</li>
          <li>sat</li>
          <li>mail</li>
        </ul> 
      </div>
    </StyledCom>

    <StyledRadio>
      <div>
        <ul className='comlist'>
        <li>callsign</li>
          <li>channel</li>
          <li>frequency</li>
        </ul> 
      </div>
    </StyledRadio> 

    
    
    </StyledHeadWrapper>
  );
};

const StyledCom = styled.div`
  width: 50%;
  height: 20vh;
  background: white;

`;

const StyledRadio = styled.div`
  float: right;
  width: 50%;
  height: 20vh;
  background: red;
`;


const StyledHeadWrapper = styled.div`
  height: 20vh;
  margin: 0;

  display: flex;
  flex-direction: raw;
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
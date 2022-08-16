import React from 'react'
import styled from 'styled-components';
import HeroImage from '../../../../../assets/k9search.jpg';
import { RiAtFill, RiPhoneFill, RiRadarFill, RiSignalTowerFill } from "react-icons/ri";

const PhoneIcon = RiPhoneFill;
const EmailIcon = RiAtFill;
const SatIcon = RiRadarFill;
const RadioIcon = RiSignalTowerFill;


const ProfileHead = () => {
  return (
    <>

      <StyledHeadWrapper
        style={{ 
          backgroundImage: `url(${HeroImage})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}  
      >
     
    </StyledHeadWrapper>

    <StyledCom>
        <div>
          <ul className='comlist'>
            {/*phone*/}
            <li><PhoneIcon size={10}/> 0040 722 765 998</li>
            {/*satcom*/}
            <li><SatIcon size={10} /> +1-888-420-4354</li>
            {/*email*/}
            <li><EmailIcon size={10}/> ben.tester@cnec.ro</li>
          </ul> 
        </div>
    </StyledCom>

    <StyledRadio>
        <div>
          <ul className='satcomlist'>
            <li><RadioIcon size={35}/></li>
            {/*channel*/}
            <li>USAR11</li>
            {/*frequency*/}
            <li>347-510UB<br/>347-509OB</li>
            {/*callsign*/}
            <li><span>RO011 Team Leader</span></li>
          </ul> 
        </div>
    </StyledRadio>
    
    </>

      );
    };
    
const StyledCom = styled.div`
  margin-top: -20vh;
  width: 66%;
  height: 20vh;


  ul.comlist {
    list-style: none;
    padding: 0.5rem;
    line-height: 0.6rem;
  }

  li.comlist {
    
  }

  color: ${(props) => props.theme.primaryFontColor};
  font-size: 0.6rem;
  font-weight: 800;

`;

const StyledRadio = styled.div`
  float: right;
  margin-top: -22vh;
  width: 33%;
  height: 20vh;

  color: ${(props) => props.theme.primaryFontColor};
  font-size: 0.6rem;
  font-weight: 800;

  ul.satcomlist {
    list-style: none;
  }

  li.satcomlist {
    display: flex;
    flex-direction: raw;
    align-items: center;
    justify-content: center;

    line-height: 1rem;
    
  }

  span {
    
    font-size: 1rem;
    font-weight: 800;
    line-height: 1rem;
    
  }

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
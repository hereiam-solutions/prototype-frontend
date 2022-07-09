//import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import useNavigation from '../../hooks/useNavigation';
import Draw from './Draw';

import { ReactComponent as LogoHereiam } from '../../assets/Logo/light/hereIam_logo_light256x256.svg';

const About = () => {
  const { isDrawOpen, setIsDrawOpen } = useNavigation();

  return (
    <>
      <StyledAboutMenu role="navigation">
        <StyledAboutButton onClick={() => setIsDrawOpen(true)} to="about">
          <LogoHereiam />
        </StyledAboutButton>
        <div>
            <h4>hereIam</h4>
        </div>
      </StyledAboutMenu>

      {isDrawOpen && <Draw usedInAuthentication={false} />}
    </>
  );
};

const StyledAboutMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.3rem;
  position: absolute;
  bottom: 5%;
  left: 3rem;
  z-index: 4;
  pointer-events: auto;
`;

const StyledAboutButton = styled(Link)`
 
`;

export default About;
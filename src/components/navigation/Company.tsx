//import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import useNavigation from '../../hooks/useNavigation';
import Draw from './Draw';

import { ReactComponent as LogoHereiam } from '../../assets/Logo/light/hereIam_logo_light256x256.svg';

function Company() {
  const { isDrawOpen, setIsDrawOpen } = useNavigation();

  return (
    <>
      <StyledCompanyMenu role="navigation">
        <StyledCompanyButton onClick={() => setIsDrawOpen(true)} to="about">
          <LogoHereiam />
        </StyledCompanyButton>
        <div>
          <h4>hereIam</h4>
        </div>
      </StyledCompanyMenu>

      {isDrawOpen && <Draw usedInAuthentication={false} />}
    </>
  );
}

const StyledCompanyMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.3rem;
  position: absolute;
  bottom: 5%;
  right: 5rem;
  z-index: 2;
  pointer-events: auto;
`;

const StyledCompanyButton = styled(Link)`
 color: black;
`;

export default Company;
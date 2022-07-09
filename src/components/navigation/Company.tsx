//import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import useNavigation from '../../hooks/useNavigation';
import Draw from './Draw';

import LogoHereiam from '../../assets/Logo/icon-72x72.png';

function Company() {
  const { isDrawOpen, setIsDrawOpen } = useNavigation();

  return (
    <>
      <StyledCompanyMenu role="navigation">
        <StyledCompanyButton onClick={() => setIsDrawOpen(true)} to="about">
          <img src={LogoHereiam} alt='hereIam Logo' />
        </StyledCompanyButton>
        <div>
          <h6>hereIam</h6>
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
  gap: 0.5rem;
  position: absolute;
  bottom: 5%;
  left: 2rem;
  z-index: 2;
  pointer-events: auto;
`;

const StyledCompanyButton = styled(Link)`
 color: ${(props) => props.theme.secondaryFontColor};
`;

export default Company;
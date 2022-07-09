//import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import useNavigation from '../../hooks/useNavigation';
import Draw from './Draw';

import { ReactComponent as DashboardButton } from '../../assets/Navigation/Dashboard.svg';
import { ReactComponent as SettingsButton } from '../../assets/Navigation/Settings.svg';
import { ReactComponent as ProfileButton } from '../../assets/Navigation/User.svg';


const Nav = () => {
  const { isDrawOpen, setIsDrawOpen } = useNavigation();

  return (
    <>
      <StyledNavigationMenu role="navigation">
        <StyledMenuButton onClick={() => setIsDrawOpen(true)} to="mission">
          <DashboardButton />
        </StyledMenuButton>

        <StyledMenuButton onClick={() => setIsDrawOpen(true)} to="settings">
          <SettingsButton />
        </StyledMenuButton>

        <StyledMenuButton onClick={() => setIsDrawOpen(true)} to="profile">
          <ProfileButton />
        </StyledMenuButton>
      </StyledNavigationMenu>

      {isDrawOpen && <Draw usedInAuthentication={false} />}
    </>
  );
};

const StyledNavigationMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  gap: 1em;
  position: absolute;
  bottom: 5%;
  left: 80%;
  z-index: 2;
  pointer-events: auto;
`;

const StyledMenuButton = styled(Link)`
  background: white;
  border-radius: 50%;
  width: 3em;
  height: 3em;
`;

export default Nav;

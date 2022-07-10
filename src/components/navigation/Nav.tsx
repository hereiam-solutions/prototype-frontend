//import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import useActionMenu from '../../hooks/useActionMenu';
import useNavigation from '../../hooks/useNavigation';
import Draw from './Draw';

// svg imports
import { ReactComponent as DashboardButton } from '../../assets/Navigation/Dashboard.svg';
import { ReactComponent as SettingsButton } from '../../assets/Navigation/Settings.svg';
import { ReactComponent as ProfileButton } from '../../assets/Navigation/User.svg';

const Nav = () => {
  const { isDrawOpen, setIsDrawOpen } = useNavigation();

  return (
    <>
      <StyledNavigationMenu role="navigation">
      
        <StyledMenuButton
          onClick={() => {
            setIsDrawOpen(true);
          }}
          to="dashboard"
        >
          <DashboardButton />
        </StyledMenuButton>

        <StyledMenuButton
          onClick={() => {
            setIsDrawOpen(true);
          }}
          to="settings"
        >
          <SettingsButton />
        </StyledMenuButton>

        <StyledMenuButton
          onClick={() => {
            setIsDrawOpen(true);
          }}
          to="profile"
        >

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
  gap: 1.3rem;
  position: absolute;
  bottom: 5%;
  right: 3rem;
  z-index: 2;
  pointer-events: auto;
`;

const StyledMenuButton = styled(Link)`
 
`;

export default Nav;

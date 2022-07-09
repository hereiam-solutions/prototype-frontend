//import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import useNavigation from '../../hooks/useNavigation';
import Draw from './Draw';



import { ReactComponent as SettingsButton } from '../../assets/Navigation/Settings.svg';
import { ReactComponent as ProfileButton } from '../../assets/Navigation/User.svg';

const DashboardButton = () => {
  var DashboardButtonWidth = 50;
  var DashBoardButtonHeigth = 52;
  var fillColor = '#FEFEFF';
  return (
    <div>
        <svg 
          width="50" 
          height="52" 
          viewBox="0 0 50 52" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_138_1404)">
          <path 
            fill-rule="evenodd" 
            clip-rule="evenodd" 
            d="M10.4167 6.25H39.5833C41.875 6.25 43.75 8.125 43.75 10.4167V39.5833C43.75 41.875 41.875 43.75 39.5833 43.75H10.4167C8.125 43.75 6.25 41.875 6.25 39.5833V10.4167C6.25 8.125 8.125 6.25 10.4167 6.25ZM14.5833 35.4167H18.75V20.8333H14.5833V35.4167ZM27.0833 35.4167H22.9167V14.5833H27.0833V35.4167ZM31.25 35.4167H35.4167V27.0833H31.25V35.4167Z" 
            fill="#FEFEFF"
          />
          </g>
          <defs>
          <filter id="filter0_d_138_1404" x="-4" y="0" width="58" height="58" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="2"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_138_1404"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_138_1404" result="shape"/>
          </filter>
          </defs>
      </svg>
    </div>
  );
};

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
  gap: 1.3rem;
  position: absolute;
  bottom: 5%;
  left: 80%;
  z-index: 2;
  pointer-events: auto;
`;

const StyledMenuButton = styled(Link)`
 
`;

export default Nav;

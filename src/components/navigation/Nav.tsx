import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Draw from './Draw';

const Nav = () => {
  const [drawIsOpen, setDrawIsOpen] = useState(false);

  return (
    <>
      <StyledNavigationMenu role="navigation">
        <StyledMenuButton onClick={() => setDrawIsOpen(true)} to="mission">
          Missions
        </StyledMenuButton>

        <StyledMenuButton onClick={() => setDrawIsOpen(true)} to="settings">
          Settings
        </StyledMenuButton>

        <StyledMenuButton onClick={() => setDrawIsOpen(true)} to="profile">
          Profile
        </StyledMenuButton>
      </StyledNavigationMenu>

      {drawIsOpen && <Draw setDrawIsOpen={setDrawIsOpen} />}
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

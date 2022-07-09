import React from 'react';
import styled from 'styled-components';
import useActionMenu from '../../hooks/useActionMenu';

// this menu should open when a user long presses anywhere on the map
// a context in combination with react-long-press is probably a good idea
const ActionMenu = () => {
  const { isActionMenuOpen, setIsActionMenuOpen } = useActionMenu();

  return isActionMenuOpen ? (
    <StyledBackground onClick={() => setIsActionMenuOpen(false)}>
      ActionMenu
    </StyledBackground>
  ) : null;
};

const StyledBackground = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  color: white;
  position: absolute;
  height: 100vh;
  width: 100vw;
  z-index: 10;
  background: rgba(0, 0, 0, 0.1);
`;
export default ActionMenu;

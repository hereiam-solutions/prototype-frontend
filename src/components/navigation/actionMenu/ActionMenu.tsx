import React from 'react';
import styled from 'styled-components';
import useActionMenu from '../../../hooks/useActionMenu';
import ActionMenuButton from './ActionMenuButton';
import { Position } from './ActionMenuButton';

// this menu should open when a user long presses anywhere on the map
// a context in combination with react-long-press is probably a good idea
const ActionMenu = () => {
  const { isActionMenuOpen, setIsActionMenuOpen } = useActionMenu();

  return isActionMenuOpen ? (
    <StyledBackground>
      <StyledActionContainer>
        <ActionMenuButton positionInActionMenu={Position.TOP} />
        <ActionMenuButton positionInActionMenu={Position.LEFT} />
        <ActionMenuButton positionInActionMenu={Position.MID} />
        <ActionMenuButton positionInActionMenu={Position.RIGHT} />
        <ActionMenuButton positionInActionMenu={Position.BOTTOM} />
      </StyledActionContainer>
    </StyledBackground>
  ) : null;
};

const StyledActionContainer = styled.div`
  display: grid;
  grid-template-columns: 30px 30px 30px;
  grid-template-rows: 30px 30px 30px;
  grid-gap: 40px;
  grid-template-areas:
    '. TOP .'
    'LEFT MID RIGHT'
    '. BOTTOM .';
`;

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

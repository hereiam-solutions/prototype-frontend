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
    <StyledBackground onClick={() => setIsActionMenuOpen(false)}>
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

const StyledBackground = styled.div`
  position: absolute;
  height: 100vh;
  width: 100vw;
  z-index: 10;
  /* background: rgba(0, 0, 0, 0.1); */
`;

const StyledActionContainer = styled.div`
  position: absolute;
  left: ${(props) => props.theme.x}px;
  top: ${(props) => props.theme.y}px;

  transform: translate(-50%, -50%);
  /* transform: translateY(-50%); */

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-gap: 5vw;
  grid-template-areas:
    '. TOP .'
    'LEFT MID RIGHT'
    '. BOTTOM .';
`;

export default ActionMenu;

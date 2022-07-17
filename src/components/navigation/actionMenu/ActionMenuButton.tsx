import styled from 'styled-components';
import useActionMenu from '../../../hooks/useActionMenu';

// svg imports
import { ReactComponent as DangerIcon } from '../../../assets/Action/Aktion=Gefahr.svg';
import { ReactComponent as TaskIcon } from '../../../assets/Action/Aktion=Task.svg';
import { ReactComponent as CasualtyIcon } from '../../../assets/Action/Aktion=Verletzte.svg';
import { ReactComponent as DrawIcon } from '../../../assets/Action/Aktion=Zeichnen.svg';

export enum Position {
  TOP = 'TOP',
  LEFT = 'LEFT',
  MID = 'MID',
  RIGHT = 'RIGHT',
  BOTTOM = 'BOTTOM',
}

type ActionMenuButtonProps = {
  positionInActionMenu: Position;
};

type StyledComponentProps = {
  positionInActionMenu: string;
};

const ActionMenuButton = ({ positionInActionMenu }: ActionMenuButtonProps) => {
  const { setIsActionMenuOpen, setIsCreateMarkerModeEnabled } = useActionMenu();

  const handleClick = () => {
    // TODO: close action menu and either open draw or let user pick location with event

    setIsActionMenuOpen(false);

    if (
      [Position.LEFT, Position.RIGHT, Position.BOTTOM].includes(
        positionInActionMenu
      )
    ) {
      setIsCreateMarkerModeEnabled(true);
    }
  };

  if (positionInActionMenu === Position.LEFT) {
    return (
      <StyledButton
        onClick={handleClick}
        positionInActionMenu={positionInActionMenu}
      >
        <DangerIcon />
      </StyledButton>
    );
  }

  if (positionInActionMenu === Position.TOP) {
    return (
      <StyledButton
        onClick={handleClick}
        positionInActionMenu={positionInActionMenu}
      >
        <DrawIcon />
      </StyledButton>
    );
  }

  if (positionInActionMenu === Position.RIGHT) {
    return (
      <StyledButton
        onClick={handleClick}
        positionInActionMenu={positionInActionMenu}
      >
        <CasualtyIcon />
      </StyledButton>
    );
  }

  if (positionInActionMenu === Position.BOTTOM) {
    return (
      <StyledButton
        onClick={handleClick}
        positionInActionMenu={positionInActionMenu}
      >
        <TaskIcon />
      </StyledButton>
    );
  }

  return (
    <StyledX onClick={handleClick} positionInActionMenu={positionInActionMenu}>
      X
    </StyledX>
  );
};

const StyledButton = styled.div`
  grid-area: ${(props: StyledComponentProps) => props.positionInActionMenu};
  border-radius: 50%;

  width: 40px;
  height: 40px;

  display: flex;

  z-index: 11;
`;

const StyledX = styled.div`
  grid-area: ${(props: StyledComponentProps) => props.positionInActionMenu};

  color: white;
  font-size: 2rem;
  font-weight: 600;

  width: 40px;
  height: 40px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export default ActionMenuButton;

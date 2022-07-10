import styled from 'styled-components';
import useActionMenu from '../../../hooks/useActionMenu';

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
  const {
    isActionMenuOpen,
    setIsActionMenuOpen,
    isCreateMarkerModeEnabled,
    setIsCreateMarkerModeEnabled,
  } = useActionMenu();
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

  return (
    <StyledButton
      onClick={handleClick}
      positionInActionMenu={positionInActionMenu}
    >
      {positionInActionMenu}
    </StyledButton>
  );
};

const StyledButton = styled.div`
  grid-area: ${(props: StyledComponentProps) => props.positionInActionMenu};
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  background: grey;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 11;
`;

export default ActionMenuButton;

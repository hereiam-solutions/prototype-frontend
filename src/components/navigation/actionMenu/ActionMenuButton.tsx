import styled from "styled-components";
import useActionMenu from "../../../hooks/useActionMenu";

// logo imports
import { RiCloseCircleFill } from "react-icons/ri"; //MID
import { MdNotListedLocation } from "react-icons/md"; //TOP
import { RiUserAddFill } from "react-icons/ri"; //RIGHT
import { MdReportProblem } from "react-icons/md"; //LEFT
import { RiFlag2Fill } from "react-icons/ri"; //BOTTOM

import { MarkerType } from "../../map/mapTypes";
import useModal from "../../../hooks/useModal";

import { useTranslation } from 'react-i18next';

export enum Position {
  TOP = "TOP",
  LEFT = "LEFT",
  MID = "MID",
  RIGHT = "RIGHT",
  BOTTOM = "BOTTOM",
}

type ActionMenuButtonProps = {
  positionInActionMenu: Position;
};

type StyledComponentProps = {
  positionInActionMenu: string;
};

const ActionMenuButton = ({ positionInActionMenu }: ActionMenuButtonProps) => {
  const { setIsModalActive, setModalContent } = useModal();

  const { setIsActionMenuOpen, setIsCreateMarkerModeEnabled, setMarkerType } =
    useActionMenu();
  
  const { t } = useTranslation();

  const handleModal = () => {
    setModalContent(
      t("Actionmenu.modal1")
    );

    setIsModalActive(true);
  };

  const handleClick = () => {
    setIsActionMenuOpen(false);

    if (positionInActionMenu === Position.LEFT) {
      setMarkerType(MarkerType.HAZARD);
      setIsCreateMarkerModeEnabled(true);
      handleModal();
    } else if (positionInActionMenu === Position.BOTTOM) {
      setMarkerType(MarkerType.LOCATION);
      setIsCreateMarkerModeEnabled(true);
      handleModal();
    } else if (positionInActionMenu === Position.RIGHT) {
      setMarkerType(MarkerType.PATIENT);
      setIsCreateMarkerModeEnabled(true);
      handleModal();
    }
    else if (positionInActionMenu === Position.TOP) {
      setMarkerType(MarkerType.SIGNAL);
      setIsCreateMarkerModeEnabled(true);
      handleModal();
    }
  };

  if (positionInActionMenu === Position.LEFT) {
    return (
      <StyledButton
        onClick={handleClick}
        positionInActionMenu={positionInActionMenu}
        className={"item"}
      >
        <MdReportProblem
          size={35}
        />
      </StyledButton>
    );
  }

  if (positionInActionMenu === Position.TOP) {
    return (
      <StyledButton
        onClick={handleClick}
        positionInActionMenu={positionInActionMenu}
        className={"item"}
      >
        <MdNotListedLocation
          size={35}
        />
      </StyledButton>
    );
  }

  if (positionInActionMenu === Position.RIGHT) {
    return (
      <StyledButton
        onClick={handleClick}
        positionInActionMenu={positionInActionMenu}
        className={"item"}
      >
        <RiUserAddFill
          size={35}
        />
      </StyledButton>
    );
  }

  if (positionInActionMenu === Position.BOTTOM) {
    return (
      <StyledButton
        onClick={handleClick}
        positionInActionMenu={positionInActionMenu}
        className={"item"}
      >
        <RiFlag2Fill
        size={35}
        />
      </StyledButton>
    );
  }

  return (
    <StyledX
      onClick={handleClick}
      positionInActionMenu={positionInActionMenu}
      className={"item"}
    >
      
      <RiCloseCircleFill
        size={35}
      />
    </StyledX>
  );
};

const StyledButton = styled.div`
  grid-area: ${(props: StyledComponentProps) => props.positionInActionMenu};
  border-radius: 5px;

  height: 50px;
  width: 50px;

  display: flex;
  justify-content: center;
  align-items: center;

  color: var(--gray-200);

  z-index: 11;
`;

const StyledX = styled.div`
  grid-area: ${(props: StyledComponentProps) => props.positionInActionMenu};
  border-radius: 50%;

  width: 50px;
  height: 50px;

  display: flex;
  justify-content: center;
  align-items: center;

  color: var(--gray-200);

  z-index: 11;

  opacity: 0.5;
`;

export default ActionMenuButton;

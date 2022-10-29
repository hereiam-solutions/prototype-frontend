import styled from "styled-components";
import useActionMenu from "../../../hooks/useActionMenu";

// svg imports
import { ReactComponent as DangerIcon } from "../../../assets/Action/Aktion=Gefahr.svg";
import { ReactComponent as TaskIcon } from "../../../assets/Action/Aktion=Task.svg";
import { ReactComponent as CasualtyIcon } from "../../../assets/Action/Aktion=Verletzte.svg";
import { ReactComponent as DrawIcon } from "../../../assets/Action/Aktion=Zeichnen.svg";
import { ReactComponent as CloseIcon } from "../../../assets/Action/Close.svg";

import { RiCloseCircleFill } from "react-icons/ri";
import { RiHealthBookFill } from "react-icons/ri";
import { RiFlag2Fill } from "react-icons/ri";
import { MdReportProblem } from "react-icons/md";
import { RiUserLocationFill } from "react-icons/ri";


import { MarkerType } from "../../map/mapTypes";
import useModal from "../../../hooks/useModal";

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

  const handleModal = () => {
    setModalContent("Tap once at the location you want to set the marker");

    // setTimeout(() => {
    //   setIsModalActive(false);
    // }, 6000);

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
      <StyledOpacityButton
        onClick={handleClick}
        positionInActionMenu={positionInActionMenu}
      >
        <RiUserLocationFill
          size={35}
        />
      </StyledOpacityButton>
    );
  }

  if (positionInActionMenu === Position.RIGHT) {
    return (
      <StyledButton
        onClick={handleClick}
        positionInActionMenu={positionInActionMenu}
        className={"item"}
      >
        <RiHealthBookFill
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
    <StyledX onClick={handleClick} positionInActionMenu={positionInActionMenu}>
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

  color: ${(props) => props.theme.attentionColor};

  z-index: 11;
`;

const StyledOpacityButton = styled.div`
  grid-area: ${(props: StyledComponentProps) => props.positionInActionMenu};
  border-radius: 50%;

  height: 50px;
  width: 50px;

  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 11;

  opacity: 0.5;
`;

const StyledX = styled.div`
  grid-area: ${(props: StyledComponentProps) => props.positionInActionMenu};

  width: 50px;
  height: 50px;

  display: flex;
  justify-content: center;
  align-items: center;

  color: ${(props) => props.theme.attentionColor};

  z-index: 11;
`;

export default ActionMenuButton;

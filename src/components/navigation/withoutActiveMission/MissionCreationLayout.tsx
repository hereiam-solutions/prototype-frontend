import Nav from "../Nav";
import Modal from "../Modal";

import useModal from "../../../hooks/useModal";
import PolygonDrawingMap from "../../map/PolygonDrawingMap";

import styled from "styled-components";

const MissionCreationLayout = () => {
  const { isModalActive } = useModal();

  return (
    <StyledAppWrapper>
      {isModalActive && <Modal />}

      <PolygonDrawingMap />

      <StyledNavWrapper>
        <Nav />
      </StyledNavWrapper>

    </StyledAppWrapper>
  );
};

const StyledAppWrapper = styled.div`
  position: relative;
`;

const StyledNavWrapper = styled.div`
  height: 100vh;
  width: 100vw;

  display: flex;
  justify-content: center;
  align-items: end;

  pointer-events: none;
  position: absolute;
`;

export default MissionCreationLayout;

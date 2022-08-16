import styled from "styled-components";
import PolygonDrawingMap from "../../map/PolygonDrawingMap";
import Nav from "../Nav";

import useModal from "../../../hooks/useModal";
import Modal from "../Modal";

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
  pointer-events: none;
  position: absolute;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: end;
`;

export default MissionCreationLayout;

import styled from "styled-components";
import MissionMap from "../../map/MissionMap";
import ActionMenu from "../actionMenu/ActionMenu";
import Nav from "../Nav";
import useModal from "../../../hooks/useModal";
import Modal from "../Modal";

const MissionLayout = () => {
  const { isModalActive } = useModal();

  return (
    <StyledAppWrapper>
      {isModalActive && <Modal />}
      <ActionMenu />
      
      <MissionMap />

      <StyledNavWrapper>
        <Nav />
      </StyledNavWrapper>

    </StyledAppWrapper>
  );
};

const StyledAppWrapper = styled.div`
  position: relative;
  background: ${(props) => props.theme.primaryBackgroundColor};
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

export default MissionLayout;

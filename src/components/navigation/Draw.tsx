import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";
import useNavigation from "../../hooks/useNavigation";
import useMission from "../../hooks/useMission";

type DrawPropsType = {
  usedInAuthentication: boolean;
};
const Draw = ({ usedInAuthentication }: DrawPropsType) => {
  const { setIsDrawOpen } = useNavigation();

  const { activeMission } = useMission();

  return (
    <StyledDrawWrapper>
      <StyledDrawContentWrapper>
        <Outlet />
      </StyledDrawContentWrapper>

      {!usedInAuthentication && (
        <StyledMapOverlay
          to={activeMission ? "" : "/"}
          onClick={() => setIsDrawOpen(false)}
        />
      )}
    </StyledDrawWrapper>
  );
};

const StyledDrawWrapper = styled.div`
  /* position: absolute; */
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: end;
  pointer-events: auto;
  z-index: 3;
  overflow: hidden;
`;

const StyledMapOverlay = styled(Link)`
  position: fixed;
  background: rgba(1, 1, 1, 0.1);
  height: 100vh;
  width: 100vw;
`;

const StyledDrawContentWrapper = styled.div`
  width: 100vw;
  height: 66vh;
  overflow-y: auto;

  background: ${(props) => props.theme.secondaryBackgroundColor};
  color: ${(props) => props.theme.secondaryFontColor};

  z-index: 4;

  padding: ${(props) => props.theme.drawPadding};

  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: ${(props) => props.theme.drawerBorderRadius}
    ${(props) => props.theme.drawerBorderRadius} 0 0;

  opacity: 1;

  animation-name: fadeInBottom;
  animation-timing-function: ease-in;
  animation-duration: 0.2s;
  @keyframes fadeInBottom {
    0% {
      height: 0rem;
    }
    100% {
      height: 66vh;
    }
  }
`;

export default Draw;

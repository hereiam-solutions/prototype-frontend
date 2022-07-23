import styled from "styled-components";
import MissionCard from "../drawContent/MissionCard";
import { Link, useNavigate } from "react-router-dom";
import useMission from "../../../../hooks/useMission";
import useNavigation from "../../../../hooks/useNavigation";

const JoinMission = () => {
  const navigate = useNavigate();
  const { setIsPolygonDrawingActive } = useMission();
  const { setIsDrawOpen } = useNavigation();

  // starts the polygon drawing process for a mission creation
  const initiateMissionCreation = () => {
    setIsDrawOpen(false);
    navigate("/create-mission");

    // setIsPolygonDrawingActive(true);
  };

  return (
    <StyledDashboardWrapper>
      <StyledHeader>Join a Mission</StyledHeader>

      <StyledDashboardContent>
        <MissionCard />
        <StyledDeactivated>
          <MissionCard />
        </StyledDeactivated>

        <button onClick={initiateMissionCreation}>
          Create your own Mission!
        </button>
      </StyledDashboardContent>
    </StyledDashboardWrapper>
  );
};

const StyledDashboardWrapper = styled.div`
  position: absolute;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
  overflow-y: scroll;
  pointer-events: auto;
`;

const StyledHeader = styled.div`
  width: 80%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.primaryFontColor};
  font-size: 1.1rem;
  font-weight: 500;
  overflow: hidden;
`;

const StyledDashboardContent = styled.div`
  height: 55vh;
  width: 100%;
  padding: 2rem;

  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  /* align-items: center; */
  gap: 2rem;

  border-radius: ${(props) => props.theme.drawerBorderRadius}
    ${(props) => props.theme.drawerBorderRadius} 0 0;

  background: ${(props) => props.theme.secondaryBackgroundColor};

  overflow-x: hidden;
  overflow-y: scroll;

  z-index: 6;
`;

const StyledDeactivated = styled.div`
  opacity: 0.3;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.primaryFontColor};
`;

export default JoinMission;

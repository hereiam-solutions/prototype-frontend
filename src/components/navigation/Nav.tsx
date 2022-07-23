import { Link } from "react-router-dom";
import styled from "styled-components";
import useNavigation from "../../hooks/useNavigation";
import Draw from "./Draw";

// svg imports
import { ReactComponent as DashboardButton } from "../../assets/Navigation/Dashboard.svg";
import { ReactComponent as SettingsButton } from "../../assets/Navigation/Settings.svg";
import { ReactComponent as ProfileButton } from "../../assets/Navigation/User.svg";
import useMission from "../../hooks/useMission";

const Nav = () => {
  const { isDrawOpen, setIsDrawOpen } = useNavigation();
  const { activeMission, setIsPolygonDrawingActive } = useMission();

  return (
    <>
      <StyledNavigationMenu role="navigation">
        <StyledMenuButton
          onClick={() => {
            setIsDrawOpen(true);
            setIsPolygonDrawingActive(false);
          }}
          to={activeMission ? "dashboard" : "join-mission"}
        >
          <DashboardButton />
        </StyledMenuButton>

        <StyledMenuButton
          onClick={() => {
            setIsDrawOpen(true);
            setIsPolygonDrawingActive(false);
          }}
          to="settings"
        >
          <SettingsButton />
        </StyledMenuButton>

        <StyledMenuButton
          onClick={() => {
            setIsDrawOpen(true);
            setIsPolygonDrawingActive(false);
          }}
          to="profile"
        >
          <ProfileButton />
        </StyledMenuButton>
      </StyledNavigationMenu>

      {isDrawOpen && <Draw usedInAuthentication={false} />}
    </>
  );
};

const StyledNavigationMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  position: absolute;
  bottom: 1%;
  right: 1rem;
  z-index: 2;
  pointer-events: auto;
`;

const StyledMenuButton = styled(Link)``;

export default Nav;

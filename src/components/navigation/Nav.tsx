import { Link } from "react-router-dom";
import styled from "styled-components";
import useNavigation from "../../hooks/useNavigation";
import Draw from "./Draw";

// svg imports
import { RiFocus2Fill } from "react-icons/ri";
import { RiSettings4Fill } from "react-icons/ri";
import { RiTShirtFill } from "react-icons/ri";

//import { ReactComponent as DashboardButton } from "../../assets/Navigation/Dashboard_Dark.svg";
//import { ReactComponent as SettingsButton } from "../../assets/Navigation/Settings.svg";
//import { ReactComponent as ProfileButton } from "../../assets/Navigation/User.svg";
import useMission from "../../hooks/useMission";

let DashboardButton = RiFocus2Fill;
let SettingsButton = RiSettings4Fill;
let ProfileButton = RiTShirtFill;

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
          <StyledDashBoardButton>
            <DashboardButton />
          </StyledDashBoardButton>
          
        </StyledMenuButton>

        <StyledMenuButton
          onClick={() => {
            setIsDrawOpen(true);
            setIsPolygonDrawingActive(false);
          }}
          to="settings"
        >
          <StyledSettingsButton>
            <SettingsButton />
          </StyledSettingsButton>
          
        </StyledMenuButton>

        <StyledMenuButton
          onClick={() => {
            setIsDrawOpen(true);
            setIsPolygonDrawingActive(false);
          }}
          to="profile"
        >
          <StyledProfileButton>
            <ProfileButton />
          </StyledProfileButton>
          
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
  bottom: 2%;
  right: 4%;
  z-index: 2;
  pointer-events: auto;
`;

const StyledMenuButton = styled(Link)``;

const StyledDashBoardButton = styled.div`
  font-size: 3rem;
  color: ${(props) => props.theme.iconColor};
  filter: drop-shadow(10px 10px 20px #fffff8) invert(35%);
`;

const StyledSettingsButton = styled.div`
  font-size: 3rem;
  color: ${(props) => props.theme.iconColor};
  filter: drop-shadow(10px 10px 20px #fffff8) invert(35%);
`;

const StyledProfileButton = styled.div`
  font-size: 3rem;
  color: ${(props) => props.theme.iconColor};
  filter: drop-shadow(10px 10px 20px #fffff8) invert(35%);
`;

export default Nav;

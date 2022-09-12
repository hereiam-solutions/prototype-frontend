import { Link } from "react-router-dom";
import styled from "styled-components";
import useNavigation from "../../hooks/useNavigation";
import Draw from "./Draw";

// logo imports
import { RiFocus2Fill } from "react-icons/ri";
import { RiSettings4Fill } from "react-icons/ri";
import { RiTShirtFill } from "react-icons/ri";

import LightLogo from "../../assets/Logo/light/hereIam_logo_light96x96.svg";

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

        {/**inject company Logo and name */}
        <StyledCompanyButton onClick={() => setIsDrawOpen(true)} to="about">
          <StyledCompanyName>hereIam</StyledCompanyName>
          <img src={LightLogo} width="60px" alt="hereIam Logo" />
        </StyledCompanyButton>

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

const StyledCompanyButton = styled(Link)`

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-decoration: none;

  filter: drop-shadow(10px 10px 20px #fffff8) invert(35%);
`;

const StyledCompanyName = styled.p`
  margin-bottom: 1.7rem;
  transform: rotate(-90deg);

  font-size: 1.3rem;
  font-weight: 600;

  color: ${(props) => props.theme.iconColor};
  filter: drop-shadow(10px 10px 20px #fffff8) invert(35%);
`;

export default Nav;

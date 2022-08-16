import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import useNavigation from "../../../../../hooks/useNavigation";
import useRealm from "../../../../../hooks/useRealm";
import ProfileName from "./ProfileName";
import ProfileHead from "./ProfileHead";
import MyMissions from "./MyMissions";
import DriverLicenses from "./DriverLicenses";
import useMission from "../../../../../hooks/useMission";

const Profile = () => {
  const { realm } = useRealm();
  const { setActiveMission, setIsPolygonDrawingActive } = useMission();
  const { setIsDrawOpen } = useNavigation();

  let navigate = useNavigate();

  const handleLogOut = async () => {
    await realm.currentUser?.logOut();

    setActiveMission(null);
    setIsPolygonDrawingActive(false);
    setIsDrawOpen(false);

    navigate("/auth");
  };

  return (
    <StyledProfileWrapper>
      <StyledDrawHeader>
        <StyledHeading>Profile (Mockup)</StyledHeading>
      </StyledDrawHeader>

      <StyledProfileContent>
        <StyledPersonWrapper>
          <ProfileHead />
          <ProfileName />
        </StyledPersonWrapper>

        <MyMissions />

        <DriverLicenses />

        <StyledButton onClick={handleLogOut}>Log out</StyledButton>
      </StyledProfileContent>
    </StyledProfileWrapper>
  );
};

const StyledDrawHeader = styled.div`
  padding-bottom: 1rem;
  /* margin-bottom: 0.8rem; */

  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledHeading = styled.p`
  font-weight: 500;
  font-size: 2rem;
  color: ${(props) => props.theme.primaryFontColor};
`;

const StyledButton = styled.button`
  width: 60%;
  height: 3rem;

  margin-top: 1.5rem;
  margin-bottom: 4rem;

  font-weight: 700;
  text-align: center;

  align-self: center;

  color: ${(props) => props.theme.buttonFontColor};
  background-color: ${(props) => props.theme.buttonColor};

  border: 1px solid ${(props) => props.theme.formSubmitBorderColor};
  border-radius: ${(props) => props.theme.inputBorderRadius};
`;

const StyledProfileWrapper = styled.div`
  position: absolute;
  width: 100vw;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  overflow: hidden;
  pointer-events: auto;
`;

const StyledPersonWrapper = styled.div`
  width: 80%;
  border-radius: ${(props) => props.theme.primaryBorderRadius};
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const StyledProfileContent = styled.div`
  height: 55vh;
  padding: 0.5rem;

  background: ${(props) => props.theme.primaryBackgroundColor};

  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  overflow-x: hidden;
  overflow-y: scroll;
`;

export default Profile;

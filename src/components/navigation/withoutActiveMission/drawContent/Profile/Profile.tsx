import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import useNavigation from "../../../../../hooks/useNavigation";
import useRealm from "../../../../../hooks/useRealm";
import ProfileName from "./ProfileName";
import ProfileHead from "./ProfileHead";
import Bio from "./Bio";
import MyMissions from "./MyMissions";
import DriverLicenses from "./DriverLicenses";
import Skills from "./Skills";
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
      <StyledHeader>
        <p>Profile</p>
      </StyledHeader>

      <StyledProfileContent>
        <StyledPersonWrapper>
          <ProfileHead />

          <ProfileName />

          <Bio />
        </StyledPersonWrapper>

        <MyMissions />

        <DriverLicenses />

        <Skills 
          id={0} 
          category={""} 
          date={""} 
          titel={""} 
          institution={""} 
          confirmation={""} 
          name={""} 
          selector={""} 
          sortable={false} 
          right={false} 
          columns={undefined} 
          defaultSortField={""}
          customStyles={""}
        />

        <StyledLogOutButton onClick={handleLogOut}>
          Bye. Log me out
        </StyledLogOutButton>
      </StyledProfileContent>
    </StyledProfileWrapper>
  );
};

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

const StyledProfileContent = styled.div`
  height: 55vh;
  padding: 0.5rem;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  overflow-x: hidden;
  overflow-y: scroll;
`;

const StyledLogOutButton = styled.button`
  padding: ${(props) => props.theme.insideButtonPadding};
  margin: 1.5rem 0 1rem 0;
  height: auto;

  background-color: ${(props) => props.theme.formSubmitFillColor};

  border: 1px solid ${(props) => props.theme.formSubmitBorderColor};
  border-radius: ${(props) => props.theme.buttonBorderRadius};
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  text-align: center;

  color: ${(props) => props.theme.formSubmitTextColor};
  font-weight: 500;
`;

export default Profile;

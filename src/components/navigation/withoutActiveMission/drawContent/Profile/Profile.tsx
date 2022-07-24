import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import useNavigation from '../../../../../hooks/useNavigation';
import useRealm from '../../../../../hooks/useRealm';
import ProfileName from './ProfileName';
import ProfileHead from './ProfileHead'
import Bio from './Bio';
import MyMissions from './MyMissions';
import DriverLicenses from './DriverLicenses';
import Skills from './Skills';

const Profile = () => {
  const { realm } = useRealm();

  const { setIsDrawOpen } = useNavigation();

  let navigate = useNavigate();

  const handleLogOut = async () => {
    await realm.currentUser?.logOut();

    setIsDrawOpen(false);
    navigate('/auth');
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

        <Skills />
        
        <StyledLogOutButton onClick={handleLogOut}>Bye. Log me out</StyledLogOutButton>

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
  border: 1px solid ${(props) => props.theme.formFieldColor};
  border-radius: ${(props) => props.theme.primaryBorderRadius};
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
  padding: 0.2rem 1rem 0.2rem 1rem;
  margin-top: 1.5rem;
  height: 3rem;
  
  background-color: ${(props) => props.theme.formSubmitFillColor};
  
  border: 1px solid ${(props) => props.theme.formSubmitBorderColor};
  border-radius: ${(props) => props.theme.buttonBorderRadius};
  
  text-align: center;
  
  color: ${(props) => props.theme.formSubmitTextColor};
  font-weight: 500;
`;

export default Profile;

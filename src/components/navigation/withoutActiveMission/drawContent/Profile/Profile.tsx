import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import useNavigation from '../../../../../hooks/useNavigation';
import useRealm from '../../../../../hooks/useRealm';
import Head from './Head'

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
        
        <head />
        
        
        
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
overflow: hidden;
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

const StyledProfileContent = styled.div`
  height: 55vh;  
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  flex-direction: column;
  border-radius: ${(props) => props.theme.drawerBorderRadius} ${(props) => props.theme.drawerBorderRadius} 0 0;
  background: ${(props) => props.theme.secondaryBackgroundColor};
  overflow-x: hidden;
  overflow-y: scroll;
  z-index: 6;
`;
const StyledLogOutButton = styled.button`
  padding: 0.2rem 1rem 0.2rem 1rem;
  margin-top: 1.5rem;
  background-color: ${(props) => props.theme.formSubmitFillColor};
  border: 1px solid ${(props) => props.theme.formSubmitBorderColor};
  border-radius: ${(props) => props.theme.buttonBorderRadius};
  text-align: center;
  height: 3rem;
  color: ${(props) => props.theme.formSubmitTextColor};
  font-weight: 500;
`;

export default Profile;

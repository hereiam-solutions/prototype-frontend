import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import useNavigation from '../../../hooks/useNavigation';
import useRealm from '../../../hooks/useRealm';

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
    <>
      Profile
      <StyledLogOutButton onClick={handleLogOut}>Log Out</StyledLogOutButton>
    </>
  );
};

const StyledLogOutButton = styled.button`
  background-color: #c25757;
`;

export default Profile;

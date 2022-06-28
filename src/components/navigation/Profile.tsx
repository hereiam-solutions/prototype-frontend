import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import useNavigation from '../../hooks/useNavigation';
import useRealm from '../../hooks/useRealm';

const Profile = () => {
  const { realm } = useRealm();
  const { isDrawOpen, setIsDrawOpen } = useNavigation();
  let navigate = useNavigate();

  const handleLogOut = async () => {
    const log = await realm.currentUser?.logOut();
    console.log(log);

    setIsDrawOpen(false);
    navigate('/login');
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

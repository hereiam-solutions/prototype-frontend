import React from 'react';
import styled from 'styled-components';

type Props = {};

const Profile = (props: Props) => {
  return <StyledDrawContentWrapper>Profile</StyledDrawContentWrapper>;
};

const StyledDrawContentWrapper = styled.div`
  height: 66vh;
  width: 100vw;
  background: white;
  z-index: 4;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Profile;

import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Map from '../Map';
import Draw from '../navigation/Draw';

const AuthLayout = () => {
  return (
    <div>
      <StyledAppWrapper>
        <Map />
        <Draw />
      </StyledAppWrapper>
    </div>
  );
};

const StyledAppWrapper = styled.div`
  position: relative;
`;

const StyledSwitchWrapper = styled.div`
  width: 80%;
`;

export default AuthLayout;

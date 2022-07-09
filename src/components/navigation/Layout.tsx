import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import RequireAuth from '../auth/RequireAuth';
import Map from '../map/Map';
import Nav from './Nav';
import Company from './Company';

type Props = {};

const Layout = (props: Props) => {
  return (
    // <RequireAuth>
    <StyledAppWrapper>
      <Map />
      <StyledNavWrapper>
        <Nav />
        <Company />
      </StyledNavWrapper>
    </StyledAppWrapper>
    // </RequireAuth>
  );
};

const StyledAppWrapper = styled.div`
  position: relative;
`;

const StyledNavWrapper = styled.div`
  pointer-events: none;
  position: absolute;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: end;
`;

export default Layout;

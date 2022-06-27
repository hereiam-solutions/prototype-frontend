import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Map from '../Map';
import Nav from './Nav';

type Props = {};

const Layout = (props: Props) => {
  return (
    <div>
      <StyledAppWrapper>
        <Map />
        <StyledNavWrapper>
          <Nav />
        </StyledNavWrapper>
      </StyledAppWrapper>
    </div>
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

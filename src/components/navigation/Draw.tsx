import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

type PropsType = {
  setDrawIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Draw = ({ setDrawIsOpen }: PropsType) => {
  return (
    <StyledDrawWrapper>
      <StyledDrawContentWrapper>
        <Outlet />
      </StyledDrawContentWrapper>

      <StyledMapOverlay to="/" onClick={() => setDrawIsOpen(false)} />
    </StyledDrawWrapper>
  );
};

const StyledDrawWrapper = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: end;
  pointer-events: auto;
  z-index: 3;
`;

const StyledMapOverlay = styled(Link)`
  position: fixed;
  background: rgba(1, 1, 1, 0.1);
  height: 100vh;
  width: 100vw;
`;

const StyledDrawContentWrapper = styled.div`
  height: 66vh;
  width: 100vw;
  background: white;
  z-index: 4;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 70px 70px 0 0;
`;

export default Draw;

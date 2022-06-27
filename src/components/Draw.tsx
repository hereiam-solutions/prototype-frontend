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
      <StyledDrawBackground>
        <Outlet />
      </StyledDrawBackground>

      <StyledMapOverlay to="/" onClick={() => setDrawIsOpen(false)} />
    </StyledDrawWrapper>
  );
};

const StyledDrawWrapper = styled.div`
  position: absolute;
  background: rgba(1, 1, 1, 0, 1);
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

const StyledDrawBackground = styled.div`
  background: white;
  height: 66%;
  width: 100%;
  border-radius: 100px 100px 0 0;
  z-index: 4;
`;

export default Draw;

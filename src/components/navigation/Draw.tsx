import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import useNavigation from '../../hooks/useNavigation';

type DrawPropsType = {
  usedInAuthentication: boolean;
};
const Draw = ({ usedInAuthentication }: DrawPropsType) => {
  const { setIsDrawOpen } = useNavigation();

  return (
    <StyledDrawWrapper>
      <StyledDrawContentWrapper>
        <Outlet />
      </StyledDrawContentWrapper>

      {!usedInAuthentication && (
        <StyledMapOverlay to="" onClick={() => setIsDrawOpen(false)} />
      )}
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
  background: ${(props) => props.theme.secondaryBackgroundColor};
  color: ${(props) => props.theme.secondaryFontColor};
  z-index: 4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: ${(props) => props.theme.drawerBorderRadius} ${(props) => props.theme.drawerBorderRadius} 0 0;
`;

export default Draw;

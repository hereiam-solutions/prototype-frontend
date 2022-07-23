import styled from 'styled-components';
import PolygonDrawingMap from '../../map/PolygonDrawingMap';
import Nav from '../Nav';
import Company from '../Company';

const MissionCreationLayout = () => {
  return (
    <StyledAppWrapper>
      <PolygonDrawingMap />
      <StyledNavWrapper>
        <Nav />
        <Company />
      </StyledNavWrapper>
    </StyledAppWrapper>
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

export default MissionCreationLayout;

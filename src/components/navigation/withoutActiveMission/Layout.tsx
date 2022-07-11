import styled from 'styled-components';
import Map from '../../map/Map';
import Nav from '../Nav';
import Company from '../Company';

type Props = {};

const Layout = (props: Props) => {
  return (
    <StyledAppWrapper>
      <Map />
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

export default Layout;
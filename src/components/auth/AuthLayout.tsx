import styled from 'styled-components';
import Map from '../map/Map';
import Draw from '../navigation/Draw';

const AuthLayout = () => {
  return (
    <div>
      <StyledAppWrapper>
        <Map />
        <Draw usedInAuthentication={true} />
      </StyledAppWrapper>
    </div>
  );
};

const StyledAppWrapper = styled.div`
  position: relative;
`;

export default AuthLayout;

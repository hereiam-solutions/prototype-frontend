import styled from "styled-components";
import MissionMap from "../../map/MissionMap";
import ActionMenu from "../actionMenu/ActionMenu";
import Nav from "../Nav";
import Company from "../Company";

const MissionLayout = () => {
  return (
    <StyledAppWrapper>
      <ActionMenu />
      <MissionMap />
      <StyledNavWrapper>
        <Nav />
        <Company />
      </StyledNavWrapper>
    </StyledAppWrapper>
  );
};

const StyledAppWrapper = styled.div`
  position: relative;
  background: ${(props) => props.theme.primaryBackgroundColor};
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

export default MissionLayout;

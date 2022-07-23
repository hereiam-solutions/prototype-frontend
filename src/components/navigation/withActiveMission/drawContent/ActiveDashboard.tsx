import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import useNavigation from "../../../../hooks/useNavigation";
import useMission from "../../../../hooks/useMission";

const ActiveDashboard = () => {
  const { setIsDrawOpen } = useNavigation();
  const { activeMission, setActiveMission } = useMission();

  console.log(activeMission?._id.toString());
  const handleLeave = () => {
    setActiveMission(null);
    setIsDrawOpen(false);
  };

  return (
    <>
      <StyledLink onClick={handleLeave} to="/">
        Leave Mission
      </StyledLink>
    </>
  );
};

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.primaryFontColor};
`;

export default ActiveDashboard;

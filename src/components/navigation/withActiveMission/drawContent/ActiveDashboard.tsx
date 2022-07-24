import styled from "styled-components";
import { Link } from "react-router-dom";
import useNavigation from "../../../../hooks/useNavigation";
import useMission from "../../../../hooks/useMission";

const ActiveDashboard = () => {
  const { setIsDrawOpen } = useNavigation();
  const { activeMission, setActiveMission } = useMission();

  console.log(activeMission);
  const handleLeave = () => {
    setActiveMission(null);
    setIsDrawOpen(false);
  };

  return activeMission ? (
    <>
      <p>{activeMission.identifier}</p>
      <p>Mission ID: {activeMission._id.toString()}</p>
      <p>Disaster Type: {activeMission.disasterType}</p>
      <p>Estimated Population: {activeMission.estimatedPopulation}</p>
      <p>Risk Level: {activeMission.riskLevel}</p>
      <p>Security Level: {activeMission.securityLevel}</p>
      <p>
        Start of Mission:{" "}
        {new Date(activeMission.start_of_mission).toDateString()}
      </p>
      <p>
        End of Mission: {new Date(activeMission.end_of_mission).toDateString()}
      </p>

      <p>Objectives:</p>
      {activeMission.objectives.map((objective: string) => {
        return <div>{objective}</div>;
      })}

      <StyledLink onClick={handleLeave} to="/">
        Leave Mission
      </StyledLink>
    </>
  ) : (
    <></>
  );
};

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.primaryFontColor};
`;

export default ActiveDashboard;

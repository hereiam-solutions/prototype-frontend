import styled from "styled-components";
import { Link } from "react-router-dom";
import useNavigation from "../../../../hooks/useNavigation";
import useMission from "../../../../hooks/useMission";

const ActiveDashboard = () => {
  const { setIsDrawOpen } = useNavigation();
  const { activeMission, setActiveMission } = useMission();

  const handleLeave = () => {
    setActiveMission(null);
    setIsDrawOpen(false);
  };

  return activeMission ? (
    <StyledSettingsWrapper>
      <StyledHeader>Mission</StyledHeader>
      {/* <p>{activeMission.identifier}</p> */}
      <StyledSecondaryHeading>Mission ID: </StyledSecondaryHeading>
      <div>{activeMission._id.toString()}</div>
      <p>Disaster Type: {activeMission.disasterType}</p>
      <p>Estimated Population: {activeMission.estimatedPopulation}</p>
      <p>Risk Level: {activeMission.riskLevel}</p>
      <p>Security Level: {activeMission.securityLevel}</p>
      <p>
        Start of Mission:
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
      <StyledLink onClick={handleLeave} to="/">
        Leave Mission
      </StyledLink>
      <StyledLink onClick={handleLeave} to="/">
        Leave Mission
      </StyledLink>
      <StyledLink onClick={handleLeave} to="/">
        Leave Mission
      </StyledLink>
      <StyledLink onClick={handleLeave} to="/">
        Leave Mission
      </StyledLink>
      <StyledLink onClick={handleLeave} to="/">
        Leave Mission
      </StyledLink>
      <StyledLink onClick={handleLeave} to="/">
        Leave Mission
      </StyledLink>
      <StyledLink onClick={handleLeave} to="/">
        Leave Mission
      </StyledLink>
      <StyledLink onClick={handleLeave} to="/">
        Leave Mission
      </StyledLink>
      v
    </StyledSettingsWrapper>
  ) : (
    <></>
  );
};

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.primaryFontColor};
`;

const StyledSecondaryHeading = styled.div`
  align-self: start;
`;

const StyledSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledAccordionContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const StyledSettingsWrapper = styled.div`
  position: absolute;
  width: 100vw;

  display: flex;
  flex-direction: column;
  align-items: center;

  overflow: hidden;

  pointer-events: auto;

  background: ${(props) => props.theme.primaryBackgroundColor};
`;

const StyledHeader = styled.div`
  width: 80%;
  padding: 1rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: ${(props) => props.theme.primaryFontColor};
  font-size: 1.1rem;
  font-weight: 500;

  overflow: hidden;
`;

const StyledSettingsContent = styled.div`
  height: 55vh;
  margin-top: -0.2rem;

  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  flex-direction: column;

  border-radius: ${(props) => props.theme.drawerBorderRadius}
    ${(props) => props.theme.drawerBorderRadius} 0 0;
  background: ${(props) => props.theme.secondaryBackgroundColor};

  overflow-x: hidden;
  overflow-y: scroll;

  z-index: 6;
`;

const SectionHeadline = styled.div`
  width: 100%;
  margin-top: 1rem;

  padding: ${(props) => props.theme.sectionHeadlinePadding};

  border-radius: ${(props) => props.theme.buttonBorderRadius};

  background-color: ${(props) => props.theme.sectionHeadlineBackgroundColor};
  color: ${(props) => props.theme.sectionHeadlineColor};
`;

const StyledItemSwitch = styled.div`
  align-self: start;

  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: ${(props) => props.theme.secondaryBackgroundColor};
  color: ${(props) => props.theme.secondaryFontColor};

  font-size: 1.3rem;
  font-weight: 500;
`;

export default ActiveDashboard;

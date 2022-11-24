import styled from "styled-components";
import { Link } from "react-router-dom";
import useNavigation from "../../../../hooks/useNavigation";
import useMission from "../../../../hooks/useMission";
import { useState } from "react";

const ActiveDashboard = () => {
  const { setIsDrawOpen } = useNavigation();
  const { activeMission, setActiveMission } = useMission();

  const handleLeave = () => {
    setActiveMission(null);
    setIsDrawOpen(false);
  };

  const [togglePlaning, setTogglePlaning] = useState(false)
  const [toggleSecurity, setToggleSecurity] = useState(false)
  const [toggleDeployed, setToggleDeployed] = useState(false)
  const [toggle360, setToggle360] = useState(false)

  return activeMission ? (
    <StyledDrawWrapper>

      <StyledDrawHeader>
        <StyledHeading>{activeMission.identifier}</StyledHeading>
      </StyledDrawHeader>

      <StyledContentWrapper>

        <StyledText id="missionID">
          Mission ID
          <br />
          {activeMission._id.toString()}
          <br />
          {activeMission.disasterType}
        </StyledText>

        <br />
        {/* MISSION PLANING */}

        <button
          onClick={() => setTogglePlaning(!togglePlaning)}
          className="toggleButton"
        >
          MISSION PLANING
        </button>
        {togglePlaning && (
          <>
            <StyledSectionWrapper>
              <StyledSecondaryHeading>Objectives</StyledSecondaryHeading>
              <StyledList>
                {activeMission.objectives.map(
                  (objective: string, index: number) => {
                    return (
                      <StyledListEntry key={index}>{objective}</StyledListEntry>
                    );
                  }
                )}
              </StyledList>
            </StyledSectionWrapper>

            <StyledSectionWrapper>
              <StyledSecondaryHeading>Risk level</StyledSecondaryHeading>
              <StyledText>{activeMission?.riskLevel}</StyledText>
            </StyledSectionWrapper>

            <StyledSectionWrapper>
              <StyledSecondaryHeading>Estimated population</StyledSecondaryHeading>
              <StyledText>{activeMission?.estimatedPopulation}</StyledText>
            </StyledSectionWrapper>
          </>
        )}

        {/* MISSION SECURITY */}
        
        <button
          onClick={() => setToggleSecurity(!toggleSecurity)}
          className="toggleButton"
        >
          MISSION SECURITY
        </button>
        {toggleSecurity && (
          <>
            <StyledSectionWrapper>
              <StyledSecondaryHeading>Security level</StyledSecondaryHeading>
              <StyledText>{activeMission?.securityLevel}</StyledText>
            </StyledSectionWrapper>
          </>
        )}

        {/* DEPLOYED */}
        
        <button
          onClick={() => setToggleDeployed(!toggleDeployed)}
          className="toggleButton"
        >
          ALSO DEPLOYED
        </button>
        {toggleDeployed && (
          <>
            Coming soon
          </>
        )}

        {/* 360 */}
        
        <button
          onClick={() => setToggle360(!toggle360)}
          className="toggleButton"
        >
          360
        </button>
        {toggle360 && (
          <>
            Coming soon
          </>
        )}

        <StyledSectionWrapper>
          <StyledSecondaryHeading>Starting time</StyledSecondaryHeading>
          <StyledText>
            {new Date(activeMission.start_of_mission).toLocaleString()}
          </StyledText>
        </StyledSectionWrapper>

        <StyledLinkWrapper>
          <StyledButton onClick={handleLeave} to="/">
            Leave Mission
          </StyledButton>
        </StyledLinkWrapper>

      </StyledContentWrapper>
    </StyledDrawWrapper>
  ) : (
    <></>
  );
}

const StyledDrawWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;

  background: ${(props) => props.theme.primaryBackgroundColor};
`;

const StyledDrawHeader = styled.div`
  padding-bottom: 1rem;
  margin-bottom: 0.8rem;

  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledHeading = styled.p`
  font-weight: 500;
  font-size: 2rem;
  color: ${(props) => props.theme.primaryFontColor};
`;

const StyledContentWrapper = styled.div`
  width: 100%;
  background: ${(props) => props.theme.primaryBackgroundColor};

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.5rem;

  overflow-y: scroll;
`;

const StyledSectionWrapper = styled.div`
  width: 100%;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledSecondaryHeading = styled.p`
  font-weight: 500;
  font-size: 1.4rem;
  color: ${(props) => props.theme.primaryFontColor};
`;

const StyledText = styled.p`
  font-size: 1rem;
  color: ${(props) => props.theme.primaryFontColor};
`;

// styles for this component only

const StyledList = styled.ul`
  margin: 0;
  color: ${(props) => props.theme.primaryFontColor};
`;

const StyledListEntry = styled.li`
  color: ${(props) => props.theme.buttonFontColor};
  background-color: ${(props) => props.theme.buttonColor};

  margin-bottom: 0.3rem;
  padding: 0.2rem 0.6rem;

  font-weight: 500;

  list-style: none;
  display: inline-block;
  margin-right: 1rem;

  border-radius: 12px;
`;

const StyledLinkWrapper = styled.div`
  width: 60%;
  height: 3rem;

  margin-top: 0.5rem;

  font-weight: 700;

  align-self: center;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.theme.buttonColor};

  border: 1px solid ${(props) => props.theme.formSubmitBorderColor};
  border-radius: ${(props) => props.theme.inputBorderRadius};
`;

const StyledButton = styled(Link)`
  font-weight: 700;

  color: ${(props) => props.theme.buttonFontColor};

  text-decoration: none;
`;

export default ActiveDashboard;

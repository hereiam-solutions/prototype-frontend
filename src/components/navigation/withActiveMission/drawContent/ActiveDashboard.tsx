import styled from "styled-components";
import { Link } from "react-router-dom";
import useNavigation from "../../../../hooks/useNavigation";
import useMission from "../../../../hooks/useMission";

import { ReactComponent as DashboardButtonLight } from "../../../../assets/Navigation/Dashboard.svg";
import { ReactComponent as DashboardButtonDark } from "../../../../assets/Navigation/Dashboard_Dark.svg";
import useTheme from "../../../../hooks/useTheme";
import { ThemeEnum } from "../../../../context/ThemeContext";

const ActiveDashboard = () => {
  const { setIsDrawOpen } = useNavigation();
  const { activeMission, setActiveMission } = useMission();
  const { currentTheme } = useTheme();

  const handleLeave = () => {
    setActiveMission(null);
    setIsDrawOpen(false);
  };

  return activeMission ? (
    <StyledDrawWrapper>
      <StyledDrawHeader>
        {currentTheme === ThemeEnum.LIGHT ? (
          <DashboardButtonDark height={40} />
        ) : (
          <DashboardButtonLight height={40} />
        )}
        <StyledHeading>Dashboard</StyledHeading>
      </StyledDrawHeader>

      <StyledContentWrapper>
        <StyledSectionWrapper>
          <StyledSecondaryHeading>Mission ID</StyledSecondaryHeading>
          <StyledText>{activeMission._id.toString()}</StyledText>
        </StyledSectionWrapper>

        <StyledSectionWrapper>
          <StyledSecondaryHeading>Mission name</StyledSecondaryHeading>
          <StyledText>{activeMission.identifier}</StyledText>
        </StyledSectionWrapper>

        <StyledSectionWrapper>
          <StyledSecondaryHeading>Disaster type</StyledSecondaryHeading>
          <StyledText>{activeMission.disasterType}</StyledText>
        </StyledSectionWrapper>

        <StyledSectionWrapper>
          <StyledSecondaryHeading>Risk level</StyledSecondaryHeading>
          <StyledText>{activeMission.riskLevel}</StyledText>
        </StyledSectionWrapper>

        <StyledSectionWrapper>
          <StyledSecondaryHeading>Security level</StyledSecondaryHeading>
          <StyledText>{activeMission.securityLevel}</StyledText>
        </StyledSectionWrapper>

        <StyledSectionWrapper>
          <StyledSecondaryHeading>Estimated population</StyledSecondaryHeading>
          <StyledText>{activeMission.estimatedPopulation}</StyledText>
        </StyledSectionWrapper>

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
          <StyledSecondaryHeading>Starting time</StyledSecondaryHeading>
          <StyledText>
            {new Date(activeMission.start_of_mission).toLocaleString()}
          </StyledText>
        </StyledSectionWrapper>

        <StyledSectionWrapper>
          <StyledSecondaryHeading>Ending time</StyledSecondaryHeading>
          <StyledText>
            {new Date(activeMission.end_of_mission).toLocaleString()}
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
};

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
  gap: 2.5rem;

  overflow-y: scroll;
`;

const StyledSectionWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.7rem;
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

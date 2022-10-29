import styled from "styled-components";
import { Link } from "react-router-dom";
import useNavigation from "../../../../hooks/useNavigation";
import useMission from "../../../../hooks/useMission";

import useTheme from "../../../../hooks/useTheme";

import Accordion from "../../../navigation/ui/Accordion";

import {
  RiFileCopyLine,
} from "react-icons/ri";

import useCopyToClipboard from '../../../../hooks/useCopyToClipboard'

const CopyMissionID = RiFileCopyLine;


const ActiveDashboard = () => {
  const { setIsDrawOpen } = useNavigation();
  const { activeMission, setActiveMission } = useMission();
  const { currentTheme } = useTheme();

  const handleLeave = () => {
    setActiveMission(null);
    setIsDrawOpen(false);
  };

  const MissionMore = () => {
    return (
      <>
        <StyledSectionWrapper>
          <StyledSecondaryHeading>Risk level</StyledSecondaryHeading>
          <StyledText>{activeMission?.riskLevel}</StyledText>
        </StyledSectionWrapper>

        <StyledSectionWrapper>
          <StyledSecondaryHeading>Estimated population</StyledSecondaryHeading>
          <StyledText>{activeMission?.estimatedPopulation}</StyledText>
        </StyledSectionWrapper>
      </>
    );
  };

  const [value, copy] = useCopyToClipboard();

  return activeMission ? (
    <StyledDrawWrapper>

      <StyledDrawHeader>
        <StyledHeading>Mission briefing</StyledHeading>
      </StyledDrawHeader>

      <StyledContentWrapper>

        <StyledSectionWrapper>
          <StyledSecondaryHeading>Mission ID</StyledSecondaryHeading>

          {/* Mission ID */}
          <StyledMissionIDWrapper onClick={() => copy('')} >

            <StyledText id="missionID">{activeMission._id.toString()}</StyledText>

            <button>
              <CopyMissionID
                size={25}
              />
            </button>

          </StyledMissionIDWrapper>
          <p>Copied value: {value ?? 'Nothing is copied yet!'}</p>

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

        <Accordion heading={"More..."}>
          <MissionMore />
        </Accordion>

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
  gap: 2.5rem;

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

const StyledMissionIDWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  height: 3rem;
`;

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

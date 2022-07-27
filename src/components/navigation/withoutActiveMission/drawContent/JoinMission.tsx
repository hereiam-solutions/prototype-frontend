import styled from "styled-components";
import MissionCard from "../drawContent/MissionCard";
import { Link, useNavigate } from "react-router-dom";
import useMission from "../../../../hooks/useMission";
import useNavigation from "../../../../hooks/useNavigation";
import { useState } from "react";
import useRealm from "../../../../hooks/useRealm";
import { realmFunctionNames } from "../../../../data/realm/functions";
import { BSON } from "realm-web";
import { MissionSchema } from "../../../../data/realm/schema/mission";
import useTheme from "../../../../hooks/useTheme";
import { ThemeEnum } from "../../../../context/ThemeContext";

import { ReactComponent as DashboardButtonLight } from "../../../../assets/Navigation/Dashboard.svg";
import { ReactComponent as DashboardButtonDark } from "../../../../assets/Navigation/Dashboard_Dark.svg";

const JoinMission = () => {
  const navigate = useNavigate();
  const { realm } = useRealm();
  const { setActiveMission } = useMission();
  const { setIsDrawOpen } = useNavigation();
  const { currentTheme } = useTheme();

  const [error, setError] = useState<string>("");

  // starts the polygon drawing process for a mission creation
  const initiateMissionCreation = () => {
    setIsDrawOpen(false);
    navigate("/create-mission");
  };

  const [missionId, setMissionId] = useState<string>("");

  const handleMissionIdChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setError("");
    setMissionId(event.currentTarget.value);
  };

  const handleJoin = async () => {
    // call the Realm function
    if (realm.currentUser) {
      await realm.currentUser.refreshCustomData();

      const response = await realm.currentUser.callFunction(
        realmFunctionNames.joinMission,
        { mission: missionId }
      );

      // backend returns string "success" if joining the mission was successful
      if (response === "success") {
        await realm.currentUser.refreshCustomData();

        const newActiveMission: MissionSchema =
          await realm.currentUser.callFunction(
            realmFunctionNames.getCurrentMission
          );

        setActiveMission(newActiveMission as MissionSchema);

        setIsDrawOpen(false);
        navigate("/mission");
      } else {
        if (response === "Mission is already your active mission") {
          setError("The mission you entered is already your active Mission!");
        } else {
          setError("Invalid Mission ID!");
        }
      }
    }
  };

  const handleJoinCurrentMission = async () => {
    if (realm.currentUser) {
      await realm.currentUser.refreshCustomData();

      const response: MissionSchema = await realm.currentUser.callFunction(
        realmFunctionNames.getCurrentMission,
        {}
      );

      if (response._id) {
        await realm.currentUser.refreshCustomData();

        setActiveMission(response as MissionSchema);

        setIsDrawOpen(false);
        navigate("/mission");
      } else {
        setError("You are not currently part of a mission!");
      }
    }
  };

  return (
    <StyledDrawWrapper>
      <StyledDrawHeader>
        {currentTheme === ThemeEnum.LIGHT ? (
          <DashboardButtonDark height={40} />
        ) : (
          <DashboardButtonLight height={40} />
        )}
        <StyledHeading>Mission</StyledHeading>
      </StyledDrawHeader>

      <StyledContentWrapper>
        <StyledSectionWrapper>
          <StyledSecondaryHeading>Join a Mission</StyledSecondaryHeading>

          <StyledInput
            type="text"
            value={missionId}
            onChange={handleMissionIdChange}
            placeholder="Insert Mission ID..."
            onSubmit={handleJoin}
          />

          <StyledButton onClick={handleJoin}>
            {error ? error : "Join"}
          </StyledButton>
        </StyledSectionWrapper>

        <StyledSectionWrapper>
          <StyledSecondaryHeading>
            Join last active Mission
          </StyledSecondaryHeading>

          <StyledButton onClick={handleJoinCurrentMission}>Join</StyledButton>
        </StyledSectionWrapper>

        <StyledSectionWrapper>
          <StyledSecondaryHeading>Create a Mission</StyledSecondaryHeading>

          <StyledButton onClick={initiateMissionCreation}>Create</StyledButton>
        </StyledSectionWrapper>
      </StyledContentWrapper>
    </StyledDrawWrapper>
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
  /* padding-top: 8rem; */
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
  gap: 1rem;
`;

const StyledSecondaryHeading = styled.p`
  font-weight: 500;
  font-size: 1.4rem;
  color: ${(props) => props.theme.primaryFontColor};
`;

// styled components relevant for this component only

const StyledInput = styled.input`
  background-color: ${(props) => props.theme.primaryBackgroundColor};
  border: 1px solid ${(props) => props.theme.formFieldColor};
  border-radius: ${(props) => props.theme.inputBorderRadius};
  color: ${(props) => props.theme.formFieldColor};
  font-size: 1rem;
  line-height: 1.5rem;
  font-style: normal;
  font-weight: 500;
  width: 100%;
  /* margin-top: 0.6rem; */
  padding: 0.75rem;
`;

const StyledButton = styled.button`
  width: 60%;
  height: 3rem;

  margin-top: 0.5rem;

  font-weight: 700;
  text-align: center;

  align-self: center;

  color: ${(props) => props.theme.buttonFontColor};
  background-color: ${(props) => props.theme.buttonColor};

  border: 1px solid ${(props) => props.theme.formSubmitBorderColor};
  border-radius: ${(props) => props.theme.inputBorderRadius};
`;

export default JoinMission;

import styled, { useTheme } from "styled-components";
import MissionCard from "../drawContent/MissionCard";
import { Link, useNavigate } from "react-router-dom";
import useMission from "../../../../hooks/useMission";
import useNavigation from "../../../../hooks/useNavigation";
import { useState } from "react";
import useRealm from "../../../../hooks/useRealm";
import { realmFunctionNames } from "../../../../data/realm/functions";
import { BSON } from "realm-web";
import { MissionSchema } from "../../../../data/realm/schema/mission";

const JoinMission = () => {
  const navigate = useNavigate();
  const { realm } = useRealm();
  const { setActiveMission } = useMission();
  const { setIsDrawOpen } = useNavigation();

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
    <StyledDashboardWrapper>
      <StyledHeader>Join a Mission</StyledHeader>

      <StyledDashboardContent>
        <StyledInput
          type="text"
          value={missionId}
          onChange={handleMissionIdChange}
          placeholder="Insert Mission ID here..."
        />

        {error && <StyledErrorMessage>{error}</StyledErrorMessage>}

        <button onClick={handleJoin}>Join Mission</button>

        <button onClick={handleJoinCurrentMission}>
          Join your currently active Mission!
        </button>

        <button onClick={initiateMissionCreation}>
          Create your own Mission!
        </button>
      </StyledDashboardContent>
    </StyledDashboardWrapper>
  );
};

const StyledDashboardWrapper = styled.div`
  position: absolute;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
  overflow-y: scroll;
  pointer-events: auto;
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

const StyledDashboardContent = styled.div`
  height: 55vh;
  width: 100%;
  padding: 2rem;

  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  /* align-items: center; */
  gap: 2rem;

  border-radius: ${(props) => props.theme.drawerBorderRadius}
    ${(props) => props.theme.drawerBorderRadius} 0 0;

  background: ${(props) => props.theme.secondaryBackgroundColor};

  overflow-x: hidden;
  overflow-y: scroll;

  z-index: 6;
`;

const StyledDeactivated = styled.div`
  opacity: 0.3;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.primaryFontColor};
`;

const StyledInput = styled.input`
  width: 100%;
  height: 2rem;
  border: 1px solid black;
`;

const StyledErrorMessage = styled.div`
  color: red;
`;

export default JoinMission;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import useNavigation from "../../../../../hooks/useNavigation";

import useRealm from "../../../../../hooks/useRealm";

import useMission from "../../../../../hooks/useMission";

// type / enum imports
import {
  UpdatePersonArgs,
  PersonSchema,
} from "../../../../../data/realm/schema/person";

const Profile = () => {
  let navigate = useNavigate();
  const { realm } = useRealm();
  const { setActiveMission, setIsPolygonDrawingActive } = useMission();
  const { setIsDrawOpen } = useNavigation();

  const handleLogOut = async () => {
    await realm.currentUser?.logOut();

    setActiveMission(null);
    setIsPolygonDrawingActive(false);
    setIsDrawOpen(false);

    navigate("/auth");
  };
  
  //read custom 
  // @ts-ignore
  const [userState, setUserState] = useState<any>(realm.currentUser.customData);
  console.log(realm.currentUser?.customData)

  //State for form elements as CreateMission

  //handle submit as CreateMission

  return (
    <StyledProfileWrapper>
      <StyledDrawHeader>
        <div>{userState.firstName}</div>
        <div>{userState.lastName}</div>
        
      </StyledDrawHeader>

      <StyledProfileContent>
        

        <StyledButton onClick={handleLogOut}>Log out</StyledButton>
      </StyledProfileContent>
    </StyledProfileWrapper>
  );
};

const StyledDrawHeader = styled.div`
  padding-bottom: 1rem;
  /* margin-bottom: 0.8rem; */

  width: 100vw;

  display: flex;
  flex-direction: raw;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  font-size: 1.6rem;
  font-weight: 500;
`;

const StyledButton = styled.button`
  min-width: 30vw;
  height: 3rem;

  margin-top: 1.5rem;
  margin-bottom: 4rem;

  font-weight: 700;
  text-align: center;

  align-self: center;

  color: ${(props) => props.theme.buttonFontColor};
  background-color: ${(props) => props.theme.buttonColor};

  border: 1px solid ${(props) => props.theme.formSubmitBorderColor};
  border-radius: ${(props) => props.theme.inputBorderRadius};
`;

const StyledProfileWrapper = styled.div`
  position: absolute;
  width: 100vw;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  overflow: hidden;
  pointer-events: auto;
`;

const StyledProfileContent = styled.div`
  height: 55vh;
  padding: 0.5rem;

  background: ${(props) => props.theme.primaryBackgroundColor};

  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  overflow-x: hidden;
  overflow-y: scroll;
`;

export default Profile;

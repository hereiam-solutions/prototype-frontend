import React, { useState } from "react";
import styled from "styled-components";
import Switch from "react-switch";

import Default from "../../../../../assets/Navigation/default.png";
import Humanitarian from "../../../../../assets/Navigation/humanitarian.png";
import Sattelite from "../../../../../assets/Navigation/sattelite.png";

import useMissionMap from "../../../../../hooks/useMissionMap";
import { ActiveTileLayerEnum } from "../../../../../context/MissionMapContext";

import useTheme from "../../../../../hooks/useTheme";
import { ThemeEnum } from "../../../../../context/ThemeContext";

import useNavigation from "../../../../../hooks/useNavigation";
import useRealm from "../../../../../hooks/useRealm";
import { useNavigate } from "react-router-dom";

const Settings = () => {
  const { setActiveTileLayer, setReRenderBoolean, reRenderBoolean } =
    useMissionMap();

  const { currentTheme, setCurrentTheme } = useTheme();

  //Logout function
  let navigate = useNavigate();
  const { realm } = useRealm();
  const { setIsDrawOpen } = useNavigation();

  const handleLogOut = async () => {
    await realm.currentUser?.logOut();

    setIsDrawOpen(false);

    navigate("/auth");
  };

  //read custom 
  // @ts-ignore
  const [userState, setUserState] = useState<any>(realm.currentUser.customData);

  return (
    <StyledDrawWrapper>
      <StyledDrawHeader>
        <StyledHeading>Settings</StyledHeading>
      </StyledDrawHeader>

      <StyledContentWrapper>
        <StyledSectionWrapper>
          <StyledSecondaryHeading>Map</StyledSecondaryHeading>

          <StyledMapTypesWrapper>
            <StyledMapTypeSwitchWrapper
              onClick={() => {
                setActiveTileLayer(ActiveTileLayerEnum.DEFAULT);
                setReRenderBoolean(!reRenderBoolean);
              }}
            >
              <StyledDefaultWrapper>
              </StyledDefaultWrapper>
              <StyledMapTypeText>Default</StyledMapTypeText>
            </StyledMapTypeSwitchWrapper>

            <StyledMapTypeSwitchWrapper>
              <StyledHumanitarianWrapper
                onClick={() => {
                  setActiveTileLayer(ActiveTileLayerEnum.HUMANITARIAN);
                  setReRenderBoolean(!reRenderBoolean);
                }}
              >
              </StyledHumanitarianWrapper>
              <p>Humanitarian</p>
            </StyledMapTypeSwitchWrapper>

            <StyledMapTypeSwitchWrapper>
              <StyledSatteliteWrapper
                onClick={() => {
                  setActiveTileLayer(ActiveTileLayerEnum.SATELLITE);
                  setReRenderBoolean(!reRenderBoolean);
                }}
              >
              </StyledSatteliteWrapper>
              <StyledMapTypeText>Sattelite</StyledMapTypeText>
            </StyledMapTypeSwitchWrapper>
          </StyledMapTypesWrapper>
        </StyledSectionWrapper>

        <StyledSectionWrapper>
          <StyledSecondaryHeading>Appearance</StyledSecondaryHeading>

          <StyledThemeSwitch
            onClick={() => {
              currentTheme === ThemeEnum.LIGHT
                ? setCurrentTheme(ThemeEnum.DARK)
                : setCurrentTheme(ThemeEnum.LIGHT);
            }}
          >
            <StyledMapTypeText>Dark Mode</StyledMapTypeText>

            <Switch
              onChange={() => {
                currentTheme === ThemeEnum.LIGHT
                  ? setCurrentTheme(ThemeEnum.DARK)
                  : setCurrentTheme(ThemeEnum.LIGHT);
              }}
              checked={currentTheme === ThemeEnum.DARK}
              onColor="#7b7b7d"
              offColor="#D1D1D6"
            />
          </StyledThemeSwitch>
        </StyledSectionWrapper>

        <StyledSectionWrapper>
          <StyledSecondaryHeading>{userState.firstName} {userState.lastName}</StyledSecondaryHeading>

          <StyledButton onClick={handleLogOut}>Log out</StyledButton>
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

  overflow: hidden;
`;

const StyledDrawHeader = styled.div`
  /* padding: 1rem; */
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
  /* top: 1rem; */

  overflow: hidden;

  margin-bottom: 0.8rem;
`;

const StyledHeading = styled.p`
  font-weight: 500;
  font-size: 2rem;
  color: ${(props) => props.theme.primaryFontColor};
`;

const StyledContentWrapper = styled.div`
  /* padding-top: 9rem; */
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

// styles for this component only
const StyledMapTypesWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const StyledMapTypeSwitchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;

const StyledDefaultWrapper = styled.div`
  height: 60px;
  width: 60px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-image: url(${Default});
  background-size: 60px, 60px, cover;
  border: solid 1px ${(props) => props.theme.primaryFontColor};
  border-radius: 10px;
`;

const StyledHumanitarianWrapper = styled.div`
  height: 60px;
  width: 60px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-image: url(${Humanitarian});
  background-size: 60px, 60px, cover;
  border: solid 1px ${(props) => props.theme.primaryFontColor};
  border-radius: 10px;
`;

const StyledSatteliteWrapper = styled.div`
  height: 60px;
  width: 60px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-image: url(${Sattelite});
  background-size: 60px, 60px, cover;
  border: solid 1px ${(props) => props.theme.primaryFontColor};
  border-radius: 10px;
`;

const StyledThemeSwitch = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledMapTypeText = styled.div`
  color: ${(props) => props.theme.primaryFontColor};
`;

export default Settings;

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

import { useTranslation } from "react-i18next";

const Settings = () => {
  const { setActiveTileLayer, setReRenderBoolean, reRenderBoolean } =
    useMissionMap();

  const { currentTheme, setCurrentTheme } = useTheme();

  const { t, i18n } = useTranslation();
  function TranslateClick(lang: string | undefined) {
    i18n.changeLanguage(lang);
  }

  return (
    <StyledDrawWrapper>
      <StyledDrawHeader>
        <StyledHeading>{t("Settings.headline")}Settings</StyledHeading>
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

          {/* choose language container*/}
          <StyledTranslateSwitch>
            <StyledLanguageButton
              aria-label="in deutsch"
              onClick={() => TranslateClick("de-DE")}
            >
              de
            </StyledLanguageButton>
            <StyledLanguageButton
              aria-label="in english"
              onClick={() => TranslateClick("en-US")}
            >
              en
            </StyledLanguageButton>
          </StyledTranslateSwitch>

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

const StyledLanguageButton = styled.button`
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

const StyledTranslateSwitch = styled.div`
  margin-top: 2rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-size: 0.8rem;
  font-weight: 600;
  color: var(--base-text);

  button {
  padding: 0.2rem;
  }
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

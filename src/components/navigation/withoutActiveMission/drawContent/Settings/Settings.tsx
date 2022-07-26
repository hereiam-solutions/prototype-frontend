import styled from "styled-components";
import Switch from "react-switch";
import Accordion from "../../../ui/Accordion";
import {
  RiContrast2Fill,
  RiTranslate,
  RiRoadMapLine,
  RiContactsBookLine,
} from "react-icons/ri";

import { GiSattelite, GiHumanPyramid } from "react-icons/gi";

import { BsMap } from "react-icons/bs";
import useMissionMap from "../../../../../hooks/useMissionMap";
import { ActiveTileLayerEnum } from "../../../../../context/MissionMapContext";
import useTheme from "../../../../../hooks/useTheme";
import { ThemeEnum } from "../../../../../context/ThemeContext";

import { ReactComponent as SettingsButtonLight } from "../../../../../assets/Navigation/Settings.svg";
import { ReactComponent as SettingsButtonDark } from "../../../../../assets/Navigation/Settings_Dark.svg";

const Settings = () => {
  const { setActiveTileLayer, setReRenderBoolean, reRenderBoolean } =
    useMissionMap();

  const { currentTheme, setCurrentTheme } = useTheme();

  return (
    <StyledDrawWrapper>
      <StyledDrawHeader>
        {currentTheme === ThemeEnum.LIGHT ? (
          <SettingsButtonDark height={40} />
        ) : (
          <SettingsButtonLight height={40} />
        )}
        <StyledHeading>Settings</StyledHeading>
      </StyledDrawHeader>

      <StyledContentWrapper>
        <StyledSectionWrapper>
          <StyledSecondaryHeading>Map type</StyledSecondaryHeading>

          <StyledMapTypesWrapper>
            <StyledMapTypeSwitchWrapper>
              <StyledMapIconWrapper>
                <BsMap
                  size={30}
                  onClick={() => {
                    setActiveTileLayer(ActiveTileLayerEnum.DEFAULT);
                    setReRenderBoolean(!reRenderBoolean);
                  }}
                />
              </StyledMapIconWrapper>
              <StyledMapTypeText>Default</StyledMapTypeText>
            </StyledMapTypeSwitchWrapper>

            <StyledMapTypeSwitchWrapper>
              <StyledMapIconWrapper>
                <GiHumanPyramid
                  size={30}
                  onClick={() => {
                    setActiveTileLayer(ActiveTileLayerEnum.HUMANITARIAN);
                    setReRenderBoolean(!reRenderBoolean);
                  }}
                />
              </StyledMapIconWrapper>
              <p>Humanitarian</p>
            </StyledMapTypeSwitchWrapper>

            <StyledMapTypeSwitchWrapper>
              <StyledMapIconWrapper>
                <GiSattelite
                  size={30}
                  onClick={() => {
                    setActiveTileLayer(ActiveTileLayerEnum.SATELLITE);
                    setReRenderBoolean(!reRenderBoolean);
                  }}
                />
              </StyledMapIconWrapper>
              <StyledMapTypeText>Sattelite</StyledMapTypeText>
            </StyledMapTypeSwitchWrapper>
          </StyledMapTypesWrapper>
        </StyledSectionWrapper>

        <StyledSectionWrapper>
          <StyledSecondaryHeading>Theme</StyledSecondaryHeading>

          <StyledThemeSwitch
            onClick={() => {
              currentTheme === ThemeEnum.LIGHT
                ? setCurrentTheme(ThemeEnum.DARK)
                : setCurrentTheme(ThemeEnum.LIGHT);
            }}
          >
            <StyledMapTypeText>Dark Mode:</StyledMapTypeText>

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

        {/*  */}

        <StyledSectionWrapper>
          <StyledSecondaryHeading>Theme</StyledSecondaryHeading>

          <StyledThemeSwitch
            onClick={() => {
              currentTheme === ThemeEnum.LIGHT
                ? setCurrentTheme(ThemeEnum.DARK)
                : setCurrentTheme(ThemeEnum.LIGHT);
            }}
          >
            <StyledMapTypeText>Dark Mode:</StyledMapTypeText>

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

        {/*  */}

        <StyledSectionWrapper>
          <StyledSecondaryHeading>Theme</StyledSecondaryHeading>

          <StyledThemeSwitch
            onClick={() => {
              currentTheme === ThemeEnum.LIGHT
                ? setCurrentTheme(ThemeEnum.DARK)
                : setCurrentTheme(ThemeEnum.LIGHT);
            }}
          >
            <StyledMapTypeText>Dark Mode:</StyledMapTypeText>

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

        {/*  */}

        <StyledSectionWrapper>
          <StyledSecondaryHeading>Theme</StyledSecondaryHeading>

          <StyledThemeSwitch
            onClick={() => {
              currentTheme === ThemeEnum.LIGHT
                ? setCurrentTheme(ThemeEnum.DARK)
                : setCurrentTheme(ThemeEnum.LIGHT);
            }}
          >
            <StyledMapTypeText>Dark Mode:</StyledMapTypeText>

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
      </StyledContentWrapper>
    </StyledDrawWrapper>
  );
};

const StyledDrawWrapper = styled.div`
  margin-top: 1rem;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5rem;
  background: ${(props) => props.theme.primaryBackgroundColor};
  overflow: auto;
`;

const StyledDrawHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 0.8rem;
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
  /* align-items: center; */
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

const StyledMapIconWrapper = styled.div`
  height: 60px;
  width: 60px;

  display: flex;
  justify-content: center;
  align-items: center;

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

// const StyledAccordionContentWrapper = styled.div`
//   width: 100%;
//   display: flex;
//   flex-direction: row;
//   justify-content: space-between;
//   align-items: center;
// `;

// const StyledSettingsWrapper = styled.div`
//   margin-top: 1rem;
//   width: 100%;

//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   gap: 1rem;
//   overflow-y: scroll;
// `;

// const StyledHeader = styled.div`
//   width: 80%;
//   padding: 1rem;

//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;

//   color: ${(props) => props.theme.primaryFontColor};
//   font-size: 1.1rem;
//   font-weight: 500;

//   overflow: hidden;
// `;

// const StyledProfileContent = styled.div`
//   height: 55vh;
//   padding: 0.5rem;

//   display: flex;
//   flex-wrap: wrap;
//   justify-content: center;

//   overflow-x: hidden;
//   overflow-y: scroll;
// `;

// const StyledSettingsContent = styled.div`
//   height: 55vh;
//   margin-top: -0.2rem;

//   display: flex;
//   align-items: flex-start;
//   flex-wrap: wrap;
//   flex-direction: column;

//   border-radius: ${(props) => props.theme.drawerBorderRadius}
//     ${(props) => props.theme.drawerBorderRadius} 0 0;
//   background: ${(props) => props.theme.secondaryBackgroundColor};

//   overflow-x: hidden;
//   overflow-y: scroll;

//   z-index: 6;
// `;

// const SectionHeadline = styled.div`
//   width: 100%;
//   margin-top: 1rem;

//   padding: ${(props) => props.theme.sectionHeadlinePadding};

//   border-radius: ${(props) => props.theme.buttonBorderRadius};

//   background-color: ${(props) => props.theme.sectionHeadlineBackgroundColor};
//   color: ${(props) => props.theme.sectionHeadlineColor};
// `;

// const StyledItemSwitch = styled.div`
//   align-self: start;

//   width: 100%;

//   display: flex;
//   justify-content: space-between;
//   align-items: center;

//   background-color: ${(props) => props.theme.secondaryBackgroundColor};
//   color: ${(props) => props.theme.secondaryFontColor};

//   font-size: 1.3rem;
//   font-weight: 500;
// `;

export default Settings;

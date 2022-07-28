import { useState } from "react";

// React router imports
import { Outlet } from "react-router-dom";

// Context imports
import RealmContext from "./context/RealmContext";
import NavigationContext from "./context/NavigationContext";
import ActionMenuContext from "./context/ActionMenuContext";
import MissionMapContext, {
  ActiveTileLayerEnum,
} from "./context/MissionMapContext";
import CreateMarkerContext from "./context/CreateMarkerContext";
import MissionContext from "./context/MissionContext";
import ModalContext from "./context/ModalContext";

// Theming imports
import { ThemeProvider } from "styled-components";
import { GlobalStyles, darkTheme, lightTheme } from "./styles/GlobalStyle";

// helper functions imports
import connectToRealm from "./helpers/connectToRealm";

// type imports
import { Location, MarkerType } from "./components/map/mapTypes";
import { MissionSchema } from "./data/realm/schema/mission";
import ThemeContext, { ThemeEnum } from "./context/ThemeContext";

const App = () => {
  // initialize the MongoDB Realm connection
  const realm = connectToRealm();

  const [currentTheme, setCurrentTheme] = useState<ThemeEnum>(ThemeEnum.DARK);

  // state for the draw / navigation context
  const [isDrawOpen, setIsDrawOpen] = useState<boolean>(false);

  // state for the actionmenu context
  const [isActionMenuOpen, setIsActionMenuOpen] = useState<boolean>(false);
  const [isCreateMarkerModeEnabled, setIsCreateMarkerModeEnabled] =
    useState<boolean>(false);
  const [isCreateMarkerDrawOpen, setIsCreateMarkerDrawOpen] =
    useState<boolean>(false);
  const [markerType, setMarkerType] = useState<MarkerType>(MarkerType.HAZARD);

  // state for the create marker context
  const [createMarkerLocation, setCreateMarkerLocation] = useState<Location>([
    0, 0,
  ]);

  // state for the mission context
  const [activeMission, setActiveMission] = useState<MissionSchema | null>(
    null
  );

  const [isPolygonDrawingActive, setIsPolygonDrawingActive] =
    useState<boolean>(false);

  const [polygonDrawingCoordinates, setPolygonDrawingCoordinates] = useState<
    number[][][]
  >([]);

  // state for the mission map context
  const [activeTileLayer, setActiveTileLayer] = useState<ActiveTileLayerEnum>(
    ActiveTileLayerEnum.DEFAULT
  );

  const [reRenderBoolean, setReRenderBoolean] = useState<boolean>(false);

  // state for the modal context
  const [isModalActive, setIsModalActive] = useState<boolean>(false);
  const [modalContent, setModalContent] = useState<string>("");

  return (
    <>
      <RealmContext.Provider value={{ realm }}>
        <ThemeContext.Provider value={{ currentTheme, setCurrentTheme }}>
          {/* pass the appropriate global values for the current theme */}
          <ThemeProvider
            theme={currentTheme === "dark" ? darkTheme : lightTheme}
          >
            <ModalContext.Provider
              value={{
                isModalActive,
                setIsModalActive,
                modalContent,
                setModalContent,
              }}
            >
              <NavigationContext.Provider value={{ isDrawOpen, setIsDrawOpen }}>
                <ActionMenuContext.Provider
                  value={{
                    isActionMenuOpen,
                    setIsActionMenuOpen,
                    isCreateMarkerModeEnabled,
                    setIsCreateMarkerModeEnabled,
                    isCreateMarkerDrawOpen,
                    setIsCreateMarkerDrawOpen,
                    markerType,
                    setMarkerType,
                  }}
                >
                  <MissionContext.Provider
                    value={{
                      activeMission,
                      setActiveMission,
                      isPolygonDrawingActive,
                      setIsPolygonDrawingActive,
                      polygonDrawingCoordinates,
                      setPolygonDrawingCoordinates,
                    }}
                  >
                    <MissionMapContext.Provider
                      value={{
                        activeTileLayer,
                        setActiveTileLayer,
                        reRenderBoolean,
                        setReRenderBoolean,
                      }}
                    >
                      <CreateMarkerContext.Provider
                        value={{
                          createMarkerLocation,
                          setCreateMarkerLocation,
                        }}
                      >
                        {/* React Router Outlet component always renders children  */}
                        <Outlet />
                      </CreateMarkerContext.Provider>
                    </MissionMapContext.Provider>
                  </MissionContext.Provider>
                </ActionMenuContext.Provider>
                <GlobalStyles theme={currentTheme} />
              </NavigationContext.Provider>
            </ModalContext.Provider>
          </ThemeProvider>
        </ThemeContext.Provider>
      </RealmContext.Provider>
    </>
  );
};

export default App;

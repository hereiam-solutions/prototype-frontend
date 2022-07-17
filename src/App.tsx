import { useState } from 'react';

// React router imports
import { Outlet } from 'react-router-dom';

// Context imports
import RealmContext from './context/RealmContext';
import NavigationContext from './context/NavigationContext';
import ActionMenuContext from './context/ActionMenuContext';

// Theming imports
import { ThemeProvider } from 'styled-components';
import { GlobalStyles, darkTheme, lightTheme } from './styles/GlobalStyle';
import useTheme from './hooks/useTheme';

// helper functions imports
import connectToRealm from './helpers/connectToRealm';

// type imports
import { MarkerType } from './components/map/mapTypes';

const App = () => {
  // get the current theme
  const { currentTheme } = useTheme();

  // initialize the MongoDB Realm connection
  const realm = connectToRealm();

  // state for the draw / navigation context
  const [isDrawOpen, setIsDrawOpen] = useState<boolean>(false);

  // state for the actionmenu context
  const [isActionMenuOpen, setIsActionMenuOpen] = useState<boolean>(false);
  const [isCreateMarkerModeEnabled, setIsCreateMarkerModeEnabled] =
    useState<boolean>(false);
  const [isCreateMarkerDrawOpen, setIsCreateMarkerDrawOpen] =
    useState<boolean>(false);
  const [markerType, setMarkerType] = useState<MarkerType>(MarkerType.HAZARD);

  return (
    <>
      <RealmContext.Provider value={{ realm }}>
        {/* pass the appropriate global values for the current theme */}
        <ThemeProvider theme={currentTheme === 'dark' ? darkTheme : lightTheme}>
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
            <NavigationContext.Provider value={{ isDrawOpen, setIsDrawOpen }}>
              {/* React Router Outlet component always renders children  */}
              <Outlet />
            </NavigationContext.Provider>
          </ActionMenuContext.Provider>
          <GlobalStyles />
        </ThemeProvider>
      </RealmContext.Provider>
    </>
  );
};

export default App;

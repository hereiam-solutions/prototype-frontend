import { useState } from 'react';

// React router imports
import { Outlet } from 'react-router-dom';

// Context imports
import RealmContext from './context/RealmContext';
import NavigationContext from './context/NavigationContext';

// Theming imports
import { ThemeProvider } from 'styled-components';
import {
  GlobalStyles,
  globalDarkThemeValues,
  globalLightThemeValues,
} from './styles/GlobalStyle';
import useTheme from './hooks/useTheme';

// helper functions imports
import connectToRealm from './helpers/connectToRealm';

const App = () => {
  // get the current theme
  const { currentTheme } = useTheme();

  // initialize the MongoDB Realm connection
  const realm = connectToRealm();

  // state for the draw / navigation context
  const [isDrawOpen, setIsDrawOpen] = useState<boolean>(false);

  return (
    <>
      <RealmContext.Provider value={{ realm }}>
        {/* pass the appropriate global values for the current theme */}
        <ThemeProvider
          theme={
            currentTheme === 'dark'
              ? globalDarkThemeValues
              : globalLightThemeValues
          }
        >
          <NavigationContext.Provider value={{ isDrawOpen, setIsDrawOpen }}>
            {/* React Router Outlet component always renders children  */}
            <Outlet />
          </NavigationContext.Provider>
          <GlobalStyles />
        </ThemeProvider>
      </RealmContext.Provider>
    </>
  );
};

export default App;

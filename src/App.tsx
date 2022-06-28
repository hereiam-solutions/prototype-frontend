// React router imports
import { Outlet } from 'react-router-dom';

// Context imports
import RealmContext from './context/RealmContext';

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
          {/* React Router Outlet component always renders children  */}
          <Outlet />
          <GlobalStyles />
        </ThemeProvider>
      </RealmContext.Provider>
    </>
  );
};

export default App;

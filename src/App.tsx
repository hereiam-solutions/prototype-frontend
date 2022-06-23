import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import {
  GlobalStyles,
  globalDarkThemeValues,
  globalLightThemeValues,
} from './styles/GlobalStyle';
import useTheme from './hooks/useTheme';
import Map from './components/Map';
import Nav from  './components/Nav';

const App = () => {
  // get the current theme
  const { currentTheme } = useTheme();

  return (
    <>
      {/* pass the appropriate global values for the current theme */}

      <ThemeProvider>
        /*
        theme={
          currentTheme === 'dark'
            ? globalDarkThemeValues
            : globalLightThemeValues
        }
        */

        <Map />
        <Nav />

        {
          <Routes>
            /*<Route path="/" element={<Home />} /> */
            <Route path="/" element={<Map />} />,
            /*<Route path="signup" element={<Signup />} /> */
            /*<Route path="signin" element={<Signin />} /> */
            /*<Route element={<RequireAuth />}> */
              <Route path="/profile" element={<Profile />} />,
              <Route path="/settings" element={<Settings />} />,
              <Route path="/about" element={<About />} />
            /*</Route>*/
          </Routes>
        }
        <GlobalStyles />
      </ThemeProvider>

    </>

  );
};

export default App;

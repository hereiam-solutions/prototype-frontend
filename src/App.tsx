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
import Profile from  './components/Profile';
import Settings from  './components/Settings';
import About from  './components/About';

const App = () => {
  // get the current theme
  const { currentTheme } = useTheme();

  return (
    <>
      {/* pass the appropriate global values for the current theme */}

      <ThemeProvider

        theme={
          currentTheme === 'dark'
            ? globalDarkThemeValues
            : globalLightThemeValues
        }
      >
        <Map />
        <Nav />
        {
          <Routes>
            <Route path="/" element={<Map />} />;
              <Route path="/profile" element={<Profile />} />;
              <Route path="/settings" element={<Settings />} />;
              <Route path="/about" element={<About />} />;
          </Routes>
        }
        <GlobalStyles />
      </ThemeProvider>

    </>

  );
};

export default App;

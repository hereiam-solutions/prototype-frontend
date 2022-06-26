import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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

// Component imports
import Map from './components/Map';
import Nav from './components/Nav';
import Profile from './components/Profile';
import Settings from './components/Settings';
import About from './components/About';

// helper functions imports
import connectToRealm from './helpers/connectToRealm';
import Register from './components/Register';
import Login from './components/Login';

const App = () => {
  // get the current theme
  const { currentTheme } = useTheme();

  // initialize the MongoDB Realm connection
  const realm = connectToRealm();

  return (
    <>
      <Router>
        <RealmContext.Provider value={{ realm }}>
          {/* pass the appropriate global values for the current theme */}
          <ThemeProvider
            theme={
              currentTheme === 'dark'
                ? globalDarkThemeValues
                : globalLightThemeValues
            }
          >
            {/* <Map />
            <Nav /> */}

            <Routes>
              <Route path="/" element={<Map />} />;
              <Route path="/register" element={<Register />} />;
              <Route path="/login" element={<Login />} />;
              <Route path="/profile" element={<Profile />} />;
              <Route path="/settings" element={<Settings />} />;
              <Route path="/about" element={<About />} />;
            </Routes>

            <GlobalStyles />
          </ThemeProvider>
        </RealmContext.Provider>
      </Router>
    </>
  );
};

export default App;

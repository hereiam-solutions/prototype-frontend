import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import {
  GlobalStyles,
  globalDarkThemeValues,
  globalLightThemeValues,
} from './styles/GlobalStyle';
import useTheme from './hooks/useTheme';
import Map from './components/Map';

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
        {/* <Routes>
          <Route path="/" element={<Map />} />
          <Route path="signup" element={<Signup />} />
            <Route path="signin" element={<Signin />} />
            <Route path="/" element={<Home />} />
            <Route element={<RequireAuth />}>
              <Route path="notes" element={<Notes />} />
              <Route path="note" element={<Note />}>
                <Route path=":noteID" element={<Note />} />
              </Route>
            </Route>s
           </Route>
        </Routes> */}
        <GlobalStyles />
      </ThemeProvider>
    </>
  );
};

export default App;

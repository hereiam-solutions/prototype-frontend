import { ThemeProvider } from 'styled-components';

import {
  GlobalStyles,
  globalDarkThemeValues,
  globalLightThemeValues,
} from './styles/GlobalStyle';
import useTheme from './hooks/useTheme';

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
        <div className="App">HI</div>
        <GlobalStyles />
      </ThemeProvider>
    </>
  );
};

export default App;

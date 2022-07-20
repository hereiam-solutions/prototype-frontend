import { ReactNode, createContext, useState } from 'react';

// create an enum for all possible themes
// this ensures that there can be no values assigned to the context besides the ones specified in this enum
export enum ThemeEnum {
  DARK = 'dark',
  LIGHT = 'light',
}

// create a type for the context's value
type ThemeContextType = {
  currentTheme: ThemeEnum;
  setCurrentTheme: (theme: ThemeEnum) => void;
};

// create the context and set a default value that matches the context type
const ThemeContext = createContext<ThemeContextType>({
  currentTheme: ThemeEnum.LIGHT,
  setCurrentTheme: () => {},
});

// export the context provider which wraps (almost) all of the other components and provides the context's values
export const ThemeProvider = (children: ReactNode) => {
  const [currentTheme, setCurrentTheme] = useState<ThemeEnum>(ThemeEnum.LIGHT);

  return (
    <ThemeContext.Provider value={{ currentTheme, setCurrentTheme }}>
      <>{children}</>
    </ThemeContext.Provider>
  );
};

export default ThemeContext;

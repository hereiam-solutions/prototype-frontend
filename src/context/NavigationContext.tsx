import { ReactNode, createContext, useState } from 'react';

// create a type for the context's value
type NavigationContextType = {
  isDrawOpen: boolean;
  setIsDrawOpen: (drawState: boolean) => void;
};

// create the context and set a default value that matches the context type
const NavigationContext = createContext<NavigationContextType>({
  isDrawOpen: false,
  setIsDrawOpen: () => {},
});

// export the context provider which wraps (almost) all of the other components and provides the context's values
export const NavigationProvider = (children: ReactNode) => {
  const [isDrawOpen, setIsDrawOpen] = useState<boolean>(false);

  return (
    <NavigationContext.Provider value={{ isDrawOpen, setIsDrawOpen }}>
      <>{children}</>
    </NavigationContext.Provider>
  );
};

export default NavigationContext;

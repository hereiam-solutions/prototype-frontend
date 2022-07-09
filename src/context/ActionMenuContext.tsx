import { ReactNode, createContext, useState } from 'react';

// create a type for the context's value
type ActionMenuContextType = {
  isActionMenuOpen: boolean;
  setIsActionMenuOpen: (actionMenuState: boolean) => void;
};

// create the context and set a default value that matches the context type
const ActionMenuContext = createContext<ActionMenuContextType>({
  isActionMenuOpen: false,
  setIsActionMenuOpen: () => {},
});

// export the context provider which wraps (almost) all of the other components and provides the context's values
export const ActionMenuProvider = (children: ReactNode) => {
  const [isActionMenuOpen, setIsActionMenuOpen] = useState<boolean>(false);

  return (
    <ActionMenuContext.Provider
      value={{
        isActionMenuOpen: isActionMenuOpen,
        setIsActionMenuOpen: setIsActionMenuOpen,
      }}
    >
      <>{children}</>
    </ActionMenuContext.Provider>
  );
};

export default ActionMenuContext;

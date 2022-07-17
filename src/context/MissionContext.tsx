import { ReactNode, createContext, useState } from 'react';

type MissionType = {
  id: string;
};
// create a type for the context's value
type MissionContextType = {
  activeMission: MissionType | null;
  setActiveMission: (mission: MissionType) => void;
};

// create the context and set a default value that matches the context type
const MissionContext = createContext<MissionContextType>({
  activeMission: null,
  setActiveMission: () => {},
});

// export the context provider which wraps (almost) all of the other components and provides the context's values
export const MissionProvider = (children: ReactNode) => {
  const [activeMission, setActiveMission] = useState<MissionType | null>(null);

  return (
    <MissionContext.Provider
      value={{
        activeMission: activeMission,
        setActiveMission: setActiveMission,
      }}
    >
      <>{children}</>
    </MissionContext.Provider>
  );
};

export default MissionContext;

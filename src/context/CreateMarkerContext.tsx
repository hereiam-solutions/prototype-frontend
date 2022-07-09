import { ReactNode, createContext, useState } from 'react';
import { Location } from '../components/map/mapTypes';

// create a type for the context's value
type CreateMarkerContextType = {
  location: Location;
  setLocation: (location: Location) => void;
};

// create the context and set a default value that matches the context type
const CreateMarkerContext = createContext<CreateMarkerContextType>({
  location: [0, 0],
  setLocation: () => {},
});

// export the context provider which wraps (almost) all of the other components and provides the context's values
export const CreateMarkerProvider = (children: ReactNode) => {
  const [location, setLocation] = useState<Location>([0, 0]);

  return (
    <CreateMarkerContext.Provider value={{ location, setLocation }}>
      <>{children}</>
    </CreateMarkerContext.Provider>
  );
};

export default CreateMarkerContext;

import { ReactNode, createContext, useState } from "react";
import { Location } from "../components/map/mapTypes";

// create a type for the context's value
type CreateMarkerContextType = {
  createMarkerLocation: Location;
  setCreateMarkerLocation: (location: Location) => void;
};

// create the context and set a default value that matches the context type
const CreateMarkerContext = createContext<CreateMarkerContextType>({
  createMarkerLocation: [0, 0],
  setCreateMarkerLocation: () => {},
});

// export the context provider which wraps (almost) all of the other components and provides the context's values
export const CreateMarkerProvider = (children: ReactNode) => {
  const [createMarkerLocation, setCreateMarkerLocation] = useState<Location>([
    0, 0,
  ]);

  return (
    <CreateMarkerContext.Provider
      value={{
        createMarkerLocation: createMarkerLocation,
        setCreateMarkerLocation: setCreateMarkerLocation,
      }}
    >
      <>{children}</>
    </CreateMarkerContext.Provider>
  );
};

export default CreateMarkerContext;

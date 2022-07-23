import { ReactNode, createContext, useState } from "react";
import { MissionSchema } from "../data/realm/schema/mission";

// create a type for the context's value
type MissionContextType = {
  activeMission: MissionSchema | null;
  setActiveMission: (activeMission: MissionSchema | null) => void;
  isPolygonDrawingActive: boolean;
  setIsPolygonDrawingActive: (isPolygonDrawingActive: boolean) => void;
  polygonDrawingCoordinates: number[][][];
  setPolygonDrawingCoordinates: (coordinates: number[][][]) => void;
};

// create the context and set a default value that matches the context type
const MissionContext = createContext<MissionContextType>({
  activeMission: null,
  setActiveMission: () => {},
  isPolygonDrawingActive: false,
  setIsPolygonDrawingActive: () => {},
  polygonDrawingCoordinates: [],
  setPolygonDrawingCoordinates: () => {},
});

// export the context provider which wraps (almost) all of the other components and provides the context's values
export const MissionProvider = (children: ReactNode) => {
  const [activeMission, setActiveMission] = useState<MissionSchema | null>(
    null
  );

  const [isPolygonDrawingActive, setIsPolygonDrawingActive] =
    useState<boolean>(false);

  const [polygonDrawingCoordinates, setPolygonDrawingCoordinates] = useState<
    number[][][]
  >([]);

  return (
    <MissionContext.Provider
      value={{
        activeMission: activeMission,
        setActiveMission: setActiveMission,
        isPolygonDrawingActive: isPolygonDrawingActive,
        setIsPolygonDrawingActive: setIsPolygonDrawingActive,
        polygonDrawingCoordinates: polygonDrawingCoordinates,
        setPolygonDrawingCoordinates: setPolygonDrawingCoordinates,
      }}
    >
      <>{children}</>
    </MissionContext.Provider>
  );
};

export default MissionContext;

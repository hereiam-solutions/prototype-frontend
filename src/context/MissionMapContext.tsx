// needs:
// switcher for tilelayer
// refresh boolean for rerendering the map after creation of marker
// ?? change polygon opotion ??

import { ReactNode, createContext, useState } from "react";

export enum ActiveTileLayerEnum {
  DEFAULT = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  CYCLOSM = "https://{s}.tile-cyclosm.openstreetmap.fr/[cyclosm|cyclosm-lite]/{z}/{x}/{y}.png",
  HUMANITARIAN = "https://a.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png",
  SATELLITE = "https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}",
}
// create a type for the context's value
type MissionMapContextType = {
  activeTileLayer: ActiveTileLayerEnum;
  setActiveTileLayer: (tileLayer: ActiveTileLayerEnum) => void;
};

// create the context and set a default value that matches the context type
const MissionMapContext = createContext<MissionMapContextType>({
  activeTileLayer: ActiveTileLayerEnum.DEFAULT,
  setActiveTileLayer: () => {},
});

// export the context provider which wraps (almost) all of the other components and provides the context's values
export const MissionMapProvider = (children: ReactNode) => {
  const [activeTileLayer, setActiveTileLayer] = useState<ActiveTileLayerEnum>(
    ActiveTileLayerEnum.DEFAULT
  );

  return (
    <MissionMapContext.Provider value={{ activeTileLayer, setActiveTileLayer }}>
      <>{children}</>
    </MissionMapContext.Provider>
  );
};

export default MissionMapContext;

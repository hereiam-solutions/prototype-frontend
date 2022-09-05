// needs:
// switcher for tilelayer
// refresh boolean for rerendering the map after creation of marker
// ?? change polygon opotion ??

import { ReactNode, createContext, useState } from "react";

export enum ActiveTileLayerEnum {
  DEFAULT = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  //   CYCLOSM = "https://{s}.tile-cyclosm.openstreetmap.fr/[cyclosm|cyclosm-lite]/{z}/{x}/{y}.png",
  HUMANITARIAN = "https://a.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png",
  SATELLITE = "https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}",
  // https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}
  // https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/256/{{z}}/{{x}}/{{y}}@2x?access_token={process.env.HEREIAM_MAPBOX_TOKEN}
}

// create a type for the context's value
type MissionMapContextType = {
  activeTileLayer: ActiveTileLayerEnum;
  setActiveTileLayer: (tileLayer: ActiveTileLayerEnum) => void;
  reRenderBoolean: boolean;
  setReRenderBoolean: (reRenderBoolean: boolean) => void;
};

// create the context and set a default value that matches the context type
const MissionMapContext = createContext<MissionMapContextType>({
  activeTileLayer: ActiveTileLayerEnum.DEFAULT,
  setActiveTileLayer: () => {},
  reRenderBoolean: false,
  setReRenderBoolean: () => {},
});

// export the context provider which wraps (almost) all of the other components and provides the context's values
export const MissionMapProvider = (children: ReactNode) => {
  const [activeTileLayer, setActiveTileLayer] = useState<ActiveTileLayerEnum>(
    ActiveTileLayerEnum.DEFAULT
  );

  const [reRenderBoolean, setReRenderBoolean] = useState<boolean>(false);

  return (
    <MissionMapContext.Provider
      value={{
        activeTileLayer,
        setActiveTileLayer,
        reRenderBoolean,
        setReRenderBoolean,
      }}
    >
      <>{children}</>
    </MissionMapContext.Provider>
  );
};

export default MissionMapContext;

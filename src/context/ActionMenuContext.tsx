import { ReactNode, createContext, useState } from 'react';
import { MarkerType, screenCoordinatesType } from '../components/map/mapTypes';

// create a type for the context's value
type ActionMenuContextType = {
  isActionMenuOpen: boolean;
  setIsActionMenuOpen: (actionMenuState: boolean) => void;
  isCreateMarkerModeEnabled: boolean;
  setIsCreateMarkerModeEnabled: (createMarkerModeState: boolean) => void;
  isCreateMarkerDrawOpen: boolean;
  setIsCreateMarkerDrawOpen: (createMarkerDrawState: boolean) => void;
  markerType: MarkerType;
  setMarkerType: (markerType: MarkerType) => void;
};

// create the context and set a default value that matches the context type
const ActionMenuContext = createContext<ActionMenuContextType>({
  isActionMenuOpen: false,
  setIsActionMenuOpen: () => {},
  isCreateMarkerModeEnabled: false,
  setIsCreateMarkerModeEnabled: () => {},
  isCreateMarkerDrawOpen: false,
  setIsCreateMarkerDrawOpen: () => {},
  markerType: MarkerType.HAZARD,
  setMarkerType: () => {},
});

// export the context provider which wraps (almost) all of the other components and provides the context's values
export const ActionMenuProvider = (children: ReactNode) => {
  const [isActionMenuOpen, setIsActionMenuOpen] = useState<boolean>(false);
  const [isCreateMarkerModeEnabled, setIsCreateMarkerModeEnabled] =
    useState<boolean>(false);
  const [isCreateMarkerDrawOpen, setIsCreateMarkerDrawOpen] =
    useState<boolean>(false);
  const [markerType, setMarkerType] = useState<MarkerType>(MarkerType.HAZARD);

  return (
    <ActionMenuContext.Provider
      value={{
        isActionMenuOpen: isActionMenuOpen,
        setIsActionMenuOpen: setIsActionMenuOpen,
        isCreateMarkerModeEnabled: isCreateMarkerModeEnabled,
        setIsCreateMarkerModeEnabled: setIsCreateMarkerModeEnabled,
        isCreateMarkerDrawOpen: isCreateMarkerDrawOpen,
        setIsCreateMarkerDrawOpen: setIsCreateMarkerDrawOpen,
        markerType: markerType,
        setMarkerType: setMarkerType,
      }}
    >
      <>{children}</>
    </ActionMenuContext.Provider>
  );
};

export default ActionMenuContext;

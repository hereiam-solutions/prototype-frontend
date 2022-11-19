import { Marker, Popup } from "react-leaflet";
import useRealm from "../../../hooks/useRealm";
import useMission from "../../../hooks/useMission";
import {
  DeleteSignalArgs,
  SignalSchema,
} from "../../../data/realm/schema/signal";
import useMissionMap from "../../../hooks/useMissionMap";
import { realmFunctionNames } from "../../../data/realm/functions";

// styling imports
import {
  StyledPopupContentWrapper,
  StyledPopupHeading,
  StyledDate,
  StyledSection,
  StyledBoldText,
  StyledText,
  StyledDeactivateButton,
} from "./styles/markerStyles";

//divlogo for leaflet
import { divIcon } from "leaflet";
import { renderToStaticMarkup } from "react-dom/server";
import styled from "styled-components";
import { MdNotListedLocation } from "react-icons/md";

type Props = {
  signal: SignalSchema;
};

//customize logo
let iconSize = 30;
const StyledLocationMarker = styled.button`
 background-color: #F8DE00;
 border-radius: 50px;
`;
const iconMarker = renderToStaticMarkup(
  <div>
    <StyledLocationMarker>
      <MdNotListedLocation
        size={iconSize}
      />
    </StyledLocationMarker>
  </div>
);

const signalIcon = divIcon({
  html: iconMarker,
  className: 'suspectedvictim',
  iconAnchor: [0, 24],
});

const SignalMarker = ({ signal }: Props) => {
  const { realm } = useRealm();
  const { activeMission } = useMission();
  const { reRenderBoolean, setReRenderBoolean } = useMissionMap();

  const deleteSignal = async () => {
    if (activeMission) {
      const args: DeleteSignalArgs = {
        _id: signal._id.toString(),
      };

      if (realm.currentUser) {
        // call the Realm function
        await realm.currentUser.callFunction(
          realmFunctionNames.deleteSignal,
          args
        );
      }

      setReRenderBoolean(!reRenderBoolean);
    }
  };

  return (
    <Marker
      position={[signal.geoJSON.coordinates[0], signal.geoJSON.coordinates[1]]}
      icon={signalIcon}
    >
      <Popup>
        <StyledPopupContentWrapper>
          <StyledPopupHeading>Suspected victim</StyledPopupHeading>
          

          <StyledSection>
            <StyledBoldText>Details: </StyledBoldText>
            <StyledText>{signal.identifier}</StyledText>
          </StyledSection>

          <StyledDeactivateButton onClick={deleteSignal}>
            Remove
          </StyledDeactivateButton>

          <StyledDate>{new Date(signal.timestamp).toLocaleString()}</StyledDate>
        
        </StyledPopupContentWrapper>
      </Popup>
    </Marker>
  );
};

export default SignalMarker;

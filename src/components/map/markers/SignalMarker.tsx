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
          <StyledBy>
            by<br />
            {signal.signal_type}
          </StyledBy>

          {/* truncate to 5 */}
          <StyledCoordinates>
            {signal.geoJSON.coordinates[0]}
            <br />
            {signal.geoJSON.coordinates[1]}
          </StyledCoordinates>
          

          <StyledSignalSection>
            <StyledBoldText>Details: </StyledBoldText>
            <StyledBoldText>{signal.identifier}</StyledBoldText>
          </StyledSignalSection>

          <StyledDeactivateButton onClick={deleteSignal}>
            CLEAR
          </StyledDeactivateButton>

          <StyledDate>{new Date(signal.timestamp).toLocaleString()}</StyledDate>
        
        </StyledPopupContentWrapper>
      </Popup>
    </Marker>
  );
};

const StyledBy = styled.div`

  width: 100%;
  padding: 0.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  font-size: 1rem;
  font-weight: 500;
  text-align: center;

  border: 1px solid ${(props) => props.theme.buttonFontColor};
  border-radius: ${(props) => props.theme.primaryBorderRadius};

`;

const StyledSignalSection = styled.div`
  margin-top: 1rem;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledCoordinates = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  font-size: 0.7rem;
  font-weight: 300;

`;

export default SignalMarker;
function truncate(arg0: { signal: SignalSchema; "": any; }, arg1: number) {
  throw new Error("Function not implemented.");
}


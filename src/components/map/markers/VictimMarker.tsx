import { Marker, Popup } from "react-leaflet";
import {
  DeleteVictimArgs,
  VictimSchema,
} from "../../../data/realm/schema/victim";
import useRealm from "../../../hooks/useRealm";
import useMission from "../../../hooks/useMission";
import useMissionMap from "../../../hooks/useMissionMap";
import { realmFunctionNames } from "../../../data/realm/functions";

// styling imports
import {
  StyledPopupContentWrapper,
  StyledPopupHeading,
  StyledDate,
  StyledSection,
  StyledBoldText,
  StyledStatusText,
  StyledDeactivateButton,
} from "./styles/markerStyles";

//divlogo for leaflet
import { divIcon } from "leaflet";
import { renderToStaticMarkup } from "react-dom/server";
import styled from "styled-components";
import { RiCreativeCommonsByFill } from "react-icons/ri";

type Props = {
  victim: VictimSchema;
};

//customize logo
let iconSize = 30;
const StyledLocationMarker = styled.button`
 background-color: var(--base-light);
 border-radius: 50px;
`;
const iconMarker = renderToStaticMarkup(
  <div>
    <StyledLocationMarker>
      <RiCreativeCommonsByFill
        size={iconSize}
      />
    </StyledLocationMarker>
  </div>
);

const VictimIcon = divIcon({
  html: iconMarker,
  className: 'victim',
  iconAnchor: [0, 0],
});

const PatientMarker = ({ victim }: Props) => {
  const { realm } = useRealm();
  const { activeMission } = useMission();
  const { reRenderBoolean, setReRenderBoolean } = useMissionMap();

  const deleteVictim = async () => {
    if (activeMission) {
      const args: DeleteVictimArgs = {
        _id: victim._id.toString(),
      };

      if (realm.currentUser) {
        // call the Realm function
        await realm.currentUser.callFunction(
          realmFunctionNames.deleteVictim,
          args
        );
      }

      setReRenderBoolean(!reRenderBoolean);
    }
  };

  return (
    <Marker
      position={[
        victim.geoJSON.coordinates[0],
        victim.geoJSON.coordinates[1],
      ]}
      icon={VictimIcon}
    >
      <Popup>
        <StyledPopupContentWrapper>
          
          <StyledPopupHeading>Victim</StyledPopupHeading>

          <StyledStatusText>{victim.status}</StyledStatusText>


          <StyledSection>     
            <StyledBoldText>{victim.agegroup} years</StyledBoldText>
            <StyledBoldText>{victim.gender}</StyledBoldText>
          </StyledSection>

          <StyledSection>
            <h4>Extriction</h4>
            <StyledBoldText>from {victim.total_extrication_from}</StyledBoldText>
            <StyledBoldText>to {victim.total_extrication_to}</StyledBoldText>
            <StyledBoldText>at {victim.extricatedLevel}</StyledBoldText>
            <StyledBoldText>{"->"}{victim.foundStreetAddress}</StyledBoldText>
            <StyledBoldText>in {victim.positionInStructure}</StyledBoldText>
          </StyledSection>

          <StyledSection>
            <h4>Handover</h4>
            <StyledBoldText>on {victim.handover}</StyledBoldText>
            <StyledBoldText>name {victim.handoverTo}</StyledBoldText>
          </StyledSection>

          <StyledDeactivateButton onClick={deleteVictim}>
            Handover
          </StyledDeactivateButton>

          <StyledDate>
            {new Date(victim.timestamp).toLocaleString()}
          </StyledDate>

        </StyledPopupContentWrapper>
      </Popup>
    </Marker>
  );
};

export default PatientMarker;

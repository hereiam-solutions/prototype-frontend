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
  StyledBoldText,
  StyledDeactivateButton,
  StyledSection,
} from "./styles/markerStyles";

//divlogo for leaflet
import { divIcon } from "leaflet";
import { renderToStaticMarkup } from "react-dom/server";
import styled from "styled-components";
import { RiCreativeCommonsByFill } from "react-icons/ri";

type Props = {
  victim: VictimSchema;
};

//define victim shortsign

    // get current users firstName and lastName, take the first letter and combine to a capitalized two part abbreviation like "MK"

    // set victimcounter to "0" for current user when createMission
    // store victimcounter in localStorage
    // for each victim increment the victimcounter +1

    // combine userShortSign + victimCounter to victimShortSign

//customize logo

//change background-color depends on victim.status
let iconSize = 30;
const StyledLocationMarker = styled.button`
 background-color: ${(props) => props.theme.alertColor};
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

const VictimMarker = ({ victim }: Props) => {
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
          
          <StyledSection>
            <StyledShortSign>
              <StyledVictimID>
                MK014
              </StyledVictimID>
              <StyledHint>
                Write this ID clearly <br />
                readable on the victim.
              </StyledHint>
            </StyledShortSign>
          </StyledSection>

          {/*change background-color and color depends victim.status */}
          <StyledSection>
            <StyledStatus>{victim.status}</StyledStatus>    
          </StyledSection>

          <StyledDataSection>
            <StyledBoldText>{victim.agegroup} years</StyledBoldText>
            <StyledBoldText>{victim.gender}</StyledBoldText>
          </StyledDataSection>

          <StyledSection>
            <StyledActionSection>
              <h4>Actions</h4>
              <StyledList>
                {victim.myAction.map(
                  (action: string, index: number) => {
                    return (
                      <StyledListEntry key={index}>{action}</StyledListEntry>
                    );
                  }
                )}
              </StyledList>
            </StyledActionSection>
          </StyledSection>
            
          <StyledSection>
            <StyledExtrictionSection>
              <h4>Extriction</h4>
              <StyledBoldText>from {new Date(victim.total_extrication_from).toLocaleString()}</StyledBoldText>
              <StyledBoldText>to {new Date(victim.total_extrication_to).toLocaleString()}</StyledBoldText>
              <br />
              <StyledBoldText>at {victim.extricatedLevel}</StyledBoldText>
              <StyledBoldText>{"->"}{victim.foundStreetAddress}</StyledBoldText>
              <StyledBoldText>in {victim.positionInStructure}</StyledBoldText>
            </StyledExtrictionSection>
          </StyledSection>
          
          <StyledSection>
            <StyledHandoverSection>
              <h4>Handover</h4>
              <StyledBoldText>on {victim.handover}</StyledBoldText>
              <StyledBoldText>name {victim.handoverTo}</StyledBoldText>
            </StyledHandoverSection>
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

const StyledStatus = styled.div`

  width: 100%;
  self-align: center;
  padding: 0.5rem;

  color: ${(props) => props.theme.buttonFontColor};
  font-size: 1.3rem;
  font-weight: 500;
  text-align: center;

  border: 1px solid ${(props) => props.theme.buttonFontColor};
  border-radius: ${(props) => props.theme.primaryBorderRadius};

`;

const StyledShortSign = styled.div`

  width: 100%;
  padding: 0.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border: 1px solid ${(props) => props.theme.buttonFontColor};
  border-radius: ${(props) => props.theme.primaryBorderRadius};

  opacity: 0.3;

`;

const StyledHint = styled.div`
  margin-top: 0.3rem;

  font-size: 0.8rem;
  font-weight: 300;
  text-align: center;
`;

const StyledVictimID = styled.div`
  font-size: 1.3rem;
  font-weight: 500;
`;

const StyledDataSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledActionSection = styled.div`
  margin-top: 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledExtrictionSection = styled.div`
  margin-top: 1rem;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledHandoverSection = styled.div`
  margin-top: 1rem;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledList = styled.ul`
  margin: 0.5rem 0 0 0;
  width: 100%;

  color: ${(props) => props.theme.primaryFontColor};
`;

const StyledListEntry = styled.li`
  margin: 0.1rem;
  padding: 0.2rem 0.6rem;  
  
  color: ${(props) => props.theme.buttonFontColor};
  background-color: ${(props) => props.theme.buttonColor};

  font-weight: 500;

  list-style: none;
  display: inline-block;

  border-radius: 5px;
`;

export default VictimMarker;

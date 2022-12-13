import { useEffect, useState } from "react";

import { Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";

import useRealm from "../../../hooks/useRealm";
import { realmFunctionNames } from "../../../data/realm/functions";

import useMission from "../../../hooks/useMission";
import useMissionMap from "../../../hooks/useMissionMap";

import { hazardTypes } from "../mapTypes";
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
import {
  DeleteHazardArgs,
  HazardSchema,
} from "../../../data/realm/schema/hazard";

import { useTranslation } from 'react-i18next';

const AvalanceIcon = new Icon({
  iconUrl: "/icons/assets/Hazards/Alert=Avalanche.svg",
  iconSize: [25, 25],
});

const BioIncidentIcon = new Icon({
  iconUrl: "/icons/assets/Hazards/Alert=Biological Incident.svg",
  iconSize: [25, 25],
});

const BombIcon = new Icon({
  iconUrl: "/icons/assets/Hazards/Alert=Bomb.svg",
  iconSize: [25, 25],
});

const ChemicalIcon = new Icon({
  iconUrl: "/icons/assets/Hazards/Alert=Chemical Incident.svg",
  iconSize: [25, 25],
});

const ContagiousIcon = new Icon({
  iconUrl: "/icons/assets/Hazards/Alert=Contagious Illness.svg",
  iconSize: [25, 25],
});

const EarthquakeIcon = new Icon({
  iconUrl: "/icons/assets/Hazards/Alert=Earthquake.svg",
  iconSize: [25, 25],
});

const ExplosionIcon = new Icon({
  iconUrl: "/icons/assets/Hazards/Alert=Explosion.svg",
  iconSize: [25, 25],
});

const FireIcon = new Icon({
  iconUrl: "/icons/assets/Hazards/Alert=Fire.svg",
  iconSize: [25, 25],
});

const FloodIcon = new Icon({
  iconUrl: "/icons/assets/Hazards/Alert=Flood.svg",
  iconSize: [25, 25],
});

const HurricaneIcon = new Icon({
  iconUrl: "/icons/assets/Hazards/Alert=Hurricane.svg",
  iconSize: [25, 25],
});

const MaritimeIcon = new Icon({
  iconUrl: "/icons/assets/Hazards/Alert=Maritime.svg",
  iconSize: [25, 25],
});

const NuclearIcon = new Icon({
  iconUrl: "/icons/assets/Hazards/Alert=Nuclear.svg",
  iconSize: [25, 25],
});

const PlaneIcon = new Icon({
  iconUrl: "/icons/assets/Hazards/Alert=Plane Crash.svg",
  iconSize: [25, 25],
});

const PowerIcon = new Icon({
  iconUrl: "/icons/assets/Hazards/Alert=Electricity Failure.svg",
  iconSize: [25, 25],
});

const RiotIcon = new Icon({
  iconUrl: "/icons/assets/Hazards/Alert=Riot.svg",
  iconSize: [25, 25],
});

const RockSlideIcon = new Icon({
  iconUrl: "/icons/assets/Hazards/Alert=Rock Slide.svg",
  iconSize: [25, 25],
});

const TrafficIcon = new Icon({
  iconUrl: "/icons/assets/Hazards/Alert=Traffic Accident.svg",
  iconSize: [25, 25],
});

const TrainIcon = new Icon({
  iconUrl: "/icons/assets/Hazards/Alert=Train.svg",
  iconSize: [25, 25],
});

const WaterIcon = new Icon({
  iconUrl: "/icons/assets/Hazards/Alert=Water Disruption.svg",
  iconSize: [25, 25],
});

type Props = {
  hazard: HazardSchema;
};

const HazardMarker = ({ hazard }: Props) => {
  const { realm } = useRealm();
  const { activeMission } = useMission();
  const { reRenderBoolean, setReRenderBoolean } = useMissionMap();

  const [Icon, setIcon] = useState<L.Icon>(AvalanceIcon);

  useEffect(() => {
    if (hazard.hazard_type === hazardTypes.AVALANCHE) {
      setIcon(AvalanceIcon);
    }

    if (hazard.hazard_type === hazardTypes.BIOLOGICALINCIDENT) {
      setIcon(BioIncidentIcon);
    }

    if (hazard.hazard_type === hazardTypes.BOMB) {
      setIcon(BombIcon);
    }

    if (hazard.hazard_type === hazardTypes.CHEMICALINCIDENT) {
      setIcon(ChemicalIcon);
    }

    if (hazard.hazard_type === hazardTypes.CONTAGIOUSILLNESS) {
      setIcon(ContagiousIcon);
    }

    if (hazard.hazard_type === hazardTypes.EARTHQUAKE) {
      setIcon(EarthquakeIcon);
    }

    if (hazard.hazard_type === hazardTypes.EXPLOSION) {
      setIcon(ExplosionIcon);
    }

    if (hazard.hazard_type === hazardTypes.FIRE) {
      setIcon(FireIcon);
    }

    if (hazard.hazard_type === hazardTypes.FLOOD) {
      setIcon(FloodIcon);
    }

    if (hazard.hazard_type === hazardTypes.HURRICANE) {
      setIcon(HurricaneIcon);
    }

    if (hazard.hazard_type === hazardTypes.MARITIME) {
      setIcon(MaritimeIcon);
    }

    if (hazard.hazard_type === hazardTypes.NUCLEAR) {
      setIcon(NuclearIcon);
    }

    if (hazard.hazard_type === hazardTypes.PLANECRASH) {
      setIcon(PlaneIcon);
    }

    if (hazard.hazard_type === hazardTypes.POWEROUTAGE) {
      setIcon(PowerIcon);
    }

    if (hazard.hazard_type === hazardTypes.RIOT) {
      setIcon(RiotIcon);
    }

    if (hazard.hazard_type === hazardTypes.ROCKSLIDE) {
      setIcon(RockSlideIcon);
    }

    if (hazard.hazard_type === hazardTypes.TRAFFICACCIDENT) {
      setIcon(TrafficIcon);
    }

    if (hazard.hazard_type === hazardTypes.TRAIN) {
      setIcon(TrainIcon);
    }

    if (hazard.hazard_type === hazardTypes.WATERDISRUPTION) {
      setIcon(WaterIcon);
    }
  }, [hazard]);

  const deleteHazard = async () => {
    if (activeMission) {
      const args: DeleteHazardArgs = {
        _id: hazard._id.toString(),
      };

      if (realm.currentUser) {
        // call the Realm function
        await realm.currentUser.callFunction(
          realmFunctionNames.deleteHazard,
          args
        );
      }

      setReRenderBoolean(!reRenderBoolean);
    }
  };

  const hazardTypeArray = hazard.hazard_type.split(" ");

  const hazardType = hazardTypeArray
    .map((word) => {
      return word[0].toUpperCase() + word.substring(1);
    })
    .join(" ");
  
  const { t } = useTranslation();

  return (
    <>
        <Marker
          position={[hazard.geoJSON.coordinates[0], hazard.geoJSON.coordinates[1]]}
          icon={Icon}
        >
          <Popup>
            <StyledPopupContentWrapper>
              <StyledPopupHeading>{hazardType}</StyledPopupHeading>


              <StyledSection>
                <StyledBoldText>Details: </StyledBoldText>
                <StyledText>{hazard.identifier}</StyledText>
              </StyledSection>

              <StyledDeactivateButton onClick={deleteHazard}>
              {t("Hazard.remove")}
              </StyledDeactivateButton>

              <StyledDate>{new Date(hazard.timestamp).toLocaleString()}</StyledDate>

            </StyledPopupContentWrapper>
          </Popup>
        </Marker>
      
    </>
    
  );
};

export default HazardMarker;

import { Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import { hazardTypes, Location } from "../mapTypes";
import { useEffect, useState } from "react";
import { BSON } from "realm-web";
import useRealm from "../../../hooks/useRealm";
import useMission from "../../../hooks/useMission";
import { DeleteHazardArgs } from "../../../data/realm/schema/hazard";
import useMissionMap from "../../../hooks/useMissionMap";
import { realmFunctionNames } from "../../../data/realm/functions";
import styled from "styled-components";

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
  id: BSON.ObjectId;
  coordinates: Location;
  type: string;
};

const HazardMarker = (props: Props) => {
  const { realm } = useRealm();
  const { activeMission } = useMission();
  const { reRenderBoolean, setReRenderBoolean } = useMissionMap();

  const [Icon, setIcon] = useState<L.Icon>(AvalanceIcon);

  useEffect(() => {
    if (props.type === hazardTypes.AVALANCHE) {
      setIcon(AvalanceIcon);
    }

    if (props.type === hazardTypes.BIOLOGICALINCIDENT) {
      setIcon(BioIncidentIcon);
    }

    if (props.type === hazardTypes.BOMB) {
      setIcon(BombIcon);
    }

    if (props.type === hazardTypes.CHEMICALINCIDENT) {
      setIcon(ChemicalIcon);
    }

    if (props.type === hazardTypes.CONTAGIOUSILLNESS) {
      setIcon(ContagiousIcon);
    }

    if (props.type === hazardTypes.EARTHQUAKE) {
      setIcon(EarthquakeIcon);
    }

    if (props.type === hazardTypes.EXPLOSION) {
      setIcon(ExplosionIcon);
    }

    if (props.type === hazardTypes.FIRE) {
      setIcon(FireIcon);
    }

    if (props.type === hazardTypes.FLOOD) {
      setIcon(FloodIcon);
    }

    if (props.type === hazardTypes.HURRICANE) {
      setIcon(HurricaneIcon);
    }

    if (props.type === hazardTypes.MARITIME) {
      setIcon(MaritimeIcon);
    }

    if (props.type === hazardTypes.NUCLEAR) {
      setIcon(NuclearIcon);
    }

    if (props.type === hazardTypes.PLANECRASH) {
      setIcon(PlaneIcon);
    }

    if (props.type === hazardTypes.POWEROUTAGE) {
      setIcon(PowerIcon);
    }

    if (props.type === hazardTypes.RIOT) {
      setIcon(RiotIcon);
    }

    if (props.type === hazardTypes.ROCKSLIDE) {
      setIcon(RockSlideIcon);
    }

    if (props.type === hazardTypes.TRAFFICACCIDENT) {
      setIcon(TrafficIcon);
    }

    if (props.type === hazardTypes.TRAIN) {
      setIcon(TrainIcon);
    }

    if (props.type === hazardTypes.WATERDISRUPTION) {
      setIcon(WaterIcon);
    }
  }, [props.type]);

  const deleteHazard = async () => {
    if (activeMission) {
      const args: DeleteHazardArgs = {
        _id: props.id.toString(),
      };

      if (realm.currentUser) {
        // call the Realm function
        const response = await realm.currentUser.callFunction(
          realmFunctionNames.deleteHazard,
          args
        );

        console.log(response);
      }

      setReRenderBoolean(!reRenderBoolean);
    }
  };

  return (
    <Marker position={[props.coordinates[0], props.coordinates[1]]} icon={Icon}>
      <Popup>
        <div onClick={deleteHazard}>Remove Hazard Marker</div>
      </Popup>
    </Marker>
  );
};

export default HazardMarker;

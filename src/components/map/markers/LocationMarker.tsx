import React, { useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvent,
  useMap,
  ZoomControl,
  LayersControl,
  LayerGroup,
} from "react-leaflet";
import L, { Icon, latLng, DivIcon } from "leaflet";

// svg imports
// import { ReactComponent as AvalanceIcon } from "../../../assets/Hazards/Alert=Avalanche.svg";
import { ReactComponent as BioIncidentIcon } from "../../../assets/Hazards/Alert=Biological Incident.svg";
import { ReactComponent as BombIcon } from "../../../assets/Hazards/Alert=Bomb.svg";
import { ReactComponent as ChemicalIcon } from "../../../assets/Hazards/Alert=Chemical Incident.svg";
import { ReactComponent as ContagiousIcon } from "../../../assets/Hazards/Alert=Contagious Illness.svg";
import { ReactComponent as EarthquakeIcon } from "../../../assets/Hazards/Alert=Earthquake.svg";
import { ReactComponent as ExplosionIcon } from "../../../assets/Hazards/Alert=Explosion.svg";
import { ReactComponent as FireIcon } from "../../../assets/Hazards/Alert=Fire.svg";
import { ReactComponent as FloodIcon } from "../../../assets/Hazards/Alert=Flood.svg";
import { ReactComponent as HurricaneIcon } from "../../../assets/Hazards/Alert=Hurricane.svg";
import { ReactComponent as MaritimeIcon } from "../../../assets/Hazards/Alert=Maritime.svg";
import { ReactComponent as NuclearIcon } from "../../../assets/Hazards/Alert=Nuclear.svg";
import { ReactComponent as PlaneIcon } from "../../../assets/Hazards/Alert=Plane Crash.svg";
import { ReactComponent as PowerIcon } from "../../../assets/Hazards/Alert=Electricity Failure.svg";
import { ReactComponent as RiotIcon } from "../../../assets/Hazards/Alert=Riot.svg";
import { ReactComponent as RockSlideIcon } from "../../../assets/Hazards/Alert=Rock Slide.svg";
import { ReactComponent as TrafficIcon } from "../../../assets/Hazards/Alert=Traffic Accident.svg";
import { ReactComponent as TrainIcon } from "../../../assets/Hazards/Alert=Train.svg";
import { ReactComponent as WaterIcon } from "../../../assets/Hazards/Alert=Water Disruption.svg";
import { hazardTypes, Location, locationTypes } from "../mapTypes";
import { prependListener } from "process";

const AvalanceIcon = new Icon({
  iconUrl: "/icons/assets/Mission/BW/Inactive=Car.svg",
  iconSize: [25, 25],
});

type Props = {
  coordinates: Location;
  type: locationTypes;
};

const LocationMarker = (props: Props) => {
  //   const [Icon, setIcon] = useState<L.Icon>();

  //   if (props.type === hazardTypes.AVALANCHE) {
  //     setIcon(AvalanceIcon);
  //   }

  return (
    <Marker
      position={[props.coordinates[0], props.coordinates[1]]}
      icon={AvalanceIcon}
    >
      {/* <Popup>{location.name}</Popup> */}
    </Marker>
  );
};

export default LocationMarker;

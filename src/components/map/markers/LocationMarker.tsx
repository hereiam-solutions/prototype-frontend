import React, { useEffect, useState } from "react";
import { Marker } from "react-leaflet";
import L, { Icon, latLng, DivIcon } from "leaflet";

// svg imports
// import { ReactComponent as AvalanceIcon } from "../../../assets/Hazards/Alert=Avalanche.svg";

import { hazardTypes, Location, locationTypes } from "../mapTypes";
import { prependListener } from "process";

const ApparrelIcon = new Icon({
  iconUrl: "/icons/assets/Locations/Color/Active=apparel.svg",
  iconSize: [25, 25],
});

const AssemblyIcon = new Icon({
  iconUrl: "/icons/assets/Locations/Color/Active=assemblypoint.svg",
  iconSize: [25, 25],
});

const BarrierIcon = new Icon({
  iconUrl: "/icons/assets/Locations/Color/Active=barrier.svg",
  iconSize: [25, 25],
});

// const BooIcon = new Icon({
//   iconUrl: "/icons/assets/Locations/Color/Active=boo.svg",
//   iconSize: [25, 25],
// });

const CareIcon = new Icon({
  iconUrl: "/icons/assets/Locations/Color/Active=care.svg",
  iconSize: [25, 25],
});

const CheckpointIcon = new Icon({
  iconUrl: "/icons/assets/Locations/Color/Active=checkpoint.svg",
  iconSize: [25, 25],
});

const CommandPostIcon = new Icon({
  iconUrl: "/icons/assets/Locations/Color/Active=commandpost.svg",
  iconSize: [25, 25],
});

// const EmtccIcon = new Icon({
//   iconUrl: "/icons/assets/Locations/Color/Active=emtcc.svg",
//   iconSize: [25, 25],
// });

const FoodIcon = new Icon({
  iconUrl: "/icons/assets/Locations/Color/Active=food.svg",
  iconSize: [25, 25],
});

const MedicalPostIcon = new Icon({
  iconUrl: "/icons/assets/Locations/Color/Active=medicalpost.svg",
  iconSize: [25, 25],
});

const MissingPersonsIcon = new Icon({
  iconUrl: "/icons/assets/Locations/Color/Active=missingpersons.svg",
  iconSize: [25, 25],
});

// const OsoccIcon = new Icon({
//   iconUrl: "/icons/assets/Locations/Color/Active=osocc.svg",
//   iconSize: [25, 25],
// });

const PowerIcon = new Icon({
  iconUrl: "/icons/assets/Locations/Color/Active=power.svg",
  iconSize: [25, 25],
});

const PrayerIcon = new Icon({
  iconUrl: "/icons/assets/Locations/Color/Active=prayerspace.svg",
  iconSize: [25, 25],
});

const PsychologyIcon = new Icon({
  iconUrl: "/icons/assets/Locations/Color/Active=psychologicalintervention.svg",
  iconSize: [25, 25],
});

const PublicIcon = new Icon({
  iconUrl: "/icons/assets/Locations/Color/Active=publicinformation.svg",
  iconSize: [25, 25],
});

// const RdcIcon = new Icon({
//   iconUrl: "/icons/assets/Locations/Color/Active=rdc.svg",
//   iconSize: [25, 25],
// });

const RegistrationIcon = new Icon({
  iconUrl: "/icons/assets/Locations/Color/Active=registration.svg",
  iconSize: [25, 25],
});

const SafetyIcon = new Icon({
  iconUrl: "/icons/assets/Locations/Color/Active=safety.svg",
  iconSize: [25, 25],
});

const ShelterIcon = new Icon({
  iconUrl: "/icons/assets/Locations/Color/Active=shelter.svg",
  iconSize: [25, 25],
});

const TransportIcon = new Icon({
  iconUrl: "/icons/assets/Locations/Color/Active=transport.svg",
  iconSize: [25, 25],
});

// const UccIcon = new Icon({
//   iconUrl: "/icons/assets/Locations/Color/Active=ucc.svg",
//   iconSize: [25, 25],
// });

// const UndacIcon = new Icon({
//   iconUrl: "/icons/assets/Locations/Color/Active=undac.svg",
//   iconSize: [25, 25],
// });

const WaterIcon = new Icon({
  iconUrl: "/icons/assets/Locations/Color/Active=water.svg",
  iconSize: [25, 25],
});

type Props = {
  coordinates: Location;
  type: locationTypes;
};

const LocationMarker = (props: Props) => {
  const [Icon, setIcon] = useState<L.Icon>(ApparrelIcon);

  useEffect(() => {
    if (props.type === locationTypes.APPAREL) {
      setIcon(ApparrelIcon);
    }

    if (props.type === locationTypes.ASSEMBLYPOINT) {
      setIcon(AssemblyIcon);
    }

    if (props.type === locationTypes.BARRIER) {
      setIcon(BarrierIcon);
    }

    // if (props.type === locationTypes.BOO) {
    //   setIcon(BooIcon);
    // }

    if (props.type === locationTypes.CARE) {
      setIcon(CareIcon);
    }

    if (props.type === locationTypes.CHECKPOINT) {
      setIcon(CheckpointIcon);
    }

    if (props.type === locationTypes.COMMANDPOST) {
      setIcon(CommandPostIcon);
    }

    // if (props.type === locationTypes.EMTCC) {
    //   setIcon(EmtccIcon);
    // }

    if (props.type === locationTypes.FOOD) {
      setIcon(FoodIcon);
    }

    if (props.type === locationTypes.MEDICALPOST) {
      setIcon(MedicalPostIcon);
    }

    if (props.type === locationTypes.MISSINGPERSONS) {
      setIcon(MissingPersonsIcon);
    }

    // if (props.type === locationTypes.OSOCC) {
    //   setIcon(OsoccIcon);
    // }

    if (props.type === locationTypes.POWER) {
      setIcon(PowerIcon);
    }

    if (props.type === locationTypes.PRAYERSPACE) {
      setIcon(PrayerIcon);
    }

    if (props.type === locationTypes.PSYCHOLOGICALINTERVENTION) {
      setIcon(PsychologyIcon);
    }

    if (props.type === locationTypes.PUBLICINFORMATION) {
      setIcon(PublicIcon);
    }

    // if (props.type === locationTypes.RDC) {
    //   setIcon(RdcIcon);
    // }

    if (props.type === locationTypes.REGISTRATION) {
      setIcon(RegistrationIcon);
    }

    if (props.type === locationTypes.SAFETY) {
      setIcon(SafetyIcon);
    }

    if (props.type === locationTypes.SHELTER) {
      setIcon(ShelterIcon);
    }

    if (props.type === locationTypes.TRANSPORT) {
      setIcon(TransportIcon);
    }

    // if (props.type === locationTypes.UCC) {
    //   setIcon(UccIcon);
    // }

    // if (props.type === locationTypes.UNDAC) {
    //   setIcon(UndacIcon);
    // }

    if (props.type === locationTypes.WATER) {
      setIcon(WaterIcon);
    }
  }, [props.type]);

  return (
    <Marker position={[props.coordinates[0], props.coordinates[1]]} icon={Icon}>
      {/* <Popup>{location.name}</Popup> */}
    </Marker>
  );
};

export default LocationMarker;

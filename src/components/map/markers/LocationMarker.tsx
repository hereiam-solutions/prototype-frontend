import React, { useEffect, useState } from "react";
import { Marker, Popup } from "react-leaflet";
import L, { Icon, latLng, DivIcon } from "leaflet";

// svg imports
// import { ReactComponent as AvalanceIcon } from "../../../assets/Hazards/Alert=Avalanche.svg";

import { hazardTypes, Location, locationTypes } from "../mapTypes";
import { prependListener } from "process";
import useRealm from "../../../hooks/useRealm";
import useMission from "../../../hooks/useMission";
import useMissionMap from "../../../hooks/useMissionMap";
import { UpdateLocationArgs } from "../../../data/realm/schema/location";
import { BSON } from "realm-web";
import { realmFunctionNames } from "../../../data/realm/functions";

const ApparrelIcon = new Icon({
  iconUrl: "/icons/assets/Locations/Color/Active=apparel.svg",
  iconSize: [25, 25],
});

const DeactivatedApparrelIcon = new Icon({
  className: "deactivated",
  iconUrl: "/icons/assets/Locations/Color/Active=apparel.svg",
  iconSize: [25, 25],
});

const AssemblyIcon = new Icon({
  iconUrl: "/icons/assets/Locations/Color/Active=assemblypoint.svg",
  iconSize: [25, 25],
});

const DeactivatedAssemblyIcon = new Icon({
  className: "deactivated",
  iconUrl: "/icons/assets/Locations/Color/Active=assemblypoint.svg",
  iconSize: [25, 25],
});

const BarrierIcon = new Icon({
  iconUrl: "/icons/assets/Locations/Color/Active=barrier.svg",
  iconSize: [25, 25],
});

const DeactivatedBarrierIcon = new Icon({
  className: "deactivated",
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

const DeactivatedCareIcon = new Icon({
  className: "deactivated",
  iconUrl: "/icons/assets/Locations/Color/Active=care.svg",
  iconSize: [25, 25],
});

const CheckpointIcon = new Icon({
  iconUrl: "/icons/assets/Locations/Color/Active=checkpoint.svg",
  iconSize: [25, 25],
});

const DeactivatedCheckpointIcon = new Icon({
  className: "deactivated",
  iconUrl: "/icons/assets/Locations/Color/Active=checkpoint.svg",
  iconSize: [25, 25],
});

const CommandPostIcon = new Icon({
  iconUrl: "/icons/assets/Locations/Color/Active=commandpost.svg",
  iconSize: [25, 25],
});

const DeactivatedCommandPostIcon = new Icon({
  className: "deactivated",
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

const DeactivatedFoodIcon = new Icon({
  className: "deactivated",
  iconUrl: "/icons/assets/Locations/Color/Active=food.svg",
  iconSize: [25, 25],
});

const MedicalPostIcon = new Icon({
  iconUrl: "/icons/assets/Locations/Color/Active=medicalpost.svg",
  iconSize: [25, 25],
});

const DeactivatedMedicalPostIcon = new Icon({
  className: "deactivated",
  iconUrl: "/icons/assets/Locations/Color/Active=medicalpost.svg",
  iconSize: [25, 25],
});

const MissingPersonsIcon = new Icon({
  iconUrl: "/icons/assets/Locations/Color/Active=missingpersons.svg",
  iconSize: [25, 25],
});

const DeactivatedMissingPersonsIcon = new Icon({
  className: "deactivated",
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

const DeactivatedPowerIcon = new Icon({
  className: "deactivated",
  iconUrl: "/icons/assets/Locations/Color/Active=power.svg",
  iconSize: [25, 25],
});

const PrayerIcon = new Icon({
  iconUrl: "/icons/assets/Locations/Color/Active=prayerspace.svg",
  iconSize: [25, 25],
});

const DeactivatedPrayerIcon = new Icon({
  className: "deactivated",
  iconUrl: "/icons/assets/Locations/Color/Active=prayerspace.svg",
  iconSize: [25, 25],
});

const PsychologyIcon = new Icon({
  iconUrl: "/icons/assets/Locations/Color/Active=psychologicalintervention.svg",
  iconSize: [25, 25],
});

const DeactivatedPsychologyIcon = new Icon({
  className: "deactivated",
  iconUrl: "/icons/assets/Locations/Color/Active=psychologicalintervention.svg",
  iconSize: [25, 25],
});

const PublicIcon = new Icon({
  iconUrl: "/icons/assets/Locations/Color/Active=publicinformation.svg",
  iconSize: [25, 25],
});

const DeactivatedPublicIcon = new Icon({
  className: "deactivated",
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

const DeactivatedRegistrationIcon = new Icon({
  className: "deactivated",
  iconUrl: "/icons/assets/Locations/Color/Active=registration.svg",
  iconSize: [25, 25],
});

const SafetyIcon = new Icon({
  iconUrl: "/icons/assets/Locations/Color/Active=safety.svg",
  iconSize: [25, 25],
});

const DeactivatedSafetyIcon = new Icon({
  className: "deactivated",
  iconUrl: "/icons/assets/Locations/Color/Active=safety.svg",
  iconSize: [25, 25],
});

const ShelterIcon = new Icon({
  iconUrl: "/icons/assets/Locations/Color/Active=shelter.svg",
  iconSize: [25, 25],
});

const DeactivatedShelterIcon = new Icon({
  className: "deactivated",
  iconUrl: "/icons/assets/Locations/Color/Active=shelter.svg",
  iconSize: [25, 25],
});

const TransportIcon = new Icon({
  iconUrl: "/icons/assets/Locations/Color/Active=transport.svg",
  iconSize: [25, 25],
});

const DeactivatedTransportIcon = new Icon({
  className: "deactivated",
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

const DeactivatedWaterIcon = new Icon({
  className: "deactivated",
  iconUrl: "/icons/assets/Locations/Color/Active=water.svg",
  iconSize: [25, 25],
});

type Props = {
  id: BSON.ObjectId;
  coordinates: Location;
  type: locationTypes;
  status: "active" | "suspended" | "inactive";
};

const LocationMarker = (props: Props) => {
  const { realm } = useRealm();
  const { activeMission } = useMission();
  const { reRenderBoolean, setReRenderBoolean } = useMissionMap();

  const [Icon, setIcon] = useState<L.Icon>(ApparrelIcon);
  const [isActive, setIsActive] = useState<boolean>(props.status === "active");

  useEffect(() => {
    if (props.type === locationTypes.APPAREL) {
      isActive ? setIcon(ApparrelIcon) : setIcon(DeactivatedApparrelIcon);
    }

    if (props.type === locationTypes.ASSEMBLYPOINT) {
      isActive ? setIcon(AssemblyIcon) : setIcon(DeactivatedAssemblyIcon);
    }

    if (props.type === locationTypes.BARRIER) {
      isActive ? setIcon(BarrierIcon) : setIcon(DeactivatedBarrierIcon);
    }

    // if (props.type === locationTypes.BOO) {
    //   setIcon(BooIcon);
    // }

    if (props.type === locationTypes.CARE) {
      isActive ? setIcon(CareIcon) : setIcon(DeactivatedCareIcon);
    }

    if (props.type === locationTypes.CHECKPOINT) {
      isActive ? setIcon(CheckpointIcon) : setIcon(DeactivatedCheckpointIcon);
    }

    if (props.type === locationTypes.COMMANDPOST) {
      isActive ? setIcon(CommandPostIcon) : setIcon(DeactivatedCommandPostIcon);
    }

    // if (props.type === locationTypes.EMTCC) {
    //   setIcon(EmtccIcon);
    // }

    if (props.type === locationTypes.FOOD) {
      isActive ? setIcon(FoodIcon) : setIcon(DeactivatedFoodIcon);
    }

    if (props.type === locationTypes.MEDICALPOST) {
      isActive ? setIcon(MedicalPostIcon) : setIcon(DeactivatedMedicalPostIcon);
    }

    if (props.type === locationTypes.MISSINGPERSONS) {
      isActive
        ? setIcon(MissingPersonsIcon)
        : setIcon(DeactivatedMissingPersonsIcon);
    }

    // if (props.type === locationTypes.OSOCC) {
    //   setIcon(OsoccIcon);
    // }

    if (props.type === locationTypes.POWER) {
      isActive ? setIcon(PowerIcon) : setIcon(DeactivatedPowerIcon);
    }

    if (props.type === locationTypes.PRAYERSPACE) {
      isActive ? setIcon(PrayerIcon) : setIcon(DeactivatedPrayerIcon);
    }

    if (props.type === locationTypes.PSYCHOLOGICALINTERVENTION) {
      isActive ? setIcon(PsychologyIcon) : setIcon(DeactivatedPsychologyIcon);
    }

    if (props.type === locationTypes.PUBLICINFORMATION) {
      isActive ? setIcon(PublicIcon) : setIcon(DeactivatedPublicIcon);
    }

    // if (props.type === locationTypes.RDC) {
    //   setIcon(RdcIcon);
    // }

    if (props.type === locationTypes.REGISTRATION) {
      isActive
        ? setIcon(RegistrationIcon)
        : setIcon(DeactivatedRegistrationIcon);
    }

    if (props.type === locationTypes.SAFETY) {
      isActive ? setIcon(SafetyIcon) : setIcon(DeactivatedSafetyIcon);
    }

    if (props.type === locationTypes.SHELTER) {
      isActive ? setIcon(ShelterIcon) : setIcon(DeactivatedShelterIcon);
    }

    if (props.type === locationTypes.TRANSPORT) {
      isActive ? setIcon(TransportIcon) : setIcon(DeactivatedTransportIcon);
    }

    // if (props.type === locationTypes.UCC) {
    //   setIcon(UccIcon);
    // }

    // if (props.type === locationTypes.UNDAC) {
    //   setIcon(UndacIcon);
    // }

    if (props.type === locationTypes.WATER) {
      isActive ? setIcon(WaterIcon) : setIcon(DeactivatedWaterIcon);
    }
  }, [props.type, props.status, isActive]);

  const changeLocationStatus = async () => {
    if (activeMission) {
      const statusArg = isActive ? "inactive" : "active";

      const args: UpdateLocationArgs = {
        _id: props.id.toString(),
        status: statusArg,
      };

      if (realm.currentUser) {
        // call the Realm function
        const response = await realm.currentUser.callFunction(
          realmFunctionNames.updateLocation,
          args
        );

        if (response === "success") {
          setIsActive(!isActive);
        }
        console.log(response);
      }

      //   setIcon(AvalanceIcon);
      setReRenderBoolean(!reRenderBoolean);
    }
  };

  return (
    <Marker position={[props.coordinates[0], props.coordinates[1]]} icon={Icon}>
      <Popup>
        <div onClick={changeLocationStatus}>
          {isActive ? "deactivate Location" : "activate Location"}
        </div>
      </Popup>
    </Marker>
  );
};

export default LocationMarker;

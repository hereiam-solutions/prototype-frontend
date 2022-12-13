import React, { useEffect, useState } from "react";

import { Marker, Popup } from "react-leaflet";
import L, { Icon } from "leaflet";

import useRealm from "../../../hooks/useRealm";
import { realmFunctionNames } from "../../../data/realm/functions";

import useMission from "../../../hooks/useMission";
import useMissionMap from "../../../hooks/useMissionMap";

import { locationTypes } from "../mapTypes";
import {
  DeleteLocationArgs,
  LocationSchema,
  UpdateLocationArgs,
} from "../../../data/realm/schema/location";

// styling imports
import {
  StyledPopupContentWrapper,
  StyledPopupHeading,
  StyledDate,
  StyledSection,
  StyledBoldText,
  StyledText,
  StyledDeactivateButton,
  StyledActivateButton,
} from "./styles/markerStyles";

import { useTranslation } from 'react-i18next';

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
  location: LocationSchema;
  //   id: BSON.ObjectId;
  //   coordinates: Location;
  //   type: locationTypes;
  //   status: "active" | "suspended" | "inactive";
};

const LocationMarker = ({ location }: Props) => {
  const { realm } = useRealm();
  const { activeMission } = useMission();
  const { reRenderBoolean, setReRenderBoolean } = useMissionMap();

  const [Icon, setIcon] = useState<L.Icon>(ApparrelIcon);
  const [isActive, setIsActive] = useState<boolean>(
    location.status === "active"
  );

  useEffect(() => {
    if (location.type === locationTypes.APPAREL) {
      isActive ? setIcon(ApparrelIcon) : setIcon(DeactivatedApparrelIcon);
    }

    if (location.type === locationTypes.ASSEMBLYPOINT) {
      isActive ? setIcon(AssemblyIcon) : setIcon(DeactivatedAssemblyIcon);
    }

    if (location.type === locationTypes.BARRIER) {
      isActive ? setIcon(BarrierIcon) : setIcon(DeactivatedBarrierIcon);
    }

    if (location.type === locationTypes.CARE) {
      isActive ? setIcon(CareIcon) : setIcon(DeactivatedCareIcon);
    }

    if (location.type === locationTypes.CHECKPOINT) {
      isActive ? setIcon(CheckpointIcon) : setIcon(DeactivatedCheckpointIcon);
    }

    if (location.type === locationTypes.COMMANDPOST) {
      isActive ? setIcon(CommandPostIcon) : setIcon(DeactivatedCommandPostIcon);
    }

    if (location.type === locationTypes.FOOD) {
      isActive ? setIcon(FoodIcon) : setIcon(DeactivatedFoodIcon);
    }

    if (location.type === locationTypes.MEDICALPOST) {
      isActive ? setIcon(MedicalPostIcon) : setIcon(DeactivatedMedicalPostIcon);
    }

    if (location.type === locationTypes.MISSINGPERSONS) {
      isActive
        ? setIcon(MissingPersonsIcon)
        : setIcon(DeactivatedMissingPersonsIcon);
    }

    if (location.type === locationTypes.POWER) {
      isActive ? setIcon(PowerIcon) : setIcon(DeactivatedPowerIcon);
    }

    if (location.type === locationTypes.PRAYERSPACE) {
      isActive ? setIcon(PrayerIcon) : setIcon(DeactivatedPrayerIcon);
    }

    if (location.type === locationTypes.PSYCHOLOGICALINTERVENTION) {
      isActive ? setIcon(PsychologyIcon) : setIcon(DeactivatedPsychologyIcon);
    }

    if (location.type === locationTypes.PUBLICINFORMATION) {
      isActive ? setIcon(PublicIcon) : setIcon(DeactivatedPublicIcon);
    }

    if (location.type === locationTypes.REGISTRATION) {
      isActive
        ? setIcon(RegistrationIcon)
        : setIcon(DeactivatedRegistrationIcon);
    }

    if (location.type === locationTypes.SAFETY) {
      isActive ? setIcon(SafetyIcon) : setIcon(DeactivatedSafetyIcon);
    }

    if (location.type === locationTypes.SHELTER) {
      isActive ? setIcon(ShelterIcon) : setIcon(DeactivatedShelterIcon);
    }

    if (location.type === locationTypes.TRANSPORT) {
      isActive ? setIcon(TransportIcon) : setIcon(DeactivatedTransportIcon);
    }

    if (location.type === locationTypes.WATER) {
      isActive ? setIcon(WaterIcon) : setIcon(DeactivatedWaterIcon);
    }
  }, [location, isActive]);

  const changeLocationStatus = async () => {
    if (activeMission) {
      const statusArg = isActive ? "inactive" : "active";

      const args: UpdateLocationArgs = {
        _id: location._id.toString(),
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
      }

      setReRenderBoolean(!reRenderBoolean);
    }
  };

  const deleteLocation = async () => {
    if (activeMission) {
      const args: DeleteLocationArgs = {
        _id: location._id.toString(),
      };

      if (realm.currentUser) {
        // call the Realm function
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const response = await realm.currentUser.callFunction(
          realmFunctionNames.deleteLocation,
          args
        );
      }

      setReRenderBoolean(!reRenderBoolean);
    }
  };

  const locationTypeArray = location.type.split(" ");

  const locationType = locationTypeArray
    .map((word) => {
      return word[0].toUpperCase() + word.substring(1);
    })
    .join(" ");
  
  const { t } = useTranslation();

  return (
    <Marker
      position={[
        location.geoJSON.coordinates[0],
        location.geoJSON.coordinates[1],
      ]}
      icon={Icon}
    >
      <Popup>
        <StyledPopupContentWrapper>
          <StyledPopupHeading>{locationType}</StyledPopupHeading>

          <StyledSection>
            <StyledBoldText>Details: </StyledBoldText>
            <StyledText>{location.name}</StyledText>
          </StyledSection>

          {isActive ? (
            <StyledDeactivateButton onClick={changeLocationStatus}>
              {t("Location.deactivate")}
            </StyledDeactivateButton>
          ) : (
            <StyledActivateButton onClick={changeLocationStatus}>
                {t("Location.activate")}
            </StyledActivateButton>
          )}

          <StyledDeactivateButton onClick={deleteLocation}>
            {t("Location.remove")}
          </StyledDeactivateButton>

          <StyledDate>
            {new Date(location.timestamp).toLocaleString()}
          </StyledDate>

        </StyledPopupContentWrapper>
      </Popup>
    </Marker>
  );
};

export default LocationMarker;

import { useEffect, useState } from "react";
import styled from "styled-components";
import useNavigation from "../../../../../hooks/useNavigation";

// type imports
import { hazardTypes, locationTypes } from "../../../../map/mapTypes";
import { realmFunctionNames } from "../../../../../data/realm/functions";
import { CreateHazardArgs } from "../../../../../data/realm/schema/hazard";
import { BSON } from "realm-web";
import { CreateLocationArgs } from "../../../../../data/realm/schema/location";

// hook imports
import useCreateMarker from "../../../../../hooks/useCreateMarker";
import useMission from "../../../../../hooks/useMission";
import useRealm from "../../../../../hooks/useRealm";
import useRealmFunction from "../../../../../hooks/useRealmFunction";

// svg imports
import { ReactComponent as ApparrelIcon } from "../../../../../assets/Locations/Color/Active=apparel.svg";
import { ReactComponent as AssemblyIcon } from "../../../../../assets/Locations/Color/Active=assemblypoint.svg";
import { ReactComponent as BarrierIcon } from "../../../../../assets/Locations/Color/Active=barrier.svg";
import { ReactComponent as BooIcon } from "../../../../../assets/Locations/Color/Active=boo.svg";
import { ReactComponent as CareIcon } from "../../../../../assets/Locations/Color/Active=care.svg";
import { ReactComponent as CheckpointIcon } from "../../../../../assets/Locations/Color/Active=checkpoint.svg";
import { ReactComponent as CommandPostIcon } from "../../../../../assets/Locations/Color/Active=commandpost.svg";
import { ReactComponent as EmtccIcon } from "../../../../../assets/Locations/Color/Active=emtcc.svg";
import { ReactComponent as FoodIcon } from "../../../../../assets/Locations/Color/Active=food.svg";
import { ReactComponent as MedicalPostIcon } from "../../../../../assets/Locations/Color/Active=medicalpost.svg";
import { ReactComponent as MissingPersonsIcon } from "../../../../../assets/Locations/Color/Active=missingpersons.svg";
import { ReactComponent as OsoccIcon } from "../../../../../assets/Locations/Color/Active=osocc.svg";
import { ReactComponent as PowerIcon } from "../../../../../assets/Locations/Color/Active=power.svg";
import { ReactComponent as PrayerIcon } from "../../../../../assets/Locations/Color/Active=prayerspace.svg";
import { ReactComponent as PsychologyIcon } from "../../../../../assets/Locations/Color/Active=psychologicalintervention.svg";
import { ReactComponent as PublicIcon } from "../../../../../assets/Locations/Color/Active=publicinformation.svg";
import { ReactComponent as RdcIcon } from "../../../../../assets/Locations/Color/Active=rdc.svg";
import { ReactComponent as RegistrationIcon } from "../../../../../assets/Locations/Color/Active=registration.svg";
import { ReactComponent as SafetyIcon } from "../../../../../assets/Locations/Color/Active=safety.svg";
import { ReactComponent as ShelterIcon } from "../../../../../assets/Locations/Color/Active=shelter.svg";
import { ReactComponent as TransportIcon } from "../../../../../assets/Locations/Color/Active=transport.svg";
import { ReactComponent as UccIcon } from "../../../../../assets/Locations/Color/Active=ucc.svg";
import { ReactComponent as UndacIcon } from "../../../../../assets/Locations/Color/Active=undac.svg";
import { ReactComponent as WaterIcon } from "../../../../../assets/Locations/Color/Active=water.svg";
import useMissionMap from "../../../../../hooks/useMissionMap";

const CreateLocationMarker = () => {
  const { realm } = useRealm();
  const { createMarkerLocation: location } = useCreateMarker();
  const { activeMission } = useMission();
  const { setIsDrawOpen } = useNavigation();
  const { reRenderBoolean, setReRenderBoolean } = useMissionMap();

  const [loading, setLoading] = useState<boolean>(false);

  const [selectedType, setSelectedType] = useState<locationTypes>(
    locationTypes.APPAREL
  );

  const [upperCaseSelectedType, setUpperCaseSelectedType] =
    useState<string>("Location");

  const [nameValue, setNameValue] = useState<string>("");

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNameValue(event.currentTarget.value);
  };

  const handleSubmit = async () => {
    try {
      if (activeMission) {
        const args: CreateLocationArgs = {
          status: "active",
          name: nameValue,
          mission: activeMission._id.toString(),
          type: selectedType,
          geoJSON: { type: "Point", coordinates: location },
        };

        setLoading(true);

        if (realm.currentUser) {
          // call the Realm function
          await realm.currentUser.callFunction(
            realmFunctionNames.createLocation,
            args
          );
        }

        setLoading(false);
        setReRenderBoolean(!reRenderBoolean);
        setIsDrawOpen(false);
      }
    } catch (e) {
      console.log(
        "There has been an error while calling the Realm custom function called:",
        realmFunctionNames.createLocation,
        "Error:",
        e
      );
    }
  };

  useEffect(() => {
    const locationTypeArray = selectedType.split(" ");

    const locationType = locationTypeArray
      .map((word) => {
        return word[0].toUpperCase() + word.substring(1);
      })
      .join(" ");

    setUpperCaseSelectedType(locationType);
  }, [selectedType]);

  return (
    <StyledDrawWrapper>
      <StyledDrawHeader>
        <StyledHeading>{upperCaseSelectedType}</StyledHeading>
      </StyledDrawHeader>

      <StyledContentWrapper>
        <StyledSectionWrapper>
          <StyledSecondaryHeading>Location type</StyledSecondaryHeading>

          <StyledIconRow>
            <ApparrelIcon
              className={`icon ${
                selectedType === locationTypes.APPAREL ? "selected" : ""
              }`}
              onClick={() => {
                setSelectedType(locationTypes.APPAREL);
              }}
            />

            <AssemblyIcon
              className={`icon ${
                selectedType === locationTypes.ASSEMBLYPOINT ? "selected" : ""
              }`}
              onClick={() => {
                setSelectedType(locationTypes.ASSEMBLYPOINT);
              }}
            />

            <BarrierIcon
              className={`icon ${
                selectedType === locationTypes.BARRIER ? "selected" : ""
              }`}
              onClick={() => {
                setSelectedType(locationTypes.BARRIER);
              }}
            />
            {/* 
        <BooIcon
          className={`icon ${
            selectedType === locationTypes.BOO ? "selected" : ""
          }`}
          onClick={() => {
            setSelectedType(locationTypes.BOO);
          }}
        /> */}

            <CareIcon
              className={`icon ${
                selectedType === locationTypes.CARE ? "selected" : ""
              }`}
              onClick={() => {
                setSelectedType(locationTypes.CARE);
              }}
            />

            <CheckpointIcon
              className={`icon ${
                selectedType === locationTypes.CHECKPOINT ? "selected" : ""
              }`}
              onClick={() => {
                setSelectedType(locationTypes.CHECKPOINT);
              }}
            />

            <CommandPostIcon
              className={`icon ${
                selectedType === locationTypes.COMMANDPOST ? "selected" : ""
              }`}
              onClick={() => {
                setSelectedType(locationTypes.COMMANDPOST);
              }}
            />

            {/* <EmtccIcon
          className={`icon ${
            selectedType === locationTypes.EMTCC ? "selected" : ""
          }`}
          onClick={() => {
            setSelectedType(locationTypes.EMTCC);
          }}
        /> */}

            <FoodIcon
              className={`icon ${
                selectedType === locationTypes.FOOD ? "selected" : ""
              }`}
              onClick={() => {
                setSelectedType(locationTypes.FOOD);
              }}
            />

            <MedicalPostIcon
              className={`icon ${
                selectedType === locationTypes.MEDICALPOST ? "selected" : ""
              }`}
              onClick={() => {
                setSelectedType(locationTypes.MEDICALPOST);
              }}
            />

            <MissingPersonsIcon
              className={`icon ${
                selectedType === locationTypes.MISSINGPERSONS ? "selected" : ""
              }`}
              onClick={() => {
                setSelectedType(locationTypes.MISSINGPERSONS);
              }}
            />

            {/* <OsoccIcon
          className={`icon ${
            selectedType === locationTypes.OSOCC ? "selected" : ""
          }`}
          onClick={() => {
            setSelectedType(locationTypes.OSOCC);
          }}
        /> */}

            <PowerIcon
              className={`icon ${
                selectedType === locationTypes.POWER ? "selected" : ""
              }`}
              onClick={() => {
                setSelectedType(locationTypes.POWER);
              }}
            />

            <PrayerIcon
              className={`icon ${
                selectedType === locationTypes.PRAYERSPACE ? "selected" : ""
              }`}
              onClick={() => {
                setSelectedType(locationTypes.PRAYERSPACE);
              }}
            />

            <PsychologyIcon
              className={`icon ${
                selectedType === locationTypes.PSYCHOLOGICALINTERVENTION
                  ? "selected"
                  : ""
              }`}
              onClick={() => {
                setSelectedType(locationTypes.PSYCHOLOGICALINTERVENTION);
              }}
            />

            <PublicIcon
              className={`icon ${
                selectedType === locationTypes.PUBLICINFORMATION
                  ? "selected"
                  : ""
              }`}
              onClick={() => {
                setSelectedType(locationTypes.PUBLICINFORMATION);
              }}
            />

            {/* <RdcIcon
          className={`icon ${
            selectedType === locationTypes.RDC ? "selected" : ""
          }`}
          onClick={() => {
            setSelectedType(locationTypes.RDC);
          }}
        /> */}

            <RegistrationIcon
              className={`icon ${
                selectedType === locationTypes.REGISTRATION ? "selected" : ""
              }`}
              onClick={() => {
                setSelectedType(locationTypes.REGISTRATION);
              }}
            />

            <SafetyIcon
              className={`icon ${
                selectedType === locationTypes.SAFETY ? "selected" : ""
              }`}
              onClick={() => {
                setSelectedType(locationTypes.SAFETY);
              }}
            />

            <ShelterIcon
              className={`icon ${
                selectedType === locationTypes.SHELTER ? "selected" : ""
              }`}
              onClick={() => {
                setSelectedType(locationTypes.SHELTER);
              }}
            />

            <TransportIcon
              className={`icon ${
                selectedType === locationTypes.TRANSPORT ? "selected" : ""
              }`}
              onClick={() => {
                setSelectedType(locationTypes.TRANSPORT);
              }}
            />

            {/* <UccIcon
          className={`icon ${
            selectedType === locationTypes.UCC ? "selected" : ""
          }`}
          onClick={() => {
            setSelectedType(locationTypes.UCC);
          }}
        /> */}

            {/* <UndacIcon
          className={`icon ${
            selectedType === locationTypes.UNDAC ? "selected" : ""
          }`}
          onClick={() => {
            setSelectedType(locationTypes.UNDAC);
          }}
        /> */}

            <WaterIcon
              className={`icon ${
                selectedType === locationTypes.WATER ? "selected" : ""
              }`}
              onClick={() => {
                setSelectedType(locationTypes.WATER);
              }}
            />
          </StyledIconRow>
        </StyledSectionWrapper>

        <StyledSectionWrapper>
          <StyledSecondaryHeading>Description</StyledSecondaryHeading>

          <StyledInput
            placeholder="Set the location's description..."
            onChange={handleNameChange}
            type="text"
            value={nameValue}
          />
        </StyledSectionWrapper>

        <StyledButton onClick={handleSubmit}>
          {loading ? "loading..." : "Submit Location"}
        </StyledButton>
      </StyledContentWrapper>
    </StyledDrawWrapper>
  );
};

const StyledDrawWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;

  background: ${(props) => props.theme.primaryBackgroundColor};
`;

const StyledDrawHeader = styled.div`
  padding-bottom: 1rem;
  margin-bottom: 0.8rem;

  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledHeading = styled.p`
  font-weight: 500;
  font-size: 1.5rem;
  color: ${(props) => props.theme.primaryFontColor};
`;

const StyledContentWrapper = styled.div`
  /* padding-top: 8rem; */
  width: 100%;
  background: ${(props) => props.theme.primaryBackgroundColor};

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2.5rem;

  overflow-y: scroll;
`;

const StyledSectionWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
`;

const StyledSecondaryHeading = styled.p`
  font-weight: 500;
  font-size: 1.4rem;
  color: ${(props) => props.theme.primaryFontColor};
`;

// styled components for this component only
const StyledInput = styled.input`
  background-color: ${(props) => props.theme.primaryBackgroundColor};
  border: 1px solid ${(props) => props.theme.formFieldColor};
  border-radius: ${(props) => props.theme.inputBorderRadius};
  color: ${(props) => props.theme.formFieldColor};
  font-size: 1rem;
  line-height: 1.5rem;
  font-style: normal;
  font-weight: 500;
  width: 100%;
  /* margin-top: 0.6rem; */
  padding: 0.75rem;
`;

const StyledButton = styled.button`
  width: 60%;
  height: 3rem;

  margin-top: 0.5rem;

  font-weight: 700;
  text-align: center;

  align-self: center;

  color: ${(props) => props.theme.buttonFontColor};
  background-color: ${(props) => props.theme.buttonColor};

  border: 1px solid ${(props) => props.theme.formSubmitBorderColor};
  border-radius: ${(props) => props.theme.inputBorderRadius};
`;

const StyledIconRow = styled.div`
  height: 60px;
  width: 100%;

  gap: 1rem;

  overflow: auto;
  white-space: nowrap;

  .icon {
    height: 50px;
    width: 50px;
  }

  .selected {
    background-color: ${(props) => props.theme.buttonColor};
    border-radius: 50%;
  }
`;

export default CreateLocationMarker;

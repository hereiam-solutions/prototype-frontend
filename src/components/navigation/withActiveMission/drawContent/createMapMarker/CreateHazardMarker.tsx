import { useEffect, useState } from "react";
import styled from "styled-components";
import useNavigation from "../../../../../hooks/useNavigation";

// type imports
import { hazardTypes } from "../../../../map/mapTypes";
import { realmFunctionNames } from "../../../../../data/realm/functions";
import { CreateHazardArgs } from "../../../../../data/realm/schema/hazard";

// hook imports
import useCreateMarker from "../../../../../hooks/useCreateMarker";
import useMission from "../../../../../hooks/useMission";
import useRealm from "../../../../../hooks/useRealm";
import useMissionMap from "../../../../../hooks/useMissionMap";

// svg imports
import { ReactComponent as AvalancheIcon } from "../../../../../assets/Hazards/Alert=Avalanche.svg";
import { ReactComponent as BioIncidentIcon } from "../../../../../assets/Hazards/Alert=Biological Incident.svg";
import { ReactComponent as BombIcon } from "../../../../../assets/Hazards/Alert=Bomb.svg";
import { ReactComponent as ChemicalIcon } from "../../../../../assets/Hazards/Alert=Chemical Incident.svg";
import { ReactComponent as ContagiousIcon } from "../../../../../assets/Hazards/Alert=Contagious Illness.svg";
import { ReactComponent as EarthquakeIcon } from "../../../../../assets/Hazards/Alert=Earthquake.svg";
import { ReactComponent as ExplosionIcon } from "../../../../../assets/Hazards/Alert=Explosion.svg";
import { ReactComponent as FireIcon } from "../../../../../assets/Hazards/Alert=Fire.svg";
import { ReactComponent as FloodIcon } from "../../../../../assets/Hazards/Alert=Flood.svg";
import { ReactComponent as HurricaneIcon } from "../../../../../assets/Hazards/Alert=Hurricane.svg";
import { ReactComponent as MaritimeIcon } from "../../../../../assets/Hazards/Alert=Maritime.svg";
import { ReactComponent as NuclearIcon } from "../../../../../assets/Hazards/Alert=Nuclear.svg";
import { ReactComponent as PlaneIcon } from "../../../../../assets/Hazards/Alert=Plane Crash.svg";
import { ReactComponent as PowerIcon } from "../../../../../assets/Hazards/Alert=Electricity Failure.svg";
import { ReactComponent as RiotIcon } from "../../../../../assets/Hazards/Alert=Riot.svg";
import { ReactComponent as RockSlideIcon } from "../../../../../assets/Hazards/Alert=Rock Slide.svg";
import { ReactComponent as TrafficIcon } from "../../../../../assets/Hazards/Alert=Traffic Accident.svg";
import { ReactComponent as TrainIcon } from "../../../../../assets/Hazards/Alert=Train.svg";
import { ReactComponent as WaterIcon } from "../../../../../assets/Hazards/Alert=Water Disruption.svg";

const CreateHazardMarker = () => {
  const { realm } = useRealm();
  const { createMarkerLocation: location } = useCreateMarker();
  const { activeMission } = useMission();
  const { setIsDrawOpen } = useNavigation();
  const { reRenderBoolean, setReRenderBoolean } = useMissionMap();

  const [loading, setLoading] = useState<boolean>(false);

  const [selectedType, setSelectedType] = useState<hazardTypes>(
    hazardTypes.AVALANCHE
  );

  const [upperCaseSelectedType, setUpperCaseSelectedType] =
    useState<string>("Hazard");

  const [identifierValue, setIdentifierValue] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIdentifierValue(event.currentTarget.value);
  };

  const handleSubmit = async () => {
    try {
      if (activeMission) {
        const args: CreateHazardArgs = {
          identifier: identifierValue,
          mission: activeMission._id.toString(),
          hazard_type: selectedType,
          status: "active",
          geoJSON: { type: "Point", coordinates: location },
        };

        setLoading(true);

        if (realm.currentUser) {
          // call the Realm function
          await realm.currentUser.callFunction(
            realmFunctionNames.createHazard,
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
        realmFunctionNames.createHazard,
        "Error:",
        e
      );
    }
  };

  useEffect(() => {
    const hazardTypeArray = selectedType.split(" ");

    const hazardType = hazardTypeArray
      .map((word) => {
        return word[0].toUpperCase() + word.substring(1);
      })
      .join(" ");

    setUpperCaseSelectedType(hazardType);
  }, [selectedType]);

  return (
    <StyledDrawWrapper>
      <StyledDrawHeader>
        <StyledHeading>Mark Hazard</StyledHeading>
      </StyledDrawHeader>

      <StyledContentWrapper>
        <StyledSectionWrapper>
          <StyledSecondaryHeading>Hazard type</StyledSecondaryHeading>

          <StyledSelectedType>{upperCaseSelectedType}</StyledSelectedType>
          <StyledIconRow>
            <AvalancheIcon
              className={`icon ${
                selectedType === hazardTypes.AVALANCHE ? "selected" : ""
              }`}
              onClick={() => {
                setSelectedType(hazardTypes.AVALANCHE);
              }}
            />

            <BioIncidentIcon
              className={`icon ${
                selectedType === hazardTypes.BIOLOGICALINCIDENT
                  ? "selected"
                  : ""
              }`}
              onClick={() => setSelectedType(hazardTypes.BIOLOGICALINCIDENT)}
            />

            <BombIcon
              className={`icon ${
                selectedType === hazardTypes.BOMB ? "selected" : ""
              }`}
              onClick={() => setSelectedType(hazardTypes.BOMB)}
            />

            <ChemicalIcon
              className={`icon ${
                selectedType === hazardTypes.CHEMICALINCIDENT ? "selected" : ""
              }`}
              onClick={() => setSelectedType(hazardTypes.CHEMICALINCIDENT)}
            />

            <ContagiousIcon
              className={`icon ${
                selectedType === hazardTypes.CONTAGIOUSILLNESS ? "selected" : ""
              }`}
              onClick={() => setSelectedType(hazardTypes.CONTAGIOUSILLNESS)}
            />

            <EarthquakeIcon
              className={`icon ${
                selectedType === hazardTypes.EARTHQUAKE ? "selected" : ""
              }`}
              onClick={() => setSelectedType(hazardTypes.EARTHQUAKE)}
            />

            <ExplosionIcon
              className={`icon ${
                selectedType === hazardTypes.EXPLOSION ? "selected" : ""
              }`}
              onClick={() => setSelectedType(hazardTypes.EXPLOSION)}
            />

            <FireIcon
              className={`icon ${
                selectedType === hazardTypes.FIRE ? "selected" : ""
              }`}
              onClick={() => setSelectedType(hazardTypes.FIRE)}
            />

            <FloodIcon
              className={`icon ${
                selectedType === hazardTypes.FLOOD ? "selected" : ""
              }`}
              onClick={() => setSelectedType(hazardTypes.FLOOD)}
            />

            <HurricaneIcon
              className={`icon ${
                selectedType === hazardTypes.HURRICANE ? "selected" : ""
              }`}
              onClick={() => setSelectedType(hazardTypes.HURRICANE)}
            />

            <MaritimeIcon
              className={`icon ${
                selectedType === hazardTypes.MARITIME ? "selected" : ""
              }`}
              onClick={() => setSelectedType(hazardTypes.MARITIME)}
            />

            <NuclearIcon
              className={`icon ${
                selectedType === hazardTypes.NUCLEAR ? "selected" : ""
              }`}
              onClick={() => setSelectedType(hazardTypes.NUCLEAR)}
            />

            <PlaneIcon
              className={`icon ${
                selectedType === hazardTypes.PLANECRASH ? "selected" : ""
              }`}
              onClick={() => setSelectedType(hazardTypes.PLANECRASH)}
            />

            <PowerIcon
              className={`icon ${
                selectedType === hazardTypes.POWEROUTAGE ? "selected" : ""
              }`}
              onClick={() => setSelectedType(hazardTypes.POWEROUTAGE)}
            />

            <RiotIcon
              className={`icon ${
                selectedType === hazardTypes.RIOT ? "selected" : ""
              }`}
              onClick={() => setSelectedType(hazardTypes.RIOT)}
            />

            <RockSlideIcon
              className={`icon ${
                selectedType === hazardTypes.ROCKSLIDE ? "selected" : ""
              }`}
              onClick={() => setSelectedType(hazardTypes.ROCKSLIDE)}
            />

            <TrafficIcon
              className={`icon ${
                selectedType === hazardTypes.TRAFFICACCIDENT ? "selected" : ""
              }`}
              onClick={() => setSelectedType(hazardTypes.TRAFFICACCIDENT)}
            />

            <TrainIcon
              className={`icon ${
                selectedType === hazardTypes.TRAIN ? "selected" : ""
              }`}
              onClick={() => setSelectedType(hazardTypes.TRAIN)}
            />

            <WaterIcon
              className={`icon ${
                selectedType === hazardTypes.WATERDISRUPTION ? "selected" : ""
              }`}
              onClick={() => setSelectedType(hazardTypes.WATERDISRUPTION)}
            />
          </StyledIconRow>
        </StyledSectionWrapper>

        <StyledSectionWrapper>
          <StyledSecondaryHeading>Description</StyledSecondaryHeading>
          <StyledHint>Provide a short description for that Hazard or Obstacle.</StyledHint>
          <StyledInput
            placeholder="..."
            onChange={handleInputChange}
            type="text"
            value={identifierValue}
          />
        </StyledSectionWrapper>

        <StyledButton onClick={handleSubmit}>
          {loading ? "loading..." : "Submit Hazard"}
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
  font-size: 1.8rem;
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
  width: 100%;
  /* margin-top: 0.6rem; */
  padding: 0.75rem;

  background-color: ${(props) => props.theme.primaryBackgroundColor};
  color: ${(props) => props.theme.formFieldColor};

  border: 1px solid ${(props) => props.theme.formFieldColor};
  border-radius: ${(props) => props.theme.inputBorderRadius};
  
  font-size: 1rem;
  line-height: 1.5rem;
  font-style: normal;
  font-weight: 500;
  
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

  overflow: auto;
  white-space: nowrap;

  .icon {
    height: 50px;
    width: 50px;
    margin-right: 1.3rem;
  }

  .selected {
    background-color: #F8DE00;
    border-radius: 10px;
  }
`;

const StyledSelectedType = styled.div`
  font-size: 1rem;
  font-weight: 500;

  color: ${(props) => props.theme.primaryFontColor};
`;

const StyledHint = styled.div`
margin-top: -0.4rem;

font-size: 0.8rem;
font-weight: 300;
`;

export default CreateHazardMarker;

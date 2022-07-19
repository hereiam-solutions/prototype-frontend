import { useState } from 'react';
import styled from 'styled-components';

// type imports
import { hazardTypes } from '../../../../map/mapTypes';
import { realmFunctionNames } from '../../../../../data/realm/functions';
import { CreateHazardArgs } from '../../../../../data/realm/schema/hazard';
import { BSON } from 'realm-web';

// hook imports
import useCreateMarker from '../../../../../hooks/useCreateMarker';
import useMission from '../../../../../hooks/useMission';
import useRealm from '../../../../../hooks/useRealm';
import useRealmFunction from '../../../../../hooks/useRealmFunction';

// svg imports
import { ReactComponent as AvalanceIcon } from '../../../../../assets/Hazards/Alert=Avalanche.svg';
import { ReactComponent as BioIncidentIcon } from '../../../../../assets/Hazards/Alert=Biological Incident.svg';
import { ReactComponent as BombIcon } from '../../../../../assets/Hazards/Alert=Bomb.svg';
import { ReactComponent as ChemicalIcon } from '../../../../../assets/Hazards/Alert=Chemical Incident.svg';
import { ReactComponent as ContagiousIcon } from '../../../../../assets/Hazards/Alert=Contagious Illness.svg';
import { ReactComponent as EarthquakeIcon } from '../../../../../assets/Hazards/Alert=Earthquake.svg';
import { ReactComponent as ExplosionIcon } from '../../../../../assets/Hazards/Alert=Explosion.svg';
import { ReactComponent as FireIcon } from '../../../../../assets/Hazards/Alert=Fire.svg';
import { ReactComponent as FloodIcon } from '../../../../../assets/Hazards/Alert=Flood.svg';
import { ReactComponent as HurricaneIcon } from '../../../../../assets/Hazards/Alert=Hurricane.svg';
import { ReactComponent as MaritimeIcon } from '../../../../../assets/Hazards/Alert=Maritime.svg';
import { ReactComponent as NuclearIcon } from '../../../../../assets/Hazards/Alert=Nuclear.svg';
import { ReactComponent as PlaneIcon } from '../../../../../assets/Hazards/Alert=Plane Crash.svg';
import { ReactComponent as PowerIcon } from '../../../../../assets/Hazards/Alert=Electricity Failure.svg';
import { ReactComponent as RiotIcon } from '../../../../../assets/Hazards/Alert=Riot.svg';
import { ReactComponent as RockSlideIcon } from '../../../../../assets/Hazards/Alert=Rock Slide.svg';
import { ReactComponent as TrafficIcon } from '../../../../../assets/Hazards/Alert=Traffic Accident.svg';
import { ReactComponent as TrainIcon } from '../../../../../assets/Hazards/Alert=Train.svg';
import { ReactComponent as WaterIcon } from '../../../../../assets/Hazards/Alert=Water Disruption.svg';
import useNavigation from '../../../../../hooks/useNavigation';

const CreateHazardMarker = () => {
  const { realm } = useRealm();
  const { location } = useCreateMarker();
  const { activeMission } = useMission();
  const { setIsDrawOpen } = useNavigation();

  const [loading, setLoading] = useState<boolean>(false);

  const [selectedType, setSelectedType] = useState<hazardTypes>(
    hazardTypes.AVALANCHE
  );

  const [identifierValue, setIdentifierValue] = useState<string>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIdentifierValue(event.currentTarget.value);
  };

  const handleSubmit = async () => {
    try {
      if (activeMission) {
        const args: CreateHazardArgs = {
          identifier: identifierValue,
          mission: activeMission.id,
          hazard_type: selectedType,
          status: 'active',
          //   placed_by: new BSON.ObjectId(realm.currentUser?.id),
          location: { type: 'Point', coordinates: location },
        };

        setLoading(true);

        if (realm.currentUser) {
          // call the Realm function
          await realm.currentUser.callFunction(
            realmFunctionNames.addHazard,
            args
          );
        }

        setLoading(false);
        setIsDrawOpen(false);
      }
    } catch (e) {
      console.log(
        'There has been an error while calling the Realm custom function called:',
        realmFunctionNames.addHazard,
        'Error:',
        e
      );
    }
  };

  return (
    <StyledWrapper>
      <StyledHeader>Set Hazard</StyledHeader>
      <StyledSecondaryHeading>Type of Hazard:</StyledSecondaryHeading>
      <StyledIconRow>
        <AvalanceIcon
          className={`icon ${
            selectedType === hazardTypes.AVALANCHE ? 'selected' : ''
          }`}
          onClick={() => {
            setSelectedType(hazardTypes.AVALANCHE);
          }}
        />

        <BioIncidentIcon
          className={`icon ${
            selectedType === hazardTypes.BIOLOGICALINCIDENT ? 'selected' : ''
          }`}
          onClick={() => setSelectedType(hazardTypes.BIOLOGICALINCIDENT)}
        />

        <BombIcon
          className={`icon ${
            selectedType === hazardTypes.BOMB ? 'selected' : ''
          }`}
          onClick={() => setSelectedType(hazardTypes.BOMB)}
        />

        <ChemicalIcon
          className={`icon ${
            selectedType === hazardTypes.CHEMICALINCIDENT ? 'selected' : ''
          }`}
          onClick={() => setSelectedType(hazardTypes.CHEMICALINCIDENT)}
        />

        <ContagiousIcon
          className={`icon ${
            selectedType === hazardTypes.CONTAGIOUSILLNESS ? 'selected' : ''
          }`}
          onClick={() => setSelectedType(hazardTypes.CONTAGIOUSILLNESS)}
        />

        <EarthquakeIcon
          className={`icon ${
            selectedType === hazardTypes.EARTHQUAKE ? 'selected' : ''
          }`}
          onClick={() => setSelectedType(hazardTypes.EARTHQUAKE)}
        />

        <ExplosionIcon
          className={`icon ${
            selectedType === hazardTypes.EXPLOSION ? 'selected' : ''
          }`}
          onClick={() => setSelectedType(hazardTypes.EXPLOSION)}
        />

        <FireIcon
          className={`icon ${
            selectedType === hazardTypes.FIRE ? 'selected' : ''
          }`}
          onClick={() => setSelectedType(hazardTypes.FIRE)}
        />

        <FloodIcon
          className={`icon ${
            selectedType === hazardTypes.FLOOD ? 'selected' : ''
          }`}
          onClick={() => setSelectedType(hazardTypes.FLOOD)}
        />

        <HurricaneIcon
          className={`icon ${
            selectedType === hazardTypes.HURRICANE ? 'selected' : ''
          }`}
          onClick={() => setSelectedType(hazardTypes.HURRICANE)}
        />

        <MaritimeIcon
          className={`icon ${
            selectedType === hazardTypes.MARITIME ? 'selected' : ''
          }`}
          onClick={() => setSelectedType(hazardTypes.MARITIME)}
        />

        <NuclearIcon
          className={`icon ${
            selectedType === hazardTypes.NUCLEAR ? 'selected' : ''
          }`}
          onClick={() => setSelectedType(hazardTypes.NUCLEAR)}
        />

        <PlaneIcon
          className={`icon ${
            selectedType === hazardTypes.PLANECRASH ? 'selected' : ''
          }`}
          onClick={() => setSelectedType(hazardTypes.PLANECRASH)}
        />

        <PowerIcon
          className={`icon ${
            selectedType === hazardTypes.POWEROUTAGE ? 'selected' : ''
          }`}
          onClick={() => setSelectedType(hazardTypes.POWEROUTAGE)}
        />

        <RiotIcon
          className={`icon ${
            selectedType === hazardTypes.RIOT ? 'selected' : ''
          }`}
          onClick={() => setSelectedType(hazardTypes.RIOT)}
        />

        <RockSlideIcon
          className={`icon ${
            selectedType === hazardTypes.ROCKSLIDE ? 'selected' : ''
          }`}
          onClick={() => setSelectedType(hazardTypes.ROCKSLIDE)}
        />

        <TrafficIcon
          className={`icon ${
            selectedType === hazardTypes.TRAFFICACCIDENT ? 'selected' : ''
          }`}
          onClick={() => setSelectedType(hazardTypes.TRAFFICACCIDENT)}
        />

        <TrainIcon
          className={`icon ${
            selectedType === hazardTypes.TRAIN ? 'selected' : ''
          }`}
          onClick={() => setSelectedType(hazardTypes.TRAIN)}
        />

        <WaterIcon
          className={`icon ${
            selectedType === hazardTypes.WATERDISRUPTION ? 'selected' : ''
          }`}
          onClick={() => setSelectedType(hazardTypes.WATERDISRUPTION)}
        />
      </StyledIconRow>

      <StyledSecondaryHeading>Hazard Description:</StyledSecondaryHeading>

      <StyledIdentifierInput
        onChange={handleInputChange}
        type="text"
        value={identifierValue}
      />

      <StyledButton onClick={handleSubmit}>
        {loading ? 'loading...' : 'Submit Hazard'}
      </StyledButton>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  height: 100%;
  width: 100%;

  padding: 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const StyledHeader = styled.h2``;

const StyledSecondaryHeading = styled.div`
  align-self: start;
`;

const StyledIconRow = styled.div`
  height: 60px;
  width: 100%;

  overflow: auto;
  white-space: nowrap;

  .icon {
    height: 50px;
    width: 50px;
  }

  .selected {
    background-color: grey;
    border-radius: 50%;
  }
`;

const StyledIdentifierInput = styled.input`
  width: 100%;
  height: 2rem;
  border: 1px solid black;
`;

const StyledButton = styled.button`
  padding: 0.5rem;
  border-radius: 20px;
  color: white;
  background: grey;
`;

export default CreateHazardMarker;

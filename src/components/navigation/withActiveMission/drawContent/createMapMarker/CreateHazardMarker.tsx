import { useState } from 'react';
import styled from 'styled-components';
import useCreateMarker from '../../../../../hooks/useCreateMarker';

// svg imports
import { ReactComponent as AvalanceIcon } from '../../../../../assets/Hazards/Alert=Avalanche.svg';
import { ReactComponent as BioIncidentIcon } from '../../../../../assets/Hazards/Alert=Biological Incident.svg';
import { ReactComponent as BombIcon } from '../../../../../assets/Hazards/Alert=Bomb.svg';
import { ReactComponent as ChemicalIcon } from '../../../../../assets/Hazards/Alert=Chemical Incident.svg';

const CreateHazardMarker = () => {
  const { location, setLocation } = useCreateMarker();

  const [selectedIcon, setSelectedIcon] = useState();

  // TODO:
  // map a clicked marker to the possible type of marker with state
  // send request to backend with all infomation for creating a marker

  return (
    <StyledWrapper>
      <StyledHeader></StyledHeader>
      <StyledSecondaryHeading></StyledSecondaryHeading>
      <StyledIconRow>
        {/* <AvalanceIcon onClick={() => setSelectedIcon()} /> */}
        <BioIncidentIcon />
        <BombIcon />
        <ChemicalIcon />
      </StyledIconRow>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div``;

const StyledHeader = styled.div``;

const StyledSecondaryHeading = styled.div``;

const StyledIconRow = styled.div`
  height: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default CreateHazardMarker;

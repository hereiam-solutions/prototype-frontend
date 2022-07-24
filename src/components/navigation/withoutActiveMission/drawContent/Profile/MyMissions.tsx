import React from 'react'
import useRealm from '../../../../../hooks/useRealm';
import styled from 'styled-components';

const MyMissions = () => {
  return (
    <StyledMissionsWrapper>

      <SectionHeadline>
        My Missions
      </SectionHeadline>

    </StyledMissionsWrapper>
  );
};

const StyledMissionsWrapper = styled.div`
  margin: 0;
  width: 100%;
`;

const SectionHeadline = styled.div`
    width: 100%;
    margin-top: 1rem;

    padding: ${(props) => props.theme.sectionHeadlinePadding};

    border-radius: ${(props) => props.theme.buttonBorderRadius};

    background-color: ${(props) => props.theme.sectionHeadlineBackgroundColor};
    color: ${(props) => props.theme.sectionHeadlineColor};

`;

export default MyMissions;
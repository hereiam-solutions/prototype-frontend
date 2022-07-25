import React from 'react'
import useRealm from '../../../../../hooks/useRealm';
import styled from 'styled-components';
import { ReactComponent as MissionCategoryExplosion }  from '../../../../../../src/assets/Hazards/explosion.svg';
import { ReactComponent as MissionCategoryEarthcake }  from '../../../../../../src/assets/Hazards/earthquake.svg';
import { ReactComponent as MissionCategoryFlood }  from '../../../../../../src/assets/Hazards/flood.svg';



const MyMissions = () => {
  return (
    <StyledMissionsWrapper>

      <SectionHeadline>
        My Missions
      </SectionHeadline>

      <ul className='missionList'>

        <li className='missionListItem'>

          <MissionContainer>

            <div className='missionCategoryLogo'>
              <MissionCategoryEarthcake />
            </div>

            <div className='missionRegion'>Haiti</div>

            <div className='missionRole'>Rescue</div>

            <div className='timeslot'>
              <div>2021/08/15</div>
              <div>2021/08/20</div>
            </div>

          </MissionContainer>

        </li>

        <li className='missionListItem'>
        
          <MissionContainer>

            <div className='missionCategoryLogo'>
              <MissionCategoryFlood />
            </div>

            <div className='missionRegion'>Rhineland</div>

            <div className='missionRole'>Team leader</div>

            <div className='timeslot'>
              <div>2021/07/16</div>
              <div>2021/07/22</div>
            </div>

          </MissionContainer>

        </li>

        <li className='missionListItem'>
        
          <MissionContainer>

            <div className='missionCategoryLogo'>
              <MissionCategoryExplosion />
            </div>

            <div className='missionRegion'>Beirut</div>

            <div className='missionRole'>Dog handler</div>

            <div className='timeslot'>
              <div>2020/08/04</div>
              <div>2020/08/06</div>
            </div>

          </MissionContainer>

        </li>
      </ul>

    </StyledMissionsWrapper>
  );
};



const MissionContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: raw;
  align-items: center;
  justify-content: space-around;
  
  gap: 0.1rem;

  border-radius: ${(props) => props.theme.buttonBorderRadius};
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  .missionCategoryLogo {
    display: flex;
    justify-content: center;
  }
  .missionRegion {
    padding: 0.2rem 0.4rem 0.2rem 0.4rem;
    
    background-color: gray;

    border-radius: ${(props) => props.theme.buttonBorderRadius} 0 0 ${(props) => props.theme.buttonBorderRadius};

    color: white;

    font-size: 1.2rem;
    font-weight: 600;
  }

  .missionRole {
    padding: 0.4rem;

    font-size: 1.2rem;
    font-weight: 600;
  }

  .timeslot {

    display: flex;
    flex-direction: column;
    align-items: right;
    justify-content: flex-start;
    gap: 0.1rem;

    font-size: 0.6rem;
  }

`;


const StyledMissionsWrapper = styled.div`
  
  margin-top: 2rem;
  width: 90vw;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-bottom: 1px solid ${(props) => props.theme.sectionHeadlineBackgroundColor};
  
  pointer-events: auto;

  ul {
    list-style: none;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }

  li {
    width: 90vw;
    padding: 1rem;
  }
`;

const SectionHeadline = styled.div`
    width: 90vw;

    padding: ${(props) => props.theme.sectionHeadlinePadding};

    border-radius: ${(props) => props.theme.buttonBorderRadius} ${(props) => props.theme.buttonBorderRadius} 0 0;

    background-color: ${(props) => props.theme.sectionHeadlineBackgroundColor};
    color: ${(props) => props.theme.sectionHeadlineColor};

    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

export default MyMissions;
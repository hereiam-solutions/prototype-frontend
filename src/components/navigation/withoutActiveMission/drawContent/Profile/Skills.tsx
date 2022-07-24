import React from 'react'
import useRealm from '../../../../../hooks/useRealm';
import styled from 'styled-components';

const Skills = () => {
  return (
    <StyledSkillsWrapper>

      <SectionHeadline>
        My Skills and Certifications
      </SectionHeadline>

      <ul className='skillList'>
        <li className='skillListItem'>
          Skill1
        </li>
        <li className='skillListItem'>
          Skill2
        </li>
        <li className='skillListItem'>
          Skill3
        </li>
        <li className='skillListItem'>
          Skill3
        </li>

      </ul>

    </StyledSkillsWrapper>
  );
};

const StyledSkillsWrapper = styled.div`
  margin-top: 2rem;
  width: 100vw;

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
    width: 100vw;
    padding: 1rem;
  }
`;

const SectionHeadline = styled.div`
    width: 100%;

    padding: ${(props) => props.theme.sectionHeadlinePadding};

    border-radius: ${(props) => props.theme.buttonBorderRadius} ${(props) => props.theme.buttonBorderRadius} 0 0;

    background-color: ${(props) => props.theme.sectionHeadlineBackgroundColor};
    color: ${(props) => props.theme.sectionHeadlineColor};

`;

export default Skills;
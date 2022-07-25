import React from 'react'

import styled from 'styled-components';

const Skills = () => {
  return (
    <StyledSkillsWrapper>

      <SectionHeadline>
        My Skills and Certifications
      </SectionHeadline>



    </StyledSkillsWrapper>
  );
};

const StyledSkillsWrapper = styled.div`
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

  table {
    border: 1px solid gray;
    margin-bottom: 20px;
  }
  
  tbody > tr:nth-child(2n) {
    background: lightblue;
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

export default Skills;
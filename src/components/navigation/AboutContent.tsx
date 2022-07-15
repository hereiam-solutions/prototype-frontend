import React from 'react';
import styled from 'styled-components';

type Props = {};

const AboutContent = (props: Props) => {
  return (
    <div>
      <StyledAboutContent>
        <AboutContent />
      </StyledAboutContent>
    </div>
  );
};

const StyledAboutContent = styled.div`
  padding: 2rem 1rem 1rem 1rem;
  font-size: 0.8rem;
  font-weight: 200;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export default AboutContent;
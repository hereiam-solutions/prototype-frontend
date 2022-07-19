import React, { useState } from 'react';
import styled from 'styled-components';

type AccordionProps = {
  heading: string;
  children?: React.ReactNode;
};

const Accordion = ({ heading, children }: AccordionProps) => {
  const [accordionIsOpen, setAccordionIsOpen] = useState<boolean>(false);

  return (
    <StyledWrapper>
      <StyledHeading onClick={() => setAccordionIsOpen(!accordionIsOpen)}>
        <p>{heading}</p>
        <p>open</p>
      </StyledHeading>
      {accordionIsOpen && <>{children}</>}
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  width: 100%;

  padding: ${(props) => props.theme.insideDrawMargin};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const StyledHeading = styled.div`
  align-self: start;

  width: 100%;

  display: flex;
  justify-content: space-between;
`;

export default Accordion;

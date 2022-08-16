import React, { useState } from "react";
import styled from "styled-components";
import { RiArrowDropRightLine } from "react-icons/ri";

type AccordionProps = {
  heading: string;
  children?: React.ReactNode;
};

const ChevronLogo = RiArrowDropRightLine;

const Accordion = ({ heading, children }: AccordionProps) => {
  const [accordionIsOpen, setAccordionIsOpen] = useState<boolean>(false);
  const [rotateChevron, setRotateChevron] = useState<boolean>(false);

  return (
    <StyledWrapper>
      <StyledHeading
        onClick={() => {
          setAccordionIsOpen(!accordionIsOpen);
          setRotateChevron(!rotateChevron);
        }}
      >
        <StyledAccordionHeader>
          <p>{heading}</p>
        </StyledAccordionHeader>
        <ChevronLogo />
      </StyledHeading>
      {accordionIsOpen && <>{children}</>}
    </StyledWrapper>
  );
};

const StyledAccordionHeader = styled.div`
  font-size: 1.3rem;
  font-weight: 500;
`;

const StyledWrapper = styled.div`
  width: 100%;

  padding: 0.5rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  font-size: 1rem;
`;

const StyledHeading = styled.div`
  align-self: start;

  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default Accordion;

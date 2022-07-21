import React, { useState } from 'react';
import styled from 'styled-components';
import { RiArrowDropRightLine } from "react-icons/ri";

type AccordionProps = {
  heading: string;
  children?: React.ReactNode;
};

const ChevronLogo = RiArrowDropRightLine;

const Accordion = ({ heading, children }: AccordionProps) => {
  const [accordionIsOpen, setAccordionIsOpen] = useState<boolean>(false);
  const [rotateChevron, setRotateChevron] = useState<boolean>(false);

  const handleRotate = () => setRotateChevron(!rotateChevron);

  return (
    <StyledWrapper>
      <StyledHeading onClick={() => 
          {
            setAccordionIsOpen(!accordionIsOpen); 
            setRotateChevron(!rotateChevron);
          }
        }>
        <StyledAccordionHeader>
          <p>{heading}</p>
        </StyledAccordionHeader>

        <StyledRotateIcon>
        {/*<ChevronLogo className={"filters__chevron " + rotateChevron ? "rotate" : null} />*/}
        </StyledRotateIcon>
        
      </StyledHeading>
      {accordionIsOpen && <>{children}</>}
    </StyledWrapper>
  );
};

const StyledRotateIcon = styled.div`
  .filters__chevron {
    border-radius: 2px;
    transition: all 2 linear;
  }

  .filters__chevron.rotate {
    transform:rotate(180deg);
  }
`;


const StyledAccordionHeader = styled.div`
  font-size: 1.3rem;
  font-weight: 500;
`;

const StyledWrapper = styled.div`
  width: 100%;

  padding: ${(props) => props.theme.insideDrawMargin};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  /* for the child elements  */
  .selected {
    background-color: blue;
  }

  font-size: 1rem;
`;

const StyledHeading = styled.div`
  align-self: start;

  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border-top: 1px solid ${(props) => props.theme.primaryFontColor};
`;

export default Accordion;

import React, { MutableRefObject, useRef, useState } from 'react'
import styled from 'styled-components';

interface AccordionProps {
  title: React.ReactNode
  content: React.ReactNode
}

export const Accordion: React.FC<AccordionProps> = ({ title, content }) => {
  const [showExtraContent, setShowExtraContent] = useState(false)
  const [height, setHeight] = useState('0px')

  const contentSpace = useRef(null) as unknown as MutableRefObject<HTMLDivElement>

  function toggleAccordion() {
		setShowExtraContent((previousState) => !previousState)
    setHeight(showExtraContent ? '0px' : `${contentSpace.current.scrollHeight}px`)
  }

  const StyledAccordion = styled.div`
   
    .container {
      display: flex;
      flex-direction: column;
    }

    .arrow {
      transition: 0.3s;
    }

    .rotate {
      transform: rotate(180deg);
    }

    .extra-content {
      overflow: hidden;
      transition: max-height 0.3s ease-in-out;
    }

`;

  return (
    <StyledAccordion>
      <div className="container">
        <button
          onClick={toggleAccordion}
        >
          <p>{title}</p>
          <img
            src={'/assets/icons/chevron-up.svg'}
            alt="Chevron icon"
            className={`${showExtraContent ? 'rotate' : null} arrow`}
          />
        </button>
        <div
          ref={contentSpace}
          style={{ maxHeight: `${height}` }}
          className="extra-content"
        >
          <div>{content}</div>
        </div>
      </div>
    </StyledAccordion>
  )
}
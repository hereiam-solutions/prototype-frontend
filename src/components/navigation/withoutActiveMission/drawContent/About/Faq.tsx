import React from 'react';
import styled from 'styled-components';
import { Accordion } from './FaqTest';

const Faq = () => {
  return (
    <StyledFaq>

      <Accordion />
            
    </StyledFaq>
  )  
};

const StyledFaq = styled.div`
    width: 100%;
    margin: 0.4rem;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`;


export default Faq;
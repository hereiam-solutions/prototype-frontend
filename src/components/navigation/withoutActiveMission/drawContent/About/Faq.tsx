import React from 'react';
import styled from 'styled-components';
import Accordion from './Acc';



const Faq = () => {
  return (
    <StyledFaq>

      <StyledFaqHeader>
        FAQ
      </StyledFaqHeader>


      <Accordion
        title='Item1'
        content='testcontent'
      />

<Accordion
        title='Item1'
        content='testcontent'
      />

<Accordion
        title='Item1'
        content='testcontent'
      />

<Accordion
        title='Item1'
        content='testcontent'
      />
            
    </StyledFaq>
  )  
};

const StyledFaqHeader = styled.div`
    width: 100%;
    display: block;
    padding: 0.2rem 0 0.2rem 1rem;
    color: ${(props) => props.theme.primaryBackgroundColor};
    background-color: ${(props) => props.theme.secondaryFontColor};
    font-size: 1rem;
    font-weigth: 400;

`;

const StyledFaq = styled.div`
    margin: 1rem;
    width: 100%;
    margin: 0.4rem;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`;


export default Faq;
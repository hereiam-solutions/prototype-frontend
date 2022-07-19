import React, { useState } from "react";
import styled from 'styled-components';

function Accordion(props: { title: string; content: string; }) {
    const [open, setOpen] = useState(false);

    let toggleHandler = (e: any) => {
        setOpen(!open);
    }

  return (
    <StyledAccordion>
        <div className="accordion__item">
            <div className="accordion__header" onClick={toggleHandler}>
                <h4>{props.title}</h4>
                <i>
                +
                </i>
            </div>
            <p className="accordion__content">{props.content}</p>
        </div>
    </StyledAccordion>
  );
}

const StyledAccordion = styled.div`
width: 100%;
.accordion__item {
    width: 40%;
    max-height: 25px;
    padding: 17px 10px;
    border-bottom: 1px solid #c9c9c9;
    color: #fff;
    overflow: hidden;
    cursor: pointer;
}

.accordion__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.accordion__header h4 {
    transition: 0.2s ease-in-out;
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 10px;
}

.accordion__header i {
    transition: 0.2s ease-in-out;
    transform-origin: center;
    margin-bottom: 10px;
    font-size: 1rem;
}

.accordion__header:hover h4 {
    color: #10d6f5!important;
}

.accordion__header:hover i {
    color: #10d6f5;
}

.accordion__content {
    margin: 5px;  
}

@media (max-width:600px) {
    h1 {
        font-size: 30px;
    }
    .accordion__item {
        width: 80%;
    }

`;

export default Accordion;
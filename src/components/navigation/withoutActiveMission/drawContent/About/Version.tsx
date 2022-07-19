import React from 'react';
import styled from 'styled-components';
import LogoHereiam from '../../../../../assets/Logo/light/hereIam_logo_light64x64.svg';

type Props = {};

const Version = (props: Props) => {
  return (
    <StyledVersion>
        <img src={LogoHereiam} width="40px" alt="hereIam Logo" />
        <p>hereIam Prototype</p>
        <small>Version 0.0.1 (554234)</small>
        <UpdateButton>
            Update
        </UpdateButton>
        
            
    </StyledVersion>
  )  
};

const StyledVersion = styled.div`
    width: 100%;
    margin: 0.4rem;
    padding: 1rem;
    font-size: 0.8rem;
    font-weight: 200;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`;

const UpdateButton = styled.div`
    padding: 0.2rem 0.5rem 0.2rem 0.5rem;
    margin-top: 1.5rem;
    background-color: ${(props) => props.theme.formSubmitFillColor};
    border: 1px solid ${(props) => props.theme.formSubmitBorderColor};
    border-radius: ${(props) => props.theme.buttonBorderRadius};
    text-align: center;
    width: auto;
    color: ${(props) => props.theme.formSubmitTextColor};
    font-weight: 500;
    opacity: 0.4;
`;

export default Version;
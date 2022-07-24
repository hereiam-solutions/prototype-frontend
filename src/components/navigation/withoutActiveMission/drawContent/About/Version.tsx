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
        <strong>&copy; 2022 hereIam solutions</strong>
        <strong>All rights reserved.</strong>
        <UpdateButton>
            Update
        </UpdateButton>
        
            
    </StyledVersion>
  )  
};

const StyledVersion = styled.div`
    width: 100%;
    margin-top: 0.4rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding: ${(props) => props.theme.insideDrawMargin};

    font-size: 0.8rem;
    font-weight: 200;
`;

const UpdateButton = styled.div`
  width: auto;
  margin-top: 1.5rem;

  padding: ${(props) => props.theme.insideButtonPadding};

  background-color: ${(props) => props.theme.formSubmitFillColor};
  border: 1px solid ${(props) => props.theme.formSubmitBorderColor};
  border-radius: ${(props) => props.theme.buttonBorderRadius};

  text-align: center;
  color: ${(props) => props.theme.formSubmitTextColor};
  font-weight: 500;
  opacity: 0.1;
`;

export default Version;
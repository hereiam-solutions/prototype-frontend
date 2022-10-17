import React from "react";
import styled from "styled-components";

type Props = {};

const Welcome = (props: Props) => {
  return (
    <StyledAboutWelcome>
      <p>
        Welcome and thank you for choosing to use hereIam. Join like many other
        users worldwide, and save more lives by making better decisions.
      </p>
      <p>&nbsp;</p>
      <p>
        hereIam is a project of Project X Consulting GmbH, a German based
        company - supported by professionals and experts in Urban Search &
        Rescue and disaster management from all over Europe. Thank you for your inputs.
      </p>
    </StyledAboutWelcome>
  );
};

const StyledAboutWelcome = styled.div`
  margin-top: 2rem;
  width: 90vw;

  padding: ${(props) => props.theme.insideDrawMargin};

  font-size: 01rem;
  font-weight: 200;
`;

export default Welcome;

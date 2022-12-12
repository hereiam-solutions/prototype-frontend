import React from "react";

import styled from "styled-components";

import { useTranslation } from 'react-i18next';

type Props = {};

const Welcome = (props: Props) => {

  const { t } = useTranslation();

  return (
    <StyledAboutWelcome>
      <p>
        {t("Welcome.welcome")}
      </p>
      <p>&nbsp;</p>
      <p>
        {t("Welcome.hereiam")}
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

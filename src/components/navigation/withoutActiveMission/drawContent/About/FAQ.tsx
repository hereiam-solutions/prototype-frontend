import React from "react";

import styled from "styled-components";

import { useTranslation } from 'react-i18next';

import Accordion from "../../../ui/Accordion";
import { RiCustomerService2Fill } from "react-icons/ri";

type Props = {};

const Faq = (props: Props) => {

  const { t } = useTranslation();

  return (
    <StyledFaq>
      <SectionHeadline>{t("Faq.headline")}</SectionHeadline>

      <Accordion heading={t("Faq.why")}>
        <WhyHereiam />
      </Accordion>

      <Accordion heading={t("Faq.how")}>
        <HowToInstall />
      </Accordion>

      <Accordion heading={t("Faq.slow")}>
        <WhyLoadSlowly />
        <Support />
      </Accordion>

      <Accordion heading={t("Faq.battery")}>
        <GpsShortenBattery />
      </Accordion>

      <Accordion heading={t("Faq.accuracy")}>
        <InaccurateData />
        <Support />
      </Accordion>
    </StyledFaq>
  );
};

const WhyHereiam = () => {

  const { t } = useTranslation();

  return (
    <div>
      <p>
        {t("Faq.why1")}
      </p>
      <br />
      <p>
        {t("Faq.why2")}
      </p>
      <br />
      <p>
        {t("Faq.why3")}
      </p>
      <br />
      <h4>
        {t("Faq.why4")}
      </h4>
    </div>
  );
};

const HowToInstall = () => {

  const { t } = useTranslation();

  return (
    <div>
      <p>
        {t("Faq.how1")}
      </p>
      <br />
      <p>
        {t("Faq.how2")}
      </p>
    </div>
  );
};

const WhyLoadSlowly = () => {

  const { t } = useTranslation();

  return (
    <div>
      <p>
        {t("Faq.slow1")}
      </p>
      <p>
        {t("Faq.slow2")}
      </p>
      <br />
      <p>
        {t("Faq.slow3")}
      </p>
      <ul>
        <li>
          {t("Faq.slow4")}
        </li>
        <li>
          {t("Faq.slow5")}
        </li>
        <li>
          {t("Faq.slow6")}
        </li>
      </ul>
    </div>
  );
};

const GpsShortenBattery = () => {

  const { t } = useTranslation();

  return (
    <div>
      <p>
        {t("Faq.short1")}
      </p>
      <br />
      <p>
        {t("Faq.short2")}
      </p>
      <br />
      <p>
        {t("Faq.short3")}
      </p>
    </div>
  );
};

const InaccurateData = () => {

  const { t } = useTranslation();

  return (
    <div>
      <p>
        {t("Faq.acc1")}
      </p>
      <br />
      <p>
        {t("Faq.acc2")}
      </p>
      <br />
      <p>
        {t("Faq.acc3")}
      </p>
    </div>
  );
};

const Icon = RiCustomerService2Fill;

const Support = () => {

  const { t } = useTranslation();

  return (
    <StyledSupport>
      <Icon size={65} />
      <p>
        {t("Faq.supp1")}
      </p>
      <p>
        {t("Faq.supp2")}
      </p>
    </StyledSupport>
  );
};

const StyledSupport = styled.div`
margin-top: 2rem;
width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  gap: 1rem;

`;

const StyledFaq = styled.div`
  margin-top: 3rem;
  width: 90vw;

  font-size: 0.8rem;
  font-weight: 200;
`;

const SectionHeadline = styled.div`
  width: 90vw;

  font-size: 1.2rem;
  font-weight: 600;

  padding: ${(props) => props.theme.sectionHeadlinePadding};

  color: ${(props) => props.theme.buttonFontColor};
  background-color: ${(props) => props.theme.buttonColor};

  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: ${(props) => props.theme.buttonBorderRadius}
    ${(props) => props.theme.buttonBorderRadius} 0 0;
`;

export default Faq;

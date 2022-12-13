import React from "react";

import styled from "styled-components";

import { useTranslation } from 'react-i18next';

import Accordion from "../../../ui/Accordion";

type Props = {};

const Legals = (props: Props) => {

  const { t } = useTranslation();

  return (
    <StyledLegals>
      <SectionHeadline>{t("Legals.headline")}</SectionHeadline>

      <Accordion heading={t("Legals.headimprint")}>

        <h3>{t("Legals.imprint")}</h3>
        <p>
          hereIam solutions<br />
          c/o Project X Consulting GmbH<br />
          Thiemannstrasse 36, 12059 Berlin<br />
          {t("Legals.state")}
        </p>
        <br />
        <p>
          Phone: +49 174 1642535<br />
          Email: mmueller@projectxconsulting.de
        </p>
        <br />
        <p>
          {t("Legals.build")}
        </p>
        <br />
        <h4>
          {t("Legals.mdstv")}
        </h4>
        <p>
          <strong>
            {t("Legals.responsible1")}
          </strong>
          <br />
          {t("Legals.responsible2")}
        </p>
        <br />
        <h4>
          {t("Legals.disclaimer")}
        </h4>
        <p>
          <strong>
            {t("Legals.copy1")}
          </strong>
          <br />
          {t("Legals.copy2")}
        </p>
        <br />
        <p>
          <strong>
            {t("Legals.link1")}
          </strong>
          <br />
          {t("Legals.link2")}
        </p>
        <br />
        <p>
          <strong>
            {t("Legals.liability1")}
          </strong>
          <br />
          {t("Legals.liability2")}
        </p>
        <br />
        <p>
          <strong>
            {t("Legals.privacy1")}
          </strong>
          <br />
          {t("Legals.privacy2")}
        </p>
        <br />
        <p>
          <strong>
            {t("Legals.jurisdication1")}
          </strong>
          <br />
          {t("Legals.jurisdication2")}
        </p>

      </Accordion>
           
      <Accordion heading={t("Legals.terms")}>
        <Accordion heading={t("Legals.acceptance1")}>
          <p>
            {t("Legals.acceptance2")}
          </p>
          <br />
          <p>
            {t("Legals.acceptance3")}
          </p>
        </Accordion>

        <Accordion heading={t("Legals.age1")}>
          <p>
            {t("Legals.age2")}
          </p>
          <br />
          <p>
            {t("Legals.age3")}
          </p>
        </Accordion>

        <Accordion heading={t("Legals.data1")}>
          <p>
            {t("Legals.data2")}
          </p>
        </Accordion>

        <Accordion heading={t("Legals.licenses1")}>
          <p>
            {t("Legals.licenses2")}
          </p>
        </Accordion>

        <Accordion heading={t("Legals.suppcontent1")}>
          <p>
            {t("Legals.suppcontent2")}
          </p>
        </Accordion>

        <Accordion heading={t("Legals.yourcontent1")}>
          <p>
            {t("Legals.yourcontent2")}
          </p>
          <br />
          <p>
            {t("Legals.yourcontent3")}
          </p>
          <br />
          <p>
            {t("Legals.yourcontent4")}
          </p>
        </Accordion>

        <Accordion heading={t("Legals.feedback1")}>
          <p>
            {t("Legals.feedback2")}
          </p>
        </Accordion>

        <Accordion heading={t("Legals.use1")}>
          <p>
            {t("Legals.use2")}
          </p>
        </Accordion>

        <Accordion heading={t("Legals.modify1")}>
          <p>
            {t("Legals.modify2")}
          </p>
          <br />
          <p>
            {t("Legals.modify3")}
          </p>
          <br />
          <p>
            {t("Legals.modify4")}
          </p>
        </Accordion>

        <Accordion heading={t("Legals.exclusion1")}>
          <p>
            {t("Legals.exclusion2")}
          </p>
        </Accordion>

        <Accordion heading={t("Legals.limit1")}>
          <p>
            {t("Legals.limit2")}
          </p>
        </Accordion>

        <Accordion heading={t("Legals.safeuse1")}>
          <p>
            {t("Legals.safeuse2")}
          </p>
        </Accordion>

        <Accordion heading={t("Legals.indem1")}>
          <p>
            {t("Legals.indem2")}
          </p>
        </Accordion>

        <Accordion heading={t("Legals.choice1")}>
          <p>
            {t("Legals.choice2")}
          </p>
        </Accordion>

        <Accordion heading={t("Legals.changes1")}>
          <p>
            {t("Legals.changes2")}
          </p>
        </Accordion>

        <Accordion heading={t("Legals.prop1")}>
          <p>
            {t("Legals.prop2")}
          </p>
        </Accordion>

        <Accordion heading={t("Legals.term1")}>
          <p>
            {t("Legals.term2")}
          </p>
        </Accordion>

        <Accordion heading={t("Legals.usgov1")}>
          <p>
            {t("Legals.usgov2")}
          </p>
        </Accordion>

        <Accordion heading={t("Legals.infring1")}>
          <p>
            {t("Legals.infring2")}
          </p>
          <ul>
            <li>
              {t("Legals.infring3")}
            </li>
            <li>
              {t("Legals.infring4")}
            </li>
            <li>
              {t("Legals.infring5")}
            </li>
            <li>
              {t("Legals.infring6")}
            </li>
            <li>
              {t("Legals.infring7")}
            </li>
            <li>
              {t("Legals.infring8")}
            </li>
          </ul>
        </Accordion>

        <Accordion heading={t("Legals.order1")}>
          <p>
            {t("Legals.order2")}
          </p>
        </Accordion>

        <Accordion heading={t("Legals.misc1")}>
          <p>
            {t("Legals.misc2")}
          </p>
        </Accordion>

        <Accordion heading={t("Legals.ios1")}>
          <p>
            {t("Legals.ios2")}
          </p>
          <br />
          <p>
            {t("Legals.ios3")}
          </p>
        </Accordion>
      </Accordion>

      <Accordion heading={t("Legals.priv1")}>
        <p>
          {t("Legals.priv2")}
        </p>
        <br />
        <p>
          {t("Legals.priv3")}
        </p>
        <br />
        <p>
          {t("Legals.priv4")}
        </p>
        <br />
        <h4>
          {t("Legals.priv5")}
        </h4>

        <Accordion heading={t("Legals.what1")}>
          <p>
            {t("Legals.what2")}
          </p>
        </Accordion>

        <Accordion heading={t("Legals.activate1")}>
          <p>
            {t("Legals.activate2")}
          </p>
        </Accordion>

        <Accordion heading={t("Legals.useof1")}>
          <p>
            {t("Legals.useof2")}
          </p>
          <br />
          <p>
            {t("Legals.useof3")}
          </p>
        </Accordion>

        <Accordion heading={t("Legals.infos1")}>
          <p>
            {t("Legals.infos2")}
          </p>
          <br />
          <p>
            {t("Legals.infos3")}
          </p>
        </Accordion>

        <Accordion heading={t("Legals.trans1")}>
          <p>
            {t("Legals.trans2")}
          </p>
        </Accordion>

        <Accordion heading={t("Legals.position1")}>
          <p>
            {t("Legals.position2")}
          </p>
          <br />
          <p>
            {t("Legals.position3")}
          </p>
        </Accordion>

        <Accordion heading={t("Legals.partner1")}>
          <p>
            {t("Legals.partner2")}
          </p>
        </Accordion>

        <h4>
          {t("Legals.process1")}
        </h4>
        <p>
          {t("Legals.process2")}
        </p>

        <Accordion heading={t("Legals.provide1")}>
          <p>
            {t("Legals.provide2")}
          </p>
        </Accordion>

        <Accordion heading={t("Legals.accounts1")}>
          <p>
            {t("Legals.accounts2")}
          </p>
        </Accordion>

        <Accordion heading={t("Legals.dev1")}>
          <p>
            {t("Legals.dev2")}
          </p>
        </Accordion>

        <Accordion heading={t("Legals.comm1")}>
          <p>
            {t("Legals.comm2")}
          </p>
        </Accordion>

        <Accordion heading={t("Legals.marketing1")}>
          <p>
            {t("Legals.marketing2")}
          </p>
        </Accordion>

        <h4>
          {t("Legals.basis1")}
        </h4>
        <p>
          {t("Legals.basis2")}
        </p>

        <Accordion heading={t("Legals.perform1")}>
          <p>
            {t("Legals.perform2")}
          </p>
        </Accordion>

        <Accordion heading={t("Legals.consent1")}>
          <p>
            {t("Legals.consent2")}
          </p>
        </Accordion>

        <Accordion heading={t("Legals.oblig1")}>
          <p>
            {t("Legals.oblig2")}
          </p>
        </Accordion>

        <Accordion heading={t("Legals.interest1")}>
          <p>
            {t("Legals.interest2")}
          </p>
        </Accordion>

        <Accordion heading={t("Legals.long1")}>
          <p>
            {t("Legals.long2")}
          </p>
        </Accordion>

        <Accordion heading={t("Legals.share1")}>
          <p>
            {t("Legals.share2")}
          </p>
        </Accordion>

        <Accordion heading={t("Legals.socshare1")}>
          <p>
            {t("Legals.socshare2")}
          </p>
        </Accordion>

        <Accordion heading={t("Legals.3rd1")}>
          <p>
            {t("Legals.3rd2")}
          </p>
          <br />
          <p>
            {t("Legals.3rd3")}
          </p>
          <br />
          <p>
            {t("Legals.3rd4")}
          </p>
        </Accordion>

        <Accordion heading={t("Legals.int1")}>
          <p>
            {t("Legals.int2")}
          </p>
          <br />
          <p>
            {t("Legals.int3")}
          </p>
        </Accordion>

        <Accordion heading={t("Legals.discl1")}>
          <p>
            {t("Legals.discl2")}
          </p>
        </Accordion>

        <Accordion heading={t("Legals.merg1")}>
          <p>
            {t("Legals.merg2")}
          </p>
        </Accordion>

        <Accordion heading={t("Legals.child1")}>
          <p>
            {t("Legals.child2")}
          </p>
        </Accordion>

        <Accordion heading={t("Legals.qual1")}>
          <p>
            {t("Legals.qual2")}
          </p>
          <br />
          <p>
            {t("Legals.qual3")}
          </p>
        </Accordion>

        <Accordion heading={t("Legals.safe1")}>
          <p>
            {t("Legals.safe2")}
          </p>
        </Accordion>

        <Accordion heading={t("Legals.cookie1")}>
          <p>
            {t("Legals.cookie2")}
          </p>
          <br />
          <p>
            {t("Legals.cookie3")}
          </p>
        </Accordion>

        <Accordion heading={t("Legals.rights1")}>
          <p>
            {t("Legals.rights2")}
          </p>
          <br />
          <p>
            {t("Legals.rights3")}
          </p>
        </Accordion>

        <Accordion heading={t("Legals.control1")}>
          <p>
            {t("Legals.control2")}
          </p>
          <br />
          <p>
            {t("Legals.control3")}
          </p>
          <br />
          <p>
            {t("Legals.control4")}
          </p>
          <br />
          <p>
            hereIam
            <br />
            c/o Project X Consulting GmbH
            <br />
            Thiemannstrasse 36
            <br />
            D-12059 Berlin
            <br />
            Germany
          </p>
          <br />
          <p>Email: mike.kaden@hereiam.solutions</p>
        </Accordion>

        <Accordion heading={t("Legals.change1")}>
          <p>
            {t("Legals.change2")}
          </p>
        </Accordion>
      </Accordion>

      <Accordion heading={t("Legals.gdpr1")}>
        <p>
          {t("Legals.gdpr2")}
        </p>
        <br />
        <p>
          {t("Legals.gdpr3")}
        </p>
        <br />
        <p>
          {t("Legals.gdpr4")}
        </p>
        <ol>
          <li>
            {t("Legals.gdpr5")}
          </li>
          <li>
            {t("Legals.gdpr6")}
          </li>
          <li>
            {t("Legals.gdpr7")}
          </li>
          <li>
            {t("Legals.gdpr8")}
          </li>
          <li>
            {t("Legals.gdpr9")}
          </li>
          <li>
            {t("Legals.gdpr10")}
          </li>
          <li>
            {t("Legals.gdpr11")}
          </li>
        </ol>
        <h4>
          {t("Legals.gdpr12")}
        </h4>
      </Accordion>

      <Accordion heading={t("Legals.sec1")}>
        <p>
          {t("Legals.sec2")}
        </p>
        <br />
        <p>
          {t("Legals.sec3")}
        </p>

        <Accordion heading={t("Legals.rep1")}>
          <p>
            {t("Legals.rep2")}
          </p>
          <br />
          <p>
            {t("Legals.rep3")}
          </p>
          <br />
          <p>
            {t("Legals.rep4")}
          </p>
        </Accordion>

        <Accordion heading={t("Legals.vul1")}>
          <p>
            {t("Legals.vul2")}
          </p>
        </Accordion>

        <Accordion heading={t("Legals.resdisc1")}>
          <p>
            {t("Legals.resdisc2")}
          </p>
        </Accordion>

        <Accordion heading={t("Legals.pubdisc1")}>
          <p>
            {t("Legals.pubdisc2")}
          </p>
        </Accordion>

        <Accordion heading={t("Legals.repabuse1")}>
          <p>
            {t("Legals.repabuse2")}
          </p>
        </Accordion>

        <Accordion heading={t("Legals.authreq1")}>
          <p>
            {t("Legals.authreq2")}
          </p>
        </Accordion>
      </Accordion>
    </StyledLegals>
  );
};

const StyledLegals = styled.div`
  margin-top: 3rem;
  width: 90vw;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

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

export default Legals;

import React from 'react';
import styled from 'styled-components';
import Accordion from '../../../Accordion';
import { Link } from "react-router-dom";

type Props = {};

const Legals = (props: Props) => {
  return (
    <StyledLegals>
        <SectionHeadline>Legals, Terms, Privacy</SectionHeadline>

        <Accordion heading={'TERMS'}>

            <Accordion heading={'Acceptance'}>
            
                <p>
                    These hereIam End User Terms together with the hereIam Privacy Policy and the Acceptable Use Policy ("Terms") 
                    form a legally binding agreement between you and hereIam, c/o Project X Consulting GmbH. Thiemannstrasse 36, D-12059 Berlin, Germany ("hereIam") 
                    that govern the access and use of services, applications, software, websites, content, data, platforms, APIs or other materials 
                    made available to you by hereIam ("hereIam Products"). By using hereIam Products or by explicitly clicking to accept these Terms 
                    where this option is made available to you by hereIam, you unconditionally accept the Terms.
                </p>
                <p>
                    You as used herein refers to you as an individual end user of hereIam Products and/or the company or other legal entity which uses 
                    hereIam Products for its internal business purposes and on behalf of which you are using the hereIam Products ("you" or "your").
                </p>

            
            </Accordion>

            <Accordion heading={'Minimum Age and Authorization'}>
            
                <p>
                    To use hereIam Products as an individual end user, you must be at least eighteen (18) years of age or the age required 
                    in the (link) hereIam Privacy Policy (link) unless otherwise required by the applicable laws.
                </p>
                <p>
                    If you as an individual user are accepting the Terms on behalf of the company or other legal entity, 
                    you represent and warrant that you have the authority to do so.
                </p>

            
            </Accordion>

            <Accordion heading={'Personal Data'}>
            
                <p>The HERE Privacy Policy and additional privacy information made available to you govern the use of your personal data.</p>
            
            </Accordion>

            <Accordion heading={'Licenses'}>
            
                <p>
                    Subject to your full and continued compliance with the Terms and the applicable laws, hereIam grants you a non-exclusive, 
                    non-transferable, non-sublicensable, revocable, and limited personal license to access hereIam Products for your own use or use within your company.
                </p>
            
            </Accordion>

            <Accordion heading={'Supplier Content, Third-Party Websites and Additional Terms'}>
            
                <p>
                    hereIam Products may include content from suppliers which are subject to the acknowledgements and terms available here or links to third party websites. 
                    You hereby agree to adhere to the terms applicable to such third-party content. hereIam is not responsible for third party websites and a link to such website 
                    does not imply any endorsement of such website. Additional terms of third-party content, products or services may apply where made accessible via hereIam Products.
                </p>
            
            </Accordion>

            <Accordion heading={'Your Content'}>
            
                <p>
                    You may be able to submit content or other information ("Your Content") to hereIam. Unless otherwise agreed with hereIam in accordance with the Terms below, 
                    you must own or otherwise control all rights, including copyrights, to Your Content and hereIam does not claim ownership in Your Content.
                </p>

                <p>
                    By submitting Your Content to hereIam, you grant hereIam, its affiliates and its suppliers a world-wide, non-exclusive, sub-licensable, royalty-free, perpetual and 
                    irrevocable license to use, store, copy, publicly perform, display, distribute, modify and create derivative works from Your Content for the purposes of providing, 
                    promoting, monetizing and improving hereIam Products and other products and services by hereIam, its affiliates, and its suppliers.
                </p>

                <p>
                    hereIam may remove any content stored, sent or otherwise processed via HERE Products if necessary to protect its rights or the rights of third parties. 
                    hereIam may do so with immediate effect and without prior notice, but it will try to inform you in advance to give you reasonable time to mitigate the infringement itself. 
                    To the extent permitted by law, hereIam shall inform you of any reports received from a third party alleging infringement of their rights with respect to data uploaded by you.
                </p>
            
            </Accordion>

            <Accordion heading={'Feedback'}>
            
                <p>
                    You may but have no obligation to provide feedback, comments, ideas or other suggestions regarding hereIam Products ("Feedback") to hereIam. If you provide any Feedback to hereIam, 
                    you agree that hereIam, its affiliates and its suppliers may use such Feedback for any purpose, without limitation and without any obligation to you.
                </p>
            
            </Accordion>

            <Accordion heading={'Acceptable Use Policy'}>
            
                <p>
                    Your use of hereIam Products is subject to your compliance with the (link)Acceptable Use Policy(link). Any restrictions mentioned in the Acceptable Use Policy, these Terms or otherwise described by hereIam 
                    do not apply to the extent that such use cannot be prohibited by hereIam contractually due to applicable mandatory law (dwingend recht).
                </p>
            
            </Accordion>

            <Accordion heading={'Modifications and Availability of hereIam Products'}>
            
                <p>
                    To the maximum extent permitted by applicable mandatory law (dwingend recht), hereIam may, in its sole discretion, modify, update, discontinue or limit the availability of hereIam Products in whole or in part, 
                    such as for reasons related to maintenance, development of functionality, or requiring payment for functionality that was previously provided free-of-charge. 
                    hereIam will strive to provide a notification of changes that may significantly impact the use of hereIam Products to the end users of hereIam Products.
                </p>

                <p>
                    hereIam Products may not be accessible from all countries, may be provided only in selected languages and may not be available during maintenance breaks and operations and some features may also be dependent on the network, 
                    compatibility of the devices used and the content formats supported.
                </p>

                <p>
                    The discontinuation of hereIam Products at any time result in deletion of Your Content from hereIam Products.
                </p>
            
            </Accordion>

            <Accordion heading={'Exclusion of Warranty'}>
            
                <p>
                    HEREIAM PRODUCTS ARE PROVIDED ON AN "AS IS" AND ON AN "AS AVAILABLE" BASIS. TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE MANDATORY LAW (DWINGEND RECHT), 
                    NEITHER HERE, ITS AFFILIATES NOR ITS SUPPLIERS WARRANT THAT HERE PRODUCTS WILL BE UNINTERRUPTED, ERROR OR VIRUS-FREE, ACCURATE OR COMPLETE. NO WARRANTY OF ANY KIND, 
                    EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF TITLE, NON-INFRINGEMENT, MERCHANTABILITY, OR FITNESS FOR A PARTICULAR PURPOSE, 
                    IS MADE IN RELATION TO THE AVAILABILITY, ACCURACY, RELIABILITY, INFORMATION OR CONTENT FROM OR WITHIN HEREIAM PRODUCTS.
                </p>
            
            </Accordion>

            <Accordion heading={'Limitation of Liability'}>
            
                <p>
                    YOUR USE OF HEREIAM PRODUCTS IS AT YOUR OWN DISCRETION AND SOLE RISK. TO THE MAXIMUM EXTENT PERMITTED BY MANDATORY LAW (DWINGEND RECHT), HEREIAM, 
                    ITS AFFILIATES AND SUPPLIERS ARE NOT LIABLE FOR LOST PROFITS, LOST REVENUES, LOSS OR RECOVERY OF DATA, OR ANY INDIRECT, SPECIAL, CONSEQUENTIAL, 
                    INCIDENTAL OR PUNITIVE DAMAGES OR EXPENSES OF ANY KIND. IN NO EVENT SHALL THE TOTAL LIABILITY OF HEREIAM, REGARDLESS OF THE LEGAL BASIS OF THE CLAIM 
                    (E.G. TORT, CONTRACT OR OTHERWISE), ITS AFFILIATES AND SUPPLIERS TO YOU EXCEED THE AMOUNT OF FIFTY EURO (50.00 €). 
                    THE EXCLUSIONS AND LIMITATIONS OF LIABILITY IN THESE TERMS SHALL NOT APPLY TO DAMAGES AS A RESULT OF INTENT OR DELIBERATE RECKLESSNESS BY HEREIAM.
                </p>
            
            </Accordion>

            <Accordion heading={'Your safe use of hereIam Products'}>
            
                <p>
                    Location or map data, directions or other features or content included in or accessible by hereIam Products may be inaccurate or incomplete and may 
                    depend on network availability. You need to rely on your own judgement and take into account the real-world conditions. 
                    You are responsible for your own conduct and must observe the local laws when using hereIam Products. 
                    hereIam Products are not intended to be relied upon in situations where precise data is needed or where inaccurate or incomplete data may lead 
                    to death, personal injury.
                </p>
            
            </Accordion>

            <Accordion heading={'Indemnification'}>
            
                <p>
                    You agree to indemnify and hold harmless hereIam, its affiliates, contractors and suppliers from any demands, loss, liability, claims or expenses 
                    (including attorney’s fees) arising out of or related to your violation of any of the Terms and/or out of the use of hereIam Products.
                </p>
            
            </Accordion>

            <Accordion heading={'Choice of Law and Venue'}>
            
                <p>
                    The Terms are exclusively governed by the laws of Germany without regard to its conflicts of law provisions. 
                    Any dispute between you and hereIam related to the Terms or the use of hereIam Products shall be submitted to the competent court in Berlin, Germany.  
                    This exclusive designation of applicable law and forum shall leave unaffected your rights under the mandatory laws (dwingend recht) of your own country of 
                    residence in the European Union.
                </p>
            
            </Accordion>

            <Accordion heading={'Changes in Terms'}>
            
                <p>
                    hereIam may modify the Terms at any time without prior notice. If the Terms are changed in a material, adverse way, hereIam will provide a separate notice advising of the change.
                    You are responsible for regularly reviewing the Terms. You hereby agree that your continued use of hereIam Products constitutes your compelling evidence of your consent to any changes and modification. 
                    If you do not agree to the modifications to the Terms, you may not continue to use hereIam Products.
                </p>
            
            </Accordion>

            <Accordion heading={'Intellectual Property'}>
            
                <p>
                    hereIam and its suppliers retain all intellectual property and other rights, title and interest in hereIam Products and in all other hereIam products, content, software and other properties provided or used through hereIam Products.
                </p>
            
            </Accordion>

            <Accordion heading={'Term and Termination'}>
            
                <p>
                    The agreement under the Terms becomes valid when you have accepted the Terms or start using hereIam Products, whichever occurs earlier. 
                    You may terminate the agreement under the Terms at any time by ceasing to use hereIam Products and any and all rights granted to you by hereIam under these Terms 
                    will automatically and immediately be revoked. hereIam may suspend your access to hereIam Products or terminate agreement 
                    (a) with immediate effect and without a prior notice in case you are in breach of the Terms or hereIam reasonably believes 
                    that you are in breach of the Terms or applicable law or have not used hereIam Products for a period of six (6) months; and 
                    (b) for any reason with three (3) months prior written notice. The provisions of the Terms that are intended to survive termination, 
                    such as all rights granted by you to hereIam and any indemnifications provided by you to hereIam, remain valid after termination.
                </p>
            
            </Accordion>

            <Accordion heading={'US Government End Users'}>
            
                <p>
                    hereIam Products are "Commercial Items" as that term is defined at 48 C.F.R. 2.101 and may only be licensed to United States Government end users as 
                    Commercial Items in accordance with the Terms.
                </p>
            
            </Accordion>

            <Accordion heading={'Copyright Infringement Notices'}>
            
                <p>
                    If you believe that your copyrights have been infringed in hereIam Products you may provide a notice by 
                    (a) email with "Copyright Infringement Notice" in the subject line to contact@hereiam.solutions, 
                    (b) by mailing a document titled "Copyright Infringement Notice" to hereIam, c/o Project X Consulting GmbH. Thiemannstrasse 36, D-12059 Berlin, Germany or 
                    (c) via an online form, if available. In your notice you must:
                </p>
                <ul>
                    <li>identify the original copyrighted work you claim is infringed;</li>
                    <li>identify the content in hereIam Products that you claim is infringing the copyrighted work and where it is located;</li>
                    <li>provide your full name, mailing address, telephone number, and email address;</li>
                    <li>provide a statement that you have a good faith belief that the disputed is not authorized by the copyright owner, its agent, or the law;</li>
                    <li>provide a statement by you, made under penalty of perjury, that the information provided is accurate and that you are the copyright owner, or are authorized to act on behalf of the copyright owner of an exclusive right that is claimed to be infringed; and</li>
                    <li>provide your physical or electronic signature.</li>
                </ul>
            
            </Accordion>

            <Accordion heading={'Order of Precedence'}>
            
                <p>
                    You may have executed a separate agreement with hereIam for the use of hereIam Products. 
                    In case of any conflict between such separate agreement and the Terms, the terms of the separate agreement prevail.
                </p>
            
            </Accordion>

            <Accordion heading={'Miscellaneous'}>
            
                <p>
                    The Terms are between you and hereIam, except to the extent explicitly mentioned otherwise in these Terms. 
                    If a provision in the Terms is not enforceable under applicable mandatory law (dwingend recht), then the unenforceable part of the provision shall be removed, 
                    and the other provisions remain in full force and effect. There will not be any waiver of hereIam’s rights unless expressly agreed to by hereIam in writing. 
                    You may not assign or transfer your rights and obligations under the Terms without hereIam’s express written consent. 
                    hereIam may assign its rights and obligations under the Terms to its corporate parent, its subsidiaries, or to any company under common control with hereIam. 
                    Additionally, hereIam may assign its rights and obligations under the Terms to a third party in connection with a merger, acquisition, 
                    sale of assets or by operation of law.
                </p>
            
            </Accordion>

            <Accordion heading={'Accessing hereIam Products via iOS'}>
            
                <p>
                    If you are using hereIam Products via mobile apps available in the Apple App-store, the following terms will also apply:
                </p>

                <p>
                Apple Inc. ("Apple") is not a party to these Terms and hereIam is responsible for the offering and content of HERE Products via mobile apps of hereIam and its partners 
                in the Apple App-store. To the extent that these Terms deviate from Apple’s Media Services Terms and Conditions, 
                the latter terms apply and shall have priority and you hereby acknowledge that you have had the opportunity to review them. 
                Apple has no obligation whatsoever to furnish any maintenance and support services with respect to the hereIam Products and related mobile apps. 
                In the event of any failure of hereIam Products and mobile apps used to access hereIam Products to conform to any applicable warranty, 
                you may notify Apple, and Apple will refund the purchase price for the mobile app to you (if any). 
                To the maximum extent permitted by applicable law, Apple will have no other warranty obligation whatsoever with respect to the hereIam Products and the mobile app used to access hereIam Products, 
                and Apple shall not be liable for any other claims, losses, liabilities, damages, costs or expenses attributable to any failure to conform to any warranty. 
                You represent and warrant that (i) you are not located in a country that is subject to a U.S. Government embargo, or that has been designated by the U.S. Government 
                as a "terrorist supporting" country; and that (ii) you are not listed on any U.S. Government list of prohibited or restricted parties. 
                You acknowledge and agree that Apple, and Apple’s subsidiaries, are third party beneficiaries of the Terms if you access hereIam Products via iOS, 
                and that, upon your acceptance of these Terms, Apple will have the right (and will be deemed to have accepted the right) to enforce this clause of the Terms against you as a third-party beneficiary.
                </p>
            
            </Accordion>
            
        </Accordion>
            
    </StyledLegals>
  )  
};









const StyledLegals= styled.div`

    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.4rem;

`;

const SectionHeadline = styled.div`
    width: 100%;
    margin-top: 1rem;

    padding: ${(props) => props.theme.sectionHeadlinePadding};

    background-color: ${(props) => props.theme.sectionHeadlineBackgroundColor};
    color: ${(props) => props.theme.sectionHeadlineColor};

`;

const StyledClearLocal = styled.div`
  align-self: start;

  width: 100%;
  margin-top: 0.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: ${(props) => props.theme.secondaryBackgroundColor};
  color: ${(props) => props.theme.secondaryFontColor};

  font-size: 1rem;
  font-weight: 500;
`;

const StyledClearUser = styled.div`
  align-self: start;

  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: ${(props) => props.theme.secondaryBackgroundColor};
  color: ${(props) => props.theme.secondaryFontColor};

  font-size: 1rem;
  font-weight: 500;
`;

export default Legals;
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
                <br />
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
                <br />
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
                <br />
                <p>
                    By submitting Your Content to hereIam, you grant hereIam, its affiliates and its suppliers a world-wide, non-exclusive, sub-licensable, royalty-free, perpetual and 
                    irrevocable license to use, store, copy, publicly perform, display, distribute, modify and create derivative works from Your Content for the purposes of providing, 
                    promoting, monetizing and improving hereIam Products and other products and services by hereIam, its affiliates, and its suppliers.
                </p>
                <br />
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
                <br />
                <p>
                    hereIam Products may not be accessible from all countries, may be provided only in selected languages and may not be available during maintenance breaks and operations and some features may also be dependent on the network, 
                    compatibility of the devices used and the content formats supported.
                </p>
                <br />
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
                <br />
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

        <Accordion heading={'PRIVACY POLICY'}>
            <p>
                hereIam, including its affiliates (“hereIam”), is committed to respect your privacy and to comply with applicable data protection and privacy laws. 
                This privacy policy (“Policy”) describes how we collect and use personal data where hereIam is the data controller or where we refer to the applicability of this Policy. 
                “Personal data” means information relating to you or another identifiable individual.
            </p>
            <br />
            <p>
                We will give you additional privacy information that is specific to a product or service in Supplements to this Policy and other notices you may see while using our products or services. 
                If there is a difference between such notices and this Policy, the notices should be considered first.
            </p>
            <br />
            <p>
                Software on your device may access your information. Our products or services may contain links to, or may be embedded within, other companies’ websites and services that have privacy policies of their own. 
                Where our products or services are embedded to products and services of our customers, we require our customers to provide necessary transparency to you. 
                This might include linking to this Policy and the relevant Supplements, or providing the transparency in integrated and embedded notices which identify us as the service provider or controller.
            </p>
            <br />
            <h4>If you do not agree with this Policy, do not use our products and services or provide HERE with your personal data.</h4>

            <Accordion heading={'What information do we collect?'}>
            
                <p>
                    We collect your personal data and other information when you make a purchase, use or register into our products and services, 
                    take part in campaigns or research or otherwise interact with us. This includes following categories:
                </p>
           
            </Accordion>

            <Accordion heading={'Product and service activations'}>
            
                <p>
                    hereIam products and services may require electronic activation, where your device and application type, as well as unique device, application, network and subscription identifiers are sent to hereIam.
                </p>
           
            </Accordion>

            <Accordion heading={'Use of products and services'}>
            
                <p>
                    When you access our services online, our web servers automatically create records of your visit. 
                    These records typically include IP-address, access times, the sites linked from, pages visited, the links and features used, the content viewed or requested, browser or application type, language and other such information.
                </p>
                <br />
                <p>
                    Our applications may contact our servers periodically, for example to check for updates or to send us information relating to service usage. 
                    Additionally, we may invite you to join voluntary product and service improvement or research programs where detailed information is collected. 
                    See Supplements to this Policy for more details.
                </p>
           
            </Accordion>

            <Accordion heading={'Information you provide us with'}>
            
                <p>
                    When you create an account, make a purchase, request services, participate in research or campaigns or otherwise interact with us, 
                    we may ask for information such as your name, email address, phone number, street address, user names and passwords, feedback, information 
                    relating to your devices, age, gender, and language, bank account number, credit card details and other such financial information.
                </p>
                <br />
                <p>
                    We also maintain records of your consents, preferences and settings relating to, for example, location data, marketing and sharing of personal data.
                </p>
           
            </Accordion>

            <Accordion heading={'Your transactions with us'}>
            
                <p>
                    We maintain records of your purchases, downloads, the content you have provided us with, your requests, agreements between you and hereIam, 
                    the products and services provided to you, payment and delivery details, your contacts and communications and other interactions with us. 
                    We may, in accordance with applicable law, record your communication with our customer care or with other such contact points.
                </p>

            </Accordion>

            <Accordion heading={'Positioning and Location data'}>
            
                <p>
                    Location-based services establish location through the use of satellite, mobile, Wi-Fi, Bluetooth Low Energy (“BLE”) or other network based positioning methods. 
                    These technologies may involve exchanging your location data and unique device and mobile, Wi-Fi, Bluetooth, or other network related identifiers with hereIam. 
                    Our products may operate on multiple device platforms, applications and services which may also collect your location data. 
                    We do not use this information to identify you personally without your consent.
                </p>
                <br />
                <p>
                    When you use our location based services and features, for example location based search, navigation and routing, or request for map data, 
                    your location data is sent to hereIam to serve you with the right content, which may also include location based advertising.
                </p>

            </Accordion>

            <Accordion heading={'Information provided by partners'}>
            
                <p> 
                    We obtain information from industry partners and a variety of other sources, including publicly available sources such as business registries. 
                    We require these sources to comply with applicable laws with regard to collecting and transferring this data to us, 
                    including ensuring that there is a legal basis for the transfer or anonymizing the data in accordance with applicable laws prior to disclosure of the data to us.
                </p>

            </Accordion>

            <h4>Why do we process Personal Data?</h4>

                <p> 
                    hereIam may process your personal data for the following purposes. One or more purposes may apply simultaneously.
                </p>

            <Accordion heading={'Providing products and services'}>
            
                <p>
                    We may use your personal data to provide you with our products and services, to process your requests or as otherwise may be necessary to perform the contract between you and hereIam, 
                    to ensure the functionality and security of our products and services, to identify you as well as to prevent and investigate fraud and other misuses.
                </p>

            </Accordion>

            <Accordion heading={'Accounts'}>
            
                <p>
                    Some services may require an account to help you manage your content and preferences. Depending on the service, an account creation may be either required or voluntary. 
                    Account creation requires you to provide us with basic contact details about yourself, such as name, email address, country of residence and date of birth. 
                    You may also be able to voluntarily provide more information about yourself while creating a profile, such as a photo or avatar of your choice.
                </p>

            </Accordion>

            <Accordion heading={'Developing and managing products and services'}>
            
                <p>
                    We may use your personal data to develop and manage our products, services, customer care, sales and marketing. 
                    We may combine personal data collected in connection with your use of a particular hereIam product and/or service with other personal data we may have about you, 
                    unless such personal data was collected for a purpose, where the original purpose is incompatible with this purpose.
                </p>

            </Accordion>

            <Accordion heading={'Communicating with you'}>
            
                <p>
                    We may use your personal data to communicate with you, for example to inform you that our services have changed or to send you critical alerts 
                    and other such notices relating to our products and/or services and to contact you for customer care related purposes.
                </p>

            </Accordion>

            <Accordion heading={'Marketing, advertising and making recommendations'}>
            
                <p>
                    We may contact you to inform you of new products, services or promotions we may offer 
                    and to conduct market research when we have your consent or it is otherwise allowed. 
                    We may use your personal data to personalize our offering and to provide you with more relevant services, for example, 
                    to make recommendations and to display customized content and advertising in our services. 
                    This may include displaying hereIam and third party content.
                </p>

            </Accordion>

            <h4>What is our legal basis for processing your Personal Data?</h4>

            <p>
                Our legal basis for processing your personal data is dependent on the purpose for processing 
                and may vary as described in the Supplement applicable to the product or service you are using. 
                In general, we process your personal data under the following legal bases:
            </p>

            <Accordion heading={'Performance of a contract with you'}>
            
                <p>
                    We process your personal data to perform our obligations under the Service Terms applicable 
                    to the product or service you are using, provided by us or our customers.
                </p>

            </Accordion>

            <Accordion heading={'Your consent'}>
            
                <p>
                    We process your personal data if you have consented to the processing activity. 
                    You may revoke your consent at any time. 
                    Doing so will bar us from further processing of your personal data based on your consent, 
                    but will not impact the lawfulness of processing based on your consent before it was withdrawn. 
                    Some of the features of our products and services might be only available based on consent.
                </p>

            </Accordion>

            <Accordion heading={'Legal obligations'}>
            
                <p>
                    We process your personal data as needed to comply with laws and regulations.
                </p>

            </Accordion>

            <Accordion heading={'Legitimate interests'}>
            
                <p>
                    We process your personal data to further our legitimate interests, such as in connection with 
                    managing, developing, testing, securing, and in limited circumstances marketing, advertising, 
                    and making recommendations regarding our products and services. Any such processing is conducted 
                    subject to appropriate measures to protect your fundamental rights and freedoms related to your personal data, 
                    and in any event will be subject to the restrictions provided in this Policy. Further information or specification 
                    of our legitimate interests may be provided in relevant Supplements applicable to the product or service.
                </p>

            </Accordion>

            <Accordion heading={'How long do we retain Personal Data?'}>
            
                <p>
                    We endeavor to only collect personal data that are necessary for the purposes for which they are collected, 
                    and to retain such data for no longer than is necessary for such purposes. The length of time personal data is retained, 
                    and criteria for determining that time, are dependent on the nature of the personal data and the purpose for which it was provided. 
                    For example, for your personal data related to managing your account (such as name, email address, and account content and preferences) 
                    are maintained for as long as they are retained by you within your account. Other data, such as records of your activity within the application, 
                    are typically maintained only for a short period before being anonymized or pseudonymized. Additional information may be provided in the 
                    Supplement applicable to the product or service you are using. You may contact the hereIam Office at contact@hereiam.solutions 
                    to obtain additional information about retention of your personal data.
                </p>

            </Accordion>

            <Accordion heading={'Do we share Personal Data?'}>
            
                <p>
                    We do not sell, lease, rent or otherwise disclose your personal data to third parties unless otherwise stated below.
                </p>

            </Accordion>

            <Accordion heading={'Your consent and social sharing services'}>
            
                <p>
                    We may share your personal data if we have your consent to do so. 
                    Some services may allow you to share your personal data with other users of the service or with other services and their users. 
                    Please consider carefully before disclosing any personal data or other information that might be accessible to other users.
                </p>

            </Accordion>

            <Accordion heading={'hereIam and authorized third parties'}>
            
                <p>
                    We may share your personal data with other authorized third parties who process personal data for hereIam for the purposes described in this Policy. 
                    This may include for example billing through your network service provider or otherwise, delivery of your purchases, 
                    providing services including customer service, managing and analyzing consumer data, credit checks, conducting research and managing marketing 
                    and other such campaigns. When you purchase a hereIam product from us with a network service provider plan, 
                    we may need to exchange information with your network service provider to provide you with such service.
                </p>
                <br />
                <p>
                    We may conduct joint marketing and other communications with our partners, for example your mobile operator. 
                    To avoid duplicate or unnecessary communications and to tailor the message to you we may need to match information that hereIam has collected 
                    with information that the partner has collected where this is permitted by law.
                </p>
                <br />
                <p>
                    These authorized third parties are not permitted to use your personal data for any other purposes. 
                    We bind them contractually, require them to act consistently with this Policy and to use appropriate security measures to protect your personal data.
                </p>

            </Accordion>

            <Accordion heading={'International transfers of personal data'}>
            
                <p>
                    Our products and services may be provided using resources and servers located in various countries around the world. 
                    Therefore your personal data may be transferred across international borders outside the country where you use our services, 
                    including to countries outside the European Economic Area (EEA) that do not have laws providing specific protection for personal data 
                    or that have different legal rules on data protection, for example, the United States of America. 
                    In such cases we ensure that there is a legal basis for such a transfer and that adequate protection for your personal data 
                    is provided as required by applicable law, for example, by using standard contractual clauses approved by the European Commission or relevant authorities (where necessary) 
                    and by requiring the use of other appropriate technical and organizational information security measures. 
                    You may contact the hereIam Office at contact@hereiam.solutions to obtain additional information about the safeguards we take in connection with these transfers.
                </p>
                <br />
                <p>
                    A copy of the unchangeable Standard Contractual Clauses can be accessed at https://ec.europa.eu/info/law/law-topic/data-protection/data-transfers-outside-eu/model-contracts-transfer-personal-data-third-countries_en
                </p>

            </Accordion>

            <Accordion heading={'Mandatory disclosures'}>
            
                <p>
                    We may be obligated by mandatory law to disclose your personal data to certain authorities or other third parties, for example, 
                    to law enforcement agencies in the countries where we or third parties acting on our behalf operate. 
                    We may also disclose and otherwise process your personal data in accordance with applicable law to defend hereIam’s legitimate interests, 
                    for example, in legal proceedings or in connection with governmental requests and filings.
                </p>

            </Accordion>

            <Accordion heading={'Mergers and Acquisitions'}>
            
                <p>
                    If we decide to sell, buy, merge or otherwise reorganize our businesses in certain countries, this may involve us disclosing personal data 
                    to prospective or actual purchasers and their advisers, or receiving personal data from sellers and their advisers.
                </p>

            </Accordion>

            <Accordion heading={'How do we address the privacy of children?'}>
            
                <p>
                    hereIam products and services are typically intended for general audiences. 
                    hereIam does not knowingly collect information of children without the consent of their parents or guardians. 
                    hereIam publishes safety guidelines for using internet services in our websites.
                </p>

            </Accordion>

            <Accordion heading={'How do we address Data Quality?'}>
            
                <p>
                    We take reasonable steps to keep the personal data we possess accurate and to delete incorrect or unnecessary personal data.
                </p>
                <br />
                <p>
                    We encourage you to access your personal data through your account from time to time to ensure that it is up to date.
                </p>

            </Accordion>

            <Accordion heading={'What steps are taken to safeguard Personal Data?'}>
            
                <p>
                    Privacy and security are key considerations in the creation and delivery of our products and services. 
                    We have assigned specific responsibilities to address privacy and security related matters. 
                    We enforce our internal policies and guidelines through an appropriate selection of activities, 
                    including proactive and reactive risk management, security and privacy engineering, training and assessments. 
                    We take appropriate steps to address online security, physical security, risk of data loss and other such risks 
                    taking into consideration the risk represented by the processing and the nature of the data being protected. 
                    Also, we limit access to our data bases containing personal data to authorized persons having a justified need to access such information.
                </p>

            </Accordion>

            <Accordion heading={'How do we use Cookies and Web Beacons?'}>
            
                <p>
                    hereIam uses cookies, web beacons and other similar technologies to operate and improve our websites and offerings. 
                    We also use cookies for personalization and to display ads. 
                    Some hereIam websites use third party advertising technologies, such as DoubleClick, to serve ads.
                </p>
                <br />
                <p>
                    Our domains may include third party elements that set cookies on behalf of a third party, for example relating to third party social network. 
                    Please visit our Cookie policy to find out more about how hereIam uses cookies and how you can disable cookies by browser settings or otherwise.
                </p>

            </Accordion>

            <Accordion heading={'What are your rights?'}>
            
                <p>
                    You have a right to know what personal data we hold about you, and to access it. You have a right to have incomplete, incorrect, unnecessary or outdated personal data updated. 
                    You have the right to request that your personal data be erased, and to obtain a copy of your data in a machine-readable format. 
                    You have the right to object to or restrict processing in certain circumstances, such as where you believe the data is inaccurate or the processing activity is unlawful. 
                    You have a right to unsubscribe from direct marketing messages and to request that we stop processing your personal data for direct marketing purposes or on other compelling legal grounds. 
                    However, if you opt-out from marketing and other communications from hereIam, critical alerts may still be sent to you. 
                    If you are located in a European Union member state or within the European Economic Area, you have the right to lodge a complaint about our data collection and processing activities with the supervisory authority concerned.
                </p>
                <br />
                <p>
                    You may exercise your rights by managing your account and choices through available profile management tools on your device and our services. 
                    In some cases, especially if you wish us to delete or stop processing your personal data, this may also mean that we may not be able to continue to provide the services to you. 
                    Applicable data protection law may provide certain restrictions on the extent to which these rights may be exercised. 
                    If a restriction applies, we will respond to your request with an explanation of what action will be taken, 
                    to the extent required under applicable data protection law.
                </p>

            </Accordion>

            <Accordion heading={'Who is the controller of your Personal Data?'}>
            
                <p>
                    hereIam, c/o Project X Consulting GmbH. Thiemannstrasse 36, D-12059 Berlin, Germany is the controller of your personal data.
                </p>
                <br />
                <p> 
                    In addition, the hereIam affiliate providing the product or service may be a controller of your personal data. 
                    You may find the identity of the controller and its contact details by reviewing the terms and conditions of such 
                    a product or service or by using contact information provided in the applicable hereIam websites.
                </p>
                <br />
                <p>
                    In matters pertaining to hereIam’s privacy practices you may contact our Data Protection Officer, Mike Kaden, at:
                </p>
                <br />
                <p>
                    hereIam<br />
                    c/o Project X Consulting GmbH<br />
                    Thiemannstrasse 36<br />
                    D-12059 Berlin<br />
                    Germany
                </p>
                <br />
                <p>
                    Email: mike.kaden@hereiam.solutions
                </p>

            </Accordion>

            <Accordion heading={'Changes to this Privacy Policy'}>
            
                <p>
                    hereIam may from time to time change this Policy or change, modify or withdraw access to this site at any time with or without notice. 
                    However, if this Policy is changed in a material, adverse way, hereIam will post a notice advising of such change at the beginning of this Policy and on this site's home page for 30 days. 
                    We recommend that you re-visit this Policy from time to time to learn of any such changes to this Policy.
                </p>
                

            </Accordion>
            

        </Accordion>

        <Accordion heading={'SECURITY AWARENESS'}>
            <p>
                hereIam keeps Information Security at the forefront of our services. In doing so, we leverages best practices in our Development and Production environments. 
                hereIam is successfully sustaining a high level of performance securing our environments via systematically implementing and maintaining certification globally of ISO/IEC 27001 – Information Security Management.
            </p>
            <br />
            <p>Visit our Certifications and Attestations for more information.</p>

            <Accordion heading={'Reporting Security Issues and Concerns'}>
            
                <p>
                    To report a security incident or to submit a vulnerability report for a hereIam service, 
                    please consider reading the Vulnerability research and incident reporting section below and contact security@hereiam.solutions
                </p>
                <br />
                <p>
                    To file an abuse report for a hereIam service or a hereIam owned domain or IP address space, please read the Reporting abuse section below and contact contact@hereiam.solutions 
                </p>
                <br />
                <p>
                    To file an authority request, please read the Authority requests section below and contact dev@hereiam.solutions 
                </p>

            
            </Accordion>

            <Accordion heading={'Vulnerability Research and Incident Reporting'}>
            
                <p>
                    hereIam recognizes and supports responsible vulnerability research and disclosure. 
                    While we encourage responsible vulnerability research and incident reporting, attempt to exploit a vulnerability with malicious intent is an unlawful action and 
                    is subject to legal prosecution by law enforcement agencies. Vulnerability research should not impact normal service activity. 
                    Extraction of data beyond minimum required to demonstrate a vulnerability (e.g. database version and one table structure), 
                    or testing of DoS (Denial of Service) scenarios are prohibited and will be considered as malicious activity. 
                    Performing research activities should not involve automated tools and utilities. 
                    All tests should be executed using researchers own accounts if applicable with no impact to other service users.
                </p>

            </Accordion>

            <Accordion heading={'Responsible Disclosure'}>
            
                <p>
                    Vulnerability reports should include detailed technical description of the vulnerability and steps required to reproduce erroneous behavior in plain text. 
                    Screenshots (jpeg/png) and traffic dumps (tpcdump compatible pcap) are accepted as additional information. 
                    Vulnerability reports should not include links to external resources or malicious code designed to compromise data of a person verifying the vulnerability.
                </p>

            </Accordion>

            <Accordion heading={'Public Disclosure'}>
            
                <p>
                    As part of coordinated disclosure, public disclosure is allowed 90 days after hereIam acknowledges acceptance of the report or after the bug is fixed and verified by the reporter. 
                    Exception to this 90-day rule are issues where proper fix is by no means possible for hereIam or where hereIam and the researcher agree on longer response time. 
                    Public disclosure may include only technical information regarding vulnerability. 
                    Any additional information that is not required for understanding the vulnerability should be excluded out of public disclosure.
                </p>

            </Accordion>

            <Accordion heading={'Reporting Abuse'}>
            
                <p>
                    Abuse reports should include detailed information describing cause of the report. 
                    Information should include the origin of malicious traffic in the case that the abuse report is filed for hereIam domains or address spaces, 
                    or link to content if the abusive content is published somewhere within hereIam services. 
                    If the access to abusive content is limited and requires specific actions to be executed – 
                    steps to reproduce access to the abusive content should be included in the report. 
                    A report should written in plain text with supporting screenshots (jpeg/png) where applicable. 
                    Plain text log files are accepted as additional information.
                </p>

            </Accordion>

            <Accordion heading={'Authority Requests'}>
            
                <p>
                    Law enforcement officials seeking information from hereIam services, should file an official request. 
                    Authority request should describe the cause of request, name of issuing law enforcement organization, 
                    identification (badge number or ID) of the law enforcement agent in charge of the request and direct contact phone number. 
                    The request should be coming from a law-enforcement domain. 
                    The request should have a precise description of what type of information is requested since the hereIam organization is unable to process broad or vague requests.
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
/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';

import { Fade } from 'react-reveal';

import { Background } from '@components/background';
import { Section } from '@components/layout';

const Highlights = () => {
  const [state, setState] = React.useState({
    isReady: false,
  });

  React.useEffect(() => {
    setTimeout(() => {
      setState({ ...state, isReady: true });
    }, 250);

    return () => {};
  }, []);

  const highlights = [
    {
      title: 'Privacy Policy',
      subtitle: 'Effective date: May 13, 2022',
      description: `<div>
      <p class="text-center">
        <strong>Effective date: May 13, 2022</strong>
      </p>
      <p>
  <strong>Introduction </strong>Vessel is an application that provides users with the opportunity to purchase, collect, sell and showcase digital blockchain collectibles in mobile games (the &ldquo;App&rdquo;). The App is proprietary to OpenVessel Technologies, LLC (referred to in this privacy policy as &ldquo;Vessel&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;).
</p>
<p>This Privacy Policy (this &ldquo;Policy&rdquo;) describes the ways we collect, store, use, and disclose the information, including personal information, and data that our users (&ldquo;users&rdquo; or &ldquo;you&rdquo;) provide or we collect in connection with our website available at http://openvessel.io and on our App (collectively, our &ldquo;Services&rdquo;). Additionally, this Policy describes your rights and choices concerning your information.</p>
<p>Please note that the scope of this Policy is limited to information and data collected or received by us through your use of the Services. We are not responsible for the actions of individuals with no relationship to us or third-party companies, the content of their sites, the use of information or data you provide to them, or any products or services they may offer. Any link to those sites does not constitute our sponsorship of, or affiliation with, those individuals or companies.</p>
<p>If you do not want us to collect, store, use, or share your information in the ways described in this Policy, you should not use our Services.</p>
<ol start="2">
  <li>
    <strong>Personal Information We Collect From You and How We Collect It</strong>
  </li>
</ol>
<p>When you use our Services, you may give us your contact information directly on our website, generally your name and email address.</p>
<p>
  <strong>Registration Information:</strong>
</p>
<p>We may also offer you the option to complete a user profile that is visible to other App users (&ldquo;Account&rdquo;). If you create an Account, you may provide us your name, a username, a password, phone number and other information that helps us confirm that it is you accessing your Account. You may also choose to upload a picture for your Account. We may do this through in-game dialog boxes, which you may choose to skip. If you sign into the Services with Facebook Connect we will collect information that is visible via your Facebook account such as: (1) your first and last name, (2) Facebook ID, (3) Profile Picture/URL, and (4) list of Facebook friends. Your Account may be used to publicly identify you as part of social features of the Services, which may include user-to-user interaction, chat or messaging functionality, public leaderboards, head-to-head competition, and other similar features. Your Account username will be public and will be shown to other users, but will only permit access to information that is considered public or that you have designated as public in your user profile settings.</p>
<p>We may also offer you the ability to import your contacts or manually enter e-mail addresses so that you can locate your contacts and invite your contacts to join you in the Services. We will store those contacts for purposes of helping you and your contacts make connections through our Services.</p>
<p>
  <strong>Technical and Usage Information</strong>
</p>
<p>When you access our Services, we may collect (i) certain technical information about your mobile device or computer system, including IP Address, mobile device ID (IDFA, Google Advertising ID or other identifiers), and the version of your operating system; and (ii) usage statistics about your interactions with the Services. In certain Services we will create and assign to your device an identifier that is similar to an account number. We may collect the name you have associated with your device, device type, telephone number, country, and any other information you choose to provide, such as username, character name, or e-mail address. We may also access your contacts to enable you to invite friends to join you in the Services. This information is typically collected through the use of third-party mobile device software development kits. We may occasionally send you push notifications through our Service to send you App updates and other service-related notifications that may be of importance to you. You may at any time opt-out from receiving these types of communications by turning them off at the device level through your settings.</p>
<p>
  <strong>Email and Electronic Wallet Address</strong>
</p>
<p>We may collect your email address and your electronic wallet address to facilitate use of the Services.</p>
<p>
  <strong>Payment Information</strong>
</p>
<p>When you order a digital blockchain collectible through the Services, we collect some purchase information which is comprised of transaction history, including what you have purchased, the price, and the date. Your in-app purchase transactions are processed by third-party payment processors. The third-party payment processors will collect your name, phone number, e-mail address, mailing address, billing address, and complete credit card information that enables them to receive your payment. Our payment processing service provider may also retain this information to enable you to purchase additional items through our Services without having to re-enter it each time. Please note third party payment processors do not share your financial information, like credit card numbers, with us. Please note that purchases from third parties may also be subject to additional policies.</p>
<p>
  <strong>Information Collected by Customer Support</strong>
</p>
<p>When you ask for assistance from our Customer Support team, we will collect and store the contact information you provide (generally your name and e-mail address), information about your game-play or activity on the Services, and your user name. We will also store the correspondence and any information contained within.</p>
<ol start="3">
  <li>
    <strong>How We Use Your Information</strong>
  </li>
</ol>
<p>Our primary goals in using your information are to create your account, provide Services to you, troubleshoot, improve and optimize our Services, contact you, conduct research and create reports for internal use. We use information collected through our Service for purposes described in this Policy or disclosed to you in connection with our Service. For example, we may use your information to:</p>
<p>- Create accounts and allow users to use our Services;</p>
<p>- Identify and suggest connections with other App users;</p>
<p>- Operate and improve our Services;</p>
<p>- Understand you and your preferences to enhance your experience and enjoyment using our Services;</p>
<p>- Respond to your comments and questions and provide customer service;</p>
<p>- Provide and deliver products and services you request;</p>
<p>- Deliver advertising and marketing and promotional information to you;</p>
<p>- Send you related information, including confirmations, invoices, technical notices, updates, security alerts, and support and administrative messages;</p>
<p>- Communicate with you about promotions, contests, rewards, upcoming events, and other news about products and services offered by us and our selected partners;</p>
<p>- Conduct and administer contests promoted by us;</p>
<p>- Enable you to communicate with other users; and,</p>
<p>- Link or combine it with other information we get from third parties to help understand your preferences and provide you with better services.</p>
<ol start="4">
  <li>
    <strong>How We May Disclose Your Information to Third Parties</strong>
  </li>
</ol>
<p>We may share information we collect or derive with third parties for the following purposes:</p>
<p>- With service providers that perform services on our behalf or enhance our Services, including hosting services, payment processing, customer service and to assist us in our marketing efforts;</p>
<p>- With our affiliates;</p>
<p>- For analytics and research purposes, including Google Analytics. These service providers may use cookies to collect information about your online activities across this and other sites over time for non-advertising purposes. To learn more about how Google analytics collects and processes data and the choices Google may offer to control these activities, you may visit <a href="http://www.google.com/intl/en/policies/privacy/partners/"> http://www.google.com/intl/en/policies/privacy/partners/</a>; </p>
<p>- We may share aggregate or anonymous information about you with advertisers, publishers, business partners, sponsors, and other third parties;</p>
<p>- When we have a good faith belief that we have to disclose the information in response to lawful requests by public authorities, including law enforcement or legal process purposes;</p>
<p>- To satisfy any applicable laws or regulations;</p>
<p>- When we believe in our sole discretion that our Services are being used in committing a crime, including to report such criminal activity or to share information with other companies and organizations for the purposes of fraud protection, credit risk reduction, and other security precautions;</p>
<p>- To protect our or a third party&rsquo;s legal rights, investigate fraud, or to defend against a legal claim; and,</p>
<p>- As part of a business transfer such as a merger, acquisition, or at bankruptcy.</p>
<p>We do not share your personal information except as approved by you or as described herein. Where we share your information with third-party service providers and business partners, we ensure that we have appropriate agreements in place to protect your information as required by applicable data protection laws.</p>
<ol start="5">
  <li>
    <strong>Security Safeguards</strong>
  </li>
</ol>
<p>We take reasonable measures to protect your information from unauthorized access or against loss, misuse or alteration by third parties. Although we make good faith efforts to store the information collected on the Services in a secure operating environment that is not available to the public, we cannot guarantee the absolute security of that information during its transmission or its storage on our systems. Further, while we attempt to ensure the integrity and security of our network and systems, we cannot guarantee that our security measures will prevent third-party &ldquo;hackers&rdquo; from illegally obtaining access to this information. We do not warrant or represent that your information will be protected against, loss, misuse, or alteration by third parties. No method of transmission over the Internet, or method of electronic storage, is 100% secure, however. Therefore, we cannot guarantee its absolute security.</p>
<ol start="6">
  <li>
    <strong>Data Retention</strong>
  </li>
</ol>
<p>We retain your personal data for as long as needed to provide you Services, unless we are required by law to delete or if we accept your request to delete the information. We will also retain and use your personal data as necessary to comply with our legal obligations, resolve disputes, and enforce our agreements</p>
<ol start="7">
  <li>
    <strong>Our Policy Regarding Children</strong>
  </li>
</ol>
<p>We do not knowingly collect or solicit personal data from anyone under the age of 16 or knowingly allow such persons to use our Services. If you are under 16, please do not send any information about yourself to us, including your name, address, telephone number, or email address. No one under the age of 16 may provide any personal data. In the event that we learn that we have collected personal data from a child under age 16, we will delete that information as quickly as possible. If you believe that we might have any information from or about a child under the age of 16, please contact us.</p>
<ol start="8">
  <li>
    <strong>Transfer of Personal Data Outside Your Country</strong>
  </li>
</ol>
<p>We may transfer information that we collect about you to affiliated entities, or to other third parties across borders and from your country or jurisdiction to other countries or jurisdictions around the world. Please note that these countries and jurisdictions may not have the same data protection laws as your own jurisdiction, and we take steps to ensure adequate safeguards are in place to enable transfer of information to the U.S. and the use and disclosure of information about you, including personal data, as described in this Policy.</p>
<ol start="9">
  <li>
    <strong>Specific Provisions for EU Individuals</strong>
  </li>
</ol>
<p>
  <strong>Accessing and Correcting Your Personal Information. </strong>You may request to access the personal data that we hold about you. We may need to ask you to provide certain information to make sure you are who you claim to be. If you find the information on your account is not accurate, complete or updated, then please provide us with the necessary information to correct it.
</p>
<p>
  <strong>Withdrawing Your Consent</strong>. You may withdraw your consent to the processing of your personal data. Exercising this right will not affect the lawfulness of processing based on consent before withdrawal.
</p>
<p>
  <strong>Erasing or Restricting Access to Your Information</strong>. You may request to delete or restrict access to your personal data. We may postpone or deny your request if your personal data is in current use for providing Services or for other legitimate purposes, in which case we will let you know if we are unable to do so and why.
</p>
<p>
  <strong>Transferring your Personal Data (Otherwise known as Your Right to Data Portability)</strong>. You have the right to receive your personal data that you have provided us in a structured, commonly used and machine readable format and the right to transmit that data to another party of your choice, where technically feasible. However, this right shall not apply where it would adversely affect the rights and freedoms of others.
</p>
<p>
  <strong>Right to Make Complaint</strong>. If you consider that our processing of your personal data infringes data protection laws, you have a legal right to lodge a complaint with a supervisory authority responsible for data protection. You may do so in the EU member state of your habitual residence, your place of work or the place of the alleged infringement.
</p>
<p>If you have any concerns about the way we process your personal data or would like to make any of the above requests regarding your data, you are welcome to contact our data protection officer at privacy@openvessel.io or write to us at the address set forth in the &ldquo;Contact Us&rdquo; section. We will look into your request and make good faith efforts to resolve any concern you may have.</p>
<ol start="10">
  <li>
    <strong>Lawful Basis for Processing</strong>
  </li>
</ol>
<p>On certain occasions, we process your personal data when it is necessary for the performance of a contract to which you are a party, such as to provide the Services to you. We may also process your personal data to respond to your inquiries concerning our products and services.</p>
<p>On other occasions, we process your personal data where required by law. We may also process your personal data if necessary to protect your interests or the interests of a third party.</p>
<p>Additionally, we process your personal data when necessary to do so for fraud prevention, improving our network and services, and marketing our services to advertisers and publishers; where these interests are not overridden by your data protection rights.</p>
<p>If the processing of personal data is necessary and there is no other lawful basis for such processing, we will generally ensure that consent has been obtained from you. You have the right to withdraw your consent to processing of personal data at any time.</p>
<p>For questions about data processing, please contact our Data Protection Officer. Visit the &ldquo;Contact Us&rdquo; section below for contact information.</p>
<ol start="11">
  <li>
    <strong>Specific Provisions for California Consumers</strong>
  </li>
</ol>
<p>These additional provisions for California consumers apply only to individuals who reside in California. The California Consumer Privacy Act of 2018 (&ldquo;CCPA&rdquo;) provides additional rights to know, delete and opt out, and requires &ldquo;businesses&rdquo; collecting or disclosing personal information to provide notice and a means to exercise those rights.</p>
<p>Categories of personal information collected in the preceding 12 months:</p>
<p>- See Personal Information We Collect from You and How We Collect It above</p>
<p>Business purpose for collection:</p>
<p>- See How We Use Your Information above</p>
<p>Third parties with whom we may share your information:</p>
<p>- See Use of Information by Others above</p>
<p>
  <strong>Right to Know and Right to Delete.</strong>
</p>
<p>For any of the personal information described above, you can request to know what personal information we collected, disclosed, used and sold, and request that we delete your personal information at any time.</p>
<p>To exercise your right to know and right to deletion, please submit a request by:</p>
<p>Emailing privacy@openvessel.io with the subject line &ldquo;California Rights Request.&rdquo; We will need to verify your identity before processing your request. In order to verify your identity, we will generally require the matching of sufficient information you provide us to the information we maintain about you in our systems. In certain circumstances, we may decline a request to exercise the right to know and right to deletion, particularly where we are unable to verify your identity.</p>
<p>Upon verification of your request, we will delete (and direct our service providers to delete) your personal information from our records, unless retaining the information is necessary for us or our service providers to complete the transaction with you, detect security incidents or fraud, fixing errors, exercise free speech or another right provided by law, comply with legal obligations, or other internal and lawful uses.</p>
<p>
  <strong>Right to Opt Out of Sale.</strong>
</p>
<p>CCPA gives you a right to direct a business that sells your personal information to stop selling your personal information and to refrain from doing so in the future. We do not sell any of your personal information and will require our service providers not to sell your personal information.</p>
<p>You also have the right not to be discriminated against for exercising any of the rights listed above.</p>
<p>If you are a California resident seeking to exercise your rights under the CCPA or have any questions or concerns, please email us at privacy@openvessel.io. In certain circumstances, you are permitted to use an authorized agent to submit requests on your behalf where (i) you provide sufficient evidence to show that the requestor is an authorized agent with written permission to act on your behalf and (ii) you successfully verify your own identity with us.</p>
<p>We aim to respond to a consumer request for access or deletion within 45 days of receiving that request. If we require more time, we will inform you of the reason and extension period in writing.</p>
<ol start="12">
  <li>
    <strong>Changes to This Policy</strong>
  </li>
</ol>
<p>We may update this Policy to reflect changes to our data and information privacy practices. If we make any material changes we will notify you by means of a notice on the Services prior to the change becoming effective. We encourage you to periodically review this Policy for the latest information on our privacy practices. Please note that if we need to adapt the policy to legal requirements, the new policy will become effective immediately or as required.</p>
<ol start="13">
  <li>
    <strong>Contact Us</strong>
  </li>
</ol>
<p>
  <strong>Our Data Protection Officer</strong>
</p>
<p>You may contact our Data Protection Officer at privacy@openvessel.io or at the address below for further information.</p>
<p>Data Protection Officer</p>
<p>AppLovin Corporation</p>
<p>1100 Page Mill Road</p>
<p>Palo Alto, CA 94304</p>
<p>&copy; 2022 by Vessel | <a href="https://cathysun3.wixsite.com/vesselnfts/post/terms-and-conditions">Terms and Conditions</a> | <a href="https://cathysun3.wixsite.com/vesselnfts/post/vessel-privacy-policy">Privacy Policy</a>
</p>
    </div>`,
    },
  ];

  React.useEffect(() => {
    if (state.isReady) {
      setTimeout(() => {
        document.querySelector('body')?.classList.remove('overflow-hidden');
      }, 1250);
    }

    return () => {};
  }, [state.isReady]);

  return (
    <>
      <Fade bottom duration={750} delay={250} when={state.isReady}>
        <Background color="bg-white" className="overflow-hidden">
          <Section className="mt-[64px] md:mt-[80px] lg:mt-[84px]">
            <div className="flex flex-col gap-32 max-w-3xl mx-auto">
              {highlights.map((item: any, idx: number) => (
                <Fade
                  bottom
                  duration={750}
                  delay={500}
                  cascade
                  when={state.isReady}
                  key={idx}
                >
                  <div className="relative flex flex-col justify-center items-center gap-1 lg:gap-2">
                    <h1 className="text-3xl sm:text-4xl lg:text-6xl lg:leading-[80px] font-semibold mb-0 tracking-tight text-center">
                      {item.title}
                    </h1>
                    {/* <p className="text-base lg:text-lg lg:w-2/3 lg:leading-7 text-black/80 whitespace-pre-line">
                      {item.description}
                    </p> */}
                    <div
                      className="html-content-wrapper"
                      style={{ overflowWrap: 'anywhere' }}
                      dangerouslySetInnerHTML={{
                        __html: item.description,
                      }}
                    />
                  </div>
                </Fade>
              ))}
            </div>
          </Section>
        </Background>
      </Fade>

      <style jsx>
        {`
          p {
            margin-bottom: 20px;
          }
        `}
      </style>
    </>
  );
};

export default Highlights;

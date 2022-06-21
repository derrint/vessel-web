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
      title: 'Terms of Service',
      subtitle: 'Effective date: May 13, 2022',
      description: `<div>
      <p class="text-center">
        <strong>Effective date: May 13, 2022</strong>
      </p>
      <p>These Terms of Service (the &ldquo;Terms&rdquo;) and our Privacy Policy available at <a href="https://www.getvessel.io/post/vessel-privacy-policy" target="_blank" rel="noopener noreferrer" data-hook="linkViewer">
          <u>https://www.getvessel.io/post/vessel-privacy-policy</u>
        </a> govern the relationship between you and OpenVessel Technologies, LLC (&ldquo;OpenVessel&rdquo;, &ldquo;our&rdquo;, &ldquo;we&rdquo; or &ldquo;us&rdquo;) relating in any way to your use of our Services. &ldquo;Services&rdquo; means our website <a href="https://www.getvessel.io/" target="_blank" rel="noopener noreferrer" data-hook="linkViewer">
          <u>https://www.getvessel.io</u>
        </a>/ (the &ldquo;Website&rdquo;), the Vessel app (&ldquo;Vessel&rdquo; or the &ldquo;App&rdquo;) and any related services and content. </p>
      <p>Vessel is a mobile application that enables you to search, buy, sell and organize non-fungible cryptographic tokens implemented on the Vessel blockchain (&ldquo;NFTs&rdquo;). NFTs could be from any mobile applications that you have connected to Vessel (&ldquo;Connected Apps&rdquo;).</p>
      <p>Vessel consists of the following: </p>
      <ol>
        <li>
          <p>Wallet &ndash; this allows you to view and sort your NFTs</p>
        </li>
        <li>
          <p>Discover Tool &ndash; this allows you to search for and purchase other NFTs for Connected Apps and other mobile apps connected to Vessel.</p>
        </li>
        <li>
          <p>Sell NFTs &ndash; you select the price you want for the NFT.</p>
        </li>
      </ol>
      <p>
        <strong>1. Agreement to Terms </strong>
      </p>
      <p>By using our Services, you agree to be bound by these Terms and all policies and guidelines incorporated or referenced herein and by our Privacy Policy. If you don&rsquo;t agree to these Terms or any other policies or guidelines and our Privacy Policy, do not use the Services. </p>
      <p>
        <strong>SECTION 23 OF THESE TERMS OF SERVICE CONTAINS A BINDING ARBITRATION AGREEMENT AND CLASS ACTION AND REPRESENTATIVE ACTION WAIVER THAT WAIVE YOUR RIGHT TO A COURT HEARING OR JURY TRIAL. BY AGREEING TO THESE TERMS, YOU AGREE TO THOSE PROVISIONS. </strong>
      </p>
      <p>
        <strong>2. Changes to Terms or Services </strong>
      </p>
      <p>We may modify the Terms at any time, in our sole discretion. If we do so, we&rsquo;ll let you know either by posting the modified Terms on the Website or through other communications via the Services. It&rsquo;s important that you review the Terms whenever we modify them because if you continue to use the Services after we have posted modified Terms on the Website or via the Services, you are indicating to us that you agree to be bound by the modified Terms. If you don&rsquo;t agree to be bound by the modified Terms, then you may not use the Website or the Services anymore. Because our Services are evolving over time we may change or discontinue all or any part of the Services, at any time and without notice, at our sole discretion. </p>
      <p>
        <strong>3. Limited License; Who May Use the Services</strong>
      </p>
      <ol>
        <li>
          <p>
            <strong>Limited License Grant.</strong> Subject to your agreement and continuing compliance with these Terms, we grant you a non-exclusive, non-transferable, non-sublicensable, revocable limited license to access and use the Services for your own non-commercial entertainment purposes. You agree not to use the Services for any other purpose. Such license is subject to these Terms, and specifically conditioned upon the following: (i) you may only view, copy and print portions of the Content for your own informational, personal and non-commercial use in accordance with the Terms; (ii) you may not modify or otherwise make derivative uses of the Services or the Content, or any portion thereof; (iii) you may not remove or modify any copyright, trademark, or other proprietary notices that have been placed in the Content; (iv) you may not use any data mining, robots or similar data gathering or extraction methods; (v) you may not use the Services or the Content other than for their intended purpose; and (vi) you may not reproduce, prepare derivative works from, distribute or display the Services or any Content, except as provided herein. Except as expressly permitted above, any use of any portion of the Services or Content without the prior written permission of OpenVessel is strictly prohibited and will terminate the license granted herein. Any such unauthorized use may also violate applicable laws, including without limitation copyright and trademark laws. Unless explicitly stated herein, nothing in these Terms may be construed as conferring any license to intellectual property rights, whether by estoppel, implication or otherwise.
          </p>
        </li>
      </ol>
      <p>
        <strong>3.2 Eligibility</strong> &ndash; The Services are for your own use only, and you may not resell, lease, or provide them in any other way to anyone else. You must be of the age of majority in your jurisdiction to use our Services. The Services are not directed at children under 13 years old, and we do not knowingly collect or maintain personal information from children under 13 years of age.
      </p>
      <p>If you are under the age of 18, or under the age of majority where you live, you represent that your legal guardian has reviewed and agreed to these Terms. </p>
      <p>You may not use our Services if you are not allowed to receive products, including services or software, from the United States, or if Services are prohibited by law in your home jurisdiction. For example, if you are located in a country embargoed by the United States or if you are on the U.S. Treasury Department&rsquo;s list of Specially Designated Nationals.</p>
      <p>
        <strong>4. Purchasing and Receiving NFTs</strong>
      </p>
      <p>4.1 The App allows you to purchase, receive and collect NFTs as follows: </p>
      <p>(a) By buying NFTs from the relevant publisher within a Connected App; (b) By buying NFTs from other users in Vessel&rsquo;s primary or secondary marketplace (collectively, the &ldquo;Marketplace&rdquo;); and (c) by receiving NFTs via a Connected App. There are different types of NFTs available for purchase on Vessel, and sellers of NFTs reserve the right to modify the types, prices and numbers of NFTs available at their discretion. </p>
      <p>
        <strong>5. Payment, Transaction Fees, and Taxes</strong>
      </p>
      <p>5.1 Transactions on Vessel. Any transactions that you engage in via Vessel will be conducted solely through the Vessel Blockchain. We have no control over these transactions, nor do we have the ability to reverse transactions. We have no liability to you or to any other person or entity for any claims or damages that may arise as a result of transactions that you engage in via Vessel, or any transactions that you conduct via the Vessel Blockchain. We will not provide any refunds for any purchases that you make via Vessel &ndash; whether for NFTs or anything else.</p>
      <p>5.2 Vessel Coins and Tilia Tokens. When purchasing and using Vessel Coins via Vessel, you are effectively purchasing and using Tilia Tokens issued by our payment service provider, Tilia Inc., and are subject to all of the terms and conditions that apply to tokens issued by Tilia Inc. By purchasing and using Tilia Tokens (which must necessarily accompany and mirror your Vessel Coin purchase and usage), you agree to the following terms of service: https://www.tilia.io/legal/tos .</p>
      <p>5.3 Transaction Fees. Every transaction on Vessel requires the payment of a transaction fee (&ldquo;Fee&rdquo;) This means that you will need to pay a Fee for each transaction that you engage in via Vessel. You will be solely responsible for any Fees for any transaction that you engage in via Vessel.</p>
      <p>5.4 Taxes. You will be solely responsible to pay any and all sales, use, value-added and other taxes associated with your use of Vessel, except for taxes on our net income. </p>
      <p>
        <strong>6. Intellectual Property Rights</strong>
      </p>
      <p>
        <strong>6.1 Ownership of NFTs.</strong> When you purchase a NFT in accordance with these Terms, you own the NFT, meaning you have the right to sell it or give it away. Ownership of NFTs is mediated entirely through the Vessel Blockchain.
      </p>
      <p>YOUR OWNERSHIP OF NFTS WILL BE RECOGNIZED BY US ONLY IF YOU HAVE PURCHASED OR OTHERWISE RIGHTFULLY ACQUIRED SUCH NFT FROM A CONNECTED APP OR MARKETPLACE AND NOT BY WAY OF ANY OF THE ACTIVITIES PROHIBITED IN THE CODE OF CONDUCT SET FORTH BELOW IN SECTION 9.1. </p>
      <p>
        <strong>6.2 We own Vessel; Restrictions</strong>. Except for the limited license granted above, we and our licensors retain all legal right, title and interest in and to all other elements of Vessel, and all intellectual property rights therein (including, without limitation, all art, designs, systems, methods, information, software, &ldquo;look and feel&rdquo;, organization, compilation of the content, data, and all other elements of Vessel (collectively, the &ldquo;Vessel Materials&rdquo;). All Vessel Materials are the copyrighted property of OpenVessel or our licensors, and all trademarks, service marks, and trade names associated with Vessel or otherwise contained in the Vessel Materials are proprietary to OpenVessel or our licensors. You agree not to modify, create derivative works of, decompile, or otherwise attempt to extract source code from Vessel. For the sake of clarity, you understand and agree that your purchase of a NFT does not give you any rights or licenses in or to the Vessel Materials that may be associated with a NFT that you have purchased or otherwise rightfully acquired from a legitimate source, where proof of such purchase is recorded on the Vessel Blockchain (an &ldquo;Owned NFT&rdquo;).
      </p>
      <p>
        <strong>6.3 User License to Creative.</strong> Subject to your continued compliance with these Terms, we and our licensors grant you a worldwide, non-exclusive, non-transferable, royalty-free license to use, copy, and display any art, design, and drawings (in any form or media, including, without limitation, video or photographs) that may be associated with an Owned NFT (&ldquo;Creative&rdquo;), solely for the following purposes: (a) for your own personal, non-commercial use; or (b) as part of the Vessel marketplace that permits the purchase and sale of your NFTs. The license granted in this Section 6.3 applies only to the extent that you continue to Own the applicable Owned NFT. If at any time you sell, transfer, or otherwise dispose of your Owned NFT for any reason, the license granted in this section will immediately expire with respect to that NFT without the requirement of notice, and you will have no further rights in or to the Creative for that NFT.
      </p>
      <p>
        <strong>6.4 Third Party IP.</strong> If the Creative associated with your Owned NFT contains any third party patent rights, copyrights, trade secrets, trademarks, know-how or any other intellectual property rights recognized in any country or jurisdiction in the world (&ldquo;Third Party IP&rdquo;), you agree that you will not have the right to use such Third Party IP in any way except as incorporated in the Creative, and subject to the license and restrictions contained herein, provided that we inform you of such additional restrictions in writing.
      </p>
      <p>
        <strong>6.5 Restrictions.</strong> You agree that you may not, nor permit any third party to do or attempt to do any of the foregoing without our or the applicable licensor&rsquo;s prior written consent: (a) use the Creative for your Owned NFT to advertise, market, or sell any third party product or service; (b) use the Creative for your Owned NFT in connection with any form of media that depicts adult sexual content, violence, acts or hate, acts prohibited by applicable laws or that could reasonably infringe upon the rights of others; (c) use the Creative for your Owned NFT except as expressly permitted in these Terms; (d) sell, distribute for commercial gain, or otherwise commercialize merchandise that includes or incorporates the Creative for your Owned NFT; or (e) attempt to acquire any intellectual property rights in or to the Creative for your Owned NFT.
      </p>
      <p>
        <strong>6.6 Feedback</strong>. If you provide us with any suggestions for enhancement or feedback regarding the Services, you hereby grant us a perpetual, transferable, sub-licensable, royalty-free, irrevocable, worldwide license to use such suggestions and feedback, including by incorporating your suggestions or feedback in the Services, without any obligation to compensate you. To the extent permitted by applicable law, you waive any moral rights you may have in such suggestions and feedback.
      </p>
      <p>
        <strong>7. Your Account</strong>
      </p>
      <ol>
        <li>
          <p>
            <strong> Registration; Registration Data. </strong>Subject to your continued compliance with these Terms, you may register for one (1) account with Vessel. If you have been previously suspended, removed, or otherwise deactivated from using the Services, you may not create or register another account to use the Services. You agree to (a) provide accurate, current and complete information about you as may be prompted by any registration forms on the Services (&ldquo;Registration Data&rdquo;); and (b) maintain and promptly update the Registration Data, and any other information you provide to Vessel. We are not responsible for any loss you suffer as a result of your not keeping your Registration Data current.
          </p>
        </li>
        <li>
          <p>
            <strong>Your Account Security. </strong>Your account creation and registration will be based on the phone number you provide to us. You are responsible for maintaining the security of your account and device and to supervise use of your account. You must notify us immediately via the contact information provided below if you suspect any unauthorized use of or access to your account. You&rsquo;re responsible for all activities that occur under your account, whether or not you know about them. We assume that anyone using the Services or transacting through your account is you.
          </p>
        </li>
      </ol>
      <p>
        <strong>8. Privacy Policy </strong>
      </p>
      <p>Please refer to our Privacy Policy available at <a href="https://www.getvessel.io/post/vessel-privacy-policy" target="_blank" rel="noopener noreferrer" data-hook="linkViewer">
          <u>https://www.getvessel.io/post/vessel-privacy-policy</u>
        </a> for information on how we collect, use and disclose information from you, your computer and your mobile device. You understand that through your use of our Services you acknowledge the collection, use and sharing of this information as described in our Privacy Policy. If you don&rsquo;t agree with the Privacy Policy, then you must not use or stop using our Services. </p>
      <p>
        <strong>9. Code of Conduct and Our Enforcement Rights </strong>
      </p>
      <p>9.1 Code of Conduct. </p>
      <p>When you access or use any Service, you agree that you will not: </p>
      <ul>
        <li>
          <p>Violate any law, rule or regulation.</p>
        </li>
        <li>
          <p>Interfere with or disrupt another user&rsquo;s use of a Service. This includes disrupting the normal flow of Vessel, chat or dialogue within a Service by, for example, using vulgar or harassing language, being abusive, excessive shouting (all caps), spamming, flooding or hitting the return key repeatedly.</p>
        </li>
        <li>
          <p>Harass, threaten, bully, embarrass, spam or do anything else to another player that is unwanted, such as repeatedly sending unwanted messages or making personal attacks or statements about race, sexual orientation, religion, heritage, etc. Hate speech is not tolerated.</p>
        </li>
        <li>
          <p>Contribute User Content or organize or participate in any activity or group that is inappropriate, abusive, harassing, profane, threatening, hateful, offensive, vulgar, obscene, sexually explicit, defamatory, infringing, invades another's privacy, or is otherwise reasonably objectionable.</p>
        </li>
        <li>
          <p>Publish, post, upload or distribute User Content or content that is illegal or that you don't have permission to freely distribute.</p>
        </li>
        <li>
          <p>Publish, post, upload or distribute any content, such as a topic, name, screen name, avatar, persona, or other material or information, that OpenVessel (acting reasonably and objectively) determines is inappropriate, abusive, hateful, harassing, profane, defamatory, threatening, hateful, obscene, sexually explicit, infringing, privacy-invasive, vulgar, offensive, indecent or unlawful.</p>
        </li>
        <li>
          <p>Post a message for any purpose other than personal communication. Prohibited messages include advertising, spam, chain letters, pyramid schemes and other types of solicitation or commercial activities.</p>
        </li>
        <li>
          <p>Impersonate another person or falsely imply that you are an OpenVessel employee or representative.</p>
        </li>
        <li>
          <p>Improperly use in-app support or complaint buttons or make false reports to Open Vessel staff.</p>
        </li>
        <li>
          <p>Attempt to obtain, or phish for, a password, account information, or other private information from anyone else on the Services.</p>
        </li>
        <li>
          <p>Make use of any payment methods to access or purchase Services for fraudulent purposes, without permission of the authorized owner, or otherwise in connection with a criminal offence or other unlawful activity.</p>
        </li>
        <li>
          <p>Use any robot, spider or other automated device or process to access the Services for any purpose or copy any material on this website.</p>
        </li>
        <li>
          <p>Use or distribute unauthorized software programs or tools, such as "auto" software programs, "macro" software programs, "cheat utility" software program or applications, exploits, cheats, or any other app hacking, altering or cheating software or tool.</p>
        </li>
        <li>
          <p>Modify any file or any other part of the Services that OpenVessel does not specifically authorize you to modify.</p>
        </li>
        <li>
          <p>Use exploits, cheats, undocumented features, design errors or problems in a Service.</p>
        </li>
        <li>
          <p>Use or distribute counterfeit software or content, including virtual goods.</p>
        </li>
        <li>
          <p>Attempt to use a Service on or through any service that is not controlled or authorized by OpenVessel.</p>
        </li>
        <li>
          <p>Sell, buy, trade or otherwise transfer or offer to transfer you Vessel account, any personal access to the Services, either within a Service or on a third party website, or in connection with any out-of-app transaction, unless expressly authorized by Vessel.</p>
        </li>
        <li>
          <p>Use a Service in a country in which OpenVessel is prohibited from offering such services under applicable export control laws.</p>
        </li>
        <li>
          <p>If a Service requires you to create a "user name" or a "persona" to represent you in app and online, you should not use your real name and may not use a user name or persona that is used by someone else or that OpenVessel determines is vulgar or offensive or violates someone else's rights.</p>
        </li>
        <li>
          <p>Engage in any other activity that significantly disturbs the peaceful, fair and respectful environment of a Service.</p>
        </li>
        <li>
          <p>Use information about users publicly available in any Service for any purpose unrelated to the Service, including to attempt to identify such users in the real world.</p>
        </li>
        <li>
          <p>Interfere with or disrupt any Service or any server or network used to support or provide a Service, including any hacking or cracking into a Service.</p>
        </li>
        <li>
          <p>Use any software or program that damages, interferes with or disrupts a Service or another's computer or property, such as denial of service attacks, spamming, hacking, or uploading computer viruses, worms, Trojan horses, cancelbots, spyware, corrupted files and time bombs.</p>
        </li>
        <li>
          <p>Acquire any NFTs through inappropriate or illegal means (including, among other things, using a stolen credit card, or a payment method that you do not have the right to use, or purchasing a NFT and then attempting to charge the cost back to your payment method while still maintaining ownership or control of the NFT or selling, gifting or trading the NFT to someone else)</p>
        </li>
        <li>
          <p>The purchase, sale or facilitation of the purchase and sale of any user&rsquo;s account(s) to other users or third parties for cash or other consideration outside of Vessel.</p>
        </li>
        <li>
          <p>Promote, encourage or take part in any prohibited activity described above.</p>
        </li>
        <li>
          <p>Create user accounts by automated means or under false or fraudulent pretenses.</p>
        </li>
        <li>
          <p>Impersonate another person (via the use of an email address or otherwise).</p>
        </li>
        <li>
          <p>Use, employ, operate, or create a computer program to simulate the human behavior of a user (&ldquo;Bots&rdquo;).</p>
        </li>
        <li>
          <p>Use, employ, or operate Bots or other similar forms of automation to engage in any activity or transaction on Vessel.</p>
        </li>
      </ul>
      <p>9.2 Effect of Your Breaches. If you engage in any of the activities set forth above in this Section 9.1, we may, at our sole and absolute discretion, without notice or liability to you, and without limiting any of our other rights or remedies at law or in equity, immediately suspend or terminate your user account and/or delete your NFTs from Vessel. If we delete your NFTs&rsquo; images and descriptions from Vessel, such deletion will not affect your ownership rights in any NFTs that you already own, but you will not receive a refund of any amounts you paid for those NFTs. </p>
      <p>
        <strong>10.</strong>
        <strong>Your Interactions with Other Users </strong>
      </p>
      <p>You are solely responsible for your interactions with other users with whom you interact through the Services. If you have a problem with another user, we are not required to get involved, but we can if we desire. You will fully cooperate with us to investigate any suspected unlawful, fraudulent or improper activity, including without limitation granting us access to any portion of your account.</p>
      <p>If you have a dispute with another user, you release us (and our employees, officers, directors, agents, affiliates and joint ventures) from responsibility, claims, demands, and/or damages (actual or consequential) of every kind and nature, whether known or unknown, resulting from that dispute or connected to that dispute. This includes damages for loss of profits, goodwill, use, or data. </p>
      <p>If you are located in California, you waive California Civil Code &sect;1542, which says: &ldquo; <strong>A general release does not extend to claims which the creditor does not know or suspect to exist in his or her favor at the time of executing the release, which if known by him or her must have materially affected his settlement with the debtor</strong>.&rdquo; </p>
      <p>If you live outside of California, you waive any other statute, law, or rule of similar effect in your jurisdiction.</p>
      <p>
        <strong>11. User Content </strong>
      </p>
      <p>We may permit you or other users to submit, upload, publish, transmit, or otherwise make available to us materials, data, information, communications, pictures and sounds using the Services (&ldquo;User Content&rdquo;). Your User Content remains your property. However, once you make User Content available, you thereby grant to us an irrevocable, perpetual, transferable, sublicensable, fully paid-up, royalty-free, worldwide right and license to copy, reproduce, fix, adapt, modify, create derivative works from, manufacture, commercialize, publish, distribute, sell, license, sublicense, transfer, lease, transmit, publicly display, publicly perform, provide access to electronically, broadcast, communicate to the public by telecommunication, display, perform, enter into computer memory, and use and practice, in any way, your User Content as well as all modified and derivative works thereof in connection with the Services, including marketing and promotion of the Services, without notice to or consent from you, and without compensation to you or any other person or entity. You further hereby grant to OpenVessel the unconditional, irrevocable right to use and exploit your name, likeness and any other information or material submitted or transmitted to us in connection with any User Content, without any obligation to you. Except as prohibited by law, you waive any rights of attribution and/or any moral rights you may have in your User Content, regardless of whether User Content is altered or changed in any manner.</p>
      <p>As a user, you are personally and solely responsible for all information posted and/or sent, transmitted, or provided to others by you in connection with our Services, including but not limited to User Content posted in forums, blogs, and app chat features. Please do not use these mediums to share or post information you wish to remain confidential. You represent, warrant, and affirm that your User Content is accurate, that it does not violate any applicable laws or rights of others, that you have the appropriate permissions or rights from any third parties whose information or intellectual property is comprised in the User Content, and that such User Content is free of malware, viruses, adware, spyware or any malicious code. You agree not to submit and/or transmit any User Content that is unlawful, tortious, defamatory, libelous, obscene, threatening, harassing, abusive, violent, hateful, racist, or otherwise objectionable or inappropriate. We do not assume any liability or responsibility for any user behavior or for monitoring User Content or conduct in connection with the Services. We may, but are not obligated to, review, monitor, reject, deny, or remove User Content, at our sole discretion and at any time and for any reason, without notice to you.</p>
      <p>
        <strong>12. DMCA/Copyright Policy</strong>
      </p>
      <p>We respect the intellectual property rights of others and ask that you do as well. We respond to notices of alleged copyright infringement that comply with the US Digital Millennium Copyright Act (&ldquo;DMCA&rdquo;) and similar or equivalent other local laws that may apply. For more information, please go to our Copyright Page on our Site to review our notification guidelines. We reserve the right to terminate any player&rsquo;s access to the Services if we determine that the player is a &ldquo;repeat infringer.&rdquo; We do not have to notify the player before we do this.</p>
      <p>
        <strong>13. Third Party Content; Links to Third Party Websites or Resources </strong>
      </p>
      <p>The Services may include third party promotions, content or links to third-party apps, websites or resources. We provide this content and these links only as a convenience and are not responsible for the content, products or services on or available from those websites or resources or links displayed on such websites. You acknowledge sole responsibility for and assume all risk arising from, your use of any third-party websites or resources. </p>
      <p>Your business dealings or correspondence with, or participation in promotions of, parties other than OpenVessel, and any terms, conditions, warranties or representations associated with such dealings, are solely between you and such third party. All third party content, including without limitation, any descriptions and images of, and references to, third-party products or services available in connection with the Services, promotion or coupon, or other information is provided on or through the Services for informational purposes only, and should not be construed to indicate that any such third party content is endorsed by us, nor is there any representation or warranty by us that the third party content is reliable, accurate, timely, complete, effective, or safe for your use. All third party content, including without limitation, any descriptions, images, references, features, content, specifications, products and prices of products and services and values of any coupon, offer or promotion featured through the Services are subject to change at any time without notice.</p>
      <p>
        <strong>14. Our Communication with You</strong>
      </p>
      <ol>
        <li>
          <p>We will send notices to the email address you provide to us as part of your account set-up. As part of the Services, you may receive push notifications, text messages, alerts, emails or other types of messages directly sent to you outside or inside Services (&ldquo;Messages&rdquo; or &ldquo;Messaging&rdquo;). We will obtain your consent for marketing text and/or SMS messages separately and will provide you any necessary or required information relating to marketing text and/or SMS messages at that time. Some Messages are transactional in nature and you cannot unsubscribe from them. We are not responsible for delayed or undelivered messages due to carrier interruptions or your failure to update your contact information. Please be aware that messaging fees may apply depending on the message plan you have with your wireless carrier. If you have any questions about your text plan or data plan, it is best to contact your wireless provider. You are responsible for keeping your email and phone number current to avoid missing notices about your account or changes to our Terms or a notice regarding termination of the Program.</p>
        </li>
      </ol>
      <p>You have control over the Messages settings, and can opt in or out of these Messages through the features available for each specific means of Messaging, such as through the Services or through your devices&rsquo; operating system. You can cancel the SMS service at any time. Just text &ldquo;STOP&rdquo; to the short code. After you send the SMS message &ldquo;STOP&rdquo; to us, we will send you an SMS message to confirm that you have been unsubscribed. After this, you will no longer receive SMS messages from us. If you want to join again, just sign up as you did the first time and we will start sending SMS messages to you again. If you are experiencing issues with the messaging program you can reply with the keyword HELP for more assistance, or you can get help directly at <a href="mailto:support@openvessel.io" target="_blank" rel="noopener noreferrer" data-hook="linkViewer">
          <u>support@openvessel.io</u>
        </a>. </p>
      <ol>
        <li>
          <p>If you have any questions regarding privacy, please read our Privacy Policy.</p>
        </li>
      </ol>
      <p>
        <strong>15. Termination </strong>
      </p>
      <p>
        <strong>15.1 We Terminate.</strong> We may terminate your access to and use of the Services, at our sole discretion, at any time and without notice to you. Upon any termination, discontinuation or cancellation of Services or your account, all provisions of these Terms which by their nature should survive will survive, including, without limitation, ownership provisions, warranty disclaimers, limitations of liability, and dispute resolution provisions. Termination of these Terms will be in addition to any other remedies we may have at law or in equity.
      </p>
      <p>
        <strong>15.2 You Terminate</strong>. You may terminate these Terms and cancel your account at any time by emailing us at <a href="mailto:support@openvessel.io" target="_blank" rel="noopener noreferrer" data-hook="linkViewer">
          <u>support@openvessel.io</u>
        </a>. If you cancel your account, or otherwise terminate these Terms, you will not receive any refunds for any purchases that you might make on or through Vessel.
      </p>
      <p>
        <strong>15.3 Referral to Governmental Authority</strong>. We have the right, without provision of prior notice, to take appropriate legal action, including, without limitation, referral to law enforcement or regulatory authority, or notifying the harmed party of any illegal or unauthorized use of Vessel. Without limiting the foregoing, we have the right to fully cooperate with any law enforcement authorities or court order requesting or directing us to disclose the identity or other information of anyone using Vessel.
      </p>
      <p>
        <strong>15.4 Effect of Termination</strong>. Upon any termination, discontinuation or cancellation of Services or your account, all provisions of these Terms which by their nature should survive will survive, including, without limitation, warranty disclaimers, limitations of liability, and dispute resolution provisions. Upon any termination or expiration of these Terms, whether by you or us, you may no longer have access to information that you have posted on Vessel or that is related to your account, and you acknowledge that we will have no obligation to maintain any such information in our databases or to forward any such information to you or to any third party.
      </p>
      <p>
        <strong>16. Indemnity </strong>
      </p>
      <p>You agree to defend, indemnify and hold harmless OpenVessel, its affiliates, officers, employees, and partners arising from or in any way related to any third party claims relating to from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses or fees (including reasonable attorneys&rsquo; fees) arising out of or relating to your violation of these Terms or your use of the Services other than as expressly authorized in these Terms, your violation of the rights of a third party, or any negligent acts, omissions or intentional wrongdoing by you. OpenVessel will take exclusive charge of the defense of any legal action for which you are required to indemnify us under this section, at your expense. You agree to cooperate in our defense of these actions. We will use reasonable efforts to notify you of any claim for which you are obligated to indemnify us. The following Warranty Disclaimers, Limitation of Liability and Indemnification provisions shall apply to the fullest extent permitted by law. </p>
      <p>
        <strong>17. Warranty Disclaimers</strong>
      </p>
      <p>THE SERVICES AND CONTENT ARE PROVIDED &ldquo;AS IS,&rdquo; WITHOUT WARRANTY OF ANY KIND. WITHOUT LIMITING THE FOREGOING, WE EXPLICITLY DISCLAIM ANY WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, QUIET ENJOYMENT, NON-INFRINGEMENT OR AVAILABILITY, AND ANY WARRANTIES ARISING OUT OF COURSE OF DEALING OR USAGE OF TRADE. WE MAKE NO WARRANTY THAT THE SERVICES WILL MEET YOUR REQUIREMENTS OR BE AVAILABLE ON AN UNINTERRUPTED, SECURE, OR ERROR-FREE BASIS. WE MAKE NO WARRANTY REGARDING THE QUALITY, ACCURACY, TIMELINESS, TRUTHFULNESS, COMPLETENESS OR RELIABILITY OF ANY CONTENT AVAILABLE IN THE SERVICES. SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OF IMPLIED WARRANTIES IN CONTRACTS WITH CONSUMERS, SO SOME OR ALL OF THE ABOVE EXCLUSIONS MAY NOT APPLY TO YOU.</p>
      <p>YOU ACCEPT THE INHERENT SECURITY RISKS OF PROVIDING INFORMATION AND DEALING ONLINE OVER THE INTERNET, AND AGREE THAT WE HAVE NO LIABILITY OR RESPONSIBILITY FOR ANY BREACH OF SECURITY UNLESS IT IS DUE TO OUR GROSS NEGLIGENCE.</p>
      <p>WE WILL NOT BE RESPONSIBLE OR LIABLE TO YOU FOR ANY LOSSES YOU INCUR AS THE RESULT OF YOUR USE OF THE VESSEL BLOCKCHAIN, OR YOUR USE OF VESSEL, INCLUDING BUT NOT LIMITED TO ANY LOSSES, DAMAGES OR CLAIMS ARISING FROM: (I) USER ERROR, SUCH AS FORGOTTEN PASSWORDS OR INCORRECTLY CONSTRUED SMART CONTRACTS OR OTHER TRANSACTIONS; (II) SERVER FAILURE OR DATA LOSS; (III) CORRUPTED WALLET FILES; OR (IV) UNAUTHORIZED ACCESS OR ACTIVITIES BY THIRD PARTIES, INCLUDING, BUT NOT LIMITED TO, THE USE OF VIRUSES, PHISHING, BRUTE-FORCING OR OTHER MEANS OF ATTACK AGAINST THE APP, THE VESSEL BLOCKCHAIN, OR ANY ELECTRONIC WALLET.</p>
      <p>NFTS ARE INTANGIBLE ASSETS THAT EXIST ONLY BY VIRTUE OF THE OWNERSHIP RECORD MAINTAINED IN THE VESSEL NETWORK. ALL SMART CONTRACTS ARE CONDUCTED AND OCCUR ON THE DECENTRALIZED LEDGER WITHIN THE VESSEL NETWORK. WE HAVE NO CONTROL OVER AND MAKE NO GUARANTEES OR PROMISES WITH RESPECT TO SMART CONTRACTS.</p>
      <p>WE ARE NOT RESPONSIBLE FOR LOSSES DUE TO BLOCKCHAINS OR ANY OTHER FEATURES OF THE VESSEL NETWORK, OR ANY ELECTRONIC WALLET, INCLUDING BUT NOT LIMITED TO LATE REPORT BY DEVELOPERS OR REPRESENTATIVES (OR NO REPORT AT ALL) OF ANY ISSUES WITH THE BLOCKCHAIN SUPPORTING THE VESSEL NETWORK, INCLUDING FORKS, TECHNICAL NODE ISSUES, OR ANY OTHER ISSUES HAVING FUND LOSSES AS A RESULT</p>
      <p>
        <strong>18. Assumption of Risk. </strong>You accept and acknowledge that:
      </p>
      <p>18.1 Value. The prices of digital blockchain assets are extremely volatile and subjective and collectible blockchain assets have no inherent or intrinsic value. Fluctuations in the price of other NFTs could materially and adversely affect the value of your NFTs, which may also be subject to significant price volatility. We cannot guarantee that any NFTs purchased will retain their original value, as the value of collectibles is inherently subjective and a variety of factors may materially impact the value and desirability of any particular NFT.</p>
      <p>18.2 Use of the Vessel Blockchain. Vessel does not store, send, or receive NFTs. This is because NFTs exist only by virtue of the ownership record maintained on Vessel&rsquo;s supporting blockchain in the Vessel network. Any transfer of NFTs occurs within the supporting blockchain in the Vessel network, and not on Vessel. </p>
      <p>18.3 Subjectivity of NFTs. NFTs have no inherent or intrinsic value. The value of each NFT is inherently subjective, in the same way the value of other collectible NFTs is inherently subjective.</p>
      <p>18.4 Taxes. You are solely responsible for determining what, if any, taxes apply to your NFT-related transactions. We are not responsible for determining the taxes that apply to your transactions on Vessel.</p>
      <p>18.5 Inherent Risks. There are risks associated with using an Internet-based currency, including, but not limited to, the risk of hardware, software and Internet connections, the risk of malicious software introduction, and the risk that third parties may obtain unauthorized access to information stored within your electronic wallet. You accept and acknowledge that we will not be responsible for any communication failures, disruptions, errors, distortions or delays you may experience when using the Vessel Blockchain, however caused.</p>
      <p>18.5 Regulatory Uncertainty. The regulatory regime governing blockchain technologies and NFTs is uncertain, and new regulations or policies may materially adversely affect the development of Vessel and the utility of NFTs. </p>
      <p>18.6 Software Risks. Upgrades to the Vessel Blockchain, a hard fork in the Vessel Blockchain, or a change in how transactions are confirmed on the Vessel Blockchain may have unintended, adverse effects on all blockchains using the Vessel Blockchain&rsquo;s NFT standard. </p>
      <p>
        <strong>19. Limitation of Liability </strong>
      </p>
      <p>YOU ACKNOWLEDGE THAT NEITHER WE NOR ANY OTHER PARTY INVOLVED IN CREATING, PRODUCING, OR DELIVERING THE SERVICES WILL BE LIABLE FOR ANY INCIDENTAL, SPECIAL, EXEMPLARY OR CONSEQUENTIAL DAMAGES, INCLUDING LOST PROFITS, LOSS OF DATA OR GOODWILL, SERVICE INTERRUPTION, COMPUTER DAMAGE OR SYSTEM FAILURE OR THE COST OF SUBSTITUTE SERVICES ARISING OUT OF OR IN CONNECTION WITH THESE TERMS OR FROM THE USE OF OR INABILITY TO USE THE SERVICES OR CONTENT, WHETHER BASED ON WARRANTY, CONTRACT, TORT (INCLUDING NEGLIGENCE), PRODUCT LIABILITY OR ANY OTHER LEGAL THEORY, AND WHETHER OR NOT WE HAVE BEEN INFORMED OF THE POSSIBILITY OF SUCH DAMAGE, EVEN IF A LIMITED REMEDY SET FORTH HEREIN IS FOUND TO HAVE FAILED OF ITS ESSENTIAL PURPOSE. SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OR LIMITATION OF LIABILITY FOR CONSEQUENTIAL OR INCIDENTAL DAMAGES, SO THE ABOVE LIMITATION MAY NOT APPLY TO YOU. </p>
      <p>TO THE MAXIMUM EXTENT PERMISSIBLE UNDER APPLICABLE LAWS, THE TOTAL LIABILITY OF STUDIO IS LIMITED TO THE TOTAL AMOUNT YOU HAVE LAWFULLY PAID US IN FEES THE THREE (3) MONTH PERIOD IMMEDIATELY PRECEDING THE DATE ON WHICH YOU FIRST ASSERT ANY SUCH CLAIM. IF YOU HAVE NOT PAID US ANY AMOUNT IN SUCH THREE (3) MONTH PERIOD, YOUR SOLE AND EXCLUSIVE REMEDY FOR ANY DISPUTE WITH STUDIO IS TO STOP USING THE SERVICES AND TO CANCEL YOUR ACCOUNT IF YOU HAVE ONE AND FORFEIT ANY BENEFITS OR NFTS IN YOUR ACCOUNT. </p>
      <p>Certain jurisdictions do not allow some of the exclusion of certain warranties and liability set forth above. Therefore, the above limitations and disclaimers may not apply to you, and you may have additional rights. To the extent that we may not, as a matter of applicable law, disclaim any warranty or limit its liability as set forth herein, the scope of such warranty and the extent of our liability will be the minimum permitted under such applicable law. </p>
      <p>
        <strong>20. Time Limitation on Claims</strong>
      </p>
      <p>You agree that any claim you may have arising out of or relating to your relationship with us must be filed within one year after such claim arose; otherwise, your claim is permanently barred. </p>
      <p>
        <strong>21. Governing Law and Venue</strong>
      </p>
      <p>These Terms and any action related thereto will be governed by the laws of the State of California without regard to its choice of law or conflict of law principles. </p>
      <p>Further, you and we agree to the jurisdiction of the courts in Santa Clara County, California to resolve any dispute, claim, or controversy that relates to or arises in connection with the Services (and any non-contractual disputes/claims relating to or arising in connection with them). </p>
      <p>
        <strong>22. Dispute Resolution</strong>
      </p>
      <p>If you are having a problem with a Service, You may find resolution by clicking on the &ldquo;Support&rdquo; or &ldquo;Contact Us&rdquo; link on that Service within settings or by emailing <a href="mailto:support@openvessel.io" target="_blank" rel="noopener noreferrer" data-hook="linkViewer">
          <u>support@openvessel.io</u>
        </a>. Before initiating any arbitration or court proceeding, first contact our support team to address your issue. Most disputes can be resolved that way. </p>
      <p>
        <strong>23. Agreement to Arbitrate; Class Action and Representative Action Waiver</strong>
      </p>
      <p>
        <u>PLEASE READ THIS SECTION CAREFULLY. IT AFFECTS YOUR RIGHTS AND INCLUDES WAIVER OF A TRIAL BY JURY IN A COURT AND OF THE ABILITY TO BRING ANY CLASS ACTIONS OR REPRESENTATIVE ACTIONS.</u>
      </p>
      <p>
        <u>Overview</u>
      </p>
      <p>In the event of any controversy or claim arising out of or relating to these Terms, including any question regarding its existence, validity, termination or breach thereof, or your use of the Services, the parties hereto shall consult and negotiate with each other and, recognizing their mutual interests, attempt to reach a satisfactory solution. Most user concerns can be resolved by contacting our customer support team at <a href="mailto:support@openvessel.io" target="_blank" rel="noopener noreferrer" data-hook="linkViewer">
          <u>support@openvessel.io</u>
        </a> . In the unlikely event that we are unable to resolve your concerns and a dispute remains, this Section explains how you and we agree to resolve it. As explained in more detail below, we each agree to resolve any dispute between us through binding arbitration or small claims court instead of in courts of general jurisdiction. </p>
      <p>If there is a determination that applicable law precludes the arbitration of to any claim, cause of action or requested remedy, then that claim, cause of action or requested remedy, and only that claim, cause of action or requested remedy, will be severed from this agreement to arbitrate and will be brought in a court of competent jurisdiction. In the event that a claim, cause of action or requested remedy is severed pursuant to this paragraph, then you and we agree that the claims, causes of action or requested remedies that are not subject to arbitration will be stayed until all arbitrable claims, causes of action and requested remedies are resolved by the arbitrator.</p>
      <p>
        <u>Agreement to Arbitrate; Exceptions</u>
      </p>
      <p>If we cannot resolve our dispute through customer support, YOU AND WE AGREE TO RESOLVE ALL DISPUTES AND CLAIMS BETWEEN US IN INDIVIDUAL BINDING ARBITRATION, INCLUDING CLAIMS CONCERNING ANY ASPECT OF THE RELATIONSHIP BETWEEN US, YOUR DECISION TO DOWNLOAD VESSEL, YOUR USE OF THE SERVICES, ANY USER CONTENT OR YOUR ACCOUNT. This Agreement to Arbitrate is intended to be interpreted broadly, and applies to all legal claims under any legal theory (whether based in contract, tort, statute, fraud, misrepresentation, or any other legal theory), and applies to any disputes or claims that you assert or that arise even after you stop using the Services or delete your account for the App, stop using the App, or delete the App application from your mobile device. This Agreement to Arbitrate also applies to any claims that are currently the subject of a purported class action litigation in which you are not a member of a certified class. You and we agree that the arbitrator shall have the exclusive authority to resolve any dispute relating to the interpretation, applicability or enforceability of the terms or formation of this contract, including whether any dispute between us is subject to this Agreement to Arbitrate (i.e., the arbitrator will decide the arbitrability of any dispute) and whether all or any part of these terms are void or voidable.</p>
      <p>An arbitration is a proceeding before a neutral arbitrator, instead of before a judge or jury. Arbitration is less formal than a lawsuit in court, and provides more limited discovery. It follows different rules than court proceedings, and is subject to very limited review by courts. The arbitrator will issue a written decision and provide a statement of reasons if requested by either party. YOU UNDERSTAND THAT YOU AND WE ARE GIVING UP THE RIGHT TO SUE IN COURT AND THE RIGHT TO HAVE A TRIAL BEFORE A JUDGE OR JURY.</p>
      <p>This Section 23, however, <u>does not apply</u> to the following types of claims or disputes, which you or we may bring in court in accordance with Section 21 above: </p>
      <p>(1) claims of infringement or other misuse of intellectual property rights, including such claims seeking injunctive relief; and</p>
      <p>(2) claims for preliminary injunctive relief for violations of Sections 3 and 9 herein.</p>
      <p>This Section does not prevent you from bringing your dispute to the attention of any federal, state, or local government agencies that can, if the law allows, seek relief from us for you. Also, any of us can bring a claim in small claims court either in Santa Clara County, California or the county where you live, or some other place we both agree on, if such claims meets all the requirements to be brought in that court.</p>
      <p>The Federal Arbitration Act applies to this Section 23. The arbitration will be governed by the Consumer Arbitration Rules (the &ldquo;Rules&rdquo;) of the American Arbitration Association (&ldquo;AAA&rdquo;) (including Rule 1(g) of those Rules that provides for arbitration through the submission of documents only/desk arbitration where no disclosed claims or counterclaims exceed $25,000), as modified by these Terms. The Rules are available at <a href="https://adr.org/" target="_blank" rel="noopener noreferrer" data-hook="linkViewer">
          <u>https://adr.org/</u>
        </a>. The arbitrator will be bound by these Terms. </p>
      <p>To start an arbitration proceeding, use the form on AAA&rsquo;s website ( <a href="https://adr.org/" target="_blank" rel="noopener noreferrer" data-hook="linkViewer">
          <u>https://adr.org/</u>
        </a>) or call the AAA at 1-800-778-7879. </p>
      <p>Any arbitration under this section that is required to take place in person will take place pursuant to the Rules, which provide that face-to-face proceedings be conducted at a location which is reasonably convenient to both parties with due consideration of their ability to travel and other pertinent circumstances. </p>
      <p>If your claim is for US$25,000 or less, we agree to reimburse your filing fee promptly upon being notified of the filing, or pay it for you if you are unable to pay it and we receive a written request from you. Also, if your claim is for US$25,000 or less, we agree to reimburse your share of the arbitration costs, including your share of arbitrator fees, at the conclusion of the proceeding, unless the arbitrator determines your claims are frivolous or your costs are unreasonable as determined by the arbitrator. If you seek more than US$25,000, the arbitration costs, including arbitrator compensation, will be split between you and us according to the Rules. Irrespective of the amount you seek, neither party shall be entitled to have their attorneys&rsquo; fees or costs paid by the other party, provided, however, that either party may seek to recover their attorneys&rsquo; fees and costs in arbitration if the arbitrator determines that the other party&rsquo;s claims (or counterclaims) are frivolous or the other party&rsquo;s costs are unreasonable.</p>
      <p>
        <u>For non-US Users:</u>
      </p>
      <p>In the event of any controversy or claim arising out of or relating to these Terms, including any question regarding its existence, validity, termination or breach thereof, the parties hereto shall consult and negotiate with each other and, recognizing their mutual interests, attempt to reach a satisfactory solution. If they do not reach settlement within a period of 60 days, then, upon notice by any party to the other(s), any unresolved controversy or claim shall be settled by arbitration administered by the International Centre for Dispute Resolution (&ldquo;ICDR&rdquo;) (www.icdr.org) in accordance with the provisions of its International Arbitration Rules. The place of arbitration shall be in London, England. The number of arbitrators shall be one. The language to be used in the arbitral proceedings shall be English. Except as may be required by law, neither a party nor its representatives may disclose the existence, content, or results of any arbitration hereunder without the prior written consent of OpenVessel. The European Union also operates an online dispute resolution platform which can be found at <a href="http://www.ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" data-hook="linkViewer">
          <u>www.ec.europa.eu/consumers/odr</u>
        </a>. </p>
      <p>
        <u>Class Action and Representative Action Waiver</u>
      </p>
      <p>For disputes arising between us and you, or any other user, you and we agree that we can only bring a claim against each other on an individual basis. NEITHER YOU NOR WE CAN BRING A CLAIM AS A PLAINTIFF OR CLASS MEMBER IN A CLASS ACTION, CLASS-WIDE ARBITRATION, CONSOLIDATED ACTION, OR REPRESENTATIVE ACTION. THE ARBITRATOR CANNOT COMBINE MORE THAN ONE PERSON&rsquo;S CLAIM INTO A SINGLE CASE, AND CANNOT PRESIDE OVER ANY CONSOLIDATED, CLASS, OR REPRESENTATIVE ARBITRATION PROCEEDING, UNLESS WE BOTH AGREE OTHERWISE IN WRITING. NONETHELESS, IF ANY PORTION OF THIS CLASS ACTION OR REPRESENTATIVE ACTION WAIVER IS DEEMED UNENFORCEABLE OR INVALID, THE ARBITRATOR SHALL HAVE AUTHORITY TO ISSUE ANY AND ALL REMEDIES AUTHORIZED BY LAW. </p>
      <p>YOU UNDERSTAND THAT YOU WOULD HAVE HAD A RIGHT TO LITIGATE THROUGH A COURT, TO HAVE A JUDGE OR JURY DECIDE YOUR CASE AND TO BE PARTY TO A CLASS OR REPRESENTATIVE ACTION. HOWEVER, YOU UNDERSTAND AND CHOOSE TO HAVE ANY CLAIMS DECIDED INDIVIDUALLY AND ONLY THROUGH ARBITRATION. </p>
      <p>
        <u>Service of Process</u>
      </p>
      <p>To initiate arbitration or any legal proceeding against us, you must serve initiating documents on our registered agent at: United Agent Group Inc., 3411 Silverside Road, Tatnall Building #104, Wilmington, Delaware 19810. </p>
      <p>
        <u>Changes to this Section 23</u>
      </p>
      <p>Notwithstanding any provision in these Terms to the contrary, we agree that if we make any future change to this Section 23, you may reject any such change by sending us written notice within 30 days of the change to: <a href="mailto:support@openvessel.io" target="_blank" rel="noopener noreferrer" data-hook="linkViewer">
          <u>support@openvessel.io</u>
        </a>. </p>
      <h5>
        <u>Survival</u>. This Section 23 shall survive termination of these Terms.
      </h5>
      <p>
        <strong>24. California Notice</strong>
      </p>
      <p>Under California Civil Code Section 1789.3, consumers from California are entitled to the following specific consumer rights notice: The Complaint Assistance Unit of the Division of Consumer Services of the California Department of Consumer Affairs may be contacted in writing at 1625 N. Market Blvd., Suite N 112, Sacramento, CA 95834, or by telephone at 1(916) 445-1254 or 1(800) 952-5210. We may be contacted in writing at Attn: &ldquo;Legal&rdquo;, 2100 Geng Road, Suite 210, Palo Alto, CA 94303. </p>
      <p>
        <strong>25. General Terms </strong>
      </p>
      <p>These Terms constitute the entire and exclusive understanding and agreement between us and you regarding the Services, and these Terms supersede and replace any and all prior oral or written understandings or agreements between us and you regarding the Services. If for any reason a court of competent jurisdiction finds any provision of these Terms invalid or unenforceable, that provision will be enforced to the maximum extent permissible and the other provisions of these Terms will remain in full force and effect. </p>
      <p>You may not assign or transfer these Terms, by operation of law or otherwise, without our prior written consent. Any attempt by you to assign or transfer these Terms, without such consent, will be null. We may freely assign or transfer these Terms without restriction. Subject to the foregoing, these Terms will bind and inure to the benefit of the parties, their successors and permitted assigns. </p>
      <p>Any notices or other communications provided by us under these Terms, including those regarding modifications to these Terms, will be given: (i) via email; or (ii) by posting to the Services. For notices made by e-mail, the date of receipt will be deemed the date on which such notice is transmitted. </p>
      <p>Our failure to enforce any right or provision of these Terms will not be considered a waiver of such right or provision. The waiver of any such right or provision will be effective only if in writing and signed by our duly authorized representative. Except as expressly set forth in these Terms, the exercise by either party of any of its remedies under these Terms will be without prejudice to its other remedies under these Terms or otherwise. </p>
      <p>If any provision of the Terms is for any reason held to be invalid, illegal or unenforceable by a court of competent jurisdiction, the remaining provisions of the Terms shall be unimpaired and shall remain in full force and effect.</p>
      <p>
        <strong>26. Contact Information </strong>
      </p>
      <p>If you have any questions about these Terms or the Services, please contact us at <a href="mailto:support@openvessel.io" target="_blank" rel="noopener noreferrer" data-hook="linkViewer">
          <u>support@openvessel.io</u>
        </a>. </p>
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

import React from 'react';

import { Disclosure, Transition } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/solid';
import { Fade } from 'react-reveal';

import { Background } from '@components/background';
import { Section } from '@components/layout';

const Highlights = () => {
  const faqs = [
    {
      id: 1,
      question: 'What is a Vessel Coin?',
      answer:
        'Vessel Coin is a new digital asset created by OpenVessel. Built on Blockchain technology, Vessel Coin can be purchased, earned, and redeemed for cash within the Vessel platform.',
    },
    {
      id: 2,
      question: 'Where can I buy Vessel Coin?',
      answer:
        'Vessel Coin is available to be purchased on the AppStore through our Vessel application.',
    },
    {
      id: 3,
      question: 'How do you redeem your Vessel Coin?',
      answer:
        "Tap “Withdraw” within the Profile Section of the Vessel app and fill out the required information to redeem your coins for cash. If Withdraw isn't in your profile page, please contact us at <a class='text-primary' href='mailto:support@openvessel.io'>support@openvessel.io</a> and we'll assist you with the withdrawal.",
    },
    {
      id: 4,
      question: 'Can Vessel Coin be redeemed on other exchanges or platforms?',
      answer:
        'No. Vessel Coin is not a traditional cryptocurrency. We are selling virtual currency which can only be redeemed for cash on our platform. Our token exists on the blockchain as a proof of record, not as a store of value.',
    },
    {
      id: 5,
      question: 'Will Vessel Coin fluctuate in value?',
      answer:
        'Vessel Coin will maintain a consistent purchase and sale price intended to prevent fluctuation in the price of Vessel Coin.',
    },
    {
      id: 6,
      question:
        'What is the conversion rate for Vessel to Fiat when being redeemed?',
      answer: '1 VSL = $0.01 USD',
    },
    {
      id: 7,
      question:
        'I made an accidental purchase of Vessel Coins. How can I request a refund?',
      answers: [
        {
          title: 'iOS - App Store',
          description:
            'Please visit the <a href="https://reportaproblem.apple.com/" class="text-primary">Report a Problem page</a> on Apple\'s website, and sign in with your Apple ID. Once you\'ve signed in, click “Apps” and then “Report a Problem” next to the purchase you would like a refund for.',
        },
        {
          title: 'Android - Google Play Store',
          description:
            'If you would like a refund for a purchase made on an Android device, please <a href="https://support.google.com/googleplay/answer/7205930?hl=en" class="text-primary">refer to this page</a>.',
        },
      ],
    },
    {
      id: 8,
      question:
        'Why do I need to share my personal information to release my Pending Balance in Vessel?',
      answer:
        'Due to the USA Patriot Act of 2001, we are required to have users go through KYC (Know Your Customer) procedures to assess customer risk and comply with Anti-Money Laundering laws.',
    },
    {
      id: 9,
      question: 'How can I share feedback or bugs that I find in the app?',
      answer: 'Please reach out to support@openvessel.io',
    },
    {
      id: 10,
      question:
        "I'm not a US citizen. Can I still use the Vessel marketplace and wallet?",
      answer:
        'If Google Play or the iOS App Store are available in your country, you are eligible to use the Vessel wallet and marketplace.\n\nFor redeeming coins for cash, we rely on Paypal for paying out consumers which supports over 200 countries and 25 currencies. Please refer to this <a href="https://www.paypal.com/us/webapps/mpp/country-worldwide" class="text-primary">list</a> to make sure Paypal is available in your country.',
    },
    {
      id: 11,
      question:
        'Can I transfer my Vessel coin to another cryptocurrency wallet?',
      answer: 'Not at this time.',
    },
  ];

  return (
    <Background color="bg-white" className="overflow-hidden">
      <Section className="mt-[64px] md:mt-[80px] lg:mt-[84px]">
        <Fade bottom duration={750} delay={250}>
          <h1 className="text-3xl lg:text-4xl xl:text-5xl xl:leading-[60px] font-medium mb-0 tracking-tight text-center">
            Frequently Asked Question
          </h1>
        </Fade>
        <Fade bottom duration={750} delay={250}>
          <div className="mt-10 mx-auto max-w-screen-md">
            {faqs.map((item: any, idx: number) => (
              <div
                key={idx}
                className={`border-b-[1px] border-b-black/10 ${
                  idx === 0 ? 'border-t-[1px] border-t-black/10' : ''
                }`}
              >
                <Disclosure>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full gap-5 justify-between items-center py-4">
                        <span className="text-lg font-medium pt-1 text-left">
                          {item.question}
                        </span>
                        <div>
                          <ChevronUpIcon
                            className={`${
                              open ? '' : 'rotate-180 transform'
                            } h-5 w-5 text-primary`}
                          />
                        </div>
                      </Disclosure.Button>
                      <Transition
                        show={open}
                        enter="transition duration-100 ease-out"
                        enterFrom="transform scale-95 opacity-0"
                        enterTo="transform scale-100 opacity-100"
                        leave="transition duration-75 ease-out"
                        leaveFrom="transform scale-100 opacity-100"
                        leaveTo="transform scale-95 opacity-0"
                        className={`transition-all duration-300`}
                      >
                        <Disclosure.Panel unmount={false} className="pb-4">
                          {item.answers ? (
                            <ul className="list-disc pl-5">
                              {item.answers.map((answer: any, idx2: number) => (
                                <li key={idx2}>
                                  <h3
                                    className={`text-black/80 font-bold ${
                                      idx2 === 0 ? 'mt-2' : 'mt-6'
                                    }`}
                                  >
                                    {answer.title}
                                  </h3>
                                  <p
                                    className="text-black/80 whitespace-pre-line mt-2"
                                    dangerouslySetInnerHTML={{
                                      __html: answer.description,
                                    }}
                                  />
                                </li>
                              ))}
                            </ul>
                          ) : (
                            <p
                              className="text-black/80 whitespace-pre-line"
                              dangerouslySetInnerHTML={{ __html: item.answer }}
                            />
                          )}
                        </Disclosure.Panel>
                      </Transition>
                    </>
                  )}
                </Disclosure>
              </div>
            ))}
          </div>
        </Fade>
      </Section>
    </Background>
  );
};

export default Highlights;

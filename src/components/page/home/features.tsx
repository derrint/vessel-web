/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';

import { Fade } from 'react-reveal';

import { Section } from '@components/layout';

const Features = () => {
  const [state, setState] = React.useState({
    isReady: false,
  });

  React.useEffect(() => {
    setTimeout(() => {
      setState({ ...state, isReady: true });
    }, 250);

    return () => {};
  }, []);

  const features = [
    {
      title: '100% Native Experience',
      description:
        'Allow users to buy, sell, trade, and manage their NFTs, without even needing to leave your application.',
      asset: '/assets/images/illustrations/illustration-seamless.png',
      extras: [
        {
          label: 'Connect with',
          asset: '/assets/images/logos/logo-applovin.png',
        },
      ],
    },
    {
      title: "We're stacked",
      description:
        'We handle the entire blockchain stack, so you can focus on building the best games out there. Our all-in-one solution offers the following:',
      asset: '/assets/images/illustrations/illustration-users.png',
      extras: [
        {
          label: 'NFT Creation/Management',
        },
        {
          label: 'NFT Marketplace/Wallet App',
        },
        {
          label:
            'Onramp/Offramp Payment Processing (+200 Countries and support 25 currencies)',
        },
        {
          label: 'Advance reporting and user management capabilities',
        },
      ],
    },
    {
      title: 'We power blockchain infrastructure for mobile applications',
      description:
        "We've built and designed our own blockchain, Vessel, secured by Ethereum.",
      asset: '/assets/images/illustrations/illustration-infra.png',
      extras: [
        {
          label: 'Zero gas fees/cost',
        },
        {
          label: 'Fast transaction speeds - finality within seconds',
        },
        {
          label: 'Designed for single and bulk minting',
        },
      ],
    },
  ];

  return (
    <Section yPadding="py-8 sm:py-16" id="features">
      <div className="relative flex flex-col justify-center z-[1] gap-20">
        {features.map((item: any, idx: number) => (
          <div
            key={idx}
            className={`flex gap-36 items-center ${
              idx % 2 === 0 ? 'flex-row-reverse' : ''
            }`}
          >
            <Fade
              bottom
              duration={750}
              delay={500}
              when={state.isReady}
              cascade
            >
              <div className="w-full sm:w-2/3 lg:w-1/2">
                <h3 className="text-xl sm:text-2xl lg:text-5xl font-medium mb-3 lg:mb-5 tracking-tight lg:leading-[60px]">
                  {item.title}
                </h3>

                <p className="text-base lg:text-lg lg:leading-7 text-black/80 whitespace-pre-line">
                  {item.description}
                  {item.extras && (
                    <div className="mt-4">
                      {item.extras.map((extra: any, idx2: number) => (
                        <div key={idx2} className="flex items-center gap-3">
                          {extra.label}
                          <img src={extra.asset} alt="" className="h-8" />
                        </div>
                      ))}
                    </div>
                  )}
                </p>
              </div>
            </Fade>
            <Fade bottom duration={750} delay={750} when={state.isReady}>
              <div className="w-full sm:w-1/3 lg:w-1/2">
                <img src={item.asset} alt="" className="w-full" />
              </div>
            </Fade>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Features;

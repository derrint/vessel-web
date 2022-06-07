/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';

import { ArrowRight } from 'akar-icons';
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
      title: 'Seamless Experience',
      description:
        'Allow users to buy, sell, trade, and manage their NFTs, without even needing to leave your application',
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
    <Section id="features">
      <div className="relative flex flex-col justify-center z-[1] gap-20">
        {features.map((item: any, idx: number) => (
          <div
            key={idx}
            className={`flex flex-col sm:flex-row gap-6 sm:gap-12 lg:gap-20 xl:gap-36 items-center ${
              idx % 2 === 0 ? 'sm:flex-row-reverse' : ''
            }`}
          >
            <Fade
              bottom
              duration={750}
              delay={500}
              when={state.isReady}
              cascade
            >
              <div className="w-full sm:w-7/12 lg:w-1/2">
                <h3 className="text-3xl lg:text-4xl xl:text-5xl font-medium mb-3 lg:mb-5 tracking-tight xl:leading-[60px]">
                  {item.title}
                </h3>

                <p className="text-base lg:text-lg lg:leading-7 text-black/80 whitespace-pre-line">
                  {item.description}
                  {item.extras && (
                    <div className="mt-4">
                      {item.extras.map((extra: any, idx2: number) => (
                        <div key={idx2} className="flex items-start gap-3">
                          {item.extras.length > 1 && (
                            <div className="my-[6px] text-primary">
                              <ArrowRight strokeWidth={3} size={16} />
                            </div>
                          )}
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
              <div className="w-full sm:w-5/12 lg:w-1/2 flex justify-center">
                <img
                  src={item.asset}
                  alt=""
                  className="w-full max-w-sm sm:max-w-none"
                />
              </div>
            </Fade>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Features;

/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';

import { ArrowRight } from 'akar-icons';
import { Fade, Zoom } from 'react-reveal';
import Pulse from 'react-reveal/Pulse';

import { Section } from '@components/layout';
import styles from '@styles/components/page/home/features.module.scss';

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

  const featureSeamless = () => {
    return (
      <div className="relative">
        <img
          src="/assets/images/illustrations/illustration-seamless-bg.svg"
          alt=""
          className="w-[360px]"
        />

        <div className="absolute top-0 lg:-top-14 left-0 lg:-left-14 w-[58%] lg:w-[240px]">
          <Pulse forever delay={0} duration={1500}>
            <img
              src="/assets/images/illustrations/illustration-seamless-1.png"
              alt=""
            />
          </Pulse>
        </div>

        <div className="absolute top-[20%] lg:top-9 right-8 w-[52%] lg:w-[200px]">
          <Pulse forever delay={100} duration={1500}>
            <img
              src="/assets/images/illustrations/illustration-seamless-2.png"
              alt=""
            />
          </Pulse>
        </div>

        <div className="absolute bottom-0 lg:bottom-2 -right-5 lg:-right-10 w-[52%] lg:w-[200px]">
          <Pulse forever delay={200} duration={1500}>
            <img
              src="/assets/images/illustrations/illustration-seamless-3.png"
              alt=""
            />
          </Pulse>
        </div>
      </div>
    );
  };

  const featureStacked = () => {
    return (
      <div className={`relative ${styles.floating_wrapper}`}>
        <img
          src="/assets/images/illustrations/illustration-stacked-bg.png"
          alt=""
          className="w-full max-w-sm sm:max-w-lg"
        />
        <Zoom when={state.isReady} duration={500} delay={400}>
          <div className={styles.stacked_halfround_1}>
            <img
              className={styles.floating}
              src="/assets/images/illustrations/illustration-stacked-half-round-1.png"
              alt=""
            />
          </div>
        </Zoom>

        <Zoom when={state.isReady} duration={500} delay={100}>
          <div className={styles.stacked_halfround_2}>
            <img
              className={styles.floating}
              src="/assets/images/illustrations/illustration-stacked-half-round-2.png"
              alt=""
            />
          </div>
        </Zoom>

        <Zoom when={state.isReady} duration={500} delay={300}>
          <div className={styles.stacked_unity}>
            <img
              className={styles.floating}
              src="/assets/images/illustrations/illustration-stacked-unity.png"
              alt=""
            />
          </div>
        </Zoom>

        <Zoom when={state.isReady} duration={500} delay={500}>
          <div className={styles.stacked_apple}>
            <img
              className={styles.floating}
              src="/assets/images/illustrations/illustration-stacked-apple.png"
              alt=""
            />
          </div>
        </Zoom>

        <Zoom when={state.isReady} duration={500} delay={200}>
          <div className={styles.stacked_android}>
            <img
              className={styles.floating}
              src="/assets/images/illustrations/illustration-stacked-android.png"
              alt=""
            />
          </div>
        </Zoom>
      </div>
    );
  };

  const featureInfra = () => {
    return (
      <div className={`relative ${styles.floating_wrapper}`}>
        <img
          src="/assets/images/illustrations/illustration-infra-bg.png"
          alt=""
          className="w-full max-w-sm sm:max-w-lg"
        />
        <Zoom when={state.isReady} duration={500} delay={100}>
          <div className={styles.infra_nft}>
            <img
              className={styles.floating}
              src="/assets/images/illustrations/illustration-infra-nft.png"
              alt=""
            />
          </div>
        </Zoom>

        <Zoom when={state.isReady} duration={500} delay={300}>
          <div className={styles.infra_marketplace}>
            <img
              className={styles.floating}
              src="/assets/images/illustrations/illustration-infra-marketplace.png"
              alt=""
            />
          </div>
        </Zoom>

        <Zoom when={state.isReady} duration={500} delay={200}>
          <div className={styles.infra_swirl_right}>
            <img
              className={styles.floating}
              src="/assets/images/illustrations/illustration-infra-swirl-1.png"
              alt=""
            />
          </div>
        </Zoom>

        <Zoom when={state.isReady} duration={500} delay={400}>
          <div className={styles.infra_game}>
            <img
              className={styles.floating}
              src="/assets/images/illustrations/illustration-infra-game.png"
              alt=""
            />
          </div>
        </Zoom>

        <Zoom when={state.isReady} duration={500} delay={500}>
          <div className={styles.infra_coin}>
            <img
              className={styles.floating}
              src="/assets/images/illustrations/illustration-infra-coin.png"
              alt=""
            />
          </div>
        </Zoom>

        <Zoom when={state.isReady} duration={500} delay={600}>
          <div className={styles.infra_swirl_left}>
            <img
              className={styles.floating}
              src="/assets/images/illustrations/illustration-infra-swirl-2.png"
              alt=""
            />
          </div>
        </Zoom>
      </div>
    );
  };

  const features = [
    {
      title: 'Seamless Experience',
      description:
        'Allow users to buy, sell, trade, and manage their NFTs, without even needing to leave your application',
      asset: '/assets/images/illustrations/illustration-seamless.png',
      component: featureSeamless(),
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
        'We handle the entire blockchain stack, so you can focus on building the best apps out there. Our all-in-one solution offers the following:',
      asset: '/assets/images/illustrations/illustration-stacked.png',
      component: featureStacked(),
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
      component: featureInfra(),
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
    <Section className="mt-[64px] md:mt-[80px] lg:mt-[84px]">
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
              delay={250}
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
            <Fade bottom duration={750} delay={250} when={state.isReady}>
              <div className="w-full sm:w-5/12 lg:w-1/2 flex justify-center">
                {item.component ? (
                  item.component
                ) : (
                  <img
                    src={item.asset}
                    alt=""
                    className="w-full max-w-sm sm:max-w-none"
                  />
                )}
              </div>
            </Fade>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Features;

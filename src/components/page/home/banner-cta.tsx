/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';

import { LinkOut } from 'akar-icons';
import Link from 'next/link';
import { Fade, Zoom } from 'react-reveal';

import { Background } from '@components/background';
import { Section } from '@components/layout';

import styles from '../../../styles/components/page/home/banner.module.scss';

const BannerCTA = () => {
  const text = {
    first: 'Your blockchain solution for mobile apps has arrived',
    second: 'Integrate NFTs in your mobile apps, without any of the hassle.',
  };

  const [state, setState] = React.useState({
    isReady: false,
  });

  React.useEffect(() => {
    setState({ ...state, isReady: true });

    return () => {};
  }, []);

  return (
    <Background color="bg-white">
      <Section className={`relative ${styles.floating_wrapper}`}>
        <Fade duration={750} delay={0} when={state.isReady}>
          <div className="flex justify-center">
            <div className="relative">
              <img
                src="/assets/images/illustrations/illustration-main-bg.png"
                alt=""
                className="w-full max-w-sm sm:max-w-lg"
              />

              <Zoom when={state.isReady} duration={500} delay={200}>
                <div className={styles.main_wallet}>
                  <img
                    className={styles.floating}
                    src="/assets/images/illustrations/illustration-main-wallet.png"
                    alt=""
                  />
                </div>
              </Zoom>

              <Zoom when={state.isReady} duration={500} delay={400}>
                <div className={styles.main_game}>
                  <img
                    className={styles.floating}
                    src="/assets/images/illustrations/illustration-main-game.png"
                    alt=""
                  />
                </div>
              </Zoom>

              <Zoom when={state.isReady} duration={500} delay={600}>
                <div className={styles.main_cloud}>
                  <img
                    className={styles.floating}
                    src="/assets/images/illustrations/illustration-main-cloud.png"
                    alt=""
                  />
                </div>
              </Zoom>

              <Zoom when={state.isReady} duration={500} delay={300}>
                <div className={styles.main_coin_1}>
                  <img
                    className={styles.floating}
                    src="/assets/images/illustrations/illustration-main-coin-1.png"
                    alt=""
                  />
                </div>
              </Zoom>

              <Zoom when={state.isReady} duration={500} delay={700}>
                <div className={styles.main_coin_2}>
                  <img
                    className={styles.floating}
                    src="/assets/images/illustrations/illustration-main-coin-2.png"
                    alt=""
                  />
                </div>
              </Zoom>

              <Zoom when={state.isReady} duration={500} delay={500}>
                <div className={styles.main_coin_3}>
                  <img
                    className={styles.floating}
                    src="/assets/images/illustrations/illustration-main-coin-3.png"
                    alt=""
                  />
                </div>
              </Zoom>
            </div>
          </div>
        </Fade>

        <Fade bottom duration={750} delay={250} when={state.isReady}>
          <p className="text-sm sm:text-base lg:text-lg lg:leading-7 mt-6 whitespace-pre-line z-[2] text-center">
            {text?.second}
          </p>
        </Fade>
        <Fade bottom duration={750} delay={250} when={state.isReady}>
          <div className="mt-10 z-[2] text-center">
            <Link href="/#contact" passHref>
              <button className="px-7 lg:px-8 py-3 lg:py-4 rounded-2xl font-medium text-xl text-white bg-gradient-to-r from-gradient-primary-start to-gradient-primary-end shadow-md">
                Get started now ⚡
              </button>
            </Link>
          </div>
        </Fade>

        <Fade bottom duration={750} delay={250} when={state.isReady}>
          <div className="mt-8 z-[2] flex justify-center">
            <Link
              href={
                'https://docs.openvessel.io/integration/EZzgG67O9oXGl9CReheF/'
              }
              passHref
            >
              <a className="flex items-center text-primary" target="_blank">
                Explore Documentation
                <div className="ml-2">
                  <LinkOut strokeWidth={3} size={16} />
                </div>
              </a>
            </Link>
          </div>
        </Fade>
      </Section>
    </Background>
  );
};

export default BannerCTA;

/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';

// import Tippy from '@tippyjs/react';
// import Image from 'next/image';
import 'tippy.js/animations/scale.css';
import { LinkOut } from 'akar-icons';
import Link from 'next/link';
import { Fade, Flip, Zoom } from 'react-reveal';
// import { followCursor } from 'tippy.js';

import { Background } from '@components/background';
import { Section } from '@components/layout';

import styles from '../../../styles/components/page/home/banner.module.scss';

const Banner = () => {
  const text = {
    first: 'Your blockchain solution for mobile apps has arrived',
    second: 'Integrate NFTs in your mobile apps, without any of the hassle.',
  };

  const firstTexts = text?.first.split(' ');

  // #endregion

  const [state, setState] = React.useState({
    isReady: false,
  });

  const [arr, setArr] = React.useState([] as any);

  React.useEffect(() => {
    setState({ ...state, isReady: true });

    return () => {};
  }, []);

  React.useEffect(() => {
    if (state.isReady) {
      setTimeout(() => {
        firstTexts.forEach((_, idx: number) => {
          setTimeout(() => {
            setArr((oldArray: any) => oldArray.concat(styles.showed));
          }, 250 * (idx + 1));
        });

        document.querySelector('body')?.classList.remove('overflow-hidden');
      }, 2250);
    }

    return () => {};
  }, [state.isReady]);

  return (
    <Background color="bg-white" className="pt-20 md:pt-24 lg:pt-30">
      <div className={styles.splashScreen}>
        <img
          src="/assets/images/logos/logo-icon-w.png"
          alt=""
          className="w-24"
        />
      </div>

      <Section className="relative z-[1]">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[64px] font-semibold lg:leading-[80px] tracking-tight whitespace-pre-line z-[2] text-center">
          {firstTexts.map((txt: any, idx: number) => {
            return (
              <div className={styles.flipAnimate} key={idx}>
                <span
                  className={`${arr[idx] || ''} ${
                    [3, 4, 5].includes(idx)
                      ? 'bg-primary text-primary before:text-primary'
                      : 'bg-black text-black before:text-black'
                  }
                    m-1 md:m-2 lg:m-3
                    `}
                  data-hover={txt}
                >
                  {txt}
                </span>
                {idx === 2 || idx === 5 ? <br /> : null}
              </div>
            );
          })}
        </h1>

        <Flip right duration={750} delay={3000} when={state.isReady}>
          <div className="flex justify-center mt-12">
            <img
              src="/assets/images/logos/logo-token.png"
              alt=""
              className="w-[120px] shadow-md rounded-full"
            />
          </div>
        </Flip>

        <Fade duration={3750} delay={250} when={state.isReady} cascade>
          <div className="w-full flex justify-center">
            <div className="absolute -z-[1] top-10 sm:top-16 md:top-24 lg:top-32 flex">
              <div className="bg-primary/30 rounded-full w-32 lg:w-60 h-32 lg:h-60 blur-2xl lg:blur-3xl"></div>
              <div className="bg-secondary/30 rounded-full w-32 lg:w-60 h-32 lg:h-60 blur-2xl lg:blur-3xl"></div>
            </div>
          </div>
        </Fade>

        <Fade right duration={750} delay={2500} when={state.isReady}>
          <img
            src="/assets/images/vectors/swoosh-lg.svg"
            alt=""
            className="absolute right-0 top-5 sm:top-10 w-20 sm:w-[120px] -z-[1]"
          />
        </Fade>

        <Fade right duration={750} delay={2250} when={state.isReady}>
          <img
            src="/assets/images/vectors/swoosh-md.svg"
            alt=""
            className="absolute left-0 top-32 w-14 sm:w-[80px] -z-[1]"
          />
        </Fade>

        <Fade right duration={750} delay={1750} when={state.isReady}>
          <img
            src="/assets/images/vectors/swoosh-lg.svg"
            alt=""
            className="absolute right-1/4 bottom-2 sm:bottom-10 w-20 sm:w-[120px] -z-[1]"
          />
        </Fade>
      </Section>

      <Section className={`relative ${styles.main}`}>
        <Fade duration={750} delay={250} when={state.isReady}>
          <div className="flex justify-center">
            <div className="relative">
              <img
                src="/assets/images/illustrations/illustration-main-bg.png"
                alt=""
                className="w-full max-w-sm sm:max-w-lg"
              />
              <Zoom when={state.isReady} duration={500} delay={1000}>
                <div className={styles.card_top}>
                  <img
                    className={styles.floating}
                    src="/assets/images/illustrations/illustration-main-wallet.png"
                    alt=""
                  />
                </div>
              </Zoom>

              <Zoom when={state.isReady} duration={500} delay={1000}>
                <div className={styles.card_top_right}>
                  <img
                    className={styles.floating}
                    src="/assets/images/illustrations/illustration-main-game.png"
                    alt=""
                  />
                </div>
              </Zoom>

              <Zoom when={state.isReady} duration={500} delay={1250}>
                <div className={styles.card_left}>
                  <img
                    className={styles.floating}
                    src="/assets/images/illustrations/illustration-main-cloud.png"
                    alt=""
                  />
                </div>
              </Zoom>

              <Zoom when={state.isReady} duration={500} delay={1500}>
                <div className={styles.card_right_1}>
                  <img
                    className={styles.floating}
                    src="/assets/images/illustrations/illustration-main-coin-1.png"
                    alt=""
                  />
                </div>
              </Zoom>

              <Zoom when={state.isReady} duration={500} delay={1500}>
                <div className={styles.card_right_2}>
                  <img
                    className={styles.floating}
                    src="/assets/images/illustrations/illustration-main-coin-2.png"
                    alt=""
                  />
                </div>
              </Zoom>

              <Zoom when={state.isReady} duration={500} delay={1750}>
                <div className={styles.card_bottom_left}>
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

        <Fade bottom duration={750} delay={500} when={state.isReady}>
          <p className="text-sm sm:text-base lg:text-lg lg:leading-7 mt-6 whitespace-pre-line z-[2] text-center">
            {text?.second}
          </p>
        </Fade>
        <Fade bottom duration={750} delay={750} when={state.isReady}>
          <div className="mt-10 z-[2] text-center">
            <Link href="/#contact" passHref>
              <button className="px-7 lg:px-8 py-3 lg:py-4 rounded-2xl font-medium text-xl text-white bg-gradient-to-r from-gradient-primary-start to-gradient-primary-end shadow-md">
                Get started now ⚡
              </button>
            </Link>
          </div>
        </Fade>

        <Fade bottom duration={750} delay={1000} when={state.isReady}>
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

export default Banner;

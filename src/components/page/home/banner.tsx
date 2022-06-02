/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';

// import Tippy from '@tippyjs/react';
// import Image from 'next/image';
import 'tippy.js/animations/scale.css';
import { LinkOut } from 'akar-icons';
import Link from 'next/link';
import { Fade, Flip } from 'react-reveal';
// import { followCursor } from 'tippy.js';

import { Background } from '@components/background';
import { Section } from '@components/layout';

import styles from '../../../styles/Home.module.scss';

const Banner = () => {
  const text = {
    first: 'Your blockchain solution for mobile apps has arrived',
    second:
      'Easily integrate blockchain infrastructure for your mobile application,\ndo anything with ease!',
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
      firstTexts.forEach((_, idx: number) => {
        setTimeout(() => {
          setArr((oldArray: any) => oldArray.concat(styles.showed));
        }, 400 * (idx + 1));
      });
    }

    return () => {};
  }, [state.isReady]);

  return (
    <Background color="bg-white" className="relative py-20 md:py-24 lg:py-30">
      <Section className="flex gap-10">
        <div className="w-7/12 flex flex-col justify-center py-6 relative">
          <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-semibold lg:leading-[80px] tracking-tight whitespace-pre-line z-[2]">
            {firstTexts.map((txt: any, idx: number) => {
              return (
                <div className={styles.flipAnimate} key={idx}>
                  <span className={arr[idx] || ''} data-hover={txt}>
                    {txt}
                  </span>
                </div>
              );
            })}
          </h1>

          <Flip top duration={1750} delay={750} when={state.isReady}>
            <p className="text-sm sm:text-base lg:text-lg lg:leading-7 mt-6 whitespace-pre-line z-[2]">
              {text?.second}
            </p>
          </Flip>
          <Fade top duration={750} delay={1000} when={state.isReady}>
            <div className="mt-10 z-[2]">
              <button
                className="
                px-8 py-4 rounded-2xl
                font-medium text-xl text-white
                bg-gradient-to-r from-gradient-primary-start to-gradient-primary-end
                shadow-md
                "
              >
                Get started now ⚡
              </button>
            </div>
          </Fade>

          <Fade top duration={750} delay={1250} when={state.isReady}>
            <div className="mt-8 z-[2]">
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

          <Fade duration={750} delay={2250} when={state.isReady}>
            <div className="flex absolute z-[1] top-0 left-32">
              <div className="bg-primary/30 w-60 h-60 blur-3xl"></div>
              <div className="bg-secondary/30 w-60 h-60 blur-3xl"></div>
            </div>
          </Fade>
        </div>

        <div className="w-5/12 relative">
          <Fade right duration={750} delay={750} when={state.isReady}>
            <img
              src="/assets/images/illustrations/illustration-main.png"
              alt=""
            />
          </Fade>
          <Fade right duration={750} delay={1500} when={state.isReady}>
            <img
              src="/assets/images/vectors/swoosh-lg.svg"
              alt=""
              className="absolute right-0 -top-10 w-[120px] z-[1]"
            />
          </Fade>

          <Fade right duration={750} delay={1250} when={state.isReady}>
            <img
              src="/assets/images/vectors/swoosh-md.svg"
              alt=""
              className="absolute left-0 top-10 w-[80px] z-[1]"
            />
          </Fade>

          <Fade right duration={750} delay={1750} when={state.isReady}>
            <img
              src="/assets/images/vectors/swoosh-lg.svg"
              alt=""
              className="absolute left-32 bottom-10 w-[120px] z-[1]"
            />
          </Fade>
        </div>
      </Section>
    </Background>
  );
};

export default Banner;

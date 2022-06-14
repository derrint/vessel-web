/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';

import { Fade } from 'react-reveal';

import { Background } from '@components/background';
import { Section } from '@components/layout';
import styles from '@styles/components/page/home/banner.module.scss';

const BannerWelcome = () => {
  const text = {
    first: 'Your blockchain solution for mobile apps has arrived',
    second: 'Integrate NFTs in your mobile apps, without any of the hassle.',
  };

  const firstTexts = text?.first.split(' ');

  // #endregion

  const [state, setState] = React.useState({
    isReady: false,
    isSplashScreenDone: false,
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
          }, 200 * (idx + 1));
        });

        document.querySelector('body')?.classList.remove('overflow-hidden');
        setState({ ...state, isSplashScreenDone: true });
      }, 1250);
    }

    return () => {};
  }, [state.isReady]);

  return (
    <Background color="bg-white relative">
      <Fade
        duration={3750}
        delay={250}
        when={state.isReady && state.isSplashScreenDone}
        cascade
      >
        <div className="w-full flex justify-center">
          <div className="absolute z-[1] top-10 sm:top-16 md:top-24 lg:-top-[600px] flex">
            <div className="bg-secondary/30 rounded-full h-32 lg:h-[600px] aspect-square blur-2xl lg:blur-[240px]"></div>
            <div className="bg-primary/30 rounded-full h-32 lg:h-[600px] aspect-square blur-2xl lg:blur-[240px]"></div>
          </div>
        </div>
      </Fade>

      <Section className="relative z-[1]">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-semibold lg:leading-[72px] tracking-tight whitespace-pre-line z-[2] text-center">
          {firstTexts.map((txt: any, idx: number) => {
            return (
              <div className={styles.flipAnimate} key={idx}>
                <span
                  className={`${arr[idx] || ''} ${
                    [3, 4, 5].includes(idx)
                      ? 'bg-primary text-transparent before:text-primary'
                      : 'bg-black text-transparent before:text-black'
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

        <Fade
          right
          duration={750}
          delay={1500}
          when={state.isReady && state.isSplashScreenDone}
        >
          <img
            src="/assets/images/vectors/swoosh-lg.svg"
            alt=""
            className="absolute right-0 top-5 sm:top-10 w-20 sm:w-[120px] -z-[1]"
          />
        </Fade>

        <Fade
          right
          duration={750}
          delay={1250}
          when={state.isReady && state.isSplashScreenDone}
        >
          <img
            src="/assets/images/vectors/swoosh-md.svg"
            alt=""
            className="absolute left-0 top-32 w-14 sm:w-[80px] -z-[1]"
          />
        </Fade>

        <Fade
          right
          duration={750}
          delay={750}
          when={state.isReady && state.isSplashScreenDone}
        >
          <img
            src="/assets/images/vectors/swoosh-lg.svg"
            alt=""
            className="absolute right-1/4 bottom-2 sm:bottom-10 w-20 sm:w-[120px] -z-[1]"
          />
        </Fade>
      </Section>
    </Background>
  );
};

export default BannerWelcome;

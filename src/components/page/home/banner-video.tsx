/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';

import { Flip } from 'react-reveal';

import { Background } from '@components/background';
import { Section } from '@components/layout';

const BannerVideo = () => {
  const [state, setState] = React.useState({
    isReady: false,
  });

  React.useEffect(() => {
    setState({ ...state, isReady: true });

    return () => {};
  }, []);

  return (
    <Background color="bg-white">
      <Section className="relative">
        <Flip right duration={750} delay={250} when={state.isReady}>
          <div className="flex justify-center">
            <img
              src="/assets/images/logos/logo-token.png"
              alt=""
              className="w-[120px] shadow-md rounded-full"
            />
          </div>
        </Flip>
      </Section>
    </Background>
  );
};

export default BannerVideo;

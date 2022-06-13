import React from 'react';

import ReactFullpage from '@fullpage/react-fullpage';
import { Player } from '@lottiefiles/react-lottie-player';

import {
  SplashScreen,
  BannerWelcome,
  BannerVideo,
  BannerCTA,
  Highlights,
  Features,
  ContactUs,
  FAQ,
} from '@components/page/home';

const Home = () => {
  const anchors = [
    'welcome',
    'vessel',
    'get-started',
    'features',
    'highlights',
    'contact-us',
    'faq',
  ];

  return (
    <>
      <SplashScreen />
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20">
        <Player
          autoplay
          loop
          src="/assets/93440-scroll-down.json"
          style={{ height: '60px', width: '60px' }}
        />
        <span className="text-sm text-black/40">scroll for more</span>
      </div>
      <ReactFullpage
        scrollingSpeed={750}
        anchors={anchors}
        scrollOverflow
        render={() => {
          return (
            <ReactFullpage.Wrapper>
              <div className="section">
                <BannerWelcome />
              </div>
              <div className="section">
                <BannerVideo />
              </div>
              <div className="section">
                <BannerCTA />
              </div>
              <div className="section">
                <Features />
              </div>
              <div className="section">
                <Highlights />
              </div>
              <div className="section">
                <ContactUs />
              </div>
              <div className="section">
                <FAQ />
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </>
  );
};

export default Home;

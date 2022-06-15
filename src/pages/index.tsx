/* eslint-disable react-hooks/exhaustive-deps */
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
import { useActions, useState } from '@overmind/index';
import { Footer } from '@templates/Footer';

const Home = () => {
  const anchors = [
    'welcome',
    'vessel',
    'get-started',
    'features',
    'highlights',
    'contact-us',
    'faq',
    'footer',
  ];

  const [activeSection, setActiveSection] = React.useState('' as any);
  const [FPA, setFPA] = React.useState(null as any);

  const { fullPage } = useState().plugins;
  const { setFullPage } = useActions();

  React.useEffect(() => {
    setFullPage({ ...fullPage, methods: FPA });

    return () => {};
  }, [FPA]);

  return (
    <>
      <SplashScreen />

      <button
        className={`absolute bottom-5 left-1/2 -translate-x-1/2 z-[1] transition-all duration-150 ${
          activeSection === 'welcome'
            ? 'opacity-100 visible'
            : 'opacity-0 invisible'
        }`}
        onClick={() => {
          FPA.moveSectionDown();
        }}
      >
        <Player
          autoplay
          loop
          src="/assets/93440-scroll-down.json"
          style={{ height: '60px', width: '60px' }}
        />
        <span
          className={`text-sm transition-all duration-150 ${
            activeSection === 'contact-us' ? 'text-white/80' : 'text-black/80'
          }`}
        >
          scroll for more
        </span>
      </button>

      <ReactFullpage
        scrollingSpeed={750}
        anchors={anchors}
        onLeave={(_, destination) => {
          setActiveSection(destination.anchor);
          setFullPage({ ...fullPage, activeSection: destination.anchor });
        }}
        scrollOverflow
        render={({ fullpageApi }) => {
          setFPA(fullpageApi);

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
              <div className="section fp-auto-height">
                <Footer />
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </>
  );
};

export default Home;

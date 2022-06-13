import React from 'react';

import ReactFullpage from '@fullpage/react-fullpage';
import { CgChevronDownO, CgChevronUpO } from 'react-icons/cg';

import {
  Banner,
  Highlights,
  Features,
  ContactUs,
  FAQ,
} from '@components/page/home';

const Home = () => {
  const anchors = [
    'welcome',
    'lootbox-info',
    'game-trailer',
    'game-rule',
    'daily-quest',
    'nft-cards',
    'events',
    'stages',
    'lootbox-list',
    'roadmap',
    'join',
  ];

  const [activeSection, setActiveSection] = React.useState('' as any);
  const [FPA, setFPA] = React.useState(null as any);

  return (
    <>
      <ReactFullpage
        scrollingSpeed={750}
        navigation
        navigationPosition="right"
        anchors={anchors}
        afterLoad={(_, destination) => {
          setActiveSection(destination.anchor);
        }}
        scrollOverflow
        render={({ fullpageApi }) => {
          setFPA(fullpageApi);

          return (
            <ReactFullpage.Wrapper>
              <div className="section">
                <Banner />
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

      <div className="fixed right-[17px] top-[50%] mt-[130px] bg-[#22222233] px-[4px] py-[8px] rounded-[16px] flex flex-col gap-2">
        <button
          className={
            activeSection === anchors[0] ? 'cursor-default' : 'cursor-pointer'
          }
          onClick={() => {
            FPA.moveSectionUp();
          }}
        >
          <CgChevronUpO
            size="20"
            color={activeSection === anchors[0] ? '#FFFFFF66' : '#FFFFFF'}
          />
        </button>
        <button
          className={
            activeSection === anchors[anchors.length - 1]
              ? 'cursor-default'
              : 'cursor-pointer'
          }
          onClick={() => {
            FPA.moveSectionDown();
          }}
        >
          <CgChevronDownO
            size="20"
            color={
              activeSection === anchors[anchors.length - 1]
                ? '#FFFFFF66'
                : '#FFFFFF'
            }
          />
        </button>
      </div>
    </>
  );
};

export default Home;

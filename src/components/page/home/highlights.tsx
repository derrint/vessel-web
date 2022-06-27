import React from 'react';

import { Tab } from '@headlessui/react';
import { LinkOut } from 'akar-icons';
import Link from 'next/link';
import { CopyBlock, Code, atomOneLight } from 'react-code-blocks';
import { Fade } from 'react-reveal';

import { Section } from '@components/layout';

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ');
}

const Highlights = () => {
  const [tabs] = React.useState([
    {
      id: 1,
      name: 'Unity',
      component: () => (
        <div className="w-full text-sm sm:text-base">
          <ol className="list-decimal pl-5">
            <li className="pl-1 pb-2">
              Download the latest version of Unity SDK from
              <br />
              <a
                className="text-primary break-all"
                href="https://artifacts.openvessel.io/unity/OpenVessel-1.7.2.unitypackage"
              >
                https://artifacts.openvessel.io/unity/OpenVessel-1.7.2.unitypackage
              </a>
            </li>
            <li className="pl-1 pb-2">
              In Unity, select{' '}
              <b>Assets &gt; Import Package &gt; Custom Package…</b>
            </li>
            <li className="pl-1 pb-2">
              Choose the Unity Plugin file you downloaded.
            </li>
            <li className="pl-1">
              In the <b>Import Unity Package</b> dialog, click <b>Import</b>.
            </li>
          </ol>
        </div>
      ),
    },
    {
      id: 2,
      name: 'Android',
      component: () => (
        <div className="text-sm sm:text-base">
          <div className="pb-2">
            Add the following to your app-level
            <div className="inline">
              <Code
                text={'build.gradle'}
                language={'js'}
                theme={atomOneLight}
                customStyle={{ marginLeft: 5, marginRight: 5 }}
              />
            </div>
            file:
          </div>
          <CopyBlock
            text={`repositories {
    google()
    mavenCentral()
    maven {
        url "https://artifacts.openvessel.io/maven/"
    }
    ⋮
}
dependencies {
    implementation 'io.openvessel:sdk:1.7.2'
    ⋮
}`}
            language={'jsx'}
            theme={atomOneLight}
            showLineNumbers
            wrapLines={true}
            customStyle={{ borderRadius: 10 }}
          />
        </div>
      ),
    },
    {
      id: 3,
      name: 'iOS (CocoaPods)',
      component: () => (
        <div className="text-sm sm:text-base">
          <ol className="list-decimal pl-5">
            <li className="pl-1 pb-5">
              <div className="pb-2">
                Add the following lines to your
                <Code
                  text={'Podfile'}
                  language={'js'}
                  theme={atomOneLight}
                  customStyle={{ marginLeft: 5, marginRight: 5 }}
                />
                :
              </div>
              <CopyBlock
                text={`source 'https://cdn.cocoapods.org' 
source 'https://github.com/OpenVesselIO/Wallet-Pods-iOS.git'
⋮
target '<YOUR PROJECT>' do
    pod 'OpenVesselSDK', '~> 1.7.0'
end`}
                language={'js'}
                theme={atomOneLight}
                showLineNumbers
                wrapLines={true}
                customStyle={{ borderRadius: 10 }}
              />
            </li>
            <li className="pl-1">
              <div className="pb-2">
                Add{' '}
                <Code
                  text={'vesselwa'}
                  language={'js'}
                  theme={atomOneLight}
                  customStyle={{ marginLeft: 5, marginRight: 5 }}
                />{' '}
                scheme to your
                <Code
                  text={'Info.plist'}
                  language={'js'}
                  theme={atomOneLight}
                  customStyle={{ marginLeft: 5, marginRight: 5 }}
                />
              </div>
              <CopyBlock
                text={`<key>LSApplicationQueriesSchemes</key>
<array>
    <string>vesselwa</string>
</array>`}
                language={'js'}
                theme={atomOneLight}
                showLineNumbers
                wrapLines={true}
                customStyle={{ borderRadius: 10 }}
              />
            </li>
          </ol>
        </div>
      ),
    },
  ]);

  const highlightSDK = () => {
    return (
      <div className="w-full lg:w-[800px]">
        <div className="p-4 sm:p-6 md:p-8 text-left bg-gradient-to-r from-[#82dbdd] to-[#7fe5be] rounded-3xl">
          <Tab.Group defaultIndex={1}>
            <div className="flex">
              <Tab.List className="flex space-x-1 rounded-xl bg-white/30 p-1">
                {tabs.map((tab) => (
                  <Tab
                    key={tab.id}
                    className={({ selected }) =>
                      classNames(
                        'w-full rounded-lg py-1 sm:py-2 px-3 sm:px-5 text-xs sm:text-sm font-medium leading-5 text-black whitespace-nowrap',
                        selected ? 'bg-white shadow' : 'hover:bg-white/40'
                      )
                    }
                  >
                    {tab.name}
                  </Tab>
                ))}
              </Tab.List>
            </div>
            <Tab.Panels className="mt-4 sm:mt-6 md:mt-8">
              {tabs.map((content, idx) => (
                <Tab.Panel
                  key={idx}
                  className={classNames('rounded-xl bg-white p-5')}
                >
                  {content.component}
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    );
  };

  const cards = [
    {
      asset: '/assets/images/illustrations/illustration-live-app-1.png',
      className: 'w-[25%] hover:w-[30%] -mr-[1%]',
    },
    {
      asset: '/assets/images/illustrations/illustration-live-app-2.png',
      className: 'w-[35%] hover:w-[40%] mb-[5%] -mx-[1%]',
    },
    {
      asset: '/assets/images/illustrations/illustration-live-app-3.png',
      className: 'w-[30%] hover:w-[35%] mt-[10%] -mx-[1%]',
    },
    {
      asset: '/assets/images/illustrations/illustration-live-app-4.png',
      className: 'w-[20%] hover:w-[25%] mb-[20%] -ml-[1%]',
    },
  ];

  const highlightLive = () => {
    return (
      <div className="relative flex flex-col items-center justify-center gap-5 mt-5">
        <Fade duration={500} delay={250}>
          <img
            src="/assets/images/illustrations/illustration-live-bg.svg"
            alt=""
            className="w-full max-w-3xl"
          />
        </Fade>

        <div className="flex items-center justify-center gap-0 absolute">
          {cards.map((item, idx) => (
            <Fade key={idx} duration={500} bottom delay={500 + idx * 150}>
              <img
                src={item.asset}
                className={`${item.className} transition-all duration-300 `}
                alt=""
              />
            </Fade>
          ))}
        </div>
      </div>
    );
  };

  const highlights = [
    {
      title: 'Seamless and Intuitive Vessel SDK',
      description: 'Our SDK supports Unity, iOS and Android',
      asset: '/assets/images/illustrations/illustration-sdk.png',
      component: highlightSDK(),
      link: {
        href: 'https://docs.openvessel.io/integration/EZzgG67O9oXGl9CReheF/',
        label: 'Explore Documentation',
        isExternal: true,
      },
    },
    {
      title: 'Get an edge today and go live on Vessel!',
      description:
        "Our wallet is used by consumers to discover, purchase, sell, and trade NFTs for mobile applications. Once you've built an awesome experience using Vessel's infrastructure, you can be listed on our marketplace and gain exposure!",
      asset: '/assets/images/illustrations/illustration-live.png',
      component: highlightLive(),
    },
  ];

  return (
    <>
      {highlights.map((item: any, idx: number) => (
        <div key={idx} className="section">
          <Section className="mt-[64px] md:mt-[80px] lg:mt-[84px]">
            <div className="flex flex-col gap-24">
              <div className="relative flex flex-col justify-center items-center text-center gap-3 lg:gap-4">
                <Fade bottom duration={750} delay={250}>
                  <h1 className="text-3xl lg:text-4xl xl:text-5xl xl:leading-[60px] font-medium mb-0 tracking-tight">
                    {item.title}
                  </h1>
                </Fade>
                <Fade bottom duration={750} delay={250}>
                  <p className="lg:text-lg lg:w-2/3 lg:leading-7 text-black/80 whitespace-pre-line">
                    {item.description}
                  </p>
                </Fade>

                {idx === 1 && (
                  <Fade bottom duration={750} delay={250}>
                    <div className="mt-4 z-[2] flex gap-3 justify-center">
                      <Link
                        href={
                          'https://apps.apple.com/us/app/vessel-nft-wallet/id1596353181'
                        }
                        passHref
                      >
                        <a
                          className="flex items-center text-primary"
                          target="_blank"
                        >
                          <img
                            className={'h-11'}
                            src="/assets/images/badges/badge-app-store-2.png"
                            alt=""
                          />
                        </a>
                      </Link>
                      <Link
                        href={
                          'https://play.google.com/store/apps/details?id=io.openvessel.wallet'
                        }
                        passHref
                      >
                        <a
                          className="flex items-center text-primary"
                          target="_blank"
                        >
                          <img
                            className={'h-16'}
                            src="/assets/images/badges/badge-google-play-2.png"
                            alt=""
                          />
                        </a>
                      </Link>
                    </div>
                  </Fade>
                )}

                <Fade bottom duration={750} delay={250}>
                  <div className="mt-8 flex flex-col items-center gap-8">
                    {item.component ? (
                      item.component
                    ) : (
                      <img
                        src={item.asset}
                        alt=""
                        className="w-full max-w-3xl aspect-auto"
                      />
                    )}

                    {item.link && (
                      <Link href={item.link.href} passHref>
                        <a
                          className="flex items-center text-primary"
                          target="_blank"
                        >
                          {item.link.label}
                          {item.link.isExternal && (
                            <div className="ml-2">
                              <LinkOut strokeWidth={3} size={16} />
                            </div>
                          )}
                        </a>
                      </Link>
                    )}
                  </div>
                </Fade>
              </div>
            </div>
          </Section>
        </div>
      ))}
    </>
  );
};

export default Highlights;

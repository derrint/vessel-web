import React from 'react';

import { LinkOut } from 'akar-icons';
import Link from 'next/link';
import { Fade } from 'react-reveal';

import { Background } from '@components/background';
import { Section } from '@components/layout';

const Highlights = () => {
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
        <Fade duration={500} delay={750}>
          <img
            src="/assets/images/illustrations/illustration-live-bg.svg"
            alt=""
            className="w-full max-w-3xl"
          />
        </Fade>

        <div className="flex items-center justify-center gap-0 absolute">
          {cards.map((item, idx) => (
            <Fade key={idx} duration={500} bottom delay={1000 + idx * 150}>
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
    <Fade bottom duration={750} delay={250}>
      <Background color="bg-white" className="overflow-hidden">
        <Section>
          <div className="flex flex-col gap-24 lg:gap-32">
            {highlights.map((item: any, idx: number) => (
              <div
                key={idx}
                className="relative flex flex-col justify-center items-center text-center gap-3 lg:gap-4"
              >
                <Fade bottom duration={750} delay={500}>
                  <h1 className="text-3xl lg:text-4xl xl:text-5xl xl:leading-[60px] font-medium mb-0 tracking-tight">
                    {item.title}
                  </h1>
                </Fade>
                <Fade bottom duration={750} delay={750}>
                  <p className="lg:text-lg lg:w-2/3 lg:leading-7 text-black/80 whitespace-pre-line">
                    {item.description}
                  </p>
                </Fade>

                <Fade bottom duration={750} delay={1000}>
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
            ))}
          </div>
        </Section>
      </Background>
    </Fade>
  );
};

export default Highlights;

import React from 'react';

import { LinkOut } from 'akar-icons';
import Link from 'next/link';
import { Fade } from 'react-reveal';

import { Background } from '@components/background';
import { Section } from '@components/layout';

const Highlights = () => {
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
      title: 'Listing your game on Vessel, Now!',
      description:
        "The Vessel Wallet is used by consumers to discover, purchase and sell rare digital items. You'll be open up your items to a large user base of gamers, traders, and crypto enthusiasts.\nHassle free & more discoverability!",
      asset: '/assets/images/illustrations/illustration-listing.png',
    },
  ];
  return (
    <Fade bottom duration={750} delay={250}>
      <Background color="bg-white" className="overflow-hidden">
        <Section yPadding="py-8 sm:py-16 lg:py-32">
          <Fade bottom duration={750} delay={500} cascade>
            <div className="flex flex-col gap-32">
              {highlights.map((item: any, idx: number) => (
                <div
                  key={idx}
                  className="relative flex flex-col justify-center items-center text-center gap-1 lg:gap-4"
                >
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl lg:leading-[60px] font-medium mb-0 tracking-tight">
                    {item.title}
                  </h1>
                  <p className="lg:text-lg lg:w-2/3 lg:leading-7 text-black/80 whitespace-pre-line">
                    {item.description}
                  </p>

                  <div className="mt-8 flex flex-col items-center gap-8">
                    <img
                      src={item.asset}
                      alt=""
                      className="w-full max-w-3xl aspect-auto"
                    />

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
                </div>
              ))}
            </div>
          </Fade>
        </Section>
      </Background>
    </Fade>
  );
};

export default Highlights;

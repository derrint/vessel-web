import React from 'react';

import { LinkOut } from 'akar-icons';
import Link from 'next/link';
import { Fade } from 'react-reveal';

import { Background } from '@components/background';
import { Section } from '@components/layout';

const Code = () => {
  return (
    <Fade bottom duration={750} delay={250}>
      <Background color="bg-white" className="overflow-hidden">
        <Section yPadding="py-8 sm:py-16 lg:py-32">
          <Fade bottom duration={750} delay={500} cascade>
            <div className="relative pb-10 flex flex-col justify-center items-center text-center gap-1 lg:gap-4">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl lg:leading-[60px] font-medium mb-0 tracking-tight">
                Seamless and Intuitive Vessel SDK
              </h1>
              <p className="lg:text-lg lg:w-2/3 lg:leading-7 text-black/80">
                Our SDK supports Unity, iOS and Android
              </p>

              <div className="mt-8 flex flex-col items-center gap-8">
                <img
                  src={'/assets/images/illustrations/illustration-sdk.png'}
                  alt=""
                  className="w-full max-w-3xl aspect-auto"
                />

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
            </div>
          </Fade>
        </Section>
      </Background>
    </Fade>
  );
};

export default Code;

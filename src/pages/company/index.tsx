import React from 'react';

import { LinkOut } from 'akar-icons';
import Link from 'next/link';
import { Fade } from 'react-reveal';

import { Background } from '@components/background';
import { Section } from '@components/layout';

const Highlights = () => {
  const [state, setState] = React.useState({
    isReady: false,
  });

  React.useEffect(() => {
    setTimeout(() => {
      setState({ ...state, isReady: true });
    }, 250);

    return () => {};
  }, []);

  const highlights = [
    {
      title: 'About Vessel',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      asset: '/assets/images/illustrations/illustration-main.png',
    },
  ];
  return (
    <Fade bottom duration={750} delay={250} when={state.isReady}>
      <Background color="bg-white" className="overflow-hidden">
        <Section yPadding="py-8 sm:py-16 lg:py-32">
          <div className="flex flex-col gap-32">
            {highlights.map((item: any, idx: number) => (
              <Fade
                bottom
                duration={750}
                delay={500}
                cascade
                when={state.isReady}
                key={idx}
              >
                <div className="relative flex flex-col justify-center items-center text-center gap-1 lg:gap-12">
                  <h1 className="text-3xl sm:text-4xl lg:text-6xl lg:leading-[80px] font-semibold mb-0 tracking-tight">
                    {item.title}
                  </h1>
                  <p className="text-base lg:text-lg lg:w-2/3 lg:leading-7 text-black/80 whitespace-pre-line">
                    {item.description}
                  </p>

                  <div className="mt-8 flex flex-col items-center gap-8">
                    <img
                      src={item.asset}
                      alt=""
                      className="w-full max-w-lg aspect-auto"
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
              </Fade>
            ))}
          </div>
        </Section>
      </Background>
    </Fade>
  );
};

export default Highlights;

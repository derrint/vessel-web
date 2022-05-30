import React from 'react';

import { Fade } from 'react-reveal';

import { Section } from '@components/layout';

const Features = () => {
  const [state, setState] = React.useState({
    isReady: false,
  });

  React.useEffect(() => {
    setTimeout(() => {
      setState({ ...state, isReady: true });
    }, 250);

    return () => {};
  }, []);

  const features = [
    {
      title: 'Quick & Seamless Setup',
      description:
        'As easy as 1,2,3, just log into your AppLovin Dashboard and create a new app or game. Vessel have everything ready to integrate your mobile app. Create a token, mint it and integrate SDK, just a minutes away!',
      asset: '/assets/images/illustrations/illustration-seamless.png',
    },
    {
      title: 'Focus on App Design, Content & Users',
      description:
        'With no gas fee and easy integration, you can focus more on the essential things like design, content and your users.\nYour Vessel storefront can be tailored exactly to your project, creating a fully customizable landing page and marketplace.',
      asset: '/assets/images/illustrations/illustration-users.png',
    },
    {
      title: 'We power blockchain infrastructure for mobile applications',
      description:
        'Vessel app provides a production, staging and development environment. Our features will enable you to do anything in blockchain. Build an app, yes. Mint an NFT, absolutely. Buy, sell & store your items, everything on us.\n\n\nNothing like Vessel.',
      asset: '/assets/images/illustrations/illustration-infra.png',
    },
  ];

  return (
    <Section yPadding="py-8 sm:py-16" id="features">
      <div className="relative flex flex-col justify-center z-[1] gap-40">
        {features.map((item: any, idx: number) => (
          <div
            key={idx}
            className={`flex gap-36 items-center ${
              idx % 2 === 0 ? 'flex-row-reverse' : ''
            }`}
          >
            <Fade left duration={750} delay={0} when={state.isReady}>
              <div className="w-full sm:w-2/3 lg:w-1/2">
                <h3 className="text-xl sm:text-2xl lg:text-5xl font-medium mb-3 lg:mb-5 tracking-tight lg:leading-[60px]">
                  {item.title}
                </h3>

                <p className="text-base lg:text-lg lg:leading-7 text-black/80">
                  {item.description}
                </p>
              </div>
            </Fade>
            <Fade left duration={750} delay={0} when={state.isReady}>
              <div className="w-full sm:w-1/3 lg:w-1/2">
                <img src={item.asset} alt="" className="w-full" />
              </div>
            </Fade>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Features;

/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';

import { FaChevronDown } from 'react-icons/fa';
import { IoPaperPlaneOutline } from 'react-icons/io5';
import { Fade } from 'react-reveal';

import { Background } from '@components/background';
import { Section } from '@components/layout';

const ContactUs = () => {
  const numOfPeople = ['1 - 50', '50 - 200', '200 - 5000', '5000+'];
  const interest = ['Mobile App Development', 'Mobile Game', 'NFT', 'Others'];

  const [state, setState] = React.useState({
    isReady: false,
    playable: '',
  });

  React.useEffect(() => {
    setState({ ...state, isReady: true });

    return () => {};
  }, []);

  return (
    <Fade bottom duration={750} delay={0}>
      <Background
        color="bg-gradient-to-b from-gradient-primary-start to-gradient-primary-end"
        className="relative z-[1]"
      >
        <Section
          id="contact"
          yPadding="py-16 lg:py-24 xl:py-32"
          className="z-[1] mt-[64px] md:mt-[80px] lg:mt-[84px]"
        >
          <Fade bottom duration={750} delay={250} cascade>
            <form action="https://formspree.io/f/mwkyzpjq" method="POST">
              <h1 className="text-3xl lg:text-4xl xl:text-5xl xl:leading-[60px] font-medium mb-3 lg:mb-5 tracking-tight text-center text-white">
                Bring NFTs to your mobile games with{' '}
                <span className="font-bold">Vessel</span> today
              </h1>
              <p className="lg:text-lg lg:leading-7 text-white/80 whitespace-pre-line text-center">
                We guarantee you a response in under 24 hours.
                <br />
                Our API is completely free, create NFTs at zero cost.
                <br />
                No blockchain experience necessary.
              </p>

              <div className="flex flex-col items-center mt-12">
                <div className="flex flex-col sm:grid sm:grid-cols-2 gap-6 w-full max-w-screen-md">
                  <div className="">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="block w-full px-5 py-4 sm:text-sm rounded-2xl bg-white outline-1 outline-secondary"
                      placeholder="Full name*"
                      required
                    />
                  </div>

                  <div className="">
                    <input
                      type="text"
                      name="applovin"
                      id="applovin"
                      className="block w-full px-5 py-4 sm:text-sm rounded-2xl bg-white outline-1 outline-secondary"
                      placeholder="Applovin account"
                      required
                    />
                  </div>

                  <div className="">
                    <input
                      type="text"
                      name="telegram_discord"
                      id="telegram_discord"
                      className="block w-full px-5 py-4 sm:text-sm rounded-2xl bg-white outline-1 outline-secondary"
                      placeholder="Telegram or Discord"
                      required
                    />
                  </div>

                  <div className="">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="block w-full px-5 py-4 sm:text-sm rounded-2xl bg-white outline-1 outline-secondary"
                      placeholder="Email*"
                      required
                    />
                  </div>

                  <div className="relative">
                    <select
                      id="num_of_people"
                      name="num_of_people"
                      className="block w-full px-5 py-4 sm:text-sm rounded-2xl bg-white outline-1 outline-secondary appearance-none"
                      required
                    >
                      <option value="" disabled selected>
                        Number of people
                      </option>
                      {numOfPeople.map((item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                    <FaChevronDown
                      size={12}
                      className="absolute top-1/2 -translate-y-1/2 right-3"
                    />
                  </div>

                  <div className="relative">
                    <select
                      id="interest"
                      name="interest"
                      className="block w-full px-5 py-4 sm:text-sm rounded-2xl bg-white outline-1 outline-secondary appearance-none"
                      required
                    >
                      <option value="" disabled selected>
                        Interested in
                      </option>
                      {interest.map((item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                    <FaChevronDown
                      size={12}
                      className="absolute top-1/2 -translate-y-1/2 right-3"
                    />
                  </div>
                </div>

                <div className="w-full max-w-screen-md mt-6">
                  <textarea
                    name="message"
                    id="message"
                    className="block w-full px-5 py-4 sm:text-sm rounded-2xl bg-white outline-1 outline-secondary"
                    placeholder="Any else? Let us know"
                  />
                </div>

                <div className="flex mt-6 justify-center sm:justify-start">
                  <button
                    type="submit"
                    className="lg:text-xl bg-secondary px-8 lg:px-10 py-3 lg:py-4 rounded-2xl flex items-center gap-4 font-medium"
                  >
                    Reach out
                    <IoPaperPlaneOutline size={24} />
                  </button>
                </div>
              </div>
            </form>
          </Fade>
        </Section>

        <Fade right duration={750} delay={500} when={state.isReady}>
          <img
            src="/assets/images/vectors/swoosh-lg.svg"
            alt=""
            className="absolute right-0 top-10 sm:top-[30%] w-20 sm:w-[120px] -z-[1]"
          />
        </Fade>

        <Fade right duration={750} delay={250} when={state.isReady}>
          <img
            src="/assets/images/vectors/swoosh-lg.svg"
            alt=""
            className="absolute left-0 sm:left-5 lg:left-[10%] top-5 sm:top-[20%] xl:top-[40%] w-20 sm:w-[120px] -z-[1]"
          />
        </Fade>

        <Fade right duration={750} delay={750} when={state.isReady}>
          <img
            src="/assets/images/vectors/swoosh-lg.svg"
            alt=""
            className="absolute right-[10%] bottom-5 sm:bottom-[10%] w-20 sm:w-[120px] -z-[1]"
          />
        </Fade>
      </Background>
    </Fade>
  );
};

export default ContactUs;

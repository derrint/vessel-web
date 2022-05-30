import React from 'react';

import { FaChevronDown } from 'react-icons/fa';
import { IoPaperPlaneOutline } from 'react-icons/io5';
import { Fade, Zoom } from 'react-reveal';

import { Background } from '@components/background';
import { Section } from '@components/layout';

const ContactUs = () => {
  const numOfPeople = ['1 - 50', '50 - 200', '200 - 5000', '5000+'];

  const [state, setState] = React.useState({
    isReady: false,
    playable: '',
  });

  React.useEffect(() => {
    setState({ ...state, isReady: true });

    return () => {};
  }, []);

  return (
    <Background
      color="bg-gradient-to-b from-gradient-primary-start to-gradient-primary-end"
      className="relative"
    >
      <Section id="contact" yPadding="py-32">
        <Fade bottom duration={750} delay={500} cascade>
          <form action="https://formspree.io/f/mayvploj" method="POST">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl lg:leading-[60px] font-medium mb-0 tracking-tight text-center text-white">
              Build in the metaverse with{' '}
              <span className="font-bold">Vessel</span> today
            </h1>
            <p className="lg:text-lg lg:leading-7 text-white/80 whitespace-pre-line text-center mt-6">
              We guarantee you a response in under 24 hours.
              <br />
              Our API is completely free, create NFTs at zero cost.
              <br />
              No blockchain experience necessary.
            </p>

            <div className="flex flex-col items-center mt-12">
              <div className="grid grid-cols-2 gap-6 w-full max-w-screen-md">
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
                    id="num_of_people"
                    name="num_of_people"
                    className="block w-full px-5 py-4 sm:text-sm rounded-2xl bg-white outline-1 outline-secondary appearance-none"
                    required
                  >
                    <option value="" disabled selected>
                      Blockchain of interest
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
              </div>

              <div className="w-full max-w-screen-md mt-6">
                <textarea
                  name="description"
                  id="description"
                  className="block w-full px-5 py-4 sm:text-sm rounded-2xl bg-white outline-1 outline-secondary"
                  placeholder="We need help to...."
                />
              </div>

              <div className="flex mt-6 justify-center sm:justify-start">
                <button
                  type="submit"
                  className="lg:text-xl bg-secondary px-10 py-4 rounded-2xl flex items-center gap-4 font-medium"
                >
                  Reach out
                  <IoPaperPlaneOutline size={24} />
                </button>
              </div>
            </div>
          </form>
        </Fade>
      </Section>

      <Zoom duration={750} delay={500} when={state.isReady}>
        <img
          src="/assets/images/vectors/swoosh-lg.svg"
          alt=""
          className="absolute right-0 top-[30%] w-[120px] z-[1]"
        />
      </Zoom>

      <Zoom duration={750} delay={1250} when={state.isReady}>
        <img
          src="/assets/images/vectors/swoosh-lg.svg"
          alt=""
          className="absolute left-[10%] top-[40%] w-[120px] z-[1]"
        />
      </Zoom>

      <Zoom duration={750} delay={1000} when={state.isReady}>
        <img
          src="/assets/images/vectors/swoosh-lg.svg"
          alt=""
          className="absolute right-[10%] bottom-[10%] w-[120px] z-[1]"
        />
      </Zoom>
    </Background>
  );
};

export default ContactUs;

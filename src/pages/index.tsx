import {
  Banner,
  About,
  Spotlight,
  AdNetwork,
  ContactUs,
  Portfolio,
  Testimonials,
} from '@components/page/home';

const Home = () => {
  return (
    <>
      <Banner />
      <Portfolio />
      <About />
      {/* <Offers /> */}
      <Testimonials />
      {/* <Services /> */}
      <Spotlight />
      <AdNetwork />
      <ContactUs />
    </>
  );
};

export default Home;

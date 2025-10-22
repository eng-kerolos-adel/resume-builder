import Banner from "../components/home/Banner";
import CallToAction from "../components/home/CallToAction";
import Features from "../components/home/Features";
import Footer from "../components/home/Footer";
import Hero from "../components/home/Hero";
import Testimonial from "../components/home/Testimonial";

const Home = () => {
  return (
    <main>
      <Banner />
      <Hero />
      <Features />
      <Testimonial />
      <CallToAction />
      <Footer />
    </main>
  );
};

export default Home;

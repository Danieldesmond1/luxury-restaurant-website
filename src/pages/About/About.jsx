import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import AboutHero from "../../components/About/AboutHero/AboutHero";
import OurStory from "../../components/About/OurStory/OurStory";
import ExecutiveChef from "../../components/About/ExecutiveChef/ExecutiveChef";
import Awards from "../../components/About/Awards/Awards";
// import ReservationCTA from "../../components/About/ReservationCTA/ReservationCTA";

const About = () => {
  return (
    <>
      <Navbar />

      <main>

        <AboutHero />

        <OurStory />

        <ExecutiveChef />

        <Awards />

        {/* <ReservationCTA /> */}

      </main>

      <Footer />
    </>
  );
};

export default About;
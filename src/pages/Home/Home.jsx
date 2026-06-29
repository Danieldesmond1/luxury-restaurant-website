import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import SignatureCollection from "../../components/SignatureCollection/SignatureCollection";
import Philosophy from "../../components/Philosophy/Philosophy";
import Testimonials from "../../components/Testimonials/Testimonials";
import Gallery from "../../components/Gallery/Gallery";
import ReservationCTA from "../../components/ReservationCTA/ReservationCTA";
import Newsletter from "../../components/Newsletter/Newsletter";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <SignatureCollection />
      <Philosophy />
      <Testimonials />
      <Gallery />
      <ReservationCTA />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Home;
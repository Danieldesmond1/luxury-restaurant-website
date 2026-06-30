import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import MenuHero from "../../components/Menu/MenuHero/MenuHero";
import MenuCategories from "../../components/Menu/MenuCategories/MenuCategories";
import MenuGrid from "../../components/Menu/MenuGrid/MenuGrid";
import FeaturedSpecial from "../../components/Menu/FeaturedSpecial/FeaturedSpecial";
import WinePairing from "../../components/Menu/WinePairing/WinePairing";

const Menu = () => {
  return (
    <>
      <Navbar />

      <MenuHero />

      <MenuCategories />

      <MenuGrid />

      <FeaturedSpecial />

      <WinePairing />

      <Footer />
    </>
  );
};

export default Menu;
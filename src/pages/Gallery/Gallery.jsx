import { useState } from "react";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import GalleryHero from "../../components/GalleryPage/GalleryHero/GalleryHero";
import GalleryFilter from "../../components/GalleryPage/GalleryFilter/GalleryFilter";
import GalleryGrid from "../../components/GalleryPage/GalleryGrid/GalleryGrid";
import BehindTheScenes from "../../components/GalleryPage/BehindTheScenes/BehindTheScenes";
import InstagramCTA from "../../components/GalleryPage/InstagramCTA/InstagramCTA";

const Gallery = () => {

  const [activeCategory, setActiveCategory] =
    useState("All");

  return (
    <>

      <Navbar />

      <main>

        <GalleryHero />

        <GalleryFilter
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />

        <GalleryGrid
          activeCategory={activeCategory}
        />

        <BehindTheScenes />

        <InstagramCTA />

      </main>

      <Footer />

    </>
  );
};

export default Gallery;
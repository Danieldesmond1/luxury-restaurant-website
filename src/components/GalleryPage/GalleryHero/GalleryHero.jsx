import "./GalleryHero.css";
import heroImage from "../../../assets/images/gallery/gallery-hero.jpg";

const GalleryHero = () => {
  return (
    <section
      className="gallery-hero"
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      <div className="gallery-hero-overlay"></div>

      <div className="container gallery-hero-content">

        <span className="gallery-tag">
          Luxury Gallery
        </span>

        <h1>
          Every Detail
          <br />
          Tells A Story
        </h1>

        <p>
          Step inside a world where exceptional cuisine, timeless
          interiors, handcrafted cocktails, and unforgettable
          celebrations come together to create moments worth
          remembering.
        </p>

        <div className="gallery-buttons">

          <button className="gallery-primary-btn">
            Explore Gallery
          </button>

          <button className="gallery-secondary-btn">
            Private Events
          </button>

        </div>

        <div className="gallery-scroll">

          <span>Scroll</span>

          <div className="scroll-line"></div>

        </div>

      </div>

    </section>
  );
};

export default GalleryHero;
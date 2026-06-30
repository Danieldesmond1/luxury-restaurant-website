import "./AboutHero.css";
import aboutHero from "../../../assets/images/about/about-hero.jpg";

const AboutHero = () => {
  return (
    <section
      className="about-hero"
      style={{
        backgroundImage: `url(${aboutHero})`,
      }}
    >
      <div className="about-hero-overlay"></div>

      <div className="container about-hero-content">

        <span className="about-hero-tag">
          Since 1998 • New York
        </span>

        <h1>
          Where Culinary
          <br />
          Excellence
          <br />
          Becomes Art
        </h1>

        <p>
          Every unforgettable evening begins with passion, precision,
          and timeless hospitality. Discover the story behind
          DineCraft — where exceptional cuisine meets world-class
          service in the heart of New York.
        </p>

        <div className="about-hero-buttons">

          <button className="about-primary-btn">
            Our Story
          </button>

          <button className="about-secondary-btn">
            Reserve a Table
          </button>

        </div>

        <div className="about-breadcrumb">

          <span>Home</span>

          <span>/</span>

          <strong>About</strong>

        </div>

      </div>

    </section>
  );
};

export default AboutHero;
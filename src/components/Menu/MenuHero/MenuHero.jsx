import "./MenuHero.css";
import heroImage from "../../../assets/images/menu-hero.jpg";

const MenuHero = () => {
  return (
    <section
      className="menu-hero"
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      <div className="menu-hero-overlay"></div>

      <div className="container">

        <div className="menu-hero-content">

          <span>
            Fine Dining Experience
          </span>

          <h1>
            Our Signature Menu
          </h1>

          <p>
            Discover an extraordinary collection of world-class
            cuisine, handcrafted by award-winning chefs using the
            finest seasonal ingredients sourced from around the globe.
          </p>

          <div className="menu-breadcrumb">

            <span>Home</span>

            <span className="divider">
              /
            </span>

            <strong>
              Menu
            </strong>

          </div>

        </div>

      </div>

      <div className="hero-scroll">

        <span></span>

      </div>

    </section>
  );
};

export default MenuHero;
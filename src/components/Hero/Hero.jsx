import "./Hero.css";
import restaurantBackgroundImage from "../../assets/images/restaurantBackgroundImage.jpg";
import signatureDish from "../../assets/images/signatureDish.jpg";

const Hero = () => {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${restaurantBackgroundImage})`,
      }}
    >
      <div className="hero-overlay"></div>

      <div className="container hero-wrapper">

        <div className="hero-left">

          <span className="hero-tag">
            EST. 1998 • NEW YORK
          </span>

          <h1 className="hero-title">
            THE
            <br />
            ART OF
            <br />
            FINE DINING
          </h1>

          <p className="hero-description">
            Where culinary artistry meets timeless elegance.
            Every dish is thoughtfully crafted using exceptional
            ingredients, refined techniques, and impeccable service.
          </p>

          <div className="hero-buttons">

            <button className="btn-primary">
              Reserve Table
            </button>

            <button className="hero-outline-btn">
              View Menu
            </button>

          </div>

          <div className="hero-stats">

            <div>
              <h2>15+</h2>
              <p>Years</p>
            </div>

            <div>
              <h2>40+</h2>
              <p>Signature Dishes</p>
            </div>

            <div>
              <h2>25K+</h2>
              <p>Guests</p>
            </div>

            <div>
              <h2>★</h2>
              <p>Award Winning</p>
            </div>

          </div>

        </div>

        <div className="hero-right">

          <div className="chef-card">

            <img
                src={signatureDish}
                alt="Japanese A5 Wagyu"
                className="chef-card-image"
            />

            <span>Chef's Selection</span>

            <h3>Japanese A5 Wagyu</h3>

            <p>
                Premium Miyazaki Wagyu served with seasonal vegetables,
                truffle butter, and a rich red wine reduction.
            </p>

            <div className="price-row">
                <strong>$145</strong>

                <button>
                Reserve
                </button>
            </div>

            </div>

        </div>

      </div>

      <div className="reservation-strip">

        <div className="reservation-item">
            <span>Guests</span>
            <h4>2 People</h4>
        </div>

        <div className="reservation-item">
            <span>Date</span>
            <h4>22 Dec</h4>
        </div>

        <div className="reservation-item">
            <span>Time</span>
            <h4>7:30 PM</h4>
        </div>

        <button>
            Reserve Now
        </button>

     </div>

     <div className="scroll-indicator">

        <span>Scroll</span>

        <div className="scroll-line"></div>

     </div>

    </section>
  );
};

export default Hero;
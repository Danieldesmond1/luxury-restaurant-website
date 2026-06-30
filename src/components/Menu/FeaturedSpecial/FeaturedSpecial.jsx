import "./FeaturedSpecial.css";
import featuredImage from "../../../assets/images/menu/featured-special.jpg";

const FeaturedSpecial = () => {
  return (
    <section className="featured-special">

      <div className="container featured-wrapper">

        {/* Left */}

        <div className="featured-image">

          <img
            src={featuredImage}
            alt="Chef Signature Wagyu"
          />

          <div className="featured-badge">
            Chef's Signature
          </div>

        </div>

        {/* Right */}

        <div className="featured-content">

          <span className="featured-tag">
            Featured Experience
          </span>

          <h2>
            Japanese A5 Wagyu
            <br />
            Tasting Experience
          </h2>

          <p>
            Our most celebrated masterpiece. Authentic Japanese A5
            Wagyu, expertly grilled over Binchotan charcoal and finished
            with freshly shaved black truffle, smoked butter and seasonal
            vegetables sourced from local artisan farms.
          </p>

          <div className="featured-details">

            <div>

              <h4>Origin</h4>

              <span>Miyazaki, Japan</span>

            </div>

            <div>

              <h4>Preparation</h4>

              <span>35 Minutes</span>

            </div>

            <div>

              <h4>Wine Pairing</h4>

              <span>Cabernet Reserve</span>

            </div>

          </div>

          <div className="featured-footer">

            <div>

              <small>Starting From</small>

              <h3>$165</h3>

            </div>

            <button>
              Reserve This Experience
            </button>

          </div>

        </div>

      </div>

    </section>
  );
};

export default FeaturedSpecial;
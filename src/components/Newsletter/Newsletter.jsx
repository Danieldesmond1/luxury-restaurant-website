import "./Newsletter.css";
import newsletterBg from "../../assets/images/newsletter-bg.jpg";

const Newsletter = () => {
  return (
    <section
      className="newsletter-section"
      style={{
        backgroundImage: `url(${newsletterBg})`,
      }}
    >
      <div className="newsletter-overlay"></div>

      <div className="container newsletter-wrapper">

        <span className="newsletter-tag">
          THE PRIVATE DINING JOURNAL
        </span>

        <h2>
          Become Part Of
          <br />
          Our Inner Circle
        </h2>

        <p>
          Receive seasonal tasting menus, chef's table invitations,
          exclusive reservation windows, wine pairing events, and
          carefully curated culinary stories before anyone else.
        </p>

        <form className="newsletter-form">

          <input
            type="email"
            placeholder="Enter your email address"
          />

          <button type="submit">
            Join The Circle
          </button>

        </form>

        <div className="newsletter-benefits">

          <div className="benefit">
            ✓ Seasonal Menus
          </div>

          <div className="benefit">
            ✓ Chef's Table Access
          </div>

          <div className="benefit">
            ✓ Wine Pairings
          </div>

          <div className="benefit">
            ✓ VIP Reservations
          </div>

        </div>

      </div>

      <div className="newsletter-glow glow-one"></div>
      <div className="newsletter-glow glow-two"></div>

    </section>
  );
};

export default Newsletter;
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-top">

        <div className="container footer-cta">

          <span className="footer-tag">
            Reserve Your Evening
          </span>

          <h2>
            Experience New York's Finest Dining
          </h2>

          <p>
            Every unforgettable evening begins with a reservation.
            Allow us to create an experience crafted around elegance,
            exceptional cuisine, and timeless hospitality.
          </p>

          <button className="footer-reserve-btn">
            Reserve A Table
          </button>

        </div>

      </div>

      <div className="container footer-main">

        <div className="footer-brand">

          <h2>
            ÉLÉGANCE
          </h2>

          <p>
            Since 1998, we've created unforgettable dining experiences
            through exceptional cuisine, world-class hospitality,
            and timeless sophistication in the heart of New York.
          </p>

        </div>

        <div className="footer-links">

          <h3>
            Explore
          </h3>

          <ul>

            <li><a href="/">Home</a></li>

            <li><a href="/about">About</a></li>

            <li><a href="/menu">Menu</a></li>

            <li><a href="/gallery">Gallery</a></li>

            <li><a href="/reservation">Reservations</a></li>

            <li><a href="/contact">Contact</a></li>

          </ul>

        </div>

        <div className="footer-hours">

          <h3>
            Opening Hours
          </h3>

          <ul>

            <li>
              <span>Mon - Thu</span>
              <strong>5PM - 10PM</strong>
            </li>

            <li>
              <span>Friday</span>
              <strong>5PM - 11PM</strong>
            </li>

            <li>
              <span>Saturday</span>
              <strong>4PM - 11PM</strong>
            </li>

            <li>
              <span>Sunday</span>
              <strong>4PM - 9PM</strong>
            </li>

          </ul>

        </div>

        <div className="footer-contact">

          <h3>
            Contact
          </h3>

          <p>
            245 Madison Avenue
            <br />
            New York, NY
          </p>

          <p>
            +1 (212) 555-0147
          </p>

          <p>
            reservations@elegance.com
          </p>

          <div className="footer-socials">

            <a href="#">Instagram</a>

            <a href="#">Facebook</a>

            <a href="#">Pinterest</a>

          </div>

        </div>

      </div>

      <div className="footer-bottom">

        <div className="container footer-bottom-content">

          <p>
            © 2026 ÉLÉGANCE. All Rights Reserved.
          </p>

          <div>

            <a href="#">
              Privacy
            </a>

            <a href="#">
              Terms
            </a>

            <a href="#">
              Cookies
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;
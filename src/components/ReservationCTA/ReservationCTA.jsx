import "./ReservationCTA.css";
import reservationBg from "../../assets/images/reservation-bg.jpg";

const ReservationCTA = () => {
  return (
    <section
      className="reservation-cta"
      style={{
        backgroundImage: `url(${reservationBg})`,
      }}
    >
      <div className="reservation-overlay"></div>

      <div className="container reservation-wrapper">

        {/* LEFT */}

        <div className="reservation-left">

          <span className="reservation-tag">
            EST. 1998 • RESERVATIONS
          </span>

          <h2 className="reservation-title">
            Reserve
            <br />
            An Extraordinary
            <br />
            Evening
          </h2>

          <p className="reservation-text">
            Every exceptional dining experience begins long before the
            first course arrives. From intimate celebrations to business
            dinners and unforgettable evenings, allow us to prepare an
            experience defined by culinary excellence and impeccable
            hospitality.
          </p>

          <div className="reservation-info">

            <div className="info-item">
              <h4>Opening Hours</h4>
              <span>Mon – Sun • 5:00 PM – 11:00 PM</span>
            </div>

            <div className="info-item">
              <h4>Dress Code</h4>
              <span>Elegant Smart Casual</span>
            </div>

            <div className="info-item">
              <h4>Private Dining</h4>
              <span>Available For Special Events</span>
            </div>

            <div className="info-item">
              <h4>Michelin Experience</h4>
              <span>Seasonal Chef's Tasting Menu</span>
            </div>

          </div>

        </div>

        {/* RIGHT */}

        <div className="reservation-card">

          <span className="card-subtitle">
            Table Booking
          </span>

          <h3>
            Reserve Your Table
          </h3>

          <form className="reservation-form">

            <div className="field">

              <label>Reservation Date</label>

              <input type="date" />

            </div>

            <div className="field">

              <label>Guests</label>

              <select>

                <option>2 Guests</option>
                <option>4 Guests</option>
                <option>6 Guests</option>
                <option>8 Guests</option>

              </select>

            </div>

            <div className="field">

              <label>Preferred Time</label>

              <select>

                <option>5:30 PM</option>
                <option>6:30 PM</option>
                <option>7:30 PM</option>
                <option>8:30 PM</option>
                <option>9:30 PM</option>

              </select>

            </div>

            <button type="submit">
              Reserve Your Experience
            </button>

          </form>

          <div className="reservation-note">

            <div>

              <strong>Complimentary</strong>

              <span>
                Valet Parking
              </span>

            </div>

            <div>

              <strong>Private</strong>

              <span>
                Dining Rooms
              </span>

            </div>

          </div>

        </div>

      </div>

      <div className="container reservation-features">

        <article className="feature-card">

          <span>01</span>

          <h4>Private Dining</h4>

          <p>
            Elegant private rooms designed for unforgettable celebrations,
            anniversaries and executive dinners.
          </p>

        </article>

        <article className="feature-card">

          <span>02</span>

          <h4>Chef's Tasting</h4>

          <p>
            Experience our signature seasonal tasting menu crafted by our
            award-winning culinary team.
          </p>

        </article>

        <article className="feature-card">

          <span>03</span>

          <h4>World-Class Wine</h4>

          <p>
            Explore an exceptional collection of rare wines curated by our
            in-house sommelier.
          </p>

        </article>

      </div>

    </section>
  );
};

export default ReservationCTA;
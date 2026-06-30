import "./Awards.css";
import { FaAward } from "react-icons/fa";
import awards from "../../../data/awards";

const Awards = () => {
  return (
    <section className="awards">

      <div className="container">

        <div className="awards-heading">

          <span>
            Recognized Worldwide
          </span>

          <h2>
            Excellence Recognized
            <br />
            Across The World's Finest Tables
          </h2>

          <p>
            Every recognition reflects our unwavering commitment to
            exceptional cuisine, timeless hospitality, and unforgettable
            dining experiences.
          </p>

        </div>

        <div className="awards-grid">

          {awards.map((award) => (

            <article
              className="award-card"
              key={award.id}
            >

              <div className="award-icon">

                <FaAward />

              </div>

              <span className="award-year">
                {award.year}
              </span>

              <h3>
                {award.title}
              </h3>

              <p>
                {award.description}
              </p>

            </article>

          ))}

        </div>

        <div className="awards-footer">

          <h3>
            Excellence isn't achieved overnight.
          </h3>

          <p>
            It is earned through passion, consistency, and thousands of unforgettable dining experiences shared with guests from around the world.
          </p>

        </div>

      </div>

    </section>
  );
};

export default Awards;
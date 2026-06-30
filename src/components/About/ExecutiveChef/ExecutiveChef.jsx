import "./ExecutiveChef.css";
import executiveChef from "../../../assets/images/about/executive-chef.jpg";

const achievements = [
  {
    number: "25+",
    title: "Years Experience",
  },
  {
    number: "18",
    title: "International Awards",
  },
  {
    number: "42",
    title: "Signature Dishes",
  },
];

const ExecutiveChef = () => {
  return (
    <section className="executive-chef">

      <div className="container">

        <div className="chef-grid">

          <div className="chef-image">

            <img
              src={executiveChef}
              alt="Executive Chef Alessandro Moretti"
            />

          </div>

          <div className="chef-content">

            <span className="chef-tag">
              Meet Our Executive Chef
            </span>

            <h2>
              Chef
              <br />
              Alessandro Moretti
            </h2>

            <p className="chef-intro">
              For more than twenty-five years, Chef Alessandro Moretti has
              pursued one simple philosophy—transform the finest seasonal
              ingredients into unforgettable culinary experiences.
            </p>

            <p>
              Inspired by the world's most celebrated dining destinations,
              his cuisine blends timeless European techniques with modern
              creativity. Every menu reflects precision, artistry, and an
              unwavering commitment to excellence.
            </p>

            <div className="chef-quote">

              <span className="quote-mark">
                "
              </span>

              <p>
                Every ingredient has a story.
                Every plate deserves perfection.
              </p>

            </div>

            <div className="chef-details">

              <div>

                <h4>Specialty</h4>

                <span>
                  Contemporary European Cuisine
                </span>

              </div>

              <div>

                <h4>Experience</h4>

                <span>
                  25+ Years
                </span>

              </div>

              <div>

                <h4>Recognition</h4>

                <span>
                  Michelin Inspired
                </span>

              </div>

            </div>

            <div className="chef-signature">

              <h3>
                Alessandro Moretti
              </h3>

              <span>
                Executive Chef
              </span>

            </div>

          </div>

        </div>

        <div className="chef-achievements">

          {achievements.map((item) => (

            <div
              className="achievement-card"
              key={item.title}
            >

              <h3>
                {item.number}
              </h3>

              <p>
                {item.title}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default ExecutiveChef;
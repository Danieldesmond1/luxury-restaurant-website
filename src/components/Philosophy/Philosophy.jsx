import "./Philosophy.css";
import philosophyImage from "../../assets/images/philosophy.jpg";

const Philosophy = () => {
  return (
    <section className="philosophy">

      <div className="container philosophy-wrapper">

        <div className="philosophy-image">

          <img
            src={philosophyImage}
            alt="Luxury dining experience"
          />

          <div className="experience-badge">

            <h2>25+</h2>

            <span>
              Years of Culinary Excellence
            </span>

          </div>

        </div>

        <div className="philosophy-content">

          <span className="section-tag">
            Our Philosophy
          </span>

          <h2>
            Every Dish
            <br />
            Tells A Story.
          </h2>

          <p>
            At DineCraft, every ingredient is carefully selected,
            every recipe is thoughtfully refined, and every guest
            is welcomed with genuine hospitality. Dining is not
            simply about food—it is about creating unforgettable
            memories around exceptional cuisine.
          </p>

          <blockquote>
            "True luxury is found in the smallest details—
            from the first greeting to the final bite."
          </blockquote>

          <div className="philosophy-features">

            <div>
              <h3>25+</h3>
              <span>Years Experience</span>
            </div>

            <div>
              <h3>18</h3>
              <span>International Awards</span>
            </div>

            <div>
              <h3>42K+</h3>
              <span>Guests Served</span>
            </div>

          </div>

          <div className="chef-signature">

            <h4>
              Alessandro Moretti
            </h4>

            <span>
              Executive Chef
            </span>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Philosophy;
import "./OurStory.css";
import chefWithFlame from "../../../assets/images/about/chef-with-flame.jpg";

const stats = [
  {
    number: "14+",
    label: "Years of Excellence",
  },
  {
    number: "250K+",
    label: "Guests Served",
  },
  {
    number: "28",
    label: "International Awards",
  },
];

const OurStory = () => {
  return (
    <section className="our-story">

      <div className="container">

        <div className="our-story-grid">

          <div className="our-story-image">

            <img
              src={chefWithFlame}
              alt="Chef preparing a signature dish"
            />

          </div>

          <div className="our-story-content">

            <span className="story-tag">
              Our Story
            </span>

            <h2>
              Crafted Through Passion,
              <br />
              Refined Through Time
            </h2>

            <p>
              DineCraft was founded with a simple belief that exceptional
              dining should be an unforgettable experience rather than just
              a meal. Every detail—from our architecture and service to each
              ingredient on the plate—is thoughtfully curated to celebrate
              timeless luxury.
            </p>

            <p>
              Inspired by the world's finest culinary traditions, our chefs
              combine classical techniques with modern creativity to create
              dishes that surprise, inspire, and leave lasting memories.
              Every visit is designed to feel intimate, elegant, and worthy
              of life's greatest celebrations.
            </p>

            <div className="story-highlights">

              <div className="highlight">

                <h4>Founded</h4>

                <span>2011</span>

              </div>

              <div className="highlight">

                <h4>Inspired By</h4>

                <span>Michelin Standards</span>

              </div>

              <div className="highlight">

                <h4>Commitment</h4>

                <span>Sustainability & Freshness</span>

              </div>

            </div>

          </div>

        </div>

        <div className="story-stats">

          {stats.map((item) => (

            <div
              className="story-stat"
              key={item.label}
            >

              <h3>{item.number}</h3>

              <p>{item.label}</p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default OurStory;
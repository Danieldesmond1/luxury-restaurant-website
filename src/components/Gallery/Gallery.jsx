import "./Gallery.css";
import gallery from "../../data/gallery";

const Gallery = () => {
  return (
    <section className="gallery-section">

      <div className="container">

        <div className="gallery-heading">

          <div className="heading-line"></div>

          <span>
            Editorial Gallery
          </span>

          <h2>
            Every Corner
            <br />
            Tells A Story
          </h2>

          <p>
            From intimate candlelit dinners to beautifully plated
            masterpieces, every experience inside DineCraft is
            designed to create memories that last a lifetime.
          </p>

        </div>

        <div className="gallery-grid">

          {gallery.map((item, index) => (

            <article
              key={item.id}
              className={`gallery-card gallery-${index + 1}`}
            >

              <img
                src={item.image}
                alt={item.title}
              />

              <div className="gallery-overlay">

                <div className="gallery-caption">

                  <span>
                    {item.category}
                  </span>

                  <h3>
                    {item.title}
                  </h3>

                  <button>
                    Discover →
                  </button>

                </div>

              </div>

            </article>

          ))}

        </div>

        <div className="gallery-stats">

          <div>

            <h3>250+</h3>

            <div className="stat-line"></div>

            <p>Signature Dishes</p>

          </div>

          <div>

            <h3>15K+</h3>

            <div className="stat-line"></div>

            <p>Private Events</p>

          </div>

          <div>

            <h3>30+</h3>

            <div className="stat-line"></div>

            <p>Culinary Awards</p>

          </div>

          <div>

            <h3>100%</h3>

            <div className="stat-line"></div>

            <p>Fresh Ingredients</p>

          </div>

        </div>

        <div className="gallery-footer">

          <button className="gallery-btn">
            View Full Gallery →
          </button>

          <h2>
            "The finest memories begin around the table."
          </h2>

          <span>DINECRAFT</span>

        </div>

      </div>

    </section>
  );
};

export default Gallery;
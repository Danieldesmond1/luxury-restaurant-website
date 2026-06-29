import "./SignatureCollection.css";
import foods from "../../data/foods";

const SignatureCollection = () => {
  return (
    <section className="signature-section">

      <div className="container">

        <div className="section-heading">

          <span>
            Signature Collection
          </span>

          <h2>
            Our Most Celebrated Creations
          </h2>

          <p>
            Every plate is thoughtfully designed to deliver
            unforgettable flavours, exceptional craftsmanship,
            and timeless elegance.
          </p>

        </div>

        <div className="signature-grid">

          {foods.map((food,index)=>(

              <article
                  key={food.id}
                  className={`signature-card card-${index+1}`}
              >

                  <div className="signature-image">

                      <img
                          src={food.image}
                          alt={food.name}
                      />

                      <div className="image-overlay">

                          <span>
                              Michelin Inspired
                          </span>

                      </div>

                  </div>

                  <div className="signature-content">

                      <span className="dish-category">

                          {food.category}

                      </span>

                      <h3>

                          {food.name}

                      </h3>

                      <p>

                          {food.description}

                      </p>

                      <div className="dish-footer">

                          <div>

                              <span className="rating">

                                  ★★★★★

                              </span>

                              <strong>

                                  {food.price}

                              </strong>

                          </div>

                          <button>

                              Reserve →

                          </button>

                      </div>

                  </div>

              </article>

          ))}

      </div>

      </div>

    </section>
  );
};

export default SignatureCollection;
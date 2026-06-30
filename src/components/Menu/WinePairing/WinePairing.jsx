import "./WinePairing.css";
import wines from "../../../data/wines";

const WinePairing = () => {
  return (
    <section className="wine-section">

      <div className="container">

        <div className="wine-heading">

          <span>
            Sommelier Selection
          </span>

          <h2>
            Perfect Wine Pairings
          </h2>

          <p>
            Our award-winning sommeliers have carefully selected every bottle
            to perfectly complement our signature cuisine and elevate your
            dining experience.
          </p>

        </div>

        <div className="wine-grid">

          {wines.map((wine) => (

            <article
              key={wine.id}
              className="wine-card"
            >

              <div className="wine-image">

                <img
                  src={wine.image}
                  alt={wine.name}
                />

                <div className="wine-price">
                  {wine.price}
                </div>

              </div>

              <div className="wine-content">

                <div className="wine-top">

                  <span>
                    {wine.type}
                  </span>

                  <small>
                    {wine.year}
                  </small>

                </div>

                <h3>
                  {wine.name}
                </h3>

                <p>
                  {wine.description}
                </p>

                <div className="wine-pairing">

                  <strong>
                    Best With
                  </strong>

                  <span>
                    {wine.pairing}
                  </span>

                </div>

              </div>

            </article>

          ))}

        </div>

      </div>

    </section>
  );
};

export default WinePairing;
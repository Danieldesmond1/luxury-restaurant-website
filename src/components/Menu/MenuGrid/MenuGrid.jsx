import "./MenuGrid.css";
import menuItems from "../../../data/menuItems";
import { FaStar } from "react-icons/fa";

const MenuGrid = () => {
  return (
    <section className="menu-grid-section">

      <div className="container">

        <div className="menu-grid-heading">

          <span>Signature Selection</span>

          <h2>
            Curated For Extraordinary Dining
          </h2>

          <p>
            Every dish is thoughtfully crafted using premium
            ingredients sourced from around the world.
          </p>

        </div>

        <div className="menu-grid">

          {menuItems.map((item) => (

            <article
              className="menu-card"
              key={item.id}
            >

              <div className="menu-image">

                <img
                  src={item.image}
                  alt={item.name}
                />

                {item.chefChoice && (
                  <span className="chef-choice">
                    Chef's Choice
                  </span>
                )}

              </div>

              <div className="menu-content">

                <div className="menu-top">

                  <h3>{item.name}</h3>

                  <span className="price">
                    {item.price}
                  </span>

                </div>

                <p>
                  {item.description}
                </p>

                <div className="menu-info">

                  <span>
                    <FaStar />
                    {item.rating}
                  </span>

                  <span>{item.time}</span>

                  <span>{item.calories}</span>

                </div>

              </div>

            </article>

          ))}

        </div>

      </div>

    </section>
  );
};

export default MenuGrid;
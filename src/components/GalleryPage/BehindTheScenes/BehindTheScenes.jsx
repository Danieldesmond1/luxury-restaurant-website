import "./BehindTheScenes.css";

import behindTheScenesImage
from "../../../assets/images/gallery/behind-the-scenes.jpg";

const BehindTheScenes = () => {

  return (

    <section className="behind-scenes">

      <div className="behind-scenes__container">

        <div className="behind-scenes__content">

          <span className="behind-scenes__eyebrow">
            Behind The Scenes
          </span>

          <h2 className="behind-scenes__title">
            Every Plate Begins Long Before It Reaches Your Table
          </h2>

          <p className="behind-scenes__description">
            Excellence isn't improvised. From sourcing exceptional
            ingredients to perfecting every garnish, our culinary
            team treats each service as a performance of precision,
            passion, and timeless hospitality.
          </p>

          <div className="behind-scenes__features">

            <div className="behind-scenes__feature">
              Fresh Seasonal Ingredients
            </div>

            <div className="behind-scenes__feature">
              Handcrafted Culinary Techniques
            </div>

            <div className="behind-scenes__feature">
              Exceptional Dining Experiences
            </div>

          </div>

          <button className="behind-scenes__button">
            Reserve Your Experience
          </button>

        </div>

        <div className="behind-scenes__image-wrapper">

          <img
            src={behindTheScenesImage}
            alt="Chef preparing a signature dish"
            className="behind-scenes__image"
          />

        </div>

      </div>

    </section>

  );

};

export default BehindTheScenes;
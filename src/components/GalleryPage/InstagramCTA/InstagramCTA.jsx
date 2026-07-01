import "./InstagramCTA.css";

const InstagramCTA = () => {

  return (

    <section className="instagram-cta">

      <div className="instagram-cta__container">

        <span className="instagram-cta__eyebrow">
          Instagram
        </span>

        <h2 className="instagram-cta__title">
          Crafted Moments.
          <br />
          Shared Daily.
        </h2>

        <p className="instagram-cta__description">
          Every service tells a story. Discover signature creations,
          elegant evenings, exclusive culinary moments, and the passion
          behind every experience at DineCraft.
        </p>

        <div className="instagram-cta__handle">
          @DineCraftRestaurant
        </div>

        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="instagram-cta__button"
        >
          <span>Follow Our Story</span>

          <span className="instagram-cta__arrow">
            →
          </span>
        </a>

      </div>

    </section>

  );

};

export default InstagramCTA;
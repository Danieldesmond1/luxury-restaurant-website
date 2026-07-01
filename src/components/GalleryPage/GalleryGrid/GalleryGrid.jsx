import "./GalleryGrid.css";
import gallery from "../../../data/galleryPage";

const GalleryGrid = ({ activeCategory }) => {

  const filteredGallery =
    activeCategory === "All"
      ? gallery
      : gallery.filter(
          (item) => item.category === activeCategory
        );

  const getCardClass = (index) => {

    if (index % 8 === 0)
      return "gallery-page-card gallery-page-card--wide";

    if (index % 5 === 0)
      return "gallery-page-card gallery-page-card--tall";

    return "gallery-page-card";

  };

  return (

    <section className="gallery-page-grid">

      <div className="gallery-page-grid__container">

        {filteredGallery.map((item, index) => (

          <article
            key={item.id}
            className={getCardClass(index)}
          >

            <img
              className="gallery-page-card__image"
              src={item.image}
              alt={item.title}
              loading="lazy"
            />

            <div className="gallery-page-card__overlay">

              <span className="gallery-page-card__category">
                {item.category}
              </span>

              <div className="gallery-page-card__content">

                <h3 className="gallery-page-card__title">
                  {item.title}
                </h3>

                <p className="gallery-page-card__location">
                  {item.location}
                </p>

              </div>

            </div>

          </article>

        ))}

      </div>

    </section>

  );

};

export default GalleryGrid;
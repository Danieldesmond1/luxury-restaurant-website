import "./GalleryFilter.css";

const categories = [
  "All",
  "Cuisine",
  "Interior",
  "Cocktails",
  "Events",
  "Chef's Table",
];

const GalleryFilter = ({ activeCategory, setActiveCategory }) => {
  return (
    <section className="gallery-filter">
      <div className="container">

        <span className="gallery-filter-tag">
          Curated Collection
        </span>

        <h2>
          Explore Our Gallery
        </h2>

        <div className="gallery-filter-buttons">

          {categories.map((category) => (

            <button
              key={category}
              className={
                activeCategory === category
                  ? "filter-btn active"
                  : "filter-btn"
              }
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>

          ))}

        </div>

      </div>
    </section>
  );
};

export default GalleryFilter;
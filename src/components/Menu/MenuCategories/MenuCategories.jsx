import "./MenuCategories.css";

const categories = [
  "All",
  "Starters",
  "Seafood",
  "Wagyu",
  "Pasta",
  "Desserts",
  "Wine",
  "Cocktails",
];

const MenuCategories = () => {
  return (
    <section className="menu-categories-section">

      <div className="container">

        <div className="menu-category-heading">

          <span>
            Curated Collection
          </span>

          <h2>
            Explore Our Menu
          </h2>

          <p>
            Every course is thoughtfully prepared using the
            world's finest seasonal ingredients, delivering
            timeless flavours and unforgettable experiences.
          </p>

        </div>

        <div className="category-list">

          {categories.map((category, index) => (

            <button
              key={category}
              className={`category-btn ${
                index === 0 ? "active" : ""
              }`}
            >
              {category}
            </button>

          ))}

        </div>

      </div>

    </section>
  );
};

export default MenuCategories;
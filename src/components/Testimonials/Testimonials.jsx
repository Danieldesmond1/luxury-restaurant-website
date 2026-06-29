import "./Testimonials.css";
import reviews from "../../data/reviews";

const Testimonials = () => {
  return (
    <section className="testimonials">

      <div className="container testimonials-wrapper">

        <div className="testimonial-left">

          <span className="section-tag">
            Guest Testimonials
          </span>

          <h2>
            Loved By
            <br />
            Thousands
            <br />
            Of Guests
          </h2>

          <div className="rating-box">

            <h1>★★★★★</h1>

            <h3>4.9 / 5</h3>

            <p>
              Based on 12,000+ verified dining experiences.
            </p>

          </div>

          <button>
            Read More Reviews
          </button>

        </div>

        <div className="testimonial-right">

          {reviews.map((review,index)=>(

            <article
              key={review.id}
              className={`testimonial-card card-${index+1}`}
            >

              <img
                src={review.image}
                alt={review.name}
              />

              <div>

                <h4>{review.name}</h4>

                <span>{review.city}</span>

                <p>"{review.review}"</p>

              </div>

            </article>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Testimonials;
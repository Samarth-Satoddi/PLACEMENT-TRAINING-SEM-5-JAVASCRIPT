import { Link } from "react-router-dom";

function Hero({ title, description }) {
  return (
    <section className="hero">
      <p className="hero-label">College Events and Clubs</p>
      <h1>{title || "Discover what is Happening?"}</h1>
      <p className="hero-description">
        {description ||
          "Find workshops, sports activities, and club meetings designed for every student to explore and connect."}
      </p>
      <Link className="hero-button" to="/events">
        Explore Events
      </Link>
    </section>
  );
}

export default Hero;

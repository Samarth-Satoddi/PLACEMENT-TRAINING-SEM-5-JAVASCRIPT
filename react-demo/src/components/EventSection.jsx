function EventSection() {
  return (
    <section id="events" className="events-section">
      <p className="section-label">Upcoming Activities</p>

      <h2>Explore Campus Events</h2>

      <div className="event-grid">
        <article className="event-card">
          <p className="event-category">Technology</p>

          <h3>MERN Stack Workshop</h3>

          <p>
            Learn the basics of MongoDB, Express, React, and Node.js through a
            practical workshop.
          </p>

          <p>
            <strong>Date:</strong> 25 September 2026
          </p>

          <p>
            <strong>Location:</strong> Computer Lab 1
          </p>

          <button type="button">View Details</button>
        </article>

        <article className="event-card">
          <p className="event-category">Innovation</p>

          <h3>Startup Pitch Fest</h3>

          <p>
            Meet student founders, mentors, and investors in a live pitching
            showcase featuring creative startup ideas.
          </p>

          <p>
            <strong>Date:</strong> 29 September 2026
          </p>

          <p>
            <strong>Location:</strong> Innovation Hub
          </p>

          <button type="button">View Details</button>
        </article>

        <article className="event-card">
          <p className="event-category">Culture</p>

          <h3>Campus Fest Night</h3>

          <p>
            Enjoy music, dance, art, and vibrant performances celebrating the
            creativity of our student community.
          </p>

          <p>
            <strong>Date:</strong> 03 October 2026
          </p>

          <p>
            <strong>Location:</strong> Open Air Stage
          </p>

          <button type="button">View Details</button>
        </article>
      </div>
    </section>
  );
}

export default EventSection;

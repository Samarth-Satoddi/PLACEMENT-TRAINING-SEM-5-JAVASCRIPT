import EventCard from "./EventCard";

function EventSection({ events = [] }) {
  return (
    <section id="events" className="events-section">
      <div className="section-heading">
        <div>
          <p className="section-label">Upcoming Activities</p>
          <h2>Explore Campus Events</h2>
        </div>

        <p className="events-count">{events.length} events available</p>
      </div>

      {events.length === 0 ? (
        <p className="no-events">No events are available right now.</p>
      ) : (
        <div className="event-grid">
          {events.map((event) => (
            <EventCard
              key={event.id}
              title={event.title}
              category={event.category}
              date={event.date}
              time={event.time}
              location={event.location}
              description={event.description}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default EventSection;

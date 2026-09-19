import EventCard from "./EventCard";

function EventSection() {
  const events = [
    {
      title: "MERN Stack Workshop",
      date: "25 September 2026",
      time: "10:00 AM",
      location: "Computer Lab 1",
      category: "Technology",
      description:
        "Learn the basics of MongoDB, Express, React, and Node.js through a practical workshop.",
    },
    {
      title: "Startup Pitch Fest",
      date: "29 September 2026",
      time: "1:30 PM",
      location: "Innovation Hub",
      category: "Innovation",
      description:
        "Meet student founders, mentors, and investors in a live pitching showcase featuring creative startup ideas.",
    },
    {
      title: "Campus Fest Night",
      date: "03 October 2026",
      time: "6:00 PM",
      location: "Open Air Stage",
      category: "Culture",
      description:
        "Enjoy music, dance, art, and vibrant performances celebrating the creativity of our student community.",
    },
  ];

  return (
    <section id="events" className="events-section">
      <p className="section-label">Upcoming Activities</p>

      <h2>Explore Campus Events</h2>

      <div className="event-grid">
        {events.map((event) => (
          <EventCard key={event.title} {...event} />
        ))}
      </div>
    </section>
  );
}

export default EventSection;

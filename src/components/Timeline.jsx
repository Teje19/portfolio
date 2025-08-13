export default function Timeline() {
  const events = [
    { year: "2024", description: "Started software engineering degree." },
    { year: "2025", description: "Worked on CS220 portfolio project." },
  ];

  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4">Timeline</h2>
      <div className="space-y-4">
        {events.map((event, index) => (
          <div key={index} className="border-l-4 border-primary pl-4">
            <span className="text-primary font-bold">{event.year}</span>
            <p>{event.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

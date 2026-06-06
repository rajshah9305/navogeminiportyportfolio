export function Marquee() {
  const items = [
    "Next.js 15", "React Architecture", "TypeScript", "LLM Integration", 
    "Agentic Workflows", "Supabase / PostgreSQL", "Vercel Edge", 
    "WebSockets", "Docker", "System Design"
  ];

  return (
    <div className="marquee-container">
      <div className="mq-track">
        {items.map((item, i) => (
          <div className="mq-item" key={`mq1-${i}`}>{item}</div>
        ))}
        {items.map((item, i) => (
          <div className="mq-item" key={`mq2-${i}`}>{item}</div>
        ))}
      </div>
    </div>
  );
}

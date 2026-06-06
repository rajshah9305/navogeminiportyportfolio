export interface Service {
  id: string;
  number: string;
  title: string;
  description: string;
  items: string[];
}

export const services: Service[] = [
  {
    id: "svc-1",
    number: "01",
    title: "AI Systems Integration",
    description: "Designing secure architectures to leverage Large Language Models. Focus on context management, latency reduction, and predictable outputs.",
    items: [
      "RAG & Vector Databases",
      "Agentic Workflows",
      "Streaming Interfaces",
      "Prompt Engineering Security"
    ]
  },
  {
    id: "svc-2",
    number: "02",
    title: "Enterprise Web Apps",
    description: "Building scalable, full-stack web applications utilizing modern frameworks. Ensuring high performance, type safety, and maintainable codebases.",
    items: [
      "Next.js / React Ecosystem",
      "TypeScript strictly typed",
      "PostgreSQL / Supabase",
      "Edge Computing & APIs"
    ]
  },
  {
    id: "svc-3",
    number: "03",
    title: "Technical Strategy",
    description: "Providing high-level architectural consulting to help teams make correct foundational technology choices before development begins.",
    items: [
      "System Architecture Review",
      "Tech Stack Selection",
      "Database Modeling",
      "Performance Audits"
    ]
  }
];

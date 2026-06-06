export interface Project {
  id: string;
  number: string;
  category: string;
  title: string;
  description: string;
  tags: string[];
  link: string;
  visual: React.ReactNode;
}

// Visuals are passed as SVG strings or React elements. For simplicity, we use the original SVG strings.
export const projects: Project[] = [
  {
    id: "nexus-ide",
    number: "01",
    category: "Developer Tooling",
    title: "Nexus IDE",
    description: "An autonomous, browser-based coding environment. Integrates Monaco Editor with real-time Claude API streaming for context-aware code generation and automated diff reviews.",
    tags: ["Next.js", "WebSockets", "AST Parsing"],
    link: "#",
    visual: (
      <svg width="240" height="180" viewBox="0 0 240 180">
        <rect x="20" y="20" width="200" height="140" rx="4" className="wf-box" />
        <rect x="20" y="20" width="200" height="24" rx="4" className="wf-box" fill="rgba(255,255,255,0.02)" />
        <rect x="30" y="55" width="120" height="8" rx="2" className="wf-box" />
        <rect x="30" y="75" width="160" height="8" rx="2" className="wf-box" />
        <rect x="30" y="95" width="140" height="8" rx="2" className="wf-box" />
        <rect x="150" y="115" width="60" height="30" rx="4" className="wf-accent" />
        <circle cx="35" cy="32" r="3" className="wf-box" /><circle cx="45" cy="32" r="3" className="wf-box" />
      </svg>
    )
  },
  {
    id: "dataforge",
    number: "02",
    category: "Enterprise Operations",
    title: "DataForge System",
    description: "A multi-tenant data synthesis platform utilizing RAG. Ingests thousands of PDF documents, chunks them into vector databases, and allows secure, siloed querying for enterprise clients.",
    tags: ["PostgreSQL + pgvector", "Python", "React"],
    link: "#",
    visual: (
      <svg width="240" height="180" viewBox="0 0 240 180">
        <ellipse cx="120" cy="50" rx="60" ry="15" className="wf-box" />
        <path d="M60 50 v80 a60 15 0 0 0 120 0 v-80" className="wf-box" />
        <ellipse cx="120" cy="90" rx="60" ry="15" className="wf-box" strokeDasharray="4 4"/>
        <rect x="90" y="70" width="60" height="40" rx="4" className="wf-accent" />
        <line x1="120" y1="20" x2="120" y2="40" className="wf-accent" strokeDasharray="2 2" />
      </svg>
    )
  },
  {
    id: "agentic-router",
    number: "03",
    category: "Autonomous Workflows",
    title: "Agentic Router",
    description: "A highly scalable middleware layer that routes natural language requests to specialized micro-agents based on intent classification, improving latency and reducing hallucination.",
    tags: ["Node.js", "Redis", "OpenAI"],
    link: "#",
    visual: (
      <svg width="240" height="180" viewBox="0 0 240 180">
        <circle cx="120" cy="90" r="20" className="wf-accent" />
        <circle cx="50" cy="40" r="15" className="wf-box" />
        <circle cx="190" cy="40" r="15" className="wf-box" />
        <circle cx="50" cy="140" r="15" className="wf-box" />
        <circle cx="190" cy="140" r="15" className="wf-box" />
        <line x1="62" y1="52" x2="105" y2="78" className="wf-box" />
        <line x1="178" y1="52" x2="135" y2="78" className="wf-box" />
        <line x1="62" y1="128" x2="105" y2="102" className="wf-box" />
        <line x1="178" y1="128" x2="135" y2="102" className="wf-box" />
      </svg>
    )
  },
  {
    id: "axiom-ui",
    number: "04",
    category: "Design Systems",
    title: "Axiom UI Library",
    description: "A comprehensive React component library generated via LLMs. Features strict accessibility standards, dynamic theme tokens, and zero-runtime CSS-in-JS extraction.",
    tags: ["React 19", "Tailwind CSS", "Figma API"],
    link: "#",
    visual: (
      <svg width="240" height="180" viewBox="0 0 240 180">
        <rect x="40" y="30" width="70" height="120" rx="4" className="wf-box" />
        <rect x="130" y="30" width="70" height="50" rx="4" className="wf-box" />
        <rect x="130" y="100" width="70" height="50" rx="4" className="wf-accent" />
        <line x1="50" y1="50" x2="100" y2="50" className="wf-box" />
        <line x1="50" y1="70" x2="90" y2="70" className="wf-box" />
        <line x1="50" y1="90" x2="95" y2="90" className="wf-box" />
      </svg>
    )
  }
];

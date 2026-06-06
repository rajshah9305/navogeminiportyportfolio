import { experiences } from "@/data/experience";

export function About() {
  return (
    <section id="about" className="container">
      <div className="grid-2">
        <div className="about-text">
          <div className="label reveal">Profile Overview</div>
          <h2 className="h-lg reveal del-1">Bridging the gap between experimental AI and scalable software.</h2>
          <p className="reveal del-2">I am an independent software architect and full-stack developer based in Calgary. My focus is on transforming complex AI capabilities—like RAG pipelines, multi-agent systems, and real-time streaming—into highly reliable, user-centric enterprise applications.</p>
          <p className="reveal del-3">I do not build prototypes. I build <strong>secure, scalable, and maintainable systems</strong> designed for production environments.</p>
          
          <div className="capabilities reveal del-3">
            <span className="badge">Architecture Design</span>
            <span className="badge">API Development</span>
            <span className="badge">Database Modeling</span>
            <span className="badge">Cloud Infrastructure</span>
            <span className="badge">UI/UX Engineering</span>
          </div>
        </div>
        
        <div className="exp-list reveal del-2">
          {experiences.map((exp) => (
            <div key={exp.id} className="exp-item interactive">
              <div>
                <div className="exp-role">{exp.role}</div>
                <div className="exp-co">{exp.company}</div>
              </div>
              <div className="exp-date">{exp.date}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

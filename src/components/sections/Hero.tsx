import Link from "next/link";

export function Hero() {
  return (
    <section id="hero" className="container">
      <div className="hero-content">
        <div className="label reveal">Enterprise AI Architecture</div>
        <h1 className="h-xl reveal del-1">Designing and building robust, production-grade AI applications.</h1>
        <p className="p-lg reveal del-2">
          I partner with forward-thinking teams to architect full-stack software systems that leverage large language models, autonomous agents, and modern web infrastructure.
        </p>
        
        <div className="hero-actions reveal del-3">
          <Link href="#work-wrapper" className="btn btn-primary interactive">View Architecture</Link>
          <Link href="#contact" className="btn btn-secondary interactive">Start a Dialogue</Link>
        </div>

        <div className="hero-stats reveal del-3">
          <div className="stat-item"><h4>12+</h4><p>Production Deployments</p></div>
          <div className="stat-item"><h4>100%</h4><p>TypeScript & Edge Ready</p></div>
          <div className="stat-item"><h4>Zero</h4><p>Legacy Code</p></div>
        </div>
      </div>
    </section>
  );
}

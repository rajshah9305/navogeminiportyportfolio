"use client";

import { useEffect, useRef } from "react";

export function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isDesktop = () => window.innerWidth > 1024;
    
    const handleScroll = () => {
      if (!sectionRef.current || !progressRef.current || !isDesktop()) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const wh = window.innerHeight;
      
      if (rect.top < wh && rect.bottom > 0) {
        const totalDist = rect.height;
        const scrolled = Math.max(0, (wh * 0.6) - rect.top);
        const progress = Math.min(1, scrolled / (totalDist * 0.7));
        progressRef.current.style.transform = `scaleY(${progress})`;

        const steps = sectionRef.current.querySelectorAll('.proc-step');
        steps.forEach((step) => {
          const stepRect = step.getBoundingClientRect();
          if (stepRect.top < wh * 0.6) {
            step.classList.add('active');
          } else {
            step.classList.remove('active');
          }
        });
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="process" ref={sectionRef}>
      <div className="container proc-grid">
        <div className="proc-head">
          <div className="proc-sticky">
            <div className="label reveal">Methodology</div>
            <h2 className="h-lg reveal del-1">A disciplined approach to software engineering.</h2>
            <p className="p-lg reveal del-2">Predictable outcomes require structured processes. From initial system design to final edge deployment.</p>
          </div>
        </div>
        <div className="proc-list" id="proc-list">
          <div className="proc-progress" id="proc-progress" ref={progressRef}></div>
          
          <div className="proc-step">
            <span className="proc-num">Phase 01</span>
            <h3>Architecture & Data Modeling</h3>
            <p>Defining system boundaries, database schemas, and API contracts. Security, multi-tenancy, and compliance are planned before writing logic.</p>
          </div>
          
          <div className="proc-step">
            <span className="proc-num">Phase 02</span>
            <h3>AI Integration Strategy</h3>
            <p>Selecting appropriate models (Claude, GPT, local), designing reliable prompt chains, and establishing vector stores and RAG pipelines for contextual accuracy.</p>
          </div>
          
          <div className="proc-step">
            <span className="proc-num">Phase 03</span>
            <h3>Full-Stack Implementation</h3>
            <p>Executing the build using strict TypeScript, Next.js App Router, and scalable backends (Supabase/Postgres). Focus on edge-ready streaming and real-time state.</p>
          </div>
          
          <div className="proc-step">
            <span className="proc-num">Phase 04</span>
            <h3>Infrastructure & Delivery</h3>
            <p>Setting up CI/CD workflows, automated testing, containerization if required, and deploying to Vercel/AWS. Handing over clean, documented source code.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

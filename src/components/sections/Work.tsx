"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { projects } from "@/data/projects";

export function Work() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(1);

  useEffect(() => {
    const isDesktop = () => window.innerWidth > 1024;
    const slideCount = projects.length;
    
    // Set dynamic height based on number of projects
    if (wrapperRef.current && isDesktop()) {
      wrapperRef.current.style.height = `${slideCount * 100}vh`;
    }

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (!wrapperRef.current || !trackRef.current || !isDesktop()) {
            ticking = false;
            return;
          }
          
          const rect = wrapperRef.current.getBoundingClientRect();
          const maxScroll = wrapperRef.current.offsetHeight - window.innerHeight;
          
          let progress = 0;
          if (rect.top <= 0) {
            progress = Math.min(1, Math.abs(rect.top) / maxScroll);
          }
          
          const moveX = progress * (slideCount - 1) * window.innerWidth;
          trackRef.current.style.transform = `translate3d(-${moveX}px, 0, 0)`;

          const current = Math.min(slideCount, Math.floor(progress * slideCount) + 1);
          setCurrentSlide(current);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Trigger once on load
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div id="work-wrapper" ref={wrapperRef}>
      <div className="work-sticky">
        <div className="work-header">
          <div className="label" style={{ margin: 0 }}>Case Studies</div>
          <div className="work-counter">0{currentSlide} / 0{projects.length}</div>
        </div>
        
        <div className="work-track" ref={trackRef}>
          {projects.map((project) => (
            <div className="work-slide" key={project.id}>
              <div className="work-card">
                <div className="w-content">
                  <div className="w-meta"><span>{project.number}</span> &mdash; <span>{project.category}</span></div>
                  <h3 className="w-title">{project.title}</h3>
                  <p className="w-desc">{project.description}</p>
                  <div className="w-tags">
                    {project.tags.map(tag => (
                      <span key={tag} className="badge">{tag}</span>
                    ))}
                  </div>
                  <Link href={project.link} className="w-link interactive">View Architecture Request</Link>
                </div>
                <div className="w-visual">
                  <div className="w-visual-inner">
                    {project.visual}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

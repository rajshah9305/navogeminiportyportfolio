"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header id="header" className={scrolled ? "scrolled" : ""}>
      <div className="nav-inner">
        <Link href="#" className="logo">Raj<span>.</span></Link>
        <nav className="nav-links">
          <Link href="#about" className="nav-link interactive">About</Link>
          <Link href="#process" className="nav-link interactive">Process</Link>
          <Link href="#work-wrapper" className="nav-link interactive">Work</Link>
          <Link href="#services" className="nav-link interactive">Services</Link>
        </nav>
        <div className="status-badge interactive">
          <span className="status-dot"></span> Available for projects
        </div>
      </div>
    </header>
  );
}

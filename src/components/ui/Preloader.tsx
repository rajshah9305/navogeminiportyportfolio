"use client";

import { useEffect, useState } from "react";

export function Preloader() {
  const [progress, setProgress] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let val = 0;
    const interval = setInterval(() => {
      val += Math.floor(Math.random() * 20) + 10;
      if (val >= 100) {
        val = 100;
        clearInterval(interval);
        setTimeout(() => {
          setLoaded(true);
          document.body.classList.add("loaded");
        }, 400);
      }
      setProgress(val);
    }, 50);

    return () => clearInterval(interval);
  }, []);

  if (loaded) return null;

  return (
    <div id="loader">
      <div className="ld-wrap">
        <div className="ld-text">Initializing System <span>{progress}</span>%</div>
        <div className="ld-bar">
          <div className="ld-prog" style={{ width: `${progress}%` }}></div>
        </div>
      </div>
    </div>
  );
}

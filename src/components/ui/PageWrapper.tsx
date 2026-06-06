"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

export function PageWrapper({ children }: { children: React.ReactNode }) {
  useScrollReveal();
  
  return (
    <main>
      {children}
    </main>
  );
}

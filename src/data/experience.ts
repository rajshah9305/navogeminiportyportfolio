export interface Experience {
  id: string;
  role: string;
  company: string;
  date: string;
}

export const experiences: Experience[] = [
  {
    id: "exp-1",
    role: "Independent Architect",
    company: "Raj AI Systems",
    date: "2023 — Present"
  },
  {
    id: "exp-2",
    role: "Senior Full-Stack Developer",
    company: "Contract / Consulting",
    date: "2021 — 2023"
  },
  {
    id: "exp-3",
    role: "Software Engineer",
    company: "Enterprise Tech",
    date: "2018 — 2021"
  }
];

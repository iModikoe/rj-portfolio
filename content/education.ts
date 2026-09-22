import type { Certification, Education, LeadershipEntry } from "./types";

export const EDUCATION: Education = {
  institution: "Belgium Campus iTversity, Pretoria",
  qualification: "Bachelor of Computing majoring in Business Intelligence, NQF Level 8",
  status: "Final-year student",
  dates: "2023 — 2026",
  description:
    "Coursework spans database development, data warehousing, data science, statistics, information systems, software engineering, project management and research methods.",
  facts: [
    // Verified transcript values only. The distinctions count is deliberately
    // omitted until the latest official number is confirmed.
    { label: "Academic average", value: "78.5%" },
    { label: "Qualification level", value: "NQF 8" },
  ],
};

/** Ordered by relevance to the target data roles. */
export const CERTIFICATIONS: Certification[] = [
  {
    name: "IBM Data Science Professional Certificate",
    issuer: "IBM · Coursera",
    skills: "Python and SQL for analysis, data visualisation, machine-learning fundamentals and communicating insights.",
  },
  {
    name: "IBM Data Analyst Professional Certificate",
    issuer: "IBM · Coursera",
    skills: "Excel and SQL fundamentals, Python for analytics, dashboard building and reporting practice.",
  },
  {
    name: "AWS Cloud Practitioner Essentials",
    issuer: "Amazon Web Services · Credly",
    skills: "Cloud concepts, core AWS services, the shared responsibility model, pricing and cost management.",
  },
  {
    name: "Data Analytics Essentials",
    issuer: "Cisco · Coursera",
    skills: "Data cleaning, descriptive analytics, SQL querying and storytelling with data.",
  },
  {
    name: "Data Science Bootcamp 2025",
    issuer: "Udemy",
    skills: "End-to-end projects with pandas and scikit-learn, from preparation through to evaluation.",
  },
  {
    name: "Introduction to Data Science",
    issuer: "Credly",
    skills: "Data wrangling, visualisation and presenting actionable insights.",
  },
  {
    name: "Mastering SSIS 2016 — Part 1",
    issuer: "Udemy",
    skills: "ETL pipeline design, packages, data flows and SSIS best practices.",
  },
  // Certificate identifiers are deliberately excluded from this public site.
  {
    name: "Excel 202",
    issuer: "Excel Academy · SABPP CPD",
    skills:
      "Intermediate Excel, completed May–July 2026. 2 CPD points, aligned to the SA Board for People Practices competency model.",
  },
  {
    name: "Excel 101",
    issuer: "Excel Academy · SABPP CPD",
    skills:
      "Foundational Excel, completed May–June 2026. 2 CPD points, aligned to the SA Board for People Practices competency model.",
  },
];

export const LEADERSHIP: LeadershipEntry[] = [
  {
    role: "NTT DATA Bursary",
    detail:
      "Awarded a bursary to study the Bachelor of Computing in Business Intelligence at Belgium Campus iTversity.",
  },
  {
    role: "Dimension Data Saturday School",
    detail: "Selected for the programme on outstanding academic potential in technology.",
  },
  {
    role: "Peer Tutor",
    detail: "Belgium Campus iTversity — supporting students in programming and analytics modules.",
  },
  {
    role: "Mentor",
    detail: "Guiding six students through portfolio projects and professional development.",
  },
  { role: "Residence Representative", detail: "2024" },
  { role: "Student Representative Council", detail: "2024" },
  { role: "Soccer Team Captain", detail: "2023 — 2024" },
];

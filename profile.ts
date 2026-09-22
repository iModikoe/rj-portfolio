import type { NavItem, Profile } from "./types";

export const SITE = {
  url: "https://rj-portfolio-mu.vercel.app",
  title: "Itumeleng Modikoe | Junior Data Scientist and BI Professional",
  description:
    "Portfolio of Itumeleng Modikoe, a Junior Data Scientist specialising in SQL, Python, machine learning, business intelligence and credit-risk analytics.",
  ogTitle: "Itumeleng Modikoe | Junior Data Scientist",
  ogDescription:
    "Applied data science, credit-risk analytics, dashboards and decision-support projects using SQL, Python, Power BI and Amazon QuickSight.",
} as const;

export const PROFILE: Profile = {
  name: "Itumeleng Ronald Jr Modikoe",
  shortName: "Itumeleng Modikoe",
  eyebrow: "Junior Data Scientist at Drive24",
  roleLine: "Junior Data Scientist · Business Intelligence · Credit Risk Analytics",
  intro:
    "I use SQL, Python, machine learning and business intelligence tools to turn operational, customer and credit-risk data into practical decisions. My work spans analytical data pipelines, dashboards, explainable scorecards, portfolio monitoring and predictive modelling.",
  location: "Centurion and Johannesburg, South Africa",
  email: "itumodikoe22@gmail.com",
  linkedin: "https://linkedin.com/in/itumeleng-modikoe-127b21347",
  github: "https://github.com/iModikoe",
  whatsapp: "https://wa.me/27671724201",
  resume: "/assets/Itumeleng_Modikoe_Resume.pdf",
  resumeFilename: "Itumeleng-Modikoe-Junior-Data-Scientist-CV.pdf",
  photo: "/assets/itumeleng-profile.jpg",
  photoAlt: "Itumeleng Ronald Jr Modikoe, Junior Data Scientist at Drive24",
  heroChips: [
    "Python",
    "PostgreSQL",
    "Machine Learning",
    "Power BI",
    "Amazon QuickSight",
    "Credit Risk",
  ],
  summary:
    "I am a Junior Data Scientist with a Business Intelligence background and hands-on experience working with large relational datasets across customer applications, contracts, credit risk, lead management and portfolio performance. I build reusable SQL and Python workflows, investigate data-quality issues, develop operational dashboards and evaluate classification models using explainable and statistically grounded methods. I work with risk, operations, sales and development stakeholders to translate complex data into clear metrics, monitoring tools and decision-support solutions.",
  about:
    "I am a Junior Data Scientist and final-year Bachelor of Computing student specialising in Business Intelligence. I enjoy working where technical analysis and business decisions meet: defining reliable metrics, investigating inconsistent data, testing predictive approaches and presenting results clearly to stakeholders. My professional work has strengthened my ability to move from a business question to a validated dataset, an analytical method and a practical reporting or decision-support output. Alongside my technical work, I tutor and mentor students, which has sharpened how I explain complex ideas and support others' growth.",
};

/**
 * Header navigation. `#education`, `#skills` and `#experience` are sub-anchors
 * inside the About section, so every anchor the original specification requires
 * still resolves even though they are not all in the header.
 */
export const NAV: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#work" },
  { label: "Projects", href: "#projects" },
  { label: "Certificates", href: "#certificates" },
];

export const CONTACT = {
  heading: "Let us work with data that matters",
  supporting:
    "I am open to Junior Data Scientist, Data Analyst, BI Analyst, BI Developer and Graduate Data Engineer opportunities.",
} as const;

/** Roles the site is written for. Also used in the Person structured data. */
export const TARGET_ROLES = [
  "Junior Data Scientist",
  "Data Analyst",
  "BI Analyst",
  "BI Developer",
  "Graduate Data Engineer",
] as const;

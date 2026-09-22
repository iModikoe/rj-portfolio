import type { SkillGroup } from "./types";

/**
 * Six functional categories. Deliberately no proficiency percentages and no
 * self-rated radar chart — self-assigned scores are not verifiable.
 */
export const SKILL_GROUPS: SkillGroup[] = [
  {
    name: "Data Analysis and Statistics",
    icon: "analysis",
    blurb: "Understanding what the data is actually saying before modelling it.",
    skills: [
      "Exploratory data analysis",
      "Statistical analysis",
      "Segmentation",
      "Cohort analysis",
      "Trend analysis",
      "Anomaly detection",
      "Hypothesis testing",
      "Survival analysis",
      "Data cleaning",
      "Data validation",
    ],
  },
  {
    name: "Machine Learning",
    icon: "model",
    blurb: "Classification workflows built to be evaluated honestly and explained clearly.",
    skills: [
      "Classification",
      "Feature engineering",
      "Preprocessing",
      "Model selection",
      "XGBoost",
      "CatBoost",
      "Logistic regression",
      "Random Forest",
      "Decision trees",
      "Class imbalance",
      "ROC-AUC",
      "KS statistics",
      "Confusion matrices",
      "Feature importance",
    ],
  },
  {
    name: "Credit Risk and Decision Science",
    icon: "risk",
    blurb: "Turning model evidence into ranking logic a risk team can defend.",
    skills: [
      "Credit-risk analytics",
      "Weight of Evidence",
      "Information Value",
      "Scorecards",
      "Risk bands",
      "Ranking rules",
      "Affordability analysis",
      "Early-risk monitoring",
      "Explainable decision support",
    ],
  },
  {
    name: "Programming and Data",
    icon: "code",
    blurb: "Reusable extraction and analysis workflows over large relational datasets.",
    skills: [
      "Python",
      "R",
      "SQL",
      "PostgreSQL",
      "T-SQL",
      "pandas",
      "NumPy",
      "scikit-learn",
      "Jupyter",
      "LLM-assisted workflows",
      "SQL Server",
      "Oracle",
      "Relational modelling",
      "Reusable extraction workflows",
    ],
  },
  {
    name: "Business Intelligence",
    icon: "bi",
    blurb: "Reporting that stakeholders trust because the metrics are defined once.",
    skills: [
      "Power BI",
      "DAX",
      "Amazon QuickSight",
      "Excel",
      "Matplotlib",
      "KPI design",
      "Dashboard development",
      "Data visualisation",
      "Funnel analysis",
      "Stakeholder reporting",
    ],
  },
  {
    name: "Data Engineering and Platforms",
    icon: "pipeline",
    blurb: "Moving and validating data so the analysis layer stays reliable.",
    skills: [
      "ETL",
      "Data integration",
      "Data transformation",
      "Data-quality checks",
      "Talend",
      "SSIS fundamentals",
      "Git",
      "GitHub",
      "AWS fundamentals",
    ],
  },
];

/**
 * Kept visible but clearly secondary. These come from coursework and personal
 * builds rather than day-to-day professional work, and are not relevant to the
 * target data roles — so they are never shown alongside the six groups above.
 */
export const ADDITIONAL_TECHNOLOGIES: string[] = [
  "HTML",
  "CSS",
  "JavaScript",
  "C#",
  "Node.js",
  "MongoDB",
];

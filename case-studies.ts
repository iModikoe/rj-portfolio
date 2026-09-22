import type { CaseStudy } from "./types";

/**
 * Portfolio-safe descriptions of professional work.
 *
 * Every entry must stay free of client names, customer records, application or
 * contract identifiers, financial details, internal schemas and confidential
 * metrics. Do not add impact percentages, savings, accuracy figures or
 * automation time reductions unless they are measured, documented and
 * explainable in an interview.
 */
export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "credit-risk",
    title: "Credit Risk and Lead Prioritisation",
    summary:
      "An explainable modelling and scorecard workflow for ranking applications and supporting risk-informed prioritisation.",
    problem:
      "Decision-makers needed a consistent way to compare applicants using incomplete, imbalanced and operationally complex data.",
    contribution:
      "Prepared analytical datasets, engineered features, tested statistical relationships, developed classification models and translated model evidence into interpretable ranking logic.",
    output:
      "Explainable scorecards, risk bands, lead rankings, comparison simulations and stakeholder-ready analysis.",
    methods: [
      "Exploratory analysis",
      "Segmentation",
      "Weight of Evidence",
      "Information Value",
      "Feature engineering",
      "XGBoost",
      "CatBoost",
      "Logistic regression",
      "Random Forest",
      "ROC-AUC",
      "KS statistic",
      "Confusion matrices",
      "Out-of-sample validation",
    ],
    tools: ["Python", "pandas", "NumPy", "scikit-learn", "XGBoost", "CatBoost", "PostgreSQL", "Excel"],
  },
  {
    id: "portfolio-monitoring",
    title: "Portfolio Performance and Early Risk Monitoring",
    summary:
      "Portfolio analytics for understanding termination behaviour, contract survival and emerging customer stress.",
    problem:
      "Stakeholders needed comparable performance views across cohorts while accounting for different observation periods.",
    contribution:
      "Built cohort-based analysis, aligned observation windows, compared early termination behaviour and investigated changes in customer credit indicators over time.",
    output:
      "Monitoring datasets, reusable SQL queries, risk-change analysis and management-ready summaries.",
    methods: [
      "Cohort analysis",
      "Survival checkpoints",
      "Early-termination windows",
      "Duration metrics",
      "Median and average comparisons",
      "Snapshot matching",
      "Data-completeness checks",
    ],
    tools: ["PostgreSQL", "Python", "Excel", "Amazon QuickSight", "Power BI"],
  },
  {
    id: "operational-dashboards",
    title: "Operational and Conversion Dashboards",
    summary:
      "Business intelligence reporting that tracks lead conversion, application progress, asset assignment, deliveries and contract outcomes.",
    problem:
      "Operational teams required consistent KPI definitions and drill-down reporting across fragmented workflow data.",
    contribution:
      "Defined metrics, reconciled sources, created reusable analytical datasets and developed dashboard-ready queries and calculated fields.",
    output:
      "Power BI, QuickSight and Excel reporting for operational decisions and recurring reviews.",
    methods: [
      "SQL CTEs",
      "Joins",
      "Window functions",
      "Date logic",
      "Funnel analysis",
      "Conversion rates",
      "Turnaround-time metrics",
      "Cumulative measures",
      "Anomaly checks",
    ],
    tools: ["PostgreSQL", "Amazon QuickSight", "Power BI", "DAX", "Excel"],
  },
  {
    id: "affordability",
    title: "AI Driven Affordability and Decision Support",
    summary:
      "A data workflow that combines application, pricing, banking and credit indicators to support explainable affordability review.",
    problem:
      "Manual review required consistent interpretation of income, commitments and cash-flow behaviour.",
    contribution:
      "Integrated multiple data sources, derived affordability indicators and structured explainable decision logic for review support.",
    output:
      "Structured analytical features and decision-support outputs designed to improve review consistency.",
    methods: [
      "Transaction classification",
      "Income stability analysis",
      "Commitment detection",
      "Cash-flow retention",
      "Affordability indicators",
      "Rule-based explanations",
    ],
    tools: ["Python", "SQL", "pandas", "Data-validation workflows"],
    note: "Decision support. Not a fully automated approval system.",
  },
];

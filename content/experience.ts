import type { Role } from "./types";

/**
 * Confidentiality rule for this file: generic business descriptions only.
 * No source-system names, database structures, customer data, individual
 * employee comparisons, internal identifiers, decision thresholds or
 * unpublished model results.
 */
export const EXPERIENCE: Role[] = [
  {
    title: "Junior Data Scientist",
    organisation: "Drive24 Pty Ltd",
    location: "Centurion, South Africa",
    dates: "December 2025 — Present",
    startDate: "2025-12",
    current: true,
    summary:
      "Analytics and modelling across customer applications, contracts, credit risk, lead management and portfolio performance, working directly with risk, sales, operations and development stakeholders.",
    responsibilities: [
      "Extract, clean, join and analyse operational, customer, application, contract and credit-risk data using PostgreSQL, SQL and Python.",
      "Build reusable data-extraction and reporting workflows for recurring analysis, dashboards and stakeholder requests.",
      "Develop and maintain Power BI, Amazon QuickSight and Excel reporting for approvals, lead conversion, portfolio performance, deliveries, contracts and operational KPIs.",
      "Investigate data discrepancies, validate business rules and improve the reliability of analytical datasets used by business teams.",
      "Analyse early termination, churn, contract survival, approval performance, lead conversion and customer-risk patterns.",
      "Build and evaluate classification models using XGBoost, CatBoost, logistic regression and Random Forest methods.",
      "Apply feature engineering, segmentation, Weight of Evidence, Information Value, ROC-AUC, KS statistics, confusion matrices and out-of-sample validation.",
      "Translate model outputs into explainable scorecards, risk tiers, ranking simulations and business decision rules.",
      "Collaborate with risk, sales, operations and development stakeholders to define KPIs and convert analytical findings into usable reporting and decision support.",
    ],
  },
];

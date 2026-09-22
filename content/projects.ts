import type { Project, SecondaryProject } from "./types";

/**
 * Personal and academic projects with public code, in priority order — the most
 * role-relevant first.
 *
 * `published: false` keeps a real project in the content model without putting
 * a card on the page. Flip it to `true` once a repository, notebook, report or
 * screenshot exists to back it up, and add `repo` and `image` at the same time.
 *
 * `metrics` may only contain measured, reproducible figures. Every value below
 * comes from a committed report in the project's own repository.
 */
export const PROJECTS: Project[] = [
  {
    title: "Explainable Credit Default Risk",
    kind: "Machine Learning · Credit Risk",
    description:
      "An end-to-end probability-of-default system on 30,000 credit-card clients: engineered repayment behaviour, compared three classifiers on validation PR-AUC, fixed an operating threshold before touching the test set, then ran calibration and fairness diagnostics and shipped a Streamlit scoring app.",
    highlights: [
      "Engineered behavioural and affordability features — repayment delay, months late, credit utilisation, payment-to-bill ratio and six-month bill and payment trends",
      "Selected on validation PR-AUC rather than accuracy, because defaults are only 22% of the data",
      "Held the test set back for a single final evaluation; threshold and feature importance both come from validation",
      "Excluded sex from the model and used it only for subgroup diagnostics, with a unit test enforcing the exclusion",
    ],
    stack: [
      "Python",
      "scikit-learn",
      "pandas",
      "HistGradientBoosting",
      "Streamlit",
      "pytest",
      "GitHub Actions",
    ],
    metrics: [
      { label: "ROC-AUC", value: "0.779" },
      { label: "PR-AUC", value: "0.561" },
      { label: "Precision", value: "67%" },
      { label: "Records", value: "30,000" },
    ],
    note: "Portfolio demonstration on a public UCI dataset from Taiwan. Not a production lending system, and not used to approve or decline real applicants.",
    repo: "https://github.com/iModikoe/credit-default-risk",
    image: "/assets/projects/credit-default-risk.png",
    imageAlt:
      "Validation threshold trade-off chart: precision rises and recall falls as the decision threshold increases, with the chosen 50% operating point marked",
    published: true,
  },
  {
    title: "Fleet Predictive Maintenance and Remaining Useful Life",
    kind: "Machine Learning · Prognostics",
    description:
      "A remaining-useful-life model for turbofan engines on NASA C-MAPSS run-to-failure data, with an Isolation Forest anomaly score and a Streamlit dashboard that ranks a fleet by maintenance priority.",
    highlights: [
      "Split by engine rather than by row, so no cycle from a validation or test engine ever appears in training — the failure mode that makes most RUL projects look better than they are",
      "Engineered rolling means, rolling standard deviations and short-term sensor trends within each engine, and capped RUL at 125 cycles to stop long healthy periods dominating the fit",
      "Compared linear, Random Forest and gradient-boosted regressors on validation RMSE, preferring the compact model when it lands within 1% of the best score",
      "Scored separately for abnormal behaviour with an Isolation Forest fitted only on early healthy cycles",
    ],
    stack: [
      "Python",
      "scikit-learn",
      "pandas",
      "HistGradientBoosting",
      "Isolation Forest",
      "Streamlit",
      "pytest",
    ],
    metrics: [
      { label: "MAE (cycles)", value: "14.7" },
      { label: "RMSE", value: "20.1" },
      { label: "R²", value: "0.77" },
      { label: "Test engines", value: "100" },
    ],
    note: "Portfolio demonstration on simulated NASA aircraft-engine data. Not certified for aviation, vehicle maintenance or any safety-critical decision.",
    repo: "https://github.com/iModikoe/fleet-predictive-maintenance",
    image: "/assets/projects/fleet-predictive-maintenance.png",
    imageAlt:
      "Predicted against actual remaining useful life for 100 held-out NASA test engines, with a perfect-prediction line and a band showing the 14.7-cycle mean absolute error",
    published: true,
  },
  {
    title: "EcoTrade Sustainability Insights Dashboard",
    kind: "Business Intelligence",
    description:
      "Interactive Power BI reporting for sustainability KPIs across emissions, product performance and customer behaviour, built on a modelled star schema.",
    highlights: [
      "Designed a star schema with conformed dimensions to keep measures consistent across pages",
      "Authored DAX measures for KPI cards and time-intelligence comparisons",
      "Implemented row-level security so each stakeholder group sees only its own scope",
    ],
    stack: ["Power BI", "DAX", "Star schema", "Time intelligence", "Row-level security"],
    repo: "https://github.com/iModikoe/EcoTrade-Sustainability-Insights-Dashboard-Power-BI-Solution",
    image: "/assets/projects/ecotrade.png",
    imageAlt: "EcoTrade sustainability dashboard showing emissions and product performance KPIs",
    published: true,
  },
  {
    title: "Paws Haven Animal Shelter Database",
    kind: "Database Development",
    description:
      "A normalised SQL Server database for adoptions, medical records and shelter operations, with auditability and role-based access built in.",
    highlights: [
      "Modelled the schema to third normal form from real shelter workflows",
      "Wrote stored procedures, functions and audit triggers for traceable changes",
      "Applied role-based permissions and views to keep sensitive records restricted",
    ],
    stack: ["SQL Server", "T-SQL", "ERD", "3NF", "Stored procedures", "Triggers"],
    repo: "https://github.com/iModikoe/Paws-Haven-Animal-Shelter-Database",
    image: "/assets/projects/paws-haven.png",
    imageAlt: "Entity relationship diagram for the Paws Haven animal shelter database",
    published: true,
  },
  {
    title: "Student Success Predictor",
    kind: "Machine Learning",
    description:
      "A classification model predicting student outcomes from academic and engagement data, with emphasis on preprocessing and honest evaluation.",
    highlights: [
      "Preprocessing and feature preparation for mixed categorical and numeric inputs",
      "Classification modelling with held-out evaluation",
      "Interpretation of drivers rather than accuracy alone",
    ],
    stack: ["Python", "pandas", "scikit-learn", "Classification", "Model evaluation"],
    // TODO: add `repo` (or a notebook/report link) and an `image`, then set published: true.
    published: false,
  },
  {
    title: "IoT Powered Mobile Weather Observation Station",
    kind: "Systems and Data Collection",
    description:
      "A mobile sensor station collecting live weather readings, integrated with a data store for downstream analysis.",
    highlights: [
      "Sensor data collection and transmission from a mobile unit",
      "System integration between hardware, storage and reporting",
      "Analytical use of the collected time-series readings",
    ],
    stack: ["IoT sensors", "Data collection", "System integration", "Time-series data"],
    // TODO: add `repo` (or report/photos) and an `image`, then set published: true.
    published: false,
  },
];

/**
 * Real work that is less relevant to the target data roles. Listed compactly
 * rather than given a full card, so it adds breadth without competing with the
 * professional case studies.
 */
export const ADDITIONAL_PROJECTS: SecondaryProject[] = [
  {
    title: "E-Commerce API Backend",
    description:
      "Secure REST API covering products, users, orders and payments, with JWT authentication, input validation, rate limiting and structured error handling.",
    repo: "https://github.com/iModikoe/E-Commerce-API-Backend",
    image: "/assets/projects/ecommerce.png",
    imageAlt: "E-Commerce API Backend project mark",
  },
  {
    title: "Oracle Legacy Bookstore Database",
    description:
      "Legacy Oracle schema and configuration for books and authors, used as a working base for migration and ETL exercises.",
    repo: "https://github.com/iModikoe/Oracle-Legacy-Bookstore-Database",
    image: "/assets/projects/bookstore.png",
    imageAlt: "Oracle Legacy Bookstore Database project mark",
  },
];

# Content governance

Every piece of visible copy on the site lives in this folder. Change it here —
never in a component — so the website and the downloadable resume stay in step.

| Content type | File | Update rule |
| --- | --- | --- |
| Role and dates | `experience.ts` | Update when employment status changes. Never show an end date until it is confirmed. |
| Academic average | `education.ts` | Use the latest verified transcript value. The current approved value is **78.5%**. The distinctions count stays out until the latest official number is confirmed. |
| Project metrics | `case-studies.ts`, `projects.ts` | Publish only measured, documented figures you can explain in an interview. No invented impact percentages, savings, accuracy figures or time reductions. A `metrics` entry must trace to a committed report in that project's own repository. |
| Professional work | `case-studies.ts` | Generic, portfolio-safe language only. No client names, customer records, application or contract identifiers, financial details, internal schemas, decision thresholds or confidential metrics. |
| Resume | `public/assets/` + `profile.ts` | Keep the website and the downloadable resume consistent for title, dates, education and core skills. Served file is the **DS** variant; the role-specific variants are not published. After replacing it, re-check: role and dates, academic average, education end date, certification list, leadership/awards, and the core skill groups. |
| Links | all files | Check quarterly, and whenever a repository, credential or profile URL changes. |

## Hard rules

- No confidential Drive24 data, screenshots or code may be bundled into the public site.
- Do not claim that a model is deployed to production unless that status can be verified.
  The affordability work is described as **decision support** for exactly this reason.
- Never link a button to a placeholder. If there is no real destination, leave
  `repo` undefined or set `published: false` — the components handle both.
- Keep certificate names, issuers and relevant skills public, but do not publish
  credential IDs, verification tokens or certificate PDFs.
- **Never publish an ID number.** Certificate PDFs may contain personal identity
  information and must never be bundled with the site.
- Structured data must not contain a phone number, residential address or other
  sensitive personal information.

Archive entries (`ADDITIONAL_PROJECTS`) take the same `repo` / `image` / `imageAlt` fields as the
academic ones. They render as a small mark rather than a full plate, because they sit below the data
work on purpose.

## Adding a project

1. Add the entry to `ACADEMIC_PROJECTS` in `projects.ts` with `published: false`.
2. When a repository, notebook, report or screenshot exists, add `repo` and
   `image` (with `imageAlt`) and flip `published` to `true`.

Currently unpublished, waiting on assets: **Student Success Predictor**,
**IoT Powered Mobile Weather Observation Station**.

## Project cover images

The machine-learning project covers are generated from those projects' own
reports, not drawn by hand:

| Image | Generator | Source repo |
| --- | --- | --- |
| `credit-default-risk.png` | `scripts/make_project_cover.py` | `iModikoe/credit-default-risk` |
| `fleet-predictive-maintenance.png` | `scripts/make_fleet_cover.py` | `iModikoe/fleet-predictive-maintenance` |

Each script expects the source project as a sibling checkout of this repository,
or `PROJ=/path/to/checkout`. If a model is retrained and the numbers move,
re-run the generator rather than editing the image — and keep the covers
chart-led, because the card beside them already supplies the title and the
headline metrics.

/**
 * Shared content types for the portfolio.
 *
 * Every piece of visible copy lives in `content/` so that dates, skills and
 * project wording can be updated without touching layout code.
 * See `content/GOVERNANCE.md` for the update rules that apply to each type.
 */

export type NavItem = {
  label: string;
  /** In-page anchor, e.g. `#experience`. Must match the section's `id`. */
  href: string;
};

export type Profile = {
  name: string;
  /** Short form used in the nav and footer. */
  shortName: string;
  eyebrow: string;
  roleLine: string;
  intro: string;
  location: string;
  email: string;
  linkedin: string;
  github: string;
  whatsapp: string;
  /** Path under /public. Keep the filename descriptive — it is what recruiters save. */
  resume: string;
  resumeFilename: string;
  photo: string;
  /** Alt text for the portrait. Never leave this empty — it is informative. */
  photoAlt: string;
  heroChips: string[];
  summary: string;
  about: string;
};

export type Role = {
  title: string;
  organisation: string;
  location: string;
  /** Rendered verbatim. Never show an end date until it is confirmed. */
  dates: string;
  /** Machine-readable start for structured data, ISO `YYYY-MM`. */
  startDate: string;
  current: boolean;
  summary: string;
  responsibilities: string[];
};

export type CaseStudy = {
  id: string;
  title: string;
  /** One-line card summary. */
  summary: string;
  problem: string;
  contribution: string;
  output: string;
  methods: string[];
  tools: string[];
  /**
   * Optional qualifier rendered as a small note on the card — used where the
   * spec requires language that does not overstate deployment status.
   */
  note?: string;
};

export type SkillGroup = {
  name: string;
  /** Short description of what the group covers. */
  blurb: string;
  /** Icon key, resolved to a Lucide icon in `components/site/skills.tsx`. */
  icon: "analysis" | "model" | "risk" | "code" | "bi" | "pipeline";
  skills: string[];
};

export type Project = {
  title: string;
  kind: string;
  description: string;
  highlights: string[];
  stack: string[];
  /**
   * Headline results. Measured, reproducible figures only — every value here
   * must come from a committed report in the project itself.
   */
  metrics?: { label: string; value: string }[];
  /** Scope or responsible-use qualifier shown under the card. */
  note?: string;
  /** Omit entirely when there is no real destination. Never link a placeholder. */
  repo?: string;
  image?: string;
  imageAlt?: string;
  /**
   * `false` keeps an entry in the content model without rendering it — used for
   * work that is real but has no publishable repository, notebook or report yet.
   */
  published: boolean;
};

export type SecondaryProject = {
  title: string;
  description: string;
  /** Omit entirely when there is no real destination. Never link a placeholder. */
  repo?: string;
  image?: string;
  imageAlt?: string;
};

export type Education = {
  institution: string;
  qualification: string;
  status: string;
  dates: string;
  description: string;
  /** Verified figures only, straight from the latest official transcript. */
  facts: { label: string; value: string }[];
};

export type Certification = {
  name: string;
  issuer: string;
  skills: string;
};

export type LeadershipEntry = {
  role: string;
  detail: string;
};

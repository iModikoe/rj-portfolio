import { BarChart3, LineChart, ShieldCheck, Workflow } from "lucide-react";
import { CASE_STUDIES } from "@/content";
import { SectionHeader } from "./section-header";
import { Reveal } from "./reveal";

const ICONS = [ShieldCheck, LineChart, BarChart3, Workflow];

export function FeaturedWork() {
  return (
    <section id="work" aria-labelledby="work-heading" className="section-pad scroll-mt-24">
      <div className="container-page">
        <SectionHeader
          id="work-heading"
          title="Data Science Work"
          lead="Professional projects from my work at Drive24, written to be portfolio-safe. Source code and internal data cannot be published, so each is presented as a case study: the problem, what I contributed, and what came out of it."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {CASE_STUDIES.map((study, index) => {
            const Icon = ICONS[index % ICONS.length];
            return (
              <Reveal key={study.id} kind="fade-up" delay={(index % 2) * 100}>
                <article className="card card-hover">
                  <div className="flex items-start justify-between gap-4">
                    <span className="contact-icon h-11 w-11">
                      <Icon aria-hidden="true" className="h-5 w-5" />
                    </span>
                    <span className="status-badge">Case Study {String(index + 1).padStart(2, "0")}</span>
                  </div>

                  <h3 className="mt-6 text-[1.3125rem] font-bold leading-snug">{study.title}</h3>
                  <p className="mt-3 text-[0.9375rem] leading-relaxed text-text-2">{study.summary}</p>

                  <dl className="mt-6 space-y-4 border-t border-card-border pt-6">
                    <div>
                      <dt className="text-[0.8125rem] font-semibold uppercase tracking-[1px] text-primary">
                        Problem
                      </dt>
                      <dd className="mt-1.5 text-[0.9375rem] leading-relaxed text-text-2">{study.problem}</dd>
                    </div>
                    <div>
                      <dt className="text-[0.8125rem] font-semibold uppercase tracking-[1px] text-primary">
                        Contribution
                      </dt>
                      <dd className="mt-1.5 text-[0.9375rem] leading-relaxed text-text-2">
                        {study.contribution}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-[0.8125rem] font-semibold uppercase tracking-[1px] text-primary">
                        Output
                      </dt>
                      <dd className="mt-1.5 text-[0.9375rem] leading-relaxed text-text-2">{study.output}</dd>
                    </div>
                  </dl>

                  <ul aria-label={`Tools used in ${study.title}`} className="mt-6 flex flex-wrap gap-2">
                    {study.tools.map((tool) => (
                      <li key={tool}>
                        <span className="tag">{tool}</span>
                      </li>
                    ))}
                  </ul>

                  {study.note && (
                    <p className="mt-5 border-t border-card-border pt-4 text-[0.8125rem] leading-relaxed text-text-3">
                      {study.note}
                    </p>
                  )}
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

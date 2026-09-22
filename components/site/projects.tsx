import Image from "next/image";
import { ArrowUpRight, Github, Info } from "lucide-react";
import { ADDITIONAL_PROJECTS, PROJECTS } from "@/content";
import { externalLinkProps } from "@/lib/utils";
import { SectionHeader } from "./section-header";
import { Reveal } from "./reveal";

type Item = {
  title: string;
  kind: string;
  description: string;
  highlights: string[];
  stack: string[];
  metrics?: { label: string; value: string }[];
  note?: string;
  repo?: string;
  image?: string;
  imageAlt?: string;
};

const ITEMS: Item[] = [
  ...PROJECTS.filter((p) => p.published),
  ...ADDITIONAL_PROJECTS.map((p) => ({
    title: p.title,
    kind: "Additional project",
    description: p.description,
    highlights: [],
    stack: [],
    repo: p.repo,
    image: p.image,
    imageAlt: p.imageAlt,
  })),
];

export function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-heading" className="section-pad scroll-mt-24 bg-bg-alt">
      <div className="container-page">
        <SectionHeader
          id="projects-heading"
          title="My Projects"
          lead="Personal and academic builds where the code is public — an end-to-end credit-risk model, dimensional modelling, normalised database design, and a couple of things from the developer side."
        />

        <div className="space-y-20 lg:space-y-24">
          {ITEMS.map((project, index) => {
            const flip = index % 2 === 1;
            return (
              <article
                key={project.title}
                className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14"
              >
                <Reveal
                  kind={flip ? "fade-left" : "fade-right"}
                  className={flip ? "lg:order-2" : undefined}
                >
                  {project.image ? (
                    <div className="project-image">
                      <div className="relative aspect-[4/3] w-full">
                        <Image
                          src={project.image}
                          alt={project.imageAlt ?? ""}
                          fill
                          loading="lazy"
                          sizes="(max-width: 1023px) 100vw, 45vw"
                          className="object-cover object-center"
                        />
                      </div>
                      {project.repo && (
                        <span className="image-overlay">
                          <a
                            href={project.repo}
                            {...externalLinkProps}
                            className="inline-flex min-h-[48px] items-center gap-2 rounded-full bg-white px-6 text-[0.9375rem] font-semibold text-primary"
                          >
                            <Github aria-hidden="true" className="h-4 w-4" />
                            View Repository
                            <span className="sr-only"> for {project.title} (opens in a new tab)</span>
                          </a>
                        </span>
                      )}
                    </div>
                  ) : (
                    <div className="grid aspect-[4/3] w-full place-items-center rounded-2xl border border-card-border bg-card text-text-3">
                      <span className="text-[0.875rem]">No preview available</span>
                    </div>
                  )}
                </Reveal>

                <Reveal
                  kind={flip ? "fade-right" : "fade-left"}
                  delay={100}
                  className={flip ? "lg:order-1" : undefined}
                >
                  <p className="section-label">
                    <span aria-hidden="true" className="h-px w-8 bg-primary" />
                    {project.kind}
                  </p>

                  <h3 className="mt-5 text-[1.75rem] font-bold leading-tight sm:text-[2.125rem]">
                    {project.title}
                  </h3>

                  <p className="mt-4 text-[1.0625rem] leading-relaxed text-text-2">{project.description}</p>

                  {project.metrics && project.metrics.length > 0 && (
                    <dl className="mt-7 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-card-border bg-card-border sm:grid-cols-4">
                      {project.metrics.map((metric) => (
                        <div key={metric.label} className="bg-card px-4 py-4">
                          <dt className="text-[0.75rem] font-semibold uppercase tracking-[1px] text-text-3">
                            {metric.label}
                          </dt>
                          <dd className="mt-1 text-[1.375rem] font-bold text-primary">{metric.value}</dd>
                        </div>
                      ))}
                    </dl>
                  )}

                  {project.highlights.length > 0 && (
                    <ul className="skill-list mt-6">
                      {project.highlights.map((h) => (
                        <li key={h}>{h}</li>
                      ))}
                    </ul>
                  )}

                  {project.stack.length > 0 && (
                    <ul aria-label={`${project.title} technologies`} className="mt-6 flex flex-wrap gap-2">
                      {project.stack.map((s) => (
                        <li key={s}>
                          <span className="tag">{s}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {project.note && (
                    <p className="mt-6 flex items-start gap-2 rounded-2xl border border-card-border bg-bg px-4 py-3 text-[0.875rem] leading-relaxed text-text-3">
                      <Info aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span>{project.note}</span>
                    </p>
                  )}

                  {project.repo && (
                    <div className="mt-8">
                      <a href={project.repo} {...externalLinkProps} className="btn btn-primary">
                        <Github aria-hidden="true" className="h-4 w-4" />
                        View Repository
                        <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                        <span className="sr-only"> (opens in a new tab)</span>
                      </a>
                    </div>
                  )}
                </Reveal>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

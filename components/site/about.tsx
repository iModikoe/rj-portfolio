import { GraduationCap, Lightbulb } from "lucide-react";
import { ADDITIONAL_TECHNOLOGIES, EDUCATION, EXPERIENCE, LEADERSHIP, PROFILE, SKILL_GROUPS } from "@/content";
import { SectionHeader } from "./section-header";
import { Reveal } from "./reveal";

export function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="section-pad scroll-mt-24 bg-bg-alt">
      <div className="container-page">
        <SectionHeader
          id="about-heading"
          title="About Me"
          lead="A Business Intelligence graduate working as a Junior Data Scientist — equally at home in SQL, in a notebook, and in a room full of stakeholders."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Education */}
          <Reveal kind="fade-right">
            <div id="education" className="card card-hover scroll-mt-24">
              <div className="flex items-center gap-3">
                <span className="contact-icon h-11 w-11">
                  <GraduationCap aria-hidden="true" className="h-5 w-5" />
                </span>
                <h3 className="text-[1.375rem] font-bold uppercase tracking-[1px]">Education</h3>
              </div>

              <div className="mt-7">
                <h4 className="text-[1.125rem] font-bold">{EDUCATION.institution}</h4>
                <p className="mt-1.5 font-medium text-primary">{EDUCATION.qualification}</p>
                <p className="mt-1 text-[0.9375rem] text-text-3">{EDUCATION.dates}</p>
                <p className="mt-4 text-[0.9375rem] leading-relaxed text-text-2">{EDUCATION.description}</p>

                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="status-badge">{EDUCATION.status}</span>
                  {EDUCATION.facts.map((fact) => (
                    <span key={fact.label} className="tag-plain">
                      {fact.label}: {fact.value}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* How I work */}
          <Reveal kind="fade-left" delay={100}>
            <div className="card card-hover">
              <div className="flex items-center gap-3">
                <span className="contact-icon h-11 w-11">
                  <Lightbulb aria-hidden="true" className="h-5 w-5" />
                </span>
                <h3 className="text-[1.375rem] font-bold uppercase tracking-[1px]">How I Think</h3>
              </div>

              <p className="mt-7 text-[0.9375rem] leading-relaxed text-text-2">{PROFILE.summary}</p>

              <div className="mt-6 border-t border-card-border pt-6">
                <p className="text-[0.8125rem] font-semibold uppercase tracking-[1.5px] text-text-3">
                  Also
                </p>
                <ul className="skill-list mt-3">
                  {LEADERSHIP.slice(0, 3).map((entry) => (
                    <li key={entry.role}>
                      <span className="font-medium text-text">{entry.role}</span> — {entry.detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Skills matrix */}
        <Reveal kind="fade-up" delay={100} className="mt-6">
          <div id="skills" className="card card-hover scroll-mt-24">
            <h3 className="text-[1.375rem] font-bold uppercase tracking-[1px]">How I Work</h3>
            <p className="mt-3 max-w-[760px] text-[0.9375rem] leading-relaxed text-text-2">
              Grouped by what the work actually involves — no self-rated scores. Everything here is used in
              professional work, coursework or certified training.
            </p>

            <div className="mt-8 grid gap-x-8 gap-y-9 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
              {SKILL_GROUPS.map((group) => (
                <div key={group.name}>
                  <h4 className="text-[1.0625rem] font-bold text-primary">{group.name}</h4>
                  <ul className="skill-list mt-3">
                    {group.skills.map((skill) => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Kept visible but clearly secondary: coursework and personal builds
                rather than day-to-day data work. */}
            <div className="mt-9 border-t border-card-border pt-7">
              <h4 className="text-[1.0625rem] font-bold">Additional technologies</h4>
              <p className="mt-2 max-w-[60ch] text-[0.9375rem] leading-relaxed text-text-3">
                From coursework and personal builds, not day-to-day data work.
              </p>
              <ul aria-label="Additional technologies" className="mt-4 flex flex-wrap gap-2">
                {ADDITIONAL_TECHNOLOGIES.map((tech) => (
                  <li key={tech}>
                    <span className="tag-plain">{tech}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>

        {/* Experience timeline */}
        <Reveal kind="fade-up" delay={100} className="mt-6">
          <div id="experience" className="card scroll-mt-24">
            <p className="section-label">
              <span aria-hidden="true" className="h-px w-8 bg-primary" />
              Career Timeline
            </p>
            <h3 className="mt-4 text-[1.375rem] font-bold uppercase tracking-[1px]">Work Experience</h3>

            <ol className="timeline mt-8">
              {EXPERIENCE.map((role, index) => (
                <li key={role.organisation} className="timeline-item">
                  <span
                    aria-hidden="true"
                    className={"timeline-marker" + (role.current ? " current" : "")}
                  >
                    {index + 1}
                  </span>

                  <div className="min-w-0 flex-1">
                    <p className="flex flex-wrap items-center gap-3 text-[0.9375rem] text-text-3">
                      {role.dates}
                      {role.current && <span className="status-badge">Current</span>}
                    </p>
                    <h4 className="mt-2 text-[1.25rem] font-bold">{role.title}</h4>
                    <p className="mb-4 font-medium text-primary">{role.organisation}</p>
                    <ul className="skill-list">
                      {role.responsibilities.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

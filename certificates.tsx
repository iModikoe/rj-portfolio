import { Award } from "lucide-react";
import { CERTIFICATIONS } from "@/content";
import { SectionHeader } from "./section-header";
import { Reveal } from "./reveal";

export function Certificates() {
  return (
    <section id="certificates" aria-labelledby="certificates-heading" className="section-pad scroll-mt-24">
      <div className="container-page">
        <SectionHeader
          id="certificates-heading"
          title="Certificates"
          lead="Industry and technical training that supports my work across data science, analytics, cloud and business intelligence."
        />

        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CERTIFICATIONS.map((cert, index) => (
            <Reveal key={cert.name} as="li" kind="fade-up" delay={(index % 3) * 100}>
              <div className="card card-hover relative flex h-full flex-col">
                <div className="flex items-start justify-between gap-4">
                  <span className="contact-icon h-11 w-11">
                    <Award aria-hidden="true" className="h-5 w-5" />
                  </span>
                  {index === 0 && <span className="status-badge">Flagship</span>}
                </div>

                <h3 className="mt-6 text-[1.125rem] font-bold leading-snug">
                  {cert.name}
                </h3>

                <p className="mt-2 text-[0.8125rem] font-semibold uppercase tracking-[1px] text-text-3">
                  {cert.issuer}
                </p>

                <p className="mt-4 text-[0.9375rem] leading-relaxed text-text-2">{cert.skills}</p>

              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

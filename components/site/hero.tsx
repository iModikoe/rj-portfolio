import Image from "next/image";
import { ArrowDown, Download, Mail } from "lucide-react";
import { PROFILE } from "@/content";
import { Reveal } from "./reveal";

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative isolate flex min-h-screen items-center overflow-hidden px-0 pb-24 pt-32 lg:pt-36"
    >
      {/* Decorative wash, matching the reference's corner glow. The clipping box
          is its own element: an oversized glow relying on the section to clip it
          escapes and widens the page, because a negative z-index leaves the
          section's paint order unless the section is a stacking context. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {/* The gradient is anchored inside its own box and fully transparent
            before the edge, so the clip never shows as a hard seam. */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(60rem 45rem at 82% 6%, rgba(55,225,188,0.28) 0%, rgba(55,225,188,0.10) 38%, rgba(55,225,188,0) 68%)",
          }}
        />
      </div>

      <div className="container-page grid w-full items-center gap-14 lg:grid-cols-2 lg:gap-10">
        <div>
          <Reveal kind="fade-down">
            <p className="section-label">
              <span aria-hidden="true" className="h-px w-8 bg-primary" />
              Based in Centurion, South Africa
            </p>
          </Reveal>

          <Reveal kind="fade-right" delay={100}>
            <h1
              id="hero-heading"
              className="text-gradient mt-6 text-[2.75rem] font-extrabold uppercase leading-[1.05] sm:text-[3.75rem] lg:text-[4.5rem]"
            >
              Junior Data
              <br />
              Scientist
            </h1>
          </Reveal>

          <Reveal kind="fade-right" delay={200}>
            <p className="mt-5 text-[1.0625rem] font-medium uppercase tracking-[1px] text-text-3">
              {PROFILE.name}
            </p>
          </Reveal>

          <Reveal kind="fade-up" delay={300}>
            <p className="mt-6 max-w-[600px] text-[1.0625rem] leading-relaxed text-text-2 sm:text-[1.125rem]">
              Currently a <span className="font-medium text-primary">Junior Data Scientist at Drive24</span>,
              turning operational, customer and credit-risk data into{" "}
              <span className="font-medium text-primary">
                explainable scorecards, dashboards and decision support
              </span>{" "}
              — backed by a Business Intelligence degree and SQL, Python and machine-learning practice.
            </p>
          </Reveal>

          <Reveal kind="fade-up" delay={300}>
            <div className="mt-9 flex flex-wrap gap-4">
              <a href="#work" className="btn btn-primary">
                View My Work
                <ArrowDown aria-hidden="true" className="h-4 w-4" />
              </a>
              <a
                href={PROFILE.resume}
                download={PROFILE.resumeFilename}
                className="btn btn-outline"
              >
                <Download aria-hidden="true" className="h-4 w-4" />
                Download CV
              </a>
              <a href="#contact" className="btn btn-outline">
                <Mail aria-hidden="true" className="h-4 w-4" />
                Contact Me
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal kind="fade-left" delay={200} className="mx-auto w-full max-w-[26rem] lg:max-w-none">
          {/* The offset slab is inset inside a padded box rather than translated
              out of one, so it can never reach past the column and widen the page. */}
          <div className="relative isolate pb-5 pr-5">
            <div
              aria-hidden="true"
              className="absolute bottom-0 left-5 right-0 top-5 -z-10 rounded-[2rem]"
              style={{ background: "var(--primary-soft)" }}
            />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-card-border bg-bg-alt shadow-[0_30px_60px_rgba(16,24,32,0.14)]">
            <Image
              src={PROFILE.photo}
              alt={PROFILE.photoAlt}
              fill
              priority
              sizes="(max-width: 1023px) 416px, 45vw"
                className="object-cover object-center"
              />
            </div>
          </div>
        </Reveal>
      </div>

      <a
        href="#about"
        className="scroll-indicator no-print text-[0.75rem] font-semibold uppercase tracking-[2px]"
      >
        Scroll
        <ArrowDown aria-hidden="true" className="h-4 w-4" />
      </a>
    </section>
  );
}

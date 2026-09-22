import { Download, Github, Linkedin, Mail, MapPin, MessageCircle } from "lucide-react";
import { CONTACT, PROFILE, TARGET_ROLES } from "@/content";
import { externalLinkProps } from "@/lib/utils";
import { SectionHeader } from "./section-header";
import { Reveal } from "./reveal";

const DETAILS = [
  { label: "Email", value: PROFILE.email, href: `mailto:${PROFILE.email}`, icon: Mail, external: false },
  { label: "LinkedIn", value: "itumeleng-modikoe", href: PROFILE.linkedin, icon: Linkedin, external: true },
  { label: "GitHub", value: "iModikoe", href: PROFILE.github, icon: Github, external: true },
  { label: "WhatsApp", value: "Message directly", href: PROFILE.whatsapp, icon: MessageCircle, external: true },
];

const SOCIALS = [
  { label: "LinkedIn", href: PROFILE.linkedin, icon: Linkedin },
  { label: "GitHub", href: PROFILE.github, icon: Github },
  { label: "WhatsApp", href: PROFILE.whatsapp, icon: MessageCircle },
];

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="section-pad scroll-mt-24 bg-bg-alt">
      <div className="container-page">
        <SectionHeader id="contact-heading" title="Get In Touch" lead={CONTACT.supporting} />

        <Reveal kind="fade-up">
          <div className="overflow-hidden rounded-2xl border border-card-border bg-card shadow-[0_20px_40px_rgba(16,24,32,0.08)]">
            <div className="grid lg:grid-cols-2">
              <div className="p-8 sm:p-10">
                <h3 className="text-[1.5rem] font-bold">Contact Info</h3>

                <ul className="mt-8 space-y-6">
                  {DETAILS.map(({ label, value, href, icon: Icon, external }) => (
                    <li key={label} className="flex items-center gap-4">
                      <span className="contact-icon">
                        <Icon aria-hidden="true" className="h-5 w-5" />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-[0.875rem] text-text-3">{label}</span>
                        <a
                          href={href}
                          {...(external ? externalLinkProps : {})}
                          className="block truncate font-medium text-text transition-colors duration-300 hover:text-primary"
                        >
                          {value}
                          {external && <span className="sr-only"> (opens in a new tab)</span>}
                        </a>
                      </span>
                    </li>
                  ))}

                  <li className="flex items-center gap-4">
                    <span className="contact-icon">
                      <MapPin aria-hidden="true" className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block text-[0.875rem] text-text-3">Location</span>
                      <span className="font-medium text-text">{PROFILE.location}</span>
                    </span>
                  </li>
                </ul>

                <div className="mt-10">
                  <p className="text-[0.9375rem] text-text-3">Find me online</p>
                  <ul className="mt-4 flex gap-3">
                    {SOCIALS.map(({ label, href, icon: Icon }) => (
                      <li key={label}>
                        <a href={href} {...externalLinkProps} className="social-link" aria-label={label}>
                          <Icon aria-hidden="true" className="h-[18px] w-[18px]" />
                          <span className="sr-only"> (opens in a new tab)</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <a href={PROFILE.resume} download={PROFILE.resumeFilename} className="btn btn-primary mt-9">
                  <Download aria-hidden="true" className="h-4 w-4" />
                  Download CV
                </a>
              </div>

              <div className="border-t border-card-border bg-bg-alt p-8 sm:p-10 lg:border-l lg:border-t-0">
                <h3 className="text-[1.5rem] font-bold leading-snug">{CONTACT.heading}</h3>
                <p className="mt-4 text-[1.0625rem] leading-relaxed text-text-2">
                  I am open to the roles below. The fastest way to reach me is email or LinkedIn.
                </p>

                <ul aria-label="Roles of interest" className="mt-8 space-y-3">
                  {TARGET_ROLES.map((role, index) => (
                    <li
                      key={role}
                      className="flex items-center gap-4 border-b border-card-border pb-3 text-[1rem] text-text"
                    >
                      <span aria-hidden="true" className="text-[0.8125rem] font-bold text-primary">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      {role}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

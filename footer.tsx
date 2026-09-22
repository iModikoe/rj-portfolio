import { PROFILE } from "@/content";
import { externalLinkProps } from "@/lib/utils";

const LINKS = [
  { label: "About", href: "#about", external: false },
  { label: "Work", href: "#work", external: false },
  { label: "LinkedIn", href: PROFILE.linkedin, external: true },
  { label: "GitHub", href: PROFILE.github, external: true },
  { label: "Email", href: `mailto:${PROFILE.email}`, external: false },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-card-border py-9">
      <div className="container-page flex flex-wrap items-center justify-between gap-6">
        <p className="text-[0.9375rem] text-text-3">
          © {new Date().getFullYear()} {PROFILE.name}
        </p>

        <nav aria-label="Elsewhere" className="flex flex-wrap items-center gap-x-7 gap-y-2 text-[0.9375rem]">
          {LINKS.map(({ label, href, external }) => (
            <a
              key={label}
              href={href}
              {...(external ? externalLinkProps : {})}
              className="text-text-2 transition-colors duration-300 hover:text-primary"
            >
              {label}
              {external && <span className="sr-only"> (opens in a new tab)</span>}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}

"use client";

import * as React from "react";
import { Menu, X } from "lucide-react";
import { NAV, PROFILE } from "@/content";
import { cn } from "@/lib/utils";

export function SiteNav() {
  const [open, setOpen] = React.useState(false);
  const [active, setActive] = React.useState<string | null>(null);
  const [scrolled, setScrolled] = React.useState(false);
  const menuButtonRef = React.useRef<HTMLButtonElement>(null);

  React.useEffect(() => {
    const ids = [...NAV.map((item) => item.href), "#contact"];
    const sections = ids
      .map((href) => document.querySelector(href))
      .filter((el): el is Element => el instanceof Element);
    if (sections.length === 0 || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-20% 0px -65% 0px", threshold: [0, 0.2, 0.6] },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header
      className={cn(
        "no-print fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || open
          ? "border-b border-card-border bg-bg/90 py-2 shadow-[0_2px_20px_rgba(16,24,32,0.06)] backdrop-blur-md"
          : "border-b border-transparent bg-transparent py-4",
      )}
    >
      <div className="container-page flex items-center justify-between gap-4">
        <a href="#top" className="shrink-0 text-[1.25rem] font-semibold tracking-[1px] text-text">
          {PROFILE.shortName.toUpperCase()}
        </a>

        <nav aria-label="Sections" className="hidden items-center lg:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              aria-current={active === item.href ? "true" : undefined}
              className="nav-link"
            >
              {item.label}
            </a>
          ))}
          <a href="#contact" className="btn-contact ml-2">
            Contact
          </a>
        </nav>

        <button
          ref={menuButtonRef}
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-card-border px-4 text-[0.875rem] font-semibold text-text transition-colors hover:bg-bg-alt lg:hidden"
        >
          {open ? <X aria-hidden="true" className="h-4 w-4" /> : <Menu aria-hidden="true" className="h-4 w-4" />}
          {open ? "Close" : "Menu"}
        </button>
      </div>

      <div id="mobile-menu" hidden={!open} className="border-t border-card-border bg-bg lg:hidden">
        <nav aria-label="Sections" className="container-page flex flex-col py-3">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              aria-current={active === item.href ? "true" : undefined}
              className={cn(
                "flex min-h-[48px] items-center border-b border-card-border text-[1rem] font-medium transition-colors",
                active === item.href ? "text-primary" : "text-text-2 hover:text-text",
              )}
            >
              {item.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="btn-contact mt-4 self-start">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}

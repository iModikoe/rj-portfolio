import * as React from "react";
import { cn } from "@/lib/utils";

export type RevealKind = "fade-up" | "fade-down" | "fade-left" | "fade-right" | "zoom-in";

/**
 * Scroll reveal, matching the reference's AOS behaviour: 0.8s ease-in-out on
 * opacity and transform, with optional stagger.
 *
 * This is a server component — it only writes attributes. `RevealController`
 * drives every marked element from one shared IntersectionObserver.
 */
export function Reveal({
  children,
  kind = "fade-up",
  delay = 0,
  className,
  as: Tag = "div",
}: {
  children: React.ReactNode;
  kind?: RevealKind;
  /** Stagger in milliseconds — the reference uses 100 / 200 / 300. */
  delay?: number;
  className?: string;
  as?: "div" | "li" | "section" | "article" | "header";
}) {
  const Component = Tag as React.ElementType;
  return (
    <Component
      data-reveal={kind}
      style={delay ? ({ "--reveal-delay": `${delay}ms` } as React.CSSProperties) : undefined}
      className={cn(className)}
    >
      {children}
    </Component>
  );
}

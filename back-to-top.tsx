"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

/** Appears once the page has scrolled, exactly as the reference does. */
export function BackToTop() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const onScroll = () => setActive(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={"back-to-top no-print" + (active ? " active" : "")}
      aria-label="Back to top"
      tabIndex={active ? 0 : -1}
    >
      <ArrowUp aria-hidden="true" className="h-5 w-5" />
    </button>
  );
}

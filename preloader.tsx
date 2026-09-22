"use client";

import { useEffect, useState } from "react";

/**
 * The intro spinner. Held only until the window load event, then faded out —
 * and skipped entirely for reduced motion, where a spinner is just noise.
 *
 * It is `aria-hidden` and never traps focus: the page underneath is already
 * rendered and readable, so assistive tech is not made to wait for it.
 */
export function Preloader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDone(true);
      return;
    }

    const finish = () => setDone(true);
    if (document.readyState === "complete") {
      const t = setTimeout(finish, 350);
      return () => clearTimeout(t);
    }
    window.addEventListener("load", finish, { once: true });
    // Never let a slow asset hold the screen.
    const safety = setTimeout(finish, 2500);
    return () => {
      window.removeEventListener("load", finish);
      clearTimeout(safety);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className={
        "no-print fixed inset-0 z-[100] grid place-items-center bg-bg transition-opacity duration-500 " +
        (done ? "pointer-events-none opacity-0" : "opacity-100")
      }
    >
      <span className="spinner" />
    </div>
  );
}

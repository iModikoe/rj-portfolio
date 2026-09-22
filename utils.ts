import clsx, { type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

/**
 * Props for a link that leaves the site. Paired with a visually hidden
 * "opens in a new tab" note at the call site so the behaviour is announced.
 */
export const externalLinkProps = {
  target: "_blank",
  rel: "noopener noreferrer",
} as const;

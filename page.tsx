import { Hero } from "@/components/site/hero";
import { About } from "@/components/site/about";
import { FeaturedWork } from "@/components/site/featured-work";
import { Projects } from "@/components/site/projects";
import { Certificates } from "@/components/site/certificates";
import { Contact } from "@/components/site/contact";

/**
 * Section order follows the reference layout, with professional evidence still
 * ahead of academic work. All copy comes from `content/` — see
 * `content/GOVERNANCE.md` before editing.
 *
 * `#education`, `#skills` and `#experience` are sub-anchors inside About, so
 * every anchor the original specification requires still resolves.
 */
export default function Page() {
  return (
    <>
      <Hero />
      <About />
      <FeaturedWork />
      <Projects />
      <Certificates />
      <Contact />
    </>
  );
}

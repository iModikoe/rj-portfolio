# Itumeleng Modikoe — Portfolio

Next.js 14 (App Router) + Tailwind. Statically prerendered, deployed on Vercel at
<https://rj-portfolio-mu.vercel.app>.

Built to the *Portfolio Website Update Specification* (18 September 2026): the site leads with the
Junior Data Scientist role at Drive24 and puts professional evidence ahead of academic evidence.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
```

## Where things live

| Path | What it is |
| --- | --- |
| `content/` | **All visible copy.** Typed data, one fact in one place. Start here for any text change. |
| `content/GOVERNANCE.md` | The rules for updating dates, figures, links and professional descriptions. Read before editing. |
| `components/site/` | One component per page section, in page order. |
| `components/ui/` | `Button` / `ButtonLink`. The editorial layout needs almost no other primitives — rules and type do the work. |
| `app/globals.css` | Design tokens, component classes, reveal animation, print styles. |
| `tailwind.config.ts` | Maps the tokens onto Tailwind colour names. |

Nothing in `components/` hardcodes copy — dates, skills and project text can all be changed without
touching layout code.

## Section order

Hero → About (education · skills · experience) → **Work** → Projects → Certificates → Contact.

Professional case studies appear before academic projects. That ordering is the point of the
original brief; keep it.

## Layout

Structure, spacing, motion and hover behaviour are a light-mode port of
[yoonpyae.netlify.app](https://yoonpyae.netlify.app/). Sections, in order:

| Section | Contents |
| --- | --- |
| Hero (`#top`) | Full-height, corner glow, kicker, gradient title, highlighted bio, three pill CTAs, portrait, bouncing scroll cue |
| About (`#about`) | Education card · How I Think card · six-column skills matrix (`#skills`) · career timeline (`#experience`) |
| Work (`#work`) | Case-study cards in a two-column grid |
| Projects (`#projects`) | Alternating image / text rows with an overlay on the image |
| Certificates (`#certificates`) | Three-column card grid |
| Contact (`#contact`) | Two-column card: details with icon circles, social links, CV button |

`#education`, `#skills` and `#experience` are sub-anchors inside About, so every
anchor the original specification requires still resolves.

## Motion and hover

One `transition: all 0.3s ease` everywhere, as in the reference. Reveal is
AOS-equivalent — `fade-up` / `fade-down` / `fade-left` / `fade-right` / `zoom-in`
over 0.8s ease-in-out, with 100/200/300ms stagger — driven by a single shared
IntersectionObserver rather than a library.

| Element | On hover |
| --- | --- |
| Primary button / Contact pill / back-to-top | fill swaps teal → lime, text flips to ink, lifts 2–3px, accent shadow |
| Outline button | faint ink wash, lifts 3px |
| Nav link | colour to ink, underline grows 0 → 70% |
| Cards (about, case study, certificate) | lift 10px, shadow, border turns teal |
| Project image | overlay fades in, image scales 1.05 |
| Social link | fills teal, white icon, lifts 3px |

Reduced motion keeps every colour change and removes the movement.

**Two layout traps this port hits**, both fixed and worth knowing if you add
sections:

1. A negative `z-index` decoration escapes its section's `overflow-hidden`
   unless the section is its own stacking context (`isolate`). The hero glow now
   sits in its own clipping box.
2. The horizontal reveals sit translated 40px sideways *until they fire*, so
   un-revealed content widens the page. `main > section` uses `overflow-x: clip`
   (not `hidden`, which would also clip the cards' hover lift and shadow).

## Design system

**Type.** Poppins throughout, as in the reference — weights 400/500/600/700/800.

**Colour.** White page, warm-grey alt bands, one teal spot colour:

| Token | Value | Notes |
| --- | --- | --- |
| `--bg` / `--bg-alt` | `#ffffff` / `#f4f7f6` | Alternating section bands |
| `--text` / `--text-2` / `--text-3` | `#101820` / `#3d4a54` / `#5a6771` | 17.9 / 9.1 / 5.8 : 1 on white |
| `--primary` | `#097563` | 5.6:1 as text on white, and 5.6:1 for white on it |
| `--primary-bright` | `#37e1bc` | **Decoration only** — 3.5:1, never text and never a fill behind text |
| `--accent` | `#e4ef3e` | The hover swap. **A fill, never text** — ink on it is 14:1, it on white is 1.4:1 |
| `--secondary` | `#4f46e5` | The readable end of the project-title gradient |

The reference is dark, so its mint works as both text and fill. On white it does not, and that is
essentially the whole of the colour work in this port: `--primary` is a deeper teal for anything
that carries meaning, and the bright mint is kept for glows and tints. Gradient headings run
ink → teal, both ends readable; the reference's teal → lime would hit 1.4:1 at the lime end.

Every text/background pair clears 4.5:1, including over the hero glow at its densest point
(body text 8.0:1, highlighted spans 5.0:1). If you change a colour, re-check it.

## Verified

Checked against the production build (`npm run build && npm run start`):

- **Lighthouse:** re-run it against the Vercel preview, not locally. On a dev machine also running
  the server the Performance score tracked Lighthouse's own `benchmarkIndex` rather than any code
  change (75–89 across 12 runs); LCP and CLS were stable and inside target throughout.
- **axe-core (WCAG 2.0/2.1/2.2 A + AA + best practice):** 0 violations. The 15 indeterminate nodes
  are all gradient-text headings and the hero glow, which a checker cannot compute; each was
  verified by hand (see Design system).
- **No horizontal scrolling** at 360, 390, 768, 1024, 1440px and at true 200% zoom. Tested by
  actually attempting to scroll sideways — comparing `scrollWidth` to `clientWidth` is misleading
  here, because a clipped element still reports its full box.
- **Hover:** every effect in the table above confirmed by driving a real pointer onto each element
  and diffing computed style. Two gotchas if you re-run that test: disable `scroll-behavior: smooth`
  first, and wait for the 0.8s reveal to finish before measuring — otherwise the element is still
  moving and the pointer lands where it used to be.
- **Keyboard:** skip link first, visible focus on every stop, mobile menu opens and closes with
  Escape returning focus to its button.
- **Links:** all 15 external URLs resolve. (Udemy intermittently returns 403 to automated checks —
  bot protection, not a dead link.)
- **Console:** clean on load.

## Before each release

Work through `content/GOVERNANCE.md`, then:

1. Confirm dates and the academic average against the latest transcript.
2. Confirm the resume PDF in `public/assets/` matches the site's role, dates and education.
3. Re-check every external link.
4. Re-run Lighthouse against the Vercel preview.
5. Re-read the Featured Work copy for anything confidential before deploying.

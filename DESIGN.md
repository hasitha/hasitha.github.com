---
name: Hasitha Pathiraja
description: A quiet, typography-led personal hub - one grotesque, one ink-blue accent, warm paper light and dark.
colors:
  bg: "#faf8f3"
  surface: "#f2efe7"
  chip: "#f5f2eb"
  text: "#1b1a16"
  muted: "#5b574e"
  faint: "#67625a"
  accent: "#1f3f7a"
  accent-hover: "#2a4f93"
  on-accent: "#ffffff"
  line: "#e7e2d6"
  line-strong: "#d7d1c3"
  bg-dark: "#131418"
  surface-dark: "#1d1f25"
  text-dark: "#ece9e1"
  muted-dark: "#9d998e"
  faint-dark: "#95907f"
  accent-dark: "#83a6e8"
  accent-hover-dark: "#9cb8ee"
  on-accent-dark: "#10131c"
  line-dark: "rgba(236, 233, 225, 0.11)"
  line-strong-dark: "rgba(236, 233, 225, 0.2)"
typography:
  display:
    fontFamily: "Geist Variable, ui-sans-serif, system-ui, -apple-system, sans-serif"
    fontSize: "clamp(2.5rem, 6.6vw, 4.75rem)"
    fontWeight: 600
    lineHeight: 1.04
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Geist Variable, ui-sans-serif, system-ui, -apple-system, sans-serif"
    fontSize: "clamp(1.6rem, 3vw, 2.25rem)"
    fontWeight: 600
    lineHeight: 1.04
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Geist Variable, ui-sans-serif, system-ui, -apple-system, sans-serif"
    fontSize: "clamp(1.35rem, 2.2vw, 1.75rem)"
    fontWeight: 600
    lineHeight: 1.04
    letterSpacing: "-0.03em"
  body:
    fontFamily: "Geist Variable, ui-sans-serif, system-ui, -apple-system, sans-serif"
    fontSize: "clamp(1rem, 0.96rem + 0.2vw, 1.09rem)"
    fontWeight: 400
    lineHeight: 1.65
    fontFeature: "'ss01', 'cv01'"
  label:
    fontFamily: "Geist Variable, ui-sans-serif, system-ui, -apple-system, sans-serif"
    fontSize: "0.74rem"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "0.12em"
rounded:
  sm: "4px"
  md: "9px"
  lg: "14px"
  xl: "18px"
  pill: "100px"
spacing:
  gutter: "clamp(1.25rem, 5vw, 3rem)"
  section-y: "clamp(4rem, 9vw, 7.5rem)"
  maxw: "1080px"
  measure: "66ch"
components:
  skip-link:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
    rounded: "{rounded.sm}"
    padding: "0.5rem 1rem"
  theme-toggle:
    backgroundColor: "transparent"
    textColor: "{colors.muted}"
    rounded: "{rounded.md}"
    size: "36px"
  theme-toggle-hover:
    textColor: "{colors.text}"
  logo-chip:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.lg}"
    padding: "11px"
  portrait-frame:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.xl}"
  inline-link:
    textColor: "{colors.accent}"
  nav-link:
    textColor: "{colors.muted}"
  nav-link-hover:
    textColor: "{colors.text}"
  footer-link:
    textColor: "{colors.text}"
  footer-link-hover:
    textColor: "{colors.accent}"
---

# Design System: Hasitha Pathiraja

## Overview

**Creative North Star: "The Quiet Reading Room"**

This is a one-page personal hub that reads like a page from a well-set book, not a dashboard. A twenty-year engineering leader and his two ventures are presented in a calm, left-aligned column of warm paper, where restraint is the credibility signal: no hero image, no stock photography, no decorative chrome. One typeface (Geist) carries the whole hierarchy through size and weight alone, and a single deep ink-blue accent is spent sparingly - on links, the focus ring, the "Read" and "Visit" affordances, and one soft wash behind the hero headline. Everything else is paper, ink, and hairlines.

The density is editorial and airy. Sections stack in a single centered measure, separated by full-bleed hairline rules rather than boxes or cards, with generous fluid rhythm between them. Depth is almost entirely absent: there are no drop shadows anywhere. Surfaces lift by a half-tone of warm paper (`surface`) and a 1px hairline border, never by floating. The one atmospheric gesture is a low-opacity radial wash of the accent in the top-right of the hero - the single place the world allows itself any color beyond ink.

The world is deliberately dual-native: a warm off-white day mode and a cool near-black night mode, driven by the OS preference and overridable by a persistent manual toggle, applied before paint so there is no flash. It rejects the loud developer portfolio and the centered-avatar template in equal measure; authority comes from quiet precision, Canadian plainness of voice, and letting the track record speak without ornament.

**Key Characteristics:**
- One typeface (Geist), one accent (deep ink blue); hierarchy from scale and weight only.
- Warm paper palette in light, cool charcoal in dark - the same system, two native skins.
- No shadows: depth is tonal surfaces and 1px hairlines, never float.
- Full-bleed hairline rules separate sections; content sits in a single 1080px column at a 66ch measure.
- Tightly tracked, balanced headings (-0.03em, `text-wrap: balance`) over a relaxed 1.65 body.
- The only visual treatment is one soft radial accent wash behind the hero headline.

## Colors

A warm, low-chroma paper-and-ink palette with a single cool accent; the dark mode is the same roles retuned to a cool charcoal ground, not a separate world.

### Primary
- **Ink Blue** (`#1f3f7a` light / `#83a6e8` dark): The one accent. Spent on text links, the `:focus-visible` outline, the skip link fill, the "Read ->" and "Visit" affordances, post-title hover, selection tint, the hero radial wash, and footer-link hover. In dark mode it lightens to a sky ink (`#83a6e8`) to hold contrast on charcoal.
- **Ink Blue Hover** (`#2a4f93` light / `#9cb8ee` dark): The hover tone for links and accent text, one step brighter than the resting accent.

### Neutral
- **Paper** (`#faf8f3` light / `#131418` dark): The page background (`--bg`); also the browser `theme-color`. Warm off-white by day, near-black by night.
- **Surface** (`#f2efe7` light / `#1d1f25` dark): The half-tone raised plane - the logo chip, portrait frame, and portrait placeholder background. One step off the page, bordered by a hairline, never shadowed.
- **Chip** (`#f5f2eb`): A lighter paper tone declared for the logo chip and intended to stay light in both modes. See Named Rules - the shipped chip actually paints with `surface`, so this token is currently inert.
- **Text** (`#1b1a16` light / `#ece9e1` dark): Primary reading ink and all headings.
- **Muted** (`#5b574e` light / `#9d998e` dark): Secondary ink - ledes, blurbs, bios, section subheads, nav links at rest. Tuned for ~4.5:1 on the page.
- **Faint** (`#67625a` light / `#95907f` dark): Tertiary ink - the hero note, uppercase micro-labels, experience roles, colophon, and placeholder text.
- **Line** (`#e7e2d6` light / `rgba(236,233,225,0.11)` dark): The hairline for section rules, post-row dividers, and the header/footer borders.
- **Line Strong** (`#d7d1c3` light / `rgba(236,233,225,0.2)` dark): The stronger hairline for component borders (logo chip, portrait, theme toggle), underlined hero links, footer-link underlines, and the scrollbar thumb.
- **On Accent** (`#ffffff` light / `#10131c` dark): Text on an accent fill - the skip link.

### Named Rules
**The One-Accent Rule.** Ink blue is the only non-neutral hue in the system. There is no secondary or tertiary color; variety comes from the paper/ink neutral ramp and the one accent-hover step, never from a new color.

**The Twin-Skin Rule.** Every color is a role, not a fixed hex. The same token name resolves to a warm value in light and a cool value in dark; always author against the role (`var(--muted)`), never a literal hex, so both skins stay correct.

**The Hairline Rule.** Every border and divider is a 1px hairline in `line` or `line-strong` - never a gray box, never a shadow. `line` separates content (section rules, post rows); `line-strong` outlines components and the scrollbar.

## Typography

**Sole Typeface:** Geist Variable (self-hosted via `@fontsource-variable/geist`), with fallback `ui-sans-serif, system-ui, -apple-system, sans-serif`.

**Character:** One clean, contemporary grotesque does everything. The whole hierarchy is built from size and weight, not from a second face. Body text runs the `ss01` and `cv01` stylistic sets for a slightly warmer, more humanist read; headings are heavier (600) and tightly tracked so titles read as compact, confident blocks rather than airy display type.

### Hierarchy
- **Display** (600, `clamp(2.5rem, 6.6vw, 4.75rem)`, line-height 1.04, `-0.035em`): The hero headline only, capped at a 17ch measure, `text-wrap: balance`.
- **Headline** (600, `clamp(1.6rem, 3vw, 2.25rem)`, 1.04, `-0.03em`): Section titles (Two companies, Writing, About). The footer invite "Get in touch" is the one larger variant (`clamp(1.8rem, 4vw, 2.6rem)`).
- **Title** (600, `clamp(1.35rem, 2.2vw, 1.75rem)`, 1.04, `-0.03em`): Company names. Writing post titles are a lighter sibling (500, `clamp(1.15rem, 2vw, 1.4rem)`, `-0.02em`) that tints to the accent on hover.
- **Body** (400, `clamp(1rem, 0.96rem + 0.2vw, 1.09rem)`, line-height 1.65, `ss01`/`cv01`): Bios and blurbs, held to the 66ch `measure`. The hero lede is a larger lead-in (`clamp(1.15rem, 1.4vw, 1.4rem)`, line-height 1.5, muted, 54ch); section subheads sit at 1.1rem muted.
- **Label** (500, `0.74rem`, letter-spacing `0.12em`, UPPERCASE, faint): The `.meta` micro-label - writing post tags, the "Experience" rail heading, and the portrait placeholder caption.

### Named Rules
**The One-Voice Rule.** There is exactly one typeface. Never introduce a second family for display, mono, or labels; distinction comes from weight (400 body, 500 post titles / labels, 600 headings) and size.

**The Tight-Heading Rule.** Headings are weight 600, line-height ~1.04, letter-spacing `-0.03em` (hero `-0.035em`), with `text-wrap: balance`. The negative tracking and tight leading are what make titles read as carved blocks.

## Layout

A single centered column governs the whole page. `.wrap` is `max-width: 1080px` (`--maxw`) centered with fluid side padding `--gutter` (`clamp(1.25rem, 5vw, 3rem)`). Reading content is further held to a 66ch `--measure`. Vertical rhythm between sections is `--section-y` (`clamp(4rem, 9vw, 7.5rem)`).

Sections stack vertically and are separated by a full-bleed 1px `line` rule drawn as a `::before` at the top of each `.section` (edge to edge, not inset to the column). Within sections, content uses asymmetric grids that collapse to one column on small screens:
- Work: two equal company blocks (`1fr 1fr`, gap `clamp(2.5rem, 6vw, 5rem)`).
- Writing: a three-column row grid per post (`11rem 1fr auto`) - tag, title, "Read ->".
- About: a three-track grid `clamp(150px, 16vw, 190px) minmax(0, 1fr) 14rem` - portrait, bio, experience rail.
- Footer: `1.4fr 1fr` invite beside the elsewhere links.

Breakpoints are a small set of hard stops: at **760px** the companies, about, and post grids reflow to a single column (the post row keeps tag + "Read" on one line and drops the title full-width); the footer collapses at **640px**; the header has its own stops with the wordmark shrinking to "HP" under **460px**. The sticky header is 66px tall. The page is mobile-first and content-led; whitespace does the structural work.

## Elevation & Depth

This system is flat by doctrine. There are no `box-shadow` drop shadows anywhere in the shipped CSS - not on the header, cards, chips, portrait, or buttons. Depth is conveyed three ways: a half-tone `surface` plane lifting a region off the paper `bg`, a 1px `line`/`line-strong` hairline outlining or separating it, and the sticky header's translucent `backdrop-filter: saturate(1.1) blur(10px)` over a `color-mix` of the background. The only non-structural atmosphere is the hero's radial accent wash.

### Shadow Vocabulary
None. The system ships zero drop shadows.

### Named Rules
**The No-Shadow Rule.** Surfaces never float. A region reads as raised only through a warmer/cooler `surface` fill and a hairline border; if a new surface needs to feel lifted, change its tone and outline it, do not add a shadow.

**The One-Wash Rule.** The hero's radial accent wash (`radial-gradient(68% 70% at 84% 6%, color-mix(in srgb, var(--accent) 13%, transparent), transparent 66%)`) is the only ambient color gesture in the system. Do not add gradients or glows to other sections.

## Shapes

Gently rounded, restrained geometry. The radius ramp climbs with the size of the element: `4px` (skip link) and the `3px` focus-ring rounding for small chips, `9px` for the theme-toggle button, `14px` for the logo chip, and `18px` for the square portrait frame; `100px` pills are reserved for the scrollbar thumb only. Signature silhouettes are squares: the company brand marks sit in a ~62px square chip (40px mark + 11px padding) and the portrait is a strict `aspect-ratio: 1 / 1` square. Borders are always 1px hairlines; there are no heavy strokes, no clipping tricks, and no decorative shapes.

## Components

### Theme Toggle
- **Character:** A quiet 36x36 icon button in the header, the only persistent control.
- **Shape / color:** Transparent fill, 1px `line-strong` border, `9px` radius (`--rounded.md`); icon in `muted`.
- **States:** Hover shifts icon to `text` and border to `faint`. The 17px moon/sun SVG swaps to reflect the resolved theme (moon when currently light, sun when currently dark). Click sets `data-theme` on `<html>` and persists to `localStorage`; a pre-paint inline script applies the stored choice before first render to avoid a flash.

### Skip Link
- **Style:** Accent fill with `on-accent` text, `4px` radius, hidden above the viewport and sliding into view (`translateY`) on focus. The only accent-filled element.

### Logo Chip (signature)
- **Character:** A square brand-mark tile holding a company's logo in the Work section.
- **Shape / color:** `surface` background, 1px `line-strong` border, `14px` radius, 11px padding around a 40x40 mark (~62px square).
- **Behavior:** Each company ships a light and a dark mark (`.logo-light` / `.logo-dark`); CSS shows the correct one for the resolved theme (OS preference or manual toggle), so marks stay legible against the chip in both skins.

### Portrait Frame (signature)
- **Corner style:** `18px` radius, strict 1 / 1 square (`aspect-ratio`), 1px `line-strong` border, `surface` background, `object-fit: cover`.
- **Fallback:** A placeholder of the same frame with a centered person SVG and an uppercase "Portrait" caption in `faint`.

### Writing Post Row (signature)
- **Structure:** A 3-column grid (`11rem 1fr auto`): an uppercase `meta` tag, the post title, and a "Read ->" affordance in accent. Rows are divided by 1px `line` hairlines (top on each, bottom on the last).
- **States:** On hover the whole row nudges `padding-left: 0.75rem`, the title tints to the accent, and the arrow slides `translateX(4px)`. Transitions use `--ease-out`.

### Inline Link (Visit / Read)
- **Style:** Accent text, no underline, with a trailing 20x11 arrow SVG; hover slides the arrow `translateX(4px)`. Used for "Visit <domain>" and "Read".

### Navigation
- **Header links:** Plain text in `muted`, no underline, shifting to `text` on hover; sticky translucent bar with a hairline bottom border. Wordmark "Hasitha Pathiraja" collapses to "HP" under 460px.
- **Footer links:** `text` with a 1px `line-strong` bottom border; hover shifts both text and border to the accent.
- **Hero body links:** Underlined in `line-strong`, colored `text`; hover moves underline and text to the accent.

### Text Links (global)
- Default `a` is accent, `accent-hover` on hover, with `text-underline-offset: 0.18em` and `text-decoration-thickness: from-font`.

## Do's and Don'ts

### Do:
- **Do** build the entire hierarchy from Geist in size and weight (400 body, 500 labels/post titles, 600 headings). One typeface only.
- **Do** author every color against its role token (`var(--muted)`, `var(--accent)`), so both the light and dark skins resolve correctly.
- **Do** separate sections with full-bleed 1px `line` rules and outline components with 1px `line-strong` hairlines.
- **Do** keep the accent rare - links, focus ring, "Read"/"Visit" affordances, selection, and the single hero wash.
- **Do** track headings tight (`-0.03em`, hero `-0.035em`) with `text-wrap: balance`, over a relaxed 1.65 body held to 66ch.
- **Do** provide light and dark variants for any brand mark and switch them with the resolved theme, as the logo chip does.
- **Do** respect `prefers-reduced-motion` (transitions collapse to ~0) and keep a visible accent `:focus-visible` outline.

### Don't:
- **Don't** add a second typeface for display, mono, or labels.
- **Don't** introduce a second accent hue or a cool gray line; the world is paper/ink neutrals plus one ink blue.
- **Don't** add drop shadows or floating cards; lift a region with a `surface` tone and a hairline instead.
- **Don't** add gradients or glows beyond the one hero radial wash.
- **Don't** place a hero image or stock photography; the hero is type plus the accent wash only.
- **Don't** hardcode a hex in component CSS where a role token exists - it will break one of the two themes.
- **Don't** drop the uppercase `meta` label below `0.74rem` or its `0.12em` tracking.

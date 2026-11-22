---
name: Hasitha Pathiraja
description: A quiet, typography-led personal hub - one grotesque, ink-blue for interaction and warm amber for emphasis, over warm paper that drifts with an ambient starfield and blueprint grid.
colors:
  bg: "#faf8f3"
  surface: "#f2efe7"
  text: "#1b1a16"
  muted: "#5b574e"
  faint: "#67625a"
  accent: "#1f3f7a"
  accent-hover: "#2a4f93"
  on-accent: "#ffffff"
  highlight: "#b0701c"
  success: "#8a5512"
  line: "#e7e2d6"
  line-strong: "#d7d1c3"
  bg-dark: "#131418"
  surface-dark: "#1d1f25"
  text-dark: "#ece9e1"
  muted-dark: "#b8b3a7"
  faint-dark: "#a29d90"
  accent-dark: "#83a6e8"
  accent-hover-dark: "#9cb8ee"
  on-accent-dark: "#10131c"
  highlight-dark: "#d9a85c"
  success-dark: "#d9a85c"
  line-dark: "rgba(236, 233, 225, 0.14)"
  line-strong-dark: "rgba(236, 233, 225, 0.24)"
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
  button: "10px"
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
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
    rounded: "{rounded.button}"
    padding: "0.72rem 1.35rem"
  button-primary-hover:
    backgroundColor: "{colors.accent-hover}"
  contact-input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    rounded: "{rounded.md}"
    padding: "0.6rem 0.8rem"
  inline-link:
    textColor: "{colors.accent}"
  nav-link:
    textColor: "{colors.muted}"
  nav-link-hover:
    textColor: "{colors.text}"
  social-link:
    textColor: "{colors.muted}"
  social-link-hover:
    textColor: "{colors.accent}"
  highlight:
    textColor: "{colors.highlight}"
  form-status-success:
    textColor: "{colors.success}"
---

# Design System: Hasitha Pathiraja

## Overview

**Creative North Star: "The Quiet Reading Room, After Dark"**

This is a one-page personal hub that reads like a well-set page from a book - a calm, left-aligned column of warm paper where restraint is the credibility signal: no hero image, no stock photography, no cards, no decorative chrome. A twenty-year engineering leader and his two ventures are presented in a single centered measure, sections stacked and separated by content-aligned hairlines rather than boxes. One typeface (Geist) carries the whole hierarchy through size and weight alone. The page is deliberately dual-native: a warm off-white day mode and a cool near-black night mode. It defaults to the night mode, overridable by a persistent manual toggle applied before paint, so there is no flash.

What has grown since the first pass is atmosphere and a second signal color. The paper is no longer inert: a faint accent-tinted **starfield** drifts slowly behind everything, a faint film-grain sits over everything, and a **blueprint grid** draws hairline guides at the content-column edges with small "+" ticks where the section dividers meet them. The dividers themselves are content-aligned hairlines that fade at the ends. And the one-accent discipline has become a deliberate **two-color** split: deep ink blue is still spent only on interaction (links, focus, "Read"/"Visit", buttons), while a warm **amber** is reserved for emphasis - the phrase "real value" in the hero headline - and a sibling amber-brown marks the contact form's success message. Blue means you can act; amber means pay attention. They never trade jobs.

Depth stays almost entirely absent: no drop shadows anywhere. Surfaces lift by a half-tone of warm paper (`surface`) and a 1px hairline, never by floating. The only box-shadow in the system is the accent focus ring on form inputs - a ring, not elevation. Authority comes from quiet precision, a plain Canadian voice, and letting the track record speak; the world rejects the loud developer portfolio and the centered-avatar template in equal measure.

**Key Characteristics:**
- One typeface (Geist); hierarchy from scale and weight only.
- Two signal colors with fixed jobs: ink blue for interaction, amber for emphasis/positive. Everything else is paper and ink.
- Warm paper palette in light, cool charcoal in dark - the same roles, two native skins.
- No drop shadows: depth is tonal surfaces and 1px hairlines. The only box-shadow is the input focus ring.
- Content sits in a single 1080px column at a 66ch measure; sections divide with fading, tick-marked hairlines tracked to the column.
- Living but quiet atmosphere: a drifting starfield, a faint grain overlay, a blueprint grid, a hero wash, and on-load reveals - all freezing under reduced-motion.

## Colors

A warm, low-chroma paper-and-ink palette carrying two signal hues with strictly separate jobs; dark mode is the same roles retuned to cool charcoal, not a separate world.

### Primary
- **Ink Blue** (`#1f3f7a` light / `#83a6e8` dark): The interaction color, and only that. Text links, the `:focus-visible` outline, the input focus ring, the skip-link fill, the primary buttons ("Let's chat", "Send message"), the "Read ->" and "Visit" affordances, post-title hover, selection tint, social-icon hover, and the hero radial wash and starfield tint. In dark mode it lightens to a sky ink to hold contrast on charcoal.
- **Ink Blue Hover** (`#2a4f93` light / `#9cb8ee` dark): The hover tone for links, accent text, and button fills - one step brighter than the resting accent.

### Secondary
- **Amber** (`#b0701c` light / `#d9a85c` dark): The emphasis color, and only that. It marks the word "real value" in the hero headline (`.highlight`). It is never used for links, borders, or interaction - amber does not mean "clickable", it means "read this."
- **Amber-Brown Success** (`#8a5512` light / `#d9a85c` dark): The positive-feedback tone, used solely for the contact form's success message (`.form-status.is-success`). In dark mode it resolves to the same warm amber as the emphasis color.

### Neutral
- **Paper** (`#faf8f3` light / `#131418` dark): The page background (`--bg`); also the browser `theme-color`. Warm off-white by day, near-black by night.
- **Surface** (`#f2efe7` light / `#1d1f25` dark): The half-tone raised plane - the logo chip, portrait frame/placeholder, and the contact form's inputs and textarea. One step off the page, bordered by a hairline, never shadowed.
- **Text** (`#1b1a16` light / `#ece9e1` dark): Primary reading ink and all headings.
- **Muted** (`#5b574e` light / `#b8b3a7` dark): Secondary ink - ledes, blurbs, bios, section subheads, nav links and social icons at rest, the resting form status. Dark value brightened for contrast.
- **Faint** (`#67625a` light / `#a29d90` dark): Tertiary ink - the hero connect note, uppercase micro-labels and form field labels, experience roles, colophon, and placeholder text. Dark value brightened for contrast.
- **Line** (`#e7e2d6` light / `rgba(236,233,225,0.14)` dark): The hairline for post-row dividers, the blueprint vertical guides, and the header border.
- **Line Strong** (`#d7d1c3` light / `rgba(236,233,225,0.24)` dark): The stronger hairline for component borders (logo chip, portrait, theme toggle, form inputs), the section/footer/colophon dividers and their "+" ticks, the hero link underline, and the scrollbar thumb. Both dark alphas were bumped up from the first pass for contrast.
- **On Accent** (`#ffffff` light / `#10131c` dark): Text on an accent fill - the skip link and the primary buttons.

### Named Rules
**The Split-Signal Rule.** There are exactly two signal colors and they never swap jobs: ink blue is interaction (links, focus, buttons, affordances), amber is emphasis and positive feedback (the hero highlight word, the success message). Never color a link amber, never use blue merely to emphasize a word. Everything else is the paper/ink neutral ramp.

**The Twin-Skin Rule.** Every color is a role, not a fixed hex. The same token name resolves to a warm value in light and a cool value in dark; always author against the role (`var(--muted)`), never a literal hex, so both skins stay correct.

**The Hairline Rule.** Every border and divider is a 1px hairline in `line` or `line-strong` - never a gray box, never a drop shadow. `line` draws the post-row dividers, blueprint guides, and header border; `line-strong` outlines components and draws the fading section dividers and the scrollbar.

## Typography

**Sole Typeface:** Geist Variable (self-hosted via `@fontsource-variable/geist`, weight axis 100-900), with fallback `ui-sans-serif, system-ui, -apple-system, sans-serif`.

**Character:** One clean, contemporary grotesque does everything. The whole hierarchy is built from size and weight, not a second face. Body text runs the `ss01` and `cv01` stylistic sets for a slightly warmer, more humanist read; headings are heavier (600) and tightly tracked so titles read as compact, confident blocks rather than airy display type.

### Hierarchy
- **Display** (600, `clamp(2.5rem, 6.6vw, 4.75rem)`, line-height 1.04, `-0.035em`): The hero headline only, capped at a 17ch measure, `text-wrap: balance`, with one amber-emphasized span.
- **Headline** (600, `clamp(1.6rem, 3vw, 2.25rem)`, 1.04, `-0.03em`): Section titles ("Who I am", "What I'm building", "What I've written about"). The footer invite "Get in touch" is the one larger variant (`clamp(1.8rem, 4vw, 2.6rem)`).
- **Title** (600, `clamp(1.35rem, 2.2vw, 1.75rem)`, 1.04, `-0.03em`): Company names. Writing post titles are a lighter sibling (500, `clamp(1.15rem, 2vw, 1.4rem)`, `-0.02em`) that tints to the accent on hover.
- **Body** (400, `clamp(1rem, 0.96rem + 0.2vw, 1.09rem)`, line-height 1.65, `ss01`/`cv01`): Bios and blurbs, held to the 66ch `measure`. The hero lede is a larger muted lead-in (`clamp(1.15rem, 1.4vw, 1.4rem)`, line-height 1.5, 54ch); section subheads sit at 1.1rem muted; bio paragraphs at 1.12rem.
- **Label** (500, `0.74rem`, letter-spacing `0.12em`, UPPERCASE, faint): The `.meta` micro-label - writing post tags, the "My journey" rail heading, and the portrait placeholder caption. Contact form field labels are the same treatment at `0.1em` tracking.

### Named Rules
**The One-Voice Rule.** There is exactly one typeface. Never introduce a second family for display, mono, or labels; distinction comes from weight (400 body, 500 post titles / labels, 600 headings) and size.

**The Tight-Heading Rule.** Headings are weight 600, line-height ~1.04, letter-spacing `-0.03em` (hero `-0.035em`), with `text-wrap: balance`. The negative tracking and tight leading are what make titles read as carved blocks.

## Layout

A single centered column governs the whole page. `.wrap` is `max-width: 1080px` (`--maxw`) centered with fluid side padding `--gutter` (`clamp(1.25rem, 5vw, 3rem)`). Reading content is further held to a 66ch `--measure`. Vertical rhythm between sections is `--section-y` (`clamp(4rem, 9vw, 7.5rem)`).

Sections stack vertically, in build order: hero, "Who I am" (about), "What I'm building" (work), "What I've written about" (writing), then the footer invite + contact form, then the colophon. Each `.section`, the footer, and the colophon draw a content-aligned divider as a `::before`: a 1px `line-strong` hairline that fades to transparent at both ends (gradient, opaque 8%-92%) and carries a short 9px vertical "+" tick at each end where it meets the blueprint guides. The divider tracks the content box (`width: 100%; max-width: var(--maxw)`), not the full bleed.

Within sections, content uses asymmetric grids that collapse to one column on small screens:
- Work: two equal company blocks (`1fr 1fr`, gap `clamp(2.5rem, 6vw, 5rem)`).
- Writing: a three-column row grid per post (`11rem 1fr auto`) - tag, title, "Read ->".
- About: a three-track grid `clamp(150px, 16vw, 190px) minmax(0, 1fr) 14rem` - portrait, bio, experience rail.
- Footer: `1fr 1fr` invite beside the contact form.
- Contact form: field column with a `1fr 1fr` first/last-name row.

Breakpoints are a small set of hard stops: at **760px** the companies, about, and post grids reflow to one column (the post row keeps tag + "Read" on one line and drops the title full-width) and the blueprint grid hides; the footer collapses at **640px**; the header has its own stop with the wordmark shrinking to "HP" under **460px**. The sticky header is 66px tall. The page is mobile-first and content-led; whitespace does the structural work.

## Elevation & Depth

This system is flat by doctrine. There are no `box-shadow` drop shadows anywhere - not on the header, chips, portrait, or buttons. Depth is conveyed three ways: a half-tone `surface` plane lifting a region off the paper `bg`, a 1px `line`/`line-strong` hairline outlining or separating it, and the sticky header's translucent `backdrop-filter: saturate(1.1) blur(10px)` over a `color-mix` of the background. Atmosphere is layered behind and over the content rather than under elements: the hero radial wash, the drifting starfield (`body::before`, `z-index: -1`), the blueprint grid (`z-index: -1`), and the faint film-grain overlay (`body::after`, `z-index: 9999`, opacity 0.04).

### Shadow Vocabulary
- **Input focus ring** (`box-shadow: 0 0 0 3px color-mix(in srgb, var(--accent) 22%, transparent)`): The one box-shadow in the system, on contact-form inputs and textarea at `:focus-visible`, paired with an accent border. It is a focus ring, not elevation; it never implies a surface is floating.

### Named Rules
**The No-Float Rule.** Surfaces never float on a drop shadow. A region reads as raised only through a warmer/cooler `surface` fill and a hairline border; if a new surface needs to feel lifted, change its tone and outline it. The only box-shadow allowed is the accent input focus ring.

**The Ambient-Atmosphere Rule.** Atmosphere lives in dedicated full-viewport layers behind and over the content - the hero wash, the starfield, the blueprint grid, the grain - never as per-element glows or gradients. Do not add gradients, glows, or washes to individual sections, cards, or buttons.

## Shapes

Gently rounded, restrained geometry. The radius ramp climbs with the size of the element: `4px` (skip link) and the `3px` focus-ring rounding for small chips; `9px` for the theme-toggle button and the form inputs/textarea; `10px` for the primary buttons; `14px` for the logo chip; `18px` for the square portrait frame; `100px` pills are reserved for the scrollbar thumb only. Signature silhouettes are squares: the company brand marks sit in a ~62px square chip (40px mark + 11px padding) and the portrait is a strict `aspect-ratio: 1 / 1` square. Borders are always 1px hairlines; there are no heavy strokes, no clipping tricks, and no decorative shapes beyond the ambient layers' dots, guides, and ticks.

## Components

For each component, a short character line, then shape, color assignment, states, and distinctive behavior.

### Buttons
- **Shape:** Soft `10px` radius (`--rounded.button`), padding `0.72rem 1.35rem`.
- **Primary:** Accent fill with `on-accent` text, weight 600. Used for the footer "Let's chat" CTA (a link) and the "Send message" submit button. The CTA carries a trailing arrow that slides `translateX(4px)` on hover.
- **Hover / Focus:** Background shifts to `accent-hover` (0.2s `--ease-out`); `:focus-visible` shows the global 2px accent outline. The submit button is `opacity: 0.6` and non-interactive while `:disabled` (during send).

### Inputs / Fields (contact form, signature)
- **Style:** `surface` background, 1px `line-strong` border, `9px` radius, padding `0.6rem 0.8rem`, inheriting the body font. Textarea is vertically resizable with a 6rem min-height. Labels are uppercase `faint` micro-labels (`0.74rem`, `0.1em`).
- **Focus:** Border shifts to `accent` and an accent focus ring appears (`box-shadow: 0 0 0 3px color-mix(accent 22%)`), native outline suppressed.
- **Status line:** A polite live region below the form; resting text is `muted`, the success state is `--success` amber-brown at weight 500. A visually hidden honeypot field (`.hp`, off-screen) catches bots.

### Theme Toggle
- **Character:** A quiet 36x36 icon button in the header, the only persistent control.
- **Shape / color:** Transparent fill, 1px `line-strong` border, `9px` radius; icon in `muted`.
- **States:** Hover shifts icon to `text` and border to `faint`. The 17px moon/sun SVG swaps to the resolved theme (moon when light, sun when dark). Click sets `data-theme` on `<html>` and persists to `localStorage`; a pre-paint inline script applies the stored choice - defaulting to dark when none is saved - before first render to avoid a flash.

### Skip Link
- **Style:** Accent fill with `on-accent` text, `4px` radius, hidden above the viewport and sliding into view (`translateY`) on focus.

### Logo Chip (signature)
- **Character:** A square brand-mark tile holding a company's logo in the Work section.
- **Shape / color:** `surface` background, 1px `line-strong` border, `14px` radius, 11px padding around a 40x40 mark (~62px square).
- **Behavior:** Each company ships a light and a dark mark (`.logo-light` / `.logo-dark`); CSS shows the correct one for the resolved theme, so marks stay legible against the chip in both skins.

### Portrait Frame (signature)
- **Corner style:** `18px` radius, strict 1 / 1 square, 1px `line-strong` border, `surface` background, `object-fit: cover`.
- **Fallback:** A placeholder of the same frame with a centered person SVG and an uppercase "Portrait" caption in `faint`.

### Writing Post Row (signature)
- **Structure:** A 3-column grid (`11rem 1fr auto`): an uppercase `meta` tag, the post title, and a "Read ->" affordance in accent. Rows are divided by 1px `line` hairlines (top on each, bottom on the last).
- **States:** On hover the whole row nudges `padding-left: 0.75rem`, the title tints to the accent, and the arrow slides `translateX(4px)`.

### Inline Link (Visit / Read / chat)
- **Style:** Accent text, no underline, weight 500, with a trailing 20x11 arrow SVG; hover slides the arrow `translateX(4px)` and shifts color to `accent-hover`. Used for "Visit <domain>", "Read", and the hero "Let's chat".

### Navigation & Links
- **Header links:** Plain text in `muted`, no underline, shifting to `text` on hover; sticky translucent bar with a hairline bottom border. Wordmark "Hasitha Pathiraja" collapses to "HP" under 460px.
- **Active nav (scroll-spy):** As the page scrolls, the nav item for the section in view (About / Work / Writing / Contact) gets `aria-current` set in script and lifts to full `text` strength. A single shared 2px underline (`.nav-indicator`) slides between items - its `transform` and `width` eased over 0.34s `--ease-out` - instead of each item fading its own underline, so the marker travels with you rather than hopping. The color is `accent` (blue), not `highlight` (amber): this is wayfinding, which belongs to the interaction color, and amber stays reserved for emphasis. The hero has no nav item, so the underline is hidden at the top; the activation line sits ~90px down, just under the sticky header, and the bottom of the page pins Contact. Re-measures on resize and after the web font settles.
- **Social links (footer "Elsewhere"):** Inline 22px brand-glyph SVG icons (GitHub, LinkedIn) in `muted`, shifting to `accent` on hover. No underline, no fill.
- **Hero body links:** Underlined accent, with the underline a `color-mix(accent 38%)` that firms to full accent on hover.
- **Text links (global):** Default `a` is accent, `accent-hover` on hover, with `text-underline-offset: 0.18em` and `text-decoration-thickness: from-font`.

### Ambient Layers (signature, non-interactive)
- **Starfield** (`body::before`): Clustered radial-gradient dots of varied size in `--star` (accent at 60%) and `--star-dim` (accent at 36%), tiled as two parallax fields (700px and 1100px) drifting upward over 95s (`particleDrift`, linear infinite). Both themes.
- **Film grain** (`body::after`): A fractal-noise SVG at opacity 0.04 over everything (`z-index: 9999`), fixed.
- **Blueprint grid** (`.blueprint`): A fixed layer drawing faint `line` vertical guides at the content-column edges (`max-width: var(--maxw)`); hidden under 760px. The section/footer/colophon dividers are its horizontal partners - fading `line-strong` hairlines with "+" ticks where they meet the guides.
- **Hero wash** (`.hero::before`): A soft radial accent wash in the top-right (`radial-gradient(68% 70% at 84% 6%, color-mix(accent 13%), transparent 66%)`) that breathes via `washDrift` (26s).

## Do's and Don'ts

### Do:
- **Do** build the entire hierarchy from Geist in size and weight (400 body, 500 labels/post titles, 600 headings). One typeface only.
- **Do** keep the two signal colors in their lanes: ink blue only for interaction, amber only for emphasis/positive. Author every color against its role token so both skins resolve.
- **Do** separate sections with the content-aligned, end-fading `line-strong` divider with its "+" ticks, and outline components with 1px `line-strong` hairlines.
- **Do** track headings tight (`-0.03em`, hero `-0.035em`) with `text-wrap: balance`, over a relaxed 1.65 body held to 66ch.
- **Do** keep atmosphere in its dedicated full-viewport layers (wash, starfield, grid, grain) and let every motion freeze under `prefers-reduced-motion`.
- **Do** provide light and dark variants for any brand mark and switch them with the resolved theme, as the logo chip does.
- **Do** keep a visible accent `:focus-visible` outline, and give form inputs the accent border + focus-ring pair.

### Don't:
- **Don't** add a second typeface for display, mono, or labels.
- **Don't** color a link or border amber, or use blue merely to emphasize a word; the two signals never swap jobs.
- **Don't** introduce a third accent hue or a cool gray line; the world is paper/ink neutrals plus ink blue and amber.
- **Don't** add drop shadows or floating cards; lift a region with a `surface` tone and a hairline. The only box-shadow is the input focus ring.
- **Don't** attach gradients, glows, or washes to individual sections, cards, or buttons; atmosphere lives only in the shared ambient layers.
- **Don't** place a hero image or stock photography; the hero is type plus the accent wash.
- **Don't** hardcode a hex where a role token exists - it will break one of the two themes.
- **Don't** drop the uppercase `meta` label below `0.74rem` or its `0.12em` tracking.

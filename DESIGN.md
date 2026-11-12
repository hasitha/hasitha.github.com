---
name: The Exhibition Wall
description: A warm black-box gallery where a working life and two ventures hang as labeled objects.
colors:
  wall: "#23211d"
  wall-deep: "#16140f"
  wall-lift: "#2d2a23"
  wall-line: "rgba(230, 179, 107, 0.26)"
  paper: "#f1ebdd"
  paper-edge: "#e3dac6"
  cream: "#ece3d2"
  cream-dim: "#cfc9bc"
  cream-faint: "#a39c8d"
  ink: "#231f1a"
  ink-soft: "#48423a"
  ink-faint: "#6a6356"
  brass: "#c6822e"
  brass-lt: "#e6b36b"
  brass-dk: "#8a4e14"
  on-brass: "#1c1305"
typography:
  display:
    fontFamily: "Bricolage Grotesque Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.7rem, 6.6vw, 5.4rem)"
    fontWeight: 800
    lineHeight: 0.98
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Bricolage Grotesque Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2rem, 4.2vw, 3.3rem)"
    fontWeight: 800
    lineHeight: 0.98
    letterSpacing: "-0.035em"
  title:
    fontFamily: "Bricolage Grotesque Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.4rem, 2.2vw, 1.8rem)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Hanken Grotesk Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1rem, 0.95rem + 0.2vw, 1.0625rem)"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "0em"
  label:
    fontFamily: "Hanken Grotesk Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.72rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "0.2em"
rounded:
  sm: "2px"
  md: "3px"
  lg: "4px"
  pill: "100px"
spacing:
  gutter: "clamp(1.25rem, 4.5vw, 4rem)"
  section-y: "clamp(3.75rem, 7vw, 6.25rem)"
  maxw: "1240px"
components:
  button-primary:
    backgroundColor: "{colors.brass}"
    textColor: "{colors.on-brass}"
    rounded: "{rounded.sm}"
    padding: "0.85rem 1.4rem"
  button-primary-hover:
    backgroundColor: "{colors.brass-lt}"
    textColor: "{colors.on-brass}"
  button-ghost:
    textColor: "{colors.cream}"
    rounded: "{rounded.sm}"
    padding: "0.85rem 1.4rem"
  button-ghost-hover:
    textColor: "{colors.brass-lt}"
  paper-label:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "0.85rem 1rem"
  exhibit-card:
    backgroundColor: "{colors.wall-lift}"
    textColor: "{colors.cream}"
    rounded: "{rounded.lg}"
  nav-link:
    textColor: "{colors.cream-dim}"
    typography: "{typography.label}"
  onview-tag:
    backgroundColor: "{colors.brass}"
    textColor: "{colors.on-brass}"
    rounded: "{rounded.pill}"
    padding: "0.4rem 0.8rem"
---

# Design System: The Exhibition Wall

## Overview

**Creative North Star: "The Warm Black-Box Gallery"**

This is a personal site staged as a curated museum exhibition - "The Work & Worlds of Hasitha Pathiraja." A twenty-year builder and his two ventures do not sit in a centered-avatar bio or a loud developer portfolio; they hang as labeled objects on a painted gallery wall, and the institution's calm authority does the vouching so credibility never reads as bragging. The room is a warm black box: a near-black charcoal wall lit by a soft vignette, warm paper wall-labels that glow against it, and brass used with conviction for rules, tags, and object numbers.

The density is a salon hang - objects stacked close, each with its own matted plate and printed caption. Surfaces are quiet and dark; the paper labels are the only bright planes, and they carry a letterpress materiality (fractal-noise grain, a pressed-paper inset highlight, a debossed text-shadow) so they read as physical cards pinned to the wall rather than flat UI panels. Motion is restrained and lighting-led: a warm radial "picture-light" tracks the cursor across the hero wall, and framed objects lift and brighten on hover, as if a gallery light swung toward them.

The world is recognizable with all content removed: charcoal wall + glowing paper labels + brass rules. It rejects the template personal-site (centered avatar, one-line bio) and the maximal developer portfolio in equal measure.

**Key Characteristics:**
- Warm near-black charcoal wall with a soft radial vignette, fixed to the viewport.
- Glowing warm-paper wall-labels with letterpress materiality (grain, inset highlight, debossed text).
- Brass as the single accent - rules, hairlines, object numbers, tags, the one filled button.
- Two-font system: Bricolage Grotesque (display, heavy, tight) over Hanken Grotesk (body and micro-labels).
- Framed "object" plates with a 1px brass inner mat and a cursor-reactive picture-light.
- Salon-hang density; museum wall-label captions (object numbers, specs, provenance).

## Colors

A warm, low-key palette: a charcoal ground, a single family of glowing paper, cream inks for text on the wall, dark inks for text on paper, and brass as the only true accent.

### Primary
- **Brass** (`#c6822e`): The one accent, used with conviction. Hairline rules and dividers (`--wall-line` is brass at 26% alpha), the filled primary button, the timeline spine, the "On view" status tag, scrollbar thumb, and selection background. It is the color that vouches.
- **Brass Light** (`#e6b36b`): Brass tuned for small text and glints on the dark wall - the hero name accent, eyebrow/micro-labels on charcoal, the monogram marks inside frames, the focus ring, and the warm core of the picture-light gradient.
- **Brass Dark** (`#8a4e14`): Brass tuned for small text on the bright paper labels - object numbers ("Object 01") and the "Visit" link where brass-on-paper needs contrast.

### Neutral
- **Wall** (`#23211d`): The gallery ground and page background; also the `theme-color`.
- **Wall Deep** (`#16140f`): The vignette's far corners, scrollbar track, sticky-header base, and the dark end of frame gradients.
- **Wall Lift** (`#2d2a23`): The near corner of the vignette and the lit end of frame/card gradients.
- **Wall Line** (`rgba(230,179,107,0.26)`): Every hairline border and divider - brass at low alpha, never a neutral gray line.
- **Paper** (`#f1ebdd`): The wall-label plane - the bright warm card the labels print on.
- **Paper Edge** (`#e3dac6`): The darker paper tone reserved for label edges.
- **Cream / Cream Dim / Cream Faint** (`#ece3d2` / `#cfc9bc` / `#a39c8d`): The three-step ink ramp for text *on the wall* - body cream, secondary standfirst/bio, and faint captions/credits.
- **Ink / Ink Soft / Ink Faint** (`#231f1a` / `#48423a` / `#6a6356`): The three-step ink ramp for text *on paper labels* - headings, body line, and spec text.
- **On Brass** (`#1c1305`): The near-black ink used for text sitting on a brass fill (primary button, "On view" tag).

### Named Rules
**The Brass-Line Rule.** Every border, divider, and rule is brass at low alpha (`--wall-line`), never a neutral gray. Hairlines are a material in this room, not a UI afterthought.

**The Two-Ink Rule.** Text on the wall uses the cream ramp; text on paper uses the ink ramp. Never put cream ink on a paper label or dark ink on the wall - the surface dictates the ink.

**The One-Accent Rule.** Brass is the only accent. There is no secondary or tertiary hue; depth and variety come from the three brass tunings (`brass` / `brass-lt` / `brass-dk`) chosen by surface, not from new colors.

## Typography

**Display Font:** Bricolage Grotesque Variable (fallback `ui-sans-serif, system-ui, sans-serif`)
**Body / Label Font:** Hanken Grotesk Variable (fallback `ui-sans-serif, system-ui, sans-serif`)

Both are self-hosted via `@fontsource-variable`. Bricolage brings a slightly idiosyncratic, heavy display voice; Hanken is a clean, neutral grotesque for reading and for the micro-labels. The pairing reads as a modern museum: confident catalogue titles over quiet, legible caption type.

**Character:** Headings are set heavy (800) and tight (-0.035em, line-height 0.98) so titles pack into a dense, carved block. Captions and object numbers are wide-tracked uppercase - the printed-label voice.

### Hierarchy
- **Display** (800, `clamp(2.7rem, 6.6vw, 5.4rem)`, line-height 0.98, -0.035em): The hero title only - "The Work & Worlds of..." The brass-light `.accent` span carries the name.
- **Headline** (800, `clamp(2rem, 4.2vw, 3.3rem)`, 0.98, -0.035em): Section titles (Work, Writing, About) and the footer invite.
- **Title** (700, `clamp(1.4rem, 2.2vw, 1.8rem)`, -0.02em): Exhibit names, provenance orgs, and note titles - the object headings inside cards and labels.
- **Body** (400, `clamp(1rem, 0.95rem + 0.2vw, 1.0625rem)`, line-height 1.6): Standfirst, bios, blurbs. Reading measures are held tight - `34ch` standfirst, `46ch` bio, `52ch` section intros.
- **Label** (600-700, `0.72rem`, letter-spacing `0.14em`-`0.22em`, UPPERCASE): Object numbers, tags, specs, nav items, credits, status pills. The pervasive printed-caption voice.

### Named Rules
**The Micro-Label Floor Rule.** Uppercase wide-tracked labels never drop below `0.72rem` (about 11px). That is the legibility floor for caption type; object numbers and tags sit at exactly this size.

**The Carved-Title Rule.** Display and headline type is always heavy (800) and tight (-0.035em, line-height ~0.98). Titles are dense carved blocks, never airy.

## Layout

A single centered column governs everything: `.wrap` is `max-width: 1240px` (`--maxw`) centered with a fluid `--gutter` (`clamp(1.25rem, 4.5vw, 4rem)`) of side padding. Vertical rhythm between sections is `--section-y` (`clamp(3.75rem, 7vw, 6.25rem)`).

The page is a stack of asymmetric two-column grids that each collapse to one column on small screens:
- Hero: `1.1fr 0.9fr` (lede beside the salon-hang of objects).
- Work gallery: `1fr 1fr` exhibit cards.
- About: `1.2fr 0.8fr` (bio beside the provenance timeline).
- Footer: `1.3fr 1fr` (invite beside the elsewhere links).

Breakpoints are two hard stops: at **920px** the hero, gallery, and about grids go single-column; at **620px** the hero object-links and writing notes simplify further (the header has its own stops at 760px and 460px, where the wordmark collapses to "HP"). The hero is a flex column centered to `min(88vh, 860px)`. Density is close and salon-like; whitespace is generous only around section heads (`max-width: 52ch`).

## Elevation & Depth

Depth is lighting and material, not floating UI. The whole page sits on a fixed radial vignette (`wall-lift` -> `wall` -> `wall-deep`) so the wall itself is lit from the upper-left. Framed objects and paper labels cast deep, soft, downward drop-shadows to read as physical things pinned to the wall, and paper labels add inset highlights/debossing for a letterpress press. Hover does not add a shadow so much as raise and brighten the object (translateY + picture-light opacity).

### Shadow Vocabulary
- **Object drop** (`box-shadow: 0 22px 40px -22px rgba(0,0,0,0.7)`): Under framed monogram plates - a deep, soft, downward cast.
- **Label drop + press** (`box-shadow: 0 20px 40px -24px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,253,245,0.6), inset 0 -1.5px 0 rgba(120,92,44,0.12)`): Paper labels - a drop plus a top inset highlight and bottom inset shade for pressed-paper materiality.
- **Label press only** (`box-shadow: inset 0 1px 0 rgba(255,253,245,0.55)`): The larger exhibit label, which gets the top highlight without the full drop.
- **Current-node ring** (`box-shadow: 0 0 0 4px rgba(198,130,46,0.25)`): A soft brass halo on the "Now" provenance node.
- **Picture-light** (`radial-gradient(90% 70% at 50% -10%, rgba(230,179,107,0.4), transparent 70%)`): Not a shadow but the depth signature - a warm gradient wash inside each frame that brightens from 0.55 to 1 opacity on hover.

### Named Rules
**The Lit-Not-Floating Rule.** Objects gain presence from light (picture-light brightening, a 2-3px lift) rather than from growing shadows. Shadows are deep and static; the hover response is luminance and a small rise.

## Shapes

Corners are barely rounded - this is printed matter, not soft UI. The radius scale is tight: `2px` (sm) for labels, buttons, and the focus ring; `3px` (md) for monogram frames; `4px` (lg) for exhibit cards and the provenance panel. Pills (`100px`) are reserved for status chips (the "On view" tag, the "Forthcoming" badge). Frames carry a signature **1px brass inner mat** - a `::after` border inset 7-14px from the edge at `rgba(230,179,107,0.16)` - that reads as the mat inside a picture frame. Dividers and borders are always 1px brass hairlines (`--wall-line`). Dots and nodes (credit separator, link bullets, timeline nodes) are the only circles.

## Components

### Buttons
- **Shape:** Near-square, `2px` radius (`--rounded.sm`), padding `0.85rem 1.4rem`, weight 600, `0.92rem`.
- **Primary:** Brass fill (`#c6822e`) with near-black ink (`#1c1305`). Hover lifts `translateY(-2px)` and brightens the fill to brass-light (`#e6b36b`).
- **Ghost:** Transparent with a 1px brass-hairline border (`--wall-line`) and cream text. Hover shifts both border and text to brass-light.
- **Transition:** `0.25s var(--ease-out)` on transform, background, and border-color.

### Cards / Containers (Exhibit)
- **Corner Style:** `4px` (`--rounded.lg`), overflow hidden.
- **Structure:** A dark framed image zone (16:10, radial `wall-lift -> wall-deep` gradient, 1px brass inner mat, picture-light) over a bright **paper label** footer that holds the object number, title, spec, blurb, and "Visit" link.
- **Background:** Card body is a translucent `wall-lift -> wall-deep` gradient; border is a 1px brass hairline.
- **Shadow Strategy:** See Elevation - paper labels carry the press/drop shadows; the dark frame carries the object drop.
- **Internal Padding:** `1.6rem 1.7rem 1.75rem` on the label; `1.3rem` in the frame.

### Navigation
- **Header:** Sticky, `68px` tall, with a `blur(8px) saturate(1.1)` backdrop over a `wall-deep -> transparent` gradient and a brass-hairline bottom border.
- **Links:** Uppercase label type (`0.78rem`, `0.14em`), cream-dim at rest, brass-light on hover/focus, with a brass underline that wipes in left-to-right (`right: 100% -> 0`).
- **Wayfinding marks:** A wordmark (collapses to "HP" under 460px) and an "On view" brass pill with a pulsing-dot motif.
- **Hero foot + footer links** repeat the pattern: brass dot/bullet, cream text, brass-light on hover.

### Paper Label (signature)
- The recurring museum caption: `paper` (#f1ebdd) background, `ink` text, `2px` radius, a fractal-noise grain overlay (`mix-blend-mode: multiply`, opacity 0.1), inset press shadows, and a debossed text-shadow on the name (`0 1px 0 rgba(255,253,245,0.55)`). Holds an object number (brass-dark, wide uppercase), a display title, and a uppercase spec line.

### Framed Object (signature)
- A matted monogram plate: `wall-lift -> wall-deep` linear gradient, 1px brass-hairline border, `3px` radius, a 1px brass inner mat (`::after`, inset 7px), object drop-shadow, and a `picture-light` wash. The monogram mark is display-font, 800, brass-light. On hover the frame lifts `translateY(-3px)` and the picture-light goes to full opacity.

### Provenance Timeline (signature)
- A bordered `4px` panel with a vertical brass-gradient spine. Each entry has a brass-ringed node (filled brass with a soft halo when `.current`), an uppercase phase label (cream-faint), a display-font org (brass-light when current), and a cream-dim role line.

### Field-Notes List
- A hairline-divided ordered list: a large brass display numeral, a brass-light uppercase tag over a display-font title, and a "Soon"/status label. Hover tints the row (`rgba(45,42,35,0.4)`) and nudges padding-left for a slide-in.

## Do's and Don'ts

### Do:
- **Do** keep brass as the sole accent, tuned by surface: `--brass` for rules/fills, `--brass-lt` for small text on the wall, `--brass-dk` for small text on paper.
- **Do** draw every border and divider as a 1px brass hairline (`--wall-line`), never a neutral gray.
- **Do** give framed objects the 1px brass inner mat and the picture-light; lift and brighten on hover rather than enlarging shadows.
- **Do** set titles heavy and tight (Bricolage 800, -0.035em) and captions as wide-tracked uppercase Hanken at the `0.72rem` floor.
- **Do** gate the signature picture-light interaction behind `pointer: fine` and `prefers-reduced-motion`, as shipped.
- **Do** match ink to surface: cream ramp on the wall, ink ramp on paper.

### Don't:
- **Don't** introduce a second accent hue or a cool gray; the room is warm charcoal + paper + brass only.
- **Don't** put cream text on a paper label or dark ink on the charcoal wall.
- **Don't** soften the world into rounded UI - corners stay at 2-4px; pills are only for status chips.
- **Don't** add resting drop-shadows to flat surfaces or make hover grow shadows; depth is lighting, not float.
- **Don't** center an avatar or reduce the identity to a one-line bio; objects hang as labeled plates in a salon hang.
- **Don't** drop micro-labels below `0.72rem`.

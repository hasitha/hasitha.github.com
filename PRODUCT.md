# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

The primary visitor is someone who has just encountered Hasitha Pathiraja's name - a
founder, an engineering leader, a recruiter, a peer, press, or an investor - and looked
him up. They arrive cold, usually via a search on his name or a link shared
person-to-person, and want to quickly understand who he is, gauge his credibility, and
get to the right destination: one of his companies, his writing, or a way to reach him.
The site is optimized for "anyone who looks me up" rather than a single narrow audience.

## Product Purpose

The canonical personal hub for Hasitha Pathiraja - the place his name should resolve to
online. It presents his identity and 20+ years of engineering-leadership experience,
spotlights his two companies, points to his writing, and leaves room for personal
interests. Success: when someone googles his name, they land here, leave understanding
who he is, and reach the thing they came for.

## Positioning

The throughline, in his own framing: he helps companies ship real value, and builds the
leaders behind it. Not a resume site and not a single-company site. It is a personal hub
anchored by a rare combination of real proof points - current CTO of Precision Nutrition,
former senior engineering leader at Shopify, former Director of Engineering at
PathFactory, 20+ years in the field - that lends authority to two active ventures:
Infinitech Studios (custom software for startups, 0->1) and Purpose Driven Leader
(coaching and training for engineering leaders), plus a personal voice through writing
and interests. He is deliberately more than any single label; the positioning should
leave room to add ventures and interests over time without needing a rewrite.

## Operating Context

- Static site built with Astro, deployed to GitHub Pages and served at the custom apex
  domain `hasitha.ca` (registered via GoDaddy). The apex is canonical; `www.hasitha.ca`
  redirects to it, and `hasitha.github.io` redirects to the custom domain. The domain is
  set through the deployed `public/CNAME` file, and Astro's `site` is `https://hasitha.ca`.
  DNS lives at GoDaddy: four GitHub Pages `A` records (plus `AAAA`) on the apex and a `www`
  `CNAME` -> `hasitha.github.io`.
- Discovery is primarily organic search on his name plus links shared person-to-person,
  so owning his name in search matters.
- Both companies have their own live websites and logos that this site links out to and
  visually respects:
  - Infinitech Studios: https://infinitechstudios.com/
  - Purpose Driven Leader: https://purposedrivenleader.ca/
  - Real square brand marks, with light and dark variants, live in the repo under
    `public/logos/`.

## Capabilities and Constraints

- Current shape: a single page with anchor-linked sections - hero, "What I'm building"
  (the two companies), Writing, About, and a contact footer.
- Writing currently links out to Purpose Driven Leader (posts open in a new tab). A blog
  hosted on this site is a planned future addition, not built yet.
- Newsletter: a possible future addition, not committed. (Undecided - do not build or
  imply it until confirmed.)
- Light and dark modes: defaults to dark, with a manual toggle that persists the visitor's
  choice across visits (a saved choice always wins over the default). No stock hero imagery,
  minimal JavaScript, mobile-first, WCAG AA contrast.
- Terminology: "PDL" is internal shorthand between the owner and collaborators only. In
  any visitor-facing site copy, always write the company name in full as "Purpose Driven
  Leader" - never "PDL".

## Brand Commitments

- Name: Hasitha Pathiraja.
- Company names are binding and legal: **Infinitech Studios Inc.** and **Purpose Driven
  Leader Inc.** In visitor-facing copy, write "Purpose Driven Leader" in full; "PDL" is
  internal shorthand only and must never appear in site copy.
- Credentials are evidence, not links: Precision Nutrition, Shopify, and PathFactory are
  shown as proof points but are never hyperlinked. Only his own ventures (Infinitech
  Studios, Purpose Driven Leader) and his own profiles are linked.
- Company websites this site links to and visually respects:
  - Infinitech Studios: https://infinitechstudios.com/
  - Purpose Driven Leader: https://purposedrivenleader.ca/

## Voice and Tone

The established voice for all visitor-facing copy:

- Direct, warm, and plain-spoken. It should sound like something Hasitha would actually
  say out loud, in full sentences.
- Canadian voice. No em dashes (use regular hyphens); no unicode arrows (use ASCII forms
  like `->` and `<-`).
- Not corporate or LinkedIn-y, not braggy, not slogan-y, not gimmicky, not generic or
  template-y.
- Lead with a throughline (how he works, what he cares about), not a list or a headcount,
  so the copy stays true as he adds ventures and interests. (This is why the site avoids
  "two companies" framing and counting.)
- The hero is a doorway, not a full definition of him; the later sections add dimension.
- Never put values or claims in his mouth that he has not chosen to highlight. Use only
  owner-confirmed facts; mark anything unconfirmed as a placeholder rather than inventing
  it.

## Evidence on Hand

- Owner-confirmed proof points (factual): CTO of Precision Nutrition (current); senior
  engineering leader at Shopify (former); Director of Engineering at PathFactory
  (former); 20+ years in the field.
- Based in Toronto.
- Personal details he is happy to share: he plays the violin and performs as a magician /
  mentalist.
- Approved company descriptions (current site copy):
  - Infinitech Studios: "Custom software development agency that helps startups build,
    validate and launch new products."
  - Purpose Driven Leader: "Coaching and training that helps engineering leaders get
    better at the craft of leadership."
- Contact, public and owner-confirmed: GitHub (https://github.com/hasitha), LinkedIn
  (https://www.linkedin.com/in/hasitha/), a personal Calendly link for an intro call
  (https://calendly.com/hasitha-pathiraja/intro), and a contact form in the footer. X is
  not used. The LinkedIn profile is currently focused on the Purpose Driven Leader
  positioning.
- The email address is intentionally NOT published on the site (to avoid scraping);
  visitors reach Hasitha through the contact form or the Calendly link instead. The form
  posts to HubSpot (the Purpose Driven Leader portal, a dedicated "Personal Site Contact"
  form) so submissions land as contacts there; portal and form IDs live in
  `src/data/site.ts` (these are public client-side identifiers, not secrets). The form has
  a honeypot field and native validation; there is no server of our own.
- Writing: three real essays authored by Hasitha and published at Purpose Driven Leader
  are featured, linking out.
- A portrait photo exists in the repo (`public/portrait.jpg`).
- Absences future work must NOT fabricate: there are no testimonials, metrics, client
  lists, press quotes, launch counts, company taglines, or specific employment dates on
  hand beyond the proof points stated above. Do not invent any of these; use only what
  the owner provides.

## Product Principles

1. **Name-first credibility.** A stranger who lands here should, within seconds, know who
   Hasitha is and why his experience is credible.
2. **Hub, not silo.** Route people efficiently to the right destination - a company, the
   writing, a way to connect - rather than trapping everything on a single page.
3. **Proof points serve the ventures.** The Shopify / Precision Nutrition / PathFactory
   track record exists to lend authority to Infinitech, Purpose Driven Leader, and the
   writing. It is evidence, not the headline, and it is never linked.
4. **Durable and low-maintenance.** A site he can keep current for years; adding writing
   and small interest pages should stay cheap and easy.
5. **Earn trust honestly.** Every claim is real and owner-confirmed; never pad with
   invented social proof.
6. **Room to grow.** He is more than any one label; the structure and copy should absorb
   new ventures and interests without a rewrite.

// Real, owner-confirmed facts only. Placeholders are marked PLACEHOLDER for later.

export const site = {
  name: 'Hasitha Pathiraja',
  role: 'Chief Technology Officer, Precision Nutrition',
  roleShort: 'CTO, Precision Nutrition',
  // Portrait for the About section. Drop a file in public/ (e.g. public/portrait.jpg)
  // and set this to its path (e.g. '/portrait.jpg'). Empty = placeholder frame.
  portrait: '/portrait.jpg',
};

export type Venture = {
  id: string;
  name: string;
  blurb: string;
  url: string;
  logo: string; // square brand mark for light mode (dark-colored mark)
  logoDark: string; // square brand mark for dark mode (light-colored mark)
};

export const ventures: Venture[] = [
  {
    id: 'infinitech',
    name: 'Infinitech Studios',
    blurb:
      'Custom software development for startups, focused on the zero-to-one stage: validating and refining the idea, prototyping and testing, then building and launching.',
    url: 'https://infinitechstudios.com/',
    logo: '/logos/infinitech.png',
    logoDark: '/logos/infinitech-dark.png',
  },
  {
    id: 'pdl',
    name: 'Purpose Driven Leader',
    blurb:
      'Leadership training for engineers who have been promoted into leadership roles, at companies of any scale. The flagship is the Effective Leader program, focused on the craft of leadership.',
    url: 'https://purposedrivenleader.ca/',
    logo: '/logos/pdl.png',
    logoDark: '/logos/pdl-dark.png',
  },
];

export type Post = { tag: string; title: string; url: string };

// Real essays, authored by Hasitha and published at Purpose Driven Leader.
export const posts: Post[] = [
  {
    tag: 'Wellbeing',
    title: 'Avoiding Burnout as a Manager',
    url: 'https://purposedrivenleader.ca/posts/avoiding-burnout-as-a-manager',
  },
  {
    tag: 'Hands-on leadership',
    title: 'Do Engineering Managers Need to Write Code?',
    url: 'https://purposedrivenleader.ca/posts/do-engineering-managers-need-to-write-code',
  },
  {
    tag: 'Performance',
    title: 'How to Help Underperformers',
    url: 'https://purposedrivenleader.ca/posts/how-to-help-underperformers',
  },
];

export type Provenance = {
  org: string;
  role: string;
  current?: boolean;
};

// Sequence, not invented dates - exact years intentionally omitted until confirmed.
export const provenance: Provenance[] = [
  { org: 'Shopify', role: 'Senior engineering leader' },
  { org: 'PathFactory', role: 'Director of Engineering' },
  { org: 'Precision Nutrition', role: 'Chief Technology Officer', current: true },
];

export type NavItem = { label: string; href: string };

export const nav: NavItem[] = [
  { label: 'Work', href: '#work' },
  { label: 'Writing', href: '#writing' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

// PLACEHOLDER links - confirm/replace with owner. GitHub handle is known (hasitha).
// Email intentionally omitted until the owner approves publishing it publicly.
export const elsewhere: NavItem[] = [
  { label: 'GitHub', href: 'https://github.com/hasitha' },
  { label: 'LinkedIn', href: '#' },
  { label: 'X', href: '#' },
  { label: 'Email', href: '#' },
];

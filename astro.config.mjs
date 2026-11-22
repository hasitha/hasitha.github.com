// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Served from GitHub Pages at the custom apex domain hasitha.ca (no base path).
  // The apex is canonical; www.hasitha.ca redirects to it. The deployed CNAME
  // file (public/CNAME) tells GitHub Pages the custom domain.
  // https://docs.astro.build/en/guides/deploy/github/
  site: 'https://hasitha.ca',
});

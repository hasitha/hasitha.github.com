# hasitha.github.io

Personal website, built with [Astro](https://astro.build) and deployed to GitHub Pages at
[hasitha.github.io](https://hasitha.github.io).

## Prerequisites

Node is pinned in `.nvmrc`. With [nvm](https://github.com/nvm-sh/nvm):

```sh
nvm use   # or `nvm install` the first time
```

## Commands

Run from the project root:

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `npm install`     | Install dependencies                         |
| `npm run dev`     | Start the dev server at `localhost:4321`     |
| `npm run build`   | Build the production site to `./dist/`       |
| `npm run preview` | Preview the production build locally         |
| `npm run astro`   | Run Astro CLI commands (`astro add`, `check`)|

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site with
[`withastro/action`](https://github.com/withastro/action) and publishes it to GitHub Pages.
No manual steps are needed; GitHub Pages is configured to deploy from GitHub Actions.

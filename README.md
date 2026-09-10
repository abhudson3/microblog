# Astro & Tailwind CSS Starter Kit by lexingtonthemes.com

## Template Integrations
- @astrojs/tailwind - https://docs.astro.build/en/guides/integrations-guide/tailwind/
- @astrojs/sitemap - https://docs.astro.build/en/guides/integrations-guide/sitemap/
- @astrojs/mdx - https://docs.astro.build/en/guides/markdown-content/
- @astrojs/rss - https://docs.astro.build/en/guides/rss/
- Astrolib SEO - https://github.com/onwidget/astrolib/tree/main/packages/seo

## Template Structure

Inside of your Astro project, you'll see the following folders and files:

```
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## Commands

All commands are run from the root of the project, from a terminal:

Use npm and commit `package-lock.json` when dependencies change. Keep npm as the
only package manager: a Bun lockfile makes Cloudflare select Bun for installs.
For a clean install matching CI, run `npm ci`.

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `npm install`          | Installs dependencies                            |
| `npm run dev`          | Starts local dev server at `localhost:3000`      |
| `npm run build`        | Build your production site to `./dist/`          |
| `npm run preview`      | Preview your build locally, before deploying     |
| `npm run preview:worker` | Build and preview with Cloudflare Workers locally |
| `npm run deploy`       | Build and deploy to Cloudflare Workers           |
| `npm run deploy:check` | Build and validate deployment without publishing |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro check` |
| `npm run astro --help` | Get help using the Astro CLI                     |

## Cloudflare Workers

This project is configured for Cloudflare Workers static assets via `wrangler.jsonc`.

- Astro still builds a static site into `dist/`.
- Workers serves the contents of `dist/` directly.
- `404.html` is used as the Workers 404 page.

Run `npm run preview:worker` to check the site locally. To publish, run
`npx wrangler login` once, then `npm run deploy`. The Worker name is `microblog`.

For API token authentication, set `CLOUDFLARE_API_TOKEN` and
`CLOUDFLARE_ACCOUNT_ID` in your environment or local `.env` file. Wrangler does
not recognize `CLOUDFLARE_DEFAULT_ACCOUNT_ID`. An API token takes precedence over
`wrangler login`; use a token with Workers deployment permissions for the target
account.

For automatic Git deployments, connect this repository to a new Cloudflare
Workers project named `microblog`. Set the build command to `npm run build` and
the deploy command to `npx wrangler deploy`.

The existing Pages project and its custom domain are separate from this Worker.
After verifying the Worker deployment, move `andrewbhudson.dev` from Pages to the
Worker's Custom Domains and disable the old Pages automatic deployments.
See Cloudflare's [Pages migration guide](https://developers.cloudflare.com/workers/static-assets/migration-guides/migrate-from-pages/).

## Want to learn more?

Feel free to check Astros [documentation](https://docs.astro.build)

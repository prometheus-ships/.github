# rds-website

Corporate website for **RDS (Remba Digital Services) Limited** — the parent company behind [Brayzen](https://brayzen.money) and [Weysabi](https://github.com/joinremba/weysabi).

## What it is

A multi-page React app built with Vite + TypeScript.

```
index.html               — Vite entry
render.yaml              — Render Blueprint (static site + custom domains)
src/
  main.tsx               — React entry
  App.tsx                — Router (Home, Brayzen, Weysabi, About, 404)
  index.css              — Global tokens + reset
  components.css         — Component and section styles
  tokens.ts              — Brand colour tokens (mirrored as CSS variables)
  components/
    Logo.tsx             — RDS / Brayzen / Weysabi SVG marks
    Layout.tsx           — Navbar + Footer shell
    Navbar.tsx           — Sticky header with mobile menu
    Footer.tsx           — Footer
    Reveal.tsx           — Scroll-reveal wrapper (IntersectionObserver)
    ScrollToTop.tsx      — Scroll reset on route change
  sections/              — Home page sections
  pages/                 — Home, Brayzen, Weysabi, About, NotFound
public/
  favicon.svg            — RDS mark
  robots.txt
```

## Pages

- `/` — corporate home: hero, stats, the two companies, mission, values, careers, contact
- `/brayzen` — product page for the AI personal finance app
- `/weysabi` — product page for the AI orchestration stack
- `/about` — story, principles, team focus areas

## Design

Parent-brand identity built on the Remba family system: cobalt blue (`#0047FF`) with Syne + DM Sans + JetBrains Mono, on a light paper background. The products section and CTA use carbon backgrounds so each subsidiary's colour (Brayzen lime `#CDF546`, Weysabi emerald `#10B981`) carries its own brand.

## Development

Requires [Bun](https://bun.sh) (see `packageManager` in `package.json`).

```bash
bun install
bun run dev        # Vite dev server
bun run build      # TypeScript check + production build
bun run preview    # Preview production build locally
```

The `dev`/`build`/`preview`/`typecheck` scripts invoke the CLI entrypoints
directly (`bun ./node_modules/vite/bin/vite.js`, `bun ./node_modules/typescript/bin/tsc`)
instead of relying on `node_modules/.bin` shims. Bun links `.bin` entries as
symlinks, which some sandboxed/overlay filesystems silently drop; direct-path
invocation is deterministic everywhere.

If `bun install` ever leaves `node_modules` incomplete or missing its `.bin`
directory, reinstall with the copy backend:

```bash
rm -rf node_modules
bun install --backend=copyfile
```

## Deploy

Hosted on **Render** as a static site via the `render.yaml` Blueprint.

1. Render Dashboard → **New** → **Blueprint** → connect this repo
2. Render creates a static site from `render.yaml` with `rds.brayzenmoney.com` + `www.rds.brayzenmoney.com` as custom domains
3. Point DNS at Render (CNAME/ALIAS/ANAME per the service's Custom Domains page)
4. Render provisions Let's Encrypt TLS automatically

Every push to `main` auto-deploys. Manual alternative: **Build Command** — `bun install && bun run build`, **Publish Directory** — `dist`.

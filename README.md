# Imagine Health — Website

Editorial Next.js rebuild of [imaginehealth.ai](https://imaginehealth.ai).

## Stack

- **Next.js 15** (App Router, statically prerendered)
- **TypeScript** · **Tailwind CSS v3**
- **Motion** (Framer Motion v12) for scroll animations
- **Cormorant Garamond** (display) + **DM Sans** (body) via Google Fonts

## Local development

```bash
npm install
npm run dev
# → http://localhost:3000
```

## Build

```bash
npm run build
npm run start
```

All routes are prerendered as static content, so the build can be hosted anywhere — Vercel, Cloudflare Pages, Netlify, or any static host with `next export`.

## Deployment

This repo is configured for **Vercel** (zero-config). Pushing to `main` triggers an automatic production deploy.

To deploy elsewhere:

- **Cloudflare Pages / Netlify**: same — connect the repo and accept defaults.
- **Static export**: add `output: "export"` to `next.config.ts` and run `next build` to produce a `out/` directory.

## Structure

```
app/
  layout.tsx            ← root layout, fonts, metadata
  page.tsx              ← homepage (hero, mission, video, problem, challenges, CTA)
  contact/page.tsx      ← contact form + office locations
  news/internship/page.tsx
  sitemap.ts · robots.ts · icon.svg · apple-icon.svg

components/
  theme.tsx             ← CSS-var theme provider
  nav.tsx · footer.tsx
  scroll-progress.tsx   ← thin accent bar at top of viewport
  animated-counter.tsx  ← count-up stat numbers
  marquee.tsx           ← infinite horizontal ticker
```

## Theme

CSS custom properties on `[data-ih-root]`:

| Token | Value |
|---|---|
| `--ih-bg` | `#12130E` (near-black) |
| `--ih-surface` | `#1C1E17` |
| `--ih-text` | `#ECEAE3` (warm cream) |
| `--ih-muted` | `rgba(236,234,227,0.55)` |
| `--ih-accent` | `#A4B85C` (sage/olive) |

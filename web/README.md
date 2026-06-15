# Ratnesh Singh — AI Software Engineer Portfolio

A premium, dark-themed portfolio built from scratch to communicate one thing:
**this engineer builds production AI products.**

Built with **Next.js 15 (App Router) · TypeScript · Tailwind CSS · Framer Motion · lucide-react**, and statically exported so the *same code* deploys to **Vercel** and **GitHub Pages** with no changes.

## Run locally

```bash
cd web
npm install
npm run dev
# open http://localhost:3000
```

## Build

```bash
npm run build          # static export to web/out  (Vercel-ready, basePath = "")
npm run build:ghpages  # static export with basePath = /ratnesh-portfolio
```

## Deploy

### Vercel (recommended)
1. Import the repo at [vercel.com/new](https://vercel.com/new).
2. Set **Root Directory** = `web`.
3. Deploy. No env vars needed (basePath is empty by default).

### GitHub Pages
1. Repo **Settings → Pages → Build and deployment → Source = GitHub Actions**.
2. Push to `main`. The workflow at `.github/workflows/deploy-web.yml` builds with
   `build:ghpages` and publishes `web/out`.
3. Live at `https://ratneshsingh955.github.io/ratnesh-portfolio/`.

> The only difference between platforms is two env vars
> (`NEXT_PUBLIC_BASE_PATH`, `NEXT_PUBLIC_SITE_URL`) — never application code.

## Architecture

```
web/
├─ src/
│  ├─ app/                 # App Router: layout, page, robots, sitemap, icon
│  ├─ components/
│  │  ├─ sections/         # Hero, WhyMe, FeaturedProduct (MySA), Experience…
│  │  ├─ primitives/       # Reveal, AnimatedCounter, Icon (motion + helpers)
│  │  └─ ui/               # Button, Badge (shadcn-style, CVA + cn())
│  ├─ config/site.ts       # site metadata + nav sections
│  └─ lib/
│     ├─ data.ts           # single source of truth for ALL content
│     └─ utils.ts          # cn(), withBase()
```

Content is centralized in `src/lib/data.ts` — edit copy there, never in JSX.

## Notes
- Images are `unoptimized` (required for static export).
- `prefers-reduced-motion` is fully respected.
- SEO: metadata, Open Graph, Twitter cards, JSON-LD `Person`, sitemap + robots.
- Replace `public/resume.pdf` and `public/profile.jpg` to update those assets.

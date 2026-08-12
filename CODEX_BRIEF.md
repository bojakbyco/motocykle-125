# Codex implementation brief — Motocykle 125

Build the production-ready MVP described in `PRODUCT_PLAN.md` in this repository.

## Delivery constraints

- Use Astro, TypeScript, Tailwind CSS, Astro content collections, MD/MDX, minimal client JavaScript.
- Polish-language, commercially credible mobile-first design. Visual direction: premium editorial motorcycle buying guide, warm off-white background, graphite text, red/orange accent, strong typography, useful dense desktop layouts. Avoid generic SaaS gradients.
- Implement real product paths, not placeholder-only screens:
  - home page with value proposition and key discovery routes;
  - motorcycle catalog with filters;
  - at least 24 seeded motorcycle records spanning all listed segments, clearly marking data needing verification and sourcing every record;
  - individual model pages;
  - comparison selection and comparison page for up to 3 models;
  - 7-step recommendation quiz with deterministic weighted scoring, hard filters, shareable URL state and noindex result state;
  - dealer finder with pilot seed data and links to phone, website and Google Maps routes;
  - guides index and at least 3 substantial evergreen MDX articles;
  - methodology page;
  - intent landing pages;
  - analytics event seam that works when a public analytics key is absent.
- Be honest about data quality. Show status, model year, verification date and source links. Do not invent precise values when uncertain; omit them or mark them for verification.
- Include accessibility, keyboard behavior, reduced motion, 44px touch targets, responsive comparison table with sticky parameter column.
- Add robust SEO metadata, canonical URLs using `SITE_URL`, sitemap, robots.txt, JSON-LD where useful, and noindex for dynamic quiz outcomes.
- Add unit tests for recommendation scoring and key data/schema invariants.
- Add Dockerfile and nginx config suitable for static Astro output on Dokku. Container must listen on `$PORT` (default 8080) and expose `/health` returning 200.
- Add GitHub Actions CI for install, tests and build.
- Add README with exact local and Dokku deployment notes.
- Use npm with a committed lockfile.
- Do not commit secrets, node_modules, dist, cache or generated test output.

## Verification target

`npm ci`, `npm test`, and `npm run build` must pass. The generated app must work when served from the container.

Work autonomously and implement the entire MVP. Do not only write a plan.
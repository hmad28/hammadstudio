<p align="center">
  <img src="public/images/brand/hammad-studio-logo.png" alt="Hammad Studio" width="520" />
</p>

<h1 align="center">HAMMAD.STUDIO</h1>

<p align="center">
  Production website and SEO content platform for Hammad Studio, an independent web and software studio based in Jakarta.
</p>

<p align="center">
  <a href="https://hammad.studio">Live Website</a> ·
  <a href="https://hammad.studio/work">Portfolio</a> ·
  <a href="https://hammad.studio/harga-website">Pricing</a> ·
  <a href="https://hammad.studio/contact">Contact</a>
</p>

## Overview

This repository contains the public-facing Hammad Studio website. It presents the studio's services, pricing, portfolio, case studies, industry solutions, and educational content while providing a technical foundation for organic search and lead generation.

The application is built with the Next.js App Router and statically generates its commercial pages, articles, industry pages, and project case studies wherever possible.

## Main Capabilities

- Service pages for websites, e-commerce, web applications, business systems, automation, and custom development.
- Dedicated commercial pages for UMKM, company profiles, website redesigns, custom websites, and Jakarta-based services.
- Data-driven portfolio and case-study routes for real Hammad Studio projects.
- Industry and solution landing pages generated from structured content.
- Insight hub with SEO-oriented educational and commercial articles.
- Public pricing catalogue and Merdeka campaign experience.
- Indonesian and English interface support.
- WhatsApp lead journeys, Google Analytics events, and Web Vitals reporting.
- Sitemap, robots rules, canonical metadata, Open Graph data, and JSON-LD structured data.

## Tech Stack

| Area | Technology |
| --- | --- |
| Framework | Next.js 16 App Router |
| UI | React 19, Tailwind CSS 4 |
| Language | TypeScript in strict mode |
| Motion | Motion for React |
| Icons | Phosphor Icons |
| Deployment | Vercel or standalone Docker image |
| Quality | ESLint, TypeScript, production build checks |

## Project Structure

```text
src/
├── app/                 # Routes, metadata, sitemap, robots, and page entrypoints
├── components/          # Shared sections, navigation, cards, forms, and UI
└── lib/                 # Content models, SEO helpers, pricing, analytics, and data

public/
├── downloads/           # Public lead magnets
└── images/              # Brand, campaign, generated, and portfolio assets

docs/
└── seo-operations.md    # Search Console, analytics, GBP, and content operations

scripts/                 # Repository maintenance and asset-generation utilities
```

## Requirements

- Node.js 24 or newer
- npm

The repository includes an `.nvmrc`, so users of nvm can select the expected Node.js version with:

```bash
nvm use
```

## Local Development

```bash
git clone https://github.com/hmad28/hammadstudio.git
cd hammadstudio
npm ci
Copy-Item .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

On macOS or Linux, copy the environment file with `cp .env.example .env.local`.

## Environment Variables

The application has safe production defaults for the public site URL. Analytics and Search Console verification remain optional.

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Base URL used by sitemap and robots generation. |
| `NEXT_PUBLIC_GA_ID` | Google Analytics measurement ID. Analytics stays disabled when empty. |
| `GOOGLE_SITE_VERIFICATION` | Google Search Console verification token. |

Never commit `.env.local` or production secrets.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local development server. |
| `npm run build` | Create an optimized production build. |
| `npm run start` | Run the previously built production server. |
| `npm run lint` | Run ESLint. |
| `npm run typecheck` | Run TypeScript without emitting files. |
| `npm run check` | Run lint, typecheck, and production build in sequence. |

## Content Architecture

Most repeating content is maintained as typed data instead of duplicated directly in route files:

- `src/lib/work-content.ts` controls portfolio entries and case studies.
- `src/lib/service-detail-content.ts` controls service detail pages.
- `src/lib/insight-content.ts` controls articles and their metadata.
- `src/lib/seo-expansion-content.ts` controls industry and audience landing pages.
- `src/lib/merdeka-pricing.ts` and `src/lib/pricing-catalog.ts` control public packages.
- `src/lib/faq-content.ts` controls the dedicated FAQ page.

When adding a new project or article, update its typed content source first. Static routes, sitemap entries, internal links, and metadata are derived from these sources.

## SEO and Analytics

Technical search foundations are implemented directly in the App Router:

- `src/app/sitemap.ts` builds the sitemap from active routes and content records.
- `src/app/robots.ts` publishes crawler rules and the sitemap location.
- Route metadata supplies canonical URLs, titles, descriptions, and social previews.
- JSON-LD describes the organization, services, articles, collections, and projects.
- Analytics helpers track WhatsApp leads, downloads, and Core Web Vitals when GA is configured.

Operational work that cannot be automated from the repository is documented in [docs/seo-operations.md](docs/seo-operations.md).

## Docker

The production image uses the Next.js standalone output:

```bash
docker compose up app --build
```

For containerized development on port `3001`:

```bash
docker compose up dev --build
```

## Quality Gate

Run the complete validation before pushing changes:

```bash
npm run check
```

The GitHub Actions workflow runs the same lint, typecheck, and build checks for `main` branch pushes and pull requests.

## Deployment

The primary deployment target is Vercel. Configure the environment variables from `.env.example`, then deploy the `main` branch. The repository also supports any platform capable of running the generated Next.js standalone server.

---

Built and maintained by [Hammad Studio](https://hammad.studio).

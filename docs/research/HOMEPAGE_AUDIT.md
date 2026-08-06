# HAMMAD.STUDIO Homepage Audit

## Keep
- Existing Next.js 16 App Router stack and all existing routes.
- Homepage order: hero, intro, services, selected work, pricing, CTA, footer.
- Existing contact email and WhatsApp project-start destination.
- `next/image`, Tailwind v4, strict TypeScript, and the existing icon component pattern.

## Remove or replace
- Dytama logo, icon, Open Graph asset, background art, and naming in production code.
- Fake portfolio entries (Lumina Healthcare and Nexus Global Logistics).
- Oversized dark cards, circular SaaS-style action buttons, heavy overlays, and repeated dark sections.
- External CSS font loading, overly bold typography, verbose content, and placeholder social URLs.
- Homepage testimonials/news; its secondary route may remain, but fake testimonial content must not.

## Final topology
1. Dark hero with compact floating navigation and dominant three-screen project composition.
2. Ivory editorial intro.
3. Ivory four-row services list.
4. Ivory selected-work section with one featured and two supporting projects.
5. Compact ivory pricing band.
6. Light final CTA.
7. Restrained graphite footer.

## Asset decision
The repository has no standalone client screenshots. Three project previews are extracted from the user-provided final visual reference and stored in `public/images/work/`. They represent Saudi Education Expo, an operations dashboard, and Ajwa Date Store; no new fictional company names are introduced.

# HAMMAD STUDIO®

Bilingual marketing and commercial website for an independent digital product studio. Indonesian is served at the root URL and English under `/en`.

## Local development

```bash
npm install
npm run dev
```

Copy `.env.example` to `.env.local` and provide the required credentials. Apply `migrations/001_initial.sql` to Neon before accepting production submissions.

## Verification

```bash
npm test
npm run typecheck
npm run lint
npm run build
```

## Content and launch checklist

- Replace non-indexed work placeholders with verified case studies and original screenshots.
- Obtain legal review for Privacy and Terms copy.
- Configure Resend, Cloudflare R2 CORS, Turnstile, GA4, Search Console, and WhatsApp URL.
- Rotate any credential shared outside the deployment secret manager.
- Review estimator coefficients in `src/lib/estimator.ts` before making the tool public.

Project briefs are stored in Neon. Reference files are uploaded directly to R2 using short-lived signed URLs. Email notifications and confirmations use Resend.

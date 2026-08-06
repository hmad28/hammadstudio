# Hero Specification

- Target: `src/components/hero-section.tsx`
- Reference: `docs/design-references/hammad-final-reference.png`
- Model: static composition with one-time entrance animation and hover-only image movement.
- Background: premium graphite radial gradient plus 56px grid at <= 0.03 opacity.
- Content: centered 2-line headline, restrained body, two CTAs, starting price.
- Visual: center Saudi Education Expo preview dominates; operations and commerce previews sit behind it. No trust badge, fake stats, glow orb, or opaque overlay.
- Desktop headline: clamp(64px, 6.2vw, 100px), weight 540-600, 0.94 line-height. Mobile: 46-58px.
- Responsive: side previews remain visible but cropped on tablet; on mobile the central image leads and side previews become narrow background layers.

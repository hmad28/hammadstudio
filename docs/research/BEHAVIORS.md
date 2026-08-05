# Behavior Specification - dytama.com

## Interactive & Scroll Behaviors

1. **Header Scroll Threshold**
   - Trigger: `window.scrollY > 20`
   - Default state: Transparent background, subtle border
   - Scrolled state: `bg-[#0D1526]/80`, `backdrop-blur-xl`, `border-white/10`, `shadow-2xl`
   - Mobile: Slide-down mobile navigation drawer with backdrop blur.

2. **Hero Section Animations**
   - Elements: Badge fade-in, main headline staggered entrance, button hover scale 1.05.
   - Illustration: Subtle slow float animation (`animate-float-slow`) and gradient mask overlay.

3. **Services Interactive Accordion**
   - Click trigger on service item
   - Expanded state: Active item highlights number `(01)` & title in lime yellow `#D9FF43`, expands preview image thumbnail and detailed description with CTA button.
   - Indicator icon rotates 90 degrees on toggle.

4. **Portfolio Category Filter**
   - Filter buttons: All, Web Application, UI/UX Design, Mobile App
   - Dynamic filtering of showcase cards with smooth transition.
   - Hover state: Card image scales up 1.05 with smooth transform, external link arrow changes background to `#D9FF43`.

5. **Pricing WhatsApp CTA**
   - Pre-filled WhatsApp message tailored to selected package:
     - Starter Landing Page
     - Company Profile & Business
     - Custom Web Application / SaaS

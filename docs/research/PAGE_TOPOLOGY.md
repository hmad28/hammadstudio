# Page Topology - dytama.com

## Visual Hierarchy & Sections

1. **Header / Glassmorphic Floating Navbar (`src/components/navbar.tsx`)**
   - Position: Fixed, top inset-x-0, z-50
   - Style: Glassmorphism rounded pill container with backdrop blur
   - Links: Home, Services, Product, Portofolio, Pricing, News, About
   - Triggers: WhatsApp consultation drawer / modal & Instagram link

2. **Hero Section (`src/components/hero-section.tsx`)**
   - Position: Relative, full width, dark background `#0D1526`
   - Atmosphere: Radial glow (#6D28D9, #4F46E5) + SVG grid background pattern
   - Badge: 5 client avatars + 5 yellow rating stars ("Dipercaya lebih dari 100+ Klien")
   - Headline: "Build Scalable Digital Products, Not Just Websites"
   - Subtitle: "Dytama adalah digital product studio yang membantu bisnis merancang..."
   - CTA Buttons: "Lets,s Work Together" (lime/yellow) & "Portofolio" (indigo)
   - Visual: Desktop dashboard preview illustration mockup

3. **About & Value Proposition Cards (`src/components/about-section.tsx`)**
   - Section Tag: "About"
   - Headline: "Dytama adalah tech consulting, creative dan digital product studio..."
   - Grid Cards:
     1. Client Retention Rate 98% (Lime yellow card with Ribbon illustration)
     2. Memaksimalkan Potensi Bisnis Anda (Deep purple gradient card with dashboard mockup)
     3. Menyesuaikan Karakter Bisnis Anda (Slate gray card with hashtag pills)

4. **Interactive Services Showcase (`src/components/services-section.tsx`)**
   - Section Tag: "Services"
   - Headline: "Beberapa Layanan Dari Dytama"
   - Expandable Service Items:
     - (01) UI/UX Design
     - (02) Web Development
     - (03) Mobile Application
     - (04) SEO & Product Consulting

5. **Portfolio Grid (`src/components/portfolio-section.tsx`)**
   - Section Tag: "Portofolio"
   - Headline: "Karya Terbaru Dari Studio Kami"
   - Filter Tabs: All, Web Application, UI/UX Design, Mobile App
   - Showcase Cards: High-resolution previews with tags and hover zoom

6. **Transparent Pricing (`src/components/pricing-section.tsx`)**
   - Section Tag: "Pricing" (#PricingList)
   - Tiers: Starter Landing Page, Company Profile & Business (Popular), Custom Web App / SaaS

7. **Testimonials & Insights (`src/components/testimonials-news.tsx`)**
   - Section Tag: "Testimonials" & "News & Insights"
   - Client Reviews & Article cards grid

8. **CTA Banner & Footer (`src/components/cta-footer.tsx`)**
   - CTA: "Siap Membangun Produk Digital Impian Anda?"
   - Footer: Logo, tagline, navigation columns, location (Jakarta & Depok), social links, copyright.

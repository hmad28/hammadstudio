import type { Locale, Localized, Package, Service } from "./types";

export const t = (value: Localized, locale: Locale) => value[locale];

export const site = {
  name: "HAMMAD STUDIO®",
  email: "hello@hammad.studio",
  descriptor: { id: "INDEPENDENT DIGITAL PRODUCT STUDIO — INDONESIA", en: "INDEPENDENT DIGITAL PRODUCT STUDIO — INDONESIA" },
  meta: {
    id: "Studio produk digital independen untuk website, commerce, sistem bisnis, automation, dan software custom dengan scope dan pricing yang jelas.",
    en: "An independent digital product studio for websites, commerce, business systems, automation, and custom software—with clear scope and pricing.",
  },
} as const;

export const services: Service[] = [
  {
    slug: "web", number: "01", startingPrice: 3_500_000,
    name: { id: "Web", en: "Web" },
    headline: { id: "Website yang benar-benar bekerja untuk bisnis.", en: "Websites built to do business." },
    description: { id: "Digital presence yang membangun trust, menjelaskan offering, dan mengarahkan pengunjung untuk bertindak.", en: "Digital presence built around trust, communication, and conversion." },
    timeline: { id: "1–4 minggu", en: "1–4 weeks" },
    deliverables: [{ id: "Landing page", en: "Landing pages" }, { id: "Website bisnis", en: "Business websites" }, { id: "Platform corporate", en: "Corporate platforms" }, { id: "Website campaign & event", en: "Campaign & event websites" }],
  },
  {
    slug: "commerce", number: "02", startingPrice: 9_500_000,
    name: { id: "Commerce", en: "Commerce" },
    headline: { id: "Commerce tanpa kompleksitas yang tidak perlu.", en: "Commerce without unnecessary complexity." },
    description: { id: "Pengalaman digital yang membawa orang dari penemuan produk sampai transaksi selesai.", en: "Digital experiences that turn product discovery into completed transactions." },
    timeline: { id: "3–6 minggu", en: "3–6 weeks" },
    deliverables: [{ id: "Katalog & checkout", en: "Catalogue & checkout" }, { id: "Payment gateway", en: "Payment gateways" }, { id: "Order management", en: "Order management" }, { id: "Produk digital", en: "Digital products" }],
  },
  {
    slug: "systems", number: "03", startingPrice: 12_500_000,
    name: { id: "Systems", en: "Systems" },
    headline: { id: "Workflow Anda layak mendapat lebih dari spreadsheet baru.", en: "Your workflow deserves better than another spreadsheet." },
    description: { id: "Software internal yang dibangun mengikuti cara operasi tim Anda sebenarnya.", en: "Software designed around the way your operation actually works." },
    timeline: { id: "4–10+ minggu", en: "4–10+ weeks" },
    deliverables: [{ id: "Dashboard operasional", en: "Operational dashboards" }, { id: "CRM & booking", en: "CRM & booking" }, { id: "Customer portal", en: "Customer portals" }, { id: "Reporting", en: "Reporting" }],
  },
  {
    slug: "product-engineering", number: "04", startingPrice: 18_000_000,
    name: { id: "Products", en: "Products" },
    headline: { id: "Dari ide menjadi software yang bisa digunakan.", en: "From idea to usable software." },
    description: { id: "Kami mereduksi ide menjadi versi pertama yang masuk akal, lalu membangunnya untuk production.", en: "We reduce an idea into a sensible first version, then engineer it for production." },
    timeline: { id: "6–12+ minggu", en: "6–12+ weeks" },
    deliverables: [{ id: "MVP & SaaS", en: "MVPs & SaaS" }, { id: "Marketplace", en: "Marketplaces" }, { id: "Customer platform", en: "Customer platforms" }, { id: "Custom application", en: "Custom applications" }],
  },
  {
    slug: "automation", number: "05", startingPrice: 5_000_000,
    name: { id: "Automation", en: "Automation" },
    headline: { id: "Otomatiskan pekerjaan yang seharusnya tidak lagi manual.", en: "Automate the work that shouldn’t stay manual." },
    description: { id: "Hubungkan workflow, data, API, dan AI hanya ketika memang memberi nilai.", en: "Connect workflows, data, APIs, and AI only where it creates real value." },
    timeline: { id: "1–3 minggu", en: "1–3 weeks" },
    deliverables: [{ id: "Lead processing", en: "Lead processing" }, { id: "Document workflow", en: "Document workflows" }, { id: "API synchronization", en: "API synchronization" }, { id: "Internal reporting", en: "Internal reporting" }],
  },
];

export const packages: Package[] = [
  { id: "launch", name: "Launch Site", startingPrice: 3_500_000, maximumGuide: 5_500_000, timeline: "1–2 weeks", bestFor: { id: "Campaign, event kecil, personal brand, atau penawaran yang fokus.", en: "Campaigns, small events, personal brands, or a focused offer." }, includes: [{ id: "1 halaman conversion-focused", en: "1 conversion-focused page" }, { id: "Arah visual custom", en: "Custom visual direction" }, { id: "SEO, analytics & deployment", en: "SEO, analytics & deployment" }, { id: "2 review rounds · 14 hari warranty", en: "2 review rounds · 14-day warranty" }] },
  { id: "business", name: "Business Website", startingPrice: 6_500_000, maximumGuide: 10_000_000, timeline: "2–4 weeks", featured: true, bestFor: { id: "Bisnis yang membutuhkan digital presence profesional dan scalable.", en: "Businesses needing a professional, scalable digital presence." }, includes: [{ id: "6–8 core pages", en: "6–8 core pages" }, { id: "Discovery & information architecture", en: "Discovery & information architecture" }, { id: "CMS bila diperlukan", en: "CMS where required" }, { id: "3 review rounds · 30 hari warranty", en: "3 review rounds · 30-day warranty" }] },
  { id: "commerce", name: "Commerce", startingPrice: 9_500_000, maximumGuide: 16_000_000, timeline: "3–6 weeks", bestFor: { id: "Bisnis yang ingin menerima transaksi melalui platform sendiri.", en: "Businesses ready to transact through their own platform." }, includes: [{ id: "Katalog, cart & checkout", en: "Catalogue, cart & checkout" }, { id: "Payment gateway", en: "Payment gateway" }, { id: "Order dashboard", en: "Order dashboard" }, { id: "Notification & reporting", en: "Notifications & reporting" }] },
  { id: "automation", name: "Automation Sprint", startingPrice: 5_000_000, maximumGuide: 9_000_000, timeline: "1–3 weeks", bestFor: { id: "Satu workflow berulang yang sudah terdefinisi jelas.", en: "One clearly defined repetitive workflow." }, includes: [{ id: "Workflow mapping", en: "Workflow mapping" }, { id: "API & data connection", en: "API & data connection" }, { id: "Validation & notifications", en: "Validation & notifications" }, { id: "Documentation", en: "Documentation" }] },
  { id: "system", name: "Business System", startingPrice: 12_500_000, maximumGuide: 25_000_000, timeline: "4–10+ weeks", bestFor: { id: "Operasi yang sudah terlalu kompleks untuk spreadsheet dan chat.", en: "Operations that have outgrown spreadsheets and chat." }, includes: [{ id: "Core operational workflow", en: "Core operational workflow" }, { id: "Roles & dashboard", en: "Roles & dashboard" }, { id: "Reporting", en: "Reporting" }, { id: "Milestone reviews", en: "Milestone reviews" }] },
  { id: "product", name: "Digital Product / MVP", startingPrice: 18_000_000, maximumGuide: 35_000_000, timeline: "6–12+ weeks", bestFor: { id: "Founder dan bisnis yang membangun produk digital baru.", en: "Founders and businesses building a new digital product." }, includes: [{ id: "Product definition", en: "Product definition" }, { id: "Core UX & architecture", en: "Core UX & architecture" }, { id: "Production engineering", en: "Production engineering" }, { id: "Launch & handover", en: "Launch & handover" }] },
];

export const processes = [
  ["Discover", "Memahami bisnis, user, tujuan, scope, dan constraint.", "Understand the business, users, goals, scope, and constraints."],
  ["Define", "Mengubah masalah menjadi alur, fitur, dan keputusan teknis yang jelas.", "Turn the problem into clear flows, features, and technical decisions."],
  ["Design", "Membangun arah visual, experience, komponen, dan interaction penting.", "Shape the visual direction, experience, components, and key interactions."],
  ["Engineer", "Mengembangkan experience yang disetujui menjadi sistem production-ready.", "Engineer the approved experience into a production-ready system."],
  ["Validate", "Menguji fungsi, responsiveness, performance, dan edge cases.", "Validate function, responsiveness, performance, and edge cases."],
  ["Launch", "Deploy, serahkan akses, dokumentasi, dan monitor release awal.", "Deploy, hand over access and documentation, and monitor the release."],
] as const;

export const faqs = [
  { q: { id: "Berapa biaya sebuah project?", en: "How much does a project cost?" }, a: { id: "Project dimulai dari Rp3,5 juta. Scope, complexity, dan integration menentukan investasi final; angka awal selalu terlihat sebelum discovery call.", en: "Projects start at Rp3.5M. Scope, complexity, and integrations determine final investment; the starting point is visible before any discovery call." } },
  { q: { id: "Berapa lama pengerjaannya?", en: "How long does a project take?" }, a: { id: "Launch site biasanya 1–2 minggu, website bisnis 2–4 minggu, sedangkan software custom 4–12+ minggu.", en: "A launch site usually takes 1–2 weeks, a business website 2–4 weeks, and custom software 4–12+ weeks." } },
  { q: { id: "Apakah menggunakan template?", en: "Do you use templates?" }, a: { id: "Tidak untuk arah visual utama. Sistem komponen dapat digunakan ulang secara disiplin, tetapi experience dirancang berdasarkan brand, user, dan tujuan project.", en: "Not for the core visual direction. Component systems may be reused responsibly, but the experience is designed around the brand, users, and project goals." } },
  { q: { id: "Siapa yang memiliki hasil akhirnya?", en: "Who owns the final product?" }, a: { id: "Setelah pembayaran selesai, custom source code dan akun project diserahkan sesuai perjanjian. Tidak ada intentional vendor lock-in.", en: "After final payment, custom source code and project accounts are handed over as agreed. There is no intentional vendor lock-in." } },
  { q: { id: "Apakah ada support setelah launch?", en: "Is post-launch support available?" }, a: { id: "Ya. Bug warranty termasuk dalam project, sedangkan maintenance dan improvement tersedia melalui Studio Care.", en: "Yes. Bug warranty is included, while maintenance and improvements are available through Studio Care." } },
];

export const seoPages = ["website-company-profile", "jasa-dashboard-admin", "custom-web-application", "event-registration-platform", "ecommerce-development", "booking-system", "payment-gateway-integration"] as const;

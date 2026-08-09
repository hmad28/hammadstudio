import type { Localized } from "./types";

export const serviceSlugs = ["website", "e-commerce", "web-application", "business-system", "automation-ai", "custom-development"] as const;
export type ServiceDetailSlug = (typeof serviceSlugs)[number];

type Highlight = { title: string; description: Localized };
type PackagePreview = { name: string; price: string };

export type ServiceDetail = {
  slug: ServiceDetailSlug;
  number: string;
  title: Localized;
  hero: Localized;
  intro: Localized;
  cta: Localized;
  usesLabel: Localized;
  uses: readonly string[];
  capabilitiesLabel: Localized;
  capabilities: readonly string[];
  highlights?: readonly Highlight[];
  flow?: readonly string[];
  note?: Localized;
  packages?: readonly PackagePreview[];
  pricing: Localized;
};

export const serviceDetails: Record<ServiceDetailSlug, ServiceDetail> = {
  website: {
    slug: "website", number: "01", title: { id: "Website Development", en: "Website Development" },
    hero: { id: "Website yang layak\nmembawa nama bisnis Anda.", en: "A website worthy of\nrepresenting your business." },
    intro: { id: "Bukan sekadar online. Dibangun untuk membuat bisnis terlihat meyakinkan, mudah dipahami, dan mudah dihubungi.", en: "More than being online. Built to make the business credible, easy to understand, and easy to contact." },
    cta: { id: "Konsultasikan website", en: "Discuss your website" },
    usesLabel: { id: "Jenis website", en: "Website types" },
    uses: ["Landing Page", "Portfolio", "Company Profile", "Business Website", "Corporate Website", "Organization Website", "Event Website", "CMS", "Blog / Publication"],
    capabilitiesLabel: { id: "Yang kami perhatikan", en: "What we pay attention to" },
    capabilities: ["Custom Design", "Mobile Experience", "Copy Hierarchy", "Performance", "SEO Structure", "Analytics", "Maintainability", "Security Baseline"],
    highlights: [
      { title: "Credibility", description: { id: "Website membantu customer memvalidasi bahwa bisnis Anda nyata dan dapat dipercaya.", en: "A website helps customers validate that the business is real and trustworthy." } },
      { title: "First impression", description: { id: "Kualitas experience ikut membentuk bagaimana kualitas bisnis dipersepsikan.", en: "Experience quality shapes how the business itself is perceived." } },
      { title: "Clarity", description: { id: "Customer cepat memahami siapa Anda, apa yang ditawarkan, dan langkah berikutnya.", en: "Customers quickly understand who you are, what you offer, and what to do next." } },
      { title: "Conversion", description: { id: "CTA dan customer journey dirancang untuk mengubah perhatian menjadi tindakan.", en: "Calls to action and journeys are designed to turn attention into action." } },
      { title: "Ownership", description: { id: "Domain, brand, struktur, dan customer journey berada dalam kontrol bisnis Anda.", en: "The domain, brand, structure, and customer journey stay under your control." } },
      { title: "Marketing foundation", description: { id: "Menjadi fondasi untuk SEO, Google Ads, content, campaign, dan analytics.", en: "A foundation for SEO, Google Ads, content, campaigns, and analytics." } },
    ],
    packages: [{ name: "Essential", price: "Rp 2,5 juta" }, { name: "Business", price: "Rp 4,5 juta" }, { name: "Professional", price: "Rp 7,5 juta" }, { name: "Custom", price: "Rp 12 juta+" }],
    pricing: { id: "Paket website menggunakan pages sebagai batas scope, tetapi value dan harga juga mempertimbangkan functionality, content model, integration, serta design complexity.", en: "Website packages use pages as a scope boundary, while value and pricing also reflect functionality, content models, integrations, and design complexity." },
  },
  "e-commerce": {
    slug: "e-commerce", number: "02", title: { id: "E-Commerce Development", en: "E-Commerce Development" },
    hero: { id: "Jualan online dengan pengalaman\nyang terasa milik brand sendiri.", en: "Online selling that feels\nowned by your brand." },
    intro: { id: "Marketplace bagus untuk discovery. Website commerce memberi bisnis kontrol lebih besar terhadap brand, customer journey, dan proses penjualan.", en: "Marketplaces are useful for discovery. A commerce website gives the business more control over brand, customer journey, and sales operations." },
    cta: { id: "Konsultasikan commerce", en: "Discuss your commerce project" },
    usesLabel: { id: "Commerce dapat mencakup", en: "Commerce can include" },
    uses: ["Online Store", "Product Catalogue", "Digital Product", "B2B Catalogue", "Custom Order Flow"],
    capabilitiesLabel: { id: "Core capability", en: "Core capabilities" },
    capabilities: ["Product CMS", "Cart", "Checkout", "Payment Gateway", "Order Management", "Customer Data", "Invoice", "Notifications", "Inventory", "Shipping", "Voucher", "Reporting"],
    flow: ["Discover", "Product", "Cart", "Checkout", "Payment", "Order", "Fulfillment"],
    packages: [{ name: "Commerce Starter", price: "Rp 5 juta" }, { name: "Commerce", price: "Rp 8 juta" }, { name: "Commerce Pro", price: "Rp 12,5 juta+" }],
    pricing: { id: "Scope ditentukan oleh cara bisnis menjual: payment flow, inventory, shipping, promotion, reporting, dan workflow order ikut mempengaruhi harga.", en: "Scope follows how the business sells: payment flows, inventory, shipping, promotions, reporting, and order workflows affect pricing." },
  },
  "web-application": {
    slug: "web-application", number: "03", title: { id: "Web Application", en: "Web Applications" },
    hero: { id: "Saat website saja\ntidak cukup.", en: "When a website\nis not enough." },
    intro: { id: "Kami membangun aplikasi berbasis web untuk proses yang membutuhkan user, data, workflow, dan interaksi yang lebih kompleks.", en: "We build web applications for processes that require users, data, workflows, and more complex interactions." },
    cta: { id: "Diskusikan aplikasi", en: "Discuss your application" },
    usesLabel: { id: "Contoh use case", en: "Example use cases" },
    uses: ["Dashboard", "Booking", "Customer Portal", "Registration", "Ticketing", "Membership", "Internal Application"],
    capabilitiesLabel: { id: "Bisa mencakup", en: "Can include" },
    capabilities: ["Authentication", "Roles", "Database", "Dashboard", "Search & Filter", "Notifications", "Export & Reporting", "CMS", "Third-party API"],
    note: { id: "Web application tidak dihitung berdasarkan jumlah halaman saja. Kompleksitas user, workflow, data, role, dan integration ikut menentukan scope.", en: "Web applications are not priced by page count alone. User complexity, workflows, data, roles, and integrations all shape the scope." },
    pricing: { id: "Project web application umumnya mulai Rp 10 juta.", en: "Web application projects typically start at Rp 10 juta." },
  },
  "business-system": {
    slug: "business-system", number: "04", title: { id: "Business System", en: "Business Systems" },
    hero: { id: "Sistem yang dibangun\nmengikuti cara bisnis bekerja.", en: "Systems built around\nhow the business works." },
    intro: { id: "Untuk workflow yang terlalu spesifik untuk spreadsheet, tetapi tidak membutuhkan platform enterprise yang berlebihan.", en: "For workflows too specific for spreadsheets, without forcing an oversized enterprise platform." },
    cta: { id: "Diskusikan sistem", en: "Discuss your system" },
    usesLabel: { id: "Contoh use case", en: "Example use cases" },
    uses: ["Simple CRM", "Customer Management", "Operations Dashboard", "Order Management", "Document Management", "Staff Workflow", "Approval", "Reporting"],
    capabilitiesLabel: { id: "Core capability", en: "Core capabilities" },
    capabilities: ["Multi-role Access", "Workflow", "Data Management", "Permissions", "Documents", "Reporting", "Audit Trail", "Integration"],
    note: { id: "Untuk integrasi enterprise, legacy system, atau infrastructure berskala besar, kebutuhan akan dievaluasi terlebih dahulu.", en: "Enterprise integrations, legacy systems, and large-scale infrastructure are evaluated before scope is accepted." },
    pricing: { id: "Project business system umumnya mulai Rp 15 juta.", en: "Business system projects typically start at Rp 15 juta." },
  },
  "automation-ai": {
    slug: "automation-ai", number: "05", title: { id: "Automation & AI", en: "Automation & AI" },
    hero: { id: "Kurangi pekerjaan yang\ntidak perlu dilakukan berulang kali.", en: "Reduce the work that\nshould not stay repetitive." },
    intro: { id: "AI ketika berguna. Manusia tetap memegang kontrol.", en: "AI where it helps. Humans stay in control." },
    cta: { id: "Diskusikan automation", en: "Discuss automation" },
    usesLabel: { id: "Contoh use case", en: "Example use cases" },
    uses: ["AI Customer Service", "Shared Inbox", "Lead Qualification", "Automated Follow-up", "Notification", "Booking Automation", "Document Workflow", "Internal Assistant"],
    capabilitiesLabel: { id: "Pendekatan", en: "Approach" },
    capabilities: ["Workflow Mapping", "Human Handover", "API Integration", "Validation", "Knowledge Base", "Activity Log", "Usage Monitoring"],
    flow: ["Customer message", "AI / automation", "Lead captured", "Follow-up", "Human takeover"],
    note: { id: "Biaya WhatsApp API/BSP, AI usage, email provider, dan layanan pihak ketiga dihitung terpisah jika diperlukan.", en: "WhatsApp API/BSP, AI usage, email providers, and third-party fees are calculated separately when required." },
    pricing: { id: "Automation dengan workflow terdefinisi umumnya mulai Rp 5 juta.", en: "Automation with a defined workflow typically starts at Rp 5 juta." },
  },
  "custom-development": {
    slug: "custom-development", number: "06", title: { id: "Custom Development", en: "Custom Development" },
    hero: { id: "Tidak semua kebutuhan\nmuat di dalam paket.", en: "Not every requirement\nfits inside a package." },
    intro: { id: "Untuk ide, workflow, atau produk yang membutuhkan pendekatan khusus.", en: "For ideas, workflows, or products that need a purpose-built approach." },
    cta: { id: "Diskusikan kebutuhan custom", en: "Discuss a custom requirement" },
    usesLabel: { id: "Contoh project", en: "Example projects" },
    uses: ["SaaS", "Marketplace", "Specialized Platform", "Prototype / MVP", "API Backend", "Existing Product Development", "Unique Business Workflow"],
    capabilitiesLabel: { id: "Delivery dapat mencakup", en: "Delivery can include" },
    capabilities: ["Product Definition", "Custom Architecture", "UX & Design", "Engineering", "Testing", "Integration", "Launch & Handover"],
    flow: ["Discovery", "Scope", "Architecture", "Design", "Development", "Testing", "Launch"],
    pricing: { id: "Project custom umumnya mulai Rp 15 juta dan ditentukan berdasarkan scope.", en: "Custom projects typically start at Rp 15 juta and are scoped individually." },
  },
};

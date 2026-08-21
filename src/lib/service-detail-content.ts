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
    slug: "website",
    number: "01",
    title: { id: "Website Development", en: "Website Development" },
    hero: {
      id: "Website Anda ikut menentukan\nbagaimana bisnis Anda dinilai.",
      en: "Your website shapes how\nyour business is judged.",
    },
    intro: {
      id: "Kami membangun website yang bukan cuma terlihat bagus, tetapi membantu bisnis terlihat lebih terpercaya, lebih mudah dipahami, dan lebih siap menerima customer.",
      en: "We build websites that don't just look good, but help your business present credibly, explain value clearly, and turn visitors into customers.",
    },
    cta: { id: "Konsultasikan website", en: "Discuss your website" },
    usesLabel: { id: "Jenis website", en: "Website types" },
    uses: [
      "Landing Page",
      "Company Profile",
      "Corporate Website",
      "Portfolio",
      "Institutional Website",
      "Event Website",
      "CMS / Publication",
    ],
    capabilitiesLabel: { id: "What goes into the build", en: "What goes into the build" },
    capabilities: [
      "Responsive experience",
      "Content hierarchy",
      "Performance",
      "SEO foundation",
      "Analytics",
      "CMS bila diperlukan",
      "Accessibility dasar",
      "Deployment & maintainability",
    ],
    highlights: [
      {
        title: "Tampil meyakinkan",
        description: {
          id: "Desain dan presentasi brand yang rapi membantu membangun kredibilitas sejak kunjungan pertama.",
          en: "Clean brand presentation builds credibility right from the first visit.",
        },
      },
      {
        title: "Mudah dipahami",
        description: {
          id: "Customer tidak perlu menebak-nebak siapa Anda, apa yang dijual, dan apa langkah berikutnya.",
          en: "Customers never have to guess who you are, what you sell, and what to do next.",
        },
      },
      {
        title: "Mendorong tindakan",
        description: {
          id: "Website diarahkan menuju tindakan yang penting: chat, inquiry, booking, registrasi, atau pembelian.",
          en: "The website guides visitors towards meaningful action: chat, inquiry, booking, or purchase.",
        },
      },
      {
        title: "Menjadi aset bisnis",
        description: {
          id: "Website bisa berkembang menjadi fondasi untuk SEO, campaign, CMS, e-commerce, hingga customer portal.",
          en: "Your website grows into the long-term foundation for SEO, campaigns, CMS, e-commerce, and portals.",
        },
      },
    ],
    packages: [
      { name: "Website", price: "Rp 499 ribu" },
      { name: "CMS", price: "Rp 899 ribu" },
    ],
    pricing: {
      id: "Pilih titik awal yang paling mendekati kebutuhan. Scope final disepakati bersama secara transparan.",
      en: "Choose the starting point closest to your needs. Final scope is agreed upon transparently.",
    },
  },
  "e-commerce": {
    slug: "e-commerce",
    number: "02",
    title: { id: "E-Commerce Development", en: "E-Commerce Development" },
    hero: {
      id: "Bangun toko online yang terasa\nmilik brand Anda sendiri.",
      en: "Build an online store that feels\ntruly owned by your brand.",
    },
    intro: {
      id: "Dari katalog hingga order management, kami membangun pengalaman penjualan online yang jelas untuk customer dan mudah dikelola oleh tim.",
      en: "From catalog to order management, we build an online selling experience that is effortless for customers and easy for your team to operate.",
    },
    cta: { id: "Diskusikan toko online", en: "Discuss your online store" },
    usesLabel: { id: "Cakupan umum", en: "General coverage" },
    uses: [
      "Product Catalog",
      "Cart & Checkout",
      "Payment Gateway",
      "QRIS & Automatic Verification",
      "Order Management",
      "Customer Data",
      "Sales Reporting & Invoice",
    ],
    capabilitiesLabel: { id: "Mengapa toko sendiri", en: "Why own your store" },
    capabilities: [
      "Brand Experience",
      "Customer Journey Control",
      "Direct Customer Data",
      "Campaign Flexibility",
      "Product Presentation",
      "Custom Checkout Flow",
    ],
    flow: ["Discover", "Product", "Cart", "Checkout", "Payment", "Order", "Fulfillment"],
    packages: [
      { name: "Commerce", price: "Rp 2,299 juta" },
      { name: "Commerce Pro", price: "Rp 3,799 juta" },
    ],
    pricing: {
      id: "Marketplace membantu discovery. Website e-commerce memberi Anda kendali penuh atas data dan pengalaman pembeli.",
      en: "Marketplaces help discovery. An owned e-commerce site gives you total control over customer data and experience.",
    },
  },
  "web-application": {
    slug: "web-application",
    number: "03",
    title: { id: "Web Application", en: "Web Application" },
    hero: {
      id: "Saat kebutuhan Anda\nlebih dari sekadar website.",
      en: "When your requirements\ngo beyond a website.",
    },
    intro: {
      id: "Kami membangun aplikasi berbasis web untuk workflow yang membutuhkan user, data, interaksi, dan fungsi yang lebih spesifik.",
      en: "We build web applications for workflows involving users, data, interactions, and specific business rules.",
    },
    cta: { id: "Diskusikan aplikasi", en: "Discuss your application" },
    usesLabel: { id: "Common use cases", en: "Common use cases" },
    uses: [
      "Dashboard",
      "Customer Portal",
      "Member Area",
      "Booking & Ticketing",
      "Registration Platform",
      "Data Management",
      "Admin Platform",
    ],
    capabilitiesLabel: { id: "Dapat mencakup", en: "Can include" },
    capabilities: [
      "Authentication & Roles",
      "Database Architecture",
      "Business Logic Engine",
      "Search & Filtering",
      "File Upload & Documents",
      "Notifications & Email",
      "API Integrations",
      "Operational Admin Dashboard",
    ],
    note: {
      id: "Kompleksitas web application dipengaruhi oleh user role, data, workflow, integrasi, dan aturan bisnis.",
      en: "Web application complexity is shaped by user roles, data architecture, workflows, integrations, and business logic.",
    },
    pricing: {
      id: "Web application terfokus dimulai dari Booking Rp 2,499 juta, Business Rp 2,999 juta, atau produk digital lain sesuai workflow.",
      en: "Focused web applications begin with Booking at Rp2.499 million or Business at Rp2.999 million, depending on the workflow.",
    },
  },
  "business-system": {
    slug: "business-system",
    number: "04",
    title: { id: "Business System", en: "Business System" },
    hero: {
      id: "Sistem yang mengikuti\ncara bisnis Anda bekerja.",
      en: "Systems built around\nhow your business works.",
    },
    intro: {
      id: "Kami membangun tools internal untuk proses yang terlalu rumit jika terus mengandalkan chat, spreadsheet, dan pekerjaan manual.",
      en: "We build internal tools for operations that have grown too complex to manage via chat, spreadsheets, and manual tasks.",
    },
    cta: { id: "Petakan sistem", en: "Map out your system" },
    usesLabel: { id: "Use cases", en: "Use cases" },
    uses: [
      "CRM & Lead Management",
      "Customer Management",
      "Order Operations",
      "Staff Workflow",
      "Document Management",
      "Approval Flow & Reporting",
      "Operational Dashboard",
    ],
    capabilitiesLabel: { id: "Pendekatan", en: "Approach" },
    capabilities: [
      "Tidak semua bisnis butuh ERP besar.",
      "Satu sistem terfokus sudah cukup membuat pekerjaan terstruktur.",
      "Multi-role access & permission.",
      "Operational audit trail.",
      "Integration with existing tools.",
    ],
    note: {
      id: "Kebutuhan legacy integration atau enterprise ERP replacement akan dievaluasi terlebih dahulu sebelum dimulainya project.",
      en: "Enterprise ERP replacements or legacy integrations are evaluated thoroughly prior to project commitment.",
    },
    pricing: {
      id: "Business Apps dimulai dari Booking Rp 2,499 juta atau Business Rp 2,999 juta. Operational mulai Rp 5,999 juta dan kebutuhan unik menggunakan Custom Quote.",
      en: "Business Apps begin with Booking at Rp2.499 million or Business at Rp2.999 million. Operational starts at Rp5.999 million, while unique requirements use a custom quote.",
    },
  },
  "automation-ai": {
    slug: "automation-ai",
    number: "05",
    title: { id: "Automation & AI", en: "Automation & AI" },
    hero: {
      id: "Kurangi pekerjaan yang\ntidak perlu dilakukan berulang kali.",
      en: "Reduce work that\nshould not stay repetitive.",
    },
    intro: {
      id: "Kami membangun automation untuk membantu customer service, follow-up, administrasi, dan workflow yang masih terlalu banyak dikerjakan secara manual.",
      en: "We build automation to streamline customer service, follow-ups, administration, and workflows currently handled manually.",
    },
    cta: { id: "Cari yang bisa diotomatisasi", en: "Find what can be automated" },
    usesLabel: { id: "Cakupan umum", en: "General scope" },
    uses: [
      "AI Customer Service",
      "Lead Qualification & CRM Sync",
      "Automated Follow-up & Reminder",
      "WhatsApp & Email Workflow",
      "Booking Automation",
      "Internal Document Assistant",
    ],
    capabilitiesLabel: { id: "Prinsip utama", en: "Core principle" },
    capabilities: [
      "AI ketika berguna.",
      "Manusia tetap memegang kontrol.",
      "Auto-capture lead ke CRM.",
      "Human takeover saat percakapan penting.",
      "Activity logging & tracking.",
    ],
    flow: ["Form / Message", "Qualification", "Database Sync", "Auto Follow-up", "Human Takeover"],
    note: {
      id: "Biaya WhatsApp API, AI usage, dan email provider dijelaskan secara terpisah sejak awal.",
      en: "WhatsApp API, AI usage, and email provider costs are detailed separately from day one.",
    },
    pricing: {
      id: "Automation dihitung sebagai add-on atau custom scope berdasarkan channel, API, volume penggunaan, dan integrasi pihak ketiga.",
      en: "Automation is quoted as an add-on or custom scope based on channels, APIs, usage volume, and third-party integrations.",
    },
  },
  "custom-development": {
    slug: "custom-development",
    number: "06",
    title: { id: "Custom Development", en: "Custom Development" },
    hero: {
      id: "Tidak semua ide\nbisa dimasukkan ke paket.",
      en: "Not every idea\nfits inside a template.",
    },
    intro: {
      id: "Untuk kebutuhan yang terlalu spesifik untuk solusi standar, kami membangun produk berdasarkan workflow dan tujuan project Anda.",
      en: "For requirements too specific for off-the-shelf software, we engineer products built around your unique workflow and goals.",
    },
    cta: { id: "Ceritakan idenya", en: "Share your idea" },
    usesLabel: { id: "Cocok untuk", en: "Ideal for" },
    uses: [
      "SaaS",
      "Marketplace Platform",
      "Specialized Platform",
      "Prototype / MVP",
      "Custom Dashboard & Portal",
      "API & Software Integration",
      "Existing System Improvement",
    ],
    capabilitiesLabel: { id: "Cara kerjanya", en: "How it works" },
    capabilities: [
      "Discovery — Pahami kebutuhan & batas project",
      "Scope — Tentukan fitur & requirement",
      "Architecture — Tentukan cara produk dibangun",
      "Build — Design & development bertahap",
      "Test — Review, QA, & improvement",
      "Launch — Deploy & handover",
    ],
    flow: ["Discovery", "Scope", "Architecture", "Design & Build", "Testing", "Launch & Handover"],
    pricing: {
      id: "Custom Software menggunakan quotation setelah discovery, module breakdown, workflow, integration, security, infrastructure, dan timeline dipetakan.",
      en: "Custom Software is quoted after discovery maps the modules, workflows, integrations, security, infrastructure, and timeline.",
    },
  },
};

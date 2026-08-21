export type PricingIcon =
  | "landing"
  | "company"
  | "education"
  | "sales"
  | "travel"
  | "catalog"
  | "commerce"
  | "ticketing"
  | "booking"
  | "business"
  | "registration"
  | "operations"
  | "custom";

export type PricingPlan = {
  name: string;
  price: string;
  numericPrice?: number;
  summary: string;
  icon: PricingIcon;
  includes: string[];
  addons?: string;
  note?: string;
  examples?: string[];
  featured?: boolean;
};

export type PricingGroup = {
  id: string;
  number: string;
  title: string;
  description: string;
  plans: PricingPlan[];
};

export const pricingGroups: PricingGroup[] = [
  {
    id: "website",
    number: "01",
    title: "Website",
    description: "Website siap online, dengan atau tanpa dashboard pengelolaan.",
    plans: [
      {
        name: "Website",
        price: "Rp499RB",
        numericPrice: 499_000,
        icon: "landing",
        summary: "Website profesional siap online.",
        includes: ["Maks. 5 halaman utama", "Responsive desktop & mobile", "WhatsApp dan social media", "Maps bila dibutuhkan", "Basic SEO", "Hosting + SSL", "Domain .com 1 tahun", "Deployment & setup"],
        featured: true,
      },
      {
        name: "CMS",
        price: "Rp899RB",
        numericPrice: 899_000,
        icon: "company",
        summary: "Website + dashboard admin.",
        includes: ["Semua fitur Website", "Login admin", "Admin dashboard", "Kelola konten", "Tambah, edit, dan hapus data", "Upload gambar", "Blog / berita / artikel", "Basic database"],
        featured: true,
      },
    ],
  },
  {
    id: "commerce",
    number: "02",
    title: "Commerce",
    description: "Toko online dengan pembayaran yang langsung dipahami customer.",
    plans: [
      {
        name: "Commerce",
        price: "Rp2.299JT",
        numericPrice: 2_299_000,
        icon: "commerce",
        summary: "Toko online + QRIS otomatis.",
        includes: ["Product catalog", "Category & product detail", "Cart & checkout", "Customer dan order management", "Admin dashboard", "Inventory basic", "QRIS otomatis", "Payment status & webhook", "Invoice / receipt", "Basic sales dashboard"],
        note: "Biaya provider payment dan MDR tidak termasuk biaya development.",
        featured: true,
      },
      {
        name: "Commerce Pro",
        price: "Rp3.799JT",
        numericPrice: 3_799_000,
        icon: "commerce",
        summary: "Online store + full payment.",
        includes: ["Semua fitur Commerce", "Virtual Account", "Bank transfer & e-wallet", "Kartu jika provider mendukung", "Payment callback & expiry", "Voucher / promo", "Advanced inventory", "Customer management", "Sales report", "Shipping integration basic"],
        featured: true,
      },
    ],
  },
  {
    id: "business-apps",
    number: "03",
    title: "Business Apps",
    description: "Aplikasi siap scope untuk proses bisnis yang spesifik.",
    plans: [
      { name: "Booking", price: "Rp2.499JT", numericPrice: 2_499_000, icon: "booking", summary: "Website booking / reservation system.", includes: ["Service management", "Schedule & availability", "Customer", "Booking & status", "Admin dashboard", "Calendar", "Confirmation", "Basic notification", "Basic report"], addons: "Payment gateway tersedia sebagai add-on.", featured: true },
      { name: "LMS", price: "Rp3.499JT", numericPrice: 3_499_000, icon: "education", summary: "Website sistem kursus / kelas online.", includes: ["Admin, instructor, student", "Course & module", "Lesson & video", "Downloadable resources", "Student enrollment", "Course progress", "Basic quiz", "Student dashboard", "Admin dashboard"], addons: "Certificate, assignment, live class, payment, subscription, discussion, exam, dan AI tutor." },
      { name: "Ticketing", price: "Rp3.999JT", numericPrice: 3_999_000, icon: "ticketing", summary: "Website ticketing + QR check-in.", includes: ["Event landing page", "Ticket type, price, dan quota", "Registration & checkout", "Payment gateway", "Digital ticket", "Unique QR", "QR scanner & check-in", "Participant database", "Attendance & sales dashboard"], featured: true },
      { name: "Business", price: "Rp2.999JT", numericPrice: 2_999_000, icon: "business", summary: "CRM / sistem operasional bisnis.", includes: ["Lead & customer database", "Pipeline & status", "Follow-up", "Notes & activities", "Transaction / request", "Dashboard", "Search / filter", "Basic report", "Export"], featured: true },
      { name: "Operational", price: "Rp5.999JT", numericPrice: 5_999_000, icon: "operations", summary: "Custom operational system.", includes: ["Multi-user & roles", "Admin dashboard", "Customer", "Transaction", "Workflow", "Documents", "Notification", "Reporting", "Audit activity", "CMS bila diperlukan"], examples: ["Travel management", "Distributor", "Procurement", "Administrasi pendidikan"], featured: true },
    ],
  },
  {
    id: "custom",
    number: "04",
    title: "Custom",
    description: "Software untuk kebutuhan unik, kompleks, atau berisiko tinggi.",
    plans: [
      { name: "Custom", price: "Custom Quote", icon: "custom", summary: "Custom software development.", includes: ["Discovery", "Module breakdown", "Workflow", "Architecture", "Integration", "Security & infrastructure", "Timeline", "Quotation"], examples: ["SaaS", "Marketplace", "ERP", "Multi-branch", "Mobile app", "AI application", "Government", "Healthcare"], featured: true },
    ],
  },
];

export const pricingPlans = pricingGroups.flatMap((group) => group.plans);

export const getPricingPlanId = (name: string) =>
  `plan-${name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;

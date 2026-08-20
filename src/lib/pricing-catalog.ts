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
        name: "Website Starter",
        price: "Rp499K",
        numericPrice: 499_000,
        icon: "landing",
        summary: "Website profesional siap online untuk berbagai jenis bisnis.",
        includes: ["Maks. 5 halaman utama", "Responsive desktop & mobile", "WhatsApp dan social media", "Maps bila dibutuhkan", "Basic SEO", "Hosting + SSL", "Domain .com 1 tahun", "Deployment & setup"],
        featured: true,
      },
      {
        name: "Website + CMS",
        price: "Rp899K",
        numericPrice: 899_000,
        icon: "company",
        summary: "Website yang dapat dikelola sendiri melalui admin dashboard.",
        includes: ["Semua Website Starter", "Login admin", "Admin dashboard", "Kelola konten", "Tambah, edit, dan hapus data", "Upload gambar", "Blog / berita / artikel", "Basic database"],
        featured: true,
      },
      {
        name: "Wedding Invitation",
        price: "Rp199K+",
        numericPrice: 199_000,
        icon: "registration",
        summary: "Undangan digital personal dengan detail acara dan RSVP.",
        includes: ["Profil pasangan", "Detail acara", "Countdown", "Google Maps", "Gallery", "Background music", "Nama tamu personal", "RSVP sederhana"],
        addons: "Video, custom animation, advanced RSVP, dan guest management.",
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
        name: "E-Commerce QRIS",
        price: "Rp2.299K",
        numericPrice: 2_299_000,
        icon: "commerce",
        summary: "Toko online dengan QRIS otomatis dan pengelolaan order.",
        includes: ["Product catalog", "Category & product detail", "Cart & checkout", "Customer dan order management", "Admin dashboard", "Inventory basic", "QRIS otomatis", "Payment status & webhook", "Invoice / receipt", "Basic sales dashboard"],
        note: "Biaya provider payment dan MDR tidak termasuk biaya development.",
        featured: true,
      },
      {
        name: "E-Commerce Full Payment",
        price: "Rp3.799K",
        numericPrice: 3_799_000,
        icon: "commerce",
        summary: "Toko online dengan payment gateway lengkap.",
        includes: ["Semua E-Commerce QRIS", "Virtual Account", "Bank transfer & e-wallet", "Kartu jika provider mendukung", "Payment callback & expiry", "Voucher / promo", "Advanced inventory", "Customer management", "Sales report", "Shipping integration basic"],
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
      { name: "Booking System", price: "Rp2.499K", numericPrice: 2_499_000, icon: "booking", summary: "Booking, reservasi, jadwal, dan dashboard.", includes: ["Service management", "Schedule & availability", "Customer", "Booking & status", "Admin dashboard", "Calendar", "Confirmation", "Basic notification", "Basic report"], addons: "Payment gateway tersedia sebagai add-on.", featured: true },
      { name: "POS System", price: "Rp2.999K", numericPrice: 2_999_000, icon: "business", summary: "Kasir, transaksi, produk, stock, dan laporan.", includes: ["Login cashier / admin", "Product & category", "Stock basic", "Cart kasir", "Transaction & discount", "Receipt", "Transaction history", "Daily sales", "Dashboard & report", "Export data"], addons: "Multi cashier, barcode, printer, multi outlet, loyalty, dan advanced inventory." },
      { name: "Ticketing System", price: "Rp3.499K", numericPrice: 3_499_000, icon: "ticketing", summary: "Tiket digital, pembayaran, QR scanner, dan attendance.", includes: ["Event landing page", "Ticket type, price, dan quota", "Registration & checkout", "Payment gateway", "Digital ticket", "Unique QR", "QR scanner & check-in", "Participant database", "Attendance & sales dashboard"], featured: true },
      { name: "Membership System", price: "Rp3.499K", numericPrice: 3_499_000, icon: "registration", summary: "Member, status, masa aktif, dan dashboard.", includes: ["Member registration & login", "Member database & profile", "Membership type", "Active / inactive status", "Expiration", "Member dashboard", "Admin dashboard", "QR / member ID", "Basic report"] },
      { name: "LMS / Course Platform", price: "Rp3.999K", numericPrice: 3_999_000, icon: "education", summary: "Course, student, materi, progress, dan dashboard.", includes: ["Admin, instructor, student", "Course & module", "Lesson & video", "Downloadable resources", "Student enrollment", "Course progress", "Basic quiz", "Student dashboard", "Admin dashboard"], addons: "Certificate, assignment, live class, payment, subscription, discussion, exam, dan AI tutor." },
      { name: "CRM System", price: "Rp3.999K", numericPrice: 3_999_000, icon: "sales", summary: "Lead, follow-up, customer, dan sales pipeline.", includes: ["Lead database", "Customer", "Pipeline & lead status", "Follow-up", "Notes & activities", "Sales person", "Dashboard", "Search / filter", "Basic report", "Export"] },
      { name: "Inventory System", price: "Rp3.999K", numericPrice: 3_999_000, icon: "catalog", summary: "Stock, supplier, movement, dan laporan inventory.", includes: ["Product / SKU", "Category", "Stock in & out", "Supplier", "Inventory movement", "Minimum stock", "Basic purchase", "Dashboard", "Report", "Export"], addons: "Warehouse, barcode, purchase order, stock transfer, dan advanced costing." },
      { name: "Rental System", price: "Rp3.999K", numericPrice: 3_999_000, icon: "travel", summary: "Unit, availability, booking, payment, pickup, dan return.", includes: ["Unit / asset & category", "Availability", "Price", "Booking", "Customer", "Payment status", "Rental status", "Pickup / return", "Admin dashboard", "Calendar & report"] },
      { name: "Operational System", price: "Rp5.999K+", numericPrice: 5_999_000, icon: "operations", summary: "Sistem operasional multi-module untuk workflow harian.", includes: ["Multi-user & roles", "Admin dashboard", "Customer", "Transaction", "Workflow", "Documents", "Notification", "Reporting", "Audit activity", "CMS bila diperlukan"], examples: ["Travel management", "Distributor", "Procurement", "Administrasi pendidikan"], featured: true },
    ],
  },
  {
    id: "custom",
    number: "04",
    title: "Custom",
    description: "Software untuk kebutuhan unik, kompleks, atau berisiko tinggi.",
    plans: [
      { name: "Custom Software", price: "Custom", icon: "custom", summary: "Sistem sesuai kebutuhan dengan discovery dan quotation khusus.", includes: ["Discovery", "Module breakdown", "Workflow", "Architecture", "Integration", "Security & infrastructure", "Timeline", "Quotation"], examples: ["SaaS", "Marketplace", "ERP", "Multi-branch", "Mobile app", "AI application", "Government", "Healthcare"], featured: true },
    ],
  },
];

export const pricingPlans = pricingGroups.flatMap((group) => group.plans);

export const getPricingPlanId = (name: string) =>
  `plan-${name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;

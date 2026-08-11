export type PricingPlan = {
  name: string;
  price: string;
  summary: string;
  audience?: string[];
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
    id: "personal-non-profit",
    number: "01",
    title: "Personal & Non-Profit",
    description: "Website personal, undangan digital, dan profil lembaga dengan scope yang jelas sejak awal.",
    plans: [
      {
        name: "Personal Starter",
        price: "Rp299.000",
        summary: "Landing page ringkas untuk mulai membangun kehadiran profesional.",
        audience: ["Mahasiswa", "Freelancer pemula", "CV online", "Portfolio", "Personal landing page"],
        includes: ["1 landing page, sekitar 5–6 section", "About / profile", "Skills / services", "Portfolio / project", "Experience / achievement", "Contact", "CTA WhatsApp dan social media", "Responsive", "Basic SEO", "Hosting + SSL", "Subdomain Hammad Studio"],
        note: "Belum termasuk CMS, dashboard, database, login, blog, atau fitur custom.",
      },
      {
        name: "Personal Professional",
        price: "Rp499.000+",
        summary: "Personal branding multipage untuk profesional yang ingin tampil lebih serius.",
        audience: ["Freelancer profesional", "Consultant", "Creator", "Professional portfolio"],
        includes: ["Website multipage", "Home", "About", "Portfolio", "Experience", "Services", "Contact", "Basic analytics", "Google Search Console", "SEO foundation", "Custom domain sesuai kebijakan", "Hosting + SSL"],
        addons: "CMS, blog, multilingual, galeri, advanced animation, dan kebutuhan tambahan lain.",
      },
      {
        name: "Wedding Invitation",
        price: "Rp199.000+",
        summary: "Undangan digital personal yang nyaman dibuka dan dibagikan dari ponsel.",
        includes: ["Profil pasangan", "Detail acara", "Countdown", "Google Maps", "Gallery", "Background music", "Gift / rekening", "Nama tamu personal", "RSVP sederhana", "Share button", "Mobile responsive"],
        addons: "Video, custom animation, advanced RSVP, dan kebutuhan personalisasi lainnya.",
      },
      {
        name: "Wedding Guest Management",
        price: "Rp799.000+",
        summary: "Sistem pengelolaan undangan, tamu, QR, dan kehadiran acara.",
        includes: ["Digital invitation", "Database tamu", "Kategori tamu", "RSVP management", "QR unik per tamu", "Browser QR scanner", "Check-in", "Attendance dashboard", "Search / filter", "Basic export"],
        note: "Harga menyesuaikan jumlah tamu, gate, scanner, pax, venue, dan kompleksitas event.",
      },
      {
        name: "Institution Profile",
        price: "Rp499.000+",
        summary: "Website profil untuk lembaga kecil dan komunitas.",
        audience: ["Sekolah", "Masjid", "Yayasan", "Komunitas", "Organisasi", "Lembaga kecil"],
        includes: ["Home", "About / profile", "Struktur organisasi", "Program", "Aktivitas", "Gallery", "Contact", "WhatsApp", "Maps", "SEO dasar", "Hosting + SSL"],
      },
      {
        name: "Institution Pro",
        price: "Rp799.000+",
        summary: "Website institusi yang dapat dikelola sendiri melalui dashboard.",
        includes: ["Semua fitur Institution Profile", "CMS", "Admin dashboard", "Berita / artikel", "Program", "Agenda / event", "Gallery", "Dokumen", "Pengumuman", "Form", "Search / filter"],
        note: "Pembayaran, database peserta, transaksi, atau role kompleks masuk kategori Business / Operational System.",
      },
    ],
  },
  {
    id: "umkm-growing-business",
    number: "02",
    title: "UMKM & Growing Business",
    description: "Website dan sistem praktis untuk penjualan, event, commerce, dan operasional bisnis yang sedang tumbuh.",
    plans: [
      {
        name: "UMKM Starter",
        price: "Rp499.000",
        summary: "Website profesional yang mengarahkan calon customer ke WhatsApp atau outlet.",
        audience: ["Warung", "Catering", "Laundry", "Bengkel", "Barbershop", "Home industry", "Jasa lokal"],
        includes: ["1 landing page", "Profil bisnis", "Produk / layanan", "Benefit", "Gallery", "Testimonial", "Maps", "WhatsApp CTA", "Social media", "Basic SEO", "Hosting + SSL"],
        featured: true,
      },
      {
        name: "UMKM Professional",
        price: "Rp1.099.000+",
        summary: "Website multipage untuk bisnis yang membutuhkan struktur dan kredibilitas lebih kuat.",
        includes: ["Multipage", "Home", "About", "Product / service", "Portfolio / gallery", "Testimonial", "Contact", "Analytics", "SEO foundation", "Custom domain", "Hosting + SSL"],
        addons: "CMS, product management, blog, promo, lead form, WhatsApp automation, dan event.",
      },
      {
        name: "Event Website",
        price: "Rp749.000+",
        summary: "Halaman informasi dan promosi untuk event, campaign, atau kegiatan publik.",
        audience: ["Seminar", "Workshop", "Kajian", "Conference", "Expo", "Festival", "Campaign"],
        includes: ["Hero", "Countdown", "Event overview", "Agenda", "Speaker", "Venue", "Sponsor / partner", "FAQ", "CTA registrasi", "SEO", "Social sharing"],
      },
      {
        name: "Event Registration",
        price: "Rp1.499.000+",
        summary: "Website event dengan registrasi dan pengelolaan data peserta.",
        includes: ["Semua fitur Event Website", "Registration form", "Database peserta", "Confirmation", "Admin dashboard", "Search", "Filter", "Export data", "Basic email notification"],
        addons: "QR peserta, scanner, attendance, WhatsApp notification, dan certificate generator.",
      },
      {
        name: "Event Ticketing",
        price: "Rp3.499.000+",
        summary: "Sistem ticketing lengkap dari checkout sampai check-in peserta.",
        includes: ["Event website", "Tipe dan harga tiket", "Kuota", "Checkout", "Buyer data", "Attendee data", "Payment gateway", "Payment tracking", "Digital ticket", "QR unik", "QR scanner", "Attendance dashboard", "Sales dashboard", "Basic report"],
        note: "Harga menyesuaikan skala event dan traffic.",
      },
      {
        name: "E-Commerce Starter",
        price: "Rp1.099.000+",
        summary: "Online shop dengan katalog, checkout, dan pembayaran manual.",
        includes: ["Storefront", "CMS", "Product management", "Category", "Detail produk", "Cart", "Checkout", "Customer data", "Order management", "Admin dashboard", "Manual payment"],
      },
      {
        name: "E-Commerce Business",
        price: "Rp2.499.000+",
        summary: "Commerce dengan pembayaran otomatis agar order tidak diperiksa manual satu per satu.",
        includes: ["Semua fitur E-Commerce Starter", "Payment gateway QRIS", "Automatic payment tracking", "Webhook / callback", "Invoice / receipt", "Customer management", "Notification"],
      },
      {
        name: "E-Commerce Pro",
        price: "Rp5.499.000+",
        summary: "Commerce untuk growing brand dan retail dengan kontrol operasional lebih lengkap.",
        includes: ["Semua fitur E-Commerce Business", "Multi-payment", "Inventory", "Voucher", "Promo", "Customer management", "Sales report", "Shipping integration", "Roles", "Operational dashboard"],
        note: "Multi-warehouse, marketplace, multi-vendor, ERP, advanced inventory, atau mobile app masuk Custom Software.",
      },
      {
        name: "Business System",
        price: "Rp2.500.000+",
        summary: "Menyatukan operasional yang masih tersebar di Excel, WhatsApp, notes, Google Form, dan tool terpisah.",
        includes: ["Database", "Admin dashboard", "Customer / entity management", "Transaction / request", "Status management", "Notes", "Search", "Filter", "Basic report", "Export"],
        examples: ["CRM", "Booking", "Laundry", "Rental", "POS"],
        featured: true,
      },
      {
        name: "Operational System",
        price: "Rp5.000.000+",
        summary: "Sistem operasional multi-user dengan workflow, dokumen, dan reporting.",
        includes: ["Multiple users", "Staff management", "Customer management", "Transaction management", "Roles", "Workflow", "Documents", "Notification", "Dashboard", "Reports", "Audit activity", "CMS bila diperlukan"],
        examples: ["Travel operation", "Sekolah", "Klinik ringan", "Distributor", "Membership", "Procurement", "Field service", "Donation management"],
        note: "Multi-branch, multi-department, approval kompleks, role matrix, mobile app, atau banyak integrasi masuk Custom Software.",
      },
    ],
  },
  {
    id: "business-enterprise",
    number: "03",
    title: "Business & Enterprise",
    description: "Website korporat dan layanan digital dengan CMS, workflow, pengelolaan data, serta kebutuhan organisasi yang lebih formal.",
    plans: [
      {
        name: "Corporate Website",
        price: "Rp2.500.000+",
        summary: "Company profile digital untuk membangun kredibilitas dan menghasilkan inquiry.",
        audience: ["CV", "PT", "Corporate", "Consulting firm", "Group company", "Professional services"],
        includes: ["Corporate website", "CMS", "Company profile", "Service / product", "Portfolio / case study", "Team", "Testimonial", "News / insight", "Contact", "Lead form", "SEO foundation", "Analytics", "Hosting", "SSL"],
        addons: "Careers, ESG, investor information, multilingual, document center, advanced SEO, dan integrations.",
        featured: true,
      },
      {
        name: "Corporate Business",
        price: "Rp5.000.000+",
        summary: "Corporate website yang juga menjadi bagian dari operasional perusahaan.",
        includes: ["Corporate CMS", "Lead database", "Customer database", "Request management", "Document upload", "Document management", "Quotation / request flow", "Status tracking", "Admin dashboard", "Reporting"],
      },
      {
        name: "Government Website",
        price: "Rp5.499.000+",
        summary: "Website informasi instansi dengan pengelolaan publikasi dan dokumen.",
        includes: ["Profile", "Organization", "News", "Agenda", "Announcement", "Documents", "Publication", "Gallery", "CMS", "Admin dashboard", "Basic accessibility", "SEO foundation"],
        note: "Procurement, infrastructure, security, support, dan requirement lain dihitung terpisah sesuai project.",
      },
      {
        name: "Digital Public Service",
        price: "Rp10.000.000+",
        summary: "Layanan publik digital dari pengajuan, verifikasi, approval, sampai pelacakan status.",
        includes: ["Public submission", "Custom form", "Document upload", "Nomor referensi", "Status tracking", "Staff dashboard", "Verification", "Approval workflow", "Notification", "Report", "Export"],
      },
    ],
  },
  {
    id: "custom-software",
    number: "04",
    title: "Custom Software & Enterprise Solution",
    description: "Untuk produk atau sistem yang memerlukan discovery, arsitektur, keamanan, dan delivery khusus.",
    plans: [
      {
        name: "Custom Software",
        price: "Custom quotation",
        summary: "Scope dan biaya disusun setelah kebutuhan produk serta workflow dipetakan.",
        audience: ["ERP", "SaaS", "Multi-tenant platform", "Marketplace", "Multi-vendor", "Mobile app", "Healthcare system", "Enterprise system", "Multi-branch", "Integrated government system", "Large event platform", "Complex CRM", "Procurement", "Finance system", "High-scale platform", "Mission-critical software"],
        includes: ["Discovery", "Module breakdown", "Workflow mapping", "Integration planning", "Security & infrastructure", "Timeline", "Quotation"],
        featured: true,
      },
    ],
  },
];

export const pricingPlans = pricingGroups.flatMap((group) => group.plans);

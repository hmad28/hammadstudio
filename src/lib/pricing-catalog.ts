export type PricingIcon = "landing" | "company" | "sales" | "travel" | "education" | "organization" | "religious" | "culinary" | "property" | "hotel" | "media" | "healthcare" | "catalog" | "commerce" | "event" | "registration" | "ticketing" | "booking" | "business" | "operations" | "government" | "custom";

export type PricingPlan = {
  name: string;
  price: string;
  summary: string;
  icon: PricingIcon;
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
    id: "website",
    number: "01",
    title: "Website",
    description: "Masuk berdasarkan jenis bisnis dan tujuan utama website.",
    plans: [
      { name: "Landing Page", price: "Rp499K", icon: "landing", summary: "Untuk ads, campaign, promo, launching, dan jasa.", audience: ["Ads", "Campaign", "Promo produk", "Launching", "Jasa"], includes: ["1 page", "5–8 section", "CTA WhatsApp", "Form", "Responsive", "Basic SEO", "Hosting + SSL"], addons: "Analytics, custom animation, CMS, dan lead management.", featured: true },
      { name: "Company Profile", price: "Rp1,099JT", icon: "company", summary: "Kehadiran bisnis yang kredibel untuk UMKM, CV, dan PT.", audience: ["UMKM", "CV", "PT", "Agency", "Kontraktor", "Professional service"], includes: ["Home", "About", "Services", "Portfolio", "Testimonial", "Contact", "SEO foundation", "Analytics", "Domain + hosting sesuai paket"], note: "Corporate-level mulai Rp2.500.000+.", featured: true },
      { name: "Sales / Marketing", price: "Rp799K", icon: "sales", summary: "Alur campaign yang mengarahkan traffic menjadi lead.", audience: ["Property sales", "Dealer", "Internet provider", "Agency", "Financial consultant", "Sales team"], includes: ["Landing pages", "Lead forms", "Tracking", "Analytics", "Campaign pages", "CTA WhatsApp"], addons: "CRM integration dan lead management sesuai kebutuhan.", featured: true },
      { name: "Tour & Travel", price: "Rp499K", icon: "travel", summary: "Paket, jadwal, konsultasi, dan operasional travel.", audience: ["Travel Umrah", "Tour operator", "Wisata halal"], includes: ["Landing page", "Profil travel", "Paket", "Fasilitas", "Testimonial", "Gallery", "WhatsApp"], addons: "Professional Rp1,099JT+ dengan multipage, jadwal, CMS, blog, dan SEO. Travel System Rp2,5JT+.", featured: true },
      { name: "Organization / Institution", price: "Rp499K", icon: "organization", summary: "Profil, program, aktivitas, dan informasi lembaga.", audience: ["Yayasan", "Komunitas", "NGO", "Organisasi", "Lembaga sosial"], includes: ["Profil", "Struktur", "Program", "Aktivitas", "Berita", "Galeri", "Contact"], addons: "Versi dengan CMS mulai Rp799K+." },
      { name: "Masjid / Pesantren", price: "Rp499K", icon: "religious", summary: "Informasi jamaah, program, kajian, dan donasi.", audience: ["Masjid", "Musholla", "Pesantren", "Panti asuhan", "Yayasan Islam"], includes: ["Profil", "Jadwal kajian", "Ustadz", "Program", "Artikel", "Gallery", "Donasi", "Rekening", "Contact"], addons: "CMS mulai Rp799K+. Sistem donasi, program, atau member mulai Rp2,5JT+." },
      { name: "Education", price: "Rp799K", icon: "education", summary: "Website sekolah, pesantren, kursus, dan lembaga pendidikan.", audience: ["Sekolah", "Pesantren", "Kursus", "Bimbel"], includes: ["Profil", "Program", "Guru / staff", "Berita", "Gallery", "Agenda", "Contact"], addons: "School System mulai Rp2,5JT+ untuk siswa, staff, absensi, pembayaran, dokumen, dan dashboard." },
      { name: "Restaurant / Culinary", price: "Rp499K", icon: "culinary", summary: "Menu, promo, lokasi, reservasi, dan pemesanan.", audience: ["Cafe", "Restaurant", "Bakery", "Catering", "Food brand"], includes: ["Profile", "Menu", "Gallery", "Promo", "Maps", "Reservation / WhatsApp"], addons: "Online Ordering Rp1,099JT+. Full Ordering System Rp2,499JT+." },
      { name: "Property", price: "Rp1,099JT", icon: "property", summary: "Listing properti dengan detail, lokasi, dan CTA agent.", audience: ["Developer", "Property agent", "Kost", "Apartment", "Real estate"], includes: ["Listing", "Search / filter", "Detail", "Gallery", "Location", "CTA agent", "CMS"], addons: "Dashboard agent, booking, dan CRM mulai Rp2,5JT+." },
      { name: "Hotel / Villa", price: "Rp1,099JT", icon: "hotel", summary: "Profil penginapan, kamar, fasilitas, dan jalur booking.", audience: ["Hotel", "Villa", "Guest house", "Penginapan"], includes: ["Property profile", "Rooms", "Facilities", "Gallery", "Location", "Pricing", "CTA booking"], addons: "Booking System mulai Rp2,5JT+ dengan availability, reservation, guest data, payment, dan dashboard." },
      { name: "Portal / Media", price: "Rp1,499JT", icon: "media", summary: "Publikasi berita dengan CMS dan workflow editorial.", includes: ["CMS", "Category", "Article", "Author", "Search", "Trending / recent", "SEO", "Social sharing", "Admin dashboard"], note: "Harga menyesuaikan jumlah penulis, traffic, iklan, dan workflow editorial." },
      { name: "Healthcare", price: "Rp1,499JT", icon: "healthcare", summary: "Profil klinik, dokter, layanan, jadwal, dan booking inquiry.", includes: ["Dokter", "Layanan", "Jadwal", "Artikel", "Contact", "Booking inquiry"], note: "Data pasien, rekam medis, prescription, dan clinical workflow masuk Custom Healthcare System dengan quotation khusus." },
    ],
  },
  {
    id: "commerce-event",
    number: "02",
    title: "Commerce & Event",
    description: "Produk, transaksi, registrasi, dan pengalaman customer.",
    plans: [
      { name: "Product Catalog", price: "Rp1,099JT", icon: "catalog", summary: "Katalog milik brand dengan order melalui WhatsApp.", audience: ["Brand", "Toko", "Reseller", "UMKM"], includes: ["Produk", "Kategori", "Detail produk", "CTA WhatsApp", "CMS"] },
      { name: "E-Commerce", price: "Rp2,499JT", icon: "commerce", summary: "Online store dengan checkout, pembayaran, dan dashboard.", includes: ["Cart", "Checkout", "Order", "Payment gateway", "Dashboard"], addons: "E-Commerce Pro Rp5,499JT+ dengan inventory, promo, voucher, shipping, report, dan customer management.", featured: true },
      { name: "Event Website", price: "Rp749K", icon: "event", summary: "Informasi dan promosi event dalam satu halaman.", includes: ["Event overview", "Agenda", "Speaker", "Venue", "Sponsor", "FAQ", "CTA registrasi"] },
      { name: "Event Registration", price: "Rp1,499JT", icon: "registration", summary: "Registrasi, database peserta, dan dashboard admin.", includes: ["Event website", "Registration form", "Database peserta", "Dashboard", "Search / filter", "Export"] },
      { name: "Event Ticketing", price: "Rp3,499JT", icon: "ticketing", summary: "Pembayaran, tiket digital, QR, scanner, dan attendance.", includes: ["Checkout", "Payment", "Digital ticket", "QR unik", "Scanner", "Attendance", "Sales dashboard"] },
    ],
  },
  {
    id: "business-software",
    number: "03",
    title: "Business Software",
    description: "Digitalisasi booking dan proses operasional yang masih manual.",
    plans: [
      { name: "Booking / Rental", price: "Rp1,099JT", icon: "booking", summary: "Website dan sistem booking untuk rental atau layanan terjadwal.", audience: ["Rental mobil", "Rental motor", "Lapangan", "Barber", "Salon", "Venue", "Equipment rental"], includes: ["Profil layanan", "Unit / fasilitas", "Harga", "CTA WhatsApp", "Form booking"], addons: "Booking System Rp2,5JT+ dengan availability, schedule, customer, booking, status, dan payment." },
      { name: "Business System", price: "Rp2,5JT", icon: "business", summary: "Ganti Excel, WhatsApp, dan pencatatan manual dengan satu dashboard.", includes: ["Database", "Admin dashboard", "Customer management", "Transaction / request", "Status", "Search / filter", "Basic report", "Export"], examples: ["CRM", "Booking", "POS", "Laundry", "Rental", "Inventory", "Membership"], featured: true },
      { name: "Operational System", price: "Rp5JT", icon: "operations", summary: "Sistem multi-user dengan workflow, dokumen, dan audit trail.", includes: ["Multi user", "Staff", "Customer", "Roles", "Transaction", "Workflow", "Documents", "Notification", "Reporting", "Audit trail"], examples: ["Travel operations", "Distributor", "Procurement", "Administrasi pendidikan"] },
    ],
  },
  {
    id: "enterprise",
    number: "04",
    title: "Enterprise",
    description: "Corporate solution, institusi publik, dan software khusus.",
    plans: [
      { name: "Government", price: "Rp5,499JT", icon: "government", summary: "Website instansi, publikasi, dokumen, dan aksesibilitas dasar.", includes: ["Profile", "Organization", "News", "Agenda", "Documents", "Announcement", "CMS", "Basic accessibility"], addons: "Digital Public Service mulai Rp10JT+ untuk pengajuan, tracking, verification, approval, dan staff dashboard." },
      { name: "Custom Software", price: "Custom", icon: "custom", summary: "Produk digital kompleks dengan discovery dan quotation khusus.", audience: ["SaaS", "ERP", "Marketplace", "Client portal", "Mobile app", "Multi-vendor", "Multi-branch", "AI application"], includes: ["Discovery", "Module breakdown", "Workflow", "Architecture", "Integration", "Security & infrastructure", "Timeline", "Quotation"], featured: true },
    ],
  },
];

export const pricingPlans = pricingGroups.flatMap((group) => group.plans);

export const getPricingPlanId = (name: string) =>
  `plan-${name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;

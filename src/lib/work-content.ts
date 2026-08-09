import type { Localized } from "./types";

export const workSlugs = ["saudi-education-expo", "umrah-operations-platform", "ajwa-date-store"] as const;
export type WorkSlug = (typeof workSlugs)[number];

export type WorkProject = {
  slug: WorkSlug;
  title: string;
  category: Localized;
  year: string;
  image: string;
  overview: Localized;
  challenge: Localized;
  built: Localized;
  experience: Localized;
  features: readonly string[];
  outcome: Localized;
  next: WorkSlug;
};

export const workProjects: Record<WorkSlug, WorkProject> = {
  "saudi-education-expo": {
    slug: "saudi-education-expo", title: "Saudi Education Expo", category: { id: "Event Platform", en: "Event Platform" }, year: "2026", image: "/images/work/saudi-education-expo.webp",
    overview: { id: "Platform digital untuk memperkenalkan Saudi Education Expo dan membantu calon peserta memahami event melalui satu experience yang terstruktur.", en: "A digital platform introducing Saudi Education Expo and helping prospective attendees understand the event through one structured experience." },
    challenge: { id: "Informasi event, program, exhibitor, dan registrasi perlu disusun agar tetap mudah dipindai meskipun kontennya beragam.", en: "Event, programme, exhibitor, and registration information needed a structure that remained easy to scan despite varied content." },
    built: { id: "Website event responsif dengan hierarchy editorial, content sections yang jelas, dan jalur registrasi yang terlihat tanpa mengganggu informasi utama.", en: "A responsive event website with editorial hierarchy, clear content sections, and visible registration paths without overwhelming the core information." },
    experience: { id: "Pengunjung bergerak dari pemahaman event menuju program, exhibitor, dan keputusan untuk mendaftar.", en: "Visitors move from understanding the event toward programmes, exhibitors, and the decision to register." },
    features: ["Event overview", "Programme information", "Exhibitor presentation", "Registration CTA", "Responsive experience", "Content hierarchy"],
    outcome: { id: "Satu platform publik yang menyatukan informasi utama event dan jalur registrasi. Metric performa tidak dipublikasikan tanpa data yang terverifikasi.", en: "One public platform combining core event information and registration paths. Performance metrics are not published without verified data." },
    next: "umrah-operations-platform",
  },
  "umrah-operations-platform": {
    slug: "umrah-operations-platform", title: "Umrah Operations Platform", category: { id: "Business System", en: "Business System" }, year: "2026", image: "/images/work/operations-dashboard.webp",
    overview: { id: "Working interface untuk membantu tim melihat aktivitas operasional, data penting, dan status pekerjaan dalam satu tempat.", en: "A working interface helping teams view operational activity, key data, and work status in one place." },
    challenge: { id: "Informasi operasional yang tersebar membuat status dan prioritas lebih sulit dipahami oleh tim.", en: "Distributed operational information made status and priorities harder for the team to understand." },
    built: { id: "Dashboard operasional dengan summary, navigation yang konsisten, data views, dan struktur yang dapat dikembangkan mengikuti workflow.", en: "An operational dashboard with summaries, consistent navigation, data views, and a structure that can grow with the workflow." },
    experience: { id: "Tim masuk melalui overview, memeriksa status, lalu berpindah ke data atau tindakan yang relevan.", en: "Teams enter through an overview, review status, and move into the relevant data or action." },
    features: ["Operational overview", "Status summary", "Data views", "Structured navigation", "Responsive dashboard", "Role-ready foundation"],
    outcome: { id: "Satu surface kerja yang lebih terstruktur untuk melihat operasi. Detail internal dan metric tidak dipublikasikan untuk menjaga konteks project.", en: "A more structured working surface for operational visibility. Internal details and metrics are not published to preserve project context." },
    next: "ajwa-date-store",
  },
  "ajwa-date-store": {
    slug: "ajwa-date-store", title: "Ajwa Date Store", category: { id: "E-Commerce", en: "E-Commerce" }, year: "2026", image: "/images/work/ajwa-date-store.webp",
    overview: { id: "Commerce experience untuk produk kurma premium dengan fokus pada trust, product presentation, dan jalur pembelian yang jelas.", en: "A commerce experience for premium dates focused on trust, product presentation, and a clear purchase path." },
    challenge: { id: "Produk perlu terasa premium dan meyakinkan tanpa membuat pengalaman belanja menjadi berat atau membingungkan.", en: "The product needed to feel premium and credible without making the shopping experience heavy or confusing." },
    built: { id: "Storefront responsif dengan visual direction yang bersih, product storytelling, catalogue, dan purchase CTA yang mudah ditemukan.", en: "A responsive storefront with a clean visual direction, product storytelling, catalogue, and easy-to-find purchase calls to action." },
    experience: { id: "Customer memahami value produk, mengeksplorasi pilihan, lalu bergerak menuju pembelian melalui alur yang ringkas.", en: "Customers understand product value, explore options, and move toward purchase through a concise journey." },
    features: ["Product catalogue", "Product storytelling", "Purchase flow", "Trust content", "Mobile experience", "Commerce foundation"],
    outcome: { id: "Aset commerce yang membawa presentasi brand dan proses penjualan ke dalam experience milik bisnis sendiri. Metric penjualan tidak dipublikasikan tanpa data terverifikasi.", en: "A commerce asset bringing brand presentation and the sales process into a business-owned experience. Sales metrics are not published without verified data." },
    next: "saudi-education-expo",
  },
};

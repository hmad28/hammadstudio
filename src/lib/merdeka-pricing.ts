import type { PricingIcon } from "./pricing-catalog";

export type MerdekaPlan = {
  name: string;
  regularValue?: string;
  price: string;
  numericPrice?: number;
  summary: string;
  icon: PricingIcon;
  features: string[];
  badge?: string;
  cta: string;
  featured?: boolean;
};

export const merdekaFeaturedPlans: MerdekaPlan[] = [
  {
    name: "Landing Page",
    regularValue: "Rp799.000",
    price: "Rp499.000",
    numericPrice: 499_000,
    summary: "Untuk campaign, iklan, jasa, produk, dan promosi bisnis.",
    icon: "landing",
    features: ["Modern & responsive", "Hingga 5–8 section", "WhatsApp CTA", "Basic SEO", "Hosting + SSL"],
    badge: "PROMO MERDEKA",
    cta: "Klaim promo",
  },
  {
    name: "Tour & Travel",
    regularValue: "Rp799.000",
    price: "Rp499.000+",
    numericPrice: 499_000,
    summary: "Untuk travel, umrah, tour, dan perjalanan.",
    icon: "travel",
    features: ["Profil travel", "Paket perjalanan", "Fasilitas", "Galeri & testimoni", "WhatsApp CTA", "Responsive"],
    badge: "BEST SELLER",
    cta: "Buat website travel",
  },
  {
    name: "Company Profile",
    regularValue: "Rp1.799.000",
    price: "Rp1.099.000+",
    numericPrice: 1_099_000,
    summary: "Untuk UMKM, CV, PT, dan bisnis berkembang.",
    icon: "company",
    features: ["Multipage", "Company profile", "Service / product", "Portfolio", "Analytics", "SEO foundation"],
    badge: "PALING POPULER",
    cta: "Upgrade bisnis",
    featured: true,
  },
  {
    name: "E-Commerce",
    regularValue: "Rp3.999.000",
    price: "Rp2.499.000+",
    numericPrice: 2_499_000,
    summary: "Mulai jualan langsung dari website sendiri.",
    icon: "commerce",
    features: ["Product management", "Cart & checkout", "Order management", "Payment gateway", "Admin dashboard", "Customer management"],
    cta: "Mulai jualan online",
  },
  {
    name: "Business System",
    regularValue: "Rp3.999.000",
    price: "Rp2.500.000+",
    numericPrice: 2_500_000,
    summary: "Satukan pekerjaan manual menjadi satu sistem.",
    icon: "business",
    features: ["Admin dashboard", "Database", "Customer management", "Workflow", "Transaction / request", "Reports"],
    badge: "FOR GROWING BUSINESS",
    cta: "Digitalisasi bisnis",
  },
  {
    name: "Corporate Website",
    regularValue: "Rp3.999.000",
    price: "Rp2.500.000+",
    numericPrice: 2_500_000,
    summary: "Digital presence yang kredibel untuk perusahaan.",
    icon: "company",
    features: ["Corporate CMS", "Services / products", "Portfolio / case study", "News / insight", "Lead form", "SEO & analytics"],
    cta: "Konsultasi corporate",
  },
];

export const merdekaOtherPlans: MerdekaPlan[] = [
  { name: "Organization / Institution", regularValue: "Rp799.000", price: "Rp499.000+", numericPrice: 499_000, summary: "Profil dan informasi lembaga.", icon: "organization", features: [], cta: "Lihat detail" },
  { name: "Education", regularValue: "Rp1.299.000", price: "Rp799.000+", numericPrice: 799_000, summary: "Sekolah dan lembaga pendidikan.", icon: "education", features: [], cta: "Lihat detail" },
  { name: "Restaurant / Culinary", regularValue: "Rp799.000", price: "Rp499.000+", numericPrice: 499_000, summary: "Menu, promo, lokasi, dan order.", icon: "culinary", features: [], cta: "Lihat detail" },
  { name: "Property", regularValue: "Rp1.799.000", price: "Rp1.099.000+", numericPrice: 1_099_000, summary: "Listing dan inquiry properti.", icon: "property", features: [], cta: "Lihat detail" },
  { name: "Hotel / Villa", regularValue: "Rp1.799.000", price: "Rp1.099.000+", numericPrice: 1_099_000, summary: "Profil kamar dan jalur booking.", icon: "hotel", features: [], cta: "Lihat detail" },
  { name: "Product Catalog", regularValue: "Rp1.799.000", price: "Rp1.099.000+", numericPrice: 1_099_000, summary: "Katalog produk milik brand.", icon: "catalog", features: [], cta: "Lihat detail" },
  { name: "Event Website", regularValue: "Rp1.199.000", price: "Rp749.000+", numericPrice: 749_000, summary: "Informasi dan promosi event.", icon: "event", features: [], cta: "Lihat detail" },
  { name: "Event Registration", regularValue: "Rp2.499.000", price: "Rp1.499.000+", numericPrice: 1_499_000, summary: "Database peserta dan dashboard.", icon: "registration", features: [], cta: "Lihat detail" },
  { name: "Event Ticketing", regularValue: "Rp5.999.000", price: "Rp3.499.000+", numericPrice: 3_499_000, summary: "Payment, QR, dan attendance.", icon: "ticketing", features: [], cta: "Lihat detail" },
  { name: "Portal / Media", regularValue: "Rp2.499.000", price: "Rp1.499.000+", numericPrice: 1_499_000, summary: "CMS dan workflow publikasi.", icon: "media", features: [], cta: "Lihat detail" },
  { name: "Booking / Rental System", regularValue: "Rp3.999.000", price: "Rp2.500.000+", numericPrice: 2_500_000, summary: "Availability, booking, dan payment.", icon: "booking", features: [], cta: "Lihat detail" },
  { name: "Operational System", regularValue: "Rp7.999.000", price: "Rp5.000.000+", numericPrice: 5_000_000, summary: "Workflow multi-user dan reporting.", icon: "operations", features: [], cta: "Lihat detail" },
  { name: "Government Website", regularValue: "Rp8.999.000", price: "Rp5.499.000+", numericPrice: 5_499_000, summary: "Portal informasi institusi publik.", icon: "government", features: [], cta: "Lihat detail" },
  { name: "Digital Public Service", regularValue: "Rp15.999.000", price: "Rp10.000.000+", numericPrice: 10_000_000, summary: "Pengajuan, verifikasi, dan tracking.", icon: "government", features: [], cta: "Lihat detail" },
  { name: "Custom Software", price: "Custom quotation", summary: "SaaS, ERP, marketplace, dan platform khusus.", icon: "custom", features: [], cta: "Diskusikan scope" },
];

export const merdekaPlans = [...merdekaFeaturedPlans, ...merdekaOtherPlans];

export const getMerdekaPlanId = (name: string) =>
  `paket-${name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;

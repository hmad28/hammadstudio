import type { Metadata } from "next";
import { SEOServicePage } from "@/components/seo-service-page";
import { companyFaqs } from "@/lib/seo-landing-content";
import { createPageMetadata } from "@/lib/seo";
import { createServiceJsonLd } from "@/lib/structured-data";

const path = "/website-custom";
const title = "Jasa Pembuatan Website Custom";
const description = "Jasa pembuatan website custom untuk workflow, integrasi, dashboard, commerce, portal, dan kebutuhan bisnis yang tidak cocok dipaksakan ke template.";

export const metadata: Metadata = createPageMetadata({ title, description, path });

const deliverables = ["Discovery dan workflow mapping", "Information architecture dan user flow", "UI/UX sesuai brand dan kebutuhan user", "Frontend server-rendered atau statis", "CMS, database, API, atau integrasi sesuai scope", "Authentication, role, dan permission bila dibutuhkan", "Analytics, SEO-ready foundation, dan performance", "QA, deployment, dokumentasi, dan handover"] as const;
const proofs = [
  { name: "Masjid Raya Puri Telukjambe", detail: "Platform terintegrasi untuk informasi, jadwal, donasi, layanan jamaah, livestream, dan fasilitas.", href: "/work/masjid-raya-puri-telukjambe" },
  { name: "StudyShare", detail: "Aplikasi kolaboratif dengan akun, kontribusi materi, kategori, dan discovery content.", href: "/work/studyshare" },
  { name: "CPX Jersey", detail: "Commerce flow custom untuk katalog jersey, kategori olahraga, cart, custom order, dan marketplace.", href: "/work/cpx-jersey" },
] as const;

export default function WebsiteCustomPage() {
  const jsonLd = createServiceJsonLd(title, description, path, companyFaqs);
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} /><SEOServicePage eyebrow="WEBSITE & SOFTWARE CUSTOM" title="Solusi digital yang mengikuti workflow bisnis Anda." intro="Website custom digunakan ketika kebutuhan bisnis tidak cukup diselesaikan oleh template atau paket standar. Arsitektur, interface, data, integrasi, serta tahap pengembangan disusun dari masalah dan prioritas yang benar-benar ada." audience="Cocok untuk bisnis yang membutuhkan customer portal, dashboard, booking, commerce flow khusus, member area, workflow internal, integrasi API, atau produk digital yang akan dikembangkan bertahap." outcomes={["Fitur mengikuti workflow dan role pengguna yang nyata.", "Sistem dapat diintegrasikan dengan layanan yang sudah digunakan.", "Scope dapat diprioritaskan menjadi fase yang lebih terukur.", "Ownership, dokumentasi, dan jalur pengembangan dijelaskan sejak awal."]} deliverables={deliverables} proofs={proofs} faqs={companyFaqs} startingPrice="Business Apps dimulai dari Booking Rp 2,499 juta atau Business Rp 2,999 juta. Operational mulai Rp 5,999 juta dan Custom menggunakan quotation setelah discovery." relatedLinks={[{ href: "/solusi/perusahaan/sistem-custom-dashboard", label: "Dashboard perusahaan", description: "Untuk workflow, data, role, approval, dan reporting internal." }, { href: "/jasa-web-app", label: "Web application", description: "Untuk portal, member area, booking, registrasi, dan aplikasi berbasis browser." }, { href: "/harga-website", label: "Harga dan paket", description: "Lihat titik awal paket sebelum menyusun scope custom." }]} /></>;
}

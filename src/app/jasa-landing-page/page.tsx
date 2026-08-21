import { SEOServicePage } from "@/components/seo-service-page";
import { createPageMetadata } from "@/lib/seo";
import { createServiceJsonLd } from "@/lib/structured-data";

const path = "/jasa-landing-page";
const title = "Jasa Pembuatan Landing Page untuk Bisnis";
const description = "Jasa pembuatan landing page untuk iklan, campaign, produk, dan lead generation dengan CTA WhatsApp, form, analytics, performa, dan SEO foundation.";

const faqs = [
  { question: "Apa bedanya landing page dan website company profile?", answer: "Landing page berfokus pada satu campaign dan satu tindakan utama, seperti mengisi form atau membuka WhatsApp. Website company profile menjelaskan bisnis secara lebih lengkap melalui beberapa halaman." },
  { question: "Berapa harga pembuatan landing page?", answer: "Website mulai Rp499.000 untuk scope standar maksimal lima halaman utama. Harga final mengikuti kebutuhan copy, visual, form, analytics, integrasi, dan kompleksitas campaign." },
  { question: "Apakah landing page bisa digunakan untuk Google Ads atau Meta Ads?", answer: "Bisa. Struktur pesan, CTA, form, analytics, dan conversion event dapat disiapkan agar traffic campaign masuk ke halaman yang fokus dan dapat diukur." },
  { question: "Apakah landing page bisa terhubung ke WhatsApp?", answer: "Bisa. CTA dapat membuka WhatsApp dengan pesan awal yang relevan, atau menggunakan form bila bisnis perlu mengumpulkan data calon customer lebih dulu." },
  { question: "Berapa lama pengerjaan landing page?", answer: "Scope standar umumnya membutuhkan 7–14 hari kerja, tergantung kesiapan materi, kebutuhan desain, integrasi, dan proses revisi." },
] as const;

export const metadata = createPageMetadata({ title, description, path });

export default function LandingPageServicePage() {
  const jsonLd = createServiceJsonLd(title, description, path, faqs);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <SEOServicePage
        eyebrow="LANDING PAGE UNTUK CAMPAIGN"
        title="Satu halaman. Satu pesan. Satu tindakan yang jelas."
        intro="Hammad Studio membuat landing page untuk menghubungkan iklan, penawaran, bukti, FAQ, dan CTA dalam alur yang singkat, cepat, serta mudah diukur."
        audience="Untuk ads, promo produk, launching, jasa, event, property sales, dan campaign lain yang membutuhkan destination page tanpa distraksi."
        outcomes={["Pesan iklan tetap konsisten setelah pengunjung mengklik.", "Calon customer memahami penawaran sebelum membuka WhatsApp.", "Klik CTA dan form dapat dicatat sebagai conversion.", "Halaman ringan dan nyaman digunakan dari perangkat mobile."]}
        deliverables={["Campaign discovery dan tujuan conversion", "Struktur pesan dan content hierarchy", "Responsive landing page", "CTA WhatsApp atau lead form", "Analytics dan conversion events", "Metadata, canonical, sitemap, dan indexability", "Performance optimization", "Deployment dan handover"]}
        proofs={[{ name: "NaikLevel AI", detail: "Landing produk edukasi dengan alur penawaran, pembayaran, dan konfirmasi.", href: "/work/naiklevel-ai" }, { name: "JamWisata", detail: "Journey travel dari pencarian paket menuju konsultasi.", href: "/work/jamwisata" }, { name: "Drivemate", detail: "Presentasi layanan rental dan jalur booking yang mudah dipahami.", href: "/work/drivemate" }]}
        faqs={faqs}
        startingPrice="Website mulai Rp 499 ribu, termasuk domain .com satu tahun, hosting, SSL, responsive layout, dan basic SEO sesuai ketentuan paket."
        relatedLinks={[{ href: "/jasa-website-company-profile", label: "Company Profile", description: "Untuk profil bisnis dan layanan yang membutuhkan beberapa halaman." }, { href: "/jasa-website-umkm", label: "Website UMKM", description: "Untuk aset digital bisnis yang dapat berkembang bertahap." }, { href: "/harga-website", label: "Harga Website", description: "Bandingkan Website, CMS, Commerce, dan Business Apps." }]}
        primaryCta={{ href: "https://wa.me/6285199391215?text=Halo%20Hammad%20Studio%2C%20saya%20ingin%20konsultasi%20landing%20page.", label: "Konsultasi landing page", external: true }}
      />
    </>
  );
}

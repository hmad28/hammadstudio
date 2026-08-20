import { SEOServicePage } from "@/components/seo-service-page";
import { createPageMetadata } from "@/lib/seo";
import { companyFaqs } from "@/lib/seo-landing-content";
import { createServiceJsonLd } from "@/lib/structured-data";

const path = "/jasa-web-app";
const title = "Jasa Pembuatan Web App dan Dashboard Custom";
const description = "Jasa pembuatan web app, dashboard, portal, booking, CRM, POS, inventory, dan sistem bisnis custom dengan role, database, workflow, serta integrasi API.";

export const metadata = createPageMetadata({ title, description, path });

export default function WebApplicationServicePage() {
  const jsonLd = createServiceJsonLd(title, description, path, companyFaqs);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <SEOServicePage
        eyebrow="WEB APP & BUSINESS SYSTEM"
        title="Saat bisnis membutuhkan fungsi, data, dan workflow—bukan halaman saja."
        intro="Hammad Studio membangun aplikasi berbasis web untuk proses yang melibatkan pengguna, database, status, transaksi, dokumen, dashboard, dan integrasi."
        audience="Untuk booking, CRM, POS, ticketing, membership, LMS, inventory, rental, portal pelanggan, dan sistem operasional yang perlu diakses melalui browser."
        outcomes={["Workflow bisnis diterjemahkan menjadi alur yang jelas.", "Data, status, dan aktivitas lebih mudah ditelusuri.", "Role serta permission mengikuti tanggung jawab pengguna.", "Fitur dapat diprioritaskan dan dikembangkan bertahap."]}
        deliverables={["Discovery dan workflow mapping", "Requirement serta acceptance criteria", "Information architecture dan user flow", "Database dan business logic", "Authentication, role, dan permission", "Dashboard dan operational flow", "API serta integrasi sesuai scope", "QA, deployment, dokumentasi, dan handover"]}
        proofs={[{ name: "StudyShare", detail: "Platform dengan akun, kontribusi materi, kategori, dan pencarian konten.", href: "/work/studyshare" }, { name: "Masjid Raya Puri Telukjambe", detail: "Platform layanan jamaah, jadwal, donasi, livestream, dan booking fasilitas.", href: "/work/masjid-raya-puri-telukjambe" }, { name: "Drivemate", detail: "Produk digital rental dengan alur pencarian dan booking kendaraan.", href: "/work/drivemate" }]}
        faqs={companyFaqs}
        startingPrice="Business Apps dimulai dari Booking System Rp 2,499 juta. Operational System mulai Rp 5,999 juta+; kebutuhan unik menggunakan custom quotation setelah discovery."
        relatedLinks={[{ href: "/website-custom", label: "Custom Software", description: "Untuk SaaS, platform, atau integrasi yang tidak cocok dengan paket standar." }, { href: "/solusi/perusahaan/sistem-custom-dashboard", label: "Dashboard Perusahaan", description: "Untuk workflow, role, approval, dan reporting internal." }, { href: "/harga-website#business-apps", label: "Harga Business Apps", description: "Lihat titik awal Booking, POS, Ticketing, CRM, LMS, dan sistem lain." }]}
        primaryCta={{ href: "/contact", label: "Petakan kebutuhan sistem" }}
      />
    </>
  );
}

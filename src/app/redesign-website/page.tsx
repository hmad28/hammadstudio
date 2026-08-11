import { SEOServicePage } from "@/components/seo-service-page";
import { createPageMetadata } from "@/lib/seo";
import { companyFaqs } from "@/lib/seo-landing-content";
import { createServiceJsonLd } from "@/lib/structured-data";

const path = "/redesign-website";
const title = "Jasa Redesign Website Perusahaan";
const description = "Jasa redesign dan revamp website perusahaan untuk memperbaiki kredibilitas, struktur konten, performa, SEO foundation, dan jalur inquiry.";

export const metadata = createPageMetadata({ title, description, path });

export default function WebsiteRedesignPage() {
  const jsonLd = createServiceJsonLd(title, description, path, companyFaqs);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <SEOServicePage
        eyebrow="REDESIGN WEBSITE"
        title="Ubah website lama menjadi aset bisnis yang kembali relevan."
        intro="Redesign bukan sekadar mengganti warna. Kami meninjau ulang struktur informasi, pesan, user journey, teknologi, performa, dan fondasi SEO sebelum membangun pengalaman yang lebih efektif."
        audience="Untuk perusahaan yang websitenya sudah sulit dikelola, lambat, tidak nyaman di mobile, tidak mencerminkan kualitas bisnis, atau tidak lagi mendukung proses marketing dan inquiry."
        outcomes={["Pesan dan layanan utama lebih cepat dipahami.", "Tampilan kembali sejalan dengan posisi perusahaan saat ini.", "Performa, struktur SEO, dan pengalaman mobile diperbaiki.", "Migrasi direncanakan agar URL penting dan equity pencarian tetap terjaga."]}
        deliverables={["Audit konten, UX, performa, dan indexability", "Inventaris URL dan rencana redirect 301", "Information architecture dan content hierarchy baru", "UI/UX responsif berdasarkan brand", "Development dan migrasi konten", "Metadata, canonical, sitemap, dan structured data", "Analytics serta conversion event", "QA dan monitoring pascapeluncuran"]}
        proofs={[{ name: "ADD Logistik", detail: "Presentasi layanan logistik B2B dengan struktur informasi yang lebih jelas.", href: "/work/add-logistik" }, { name: "Solivate", detail: "Website perusahaan teknologi dengan positioning dan pengalaman visual yang diperbarui.", href: "/work/solivate" }, { name: "Sahabat Qolbu", detail: "Website travel yang memusatkan trust, paket, dan journey konsultasi.", href: "/work/sahabat-qolbu" }]}
        faqs={companyFaqs}
      />
    </>
  );
}

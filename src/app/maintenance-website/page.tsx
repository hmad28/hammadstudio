import { SEOServicePage } from "@/components/seo-service-page";
import { createPageMetadata } from "@/lib/seo";
import { companyFaqs } from "@/lib/seo-landing-content";
import { createServiceJsonLd } from "@/lib/structured-data";

const path = "/maintenance-website";
const title = "Jasa Maintenance dan Perawatan Website";
const description = "Jasa maintenance website untuk update teknis, monitoring, backup, bug fixing, perubahan konten, performa, dan support berkelanjutan sesuai scope.";

export const metadata = createPageMetadata({ title, description, path });

export default function WebsiteMaintenancePage() {
  const jsonLd = createServiceJsonLd(title, description, path, companyFaqs);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <SEOServicePage
        eyebrow="MAINTENANCE WEBSITE"
        title="Website tetap sehat setelah hari peluncuran."
        intro="Maintenance memberi website owner teknis yang jelas untuk menangani pembaruan, risiko, bug, backup, performa, dan improvement yang muncul setelah website digunakan."
        audience="Untuk bisnis yang sudah memiliki website dan membutuhkan technical health check, dukungan rutin, atau jalur eskalasi yang lebih terstruktur."
        outcomes={["Masalah memiliki owner dan prioritas yang jelas.", "Dependency, backup, dan risiko teknis diperiksa berkala.", "Perubahan konten serta improvement tidak menumpuk.", "Aktivitas dukungan dapat dirangkum dan dikonfirmasi."]}
        deliverables={["Technical health check", "Dependency dan security updates", "Backup serta recovery review", "Bug fixing berdasarkan prioritas", "Content update sesuai allowance", "Performance monitoring", "Activity summary", "Response time sesuai kesepakatan"]}
        proofs={[{ name: "ADD Logistik", detail: "Website corporate yang menjadi rujukan layanan dan inquiry perusahaan.", href: "/work/add-logistik" }, { name: "Solivate", detail: "Website teknologi dengan presentasi layanan yang terus berkembang.", href: "/work/solivate" }, { name: "Redesign Website", detail: "Audit dan perbaikan menyeluruh untuk website yang sudah tertinggal.", href: "/redesign-website" }]}
        faqs={companyFaqs}
        startingPrice="Biaya maintenance mengikuti stack, kondisi website, frekuensi update, response time, dan risiko operasional. Audit awal dilakukan sebelum scope dukungan disepakati."
        relatedLinks={[{ href: "/redesign-website", label: "Redesign Website", description: "Untuk perbaikan besar pada struktur, desain, performa, dan SEO." }, { href: "/jasa-website-company-profile", label: "Company Profile", description: "Untuk rebuild website perusahaan dengan fondasi baru." }, { href: "/insight/checklist-keamanan-website-perusahaan", label: "Checklist Keamanan", description: "Hal yang perlu diperiksa pada website perusahaan." }]}
        primaryCta={{ href: "/contact", label: "Minta technical check" }}
      />
    </>
  );
}

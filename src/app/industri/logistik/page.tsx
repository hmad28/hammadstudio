import { SEOServicePage } from "@/components/seo-service-page";
import { createPageMetadata } from "@/lib/seo";
import { companyFaqs } from "@/lib/seo-landing-content";
import { createServiceJsonLd } from "@/lib/structured-data";

const path = "/industri/logistik";
const title = "Jasa Website Perusahaan Logistik";
const description = "Website company profile untuk perusahaan logistik, trucking, distribusi, dan freight forwarding yang menjelaskan layanan, coverage, armada, dan jalur inquiry B2B.";

export const metadata = createPageMetadata({ title, description, path });

export default function LogisticsWebsitePage() {
  const jsonLd = createServiceJsonLd(title, description, path, companyFaqs);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <SEOServicePage
        eyebrow="WEBSITE INDUSTRI LOGISTIK"
        title="Buat layanan dan kapabilitas logistik lebih mudah dinilai calon klien."
        intro="Website perusahaan logistik harus menjawab kebutuhan buyer B2B dengan cepat: jenis layanan, area coverage, jenis armada, kapabilitas operasional, dan cara meminta penawaran."
        audience="Untuk perusahaan trucking, distribusi, freight forwarding, pergudangan, dan penyedia layanan logistik yang membutuhkan company profile digital dengan jalur inquiry yang jelas."
        outcomes={["Service coverage dan kapabilitas operasional mudah dipahami.", "Calon klien dapat menemukan jalur RFQ atau inquiry dengan cepat.", "Dokumen, armada, dan proof perusahaan tersusun lebih kredibel.", "Tim sales memiliki halaman resmi yang mudah dibagikan."]}
        deliverables={["Struktur layanan dan area coverage", "Company profile dan trust signals", "Showcase armada atau kapabilitas", "RFQ, form inquiry, atau WhatsApp", "Download profil perusahaan bila diperlukan", "Halaman project dan pelanggan relevan", "SEO foundation untuk service pages", "Analytics dan tracking inquiry"]}
        proofs={[{ name: "ADD Logistik", detail: "Website company profile untuk menjelaskan layanan dan membangun kredibilitas perusahaan logistik.", href: "/work/add-logistik" }, { name: "Buraq Logistik", detail: "Website corporate untuk trucking, distribusi regional, coverage, dan kapabilitas operasional.", href: "/work/buraq-logistik" }, { name: "Company Profile", detail: "Lihat pendekatan lengkap untuk kebutuhan website perusahaan B2B.", href: "/jasa-website-company-profile" }]}
        faqs={companyFaqs}
        startingPrice="Website perusahaan logistik dimulai dari Website Rp 499 ribu atau CMS Rp 899 ribu. RFQ, multilingual, dokumen, dan integrasi mengikuti scope."
        primaryCta={{ href: "/contact", label: "Minta proposal" }}
        leadMagnet={{ href: "/downloads/checklist-revamp-website-perusahaan.pdf", label: "Unduh checklist PDF" }}
      />
    </>
  );
}

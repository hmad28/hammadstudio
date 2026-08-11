import { SEOServicePage } from "@/components/seo-service-page";
import { createPageMetadata } from "@/lib/seo";
import { companyFaqs, proofProjects, sharedDeliverables } from "@/lib/seo-landing-content";
import { createServiceJsonLd } from "@/lib/structured-data";

const path = "/jasa-website-company-profile";
const title = "Jasa Website Company Profile Perusahaan";
const description = "Jasa pembuatan website company profile untuk perusahaan yang membutuhkan kredibilitas, struktur layanan yang jelas, dan fondasi SEO profesional.";

export const metadata = createPageMetadata({ title, description, path });

export default function CompanyProfileWebsitePage() {
  const jsonLd = createServiceJsonLd(title, description, path, companyFaqs);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <SEOServicePage
        eyebrow="WEBSITE COMPANY PROFILE"
        title="Presentasi digital perusahaan yang layak dipercaya."
        intro="Kami menyusun website company profile yang membuat kapabilitas, layanan, pengalaman, dan jalur inquiry perusahaan mudah dinilai oleh calon klien maupun partner."
        audience="Untuk perusahaan jasa, logistik, travel, kontraktor, manufaktur, dan organisasi yang membutuhkan kehadiran resmi dengan presentasi brand yang kuat dan mudah dikembangkan."
        outcomes={["Profil perusahaan dan kapabilitas tersampaikan secara terstruktur.", "Calon klien lebih mudah menilai relevansi dan kredibilitas.", "Layanan memiliki halaman yang dapat ditemukan dan dibagikan.", "Inquiry diarahkan ke kontak atau tim yang tepat."]}
        deliverables={sharedDeliverables}
        proofs={[proofProjects[1], { name: "Buraq Logistik", detail: "Website corporate untuk layanan trucking, distribusi, dan cakupan operasional.", href: "/work/buraq-logistik" }, { name: "Solivate", detail: "Website perusahaan teknologi dengan struktur layanan dan positioning yang jelas.", href: "/work/solivate" }]}
        faqs={companyFaqs}
      />
    </>
  );
}

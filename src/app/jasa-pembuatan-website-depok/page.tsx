import { SEOServicePage } from "@/components/seo-service-page";
import { createPageMetadata } from "@/lib/seo";
import { proofProjects, sharedDeliverables, sharedFaqs } from "@/lib/seo-landing-content";
import { createServiceJsonLd } from "@/lib/structured-data";

const path = "/jasa-pembuatan-website-depok";
const title = "Jasa Pembuatan Website Depok";
const description = "Jasa pembuatan website di Depok untuk UMKM dan perusahaan, dengan konsultasi langsung atau remote, harga transparan, SEO foundation, dan support yang jelas.";

export const metadata = createPageMetadata({ title, description, path });

export default function DepokWebsitePage() {
  const jsonLd = createServiceJsonLd(title, description, path, sharedFaqs, "Depok");
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} /><SEOServicePage eyebrow="JASA WEBSITE DEPOK" title="Partner website untuk bisnis di Depok yang ingin tumbuh lebih serius." intro="Hammad Studio berbasis di area Depok dan melayani project website untuk UMKM, perusahaan, organisasi, serta brand melalui proses konsultasi yang jelas—secara langsung maupun remote." audience="Halaman ini ditujukan untuk bisnis yang benar-benar beroperasi atau melayani pasar Depok. Kami tidak membuat ratusan halaman kota dengan konten yang hanya mengganti nama lokasi." outcomes={["Komunikasi lebih dekat untuk bisnis di area Depok.", "Website disusun berdasarkan tujuan dan customer journey nyata.", "Harga, timeline, serta scope dijelaskan sebelum build.", "Fondasi performa, SEO, analytics, dan keamanan disiapkan sejak awal."]} deliverables={sharedDeliverables} proofs={proofProjects} faqs={sharedFaqs} /></>;
}

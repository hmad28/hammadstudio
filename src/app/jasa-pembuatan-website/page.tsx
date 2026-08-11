import { SEOServicePage } from "@/components/seo-service-page";
import { createPageMetadata } from "@/lib/seo";
import { proofProjects, sharedDeliverables, sharedFaqs } from "@/lib/seo-landing-content";
import { createServiceJsonLd } from "@/lib/structured-data";

const path = "/jasa-pembuatan-website";
const title = "Jasa Pembuatan Website Profesional";
const description = "Jasa pembuatan website profesional untuk UMKM dan perusahaan. Dibangun dengan desain, development, SEO, performa, dan keamanan sebagai satu fondasi.";

export const metadata = createPageMetadata({ title, description, path });

export default function WebsiteDevelopmentPage() {
  const jsonLd = createServiceJsonLd(title, description, path, sharedFaqs);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <SEOServicePage
        eyebrow="JASA PEMBUATAN WEBSITE"
        title="Website profesional yang dibangun untuk dipercaya dan menghasilkan peluang."
        intro="Mulai dari website sederhana sampai kebutuhan digital yang lebih custom—dibangun dengan standar engineering yang rapi dan mempertimbangkan performa, SEO, serta keamanan sejak awal."
        audience="Untuk bisnis yang membutuhkan website sebagai aset pemasaran, pusat informasi, dan jalur conversion—bukan sekadar brosur online yang selesai saat diluncurkan."
        outcomes={["Brand terlihat lebih kredibel sejak kunjungan pertama.", "Layanan dan value bisnis lebih mudah dipahami.", "Pengunjung diarahkan menuju inquiry, chat, booking, atau pembelian.", "Fondasi siap dikembangkan untuk SEO dan kebutuhan digital berikutnya."]}
        deliverables={sharedDeliverables}
        proofs={proofProjects}
        faqs={sharedFaqs}
      />
    </>
  );
}

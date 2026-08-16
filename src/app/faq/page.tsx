import { FAQSection } from "@/components/faq-section";
import { faqItems } from "@/lib/faq-content";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "FAQ Jasa Pembuatan Website",
  description: "Jawaban transparan tentang harga website, domain, hosting, proses pengerjaan, CMS, SEO, legalitas, keamanan transaksi, revisi, dan kepemilikan aset.",
  path: "/faq",
});

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://hammad.studio/faq#faq-page",
  url: "https://hammad.studio/faq",
  name: "FAQ Jasa Pembuatan Website Hammad Studio",
  inLanguage: "id-ID",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question.id,
    acceptedAnswer: { "@type": "Answer", text: item.answer.id },
  })),
};

export default function FAQPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c") }} />
      <FAQSection />
    </>
  );
}

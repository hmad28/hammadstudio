import { ContactPageContent } from "@/components/contact-page-content";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Konsultasi Project Digital",
  description:
    "Konsultasikan kebutuhan website, e-commerce, aplikasi, automation, atau software custom Anda bersama Hammad Studio.",
  path: "/contact",
});

export default function ContactPage() {
  const contactJsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": "https://hammad.studio/contact#contact-page",
    name: "Konsultasi Project Hammad Studio",
    url: "https://hammad.studio/contact",
    mainEntity: { "@id": "https://hammad.studio/#organization" },
  };

  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd).replace(/</g, "\\u003c") }} /><ContactPageContent /></>;
}

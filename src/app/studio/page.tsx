import { StudioPageContent } from "@/components/studio-page-content";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Tentang Hammad Studio",
  description:
    "Kenali Hammad Studio, prinsip engineering, proses kerja, dan pendekatan security-conscious dalam membangun produk digital.",
  path: "/studio",
});

export default function StudioPage() {
  const profileJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "AboutPage", "@id": "https://hammad.studio/studio#about", name: "Tentang Hammad Studio", url: "https://hammad.studio/studio", mainEntity: { "@id": "https://hammad.studio/#organization" } },
      { "@type": "Person", "@id": "https://hammad.studio/#hammad-matt", name: "Hammad Matt", jobTitle: "Founder & Lead Engineer", worksFor: { "@id": "https://hammad.studio/#organization" }, url: "https://hammad.studio/studio" },
    ],
  };
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(profileJsonLd).replace(/</g, "\\u003c") }} /><StudioPageContent /></>;
}

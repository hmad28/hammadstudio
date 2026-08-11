import { WorkPageContent } from "@/components/work-page-content";
import { createPageMetadata } from "@/lib/seo";
import { workProjects, workSlugs } from "@/lib/work-content";

export const metadata = createPageMetadata({
  title: "Portfolio dan Studi Kasus Website",
  description:
    "Lihat studi kasus website UMKM, company profile, logistik, travel, e-commerce, dan platform digital yang dirancang Hammad Studio.",
  path: "/work",
});

export default function WorkPage() {
  const portfolioJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": "https://hammad.studio/work#portfolio",
    name: "Portfolio dan Studi Kasus Hammad Studio",
    url: "https://hammad.studio/work",
    hasPart: workSlugs.map((slug) => ({ "@type": "CreativeWork", genre: "Case Study", name: workProjects[slug].title, url: `https://hammad.studio/work/${slug}` })),
  };
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioJsonLd).replace(/</g, "\\u003c") }} /><WorkPageContent /></>;
}

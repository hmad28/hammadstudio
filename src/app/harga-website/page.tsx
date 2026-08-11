import { PricingPageContent } from "@/components/pricing-page-content";
import { pricingPlans } from "@/lib/pricing-catalog";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Harga Pembuatan Website 2026 Mulai Rp199 Ribu",
  description: "Price list Hammad Studio 2026 untuk website personal, UMKM, company profile, e-commerce, event, business system, pemerintah, dan software custom.",
  path: "/harga-website",
});

export default function WebsitePricingPage() {
  const pricingJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://hammad.studio/harga-website#service",
    name: "Jasa Pembuatan Website Hammad Studio",
    url: "https://hammad.studio/harga-website",
    provider: { "@id": "https://hammad.studio/#organization" },
    areaServed: { "@type": "Country", name: "Indonesia" },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Price List Hammad Studio 2026",
      itemListElement: pricingPlans.map((plan) => {
        const numericPrice = plan.price.match(/[\d.]+/)?.[0].replaceAll(".", "");
        return {
          "@type": "Offer",
          name: plan.name,
          ...(numericPrice ? { price: numericPrice, priceCurrency: "IDR" } : {}),
          description: `${plan.summary} Harga: ${plan.price}.`,
          url: `https://hammad.studio/harga-website#plan-${plan.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
        };
      }),
    },
  };

  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingJsonLd).replace(/</g, "\\u003c") }} /><PricingPageContent /></>;
}

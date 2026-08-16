import { PricingPageContent } from "@/components/pricing-page-content";
import { getMerdekaPlanId, merdekaPlans } from "@/lib/merdeka-pricing";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Merdeka Digital Sale 2026 — Website Mulai Rp499 Ribu",
  description: "Promo Merdeka Hammad Studio hingga 31 Agustus 2026. Landing page mulai Rp499 ribu, company profile Rp1,099 juta, e-commerce, dan sistem bisnis.",
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
      name: "Merdeka Digital Sale Hammad Studio 2026",
      itemListElement: merdekaPlans.map((plan) => {
        return {
          "@type": "Offer",
          name: plan.name,
          ...(plan.numericPrice ? { price: plan.numericPrice, priceCurrency: "IDR", priceValidUntil: "2026-08-31" } : {}),
          description: `${plan.summary} Harga: ${plan.price}.`,
          url: `https://hammad.studio/harga-website#${getMerdekaPlanId(plan.name)}`,
        };
      }),
    },
  };

  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingJsonLd).replace(/</g, "\\u003c") }} /><PricingPageContent /></>;
}

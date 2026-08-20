import { PricingPageContent } from "@/components/pricing-page-content";
import { getMerdekaPlanId, merdekaPlans } from "@/lib/merdeka-pricing";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Merdeka Digital Sale 2026 — Website Mulai Rp499 Ribu",
  description: "Pricing Hammad Studio 2026 berbasis produk: Website Starter Rp499 ribu, Website + CMS Rp899 ribu, e-commerce, business apps, dan custom software.",
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

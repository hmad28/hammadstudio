import { PricingPageContent } from "@/components/pricing-page-content";
import { getMerdekaPlanId, merdekaPlans } from "@/lib/merdeka-pricing";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Harga Pembuatan Website 2026 — Mulai Rp499 Ribu",
  description: "Harga produk digital Hammad Studio 2026 mulai Rp499 ribu. Semua paket website, commerce, dan business system termasuk domain .com 1 tahun dan hosting.",
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
          description: `${plan.summary} Harga: ${plan.price}, termasuk domain .com 1 tahun dan hosting.`,
          url: `https://hammad.studio/harga-website#${getMerdekaPlanId(plan.name)}`,
        };
      }),
    },
  };

  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingJsonLd).replace(/</g, "\\u003c") }} /><PricingPageContent /></>;
}

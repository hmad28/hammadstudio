import { PricingPageContent } from "@/components/pricing-page-content";
import { getPricingPlanId, pricingPlans } from "@/lib/pricing-catalog";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Harga Pembuatan Website 2026 Mulai Rp499 Ribu",
  description: "Price list Hammad Studio 2026 untuk landing page, company profile, travel, e-commerce, event, business system, pemerintah, dan software custom.",
  path: "/harga-website",
});

function getNumericPrice(price: string) {
  const numericText = price.replace(/[^\d,]/g, "");
  if (!numericText) return undefined;

  const amount = Number(numericText.replace(",", "."));
  if (!Number.isFinite(amount) || amount <= 0) return undefined;
  if (price.toUpperCase().includes("JT")) return Math.round(amount * 1_000_000);
  if (price.toUpperCase().includes("K")) return Math.round(amount * 1_000);
  return amount;
}

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
        const numericPrice = getNumericPrice(plan.price);
        return {
          "@type": "Offer",
          name: plan.name,
          ...(numericPrice ? { price: numericPrice, priceCurrency: "IDR" } : {}),
          description: `${plan.summary} Harga: ${plan.price}.`,
          url: `https://hammad.studio/harga-website#${getPricingPlanId(plan.name)}`,
        };
      }),
    },
  };

  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingJsonLd).replace(/</g, "\\u003c") }} /><PricingPageContent /></>;
}

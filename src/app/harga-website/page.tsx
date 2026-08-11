import { PricingPageContent } from "@/components/pricing-page-content";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Harga Pembuatan Website dan Sistem Digital",
  description: "Lihat estimasi harga pembuatan website untuk UMKM, company profile, e-commerce, aplikasi web, dan sistem custom dengan scope yang transparan.",
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
      name: "Paket Website",
      itemListElement: [
        { "@type": "Offer", name: "Essential", price: "2500000", priceCurrency: "IDR" },
        { "@type": "Offer", name: "Business", price: "4500000", priceCurrency: "IDR" },
        { "@type": "Offer", name: "Professional", price: "7500000", priceCurrency: "IDR" },
        { "@type": "Offer", name: "Corporate / Custom", price: "12000000", priceCurrency: "IDR", description: "Harga mulai dari Rp 12 juta" },
      ],
    },
  };

  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingJsonLd).replace(/</g, "\\u003c") }} /><PricingPageContent /></>;
}

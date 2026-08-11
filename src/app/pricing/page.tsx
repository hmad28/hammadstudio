import { PricingPageContent } from "@/components/pricing-page-content";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Paket dan Harga Pembuatan Website",
  description:
    "Estimasi harga website, e-commerce, aplikasi web, automation, sistem bisnis, dan custom development dari Hammad Studio.",
  path: "/pricing",
});

export default function PricingPage() {
  return <PricingPageContent />;
}

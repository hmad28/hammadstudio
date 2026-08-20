import { PartnerPageContent } from "@/components/partner-page-content";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Program Partner Website — Komisi Hingga 30%",
  description:
    "Gabung Hammad Studio Partner Program. Bawa calon client yang membutuhkan website, tim kami menangani konsultasi hingga closing, dan dapatkan komisi hingga 30%.",
  path: "/partner",
});

export default function PartnerPage() {
  return <PartnerPageContent />;
}

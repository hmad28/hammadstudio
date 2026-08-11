import { WorkPageContent } from "@/components/work-page-content";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Portfolio dan Studi Kasus Website",
  description:
    "Lihat studi kasus website UMKM, company profile, logistik, travel, e-commerce, dan platform digital yang dirancang Hammad Studio.",
  path: "/work",
});

export default function WorkPage() {
  return <WorkPageContent />;
}

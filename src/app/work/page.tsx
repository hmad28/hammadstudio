import { WorkPageContent } from "@/components/work-page-content";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Karya Digital dan Studi Kasus",
  description:
    "Portofolio website, e-commerce, platform komunitas, dan sistem bisnis yang dirancang dan dibangun oleh Hammad Studio.",
  path: "/work",
});

export default function WorkPage() {
  return <WorkPageContent />;
}

import { StudioPageContent } from "@/components/studio-page-content";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Tentang Hammad Studio",
  description:
    "Kenali Hammad Studio, prinsip engineering, proses kerja, dan pendekatan security-conscious dalam membangun produk digital.",
  path: "/studio",
});

export default function StudioPage() {
  return <StudioPageContent />;
}

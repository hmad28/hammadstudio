import { ContactPageContent } from "@/components/contact-page-content";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Konsultasi Project Digital",
  description:
    "Konsultasikan kebutuhan website, e-commerce, aplikasi, automation, atau software custom Anda bersama Hammad Studio.",
  path: "/contact",
});

export default function ContactPage() {
  return <ContactPageContent />;
}

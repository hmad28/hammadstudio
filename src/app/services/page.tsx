import { LocalizedPageIntro } from "@/components/localized-page-intro";
import { ServicesSection } from "@/components/services-section";
import { PricingSection } from "@/components/pricing-section";

export const metadata = {
  title: "Website, Aplikasi, Sistem & Automation – Hammad Studio",
  description: "Layanan website, e-commerce, web application, business system, automation AI, dan custom development dari Hammad Studio.",
};

export default function ServicesPage() {
  return (
    <div className="pt-28 min-h-screen bg-[#f7f7f5]">
      <LocalizedPageIntro
        eyebrow={{ id: "Layanan Hammad Studio", en: "Hammad Studio services" }}
        title={{ id: "Dari website hingga platform digital custom.", en: "From websites to custom digital platforms." }}
        description={{ id: "Kami membangun website, e-commerce, aplikasi web, sistem bisnis, automation, dan software custom berdasarkan kebutuhan nyata, bukan sekadar menambahkan fitur.", en: "We build websites, e-commerce, web applications, business systems, automation, and custom software around real needs, not feature lists." }}
      />

      <ServicesSection />
      <PricingSection />
    </div>
  );
}

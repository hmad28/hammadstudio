import { LocalizedPageIntro } from "@/components/localized-page-intro";
import { ServicesCatalog } from "@/components/services-catalog";

export const metadata = {
  title: "Website, Aplikasi, Sistem & Automation – Hammad Studio",
  description: "Layanan website, e-commerce, web application, business system, automation AI, dan custom development dari Hammad Studio.",
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#f6f7fb] text-[#17181d]">
      <section className="relative overflow-hidden bg-[#070a12] pb-16 pt-36 text-white sm:pb-24 sm:pt-44">
        {/* Violet & Cobalt Ambient Glow */}
        <div className="pointer-events-none absolute left-1/2 top-1/3 -z-0 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(128,87,255,0.4)_0%,rgba(40,100,255,0.25)_50%,transparent_70%)] blur-3xl" aria-hidden="true" />

        <div className="relative z-10">
          <LocalizedPageIntro
            eyebrow={{ id: "Layanan Hammad Studio", en: "Hammad Studio services" }}
            title={{ id: "Dari website hingga platform digital custom.", en: "From websites to custom digital platforms." }}
            description={{ id: "Kami membangun website, e-commerce, aplikasi web, sistem bisnis, automation, dan software custom berdasarkan kebutuhan nyata, bukan sekadar menambahkan fitur.", en: "We build websites, e-commerce, web applications, business systems, automation, and custom software around real needs, not feature lists." }}
            theme="dark"
          />
        </div>
      </section>

      <ServicesCatalog />
    </div>
  );
}

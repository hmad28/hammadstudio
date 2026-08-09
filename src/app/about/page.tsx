import { AboutSection } from "@/components/about-section";
import { LocalizedPageIntro } from "@/components/localized-page-intro";
import { PrinciplesSection } from "@/components/principles-section";
import { SecuritySection } from "@/components/security-section";

export const metadata = {
  title: "Tentang Hammad Studio – Digital Product Studio",
  description: "Mengenal Hammad Studio, filosofi kerja, tim profesional, dan visi kami dalam membangun teknologi berkualitas.",
};

export default function AboutPage() {
  return (
    <div className="pt-24 min-h-screen bg-[#0b0b0b] text-white">
      <LocalizedPageIntro
        eyebrow={{ id: "Tentang Hammad Studio", en: "About Hammad Studio" }}
        title={{ id: "Produk digital, dibangun dengan benar.", en: "Digital products, built properly." }}
        description={{ id: "Digital development studio dengan fokus pada quality, performance, scalability, dan security. Kami memilih solusi yang paling masuk akal untuk kebutuhan hari ini tanpa membatasi pertumbuhan besok.", en: "A digital development studio focused on quality, performance, scalability, and security. We choose sensible solutions for today's needs without limiting tomorrow's growth." }}
        theme="dark"
      />

      <AboutSection />
      <SecuritySection />
      <PrinciplesSection />
    </div>
  );
}

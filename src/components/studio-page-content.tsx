"use client";

import Link from "next/link";
import { ArrowUpRightIcon } from "./icons";
import { useLocale } from "./locale-provider";
import { MotionReveal } from "./motion-reveal";

const content = {
  label: { id: "Studio", en: "Studio" },
  title: { id: "Kami membangun produk digital dengan cara yang", en: "We build digital products the way we believe is" },
  accent: { id: "kami percaya benar.", en: "proper." },
  intro: {
    id: "Hammad Studio adalah independent digital development studio untuk bisnis, organisasi, dan ide yang membutuhkan website hingga software custom dengan fondasi teknis yang kuat.",
    en: "Hammad Studio is an independent digital development studio for businesses, organizations, and ideas that need websites through to custom software with strong technical foundations.",
  },
  principles: {
    label: { id: "Cara kami bekerja / 01", en: "How we work / 01" },
    title: { id: "Prinsip yang menjaga setiap", en: "Principles behind every" },
    accent: { id: "keputusan.", en: "decision." },
    items: [
      { title: "Build what matters", id: "Membangun apa yang benar-benar dibutuhkan, bukan apa yang sekadar terlihat canggih.", en: "Build what is actually needed, not what merely looks sophisticated." },
      { title: "Simple when possible", id: "Solusi sederhana dipilih ketika sudah cukup untuk menyelesaikan masalah.", en: "Choose the simpler solution when it is enough to solve the problem." },
      { title: "Built for real use", id: "Produk dipikirkan untuk kondisi setelah launch, bukan hanya untuk presentasi.", en: "Products are designed for life after launch, not just for presentations." },
      { title: "Grow when needed", id: "Fondasi hari ini tidak boleh menghalangi kebutuhan bisnis berikutnya.", en: "Today's foundations should not block tomorrow's business needs." },
    ],
  },
  engineering: {
    label: { id: "Engineering / 02", en: "Engineering / 02" },
    title: { id: "Visual yang kuat perlu", en: "Strong visuals need" },
    accent: { id: "fondasi yang layak.", en: "sound foundations." },
    description: { id: "Kami memperhatikan cara produk disusun, dijalankan, dirawat, dan dikembangkan kembali ketika kebutuhan bertambah.", en: "We consider how a product is structured, operated, maintained, and extended as requirements grow." },
    items: ["Architecture", "Performance", "Maintainability", "Testing", "Deployment"],
  },
  security: {
    label: { id: "Security / 03", en: "Security / 03" },
    title: { id: "Security bukan", en: "Security is not" },
    accent: { id: "fitur tambahan.", en: "an add-on." },
    description: {
      id: "Background kami di software engineering, cybersecurity, dan security research membuat risiko dipertimbangkan sejak awal development.",
      en: "Our background in software engineering, cybersecurity, and security research means risk is considered from the start of development.",
    },
    note: {
      id: "Kami tidak menjanjikan sistem yang mustahil diretas. Kami menerapkan security-conscious engineering sesuai kebutuhan dan risiko setiap produk.",
      en: "We do not promise an impossible-to-hack system. We apply security-conscious engineering according to each product's needs and risks.",
    },
    items: ["Secure authentication", "Access control", "Input validation", "API protection", "Session security", "Rate limiting", "Audit logging", "Dependency review", "Secure file handling", "Monitoring"],
  },
  tools: {
    label: { id: "Tools / 04", en: "Tools / 04" },
    title: { id: "Tools mengikuti kebutuhan", en: "Tools follow the" },
    accent: { id: "pekerjaan.", en: "job." },
    description: { id: "Kami tidak memaksakan satu stack untuk semua project. Pilihan teknis mengikuti scope, risiko, dan kebutuhan operasional.", en: "We do not force one stack onto every project. Technical choices follow scope, risk, and operational needs." },
    items: ["Frontend", "Backend", "Database", "Cloud", "Automation / AI"],
  },
  person: {
    label: { id: "Di balik studio / 05", en: "Behind the studio / 05" },
    title: "Hammad Matt",
    description: { id: "Hammad Studio dipimpin oleh Hammad Matt, developer dengan fokus pada fullstack engineering, automation, dan security research.", en: "Hammad Studio is led by Hammad Matt, a developer focused on full-stack engineering, automation, and security research." },
    link: { id: "Mulai percakapan", en: "Start a conversation" },
  },
} as const;

export function StudioPageContent() {
  const { locale } = useLocale();

  return (
    <div className="bg-[#f0eee7] pb-28 pt-32 text-[#0a0a09] sm:pb-36 sm:pt-40">
      <div className="site-container">
        <MotionReveal className="grid gap-8 pb-24 lg:grid-cols-12 lg:gap-6">
          <span className="label-mono text-black/40 lg:col-span-3">{content.label[locale]}</span>
          <div className="lg:col-span-9">
            <h1 className="max-w-[980px] text-[clamp(3.3rem,7vw,7rem)] font-[520] leading-[0.88] tracking-[-0.065em]">{content.title[locale]} <span className="font-[family-name:var(--font-instrument-serif)] font-normal italic">{content.accent[locale]}</span></h1>
            <p className="mt-8 max-w-[720px] text-base leading-[1.75] text-black/55 sm:text-lg">{content.intro[locale]}</p>
          </div>
        </MotionReveal>

        <StudioSection label={content.principles.label[locale]} title={content.principles.title[locale]} accent={content.principles.accent[locale]}>
          <div className="grid border-l border-t border-black/15 sm:grid-cols-2">
            {content.principles.items.map((item, index) => <MotionReveal key={item.title} delay={index * 0.05} className="min-h-[220px] border-b border-r border-black/15 p-6 sm:p-8"><span className="label-mono text-black/30">0{index + 1}</span><h3 className="mt-10 text-2xl font-[520] tracking-[-0.04em]">{item.title}</h3><p className="mt-4 max-w-[430px] text-sm leading-[1.65] text-black/52">{item[locale]}</p></MotionReveal>)}
          </div>
        </StudioSection>

        <StudioSection label={content.engineering.label[locale]} title={content.engineering.title[locale]} accent={content.engineering.accent[locale]} description={content.engineering.description[locale]}>
          <WordGrid items={content.engineering.items} />
        </StudioSection>

        <section id="security" className="scroll-mt-24 border-t border-black/15 py-20 sm:py-28">
          <MotionReveal className="grid gap-8 lg:grid-cols-12 lg:gap-6"><span className="label-mono text-black/40 lg:col-span-3">{content.security.label[locale]}</span><div className="lg:col-span-9"><h2 className="max-w-[880px] text-[clamp(3rem,6vw,6rem)] font-[510] leading-[0.9] tracking-[-0.06em]">{content.security.title[locale]} <span className="font-[family-name:var(--font-instrument-serif)] font-normal italic">{content.security.accent[locale]}</span></h2><p className="mt-7 max-w-[690px] text-base leading-[1.7] text-black/55">{content.security.description[locale]}</p></div></MotionReveal>
          <div className="mt-14 grid gap-3 lg:ml-[25%] lg:grid-cols-2">{content.security.items.map((item, index) => <MotionReveal key={item} delay={(index % 5) * 0.03} className="flex items-center justify-between border-b border-black/15 py-4"><span className="text-sm font-[520]">{item}</span><span className="label-mono text-black/25">{String(index + 1).padStart(2, "0")}</span></MotionReveal>)}</div>
          <MotionReveal className="mt-12 max-w-[760px] border-l-2 border-[#91ad2e] pl-6 text-lg leading-[1.6] text-black/65 lg:ml-[25%]">{content.security.note[locale]}</MotionReveal>
        </section>

        <StudioSection label={content.tools.label[locale]} title={content.tools.title[locale]} accent={content.tools.accent[locale]} description={content.tools.description[locale]}>
          <WordGrid items={content.tools.items} />
        </StudioSection>

        <section className="border-t border-black/15 pt-20 sm:pt-28"><MotionReveal className="grid gap-10 lg:grid-cols-12 lg:gap-6"><span className="label-mono text-black/40 lg:col-span-3">{content.person.label[locale]}</span><div className="lg:col-span-9"><h2 className="text-[clamp(3.2rem,7vw,7rem)] font-[520] leading-none tracking-[-0.065em]">{content.person.title}</h2><p className="mt-7 max-w-[680px] text-base leading-[1.7] text-black/55 sm:text-lg">{content.person.description[locale]}</p><Link href="/contact" className="group mt-8 inline-flex items-center gap-2 border-b border-black pb-1 text-sm font-semibold">{content.person.link[locale]} <ArrowUpRightIcon className="button-arrow h-4 w-4" /></Link></div></MotionReveal></section>
      </div>
    </div>
  );
}

function StudioSection({ label, title, accent, description, children }: { label: string; title: string; accent: string; description?: string; children: React.ReactNode }) {
  return <section className="border-t border-black/15 py-20 sm:py-28"><MotionReveal className="grid gap-8 lg:grid-cols-12 lg:gap-6"><span className="label-mono text-black/40 lg:col-span-3">{label}</span><div className="lg:col-span-9"><h2 className="max-w-[900px] text-[clamp(3rem,6vw,6rem)] font-[510] leading-[0.9] tracking-[-0.06em]">{title} <span className="font-[family-name:var(--font-instrument-serif)] font-normal italic">{accent}</span></h2>{description && <p className="mt-7 max-w-[690px] text-base leading-[1.7] text-black/55">{description}</p>}</div></MotionReveal><div className="mt-14 lg:ml-[25%]">{children}</div></section>;
}

function WordGrid({ items }: { items: readonly string[] }) {
  return <div className="grid border-l border-t border-black/15 sm:grid-cols-2 lg:grid-cols-5">{items.map((item, index) => <MotionReveal key={item} delay={index * 0.04} className="min-h-[130px] border-b border-r border-black/15 p-5"><span className="label-mono text-black/25">0{index + 1}</span><p className="mt-8 text-lg font-[520] tracking-[-0.03em]">{item}</p></MotionReveal>)}</div>;
}

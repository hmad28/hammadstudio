"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRightIcon, CheckIcon } from "./icons";
import { useLocale } from "./locale-provider";
import { MotionReveal } from "./motion-reveal";

const content = {
  hero: {
    label: { id: "Hammad Studio", en: "Hammad Studio" },
    title: {
      id: "Produk digital, dibangun dengan cara yang",
      en: "Digital products, built the way we believe is",
    },
    accent: { id: "kami percaya benar.", en: "proper." },
    intro: {
      id: "Independent digital development studio untuk bisnis dan organisasi yang membutuhkan website hingga software custom dengan fondasi teknis yang kuat.",
      en: "An independent digital development studio for businesses and organizations that need websites through to custom software with strong technical foundations.",
    },
  },
  principles: {
    label: { id: "Cara kami bekerja", en: "How we work" },
    title: { id: "Prinsip yang menjaga", en: "Principles behind" },
    accent: { id: "setiap keputusan.", en: "every decision." },
    items: [
      {
        title: "Build what matters",
        id: "Membangun apa yang benar-benar dibutuhkan, bukan apa yang sekadar terlihat canggih.",
        en: "Build what is actually needed, not what merely looks sophisticated.",
      },
      {
        title: "Simple when possible",
        id: "Solusi sederhana dipilih ketika sudah cukup menyelesaikan masalah.",
        en: "Choose the simpler solution when it is enough to solve the problem.",
      },
      {
        title: "Built for real use",
        id: "Produk dipikirkan untuk kondisi setelah launch, bukan hanya presentasi.",
        en: "Products are designed for life after launch, not just presentations.",
      },
      {
        title: "Grow when needed",
        id: "Fondasi hari ini tidak boleh menghalangi kebutuhan berikutnya.",
        en: "Today's foundations should not block tomorrow's needs.",
      },
    ],
  },
  engineering: {
    label: { id: "Engineering", en: "Engineering" },
    title: { id: "Visual kuat. Fondasi", en: "Strong visuals. Sound" },
    accent: { id: "tetap layak.", en: "foundations." },
    copy: {
      id: "Kami memperhatikan cara produk disusun, dijalankan, dirawat, dan dikembangkan kembali ketika kebutuhan bertambah.",
      en: "We consider how a product is structured, operated, maintained, and extended as requirements grow.",
    },
    items: [
      "Architecture",
      "Performance",
      "Maintainability",
      "Testing",
      "Deployment",
    ],
  },
  security: {
    label: {
      id: "Security-conscious development",
      en: "Security-conscious development",
    },
    title: {
      id: "Security bukan fitur tambahan.",
      en: "Security is not an add-on.",
    },
    copy: {
      id: "Background di software engineering, cybersecurity, dan security research membuat risiko dipertimbangkan sejak awal development.",
      en: "A background in software engineering, cybersecurity, and security research means risk is considered from the start.",
    },
    note: {
      id: "Kami tidak menjanjikan sistem yang mustahil diretas. Praktik security diterapkan sesuai kebutuhan dan risiko setiap produk.",
      en: "We do not promise an impossible-to-hack system. Security practices are applied according to each product's needs and risks.",
    },
    items: [
      "Secure authentication",
      "Access control",
      "Input validation",
      "API protection",
      "Session security",
      "Rate limiting",
      "Audit logging",
      "Dependency review",
    ],
  },
  tools: {
    label: { id: "Tools", en: "Tools" },
    title: { id: "Tools mengikuti pekerjaan.", en: "Tools follow the job." },
    copy: {
      id: "Kami tidak memaksakan satu stack untuk semua project. Pilihan teknis mengikuti scope, risiko, dan kebutuhan operasional.",
      en: "We do not force one stack onto every project. Technical choices follow scope, risk, and operational needs.",
    },
    items: ["Frontend", "Backend", "Database", "Cloud", "Automation / AI"],
  },
  founder: {
    label: { id: "Di balik studio", en: "Behind the studio" },
    title: "Hammad Matt",
    role: {
      id: "Fullstack engineering · Automation · Security research",
      en: "Full-stack engineering · Automation · Security research",
    },
    copy: {
      id: "Hammad Studio dipimpin langsung oleh Hammad Matt. Setiap project mendapat perhatian pada keputusan produk, kualitas implementasi, dan risiko teknis—bukan sekadar handoff kepada tim anonim.",
      en: "Hammad Studio is led directly by Hammad Matt. Every project receives attention across product decisions, implementation quality, and technical risk—not simply handed off to an anonymous team.",
    },
    cta: { id: "Mulai percakapan", en: "Start a conversation" },
  },
} as const;

const principleTintClasses = [
  "tint-card-lavender",
  "tint-card-ice",
  "tint-card-lime",
  "tint-card-coral",
];

const principleBadgeStyles = [
  "bg-[#8057ff] text-white",
  "bg-[#2864ff] text-white",
  "bg-[#070a12] text-[#d2f34c]",
  "bg-[#ff7262] text-white",
];

export function StudioPageContent() {
  const { locale } = useLocale();

  return (
    <div className="bg-[#f7f5ef] text-[#17181d]">
      {/* Dark Midnight Hero Header */}
      <section className="relative overflow-hidden bg-[#070a12] pb-20 pt-36 text-white sm:pb-28 sm:pt-44">
        {/* Purple & Lime Radial Mesh Glow */}
        <div
          className="pointer-events-none absolute left-1/2 top-1/3 -z-0 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(128,87,255,0.45)_0%,rgba(210,243,76,0.18)_50%,transparent_70%)] blur-3xl"
          aria-hidden="true"
        />

        <div className="site-container relative z-10 grid gap-10 lg:grid-cols-12 lg:items-center">
          <MotionReveal className="lg:col-span-6">
            <span className="label-mono acid-glow-badge inline-block rounded-full px-3.5 py-1 text-[0.68rem]">
              {content.hero.label[locale]}
            </span>
            <h1 className="mt-5 text-[clamp(3.2rem,6vw,6.4rem)] font-[520] leading-[0.9] tracking-[-0.065em] text-white">
              {content.hero.title[locale]}{" "}
              <span className="bg-gradient-to-r from-[#d2f34c] via-[#e2fd78] to-[#93c5fd] bg-clip-text font-[family-name:var(--font-instrument-serif)] font-normal italic text-transparent">
                {content.hero.accent[locale]}
              </span>
            </h1>
            <p className="body-copy mt-7 max-w-[620px] text-white/65">
              {content.hero.intro[locale]}
            </p>
          </MotionReveal>

          <MotionReveal
            delay={0.08}
            className="luxury-dark-card relative aspect-[4/3] overflow-hidden rounded-2xl p-1.5 shadow-2xl lg:col-span-6"
          >
            <div className="relative h-full w-full overflow-hidden rounded-xl">
              <Image
                src="/images/work/solivate.webp"
                alt="Solivate Studio digital agency homepage"
                fill
                priority
                quality={70}
                sizes="(max-width: 1024px) 100vw, 600px"
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070a12]/85 via-transparent to-transparent" />
              <span className="label-mono purple-glow-badge absolute bottom-6 left-6 inline-block rounded-full px-3.5 py-1 text-[0.68rem]">
                Independent · Indonesia · Remote
              </span>
            </div>
          </MotionReveal>
        </div>
      </section>

      {/* Principles Section with 4 Chromatic Cards */}
      <section className="about-surface-v2 py-20 sm:py-28">
        <div className="site-container">
          <SectionHeader
            label={content.principles.label[locale]}
            title={content.principles.title[locale]}
            accent={content.principles.accent[locale]}
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {content.principles.items.map((item, index) => {
              const tintClass =
                principleTintClasses[index % principleTintClasses.length];
              const badgeStyle =
                principleBadgeStyles[index % principleBadgeStyles.length];

              return (
                <MotionReveal
                  key={item.title}
                  delay={index * 0.04}
                  className={`flex min-h-[260px] flex-col rounded-2xl p-7 transition duration-400 hover:-translate-y-1 ${tintClass}`}
                >
                  <span
                    className={`flex h-10 w-10 items-center justify-center rounded-full font-[family-name:var(--font-geist-mono)] text-xs font-bold ${badgeStyle}`}
                  >
                    0{index + 1}
                  </span>
                  <h3 className="mt-8 text-xl font-[550] tracking-[-0.035em] text-[#17181d]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-xs leading-[1.65] text-[#6d7180] sm:text-sm">
                    {item[locale]}
                  </p>
                </MotionReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Engineering Section */}
      <section className="services-surface-v2 py-20 sm:py-28">
        <div className="site-container surface-card grid overflow-hidden rounded-2xl border border-[#dde0e7] bg-white lg:grid-cols-12 shadow-xl">
          <div className="relative min-h-[360px] bg-[#070a12] sm:min-h-[480px] lg:col-span-6">
            <Image
              src="/images/generated/custom-development.webp"
              alt="Custom software architecture illustration"
              fill
              quality={65}
              loading="lazy"
              sizes="(max-width: 1024px) 100vw, 620px"
              className="object-cover object-top"
            />
          </div>
          <MotionReveal className="flex flex-col justify-center p-8 sm:p-12 lg:col-span-6 lg:p-14">
            <span className="label-mono inline-block rounded-full bg-[#8057ff]/10 px-3 py-1 text-[0.68rem] text-[#8057ff] w-fit">
              {content.engineering.label[locale]}
            </span>
            <h2 className="mt-4 text-[clamp(2.6rem,4.5vw,4.5rem)] font-[520] leading-[0.94] tracking-[-0.058em] text-[#17181d]">
              {content.engineering.title[locale]}{" "}
              <span className="font-[family-name:var(--font-instrument-serif)] font-normal italic text-[#8057ff]">
                {content.engineering.accent[locale]}
              </span>
            </h2>
            <p className="mt-5 text-sm leading-[1.7] text-[#6d7180] sm:text-base">
              {content.engineering.copy[locale]}
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {content.engineering.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-black/10 bg-[#f6f7fb] px-4 py-2 text-xs font-semibold text-[#17181d] sm:text-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </MotionReveal>
        </div>
      </section>

      {/* Security Section */}
      <section
        id="security"
        className="scroll-mt-24 footer-surface-v2 py-20 text-white sm:py-28"
      >
        <div className="site-container grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
          <MotionReveal>
            <span className="label-mono text-[#d2f34c]">
              {content.security.label[locale]}
            </span>
            <h2 className="mt-4 text-[clamp(2.8rem,5vw,5.2rem)] font-[520] leading-[0.92] tracking-[-0.06em]">
              {content.security.title[locale]}
            </h2>
            <p className="mt-6 max-w-[580px] text-sm leading-[1.7] text-white/65 sm:text-base">
              {content.security.copy[locale]}
            </p>
            <p className="mt-6 max-w-[580px] border-l-2 border-[#d2f34c] pl-5 text-xs leading-[1.65] text-white/75 sm:text-sm">
              {content.security.note[locale]}
            </p>
          </MotionReveal>

          <div className="grid gap-3 sm:grid-cols-2">
            {content.security.items.map((item, index) => (
              <MotionReveal
                key={item}
                delay={(index % 4) * 0.04}
                className="rounded-2xl border border-white/12 bg-white/[0.05] p-5 sm:p-6 backdrop-blur-md"
              >
                <div className="flex items-center gap-3">
                  <CheckIcon className="h-4 w-4 text-[#d2f34c]" />
                  <p className="text-sm font-semibold text-white sm:text-base">
                    {item}
                  </p>
                </div>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-20 sm:py-28">
        <div className="site-container">
          <MotionReveal className="surface-card grid gap-8 rounded-2xl border border-[#dde0e7] bg-white p-8 sm:p-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:items-center shadow-lg">
            <div>
              <span className="label-mono inline-block rounded-full bg-[#8057ff]/10 px-3 py-1 text-[0.68rem] text-[#8057ff]">
                {content.tools.label[locale]}
              </span>
              <h2 className="mt-4 text-[clamp(2.5rem,4.5vw,4.5rem)] font-[520] leading-[0.94] tracking-[-0.058em] text-[#17181d]">
                {content.tools.title[locale]}
              </h2>
              <p className="mt-4 max-w-[530px] text-sm leading-[1.7] text-[#6d7180] sm:text-base">
                {content.tools.copy[locale]}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {content.tools.items.map((item, index) => (
                <div
                  key={item}
                  className="flex min-h-[110px] items-end rounded-xl bg-[#f6f7fb] p-5 border border-[#dde0e7]"
                >
                  <div>
                    <span className="label-mono text-[#8057ff] font-bold">
                      0{index + 1}
                    </span>
                    <strong className="mt-3 block text-sm font-semibold text-[#17181d] sm:text-base">
                      {item}
                    </strong>
                  </div>
                </div>
              ))}
            </div>
          </MotionReveal>
        </div>
      </section>

      {/* Founder Section - Hammad Matt Profile */}
      <section className="about-surface-v2 py-20 sm:py-28">
        <div className="site-container grid gap-6 lg:grid-cols-2">
          <MotionReveal className="luxury-dark-card relative flex min-h-[420px] items-end overflow-hidden rounded-2xl p-8 text-white shadow-2xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(210,243,76,0.2),transparent_45%)]" />
            <span className="relative text-[clamp(6rem,16vw,12rem)] font-[540] leading-[0.7] tracking-[-0.08em] text-white/[0.1]">
              HM
            </span>
            <span className="label-mono acid-glow-badge absolute left-8 top-8 inline-block rounded-full px-3.5 py-1 text-[0.68rem]">
              {content.founder.label[locale]}
            </span>
          </MotionReveal>

          <MotionReveal
            delay={0.06}
            className="surface-card flex flex-col justify-center rounded-2xl border border-[#dde0e7] bg-white p-8 sm:p-12 shadow-lg"
          >
            <span className="label-mono text-[#8057ff] font-bold">
              Founder / Lead Engineer
            </span>
            <h2 className="mt-4 text-[clamp(2.8rem,5.5vw,5.2rem)] font-[520] leading-none tracking-[-0.065em] text-[#17181d]">
              {content.founder.title}
            </h2>
            <p className="mt-3 text-xs font-semibold text-[#6d7180] sm:text-sm">
              {content.founder.role[locale]}
            </p>
            <p className="mt-6 max-w-[600px] text-sm leading-[1.75] text-[#6d7180] sm:text-base">
              {content.founder.copy[locale]}
            </p>
            <Link
              href="/contact"
              className="acid-button group mt-8 inline-flex w-fit items-center gap-2 rounded-full px-6 py-3 text-xs font-semibold text-black sm:text-sm"
            >
              {content.founder.cta[locale]}{" "}
              <ArrowUpRightIcon className="button-arrow h-4 w-4" />
            </Link>
          </MotionReveal>
        </div>
      </section>
    </div>
  );
}

function SectionHeader({
  label,
  title,
  accent,
}: {
  label: string;
  title: string;
  accent: string;
}) {
  return (
    <MotionReveal>
      <span className="label-mono text-black/45">{label}</span>
      <h2 className="section-heading mt-4 max-w-[800px]">
        {title}{" "}
        <span className="font-[family-name:var(--font-instrument-serif)] font-normal italic">
          {accent}
        </span>
      </h2>
    </MotionReveal>
  );
}

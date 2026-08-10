"use client";

import { useLocale } from "./locale-provider";
import { MotionReveal } from "./motion-reveal";

const content = {
  label: { id: "Pertanyaan umum", en: "Frequently asked" },
  title: { id: "Sebelum kita", en: "Before we" },
  accent: { id: "mulai.", en: "begin." },
  items: [
    { q: { id: "Berapa lama proses pengerjaan?", en: "How long does a project take?" }, a: { id: "Website sederhana umumnya dapat selesai dalam beberapa minggu. Application dan system mengikuti scope, integration, serta kesiapan materi.", en: "A simple website can generally be completed within several weeks. Applications and systems depend on scope, integrations, and content readiness." } },
    { q: { id: "Apakah domain dan hosting termasuk?", en: "Are domain and hosting included?" }, a: { id: "Setup dan deployment termasuk sesuai paket. Biaya domain, cloud, dan layanan pihak ketiga dijelaskan terpisah sebelum project dimulai.", en: "Setup and deployment are included according to the package. Domain, cloud, and third-party costs are explained separately before work begins." } },
    { q: { id: "Apakah bisa revisi?", en: "Are revisions included?" }, a: { id: "Ya. Jumlah review round ditentukan dalam scope agar proses tetap jelas dan terkontrol.", en: "Yes. The number of review rounds is defined in the scope so the process stays clear and controlled." } },
    { q: { id: "Apakah source code diberikan?", en: "Is source code provided?" }, a: { id: "Source code dan handover mengikuti jenis project serta paket yang dipilih. Ketentuannya dicantumkan dalam proposal.", en: "Source code and handover depend on the project and selected package. The terms are included in the proposal." } },
    { q: { id: "Bisa mulai dari website lalu berkembang?", en: "Can we start with a website and expand later?" }, a: { id: "Bisa. Kami dapat memulai dari kebutuhan hari ini sambil menjaga fondasi agar CMS, commerce, portal, atau automation dapat ditambahkan saat dibutuhkan.", en: "Yes. We can start with today's need while keeping a foundation that can support CMS, commerce, portals, or automation later." } },
  ],
} as const;

export function FAQSection() {
  const { locale } = useLocale();
  return <section className="bg-[#f0eee7] py-20 text-[#0a0a09] sm:py-28"><div className="site-container grid gap-10 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)]"><MotionReveal><span className="label-mono text-black/45">{content.label[locale]}</span><h2 className="section-heading mt-5">{content.title[locale]} <span className="font-[family-name:var(--font-instrument-serif)] font-normal italic">{content.accent[locale]}</span></h2></MotionReveal><div className="space-y-3">{content.items.map((item, index) => <MotionReveal key={item.q.en} delay={index * 0.03} className="surface-card p-6 sm:p-7"><div className="grid gap-3 sm:grid-cols-[40px_1fr_1.25fr]"><span className="label-mono text-black/28">0{index + 1}</span><h3 className="text-base font-[550] leading-[1.4] tracking-[-0.025em]">{item.q[locale]}</h3><p className="text-sm leading-[1.65] text-black/52">{item.a[locale]}</p></div></MotionReveal>)}</div></div></section>;
}

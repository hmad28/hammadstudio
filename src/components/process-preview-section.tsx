"use client";

import { useLocale } from "./locale-provider";
import { MotionReveal } from "./motion-reveal";

const content = {
  label: { id: "Cara kerja", en: "How we work" },
  title: { id: "Dari kebutuhan hingga", en: "From requirement to" },
  accent: { id: "siap digunakan.", en: "ready to use." },
  intro: { id: "Proses dibuat transparan agar keputusan, scope, dan progres mudah diikuti.", en: "A transparent process keeps decisions, scope, and progress easy to follow." },
  steps: [
    { title: { id: "Ceritakan kebutuhan", en: "Tell us what you need" }, description: { id: "Kami memahami masalah, tujuan, user, dan konteks bisnisnya.", en: "We understand the problem, goal, users, and business context." } },
    { title: { id: "Scope & proposal", en: "Scope & proposal" }, description: { id: "Fitur, deliverables, timeline, dan estimasi biaya dibuat jelas.", en: "Features, deliverables, timeline, and estimated costs are made clear." } },
    { title: { id: "Design & build", en: "Design & build" }, description: { id: "Proses berjalan terstruktur dengan komunikasi dan review berkala.", en: "Work progresses in a structured way with regular communication and reviews." } },
    { title: { id: "Launch & support", en: "Launch & support" }, description: { id: "Produk diuji, diluncurkan, lalu didukung setelah live.", en: "The product is tested, launched, and supported after going live." } },
  ],
} as const;

export function ProcessPreviewSection() {
  const { locale } = useLocale();
  return (
    <section id="process" className="scroll-mt-20 bg-[#e6e4de] py-20 text-[#0a0a09] sm:py-28 lg:py-32">
      <div className="site-container">
        <MotionReveal className="grid gap-6 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:items-end"><div><span className="label-mono text-black/45">{content.label[locale]}</span><h2 className="section-heading mt-5">{content.title[locale]} <span className="font-[family-name:var(--font-instrument-serif)] font-normal italic">{content.accent[locale]}</span></h2></div><p className="body-copy max-w-[570px] text-black/55 lg:ml-auto">{content.intro[locale]}</p></MotionReveal>
        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{content.steps.map((step, index) => <MotionReveal key={step.title.en} delay={index * 0.05} className="surface-card min-h-[260px] p-6 sm:p-7"><span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#cfef57] font-[family-name:var(--font-geist-mono)] text-xs font-semibold">0{index + 1}</span><h3 className="mt-10 text-xl font-[550] leading-tight tracking-[-0.04em]">{step.title[locale]}</h3><p className="mt-4 text-sm leading-[1.65] text-black/52">{step.description[locale]}</p></MotionReveal>)}</div>
      </div>
    </section>
  );
}

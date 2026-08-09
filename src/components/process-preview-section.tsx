"use client";

import { useLocale } from "./locale-provider";
import { MotionReveal } from "./motion-reveal";

const content = {
  label: { id: "Proses / 06", en: "Process / 06" },
  title: { id: "Dari kebutuhan hingga", en: "From requirement to" },
  accent: { id: "siap digunakan.", en: "ready to use." },
  steps: {
    id: ["Ceritakan kebutuhan", "Scope & proposal", "Build", "Launch"],
    en: ["Tell us what you need", "Scope & proposal", "Build", "Launch"],
  },
} as const;

export function ProcessPreviewSection() {
  const { locale } = useLocale();

  return (
    <section className="bg-[#f0eee7] py-24 text-[#0a0a09] sm:py-32">
      <div className="site-container border-t border-black/15 pt-8">
        <MotionReveal className="grid gap-10 lg:grid-cols-12 lg:gap-6">
          <span className="label-mono text-black/42 lg:col-span-3">{content.label[locale]}</span>
          <h2 className="max-w-[900px] text-[clamp(3rem,6.5vw,6.5rem)] font-[510] leading-[0.9] tracking-[-0.06em] lg:col-span-9">
            {content.title[locale]} <span className="font-[family-name:var(--font-instrument-serif)] font-normal italic">{content.accent[locale]}</span>
          </h2>
        </MotionReveal>
        <div className="mt-14 grid border-l border-t border-black/15 sm:grid-cols-2 lg:ml-[25%] lg:grid-cols-4">
          {content.steps[locale].map((step, index) => (
            <MotionReveal key={step} delay={index * 0.05} className="min-h-[150px] border-b border-r border-black/15 p-6">
              <span className="font-[family-name:var(--font-geist-mono)] text-[0.6rem] text-black/32">0{index + 1}</span>
              <p className="mt-10 text-xl font-[520] leading-tight tracking-[-0.04em]">{step}</p>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

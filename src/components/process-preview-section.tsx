"use client";

import { homeContent } from "@/lib/home-content";
import { useLocale } from "./locale-provider";
import { MotionReveal } from "./motion-reveal";

const stepCardTintClasses = [
  "border border-[#8057ff]/20 bg-[#f4f0ff]", // 01 Purple
  "border border-[#5a37d5]/20 bg-[#f0edff]", // 02 Lavender-blue
  "border border-[#2864ff]/20 bg-[#edf5ff]", // 03 Blue
  "border border-[#d2f34c]/30 bg-[#f4f9e0]", // 04 Cyan-lime
];

const stepBadgeStyles = [
  "bg-[#8057ff] text-white",
  "bg-[#5a37d5] text-white",
  "bg-[#2864ff] text-white",
  "bg-[#070a12] text-[#d2f34c]",
];

export function ProcessPreviewSection() {
  const { locale } = useLocale();
  const copy = homeContent.process;

  return (
    <section id="process" className="process-surface-v2 scroll-mt-20 py-20 text-[#17181d] sm:py-28 lg:py-32">
      <div className="site-container">
        <MotionReveal className="grid gap-6 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:items-end">
          <div>
            <span className="label-mono inline-block rounded-full bg-[#8057ff]/10 px-3 py-1 text-[0.68rem] text-[#8057ff]">
              {copy.label[locale]}
            </span>
            <h2 className="section-heading mt-4">
              {copy.headline[locale]}{" "}
              <span className="font-[family-name:var(--font-instrument-serif)] font-normal italic text-[#8057ff]">
                {copy.accent[locale]}
              </span>
            </h2>
          </div>
          <p className="body-copy max-w-[570px] text-[#6d7180] lg:ml-auto">
            {copy.intro[locale]}
          </p>
        </MotionReveal>

        {/* Spectral Connecting Line */}
        <div className="mt-12 hidden h-1.5 w-full rounded-full bg-gradient-to-r from-[#8057ff] via-[#e44bff] via-[#2864ff] to-[#d2f34c] opacity-80 lg:block" />

        {/* 4 Steps Visual Cards Grid */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {copy.steps.map((step, index) => {
            const cardTint = stepCardTintClasses[index % stepCardTintClasses.length];
            const badgeStyle = stepBadgeStyles[index % stepBadgeStyles.length];

            return (
              <MotionReveal
                key={step.number}
                delay={index * 0.05}
                className={`group flex min-h-[260px] flex-col rounded-2xl p-7 transition duration-400 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(7,10,18,0.08)] ${cardTint}`}
              >
                <div className="flex items-center justify-between">
                  <span className={`flex h-10 w-10 items-center justify-center rounded-full font-[family-name:var(--font-geist-mono)] text-xs font-bold ${badgeStyle}`}>
                    {step.number}
                  </span>
                  <span className="label-mono text-black/35">Step 0{index + 1}</span>
                </div>

                <h3 className="mt-8 text-xl font-[550] tracking-[-0.035em] text-[#17181d]">
                  {step.title[locale]}
                </h3>
                <p className="mt-3 text-xs leading-[1.65] text-[#6d7180] sm:text-sm">
                  {step.description[locale]}
                </p>
              </MotionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}


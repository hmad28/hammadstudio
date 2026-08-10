"use client";

import { homeContent } from "@/lib/home-content";
import { useLocale } from "./locale-provider";
import { MotionReveal } from "./motion-reveal";

export function ProcessPreviewSection() {
  const { locale } = useLocale();
  const copy = homeContent.process;

  return (
    <section id="process" className="scroll-mt-20 bg-[#e6e4de] py-20 text-[#0a0a09] sm:py-28 lg:py-32">
      <div className="site-container">
        <MotionReveal className="grid gap-6 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:items-end">
          <div>
            <span className="label-mono text-black/45">{copy.label[locale]}</span>
            <h2 className="section-heading mt-4">
              {copy.headline[locale]}{" "}
              <span className="font-[family-name:var(--font-instrument-serif)] font-normal italic">
                {copy.accent[locale]}
              </span>
            </h2>
          </div>
          <p className="body-copy max-w-[570px] text-black/60 lg:ml-auto">
            {copy.intro[locale]}
          </p>
        </MotionReveal>

        {/* 4 Steps Visual Cards Grid */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {copy.steps.map((step, index) => (
            <MotionReveal
              key={step.number}
              delay={index * 0.05}
              className="surface-card group flex min-h-[260px] flex-col rounded-xl border border-[#deddd5] bg-white/70 p-7 transition duration-400 hover:-translate-y-1 hover:bg-white hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)]"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0a0a09] font-[family-name:var(--font-geist-mono)] text-xs font-semibold text-[#cfef57]">
                  {step.number}
                </span>
                <span className="label-mono text-black/25">Step 0{index + 1}</span>
              </div>

              <h3 className="mt-8 text-xl font-[550] tracking-[-0.035em] text-black">
                {step.title[locale]}
              </h3>
              <p className="mt-3 text-xs leading-[1.65] text-black/60 sm:text-sm">
                {step.description[locale]}
              </p>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}


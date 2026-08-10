"use client";

import Link from "next/link";
import { homeContent } from "@/lib/home-content";
import { ArrowUpRightIcon } from "./icons";
import { useLocale } from "./locale-provider";
import { MotionReveal } from "./motion-reveal";

const proof = {
  id: [
    ["Produk digital", "Website hingga custom system"],
    ["Engineering-led", "Bukan sekadar tampilan"],
    ["Security baseline", "Included dalam setiap build"],
    ["Indonesia & remote", "Kolaborasi tanpa batas lokasi"],
  ],
  en: [
    ["Digital products", "Websites through to custom systems"],
    ["Engineering-led", "More than visual execution"],
    ["Security baseline", "Included in every build"],
    ["Indonesia & remote", "Collaboration across locations"],
  ],
} as const;

export function AboutSection() {
  const { locale } = useLocale();
  const copy = homeContent.about;

  return (
    <section className="bg-[#f0eee7] py-20 text-[#0a0a09] sm:py-28 lg:py-32">
      <div className="site-container">
        <MotionReveal className="grid gap-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:items-center">
          <div><span className="label-mono text-black/48">{copy.label[locale]}</span><h2 className="section-heading mt-5 max-w-[620px]">{copy.headlineBefore[locale]} <span className="font-[family-name:var(--font-instrument-serif)] font-normal italic">{copy.headlineAccent[locale]}</span></h2></div>
          <div className="lg:pl-12"><p className="body-copy max-w-[610px] text-black/58">{copy.description[locale]}</p><Link href="/studio" className="group mt-7 inline-flex items-center gap-2 text-sm font-semibold">{copy.link[locale]} <ArrowUpRightIcon className="button-arrow h-4 w-4" /></Link></div>
        </MotionReveal>
        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {proof[locale].map(([title, description], index) => <MotionReveal key={title} delay={index * 0.04} className="surface-card min-h-[150px] p-6"><span className="label-mono text-black/30">0{index + 1}</span><h3 className="mt-8 text-lg font-[550] tracking-[-0.03em]">{title}</h3><p className="mt-2 text-sm leading-[1.55] text-black/50">{description}</p></MotionReveal>)}
        </div>
      </div>
    </section>
  );
}

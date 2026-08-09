"use client";

import Link from "next/link";
import { ArrowUpRightIcon } from "./icons";
import { useLocale } from "./locale-provider";

const content = {
  label: { id: "Insight", en: "Insights" },
  title: { id: "Catatan berguna. Tanpa filler.", en: "Useful notes. No filler." },
  description: { id: "Kami sedang menyiapkan kumpulan catatan praktis tentang product design, software engineering, security, dan delivery produk digital.", en: "We're preparing a focused collection of practical notes on product design, software engineering, security, and digital product delivery." },
  back: { id: "Kembali ke studio", en: "Back to studio" },
} as const;

export function InsightPageContent() {
  const { locale } = useLocale();

  return (
    <div className="min-h-[70vh] bg-[#f0eee7] px-5 pb-24 pt-40 text-[#0a0a09]">
      <div className="mx-auto max-w-[780px]">
        <span className="label-mono text-black/45">{content.label[locale]}</span>
        <h1 className="mt-6 text-[clamp(2.8rem,7vw,5.5rem)] font-[500] leading-[0.95] tracking-[-0.055em]">{content.title[locale]}</h1>
        <p className="mt-7 max-w-[590px] text-base leading-[1.7] text-black/55">{content.description[locale]}</p>
        <Link href="/" className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold">{content.back[locale]} <ArrowUpRightIcon className="button-arrow h-4 w-4" /></Link>
      </div>
    </div>
  );
}

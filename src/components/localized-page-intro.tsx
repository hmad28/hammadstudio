"use client";

import type { Localized } from "@/lib/types";
import { useLocale } from "./locale-provider";

type LocalizedPageIntroProps = {
  eyebrow: Localized;
  title: Localized;
  description: Localized;
  theme?: "dark" | "light";
};

export function LocalizedPageIntro({ eyebrow, title, description, theme = "light" }: LocalizedPageIntroProps) {
  const { locale } = useLocale();
  const dark = theme === "dark";

  return (
    <div className="site-container py-16 text-center sm:py-20">
      <span className={`label-mono ${dark ? "text-white/40" : "text-black/45"}`}>{eyebrow[locale]}</span>
      <h1 className={`mx-auto mt-5 max-w-[950px] text-[clamp(3rem,7vw,6.5rem)] font-[520] leading-[0.9] tracking-[-0.06em] ${dark ? "text-white" : "text-[#0a0a09]"}`}>{title[locale]}</h1>
      <p className={`mx-auto mt-7 max-w-[760px] text-base leading-[1.7] sm:text-lg ${dark ? "text-white/55" : "text-black/55"}`}>{description[locale]}</p>
    </div>
  );
}

"use client";

import { startTransition } from "react";
import type { Locale } from "@/lib/types";
import { useLocale } from "./locale-provider";

const locales: Locale[] = ["id", "en"];

export function LanguageSwitcher({ compact = false }: { compact?: boolean }) {
  const { locale, setLocale } = useLocale();

  return (
    <div className="flex items-center rounded-full border border-white/12 bg-white/[0.04] p-1" aria-label={locale === "id" ? "Pilih bahasa" : "Choose language"}>
      {locales.map((item) => (
        <button
          key={item}
          type="button"
          aria-pressed={locale === item}
          onClick={() => startTransition(() => setLocale(item))}
          className={`rounded-full font-[family-name:var(--font-geist-mono)] font-semibold uppercase transition-all ${compact ? "px-2 py-1 text-[0.55rem]" : "px-2.5 py-1.5 text-[0.6rem]"} ${locale === item ? "bg-white text-black" : "text-white/45 hover:text-white"}`}
        >
          {item}
        </button>
      ))}
    </div>
  );
}

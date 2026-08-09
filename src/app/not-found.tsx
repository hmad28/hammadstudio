"use client";

import Link from "next/link";
import { useLocale } from "@/components/locale-provider";

const content = {
  title: { id: "Halaman tidak ditemukan", en: "Page not found" },
  description: { id: "Halaman yang Anda cari mungkin sudah dipindahkan atau belum tersedia.", en: "The page you are looking for may have moved or is not available yet." },
  action: { id: "Kembali ke beranda", en: "Back to home" },
} as const;

export default function NotFound() {
  const { locale } = useLocale();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#0a0a09] p-5 text-center text-white">
      <span className="font-[family-name:var(--font-geist-mono)] text-[clamp(7rem,20vw,15rem)] font-semibold leading-none tracking-[-0.08em] text-[#cfef57]">404</span>
      <h1 className="mt-2 text-2xl font-[520] tracking-[-0.04em] sm:text-4xl">{content.title[locale]}</h1>
      <p className="mt-4 max-w-md text-sm leading-[1.65] text-white/45">{content.description[locale]}</p>
      <Link href="/" className="acid-button mt-8 rounded-full px-6 py-3 text-sm font-semibold">{content.action[locale]}</Link>
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { CaretDown } from "@phosphor-icons/react/CaretDown";
import { List } from "@phosphor-icons/react/List";
import { X } from "@phosphor-icons/react/X";
import { HammadStudioLogo } from "./icons";
import { LanguageSwitcher } from "./language-switcher";
import { useLocale } from "./locale-provider";

const serviceLinks = [
  { href: "/harga-website#plan-landing-page", id: "Landing Page", en: "Landing Page" },
  { href: "/jasa-website-company-profile", id: "Company Profile", en: "Company Profile" },
  { href: "/services/e-commerce", id: "Toko Online", en: "Online Store" },
  { href: "/industri/travel", id: "Tour & Travel", en: "Tour & Travel" },
  { href: "/services/business-system", id: "Sistem Bisnis", en: "Business System" },
  { href: "/website-custom", id: "Custom Software", en: "Custom Software" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();
  const { locale } = useLocale();

  const navItems = [
    { href: "/", label: locale === "id" ? "Beranda" : "Home" },
    { href: "/studio", label: locale === "id" ? "Tentang Kami" : "About" },
    { href: "/work", label: locale === "id" ? "Karya" : "Work" },
    { href: "/#faq", label: "FAQ" },
  ] as const;

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 28);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-5">
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className={`pointer-events-auto mx-auto flex h-16 max-w-[1240px] items-center justify-between rounded-full border px-4 transition-all duration-500 sm:h-[68px] sm:px-5 ${scrolled ? "max-w-[1020px] border-white/15 bg-[#090a12]/88 shadow-[0_18px_60px_rgba(0,0,0,.45)] backdrop-blur-2xl" : "border-white/10 border-r-[#8057ff]/35 bg-[#090a12]/68 backdrop-blur-xl"}`}
      >
        <Link href="/" aria-label="HAMMAD.STUDIO home">
          <HammadStudioLogo priority className="h-auto w-[150px] sm:w-[178px]" />
        </Link>

        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-6 text-xs font-medium text-white/65 lg:flex" aria-label="Primary navigation">
          <Link href="/" aria-current={pathname === "/" ? "page" : undefined} className={`nav-link transition-colors hover:text-white ${pathname === "/" ? "font-semibold text-white" : ""}`}>{locale === "id" ? "Beranda" : "Home"}</Link>

          <div className="group/services relative py-5">
            <Link href="/services" className={`nav-link flex items-center gap-1.5 transition-colors hover:text-white ${pathname.startsWith("/services") || pathname.startsWith("/jasa-") ? "font-semibold text-white" : ""}`}>
              {locale === "id" ? "Layanan" : "Services"}<CaretDown className="h-3 w-3 transition-transform duration-200 group-hover/services:rotate-180 group-focus-within/services:rotate-180" weight="bold" />
            </Link>
            <div className="invisible absolute left-1/2 top-[54px] w-[470px] -translate-x-1/2 translate-y-2 opacity-0 transition duration-200 group-hover/services:visible group-hover/services:translate-y-0 group-hover/services:opacity-100 group-focus-within/services:visible group-focus-within/services:translate-y-0 group-focus-within/services:opacity-100">
              <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/12 bg-white/10 p-px shadow-[0_28px_80px_rgba(0,0,0,.55)] backdrop-blur-2xl">
                {serviceLinks.map((item, index) => (
                  <Link key={item.href} href={item.href} className="group/item flex items-center justify-between bg-[#0b0d16]/95 px-4 py-4 text-sm text-white/65 transition hover:bg-[#151827] hover:text-white">
                    <span>{item[locale]}</span><span className="font-mono text-[.58rem] text-[#d2f34c]/55">0{index + 1}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {navItems.slice(1).map((item) => {
            const active = item.href !== "/#faq" && (pathname === item.href || pathname.startsWith(`${item.href}/`));
            return <Link key={item.href} href={item.href} aria-current={active ? "page" : undefined} className={`nav-link transition-colors hover:text-white ${active ? "font-semibold text-white" : ""}`}>{item.label}</Link>;
          })}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitcher compact />
          <button type="button" onClick={() => setOpen((value) => !value)} className="flex h-9 w-9 items-center justify-center rounded-full border border-white/12 text-white lg:hidden" aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? "Tutup navigasi" : "Buka navigasi"}>
            {open ? <X className="h-4 w-4" weight="bold" /> : <List className="h-4 w-4" weight="bold" />}
          </button>
        </div>
      </motion.div>

      <AnimatePresence>
        {open && (
          <motion.div id="mobile-navigation" initial={reduceMotion ? false : { opacity: 0, y: -12, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -8, scale: 0.98 }} transition={{ duration: 0.25 }} className="pointer-events-auto mx-auto mt-2 max-w-[1240px] overflow-hidden rounded-[24px] border border-white/10 bg-[#0a0b13]/97 p-5 shadow-2xl backdrop-blur-2xl lg:hidden">
            <nav className="flex flex-col" aria-label="Mobile navigation">
              <Link href="/" onClick={() => setOpen(false)} className="border-b border-white/10 py-4 text-lg text-white/82">{locale === "id" ? "Beranda" : "Home"}</Link>
              <details className="group border-b border-white/10">
                <summary className="flex cursor-pointer list-none items-center justify-between py-4 text-lg text-white/82 marker:hidden [&::-webkit-details-marker]:hidden"><span>{locale === "id" ? "Layanan" : "Services"}</span><CaretDown className="h-4 w-4 transition group-open:rotate-180" weight="bold" /></summary>
                <div className="grid grid-cols-2 gap-2 pb-4">
                  {serviceLinks.map((item) => <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="border border-white/10 bg-white/[.035] px-3 py-3 text-xs text-white/62">{item[locale]}</Link>)}
                </div>
              </details>
              {navItems.slice(1).map((item) => <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="border-b border-white/10 py-4 text-lg text-white/82 last:border-b-0">{item.label}</Link>)}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

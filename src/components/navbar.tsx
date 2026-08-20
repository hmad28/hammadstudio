"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowUpRight } from "@phosphor-icons/react/ArrowUpRight";
import { CaretDown } from "@phosphor-icons/react/CaretDown";
import { List } from "@phosphor-icons/react/List";
import { X } from "@phosphor-icons/react/X";
import { getPricingPlanId, pricingGroups } from "@/lib/pricing-catalog";
import { HammadStudioLogo } from "./icons";
import { LanguageSwitcher } from "./language-switcher";
import { useLocale } from "./locale-provider";
import { PricingIcon } from "./pricing-icon";

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
    { href: "/faq", label: "FAQ" },
  ] as const;

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 28);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <header className="global-site-nav pointer-events-none fixed inset-x-0 top-10 z-50 px-4 pt-3 sm:px-5 sm:pt-4">
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className={`pointer-events-auto mx-auto flex h-[70px] max-w-[1240px] items-center justify-between rounded-full border px-4 transition-all duration-500 sm:h-[74px] sm:px-6 ${scrolled ? "max-w-[1080px] border-white/15 bg-[#090a12]/88 shadow-[0_18px_60px_rgba(0,0,0,.45)] backdrop-blur-2xl" : "border-white/10 border-r-[#8057ff]/35 bg-[#090a12]/68 backdrop-blur-xl"}`}
      >
        <Link href="/" aria-label="HAMMAD.STUDIO home">
          <HammadStudioLogo priority className="h-auto w-[164px] sm:w-[194px]" />
        </Link>

        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-7 text-sm font-medium text-white/68 lg:flex" aria-label="Primary navigation">
          <Link href="/" aria-current={pathname === "/" ? "page" : undefined} className={`nav-link transition-colors hover:text-white ${pathname === "/" ? "font-semibold text-white" : ""}`}>{locale === "id" ? "Beranda" : "Home"}</Link>

          <div className="group/services relative py-5">
            <Link href="/services" className={`nav-link flex items-center gap-1.5 transition-colors hover:text-white ${pathname.startsWith("/services") || pathname.startsWith("/jasa-") ? "font-semibold text-white" : ""}`}>
              {locale === "id" ? "Layanan" : "Services"}<CaretDown className="h-3 w-3 transition-transform duration-200 group-hover/services:rotate-180 group-focus-within/services:rotate-180" weight="bold" />
            </Link>
            <div className="invisible absolute left-1/2 top-[58px] w-[1120px] max-w-[calc(100vw-40px)] -translate-x-1/2 translate-y-2 opacity-0 transition duration-200 group-hover/services:visible group-hover/services:translate-y-0 group-hover/services:opacity-100 group-focus-within/services:visible group-focus-within/services:translate-y-0 group-focus-within/services:opacity-100">
              <div className="grid grid-cols-5 gap-px overflow-hidden rounded-2xl border border-white/12 bg-white/10 p-px shadow-[0_28px_80px_rgba(0,0,0,.6)] backdrop-blur-2xl">
                {pricingGroups.map((group) => (
                  <div key={group.id} className={`bg-[#0b0d16]/97 p-4 ${group.id === "website" ? "col-span-2" : ""}`}>
                    <p className="px-2 pb-3 pt-1 font-mono text-[.75rem] font-semibold tracking-[.09em] text-[#d2f34c]">{group.number} · {group.title}</p>
                    <div className={group.id === "website" ? "grid grid-cols-2 gap-1" : "grid gap-1"}>
                      {group.plans.map((plan) => (
                        <Link key={plan.name} href={`/harga-website#${getPricingPlanId(plan.name)}`} className="group/item flex min-h-12 items-center gap-3 rounded-lg px-2.5 py-2.5 text-white/68 transition hover:bg-white/[.07] hover:text-white">
                          <PricingIcon name={plan.icon} className="h-[18px] w-[18px] shrink-0 text-[#8d72ef] transition group-hover/item:text-[#d2f34c]" />
                          <span className="min-w-0 flex-1"><span className="block text-[.88rem] font-medium leading-[1.15rem]">{plan.name}</span><span className="mt-1 block font-mono text-[.68rem] text-white/38">{plan.price}</span></span>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {navItems.slice(1).map((item) => {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
            return <Link key={item.href} href={item.href} aria-current={active ? "page" : undefined} className={`nav-link transition-colors hover:text-white ${active ? "font-semibold text-white" : ""}`}>{item.label}</Link>;
          })}
          <Link href="/partner" aria-current={pathname === "/partner" ? "page" : undefined} className={`rounded-full border px-4 py-2 text-xs font-semibold transition ${pathname === "/partner" ? "border-[#d2f34c] bg-[#d2f34c] text-[#090a12]" : "border-[#d2f34c]/35 bg-[#d2f34c]/10 text-[#d2f34c] hover:bg-[#d2f34c] hover:text-[#090a12]"}`}>Partner</Link>
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitcher compact />
          <button type="button" onClick={() => setOpen((value) => !value)} className="flex h-10 w-10 items-center justify-center rounded-full border border-white/12 text-white lg:hidden" aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? "Tutup navigasi" : "Buka navigasi"}>
            {open ? <X className="h-[18px] w-[18px]" weight="bold" /> : <List className="h-[18px] w-[18px]" weight="bold" />}
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
                <div className="max-h-[56vh] space-y-4 overflow-y-auto pb-4 pr-1">
                  {pricingGroups.map((group) => (
                    <div key={group.id}>
                      <p className="mb-2 font-mono text-[.72rem] font-semibold tracking-[.09em] text-[#d2f34c]">{group.title}</p>
                      <div className="grid grid-cols-2 gap-2">
                        {group.plans.map((plan) => <Link key={plan.name} href={`/harga-website#${getPricingPlanId(plan.name)}`} onClick={() => setOpen(false)} className="flex min-h-14 items-center gap-2.5 border border-white/10 bg-white/[.035] px-3 py-3 text-[.88rem] leading-[1.15rem] text-white/72"><PricingIcon name={plan.icon} className="h-5 w-5 shrink-0 text-[#8d72ef]" /><span>{plan.name}</span></Link>)}
                      </div>
                    </div>
                  ))}
                </div>
              </details>
              {navItems.slice(1).map((item) => <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="border-b border-white/10 py-4 text-lg text-white/82 last:border-b-0">{item.label}</Link>)}
              <Link href="/partner" onClick={() => setOpen(false)} className="mt-4 flex items-center justify-between rounded-xl bg-[#d2f34c] px-4 py-4 text-lg font-semibold text-[#090a12]">Partner <ArrowUpRight className="h-5 w-5" weight="bold" /></Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

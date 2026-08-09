"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { homeContent } from "@/lib/home-content";
import { ArrowUpRightIcon, CloseIcon, HammadStudioLogo, MenuIcon } from "./icons";
import { LanguageSwitcher } from "./language-switcher";
import { useLocale } from "./locale-provider";

const projectUrl = "https://wa.me/6287888362186?text=Halo%20HAMMAD.STUDIO%2C%20saya%20ingin%20memulai%20project";
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduceMotion = useReducedMotion();
  const { locale } = useLocale();
  const copy = homeContent.nav;
  const navItems = [
    { href: "/#services", label: copy.services[locale] },
    { href: "/#work", label: copy.work[locale] },
    { href: "/#pricing", label: copy.pricing[locale] },
    { href: "/about", label: copy.studio[locale] },
  ];

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
        className={`pointer-events-auto mx-auto flex h-14 max-w-[1240px] items-center justify-between rounded-full border px-4 transition-all duration-500 sm:h-[60px] sm:px-5 ${scrolled ? "max-w-[900px] border-white/14 bg-[#0a0a09]/88 shadow-[0_18px_60px_rgba(0,0,0,.34)] backdrop-blur-2xl" : "border-white/10 bg-[#0a0a09]/58 backdrop-blur-xl"}`}
      >
        <Link href="/" aria-label="HAMMAD.STUDIO home"><HammadStudioLogo /></Link>
        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-7 text-[0.7rem] font-medium text-white/58 lg:flex" aria-label="Primary navigation">
          {navItems.map((item) => <Link key={item.href} href={item.href} className="nav-link transition-colors hover:text-white">{item.label}</Link>)}
        </nav>
        <div className="flex items-center gap-2">
          <LanguageSwitcher compact />
          <a href={projectUrl} target="_blank" rel="noreferrer" className="acid-button group hidden items-center gap-2 rounded-full px-4 py-2.5 text-[0.7rem] font-semibold lg:inline-flex">{copy.talk[locale]} <ArrowUpRightIcon className="button-arrow h-3.5 w-3.5" /></a>
          <button type="button" onClick={() => setOpen((value) => !value)} className="flex h-9 w-9 items-center justify-center rounded-full border border-white/12 text-white lg:hidden" aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? copy.close[locale] : copy.open[locale]}>
            {open ? <CloseIcon className="h-4 w-4" /> : <MenuIcon className="h-4 w-4" />}
          </button>
        </div>
      </motion.div>

      <AnimatePresence>
        {open && (
          <motion.div id="mobile-navigation" initial={reduceMotion ? false : { opacity: 0, y: -12, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -8, scale: 0.98 }} transition={{ duration: 0.25 }} className="pointer-events-auto mx-auto mt-2 max-w-[1240px] overflow-hidden rounded-[24px] border border-white/10 bg-[#0a0a09]/96 p-5 shadow-2xl backdrop-blur-2xl lg:hidden">
            <nav className="flex flex-col" aria-label="Mobile navigation">
              {navItems.map((item, index) => (
                <motion.div key={item.href} initial={reduceMotion ? false : { opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.04 }}>
                  <Link href={item.href} onClick={() => setOpen(false)} className="flex items-center justify-between border-b border-white/10 py-4 text-lg text-white/82"><span>{item.label}</span><span className="text-white/30">0{index + 1}</span></Link>
                </motion.div>
              ))}
            </nav>
            <a href={projectUrl} target="_blank" rel="noreferrer" className="acid-button group mt-5 flex w-full items-center justify-center gap-2 rounded-full px-4 py-3 text-sm font-semibold">{homeContent.hero.primary[locale]} <ArrowUpRightIcon className="button-arrow h-4 w-4" /></a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

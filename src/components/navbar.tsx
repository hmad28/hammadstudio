"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpRightIcon, CloseIcon, HammadStudioLogo, MenuIcon } from "./icons";

const projectUrl = "https://wa.me/6287888362186?text=Halo%20HAMMAD.STUDIO%2C%20saya%20ingin%20memulai%20project";
const navItems = [
  { href: "/#services", label: "Services" },
  { href: "/#work", label: "Work" },
  { href: "/#pricing", label: "Pricing" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 18);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-5 pt-4">
      <div className="mx-auto max-w-[1180px]">
        <div className={`pointer-events-auto flex h-14 items-center justify-between rounded-[18px] border px-5 transition-all duration-300 lg:h-16 lg:px-6 ${scrolled ? "border-white/12 bg-[#080808]/88 shadow-[0_16px_50px_rgba(0,0,0,.28)] backdrop-blur-[18px]" : "border-white/[.08] bg-[#080808]/45 backdrop-blur-[14px]"}`}>
          <Link href="/" aria-label="HAMMAD.STUDIO home">
            <HammadStudioLogo />
          </Link>

          <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-9 text-[0.74rem] font-medium text-[#c5c5c1] lg:flex" aria-label="Primary navigation">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="transition-colors duration-200 hover:text-white">
                {item.label}
              </Link>
            ))}
          </nav>

          <a href={projectUrl} target="_blank" rel="noreferrer" className="silver-button group hidden items-center gap-2 rounded-xl px-4 py-2.5 text-[0.72rem] font-semibold lg:inline-flex">
            Start a Project
            <ArrowUpRightIcon className="button-arrow h-3.5 w-3.5" />
          </a>

          <button type="button" onClick={() => setOpen((value) => !value)} className="text-[#f1f1ee] lg:hidden" aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? "Close navigation" : "Open navigation"}>
            {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div id="mobile-navigation" className="pointer-events-auto mt-2 rounded-[18px] border border-white/10 bg-[#0a0a0a]/96 p-5 shadow-2xl backdrop-blur-[18px] lg:hidden">
            <nav className="flex flex-col" aria-label="Mobile navigation">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="border-b border-white/8 py-3.5 text-sm text-[#ddddda] last:border-0">
                  {item.label}
                </Link>
              ))}
            </nav>
            <a href={projectUrl} target="_blank" rel="noreferrer" className="silver-button group mt-5 flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold">
              Start a Project
              <ArrowUpRightIcon className="button-arrow h-4 w-4" />
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
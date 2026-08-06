"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { HammadStudioLogo, ArrowUpRightIcon, MenuIcon, CloseIcon } from "./icons";

const WHATSAPP_URL = "https://wa.me/+6287888362186?text=Halo%20HAMMAD.STUDIO%2C%20saya%20tertarik%20untuk%20memulai%20proyek";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 w-full pt-4 px-4 pointer-events-none">
      <div className="mx-auto max-w-[1200px]">
        {/* Desktop Navbar */}
        <div
          className={`pointer-events-auto hidden lg:flex items-center justify-between mx-auto rounded-2xl px-6 py-3 transition-all duration-300 ${
            scrolled
              ? "bg-[#080808]/85 backdrop-blur-xl border border-white/12 shadow-2xl"
              : "bg-[#080808]/45 backdrop-blur-md border border-white/8"
          }`}
        >
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-2">
            <HammadStudioLogo />
          </Link>

          {/* Clean Navigation Links */}
          <nav className="flex items-center gap-8 text-xs font-medium tracking-wide text-zinc-300">
            <Link href="/#services" className="hover:text-white transition-colors">
              Services
            </Link>
            <Link href="/#work" className="hover:text-white transition-colors">
              Work
            </Link>
            <Link href="/#pricing" className="hover:text-white transition-colors">
              Pricing
            </Link>
          </nav>

          {/* Action CTA */}
          <div className="flex items-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-4 py-2 btn-primary-platinum text-xs font-semibold rounded-xl cursor-pointer"
            >
              Start a Project
              <ArrowUpRightIcon className="w-3.5 h-3.5 btn-arrow transition-transform duration-200" />
            </a>
          </div>
        </div>

        {/* Mobile Navbar Bar */}
        <div className="pointer-events-auto flex lg:hidden items-center justify-between bg-[#080808]/85 backdrop-blur-md rounded-2xl px-5 py-3 border border-white/10 shadow-lg">
          <Link href="/">
            <HammadStudioLogo />
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-white hover:text-zinc-300 focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <CloseIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu Dropdown Overlay */}
        {mobileMenuOpen && (
          <div className="pointer-events-auto lg:hidden mt-2 bg-[#0d0d0d] border border-white/10 rounded-2xl p-5 space-y-4 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col space-y-3 font-medium text-sm text-zinc-300">
              <Link href="/#services" onClick={() => setMobileMenuOpen(false)} className="hover:text-white">
                Services
              </Link>
              <Link href="/#work" onClick={() => setMobileMenuOpen(false)} className="hover:text-white">
                Work
              </Link>
              <Link href="/#pricing" onClick={() => setMobileMenuOpen(false)} className="hover:text-white">
                Pricing
              </Link>
            </nav>

            <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 btn-primary-platinum font-bold rounded-xl text-center flex items-center justify-center gap-2"
              >
                Start a Project
                <ArrowUpRightIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { HammadStudioLogo, InstagramIcon, ArrowRightIcon, MenuIcon, CloseIcon } from "./icons";

const WHATSAPP_URL = "https://wa.me/+6287888362186?text=Halo%20Hammad%20Studio%2C%20saya%20tertarik%20dengan%20layanan%20Anda";

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
      <div className="mx-auto max-w-7xl">
        {/* Desktop Navbar */}
        <div
          className={`pointer-events-auto hidden lg:flex items-center justify-between mx-auto rounded-full px-6 py-2.5 transition-all duration-300 ${
            scrolled
              ? "bg-[#090909]/85 backdrop-blur-xl border border-white/15 shadow-2xl"
              : "bg-[#0a0a0a]/72 backdrop-blur-md border border-white/10"
          }`}
        >
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-2">
            <HammadStudioLogo />
          </Link>

          {/* Navigation Links */}
          <nav className="flex items-center gap-1 text-sm font-medium text-[#c3c3c0]">
            <Link href="/" className="px-3.5 py-1.5 hover:text-white transition-colors">
              Home
            </Link>
            <Link href="/services" className="px-3.5 py-1.5 hover:text-white transition-colors">
              Services
            </Link>
            <Link href="/product" className="px-3.5 py-1.5 hover:text-white transition-colors">
              Product
            </Link>
            <Link href="/portofolio" className="px-3.5 py-1.5 hover:text-white transition-colors">
              Portofolio
            </Link>
            <Link href="/#PricingList" className="px-3.5 py-1.5 hover:text-white transition-colors">
              Pricing
            </Link>
            <Link href="/insight" className="px-3.5 py-1.5 hover:text-white transition-colors">
              News
            </Link>
            <Link href="/about" className="px-3.5 py-1.5 hover:text-white transition-colors">
              About
            </Link>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/hammadstudio/"
              target="_blank"
              rel="noopener noreferrer"
              className="pr-3 border-r border-white/15 text-[#c3c3c0] hover:text-white transition-colors"
              aria-label="Instagram Hammad Studio"
            >
              <InstagramIcon className="w-5 h-5" />
            </a>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group pl-4 pr-1.5 py-1.5 btn-primary-silver text-xs sm:text-sm font-semibold rounded-full flex items-center gap-2.5 cursor-pointer"
            >
              Contact Us
              <span className="rounded-full bg-[#080808] text-white h-7 w-7 flex items-center justify-center transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <ArrowRightIcon className="w-3.5 h-3.5" />
              </span>
            </a>
          </div>
        </div>

        {/* Mobile Navbar Bar */}
        <div className="pointer-events-auto flex lg:hidden items-center justify-between bg-[#0a0a0a]/80 backdrop-blur-md rounded-2xl px-4 py-3 border border-white/10 shadow-lg">
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
          <div className="pointer-events-auto lg:hidden mt-2 bg-[#111111] border border-white/10 rounded-2xl p-5 space-y-4 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col space-y-3 font-medium text-[#c3c3c0]">
              <Link href="/" onClick={() => setMobileMenuOpen(false)} className="hover:text-white">
                Home
              </Link>
              <Link href="/services" onClick={() => setMobileMenuOpen(false)} className="hover:text-white">
                Services
              </Link>
              <Link href="/product" onClick={() => setMobileMenuOpen(false)} className="hover:text-white">
                Product
              </Link>
              <Link href="/portofolio" onClick={() => setMobileMenuOpen(false)} className="hover:text-white">
                Portofolio
              </Link>
              <Link href="/#PricingList" onClick={() => setMobileMenuOpen(false)} className="hover:text-white">
                Pricing
              </Link>
              <Link href="/insight" onClick={() => setMobileMenuOpen(false)} className="hover:text-white">
                News
              </Link>
              <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="hover:text-white">
                About
              </Link>
            </nav>

            <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 btn-primary-silver font-bold rounded-full text-center flex items-center justify-center gap-2"
              >
                Contact Us
                <ArrowRightIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

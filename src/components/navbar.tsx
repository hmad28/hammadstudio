"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { InstagramIcon, ArrowRightIcon, MenuIcon, CloseIcon } from "./icons";

const WHATSAPP_URL = "https://wa.me/+6287888362186?text=Halo%20saya%20tertarik%20dengan%20layanan%20Anda";

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
              ? "bg-[#0D1526]/80 backdrop-blur-xl border border-white/10 shadow-2xl"
              : "bg-transparent border border-transparent"
          }`}
        >
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/assets/img/brand/dytama-white.svg"
              alt="Dytama Logo"
              width={100}
              height={22}
              className="w-24 h-auto object-contain"
              priority
            />
          </Link>

          {/* Navigation Links */}
          <nav className="flex items-center gap-1 text-sm font-medium text-zinc-300">
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
              href="https://www.instagram.com/dytama.studio/"
              target="_blank"
              rel="noopener noreferrer"
              className="pr-3 border-r border-gray-600 text-white hover:text-[#D9FF43] transition-colors"
              aria-label="Instagram Dytama"
            >
              <InstagramIcon className="w-5 h-5" />
            </a>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="pl-4 pr-1.5 py-1.5 text-black text-sm font-bold bg-[#D9FF43] hover:bg-[#cfe83f] rounded-full flex items-center gap-2.5 transition-all duration-200 shadow-lg shadow-[#D9FF43]/10 hover:scale-105"
            >
              Contact Us
              <span className="rounded-full bg-white text-black h-7 w-7 flex items-center justify-center">
                <ArrowRightIcon className="w-4 h-4" />
              </span>
            </a>
          </div>
        </div>

        {/* Mobile Navbar Bar */}
        <div className="pointer-events-auto flex lg:hidden items-center justify-between bg-[#0D1526]/90 backdrop-blur-md rounded-2xl px-4 py-3 border border-white/10 shadow-lg">
          <Link href="/">
            <Image
              src="/assets/img/brand/dytama-white.svg"
              alt="Dytama Logo"
              width={90}
              height={20}
              className="w-20 h-auto"
            />
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-white hover:text-[#D9FF43] focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <CloseIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu Dropdown Overlay */}
        {mobileMenuOpen && (
          <div className="pointer-events-auto lg:hidden mt-2 bg-[#121A2D] border border-white/10 rounded-2xl p-5 space-y-4 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col space-y-3 font-medium text-zinc-200">
              <Link href="/" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#D9FF43]">
                Home
              </Link>
              <Link href="/services" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#D9FF43]">
                Services
              </Link>
              <Link href="/product" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#D9FF43]">
                Product
              </Link>
              <Link href="/portofolio" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#D9FF43]">
                Portofolio
              </Link>
              <Link href="/#PricingList" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#D9FF43]">
                Pricing
              </Link>
              <Link href="/insight" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#D9FF43]">
                News
              </Link>
              <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#D9FF43]">
                About
              </Link>
            </nav>

            <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-[#D9FF43] text-black font-bold rounded-full text-center flex items-center justify-center gap-2"
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

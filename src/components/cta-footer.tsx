"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { InstagramIcon, WhatsAppIcon, ArrowRightIcon } from "./icons";

const WHATSAPP_URL = "https://wa.me/+6287888362186?text=Halo%20saya%20tertarik%20dengan%20layanan%20Anda";

export function CTAFooter() {
  return (
    <footer className="relative w-full bg-[#0B101D] text-white pt-20 pb-12 overflow-hidden border-t border-white/10">
      {/* Background radial glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/30 via-transparent to-transparent pointer-events-none" />

      <div className="container max-w-7xl mx-auto px-4 relative z-10 space-y-16">
        {/* CTA Banner Card */}
        <div className="relative rounded-3xl p-8 sm:p-12 lg:p-16 bg-gradient-to-r from-[#1C1444] via-[#2D1B69] to-[#121A2D] border border-white/10 shadow-2xl overflow-hidden text-center flex flex-col items-center space-y-6">
          <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

          <span className="text-xs font-semibold uppercase tracking-widest text-[#D9FF43] px-3.5 py-1 bg-white/10 rounded-full">
            Lets Talk
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tight max-w-4xl leading-tight">
            Siap Membangun Produk Digital Impian Anda?
          </h2>

          <p className="text-sm sm:text-base text-zinc-300 max-w-xl">
            Konsultasikan ide produk, proyek website, atau UI/UX studio Anda bersama tim Dytama secara gratis.
          </p>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#D9FF43] hover:bg-[#cfe83f] text-black font-bold text-base rounded-full transition-all duration-200 shadow-xl shadow-[#D9FF43]/20 hover:scale-105"
          >
            Konsultasi Sekarang via WhatsApp
            <WhatsAppIcon className="w-5 h-5" />
          </a>
        </div>

        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pt-8 border-t border-white/10">
          {/* Brand Info */}
          <div className="md:col-span-1 space-y-4">
            <Link href="/">
              <Image
                src="/assets/img/brand/dytama-white.svg"
                alt="Dytama Logo"
                width={110}
                height={24}
                className="w-28 h-auto"
              />
            </Link>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Dytama adalah tech consulting, creative dan digital product studio yang membantu bisnis merancang, mendesain, dan mengembangkan produk digital modern.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.instagram.com/dytama.studio/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:text-[#D9FF43] hover:border-[#D9FF43] transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:text-[#D9FF43] hover:border-[#D9FF43] transition-colors"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-2 text-xs text-zinc-400 font-medium">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/product" className="hover:text-white transition-colors">Product</Link></li>
              <li><Link href="/portofolio" className="hover:text-white transition-colors">Portofolio</Link></li>
              <li><Link href="/#PricingList" className="hover:text-white transition-colors">Pricing</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
            </ul>
          </div>

          {/* Services Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Services</h4>
            <ul className="space-y-2 text-xs text-zinc-400 font-medium">
              <li><span className="text-zinc-300">UI/UX Design Studio</span></li>
              <li><span className="text-zinc-300">Web Development & Next.js</span></li>
              <li><span className="text-zinc-300">Mobile App Development</span></li>
              <li><span className="text-zinc-300">SEO & Growth Strategy</span></li>
              <li><span className="text-zinc-300">Custom SaaS Architecture</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Contact Us</h4>
            <ul className="space-y-2 text-xs text-zinc-400 leading-relaxed font-medium">
              <li><span className="text-white font-semibold">WhatsApp:</span> +62 878-8836-2186</li>
              <li><span className="text-white font-semibold">Email:</span> hello@dytama.com</li>
              <li><span className="text-white font-semibold">Location:</span> Jakarta & Depok, Indonesia</li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 gap-4">
          <p>© {new Date().getFullYear()} Dytama Studio. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with Next.js 16 & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}

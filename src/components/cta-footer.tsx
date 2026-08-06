"use client";

import React from "react";
import Link from "next/link";
import { HammadStudioLogo, InstagramIcon, WhatsAppIcon } from "./icons";

const WHATSAPP_URL = "https://wa.me/+6287888362186?text=Halo%20Hammad%20Studio%2C%20saya%20tertarik%20dengan%20layanan%20Anda";

export function CTAFooter() {
  return (
    <footer className="relative w-full bg-[#050505] text-white pt-20 pb-12 overflow-hidden border-t border-white/10">
      {/* Subtle background radial spotlight */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-radial-silver opacity-40 pointer-events-none" />

      <div className="container max-w-7xl mx-auto px-4 relative z-10 space-y-16">
        {/* CTA Banner Card (Inverted Silver Surface Visual Break) */}
        <div
          className="relative rounded-3xl p-8 sm:p-12 lg:p-16 border border-black/10 shadow-2xl overflow-hidden text-center flex flex-col items-center space-y-6 text-[#090909]"
          style={{ background: "linear-gradient(135deg, #ffffff 0%, #ececea 45%, #cfcfcd 100%)" }}
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-zinc-700 px-3.5 py-1 bg-black/5 rounded-full border border-black/10">
            Lets Talk
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tight max-w-4xl leading-tight text-[#090909]">
            Siap Membangun Produk Digital Impian Anda?
          </h2>

          <p className="text-sm sm:text-base text-zinc-700 max-w-xl">
            Konsultasikan ide produk, proyek website, atau UI/UX studio Anda bersama tim Hammad Studio secara gratis.
          </p>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#090909] hover:bg-zinc-800 text-white font-bold text-base rounded-full transition-all duration-200 shadow-xl cursor-pointer"
          >
            Konsultasi Sekarang via WhatsApp
            <WhatsAppIcon className="w-5 h-5" />
          </a>
        </div>

        {/* Footer Navigation Columns */}
        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-10 pt-8 border-t border-white/10">
          {/* Huge Subtle HAMMAD.STUDIO Typography Background */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden z-0">
            <span className="text-[12vw] font-black tracking-tighter text-white/[0.035] whitespace-nowrap">
              HAMMAD.STUDIO
            </span>
          </div>

          {/* Brand Info */}
          <div className="md:col-span-1 space-y-4 relative z-10">
            <Link href="/">
              <HammadStudioLogo />
            </Link>
            <p className="text-xs text-[#858583] leading-relaxed">
              Hammad Studio adalah tech consulting, creative dan digital product studio yang membantu bisnis merancang, mendesain, dan mengembangkan produk digital modern.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.instagram.com/hammadstudio/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#c3c3c0] hover:text-white hover:border-white transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#c3c3c0] hover:text-white hover:border-white transition-colors"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3 relative z-10">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest">Navigation</h4>
            <ul className="space-y-2 text-xs text-[#858583] font-medium">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/product" className="hover:text-white transition-colors">Product</Link></li>
              <li><Link href="/portofolio" className="hover:text-white transition-colors">Portofolio</Link></li>
              <li><Link href="/#PricingList" className="hover:text-white transition-colors">Pricing</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
            </ul>
          </div>

          {/* Services Links */}
          <div className="space-y-3 relative z-10">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest">Services</h4>
            <ul className="space-y-2 text-xs text-[#858583] font-medium">
              <li><span className="text-[#c3c3c0]">UI/UX Design Studio</span></li>
              <li><span className="text-[#c3c3c0]">Web Development & Next.js</span></li>
              <li><span className="text-[#c3c3c0]">Mobile App Development</span></li>
              <li><span className="text-[#c3c3c0]">SEO & Growth Strategy</span></li>
              <li><span className="text-[#c3c3c0]">Custom SaaS Architecture</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-3 relative z-10">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest">Contact Us</h4>
            <ul className="space-y-2 text-xs text-[#858583] leading-relaxed font-medium">
              <li><span className="text-white font-semibold">WhatsApp:</span> +62 878-8836-2186</li>
              <li><span className="text-white font-semibold">Email:</span> hello@hammad.studio</li>
              <li><span className="text-white font-semibold">Location:</span> Depok & Jakarta, Indonesia</li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-[#858583] gap-4 relative z-10">
          <p>© {new Date().getFullYear()} HAMMAD.STUDIO. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Luxury Monochrome Digital Product Studio
          </p>
        </div>
      </div>
    </footer>
  );
}

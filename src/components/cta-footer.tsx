"use client";

import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/ArrowUpRight";
import { EnvelopeSimple } from "@phosphor-icons/react/EnvelopeSimple";
import { FacebookLogo } from "@phosphor-icons/react/FacebookLogo";
import { InstagramLogo } from "@phosphor-icons/react/InstagramLogo";
import { MapPin } from "@phosphor-icons/react/MapPin";
import { TiktokLogo } from "@phosphor-icons/react/TiktokLogo";
import { WhatsappLogo } from "@phosphor-icons/react/WhatsappLogo";
import { homeContent } from "@/lib/home-content";
import { ArrowUpRightIcon, HammadStudioLogo } from "./icons";
import { useLocale } from "./locale-provider";
import { MotionReveal } from "./motion-reveal";

const navigationLinks = [
  { href: "/", label: "Beranda" },
  { href: "/services", label: "Layanan" },
  { href: "/studio", label: "Tentang Kami" },
  { href: "/work", label: "Karya" },
  { href: "/harga-website", label: "Harga" },
  { href: "/insight", label: "Insight" },
  { href: "/#faq", label: "FAQ" },
  { href: "/contact", label: "Kontak" },
] as const;

const serviceLinks = [
  { href: "/harga-website#landing-page", label: "Landing Page" },
  { href: "/jasa-website-company-profile", label: "Company Profile" },
  { href: "/jasa-website-umkm", label: "Website UMKM" },
  { href: "/industri/travel", label: "Tour & Travel" },
  { href: "/solusi/umkm/toko-online", label: "Product Catalog" },
  { href: "/services/e-commerce", label: "E-Commerce" },
  { href: "/website-custom", label: "Business System" },
  { href: "/website-custom", label: "Custom Software" },
] as const;

const industryLinks = [
  { href: "/industri/travel", label: "Travel & Umrah" },
  { href: "/industri/logistik", label: "Logistik" },
  { href: "/industri/umkm-kuliner", label: "Kuliner" },
  { href: "/industri/pendidikan", label: "Pendidikan" },
  { href: "/industri/fashion", label: "Fashion" },
  { href: "/industri/distributor", label: "Distributor" },
  { href: "/industri/event", label: "Event" },
] as const;

const insightLinks = [
  { href: "/insight/berapa-harga-pembuatan-website", label: "Harga pembuatan website" },
  { href: "/insight/harga-website-company-profile", label: "Harga company profile" },
  { href: "/insight/website-atau-instagram-untuk-bisnis", label: "Website vs Instagram" },
  { href: "/insight/contoh-website-company-profile-yang-bagus", label: "Contoh company profile" },
  { href: "/insight/cara-memilih-jasa-pembuatan-website-terpercaya", label: "Memilih jasa website" },
] as const;

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      prefetch={false}
      className="group flex w-fit items-center gap-2 py-1 text-[0.94rem] leading-6 text-white/62 transition-colors duration-200 hover:text-white focus-visible:text-white"
    >
      <span className="h-px w-0 bg-[#d2f34c] transition-[width] duration-200 group-hover:w-3" aria-hidden="true" />
      {children}
    </Link>
  );
}

export function CTAFooter() {
  const { locale } = useLocale();
  const copy = homeContent.footer;

  return (
    <footer className="bg-[#070a12] text-white">
      {/* Signature Multi-spectral Luxury CTA Section */}
      <section className="cta-surface-signature relative overflow-hidden px-5 py-24 text-[#070a12] shadow-2xl sm:px-8 sm:py-32 lg:py-36">
        {/* Ambient Radial Glow Overlays */}
        <div className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_at_center,rgba(89,62,255,0.45)_0%,transparent_70%)] blur-3xl" aria-hidden="true" />
        <div className="pointer-events-none absolute left-1/3 bottom-0 h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle_at_center,rgba(228,75,255,0.35)_0%,transparent_70%)] blur-3xl" aria-hidden="true" />

        <MotionReveal className="relative z-10 mx-auto max-w-[1240px]">
          <div className="flex flex-wrap items-center justify-between border-b border-black/15 pb-6">
            <span className="label-mono font-bold tracking-wider text-black/80">{copy.prompt[locale]}</span>
            <span className="label-mono hidden text-black/80 sm:block">{copy.makeReal[locale]}</span>
          </div>

          <div className="mt-10 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <Link href="/contact" className="group block">
              <h2 className="text-[clamp(3.8rem,10.5vw,10rem)] font-[540] leading-[0.8] tracking-[-0.075em] text-[#070a12]">
                {copy.lets[locale]}
                <br />
                <span className="font-[family-name:var(--font-instrument-serif)] font-normal italic">
                  {copy.talk[locale]}
                </span>
              </h2>
            </Link>

            <div className="max-w-[440px] lg:text-left">
              <p className="text-base font-medium leading-[1.65] text-[#070a12]/90 sm:text-lg">
                {copy.description[locale]}
              </p>
              <div className="mt-6">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 rounded-full bg-[#070a12] px-7 py-4 text-sm font-semibold text-white shadow-2xl transition hover:bg-black/90"
                >
                  {copy.ctaButton[locale]}
                  <ArrowUpRightIcon className="button-arrow h-4 w-4 text-[#d2f34c]" />
                </Link>
              </div>
            </div>
          </div>
        </MotionReveal>
      </section>

      {/* Editorial internal-link footer */}
      <section className="footer-surface-v2 relative overflow-hidden py-16 sm:py-20">
        <div className="pointer-events-none absolute inset-0 opacity-[.16] [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent_88%)]" aria-hidden="true" />
        <div className="pointer-events-none absolute -right-24 top-28 h-72 w-72 rounded-full border-[52px] border-[#8057ff]/10" aria-hidden="true" />
        <div className="pointer-events-none absolute -left-10 bottom-40 text-[14rem] font-semibold leading-none text-white/[.025]" aria-hidden="true">*</div>

        <div className="site-container relative z-10">
          <div className="grid gap-12 border-b border-white/12 pb-12 sm:pb-14 lg:grid-cols-12 lg:items-end lg:gap-8">
            <div className="lg:col-span-7">
              <Link href="/" aria-label="HAMMAD.STUDIO home">
                <HammadStudioLogo className="h-auto w-[260px] sm:w-[300px]" />
              </Link>
              <p className="mt-6 max-w-[580px] text-base leading-7 text-white/62 sm:text-lg sm:leading-8">
                {locale === "id"
                  ? "Jasa pembuatan website, e-commerce, dan sistem bisnis untuk UMKM serta perusahaan dari Jakarta."
                  : "Websites, e-commerce, and business systems for growing businesses and companies from Jakarta."}
              </p>
              <div className="mt-5 flex items-center gap-2.5 text-sm text-white/78">
                <span className="availability-dot" /> {copy.available[locale]}
              </div>
            </div>

            <div className="lg:col-span-5 lg:text-right">
              <p className="label-mono !text-[.8rem] text-[#d2f34c]">{copy.newBusiness[locale]}</p>
              <a
                href="mailto:hello@hammad.studio"
                className="mt-3 inline-block text-[clamp(1.65rem,3.2vw,3rem)] font-[520] leading-none tracking-[-0.05em] text-white transition-colors hover:text-[#d2f34c]"
              >
                hello@hammad.studio
              </a>
              <div className="mt-6 flex flex-wrap gap-2 lg:justify-end">
                <a
                  href="https://www.instagram.com/hammad.biz/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram Hammad Studio"
                  className="grid size-11 place-items-center border border-white/12 bg-white/[.035] text-white/65 transition hover:border-[#d2f34c]/60 hover:bg-[#d2f34c] hover:text-[#070a12]"
                >
                  <InstagramLogo size={20} weight="regular" />
                </a>
                <a
                  href="https://www.facebook.com/itshammadstudio"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook Hammad Studio"
                  className="grid size-11 place-items-center border border-white/12 bg-white/[.035] text-white/65 transition hover:border-[#d2f34c]/60 hover:bg-[#d2f34c] hover:text-[#070a12]"
                >
                  <FacebookLogo size={20} weight="regular" />
                </a>
                <a
                  href="https://www.tiktok.com/@its_hammadstudio"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="TikTok Hammad Studio"
                  className="grid size-11 place-items-center border border-white/12 bg-white/[.035] text-white/65 transition hover:border-[#d2f34c]/60 hover:bg-[#d2f34c] hover:text-[#070a12]"
                >
                  <TiktokLogo size={20} weight="regular" />
                </a>
                <a
                  href="https://wa.me/6285199391215"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="WhatsApp Hammad Studio"
                  className="grid size-11 place-items-center border border-white/12 bg-white/[.035] text-white/65 transition hover:border-[#d2f34c]/60 hover:bg-[#d2f34c] hover:text-[#070a12]"
                >
                  <WhatsappLogo size={20} weight="regular" />
                </a>
              </div>
            </div>
          </div>

          <div className="grid border-b border-white/12 sm:grid-cols-2 lg:grid-cols-12">
            <div className="relative border-b border-white/10 py-10 sm:border-r lg:col-span-2 lg:border-b-0 lg:py-12 lg:pr-7">
              <span className="absolute right-4 top-4 font-mono text-[0.62rem] text-white/18">01</span>
              <p className="label-mono !text-[.8rem] text-[#d2f34c]">NAVIGASI</p>
              <nav className="mt-5 grid gap-2" aria-label="Navigasi footer">
                {navigationLinks.map((link) => (
                  <FooterLink key={link.href} href={link.href}>{link.label}</FooterLink>
                ))}
              </nav>
            </div>

            <div className="relative border-b border-white/10 py-10 sm:pl-7 lg:col-span-3 lg:border-b-0 lg:border-r lg:px-7 lg:py-12">
              <span className="absolute right-4 top-4 font-mono text-[0.62rem] text-white/18">02</span>
              <p className="label-mono !text-[.8rem] text-[#9b7dff]">LAYANAN POPULER</p>
              <nav className="mt-5 grid gap-2" aria-label="Layanan populer">
                {serviceLinks.map((link) => (
                  <FooterLink key={`${link.href}-${link.label}`} href={link.href}>{link.label}</FooterLink>
                ))}
              </nav>
            </div>

            <div className="relative border-b border-white/10 py-10 sm:border-r lg:col-span-3 lg:border-b-0 lg:px-7 lg:py-12">
              <span className="absolute right-4 top-4 font-mono text-[0.62rem] text-white/18">03</span>
              <p className="label-mono !text-[.8rem] text-[#9b7dff]">INDUSTRI</p>
              <nav className="mt-5 grid gap-2" aria-label="Solusi berdasarkan industri">
                {industryLinks.map((link) => (
                  <FooterLink key={link.href} href={link.href}>{link.label}</FooterLink>
                ))}
              </nav>
            </div>

            <div className="relative py-10 sm:pl-7 lg:col-span-4 lg:pl-7 lg:py-12">
              <span className="absolute right-4 top-4 font-mono text-[0.62rem] text-white/18">04</span>
              <p className="label-mono !text-[.8rem] text-[#9b7dff]">PANDUAN BISNIS</p>
              <nav className="mt-5 grid gap-2" aria-label="Insight Hammad Studio">
                {insightLinks.map((link) => (
                  <FooterLink key={link.href} href={link.href}>{link.label}</FooterLink>
                ))}
              </nav>
              <Link href="/insight" className="group mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#d2f34c] transition hover:text-white">
                Lihat semua insight
                <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>

          <div className="grid gap-8 py-8 lg:grid-cols-12 lg:items-end">
            <div className="flex flex-col gap-3 text-base text-white/60 sm:flex-row sm:flex-wrap sm:items-center lg:col-span-8">
              <a href="mailto:hello@hammad.studio" className="inline-flex items-center gap-2 transition hover:text-white">
                <EnvelopeSimple size={16} /> hello@hammad.studio
              </a>
              <span className="hidden h-3 w-px bg-white/18 sm:block" aria-hidden="true" />
              <a href="https://wa.me/6285199391215" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 transition hover:text-white">
                <WhatsappLogo size={16} /> +62 851-9939-1215
              </a>
              <span className="hidden h-3 w-px bg-white/18 sm:block" aria-hidden="true" />
              <span className="inline-flex items-center gap-2"><MapPin size={16} /> Jakarta, Indonesia</span>
            </div>
            <p className="text-base leading-7 text-white/46 lg:col-span-4 lg:text-right">
              Design · Development · SEO foundation · Security-conscious engineering
            </p>
          </div>

          <div className="flex flex-col gap-3 border-t border-white/12 pt-6 text-[0.8rem] text-white/46 sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} HAMMAD.STUDIO · All rights reserved.</p>
            <div className="flex flex-wrap gap-4"><Link href="/privacy" className="hover:text-white">Privacy</Link><Link href="/terms" className="hover:text-white">Terms</Link><span>Jakarta · Available worldwide</span></div>
          </div>
        </div>

        {/* Ambient Big Watermark Background */}
        <div
          className="pointer-events-none mt-12 whitespace-nowrap text-center text-[12vw] font-bold leading-[0.7] tracking-[-0.075em] text-white/[0.035]"
          aria-hidden="true"
        >
          HAMMAD.STUDIO
        </div>
      </section>
    </footer>
  );
}

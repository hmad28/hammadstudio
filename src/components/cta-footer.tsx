"use client";

import Link from "next/link";
import { homeContent } from "@/lib/home-content";
import { ArrowUpRightIcon, HammadStudioLogo, InstagramIcon } from "./icons";
import { useLocale } from "./locale-provider";
import { MotionReveal } from "./motion-reveal";

export function CTAFooter() {
  const { locale } = useLocale();
  const copy = homeContent.footer;
  const nav = homeContent.nav;

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

      {/* Midnight Gradient Footer */}
      <section className="footer-surface-v2 relative overflow-hidden py-16 sm:py-20">
        <div className="site-container relative z-10">
          <div className="grid gap-12 border-b border-white/12 pb-12 sm:pb-14 lg:grid-cols-12 lg:items-end lg:gap-8">
            <div className="lg:col-span-7">
              <Link href="/" aria-label="HAMMAD.STUDIO home">
                <HammadStudioLogo className="h-auto w-[260px] sm:w-[300px]" />
              </Link>
              <p className="mt-6 max-w-[520px] text-sm leading-7 text-white/58 sm:text-base">
                {copy.description[locale]}
              </p>
              <div className="mt-5 flex items-center gap-2.5 text-xs text-white/78">
                <span className="availability-dot" /> {copy.available[locale]}
              </div>
            </div>

            <div className="lg:col-span-5 lg:text-right">
              <p className="label-mono text-[#d2f34c]">{copy.newBusiness[locale]}</p>
              <a
                href="mailto:hello@hammad.studio"
                className="mt-3 inline-block text-[clamp(1.65rem,3.2vw,3rem)] font-[520] leading-none tracking-[-0.05em] text-white transition-colors hover:text-[#d2f34c]"
              >
                hello@hammad.studio
              </a>
              <div className="mt-6 flex flex-col gap-3 text-sm text-white/62 sm:flex-row sm:flex-wrap sm:items-center lg:justify-end">
                <a
                  href="https://www.instagram.com/hammad.biz/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 transition-colors hover:text-[#d2f34c]"
                >
                  <InstagramIcon className="h-4 w-4" />
                  @hammad.biz
                </a>
                <span className="hidden h-4 w-px bg-white/18 sm:block" aria-hidden="true" />
                <a
                  href="https://www.facebook.com/itshammadstudio"
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-[#d2f34c]"
                >
                  Facebook
                </a>
                <span className="hidden h-4 w-px bg-white/18 sm:block" aria-hidden="true" />
                <span>Depok &amp; Jakarta, Indonesia</span>
                <span className="hidden h-4 w-px bg-white/18 sm:block" aria-hidden="true" />
                <a href="https://wa.me/6287888362186" target="_blank" rel="noreferrer" className="transition-colors hover:text-[#d2f34c]">+62 878-8836-2186</a>
              </div>
            </div>
          </div>

          <div className="grid gap-12 py-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8 lg:py-14">
            <div className="lg:col-span-2">
              <p className="label-mono text-[#8057ff]">NAVIGASI</p>
              <nav className="mt-5 grid gap-3 text-sm text-white/72" aria-label="Footer navigation">
                <Link href="/services" className="transition hover:text-[#f2efff]">{nav.services[locale]}</Link>
                <Link href="/work" className="transition hover:text-[#f2efff]">{nav.work[locale]}</Link>
                <Link href="/harga-website" className="transition hover:text-[#f2efff]">{nav.pricing[locale]}</Link>
                <Link href="/studio" className="transition hover:text-[#f2efff]">{nav.studio[locale]}</Link>
                <Link href="/contact" className="transition hover:text-[#f2efff]">Contact</Link>
                <Link href="/insight" className="transition hover:text-[#f2efff]">Insight</Link>
              </nav>
            </div>

            <div className="lg:col-span-3">
              <p className="label-mono text-[#8057ff]">LAYANAN</p>
              <nav className="mt-5 grid gap-3 text-sm text-white/62" aria-label="Services footer link">
                <Link href="/jasa-pembuatan-website" className="transition hover:text-[#f2efff]">Jasa Pembuatan Website</Link>
                <Link href="/jasa-website-umkm" className="transition hover:text-[#f2efff]">Website UMKM</Link>
                <Link href="/jasa-website-company-profile" className="transition hover:text-[#f2efff]">Company Profile</Link>
                <Link href="/redesign-website" className="transition hover:text-[#f2efff]">Redesign Website</Link>
                <Link href="/industri/logistik" className="transition hover:text-[#f2efff]">Website Logistik</Link>
                <Link href="/industri/travel" className="transition hover:text-[#f2efff]">Website Travel</Link>
                <Link href="/solusi/umkm/toko-online" className="transition hover:text-[#f2efff]">Toko Online UMKM</Link>
                <Link href="/solusi/perusahaan/maintenance-support" className="transition hover:text-[#f2efff]">Maintenance Website</Link>
                <Link href="/jasa-pembuatan-website-depok" className="transition hover:text-[#f2efff]">Jasa Website Depok</Link>
                <Link href="/services/e-commerce" className="transition hover:text-[#f2efff]">E-Commerce</Link>
                <Link href="/services/web-application" className="transition hover:text-[#f2efff]">Web Application</Link>
                <Link href="/services/custom-development" className="transition hover:text-[#f2efff]">Custom Dev</Link>
              </nav>
            </div>

            <div className="lg:col-span-3">
              <p className="label-mono text-[#8057ff]">INDUSTRI</p>
              <nav className="mt-5 grid gap-3 text-sm text-white/62" aria-label="Industry footer links">
                <Link href="/industri/travel" className="transition hover:text-[#f2efff]">Travel Umrah</Link>
                <Link href="/industri/logistik" className="transition hover:text-[#f2efff]">Logistik</Link>
                <Link href="/industri/fashion" className="transition hover:text-[#f2efff]">Fashion &amp; Apparel</Link>
                <Link href="/industri/manufaktur" className="transition hover:text-[#f2efff]">Manufaktur</Link>
                <Link href="/industri/konstruksi" className="transition hover:text-[#f2efff]">Konstruksi</Link>
                <Link href="/industri/ekspor-impor" className="transition hover:text-[#f2efff]">Ekspor Impor</Link>
              </nav>
            </div>

            <div className="sm:col-span-2 lg:col-span-4 lg:text-right">
              <p className="max-w-[470px] text-base leading-7 text-white/58 lg:ml-auto">
                {copy.closing[locale]}
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-3 border-t border-white/12 pt-6 text-[0.7rem] text-white/42 sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} HAMMAD.STUDIO · All rights reserved.</p>
            <div className="flex gap-4"><Link href="/privacy" className="hover:text-white">Privacy</Link><Link href="/terms" className="hover:text-white">Terms</Link><span>Global remote services</span></div>
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

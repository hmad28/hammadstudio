"use client";

import Link from "next/link";
import { homeContent } from "@/lib/home-content";
import {
  ArrowUpRightIcon,
  GlobeIcon,
  ShoppingBagIcon,
  AppWindowIcon,
  LayersIcon,
  ZapIcon,
  CodeIcon,
} from "./icons";
import { useLocale } from "./locale-provider";
import { MotionReveal } from "./motion-reveal";

const slugs = [
  "website",
  "e-commerce",
  "web-application",
  "business-system",
  "automation-ai",
  "custom-development",
] as const;

const iconMap = {
  GlobeIcon,
  ShoppingBagIcon,
  AppWindowIcon,
  LayersIcon,
  ZapIcon,
  CodeIcon,
};

export function ServicesSection() {
  const { locale } = useLocale();
  const copy = homeContent.services;

  return (
    <section id="services" className="scroll-mt-24 bg-[#f0eee7] py-20 text-[#0a0a09] sm:py-28 lg:py-32">
      <div className="site-container">
        <MotionReveal className="flex flex-col items-start justify-between gap-4 border-b border-black/10 pb-8 sm:flex-row sm:items-end">
          <div>
            <span className="label-mono text-black/45">{copy.label[locale]}</span>
            <h2 className="section-heading mt-4 max-w-[650px]">
              {copy.headline[locale]}{" "}
              <span className="font-[family-name:var(--font-instrument-serif)] font-normal italic">
                {copy.accent[locale]}
              </span>
            </h2>
          </div>
          <Link
            href="/services"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-black hover:text-black/70"
          >
            {copy.viewAll[locale]} <ArrowUpRightIcon className="button-arrow h-4 w-4" />
          </Link>
        </MotionReveal>

        {/* 2x3 Grid of Structured Service Cards */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {copy.items.map((item, index) => {
            const IconComponent = iconMap[item.icon as keyof typeof iconMap] || GlobeIcon;
            return (
              <MotionReveal key={item.number} delay={(index % 3) * 0.05}>
                <Link
                  href={`/services/${slugs[index]}`}
                  className="surface-card group flex min-h-[290px] flex-col rounded-xl border border-[#deddd5] bg-white/70 p-7 transition duration-400 hover:-translate-y-1 hover:bg-white hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] sm:p-8"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#0a0a09] text-white transition group-hover:bg-[#cfef57] group-hover:text-black">
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <span className="label-mono text-black/35">{item.number}</span>
                  </div>

                  <h3 className="mt-7 text-xl font-[550] tracking-[-0.04em] text-black sm:text-2xl">
                    {item.title[locale]}
                  </h3>
                  <p className="mt-3 text-sm leading-[1.65] text-black/60">
                    {item.description[locale]}
                  </p>

                  <div className="mt-auto pt-7 flex items-center justify-between border-t border-black/8 text-xs font-semibold text-black/75 group-hover:text-black">
                    <span>{locale === "id" ? "Lihat layanan" : "Explore service"}</span>
                    <ArrowUpRightIcon className="button-arrow h-4 w-4" />
                  </div>
                </Link>
              </MotionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}


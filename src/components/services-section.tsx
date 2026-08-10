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

const gradientStyles = [
  "from-violet-500/15 via-indigo-500/10 to-transparent text-violet-600 border-violet-500/20",
  "from-emerald-500/15 via-teal-500/10 to-transparent text-emerald-600 border-emerald-500/20",
  "from-blue-500/15 via-cyan-500/10 to-transparent text-blue-600 border-blue-500/20",
  "from-purple-500/15 via-fuchsia-500/10 to-transparent text-purple-600 border-purple-500/20",
  "from-lime-500/20 via-yellow-500/10 to-transparent text-amber-700 border-lime-500/30",
  "from-indigo-500/15 via-purple-500/10 to-transparent text-indigo-600 border-indigo-500/20",
];

export function ServicesSection() {
  const { locale } = useLocale();
  const copy = homeContent.services;

  return (
    <section id="services" className="light-tint-surface scroll-mt-24 py-20 text-[#0a0a09] sm:py-28 lg:py-32">
      <div className="site-container">
        <MotionReveal className="flex flex-col items-start justify-between gap-4 border-b border-black/10 pb-8 sm:flex-row sm:items-end">
          <div>
            <span className="label-mono purple-glow-badge rounded-full px-3 py-1 text-[0.68rem]">
              {copy.label[locale]}
            </span>
            <h2 className="section-heading mt-4 max-w-[650px]">
              {copy.headline[locale]}{" "}
              <span className="font-[family-name:var(--font-instrument-serif)] font-normal italic">
                {copy.accent[locale]}
              </span>
            </h2>
          </div>
          <Link
            href="/services"
            className="acid-button group inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-semibold text-black sm:text-sm"
          >
            {copy.viewAll[locale]} <ArrowUpRightIcon className="button-arrow h-4 w-4" />
          </Link>
        </MotionReveal>

        {/* 2x3 Grid of Stylish Service Cards with Ambient Gradient Icon Badges */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {copy.items.map((item, index) => {
            const IconComponent = iconMap[item.icon as keyof typeof iconMap] || GlobeIcon;
            const style = gradientStyles[index % gradientStyles.length];

            return (
              <MotionReveal key={item.number} delay={(index % 3) * 0.05}>
                <Link
                  href={`/services/${slugs[index]}`}
                  className="surface-card group relative flex min-h-[300px] flex-col overflow-hidden rounded-2xl border border-[#deddd5] bg-white/70 p-7 transition duration-300 hover:-translate-y-1 hover:border-black/20 hover:bg-white hover:shadow-[0_25px_60px_rgba(0,0,0,0.08)] sm:p-8"
                >
                  <div className="flex items-center justify-between">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br border ${style} transition-transform duration-300 group-hover:scale-110`}>
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <span className="label-mono font-mono text-xs font-bold text-black/40">{item.number}</span>
                  </div>

                  <h3 className="mt-7 text-xl font-[550] tracking-[-0.04em] text-black sm:text-2xl">
                    {item.title[locale]}
                  </h3>
                  <p className="mt-3 text-sm leading-[1.68] text-black/65">
                    {item.description[locale]}
                  </p>

                  <div className="mt-auto pt-7 flex items-center justify-between border-t border-black/8 text-xs font-semibold text-black/75 group-hover:text-black">
                    <span>{locale === "id" ? "Lihat detail layanan" : "Explore service details"}</span>
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



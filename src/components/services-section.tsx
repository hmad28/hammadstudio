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

const categoryCardClasses = [
  "service-website-card",
  "service-ecommerce-card",
  "service-webapp-card",
  "service-system-card",
  "service-automation-card",
  "service-custom-card",
];

const categoryBadgeStyles = [
  "bg-purple-100 text-[#8057ff] border-[#8057ff]/25",
  "bg-fuchsia-100 text-[#e44bff] border-[#e44bff]/25",
  "bg-blue-100 text-[#2864ff] border-[#2864ff]/25",
  "bg-emerald-100 text-[#54b98b] border-[#54b98b]/25",
  "bg-orange-100 text-[#ff9654] border-[#ff9654]/25",
  "bg-purple-100 text-[#a34eff] border-[#a34eff]/25",
];

export function ServicesSection() {
  const { locale } = useLocale();
  const copy = homeContent.services;

  return (
    <section id="services" className="services-surface-v2 scroll-mt-24 py-20 text-[#17181d] sm:py-28 lg:py-32">
      <div className="site-container">
        <MotionReveal className="flex flex-col items-start justify-between gap-4 border-b border-black/10 pb-8 sm:flex-row sm:items-end">
          <div>
            <span className="label-mono inline-block rounded-full bg-[#8057ff]/10 px-3.5 py-1 text-[0.68rem] text-[#8057ff]">
              {copy.label[locale]}
            </span>
            <h2 className="section-heading mt-4 max-w-[650px]">
              {copy.headline[locale]}{" "}
              <span className="font-[family-name:var(--font-instrument-serif)] font-normal italic text-[#8057ff]">
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

        {/* 2x3 Grid of Stylish Service Cards with Category Accents */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {copy.items.map((item, index) => {
            const IconComponent = iconMap[item.icon as keyof typeof iconMap] || GlobeIcon;
            const hoverClass = categoryCardClasses[index % categoryCardClasses.length];
            const badgeStyle = categoryBadgeStyles[index % categoryBadgeStyles.length];

            return (
              <MotionReveal key={item.number} delay={(index % 3) * 0.05}>
                <Link
                  href={`/services/${slugs[index]}`}
                  className={`surface-card group relative flex min-h-[300px] flex-col overflow-hidden rounded-2xl border border-[#dde0e7] bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-[0_25px_60px_rgba(7,10,18,0.08)] sm:p-8 ${hoverClass}`}
                >
                  <div className="flex items-center justify-between">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-xl border ${badgeStyle} transition-transform duration-300 group-hover:scale-110`}>
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <span className="label-mono font-mono text-xs font-bold text-black/40">{item.number}</span>
                  </div>

                  <h3 className="mt-7 text-xl font-[550] tracking-[-0.04em] text-[#17181d] sm:text-2xl">
                    {item.title[locale]}
                  </h3>
                  <p className="mt-3 text-sm leading-[1.68] text-[#6d7180]">
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



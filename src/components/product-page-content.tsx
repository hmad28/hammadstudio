"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRightIcon } from "./icons";
import { useLocale } from "./locale-provider";

const content = {
  label: { id: "Produk digital", en: "Digital products" },
  title: { id: "Produk Digital Hammad Studio", en: "Hammad Studio Digital Products" },
  description: { id: "Design system, UI kit, dan starter code yang dibangun untuk mempercepat development tanpa mengorbankan kualitas fondasi.", en: "Design systems, UI kits, and starter code built to accelerate development without compromising foundational quality." },
  action: { id: "Dapatkan produk", en: "Get the product" },
  products: [
    {
      title: { id: "Hammad Studio UI Kit & Component Library", en: "Hammad Studio UI Kit & Component Library" },
      category: "Design System",
      description: { id: "Kumpulan komponen Next.js dan Tailwind CSS v4 untuk mempercepat pembangunan web application.", en: "A collection of Next.js and Tailwind CSS v4 components for building web applications faster." },
      image: "/assets/img/illustration/dashboard.png",
    },
    {
      title: { id: "SaaS Starter Kit Next.js 16", en: "Next.js 16 SaaS Starter Kit" },
      category: "Code Template",
      description: { id: "Fondasi SaaS dengan authentication, payment integration, dan responsive dashboard UI.", en: "A SaaS foundation with authentication, payment integration, and a responsive dashboard UI." },
      image: "/images/work/saudi-education-expo.webp",
    },
  ],
} as const;

export function ProductPageContent() {
  const { locale } = useLocale();

  return (
    <div className="min-h-screen bg-[#050505] pb-20 pt-32 text-[#fafaf8]">
      <div className="site-container space-y-12">
        <div className="mx-auto max-w-3xl space-y-4 text-center">
          <span className="label-mono text-white/35">{content.label[locale]}</span>
          <h1 className="text-4xl font-[520] tracking-[-0.05em] sm:text-6xl">{content.title[locale]}</h1>
          <p className="text-base leading-[1.7] text-white/50">{content.description[locale]}</p>
        </div>

        <div className="grid grid-cols-1 gap-8 pt-6 md:grid-cols-2">
          {content.products.map((product) => (
            <article key={product.category} className="space-y-4 rounded-[18px] border border-white/10 bg-[#111] p-6 transition-colors hover:border-white/25">
              <div className="relative h-64 w-full overflow-hidden rounded-[12px] border border-white/10 bg-zinc-900">
                <Image src={product.image} alt={product.title[locale]} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition-transform duration-700 hover:scale-[1.02]" />
              </div>
              <span className="inline-block rounded-full bg-white px-3 py-1 text-xs font-semibold text-black">{product.category}</span>
              <h2 className="text-2xl font-[520] tracking-[-0.035em] text-white">{product.title[locale]}</h2>
              <p className="text-sm leading-[1.65] text-white/50">{product.description[locale]}</p>
              <Link href="https://wa.me/+6287888362186?text=Halo%20saya%20tertarik%20dengan%20produk%20digital%20Hammad%20Studio" target="_blank" className="group inline-flex items-center gap-2 pt-2 text-sm font-semibold text-white">{content.action[locale]} <ArrowUpRightIcon className="button-arrow h-4 w-4" /></Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

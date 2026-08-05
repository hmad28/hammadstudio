import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRightIcon } from "@/components/icons";

export const metadata = {
  title: "Produk Digital & Template – Dytama Studio",
  description: "Kumpulan produk digital, UI kit, dan template modern buatan tim Dytama Studio.",
};

const products = [
  {
    title: "Dytama UI Kit & Component Library",
    category: "Design System",
    description: "Kumpulan komponen Next.js & Tailwind CSS v4 siap pakai untuk mempercepat pembuatan web app.",
    image: "/assets/img/illustration/dashboard.png",
  },
  {
    title: "SaaS Starter Kit Next.js 16",
    category: "Code Template",
    description: "Boilerplate SaaS lengkap dengan Auth, Payment Integration, and Responsive Dashboard UI.",
    image: "/assets/img/illustration/background-web-dytama.webp",
  },
];

export default function ProductPage() {
  return (
    <div className="pt-32 pb-20 min-h-screen bg-[#0D1526] text-white">
      <div className="container max-w-7xl mx-auto px-4 space-y-12">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="text-sm font-semibold tracking-widest text-[#D9FF43] uppercase">Digital Products</span>
          <h1 className="text-4xl sm:text-6xl font-bold">Produk Digital Dytama</h1>
          <p className="text-base text-zinc-300">
            Aset design system, UI kit, dan boilerplate berkualitas tinggi yang dirancang khusus untuk mempercepat inovasi produk Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
          {products.map((prod, idx) => (
            <div key={idx} className="p-6 rounded-3xl bg-white/[0.03] border border-white/10 space-y-4 hover:border-[#D9FF43]/50 transition-colors">
              <div className="relative w-full h-64 rounded-2xl overflow-hidden bg-slate-900">
                <Image src={prod.image} alt={prod.title} fill className="object-cover" />
              </div>
              <span className="text-xs font-semibold px-3 py-1 bg-[#D9FF43] text-black rounded-full inline-block">
                {prod.category}
              </span>
              <h3 className="text-2xl font-bold text-white">{prod.title}</h3>
              <p className="text-sm text-zinc-300">{prod.description}</p>
              <Link
                href="https://wa.me/+6287888362186?text=Halo%20saya%20tertarik%20dengan%20produk%20digital%20Dytama"
                target="_blank"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#D9FF43] hover:underline pt-2"
              >
                Dapatkan Produk
                <ArrowUpRightIcon className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

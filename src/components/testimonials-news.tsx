"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { StarIcon, ArrowUpRightIcon } from "./icons";

interface Article {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  summary: string;
}

const articlesData: Article[] = [
  {
    id: "1",
    title: "Mengapa Web Application Modern Membutuhkan Pendekatan UI/UX yang Scalable",
    category: "UI/UX Insights",
    date: "02 Agu 2026",
    readTime: "5 min read",
    summary: "Panduan praktis merancang sistem antarmuka yang siap berkembang seiring pertumbuhan pengguna dan fitur produk.",
  },
  {
    id: "2",
    title: "Strategi Optimasi Next.js 16 untuk Performa SEO & Core Web Vitals Terbaik",
    category: "Web Engineering",
    date: "28 Jul 2026",
    readTime: "7 min read",
    summary: "Teknik rendering, image optimization, dan caching modern untuk mencapai nilai sempurna di Google Lighthouse.",
  },
  {
    id: "3",
    title: "Perbedaan Company Profile Biasa vs Web Product Studio: Mana yang Bisnis Anda Butuhkan?",
    category: "Digital Business",
    date: "15 Jul 2026",
    readTime: "4 min read",
    summary: "Memahami kapan bisnis cukup dengan landing page sederhana dan kapan harus berinvestasi pada sistem digital kustom.",
  },
];

export function TestimonialsAndNews() {
  return (
    <section className="relative w-full py-20 lg:py-28 bg-white text-black">
      <div className="container max-w-7xl mx-auto px-4 space-y-20">
        {/* Testimonials Block */}
        <div className="space-y-10">
          <div className="flex flex-col items-center text-center space-y-3">
            <span className="text-sm font-semibold tracking-wider text-indigo-700 uppercase">Testimonials</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
              Apa Kata Klien Kami
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="w-4 h-4 text-[#ffc83d]" />
                  ))}
                </div>
                <p className="text-sm text-slate-700 italic leading-relaxed">
                  &ldquo;Dytama mengubah total wajah digital perusahaan kami. Tampilan website sangat modern, cepat, dan calon klien langsung terkesan.&rdquo;
                </p>
              </div>
              <div className="flex items-center gap-3 pt-4 border-t border-slate-200">
                <Image
                  src="/assets/img/user/user-01.png"
                  alt="Client"
                  width={40}
                  height={40}
                  className="rounded-full object-cover"
                />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Aditya Pratama</h4>
                  <span className="text-xs text-slate-500">CEO, TechAsia Group</span>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="w-4 h-4 text-[#ffc83d]" />
                  ))}
                </div>
                <p className="text-sm text-slate-700 italic leading-relaxed">
                  &ldquo;Proses pengerjaan cepat dan komunikatif. Tim Dytama benar-benar mengerti kebutuhan UI/UX SaaS kami.&rdquo;
                </p>
              </div>
              <div className="flex items-center gap-3 pt-4 border-t border-slate-200">
                <Image
                  src="/assets/img/user/user-02.png"
                  alt="Client"
                  width={40}
                  height={40}
                  className="rounded-full object-cover"
                />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Rina Salsabila</h4>
                  <span className="text-xs text-slate-500">Product Manager, Lumina</span>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="w-4 h-4 text-[#ffc83d]" />
                  ))}
                </div>
                <p className="text-sm text-slate-700 italic leading-relaxed">
                  &ldquo;Hasil web development luar biasa responsif di mobile dan traffic naik signifikan setelah redesign.&rdquo;
                </p>
              </div>
              <div className="flex items-center gap-3 pt-4 border-t border-slate-200">
                <Image
                  src="/assets/img/user/user-03.png"
                  alt="Client"
                  width={40}
                  height={40}
                  className="rounded-full object-cover"
                />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Budi Santoso</h4>
                  <span className="text-xs text-slate-500">Founder, Karsa Workspace</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* News & Insights Section */}
        <div id="news" className="space-y-10 pt-10 border-t border-slate-200">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-2">
              <span className="text-sm font-semibold tracking-wider text-indigo-700 uppercase">News & Insights</span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
                Artikel & Insight Terbaru
              </h2>
            </div>
            <Link
              href="/insight"
              className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-700 hover:text-indigo-900"
            >
              Lihat Semua Artikel
              <ArrowUpRightIcon className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {articlesData.map((art) => (
              <div
                key={art.id}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between space-y-4 hover:border-indigo-500 transition-colors group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
                    <span className="px-2.5 py-1 bg-indigo-50 text-indigo-700 rounded-md font-semibold">{art.category}</span>
                    <span>{art.readTime}</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-indigo-700 transition-colors leading-snug">
                    {art.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{art.summary}</p>
                </div>
                <div className="pt-3 text-xs text-slate-400 font-medium">{art.date}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRightIcon } from "./icons";

export function AboutSection() {
  return (
    <section className="relative w-full py-24 lg:py-32 bg-[#F4F2EC] text-[#080808]">
      <div className="container max-w-[1200px] mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Label */}
          <div className="lg:col-span-3">
            <span className="text-xs font-mono font-semibold tracking-widest text-zinc-500 uppercase">
              ABOUT / 01
            </span>
          </div>

          {/* Headline & Paragraph */}
          <div className="lg:col-span-9 space-y-6">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.05] text-[#080808]">
              Built around your business.
            </h2>

            <p className="text-base sm:text-xl text-zinc-700 max-w-2xl leading-relaxed font-normal">
              We design digital products around real business needs — from customer-facing websites to software that helps teams operate better.
            </p>

            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#080808] hover:text-zinc-600 transition-colors group"
              >
                About Hammad Studio
                <ArrowUpRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

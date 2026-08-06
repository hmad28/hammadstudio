"use client";

import React from "react";
import { ArrowUpRightIcon } from "./icons";

interface ServiceRow {
  num: string;
  title: string;
  desc: string;
}

const servicesList: ServiceRow[] = [
  {
    num: "01",
    title: "Websites",
    desc: "Marketing sites, company profiles, campaigns and event platforms.",
  },
  {
    num: "02",
    title: "Commerce",
    desc: "Storefronts, checkout, payments and order experiences.",
  },
  {
    num: "03",
    title: "Business Systems",
    desc: "Dashboards, booking, CRM and operational software.",
  },
  {
    num: "04",
    title: "Custom Software",
    desc: "MVPs, SaaS products and custom web applications.",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="relative w-full py-24 lg:py-32 bg-[#F4F2EC] text-[#080808] border-t border-black/10">
      <div className="container max-w-[1200px] mx-auto px-4">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start mb-16">
          <div className="lg:col-span-3">
            <span className="text-xs font-mono font-semibold tracking-widest text-zinc-500 uppercase">
              SERVICES / 02
            </span>
          </div>
          <div className="lg:col-span-9">
            <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-[#080808]">
              What we do.
            </h2>
          </div>
        </div>

        {/* Clean Large Rows */}
        <div className="border-t border-black/15">
          {servicesList.map((service) => (
            <div
              key={service.num}
              className="group border-b border-black/15 py-8 transition-colors duration-300 hover:bg-black/[0.03] cursor-pointer"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
                {/* Number */}
                <div className="lg:col-span-2 text-xs font-mono text-zinc-500 group-hover:text-[#080808] transition-colors">
                  ({service.num})
                </div>

                {/* Title */}
                <div className="lg:col-span-4 text-2xl sm:text-4xl font-semibold tracking-tight transition-transform duration-300 group-hover:translate-x-2 text-[#080808]">
                  {service.title}
                </div>

                {/* Description */}
                <div className="lg:col-span-5 text-sm sm:text-base text-zinc-600 font-normal">
                  {service.desc}
                </div>

                {/* Arrow Icon */}
                <div className="lg:col-span-1 flex justify-end">
                  <span className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-black/15 text-[#080808] group-hover:bg-[#080808] group-hover:text-white transition-all duration-300">
                    <ArrowUpRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

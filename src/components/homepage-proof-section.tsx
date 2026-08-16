"use client";

import { Asterisk } from "@phosphor-icons/react/Asterisk";

const items = ["WEB DESIGN", "DEVELOPMENT", "E-COMMERCE", "BUSINESS SYSTEM", "AUTOMATION"];

export function HomepageProofSection() {
  return (
    <section className="overflow-hidden border-y border-white/10 bg-[#070a12] py-5 text-white" aria-label="Kapabilitas Hammad Studio">
      <div className="flex min-w-max items-center justify-center gap-7 px-5 sm:gap-10">
        {items.map((item) => (
          <div key={item} className="flex items-center gap-7 sm:gap-10">
            <span className="font-mono text-[.66rem] font-semibold tracking-[.15em] text-white/58">{item}</span>
            <Asterisk className="h-5 w-5 text-[#d2f34c]" weight="bold" aria-hidden="true" />
          </div>
        ))}
      </div>
    </section>
  );
}

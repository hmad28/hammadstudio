import Link from "next/link";
import { ArrowUpRightIcon } from "./icons";
import { workSlugs } from "@/lib/work-content";

const proofPoints = [
  { value: String(workSlugs.length), label: "case study project nyata", href: "/work" },
  { value: "2 jalur", label: "solusi khusus UMKM dan perusahaan", href: "/services" },
  { value: "2026", label: "price list dengan scope transparan", href: "/harga-website" },
] as const;

export function HomepageProofSection() {
  return (
    <section className="border-b border-white/10 bg-[#070a12] text-white">
      <div className="site-container grid border-l border-white/10 sm:grid-cols-3">
        {proofPoints.map((item) => (
          <Link key={item.label} href={item.href} className="group flex min-h-32 items-end justify-between gap-5 border-r border-t border-white/10 p-5 transition-colors hover:bg-white/[0.04] sm:border-t-0 sm:p-6">
            <div><strong className="block text-2xl font-[520] tracking-[-0.04em] text-[#d2f34c]">{item.value}</strong><span className="mt-2 block max-w-52 text-xs leading-5 text-white/52">{item.label}</span></div>
            <ArrowUpRightIcon className="button-arrow h-4 w-4 shrink-0 text-white/40" />
          </Link>
        ))}
      </div>
    </section>
  );
}

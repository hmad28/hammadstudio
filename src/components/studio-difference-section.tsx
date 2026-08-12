import Link from "next/link";
import { ArrowUpRightIcon } from "./icons";

const differences = [
  { number: "01", title: "Komunikasi langsung", description: "Diskusi dilakukan bersama orang yang memahami produk dan keputusan teknis project—tanpa rantai komunikasi yang panjang." },
  { number: "02", title: "Business-first development", description: "Fitur ditentukan dari masalah, user, dan workflow bisnis; bukan dari checklist template yang dipaksakan ke semua project." },
  { number: "03", title: "Scope dan biaya jelas", description: "Deliverable, timeline, batas pekerjaan, biaya berulang, dan ownership dijelaskan sebelum development dimulai." },
  { number: "04", title: "Engineering yang sadar risiko", description: "Performa, crawlability, akses akun, validasi input, dependency, backup, dan keamanan dipertimbangkan sesuai risiko sistem." },
] as const;

export function StudioDifferenceSection() {
  return (
    <section className="border-y border-black/12 bg-[#f7f5ef] py-24 text-[#17181d] sm:py-32">
      <div className="site-container">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8"><p className="label-mono text-[#8057ff]">KENAPA HAMMAD STUDIO</p><h2 className="mt-5 max-w-[900px] text-[clamp(2.9rem,6vw,6rem)] font-[520] leading-[.92] tracking-[-.065em]">Design, development, SEO foundation, dan engineering yang rapi.</h2></div>
          <p className="max-w-[420px] leading-7 text-black/58 lg:col-span-4">Mulai dari website sederhana sampai sistem custom, setiap keputusan dijelaskan melalui dampaknya ke bisnis—bukan jargon teknis.</p>
        </div>
        <div className="mt-12 grid border-l border-t border-black/15 md:grid-cols-2">
          {differences.map((item) => <article key={item.number} className="min-h-56 border-b border-r border-black/15 p-6 sm:p-8"><span className="label-mono text-black/30">{item.number}</span><h3 className="mt-10 text-2xl font-[520] tracking-[-.04em]">{item.title}</h3><p className="mt-4 max-w-[520px] text-sm leading-7 text-black/58">{item.description}</p></article>)}
        </div>
        <Link href="/studio" className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold">Lihat cara kerja studio <ArrowUpRightIcon className="button-arrow h-4 w-4" /></Link>
      </div>
    </section>
  );
}

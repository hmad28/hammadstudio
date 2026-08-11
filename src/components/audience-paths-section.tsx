import Link from "next/link";
import { ArrowUpRightIcon } from "./icons";

const paths = [
  {
    label: "UNTUK UMKM",
    title: "Website yang membantu bisnis lebih mudah dipercaya dan dihubungi.",
    description: "Katalog, profil bisnis, WhatsApp, Maps, dan fondasi pencarian Google dalam alur yang sederhana.",
    href: "/jasa-website-umkm",
    cta: "Lihat solusi website UMKM",
  },
  {
    label: "UNTUK PERUSAHAAN",
    title: "Company profile sebagai infrastruktur trust dan marketing.",
    description: "Struktur layanan, kapabilitas, project, dokumen, dan inquiry untuk calon klien maupun partner B2B.",
    href: "/jasa-website-company-profile",
    cta: "Lihat solusi company profile",
  },
] as const;

export function AudiencePathsSection() {
  return (
    <section className="border-y border-black/10 bg-[#ebe9e2] py-20 text-[#17181d] sm:py-28">
      <div className="site-container">
        <div className="max-w-[780px]">
          <p className="label-mono text-[#8057ff]">SOLUSI BERDASARKAN KEBUTUHAN</p>
          <h2 className="mt-5 text-[clamp(2.8rem,5.5vw,5.5rem)] font-[520] leading-[0.93] tracking-[-0.06em]">UMKM dan perusahaan tidak membutuhkan website yang sama.</h2>
        </div>
        <div className="mt-12 grid border-l border-t border-black/15 lg:grid-cols-2">
          {paths.map((path) => (
            <Link key={path.href} href={path.href} className="group flex min-h-[340px] flex-col border-b border-r border-black/15 p-7 transition-colors hover:bg-[#070a12] hover:text-white sm:p-10">
              <p className="label-mono text-[#8057ff] transition-colors group-hover:text-[#d2f34c]">{path.label}</p>
              <h3 className="mt-8 max-w-[540px] text-[clamp(2rem,3.5vw,3.6rem)] font-[520] leading-[1] tracking-[-0.05em]">{path.title}</h3>
              <p className="mt-5 max-w-[520px] text-sm leading-7 opacity-58 sm:text-base">{path.description}</p>
              <span className="mt-auto flex items-center gap-2 pt-10 text-sm font-semibold">{path.cta} <ArrowUpRightIcon className="button-arrow h-4 w-4" /></span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

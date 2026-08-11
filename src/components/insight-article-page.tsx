import Link from "next/link";
import { ArrowUpRightIcon, CheckIcon } from "./icons";
import type { InsightArticle } from "@/lib/insight-content";

export function InsightArticlePage({ article }: { article: InsightArticle }) {
  return (
    <article className="bg-[#f7f5ef] text-[#17181d]">
      <header className="bg-[#070a12] pb-20 pt-36 text-white sm:pb-28 sm:pt-44">
        <div className="site-container">
          <nav aria-label="Breadcrumb" className="label-mono text-white/42"><Link href="/">Beranda</Link> <span className="mx-2">/</span> <Link href="/insight">Insight</Link></nav>
          <p className="label-mono mt-10 text-[#d2f34c]">INSIGHT · {article.readTime}</p>
          <h1 className="mt-6 max-w-[1080px] text-[clamp(3.3rem,7vw,7rem)] font-[520] leading-[0.9] tracking-[-0.065em]">{article.title}</h1>
          <p className="mt-8 max-w-[760px] text-lg leading-8 text-white/66">{article.description}</p>
          <p className="mt-6 text-xs text-white/38">Ditulis oleh Hammad Studio · Diperbarui <time dateTime={article.updatedAt}>11 Agustus 2026</time></p>
        </div>
      </header>

      <div className="site-container py-20 sm:py-28">
        <div className="mx-auto max-w-[900px]">
          <aside className="rounded-2xl border border-[#8057ff]/20 bg-[#eee9ff] p-7 sm:p-9" aria-label="Jawaban singkat">
            <p className="label-mono text-[#8057ff]">JAWABAN SINGKAT</p>
            <p className="mt-4 text-xl font-[500] leading-8 tracking-[-0.025em] sm:text-2xl">{article.answer}</p>
          </aside>

          <div className="mt-16 space-y-16">
            {article.sections.map((section, index) => (
              <section key={section.heading}>
                <p className="label-mono text-black/30">0{index + 1}</p>
                <h2 className="mt-4 text-[clamp(2rem,4vw,3.5rem)] font-[520] leading-[1] tracking-[-0.05em]">{section.heading}</h2>
                {section.paragraphs.map((paragraph) => <p key={paragraph} className="mt-5 text-base leading-8 text-black/65 sm:text-lg">{paragraph}</p>)}
                {section.points ? <ul className="mt-6 grid gap-3 sm:grid-cols-2">{section.points.map((point) => <li key={point} className="flex gap-3 border-t border-black/12 pt-4 text-sm leading-6 text-black/68"><CheckIcon className="mt-1 h-4 w-4 shrink-0 text-[#8057ff]" />{point}</li>)}</ul> : null}
              </section>
            ))}
          </div>

          <aside className="mt-20 rounded-2xl bg-[#070a12] p-8 text-white sm:p-10">
            <p className="label-mono text-[#d2f34c]">LANGKAH BERIKUTNYA</p>
            <h2 className="mt-4 text-3xl font-[520] tracking-[-0.045em]">Butuh estimasi berdasarkan scope nyata?</h2>
            <p className="mt-4 max-w-[650px] leading-7 text-white/58">Lihat halaman layanan terkait atau ceritakan kebutuhan bisnis Anda. Scope, biaya, dan timeline akan dijelaskan sejak awal.</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href={article.relatedHref} className="acid-button group inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold">{article.relatedLabel} <ArrowUpRightIcon className="button-arrow h-4 w-4" /></Link>
              <Link href="/contact" className="inline-flex items-center rounded-full border border-white/20 px-5 py-3 text-sm font-semibold">Konsultasi project</Link>
            </div>
          </aside>
        </div>
      </div>
    </article>
  );
}

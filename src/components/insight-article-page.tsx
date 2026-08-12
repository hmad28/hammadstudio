import Link from "next/link";
import { ArrowUpRightIcon, CheckIcon } from "./icons";
import type { InsightArticle } from "@/lib/insight-content";
import { insightArticles } from "@/lib/insight-content";

export function InsightArticlePage({ article }: { article: InsightArticle }) {
  const relatedArticles = insightArticles.filter((candidate) => candidate.slug !== article.slug && candidate.cluster === article.cluster).slice(0, 3);
  return (
    <article className="bg-[#f7f5ef] text-[#17181d]">
      <header className="bg-[#070a12] pb-20 pt-36 text-white sm:pb-28 sm:pt-44">
        <div className="site-container">
          <nav aria-label="Breadcrumb" className="label-mono text-white/42"><Link href="/">Beranda</Link> <span className="mx-2">/</span> <Link href="/insight">Insight</Link></nav>
          <p className="label-mono mt-10 text-[#d2f34c]">INSIGHT · {article.readTime}</p>
          <h1 className="mt-6 max-w-[1080px] text-[clamp(3.3rem,7vw,7rem)] font-[520] leading-[0.9] tracking-[-0.065em]">{article.title}</h1>
          <p className="mt-8 max-w-[760px] text-lg leading-8 text-white/66">{article.description}</p>
          <p className="mt-6 text-xs text-white/38">Ditulis oleh Hammad Matt · Diperbarui <time dateTime={article.updatedAt}>{new Intl.DateTimeFormat("id-ID", { dateStyle: "long", timeZone: "Asia/Jakarta" }).format(new Date(`${article.updatedAt}T00:00:00+07:00`))}</time></p>
        </div>
      </header>

      <div className="site-container py-20 sm:py-28">
        <div className="mx-auto max-w-[900px]">
          <aside className="rounded-2xl border border-[#8057ff]/20 bg-[#eee9ff] p-7 sm:p-9" aria-label="Jawaban singkat">
            <p className="label-mono text-[#8057ff]">JAWABAN SINGKAT</p>
            <p className="mt-4 text-xl font-[500] leading-8 tracking-[-0.025em] sm:text-2xl">{article.answer}</p>
          </aside>

          {article.comparison ? <div className="mt-10 overflow-x-auto rounded-2xl border border-black/12 bg-white"><table className="w-full min-w-[640px] border-collapse text-left"><thead><tr className="border-b border-black/12 bg-[#ebe9e2]"><th className="p-4 text-xs font-semibold uppercase tracking-wider text-black/45">Aspek</th><th className="p-4 text-sm font-semibold">{article.comparison.leftTitle}</th><th className="p-4 text-sm font-semibold">{article.comparison.rightTitle}</th></tr></thead><tbody>{article.comparison.rows.map((row) => <tr key={row.label} className="border-b border-black/10 last:border-0"><th className="p-4 text-sm font-semibold">{row.label}</th><td className="p-4 text-sm leading-6 text-black/60">{row.left}</td><td className="p-4 text-sm leading-6 text-black/60">{row.right}</td></tr>)}</tbody></table></div> : null}

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

          <section className="mt-16 grid gap-6 border-y border-black/12 py-10 sm:grid-cols-[120px_1fr]">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#070a12] text-2xl font-semibold text-white">HM</div>
            <div><p className="label-mono text-[#8057ff]">DITULIS OLEH</p><h2 className="mt-2 text-2xl font-[520] tracking-[-.035em]">Hammad Matt</h2><p className="mt-2 max-w-[680px] leading-7 text-black/58">Founder dan Lead Engineer Hammad Studio. Menulis berdasarkan proses merancang serta membangun website, commerce, platform, dan sistem digital untuk bisnis maupun organisasi.</p><Link href="/studio" className="group mt-4 inline-flex items-center gap-2 text-sm font-semibold">Tentang penulis dan Hammad Studio <ArrowUpRightIcon className="button-arrow h-4 w-4" /></Link></div>
          </section>

          {relatedArticles.length > 0 ? <section className="mt-16"><p className="label-mono text-black/35">DALAM CLUSTER INI</p><h2 className="mt-3 text-3xl font-[520] tracking-[-.045em]">Bacaan terkait</h2><div className="mt-7 grid border-l border-t border-black/15 sm:grid-cols-3">{relatedArticles.map((related) => <Link key={related.slug} href={`/insight/${related.slug}`} className="group flex min-h-48 flex-col border-b border-r border-black/15 p-5 hover:bg-white"><span className="label-mono text-black/30">{related.readTime}</span><h3 className="mt-8 font-[520] leading-6 tracking-[-.025em]">{related.title}</h3><ArrowUpRightIcon className="button-arrow mt-auto h-4 w-4 pt-6" /></Link>)}</div></section> : null}
        </div>
      </div>
    </article>
  );
}

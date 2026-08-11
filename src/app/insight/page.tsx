import Link from "next/link";
import { ArrowUpRightIcon } from "@/components/icons";
import { insightArticles } from "@/lib/insight-content";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Insight Website untuk Bisnis",
  description: "Panduan praktis tentang harga website, company profile, website UMKM, pilihan teknologi, SEO foundation, dan pengembangan website bisnis.",
  path: "/insight",
});

export default function InsightPage() {
  const pillarArticles = insightArticles.filter((article) => "pillar" in article && article.pillar);
  const clusterArticles = insightArticles.filter((article) => !("pillar" in article && article.pillar));
  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": "https://hammad.studio/insight#collection",
    name: "Insight Website untuk Bisnis",
    url: "https://hammad.studio/insight",
    hasPart: insightArticles.map((article) => ({ "@type": "Article", name: article.title, url: `https://hammad.studio/insight/${article.slug}` })),
  };

  return (
    <main className="min-h-screen bg-[#f7f5ef] pb-28 pt-36 text-[#17181d] sm:pt-44">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd).replace(/</g, "\\u003c") }} />
      <div className="site-container">
        <header className="max-w-[960px] border-b border-black/12 pb-16 sm:pb-20">
          <p className="label-mono text-[#8057ff]">INSIGHT</p>
          <h1 className="mt-6 text-[clamp(3.6rem,8vw,8rem)] font-[520] leading-[0.88] tracking-[-0.07em]">Panduan website untuk keputusan bisnis yang lebih jelas.</h1>
          <p className="mt-7 max-w-[720px] text-lg leading-8 text-black/58">Jawaban praktis berbasis proses kerja nyata—tentang biaya, scope, teknologi, SEO foundation, dan cara memilih solusi yang sesuai.</p>
        </header>
        <section className="py-16"><p className="label-mono text-[#8057ff]">PANDUAN UTAMA</p><h2 className="mt-4 text-4xl font-[520] tracking-[-.05em]">Mulai dari pillar yang sesuai kebutuhan.</h2></section>
        <div className="grid border-l border-t border-black/15 md:grid-cols-3">
          {pillarArticles.map((article, index) => (
            <Link key={article.slug} href={`/insight/${article.slug}`} className="group flex min-h-[330px] flex-col border-b border-r border-black/15 p-7 transition-colors hover:bg-[#070a12] hover:text-white sm:p-9">
              <div className="flex justify-between gap-4"><span className="label-mono opacity-40">0{index + 1} · {article.readTime}</span><ArrowUpRightIcon className="button-arrow h-4 w-4" /></div>
              <h2 className="mt-12 text-3xl font-[520] leading-[1.05] tracking-[-0.045em] sm:text-4xl">{article.title}</h2>
              <p className="mt-5 text-sm leading-7 opacity-58">{article.description}</p>
              <span className="mt-auto pt-8 text-sm font-semibold">Baca insight</span>
            </Link>
          ))}
        </div>
        <section className="py-16"><p className="label-mono text-[#8057ff]">ARTIKEL PENDUKUNG</p><h2 className="mt-4 text-4xl font-[520] tracking-[-.05em]">Jawaban untuk keputusan yang lebih spesifik.</h2></section>
        <div className="grid border-l border-t border-black/15 md:grid-cols-2">
          {clusterArticles.map((article, index) => (
            <Link key={article.slug} href={`/insight/${article.slug}`} className="group flex min-h-[300px] flex-col border-b border-r border-black/15 p-7 transition-colors hover:bg-[#070a12] hover:text-white sm:p-9">
              <div className="flex justify-between gap-4"><span className="label-mono opacity-40">0{index + 1} · {article.readTime}</span><ArrowUpRightIcon className="button-arrow h-4 w-4" /></div><h2 className="mt-12 text-3xl font-[520] leading-[1.05] tracking-[-0.045em]">{article.title}</h2><p className="mt-5 text-sm leading-7 opacity-58">{article.description}</p><span className="mt-auto pt-8 text-sm font-semibold">Baca insight</span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}

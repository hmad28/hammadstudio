import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { InsightArticlePage } from "@/components/insight-article-page";
import { getInsightArticle, insightArticles } from "@/lib/insight-content";
import type { InsightSlug } from "@/lib/insight-content";
import { createPageMetadata } from "@/lib/seo";

function isInsightSlug(value: string): value is InsightSlug {
  return insightArticles.some((article) => article.slug === value);
}

export function generateStaticParams() {
  return insightArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  if (!isInsightSlug(slug)) return {};
  const article = getInsightArticle(slug);
  if (!article) return {};
  return {
    ...createPageMetadata({ title: article.title, description: article.description, path: `/insight/${slug}` }),
    authors: [{ name: "Hammad Matt", url: "https://hammad.studio/studio" }],
  };
}

export default async function InsightDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!isInsightSlug(slug)) notFound();
  const article = getInsightArticle(slug);
  if (!article) notFound();
  const url = `https://hammad.studio/insight/${slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Article", "@id": `${url}#article`, headline: article.title, description: article.description, datePublished: article.publishedAt, dateModified: article.updatedAt, mainEntityOfPage: url, author: { "@id": "https://hammad.studio/#hammad-matt" }, publisher: { "@id": "https://hammad.studio/#organization" } },
      { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Beranda", item: "https://hammad.studio" }, { "@type": "ListItem", position: 2, name: "Insight", item: "https://hammad.studio/insight" }, { "@type": "ListItem", position: 3, name: article.title, item: url }] },
    ],
  };

  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} /><InsightArticlePage article={article} /></>;
}

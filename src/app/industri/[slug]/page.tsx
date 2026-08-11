import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SEOServicePage } from "@/components/seo-service-page";
import { createPageMetadata } from "@/lib/seo";
import { industryLandings } from "@/lib/seo-expansion-content";
import { createServiceJsonLd } from "@/lib/structured-data";

type IndustryKey = keyof typeof industryLandings;

function isIndustry(value: string): value is IndustryKey {
  return value in industryLandings;
}

export function generateStaticParams() {
  return Object.keys(industryLandings).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  if (!isIndustry(slug)) return {};
  const landing = industryLandings[slug];
  return createPageMetadata({ title: landing.title, description: landing.description, path: `/industri/${slug}` });
}

export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!isIndustry(slug)) notFound();
  const landing = industryLandings[slug];
  const path = `/industri/${slug}`;
  const jsonLd = createServiceJsonLd(landing.title, landing.description, path, landing.faqs);

  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} /><SEOServicePage eyebrow={landing.eyebrow} title={landing.hero} intro={landing.intro} audience={landing.audience} outcomes={landing.outcomes} deliverables={landing.deliverables} proofs={landing.proofs} faqs={landing.faqs} startingPrice={landing.startingPrice} /></>;
}

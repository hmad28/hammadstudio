import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SEOServicePage } from "@/components/seo-service-page";
import { createPageMetadata } from "@/lib/seo";
import { solutionLandings } from "@/lib/seo-expansion-content";
import { createServiceJsonLd } from "@/lib/structured-data";

type SolutionKey = keyof typeof solutionLandings;

function getLanding(audience: string, slug: string) {
  const key = `${audience}/${slug}` as SolutionKey;
  return key in solutionLandings ? solutionLandings[key] : null;
}

export function generateStaticParams() {
  return Object.keys(solutionLandings).map((key) => {
    const [audience, slug] = key.split("/");
    return { audience, slug };
  });
}

export async function generateMetadata({ params }: { params: Promise<{ audience: string; slug: string }> }): Promise<Metadata> {
  const { audience, slug } = await params;
  const landing = getLanding(audience, slug);
  if (!landing) return {};
  return createPageMetadata({ title: landing.title, description: landing.description, path: `/solusi/${landing.slug}` });
}

export default async function SolutionPage({ params }: { params: Promise<{ audience: string; slug: string }> }) {
  const { audience, slug } = await params;
  const landing = getLanding(audience, slug);
  if (!landing) notFound();
  const path = `/solusi/${landing.slug}`;
  const jsonLd = createServiceJsonLd(landing.title, landing.description, path, landing.faqs);

  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} /><SEOServicePage eyebrow={landing.eyebrow} title={landing.hero} intro={landing.intro} audience={landing.audience} outcomes={landing.outcomes} deliverables={landing.deliverables} proofs={landing.proofs} faqs={landing.faqs} startingPrice={landing.startingPrice} /></>;
}

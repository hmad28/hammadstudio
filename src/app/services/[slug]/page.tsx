import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceDetailPage } from "@/components/service-detail-page";
import { serviceDetails, serviceSlugs } from "@/lib/service-detail-content";
import type { ServiceDetailSlug } from "@/lib/service-detail-content";
import { createPageMetadata } from "@/lib/seo";

function isServiceSlug(value: string): value is ServiceDetailSlug {
  return (serviceSlugs as readonly string[]).includes(value);
}

export function generateStaticParams() {
  return serviceSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  if (!isServiceSlug(slug)) return {};
  const service = serviceDetails[slug];
  return createPageMetadata({
    title: service.title.id,
    description: service.intro.id,
    path: `/services/${slug}`,
  });
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!isServiceSlug(slug)) notFound();
  const service = serviceDetails[slug];
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `https://hammad.studio/services/${slug}#service`,
    name: service.title.id,
    description: service.intro.id,
    url: `https://hammad.studio/services/${slug}`,
    areaServed: {
      "@type": "Country",
      name: "Indonesia",
    },
    provider: {
      "@id": "https://hammad.studio/#organization",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <ServiceDetailPage slug={slug} />
    </>
  );
}

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceDetailPage } from "@/components/service-detail-page";
import { serviceDetails, serviceSlugs } from "@/lib/service-detail-content";
import type { ServiceDetailSlug } from "@/lib/service-detail-content";

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
  return {
    title: `${service.title.id} — Hammad Studio`,
    description: service.intro.id,
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!isServiceSlug(slug)) notFound();
  return <ServiceDetailPage slug={slug} />;
}

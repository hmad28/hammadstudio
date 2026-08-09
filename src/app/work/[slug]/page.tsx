import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectDetailPage } from "@/components/project-detail-page";
import { workProjects, workSlugs } from "@/lib/work-content";
import type { WorkSlug } from "@/lib/work-content";

function isWorkSlug(value: string): value is WorkSlug {
  return (workSlugs as readonly string[]).includes(value);
}

export function generateStaticParams() {
  return workSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  if (!isWorkSlug(slug)) return {};
  const project = workProjects[slug];
  return { title: `${project.title} — Hammad Studio`, description: project.overview.id };
}

export default async function WorkDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!isWorkSlug(slug)) notFound();
  return <ProjectDetailPage slug={slug} />;
}

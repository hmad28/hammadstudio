import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectDetailPage } from "@/components/project-detail-page";
import { workProjects, workSlugs } from "@/lib/work-content";
import type { WorkSlug } from "@/lib/work-content";
import { createPageMetadata } from "@/lib/seo";

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
  return createPageMetadata({
    title: `${project.title} - Studi Kasus`,
    description: project.overview.id,
    path: `/work/${slug}`,
    image: project.image,
  });
}

export default async function WorkDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!isWorkSlug(slug)) notFound();
  const project = workProjects[slug];
  const projectJsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": `https://hammad.studio/work/${slug}#project`,
    name: project.title,
    description: project.overview.id,
    url: `https://hammad.studio/work/${slug}`,
    image: project.image
      ? `https://hammad.studio${project.image}`
      : undefined,
    creator: {
      "@id": "https://hammad.studio/#organization",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(projectJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <ProjectDetailPage slug={slug} />
    </>
  );
}

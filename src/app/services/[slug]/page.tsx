import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceDetailPage } from "@/components/service-detail-page";
import { serviceDetails, serviceSlugs } from "@/lib/service-detail-content";
import type { ServiceDetailSlug } from "@/lib/service-detail-content";
import { createPageMetadata } from "@/lib/seo";

function isServiceSlug(value: string): value is ServiceDetailSlug {
  return (serviceSlugs as readonly string[]).includes(value);
}

const serviceSeo: Partial<Record<ServiceDetailSlug, { title: string; description: string }>> = {
  "e-commerce": {
    title: "Jasa Pembuatan Website E-Commerce",
    description: "Jasa pembuatan website e-commerce dengan katalog, cart, checkout, QRIS atau full payment, order management, inventory, dan admin dashboard.",
  },
  "business-system": {
    title: "Jasa Pembuatan Sistem Bisnis Custom",
    description: "Sistem bisnis berbasis web untuk CRM, booking, POS, inventory, workflow, dokumen, reporting, dan dashboard operasional sesuai kebutuhan.",
  },
  "automation-ai": {
    title: "Jasa Automation dan Integrasi AI untuk Bisnis",
    description: "Automation dan integrasi AI untuk lead qualification, customer service, follow-up, reminder, WhatsApp, email, database, dan workflow bisnis.",
  },
};

export function generateStaticParams() {
  return serviceSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  if (!isServiceSlug(slug)) return {};
  const service = serviceDetails[slug];
  const seo = serviceSeo[slug];
  return createPageMetadata({
    title: seo?.title ?? service.title.id,
    description: seo?.description ?? service.intro.id,
    path: `/services/${slug}`,
  });
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!isServiceSlug(slug)) notFound();
  const service = serviceDetails[slug];
  const seo = serviceSeo[slug];
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `https://hammad.studio/services/${slug}#service`,
    name: seo?.title ?? service.title.id,
    description: seo?.description ?? service.intro.id,
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

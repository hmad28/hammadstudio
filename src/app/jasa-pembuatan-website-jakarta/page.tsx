import type { Metadata } from "next";
import { SEOServicePage } from "@/components/seo-service-page";
import { proofProjects, sharedDeliverables, sharedFaqs } from "@/lib/seo-landing-content";
import { createPageMetadata } from "@/lib/seo";
import { createServiceJsonLd } from "@/lib/structured-data";

const path = "/jasa-pembuatan-website-jakarta";
const title = "Jasa Pembuatan Website Jakarta";
const description = "Jasa pembuatan website di Jakarta untuk UMKM dan perusahaan dengan scope transparan, SEO-ready foundation, performa, serta support yang jelas.";

export const metadata: Metadata = createPageMetadata({ title, description, path });

export default function JakartaWebsitePage() {
  const jsonLd = createServiceJsonLd(title, description, path, sharedFaqs, "Jakarta");
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} /><SEOServicePage eyebrow="JASA WEBSITE JAKARTA" title="Partner website untuk bisnis Jakarta yang ingin tumbuh lebih serius." intro="Hammad Studio berbasis di Jakarta dan membantu UMKM, perusahaan, organisasi, serta brand membangun website melalui proses discovery, design, development, review, dan launch yang jelas." audience="Halaman ini ditujukan untuk bisnis yang beroperasi atau melayani pasar Jakarta. Kami tidak menerbitkan ratusan halaman kota dengan isi yang hanya mengganti nama lokasi." outcomes={["Komunikasi langsung untuk bisnis di Jakarta.", "Website disusun berdasarkan tujuan dan customer journey nyata.", "Harga, timeline, serta scope dijelaskan sebelum build.", "Fondasi performa, crawlability, analytics, dan keamanan disiapkan sejak awal."]} deliverables={sharedDeliverables} proofs={proofProjects} faqs={sharedFaqs} relatedLinks={[{ href: "/jasa-website-umkm", label: "Website UMKM", description: "Katalog, WhatsApp, Maps, dan fondasi pencarian untuk bisnis berkembang." }, { href: "/jasa-website-company-profile", label: "Company profile", description: "Infrastruktur trust dan marketing untuk perusahaan." }, { href: "/harga-website", label: "Harga website", description: "Titik awal paket dan scope Hammad Studio 2026." }]} /></>;
}

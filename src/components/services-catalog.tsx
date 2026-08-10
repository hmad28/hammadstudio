"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRightIcon } from "./icons";
import { useLocale } from "./locale-provider";
import { MotionReveal } from "./motion-reveal";

const content = {
  scope: { id: "Cakupan umum", en: "Typical scope" },
  view: { id: "Lihat", en: "Explore" },
  services: [
    {
      number: "01",
      slug: "website",
      title: { id: "Website", en: "Websites" },
      description: { id: "Untuk personal brand, bisnis, organisasi, dan perusahaan yang membutuhkan digital presence profesional. Kami memperhatikan usability, responsive design, performance, SEO, dan maintainability—bukan hanya tampilan.", en: "For personal brands, businesses, organizations, and companies that need a professional digital presence. We consider usability, responsive design, performance, SEO, and maintainability—not just appearance." },
      items: ["Landing Page", "Portfolio", "Company Profile", "Corporate Website", "Institutional Website", "Event Website", "CMS", "Blog / News", "SEO Foundation", "Analytics"],
    },
    {
      number: "02",
      slug: "e-commerce",
      title: { id: "E-Commerce", en: "E-Commerce" },
      description: { id: "Solusi penjualan online dengan pengalaman pembelian yang profesional, dari kebutuhan sederhana hingga workflow commerce yang lebih custom.", en: "Online sales solutions with a professional buying experience, from simple needs to more customized commerce workflows." },
      items: ["Product Catalogue", "Product Management", "Cart & Checkout", "Payment Gateway", "QRIS", "Order Management", "Inventory", "Invoice", "Shipping Integration", "Sales Dashboard"],
    },
    {
      number: "03",
      slug: "web-application",
      title: { id: "Web Application", en: "Web Applications" },
      description: { id: "Aplikasi berbasis web yang dirancang berdasarkan workflow dan user yang benar-benar akan menggunakannya.", en: "Web-based applications designed around the workflows and people who will actually use them." },
      items: ["Customer Portal", "Member Area", "Admin Dashboard", "Booking Platform", "Registration", "Ticketing", "QR Check-in", "CRM", "Reporting", "Data Management"],
    },
    {
      number: "04",
      slug: "business-system",
      title: { id: "Business System", en: "Business Systems" },
      description: { id: "Sistem digital khusus agar operasional lebih terstruktur. Solusi mengikuti kebutuhan bisnis—bukan bisnis yang dipaksa mengikuti sistem.", en: "Purpose-built digital systems for more structured operations. The solution follows the business—not the other way around." },
      items: ["CRM", "Lead Management", "Order Management", "Customer Database", "Staff Management", "Approval Workflow", "Role & Permission", "Operational Dashboard", "Reporting", "Multi-user System"],
    },
    {
      number: "05",
      slug: "automation-ai",
      title: { id: "Automation & AI", en: "Automation & AI" },
      description: { id: "Automation untuk pekerjaan repetitif. AI digunakan sebagai alat produktivitas, bukan gimmick. Biaya infrastructure dan usage dapat berlaku sesuai layanan pihak ketiga.", en: "Automation for repetitive work. AI is used as a productivity tool, not a gimmick. Infrastructure and usage fees may apply depending on third-party services." },
      items: ["AI Customer Service", "WhatsApp Automation", "Lead Qualification", "Automated Follow-up", "Booking Automation", "Notifications", "Email Automation", "Document Generation", "Workflow Automation", "AI Internal Tools"],
    },
    {
      number: "06",
      slug: "custom-development",
      title: { id: "Custom Development", en: "Custom Development" },
      description: { id: "Untuk project yang tidak cocok dimasukkan ke paket standar. Dimulai dari memahami kebutuhan, menentukan scope, merancang architecture, lalu membangun solusi yang paling masuk akal.", en: "For projects that do not fit standard packages. We begin by understanding the need, defining scope, designing the architecture, and building the most sensible solution." },
      items: ["SaaS Platform", "Marketplace", "Custom Dashboard", "Internal Platform", "API Development", "Third-party Integration", "Multi-role Application", "MVP Development", "Existing System Improvement", "Specialized Product"],
    },
  ],
} as const;

const images = [
  "/images/work/saudi-education-expo.webp",
  "/images/work/ajwa-date-store.webp",
  "/images/work/operations-dashboard.webp",
  "/images/work/operations-dashboard.webp",
  "/images/work/operations-dashboard.webp",
  "/images/work/saudi-education-expo.webp",
] as const;

export function ServicesCatalog() {
  const { locale } = useLocale();

  return (
    <section className="bg-[#f0eee7] pb-28 text-[#0a0a09] sm:pb-36">
      <div className="site-container grid gap-5 md:grid-cols-2">
        {content.services.map((service, index) => (
          <MotionReveal key={service.number} delay={(index % 2) * 0.05}>
            <Link href={`/services/${service.slug}`} className="surface-card group flex h-full min-h-[560px] flex-col overflow-hidden transition duration-500 hover:-translate-y-1 hover:bg-white/60 hover:shadow-[0_25px_80px_rgba(15,15,12,.08)]">
              <div className="relative h-60 overflow-hidden bg-[#111] sm:h-72"><Image src={images[index]} alt={`${service.title[locale]} preview`} fill sizes="(max-width: 768px) 100vw, 600px" className="object-cover object-top opacity-80 transition duration-1000 group-hover:scale-[1.025] group-hover:opacity-100" /><div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" /><span className="label-mono absolute left-6 top-6 text-white/70">{service.number}</span></div>
              <div className="flex flex-1 flex-col p-7 sm:p-8"><h2 className="text-[clamp(2.3rem,4vw,3.6rem)] font-[520] leading-none tracking-[-0.055em]">{service.title[locale]}</h2><p className="mt-5 text-base leading-[1.7] text-black/56">{service.description[locale]}</p><div className="mt-6 flex flex-wrap gap-2">{service.items.slice(0, 5).map((item) => <span key={item} className="rounded-full border border-black/12 px-3 py-1.5 text-xs text-black/55">{item}</span>)}</div><span className="mt-auto flex items-center justify-between pt-8 text-sm font-semibold">{content.view[locale]} {service.title[locale]} <ArrowUpRightIcon className="button-arrow h-4 w-4" /></span></div>
            </Link>
          </MotionReveal>
        ))}
      </div>
    </section>
  );
}

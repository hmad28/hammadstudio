"use client";

import Link from "next/link";
import { ArrowUpRightIcon, CheckIcon } from "./icons";
import { useLocale } from "./locale-provider";
import { MotionReveal } from "./motion-reveal";

const content = {
  label: { id: "Paket & harga", en: "Packages & pricing" },
  title: { id: "Pilih titik awal yang sesuai.", en: "Choose the right starting point." },
  intro: { id: "Harga ditentukan oleh kombinasi halaman, functionality, content model, integrations, dan complexity—bukan jumlah halaman saja.", en: "Pricing reflects pages, functionality, content models, integrations, and complexity—not page count alone." },
  from: { id: "Mulai", en: "Starting at" },
  fit: { id: "Cocok untuk", en: "Best for" },
  included: { id: "Scope umum", en: "Typical scope" },
  request: { id: "Minta estimasi project", en: "Request a project estimate" },
  packages: [
    {
      category: "Website",
      intro: { id: "Website yang layak membawa nama bisnis Anda.", en: "A website worthy of representing your business." },
      plans: [
        { name: "Essential", price: "Rp 2,5 juta", bestFor: { id: "Landing page, portfolio, professional profile, small business, dan campaign.", en: "Landing pages, portfolios, professional profiles, small businesses, and campaigns." }, items: ["1 main page", "5–7 sections", "Custom visual direction", "Contact / WhatsApp", "Basic SEO & analytics", "Performance optimization", "Deployment", "2 review rounds", "1 month technical support"] },
        { name: "Business", price: "Rp 4,5 juta", featured: true, bestFor: { id: "Company profile, professional service, institution, agency, dan bisnis berkembang.", en: "Company profiles, professional services, institutions, agencies, and growing businesses." }, items: ["Up to 5 pages", "Custom design", "Basic CMS", "Forms & analytics", "Search Console", "Technical SEO foundation", "Deployment", "3 review rounds", "2 months technical support"] },
        { name: "Professional", price: "Rp 7,5 juta", bestFor: { id: "Brand yang membutuhkan craft, content system, dan engineering lebih serius.", en: "Brands that need stronger craft, content systems, and engineering." }, items: ["Up to 10 pages", "Advanced custom design", "CMS & content types", "Advanced interactions", "Accessibility improvements", "Performance work", "Stronger security review", "Source code", "3 months technical support"] },
        { name: "Corporate / Custom", price: "Rp 12 juta+", bestFor: { id: "Corporate, institusi besar, multilingual, directory, portal, dan advanced CMS.", en: "Corporate, large institutions, multilingual sites, directories, portals, and advanced CMS." }, items: ["Scope through discovery", "Advanced CMS", "Custom integrations", "Multilingual options", "Custom architecture", "Source code handover", "Launch support"] },
      ],
    },
    {
      category: "E-Commerce",
      intro: { id: "Dari katalog sederhana hingga commerce dengan workflow custom.", en: "From simple catalogues to commerce with custom workflows." },
      plans: [
        { name: "Commerce Starter", price: "Rp 5 juta", bestFor: { id: "Catalog dan simple selling tanpa payment flow kompleks.", en: "Catalogues and simple selling without complex payment flows." }, items: ["Product CMS", "Catalogue", "Cart", "Checkout / order flow", "Admin", "Customer & order data"] },
        { name: "Commerce", price: "Rp 8 juta", featured: true, bestFor: { id: "Online store dengan transaksi dan operasional yang proper.", en: "Online stores with proper transactions and operations." }, items: ["Catalogue & CMS", "Cart & checkout", "Payment gateway", "Orders & customers", "Invoice & notifications", "Basic reporting"] },
        { name: "Commerce Pro", price: "Rp 12,5 juta+", bestFor: { id: "Commerce dengan inventory, shipping, promotion, dan workflow lebih kompleks.", en: "Commerce with inventory, shipping, promotions, and more complex workflows." }, items: ["Voucher & promotion", "Stock management", "Shipping integration", "Advanced dashboard", "Custom order workflow", "Advanced reporting"] },
      ],
    },
    {
      category: "Web Application",
      intro: { id: "Dashboard, portal, booking, registration, membership, dan aplikasi berbasis workflow.", en: "Dashboards, portals, booking, registration, memberships, and workflow applications." },
      plans: [{ name: "Application", price: "Rp 10 juta+", bestFor: { id: "Aplikasi web dengan auth, database, role, dan core business logic.", en: "Web applications with authentication, databases, roles, and core business logic." }, items: ["Product definition", "Authentication", "Database", "Roles & permissions", "Core workflow", "Admin experience"] }],
    },
    {
      category: "Automation & AI",
      intro: { id: "Customer service, lead flow, follow-up, notification, dan workflow automation.", en: "Customer service, lead flows, follow-up, notifications, and workflow automation." },
      plans: [{ name: "Automation", price: "Rp 5 juta+", bestFor: { id: "Satu workflow repetitif yang sudah terdefinisi jelas.", en: "One clearly defined repetitive workflow." }, items: ["Workflow mapping", "API connection", "Validation", "Notifications", "Documentation", "Usage cost estimate"] }],
    },
    {
      category: "Business System",
      intro: { id: "Sistem operasional dengan multi-role, workflow, reporting, data, dan permissions.", en: "Operational systems with multiple roles, workflows, reporting, data, and permissions." },
      plans: [{ name: "Business System", price: "Rp 15 juta+", bestFor: { id: "Operasi yang sudah terlalu kompleks untuk spreadsheet dan chat.", en: "Operations that have outgrown spreadsheets and chat." }, items: ["Discovery & scope", "Multi-role access", "Operational workflow", "Reporting", "Data management", "Milestone reviews"] }],
    },
    {
      category: "Custom Development",
      intro: { id: "SaaS, marketplace, API, platform, dan kebutuhan khusus lainnya.", en: "SaaS, marketplaces, APIs, platforms, and other specialized requirements." },
      plans: [{ name: "Custom Development", price: "Rp 15 juta+", bestFor: { id: "Project custom yang membutuhkan architecture dan delivery khusus.", en: "Custom projects that need purpose-built architecture and delivery." }, items: ["Product definition", "Custom architecture", "Third-party integration", "Production engineering", "Security review", "Launch & handover"] }],
    },
  ],
  securityTitle: { id: "Included dalam setiap build", en: "Included in every build" },
  securityIntro: { id: "Security baseline adalah bagian dari engineering, bukan add-on berbayar.", en: "A security baseline is part of engineering, not a paid add-on." },
  securityItems: ["Secure deployment", "HTTPS configuration", "Security headers", "Input validation", "Dependency review", "Basic abuse protection"],
  advanced: { id: "Project advanced dapat mencakup RBAC, audit logs, rate limiting, API security, file validation, session security, dan security testing sesuai kebutuhan.", en: "Advanced projects may include RBAC, audit logs, rate limiting, API security, file validation, session security, and security testing as required." },
  notice: { id: "Biaya infrastructure, WhatsApp API/BSP, AI usage, email provider, payment gateway, dan layanan pihak ketiga dihitung terpisah jika diperlukan.", en: "Infrastructure, WhatsApp API/BSP, AI usage, email providers, payment gateways, and third-party service fees are calculated separately when required." },
} as const;

export function PricingPageContent() {
  const { locale } = useLocale();

  return (
    <div className="bg-[#f0eee7] pb-28 pt-32 text-[#0a0a09] sm:pb-36 sm:pt-40">
      <div className="site-container">
        <MotionReveal className="grid gap-8 pb-20 lg:grid-cols-12 lg:gap-6">
          <div className="lg:col-span-3"><span className="label-mono text-black/40">{content.label[locale]}</span></div>
          <div className="lg:col-span-9"><h1 className="max-w-[940px] text-[clamp(3.3rem,7vw,7rem)] font-[520] leading-[0.88] tracking-[-0.065em]">{content.title[locale]}</h1><p className="mt-8 max-w-[720px] text-base leading-[1.7] text-black/55 sm:text-lg">{content.intro[locale]}</p></div>
        </MotionReveal>

        {content.packages.map((group) => (
          <section key={group.category} className="border-t border-black/15 py-14 sm:py-20">
            <MotionReveal className="grid gap-6 lg:grid-cols-12 lg:gap-6"><div className="lg:col-span-4"><h2 className="text-[clamp(2.7rem,5vw,5rem)] font-[510] leading-none tracking-[-0.055em]">{group.category}</h2></div><p className="max-w-[620px] text-base leading-[1.65] text-black/52 lg:col-span-8">{group.intro[locale]}</p></MotionReveal>
            <div className={`mt-10 grid gap-3 ${group.plans.length === 4 ? "lg:grid-cols-2 xl:grid-cols-4" : group.plans.length === 3 ? "lg:grid-cols-3" : "lg:grid-cols-1"}`}>
              {group.plans.map((plan, index) => (
                <MotionReveal key={plan.name} delay={index * 0.05} className={`flex min-h-[440px] flex-col rounded-[9px] border p-6 sm:p-7 ${"featured" in plan && plan.featured ? "border-[#0a0a09] bg-[#0a0a09] text-white" : "border-black/14 bg-[#e8e5dc]"}`}>
                  <div className="flex items-start justify-between"><span className="label-mono opacity-42">{plan.name}</span><span className="font-[family-name:var(--font-geist-mono)] text-[0.6rem] opacity-30">0{index + 1}</span></div>
                  <div className="mt-10"><span className="text-[0.65rem] opacity-40">{content.from[locale]}</span><p className="mt-1 text-[clamp(2.3rem,4vw,3.8rem)] font-[520] leading-none tracking-[-0.06em]">{plan.price}</p></div>
                  <div className="mt-8 border-t border-current/15 pt-5"><span className="label-mono opacity-35">{content.fit[locale]}</span><p className="mt-3 text-sm leading-[1.6] opacity-58">{plan.bestFor[locale]}</p></div>
                  <div className="mt-7"><span className="label-mono opacity-35">{content.included[locale]}</span><ul className="mt-4 space-y-2.5">{plan.items.map((item) => <li key={item} className="flex items-start gap-2.5 text-xs leading-[1.5] opacity-62"><CheckIcon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-current" />{item}</li>)}</ul></div>
                </MotionReveal>
              ))}
            </div>
          </section>
        ))}

        <MotionReveal className="mt-4 grid gap-10 rounded-[10px] bg-[#0a0a09] p-7 text-white sm:p-10 lg:grid-cols-12 lg:gap-6">
          <div className="lg:col-span-4"><span className="label-mono text-[#cfef57]">Security baseline</span><h2 className="mt-5 text-3xl font-[510] tracking-[-0.05em] sm:text-4xl">{content.securityTitle[locale]}</h2><p className="mt-4 text-sm leading-[1.65] text-white/48">{content.securityIntro[locale]}</p></div>
          <div className="lg:col-span-5"><ul className="grid gap-3 sm:grid-cols-2">{content.securityItems.map((item) => <li key={item} className="flex items-center gap-2.5 border-b border-white/10 pb-3 text-sm text-white/62"><CheckIcon className="h-4 w-4 text-[#cfef57]" />{item}</li>)}</ul><p className="mt-6 text-xs leading-[1.65] text-white/38">{content.advanced[locale]}</p><p className="mt-4 text-xs leading-[1.65] text-[#cfef57]/65">{content.notice[locale]}</p></div>
          <div className="lg:col-span-3 lg:text-right"><Link href="mailto:hello@hammad.studio" className="acid-button group inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold">{content.request[locale]} <ArrowUpRightIcon className="button-arrow h-4 w-4" /></Link></div>
        </MotionReveal>
      </div>
    </div>
  );
}

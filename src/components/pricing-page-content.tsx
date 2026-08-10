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
  choose: { id: "Diskusikan paket", en: "Discuss this package" },
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
    <div className="bg-[#f7f5ef] text-[#17181d]">
      {/* Dark Indigo Midnight Hero Header */}
      <section className="relative overflow-hidden bg-[#070a12] pb-20 pt-36 text-white sm:pb-28 sm:pt-44">
        {/* Indigo & Violet Ambient Glow */}
        <div className="pointer-events-none absolute left-1/2 top-1/3 -z-0 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(91,55,213,0.45)_0%,rgba(40,100,255,0.25)_50%,transparent_70%)] blur-3xl" aria-hidden="true" />

        <div className="site-container relative z-10">
          <MotionReveal className="grid gap-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:items-end">
            <div>
              <span className="label-mono acid-glow-badge inline-block rounded-full px-3.5 py-1 text-[0.68rem]">
                {content.label[locale]}
              </span>
              <h1 className="mt-5 max-w-[760px] text-[clamp(3.2rem,6vw,6rem)] font-[520] leading-[0.9] tracking-[-0.065em] text-white">
                {content.title[locale]}
              </h1>
            </div>
            <p className="body-copy max-w-[650px] text-white/65 lg:ml-auto">
              {content.intro[locale]}
            </p>
          </MotionReveal>
        </div>
      </section>

      <div className="site-container py-16 sm:py-24">
        {content.packages.map((group) => (
          <section key={group.category} className="border-t border-black/12 py-12 sm:py-16">
            <MotionReveal className="grid gap-5 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] lg:items-end">
              <h2 className="text-[clamp(2.4rem,4vw,4rem)] font-[530] leading-none tracking-[-0.055em] text-[#17181d]">
                {group.category}
              </h2>
              <p className="max-w-[620px] text-sm leading-[1.65] text-[#6d7180] sm:text-base">
                {group.intro[locale]}
              </p>
            </MotionReveal>
            <div
              className={`mt-10 grid gap-4 ${
                group.plans.length === 4
                  ? "lg:grid-cols-2 xl:grid-cols-4"
                  : group.plans.length === 3
                  ? "lg:grid-cols-3"
                  : "lg:grid-cols-1"
              }`}
            >
              {group.plans.map((plan, index) => {
                const isFeatured = "featured" in plan && plan.featured;
                const isTinted = index === 2 || index === 3;

                return (
                  <MotionReveal
                    key={plan.name}
                    delay={index * 0.05}
                    className={`flex ${
                      group.plans.length === 1 ? "min-h-[300px]" : "min-h-[440px]"
                    } flex-col rounded-2xl p-6 sm:p-7 transition duration-400 hover:-translate-y-1 ${
                      isFeatured
                        ? "luxury-dark-card text-white shadow-[0_25px_60px_rgba(7,10,18,0.5)]"
                        : isTinted
                        ? "tint-card-lavender text-[#17181d]"
                        : "surface-card border border-[#dde0e7] bg-white text-[#17181d] shadow-sm hover:border-[#8057ff]/30"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className={`label-mono ${isFeatured ? "text-[#d2f34c]" : "text-[#8057ff] font-bold"}`}>
                        {plan.name} {isFeatured && "★"}
                      </span>
                      <span className="font-[family-name:var(--font-geist-mono)] text-xs opacity-40">0{index + 1}</span>
                    </div>
                    <div className="mt-8">
                      <span className="text-[0.7rem] uppercase tracking-wider opacity-50 font-mono">{content.from[locale]}</span>
                      <p className="mt-1 text-[clamp(2.2rem,3.8vw,3.6rem)] font-[540] leading-none tracking-[-0.06em]">
                        {plan.price}
                      </p>
                    </div>
                    <div className="mt-7 border-t border-current/15 pt-5">
                      <span className="label-mono opacity-40">{content.fit[locale]}</span>
                      <p className="mt-2 text-xs leading-[1.6] opacity-75 sm:text-sm">{plan.bestFor[locale]}</p>
                    </div>
                    <div className="mt-6">
                      <span className="label-mono opacity-40">{content.included[locale]}</span>
                      <ul
                        className={`mt-3.5 ${
                          group.plans.length === 1 ? "grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3" : "space-y-2.5"
                        }`}
                      >
                        {plan.items.map((item) => (
                          <li key={item} className="flex items-start gap-2.5 text-xs leading-[1.5] opacity-85 sm:text-xs">
                            <CheckIcon className={`mt-0.5 h-3.5 w-3.5 shrink-0 ${isFeatured ? "text-[#d2f34c]" : "text-[#8057ff]"}`} />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Link
                      href="/contact"
                      className={`group mt-auto inline-flex w-fit items-center gap-2 pt-8 text-xs font-semibold sm:text-sm ${
                        isFeatured ? "text-[#d2f34c]" : "text-[#17181d] group-hover:text-[#8057ff]"
                      }`}
                    >
                      {content.choose[locale]} <ArrowUpRightIcon className="button-arrow h-4 w-4" />
                    </Link>
                  </MotionReveal>
                );
              })}
            </div>
          </section>
        ))}

        <MotionReveal className="mt-6 grid gap-10 rounded-2xl bg-[#070a12] p-8 text-white sm:p-12 lg:grid-cols-12 lg:gap-8 shadow-2xl border border-white/12">
          <div className="lg:col-span-4">
            <span className="label-mono text-[#d2f34c]">Security baseline</span>
            <h2 className="mt-4 text-2xl font-[530] tracking-[-0.05em] sm:text-3xl lg:text-4xl">
              {content.securityTitle[locale]}
            </h2>
            <p className="mt-4 text-xs leading-[1.65] text-white/60 sm:text-sm">
              {content.securityIntro[locale]}
            </p>
          </div>
          <div className="lg:col-span-5">
            <ul className="grid gap-3 sm:grid-cols-2">
              {content.securityItems.map((item) => (
                <li key={item} className="flex items-center gap-2.5 border-b border-white/10 pb-3 text-xs text-white/75 sm:text-sm">
                  <CheckIcon className="h-4 w-4 text-[#d2f34c]" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs leading-[1.65] text-white/45">{content.advanced[locale]}</p>
            <p className="mt-3 text-xs leading-[1.65] text-[#d2f34c]/85">{content.notice[locale]}</p>
          </div>
          <div className="lg:col-span-3 lg:text-right">
            <Link
              href="mailto:hello@hammad.studio"
              className="acid-button group inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-xs font-semibold text-black sm:text-sm"
            >
              {content.request[locale]} <ArrowUpRightIcon className="button-arrow h-4 w-4" />
            </Link>
          </div>
        </MotionReveal>
      </div>
    </div>
  );
}


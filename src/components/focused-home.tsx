import Link from "next/link";
import { ArrowLink, Kicker, ProjectVisual } from "./ui";
import { localHref } from "@/lib/locale";
import type { Locale } from "@/lib/types";

const projects = [
  { name: "Saudi Education Expo", meta: "EVENT PLATFORM / 2026", copy: "Campaign, registration, payment and QR ticketing in one digital experience.", visual: 1 },
  { name: "Operations, made visible", meta: "BUSINESS SYSTEM / 2026", copy: "A focused dashboard for teams moving beyond spreadsheets and scattered updates.", visual: 2 },
  { name: "A product worth using", meta: "DIGITAL PRODUCT / 2026", copy: "A clear first version for founders who need to validate the right product.", visual: 3 },
];

const capabilities = [
  ["01", "Websites", "Marketing, company, event and campaign websites.", "web", "WEB / PRESENCE"],
  ["02", "Commerce", "Storefront, checkout, payment and order systems.", "commerce", "COMMERCE / FLOW"],
  ["03", "Business Systems", "Dashboard, CRM, booking and internal operations.", "systems", "SYSTEMS / OPS"],
  ["04", "Digital Products", "MVP, SaaS, platforms and custom applications.", "products", "PRODUCT / MVP"],
] as const;

export function FocusedHome({ locale }: { locale: Locale }) {
  const id = locale === "id";
  return <>
    <section className="focus-section focus-hero">
      <div className="focus-hero-grid">
        <div className="focus-hero-copy">
          <Kicker>INDEPENDENT DIGITAL PRODUCT STUDIO / INDONESIA</Kicker>
          <h1><span data-reveal="mask">{id ? "Kami merancang dan membangun" : "We design and build"}</span><span data-reveal="mask">{id ? "produk digital." : "digital products."}</span></h1>
          <p data-reveal>{id ? "Website, e-commerce, business systems, dan software custom untuk bisnis yang terus tumbuh." : "Websites, e-commerce, business systems, and custom software for growing businesses."}</p>
          <div className="focus-hero-actions" data-reveal>
            <ArrowLink magnetic href={localHref(locale, "/start-project")}>{id ? "Mulai Project" : "Start a Project"}</ArrowLink>
            <span className="focus-starting">{id ? "Project mulai dari" : "Projects from"} <strong>Rp3.5M</strong></span>
          </div>
        </div>
        <Link data-transition data-cursor="view" href={localHref(locale, "/work/project-1")} className="focus-hero-visual" data-reveal="image">
          <ProjectVisual index={1} title="WEB / PRODUCT" />
          <span className="focus-visual-caption">SELECTED WORK / 01 <b>VIEW PROJECT ↗</b></span>
        </Link>
      </div>
    </section>

    <section className="focus-section focus-work">
      <div className="focus-section-head" data-reveal><Kicker>SELECTED WORK / 2026</Kicker><h2>Work that speaks<br /><em>for itself.</em></h2></div>
      <div className="focus-projects">
        {projects.map((project, index) => <Link data-transition data-cursor="view" className={`focus-project ${index === 1 ? "is-offset" : ""}`} href={localHref(locale, `/work/project-${index + 1}`)} key={project.name}>
          <div className="focus-project-media" data-reveal="image"><ProjectVisual index={project.visual} title={project.meta.split(" /")[0]} /></div>
          <div className="focus-project-meta"><span>{project.meta}</span><h3>{project.name}</h3><p>{project.copy}</p><b>View Project ↗</b></div>
        </Link>)}
      </div>
    </section>

    <section className="focus-section focus-capabilities">
      <div className="focus-section-head" data-reveal><Kicker>CAPABILITIES / 03</Kicker><h2>What we build.</h2></div>
      <div className="focus-capability-list">
        {capabilities.map(([number, title, copy, kind, visual]) => <Link data-transition data-service-preview={kind} href={localHref(locale, `/services/${kind === "web" ? "web" : kind === "commerce" ? "commerce" : kind === "systems" ? "systems" : "product-engineering"}`)} className="focus-capability" key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p><b>↗</b><i>{visual}</i></Link>)}
      </div>
    </section>

    <section className="focus-section focus-pricing">
      <div className="focus-section-head" data-reveal><Kicker>PRICING / 04</Kicker><h2>Clear starting points.</h2></div>
      <div className="focus-price-list">
        {[["01", "Website", "Rp3.5M", "Landing pages and focused digital presence."], ["02", "Business Website", "Rp6.5M", "Complete professional websites for growing businesses."], ["03", "Custom Software", "Rp12.5M", "Systems, dashboards and tailored digital products."]].map(([number, name, price, copy]) => <Link data-transition className="focus-price-row" href={localHref(locale, "/pricing")} key={number}><span>{number}</span><h3>{name}</h3><strong>from {price}</strong><p>{copy}</p><b>↗</b></Link>)}
      </div>
      <ArrowLink href={localHref(locale, "/pricing")}>View all pricing</ArrowLink>
    </section>

    <section className="focus-section focus-process">
      <div className="focus-section-head" data-reveal><Kicker>HOW WE WORK / 05</Kicker><h2>Simple process.<br /><em>Serious execution.</em></h2></div>
      <div className="focus-process-list">
        {[ ["01", "Define", "Understand the problem, scope and priorities."], ["02", "Design & Build", "Turn the direction into a polished working product."], ["03", "Launch & Improve", "Ship, validate and continue improving when needed."]].map(([number, name, copy]) => <article key={number}><span>{number}</span><div><h3>{name}</h3><p>{copy}</p></div></article>)}
      </div>
    </section>

    <section className="focus-section focus-final">
      <Kicker>START A PROJECT</Kicker><h2>Have something<br /><em>worth building?</em></h2><p>Tell us what you&apos;re working on.</p><ArrowLink magnetic href={localHref(locale, "/start-project")}>Start a Project</ArrowLink><a className="focus-email" href="mailto:hello@hammad.studio">hello@hammad.studio</a>
    </section>
  </>;
}

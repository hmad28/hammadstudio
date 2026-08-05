import Link from "next/link";
import { ArrowLink, Kicker, ProjectVisual } from "./ui";
import { localHref } from "@/lib/locale";
import type { Locale } from "@/lib/types";

const services = [
  ["01", "Web Development", "Company profile, landing page, event website, and web platforms.", "web", "WEB / 01"],
  ["02", "E-Commerce", "Storefront, checkout, payment, and order management.", "commerce", "COMMERCE / 02"],
  ["03", "Business Systems", "Dashboard, CRM, booking, and operational tools.", "systems", "SYSTEMS / 03"],
  ["04", "Custom Software", "MVP, SaaS, platforms, and custom applications.", "products", "SOFTWARE / 04"],
] as const;

const projects = [
  ["Saudi Education Expo", "Event Platform · 2026", 1],
  ["Operations, made visible", "Business System · 2026", 2],
  ["A product worth using", "Digital Product · 2026", 3],
] as const;

const pricing = [
  ["01", "Website", "Rp3.5M", "Landing page & focused website."],
  ["02", "Business Website", "Rp6.5M", "Professional company website."],
  ["03", "Custom Software", "Rp12.5M", "Dashboard, systems, and custom applications."],
] as const;

export function FocusedHome({ locale }: { locale: Locale }) {
  return <>
    <section className="focus-section focus-hero">
      <div className="focus-hero-grid">
        <div className="focus-hero-copy">
          <Kicker>DIGITAL PRODUCT STUDIO</Kicker>
          <h1><span data-reveal="mask">We build digital</span><span data-reveal="mask">products that work.</span></h1>
          <p data-reveal>Website, e-commerce, business systems, and custom software for growing businesses.</p>
          <div className="focus-hero-actions" data-reveal><ArrowLink magnetic href={localHref(locale, "/start-project")}>Start a Project</ArrowLink><ArrowLink muted href={localHref(locale, "/work")}>View Our Work</ArrowLink></div>
          <span className="focus-starting">Projects from <strong>Rp3.5M</strong></span>
        </div>
        <Link data-transition data-cursor="view" href={localHref(locale, "/work/project-1")} className="focus-hero-visual" data-reveal="image"><ProjectVisual index={1} title="WEB / PRODUCT" /><span className="focus-visual-caption">SELECTED WORK / 01 <b>VIEW PROJECT ↗</b></span></Link>
      </div>
    </section>

    <section className="focus-section focus-services">
      <div className="focus-section-head" data-reveal><Kicker>SERVICES</Kicker><h2>What we do.</h2></div>
      <div className="focus-service-grid">
        {services.map(([number, title, copy, kind, visual]) => <Link data-transition data-service-preview={kind} href={localHref(locale, `/services/${kind === "products" ? "product-engineering" : kind}`)} className="focus-service" key={number}><span>{number}</span><div><h3>{title}</h3><p>{copy}</p></div><b>↗</b><i>{visual}</i></Link>)}
      </div>
    </section>

    <section className="focus-section focus-work">
      <div className="focus-section-head" data-reveal><Kicker>SELECTED WORK</Kicker><h2>Some things<br /><em>we&apos;ve built.</em></h2></div>
      <div className="focus-projects">
        {projects.map(([name, meta, visual], index) => <Link data-transition data-cursor="view" className={`focus-project ${index === 1 ? "is-offset" : ""}`} href={localHref(locale, `/work/project-${index + 1}`)} key={name}><div className="focus-project-media" data-reveal="image"><ProjectVisual index={visual} title={name.split(" ")[0].toUpperCase()} /></div><div className="focus-project-meta"><div><h3>{name}</h3><span>{meta}</span></div><b>View Project ↗</b></div></Link>)}
      </div>
    </section>

    <section className="focus-section focus-pricing">
      <div className="focus-section-head" data-reveal><Kicker>PRICING</Kicker><h2>Clear pricing.<br /><em>No surprises.</em></h2></div>
      <div className="focus-price-list">
        {pricing.map(([number, name, price, copy]) => <Link data-transition className="focus-price-row" href={localHref(locale, "/pricing")} key={number}><span>{number}</span><div><h3>{name}</h3><p>{copy}</p></div><strong>From {price}</strong><b>↗</b></Link>)}
      </div>
      <ArrowLink href={localHref(locale, "/pricing")}>View Pricing</ArrowLink>
    </section>

    <section className="focus-section focus-final">
      <Kicker>START A PROJECT</Kicker><h2>Got a project<br /><em>in mind?</em></h2><p>Tell us what you need. We&apos;ll help figure out the best way to build it.</p><ArrowLink magnetic href={localHref(locale, "/start-project")}>Start a Project</ArrowLink><a className="focus-email" href="mailto:hello@hammad.studio">hello@hammad.studio</a>
    </section>
  </>;
}

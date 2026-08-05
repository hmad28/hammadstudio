import Link from "next/link";
import { ArrowLink, Kicker, ProjectVisual } from "./ui";
import { localHref } from "@/lib/locale";
import type { Locale } from "@/lib/types";

const services = [
  ["01", "Web Development", "Websites that make your business easier to understand and trust.", "web"],
  ["02", "E-Commerce", "Storefronts, checkout, payment, and order flows built to convert.", "commerce"],
  ["03", "Business Systems", "Dashboards and operational tools shaped around your workflow.", "systems"],
  ["04", "Custom Software", "MVPs, platforms, and applications built for the next stage.", "products"],
] as const;

const works = [
  ["Saudi Education Expo", "Event platform", 1],
  ["Operations, made visible", "Business system", 2],
  ["A product worth using", "Digital product", 3],
] as const;

export function DytamaHome({ locale }: { locale: Locale }) {
  return <div className="dytama-home">
    <section className="dytama-hero">
      <div className="dytama-container dytama-hero-grid">
        <div className="dytama-hero-copy">
          <Kicker>DIGITAL PRODUCT STUDIO</Kicker>
          <h1><span data-reveal="mask">We build digital</span><span data-reveal="mask">products that work.</span></h1>
          <p data-reveal>Websites, e-commerce, business systems, and custom software for growing businesses.</p>
          <div className="dytama-hero-actions" data-reveal><ArrowLink magnetic href={localHref(locale, "/start-project")}>Start a Project</ArrowLink><ArrowLink muted href={localHref(locale, "/work")}>View Our Work</ArrowLink></div>
          <small>Projects from <strong>Rp3.5M</strong></small>
        </div>
        <Link data-transition data-cursor="view" className="dytama-hero-art" href={localHref(locale, "/work/project-1")} data-reveal="image"><ProjectVisual index={1} title="PRODUCT / 01" /><span>VIEW PROJECT ↗</span></Link>
      </div>
    </section>

    <section className="dytama-trust"><div className="dytama-container dytama-trust-row"><span>DESIGN</span><i>•</i><span>WEB</span><i>•</i><span>COMMERCE</span><i>•</i><span>SYSTEMS</span><i>•</i><span>SOFTWARE</span></div></section>

    <section className="dytama-section dytama-intro"><div className="dytama-container dytama-split"><div><Kicker>ABOUT HAMMAD STUDIO</Kicker></div><div><h2>Built around your business.</h2><p>Hammad Studio is an independent digital product studio for teams that need a better website, a sharper commerce experience, or software that finally fits the way they work.</p><ArrowLink href={localHref(locale, "/studio")}>More about the studio</ArrowLink></div></div></section>

    <section className="dytama-section dytama-services"><div className="dytama-container"><div className="dytama-section-head"><Kicker>SERVICES</Kicker><h2>What we do.</h2><p>From first idea to a product your team can actually use.</p></div><div className="dytama-service-grid">{services.map(([number, name, copy, kind]) => <Link data-transition data-service-preview={kind} className="dytama-service" href={localHref(locale, `/services/${kind === "products" ? "product-engineering" : kind}`)} key={number}><span>{number}</span><div><h3>{name}</h3><p>{copy}</p></div><b>↗</b></Link>)}</div></div></section>

    <section className="dytama-section dytama-work"><div className="dytama-container"><div className="dytama-section-head dytama-work-head"><Kicker>SELECTED WORK</Kicker><div><h2>Some things we&apos;ve built.</h2><ArrowLink href={localHref(locale, "/work")}>View all work</ArrowLink></div></div><div className="dytama-work-grid">{works.map(([name, type, visual], index) => <Link data-transition data-cursor="view" className={`dytama-work-card ${index===1?"is-large":""}`} href={localHref(locale, `/work/project-${index+1}`)} key={name}><div className="dytama-work-image" data-reveal="image"><ProjectVisual index={visual} title={type.toUpperCase()} /></div><div className="dytama-work-meta"><div><h3>{name}</h3><span>{type} · 2026</span></div><b>View Project ↗</b></div></Link>)}</div></div></section>

    <section className="dytama-section dytama-pricing"><div className="dytama-container"><div className="dytama-section-head"><Kicker>PRICING</Kicker><h2>Clear starting points.</h2><p>Know the expected investment before an unnecessary sales call.</p></div><div className="dytama-price-grid">{[["Website","Rp3.5M","Landing page & focused website."],["Business Website","Rp6.5M","Professional company website."],["Custom Software","Rp12.5M","Dashboard, systems, and custom applications."]].map(([name, price, copy], index)=><Link data-transition className="dytama-price" href={localHref(locale, "/pricing")} key={name}><span>0{index+1}</span><h3>{name}</h3><strong>From {price}</strong><p>{copy}</p><b>↗</b></Link>)}</div><ArrowLink href={localHref(locale, "/pricing")}>View full pricing</ArrowLink></div></section>

    <section className="dytama-cta"><div className="dytama-container dytama-cta-inner"><Kicker>LET&apos;S WORK TOGETHER</Kicker><h2>Have something<br /><em>worth building?</em></h2><p>Tell us what you need. We&apos;ll help figure out the best way to build it.</p><ArrowLink magnetic href={localHref(locale, "/start-project")}>Start a Project</ArrowLink><a href="mailto:hello@hammad.studio">hello@hammad.studio</a></div></section>
  </div>;
}

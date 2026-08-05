import Link from "next/link";
import { faqs, packages, processes, services, t } from "@/lib/site-data";
import type { Locale } from "@/lib/types";
import { formatIDR } from "@/lib/estimator";
import { localHref } from "@/lib/locale";

export function Kicker({ children }: { children: React.ReactNode }) { return <p className="kicker">{children}</p>; }

export function ArrowLink({ href, children, muted = false }: { href: string; children: React.ReactNode; muted?: boolean }) {
  return <Link data-transition className={muted ? "arrow-link muted magnetic" : "arrow-link magnetic"} href={href}><span>{children}</span><b aria-hidden>↗</b></Link>;
}

export function PageHero({ eyebrow, title, body, aside }: { eyebrow: string; title: React.ReactNode; body: string; aside?: React.ReactNode }) {
  return (
    <section className="page-hero section-shell">
      <Kicker>{eyebrow}</Kicker>
      <div className="page-hero-grid"><h1>{title}</h1><div className="hero-side"><p>{body}</p>{aside}</div></div>
    </section>
  );
}

export function ProjectVisual({ index = 1, title = "Selected work" }: { index?: number; title?: string }) {
  return (
    <div className={`project-visual visual-${index}`} aria-label="Project material placeholder">
      <div className="visual-bar"><span>HAMMAD / {String(index).padStart(2, "0")}</span><span>CASE STUDY</span></div>
      <div className="visual-stage"><span className="visual-orbit" /><span className="visual-panel"><i /><i /><i /></span><strong>{title}</strong></div>
      <div className="visual-note">PROJECT MATERIAL<br />TO BE SUPPLIED</div>
    </div>
  );
}

export function ServicesIndex({ locale, limit }: { locale: Locale; limit?: number }) {
  const id = locale === "id";
  return <div className="service-list">{services.slice(0, limit).map((service) => (
    <Link href={localHref(locale, `/services/${service.slug}`)} className="service-row" key={service.slug}>
      <span className="service-number">{service.number}</span><h3>{t(service.name, locale)}</h3><p>{t(service.description, locale)}</p><span className="round-arrow">↗</span>
      <span className="service-price">{id ? "Mulai" : "From"} {formatIDR(service.startingPrice).replace("Rp", "Rp ")}</span>
    </Link>
  ))}</div>;
}

export function PricingGrid({ locale, limit }: { locale: Locale; limit?: number }) {
  const id = locale === "id";
  return <div className="pricing-grid">{packages.slice(0, limit).map((item) => (
    <article className={item.featured ? "price-card featured" : "price-card"} key={item.id}>
      <div className="price-card-top"><span className="meta">{item.featured ? (id ? "PALING POPULER" : "MOST POPULAR") : item.timeline}</span><span className="price-index">0{packages.indexOf(item) + 1}</span></div>
      <h3>{item.name}</h3><p>{t(item.bestFor, locale)}</p><div className="price"><small>{id ? "mulai" : "starting at"}</small>{formatIDR(item.startingPrice)}</div>
      <ul>{item.includes.map((line) => <li key={line.en}>{t(line, locale)}</li>)}</ul>
      <ArrowLink href={localHref(locale, `/start-project?package=${item.id}`)}>{id ? "Pilih layanan" : "Select service"}</ArrowLink>
    </article>
  ))}</div>;
}

export function Process({ locale }: { locale: Locale }) {
  return <div className="process-list">{processes.map(([name, copyId, copyEn], index) => <article key={name}><span>0{index + 1}</span><h3>{name}</h3><p>{locale === "id" ? copyId : copyEn}</p></article>)}</div>;
}

export function FAQ({ locale }: { locale: Locale }) {
  return <div className="faq-list">{faqs.map((item, index) => <details key={item.q.en}><summary><span>0{index + 1}</span>{t(item.q, locale)}<b>+</b></summary><p>{t(item.a, locale)}</p></details>)}</div>;
}

export function Marquee() {
  return <div className="marquee" aria-hidden><div>DESIGN <i>·</i> WEB <i>·</i> COMMERCE <i>·</i> SYSTEMS <i>·</i> SOFTWARE <i>·</i> AUTOMATION <i>·</i> DESIGN <i>·</i> WEB <i>·</i> COMMERCE <i>·</i> SYSTEMS <i>·</i></div></div>;
}

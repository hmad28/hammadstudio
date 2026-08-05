"use client";

import Link from "next/link";
import { useState } from "react";
import type { Locale } from "@/lib/types";
import { localHref } from "@/lib/locale";

export function SiteHeader({ locale, path }: { locale: Locale; path: string }) {
  const [open, setOpen] = useState(false);
  const labels = locale === "id"
    ? { work: "Work", services: "Services", pricing: "Pricing", studio: "Studio", insights: "Insights", start: "Mulai Project" }
    : { work: "Work", services: "Services", pricing: "Pricing", studio: "Studio", insights: "Insights", start: "Start a Project" };
  const otherLocale = locale === "id" ? "en" : "id";
  const otherPath = otherLocale === "en" ? `/en${path === "/" ? "" : path}` : path.replace(/^\/en/, "") || "/";
  return (
    <header className="site-header">
      <Link href={localHref(locale)} className="wordmark" aria-label="Hammad Studio home">HAMMAD STUDIO<sup>®</sup></Link>
      <button className="menu-button" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-controls="main-nav">{open ? "CLOSE" : "MENU"}</button>
      <nav id="main-nav" className={open ? "nav open" : "nav"} aria-label="Primary navigation">
        <Link href={localHref(locale, "/work")}>{labels.work}</Link>
        <Link href={localHref(locale, "/services")}>{labels.services}</Link>
        <Link href={localHref(locale, "/pricing")}>{labels.pricing}</Link>
        <Link href={localHref(locale, "/studio")}>{labels.studio}</Link>
        <Link href={localHref(locale, "/insights")}>{labels.insights}</Link>
        <Link className="locale-link" href={otherPath}>{otherLocale.toUpperCase()}</Link>
        <Link className="nav-cta" href={localHref(locale, "/start-project")}>{labels.start}<span>↗</span></Link>
      </nav>
    </header>
  );
}

export function SiteFooter({ locale }: { locale: Locale }) {
  const id = locale === "id";
  return (
    <footer className="footer">
      <div className="footer-lead">
        <p className="kicker">{id ? "PUNYA SESUATU YANG LAYAK DIBANGUN?" : "HAVE SOMETHING WORTH BUILDING?"}</p>
        <Link href={localHref(locale, "/start-project")} className="footer-title">{id ? "Mari bicarakan." : "Let’s talk."}<span>↗</span></Link>
      </div>
      <div className="footer-grid">
        <div><span className="meta">STUDIO</span><p>Web · Commerce · Systems<br />Software · Automation</p></div>
        <div><span className="meta">CONTACT</span><a href="mailto:hello@hammad.studio">hello@hammad.studio</a><p>Indonesia · Working worldwide</p></div>
        <div><span className="meta">EXPLORE</span><Link href={localHref(locale, "/pricing")}>Pricing</Link><Link href={localHref(locale, "/estimate")}>Project estimator</Link><Link href={localHref(locale, "/project-fit")}>Project fit</Link></div>
        <div><span className="meta">LEGAL</span><Link href={localHref(locale, "/legal/privacy")}>Privacy</Link><Link href={localHref(locale, "/legal/terms")}>Terms</Link></div>
      </div>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} HAMMAD STUDIO®</span><span>{id ? "DIBANGUN DENGAN NIAT. DIREKAYASA DENGAN BENAR." : "DESIGNED WITH INTENT. ENGINEERED PROPERLY."}</span></div>
    </footer>
  );
}

export function SiteShell({ locale, path, children }: { locale: Locale; path: string; children: React.ReactNode }) {
  return <><SiteHeader locale={locale} path={path} /><main id="main">{children}</main><SiteFooter locale={locale} /></>;
}

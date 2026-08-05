import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServicesPage, WorkPage } from "@/components/marketing-pages";
import { InsightsPage, PricingPage, StudioPage, ToolPage, UtilityPage, articleData } from "@/components/secondary-pages";
import { SiteShell } from "@/components/site-shell";
import { ReferenceServices } from "@/components/reference-pages";
import { DytamaHome } from "@/components/dytama-home";
import { seoPages, services, site } from "@/lib/site-data";
import type { Locale } from "@/lib/types";

type Props = { params: Promise<{ slug?: string[] }> };

function resolve(slug?: string[]) {
  const parts = slug ?? [];
  const locale: Locale = parts[0] === "en" ? "en" : "id";
  const routeParts = locale === "en" ? parts.slice(1) : parts;
  return { locale, routeParts, path: `/${routeParts.join("/")}`.replace(/\/$/, "") || "/" };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, routeParts, path } = resolve((await params).slug);
  const title = routeParts.length ? routeParts.at(-1)!.replaceAll("-", " ").replace(/\b\w/g, c => c.toUpperCase()) : "Digital Product & Software Studio Indonesia";
  const canonical = locale === "en" ? `/en${path === "/" ? "" : path}` : path;
  const alternate = locale === "en" ? path : `/en${path === "/" ? "" : path}`;
  return { title, description: site.meta[locale], alternates: { canonical, languages: { "id-ID": locale === "id" ? canonical : alternate, "en": locale === "en" ? canonical : alternate } }, robots: path.startsWith("/work/project-") ? { index: false, follow: true } : undefined };
}

export async function generateStaticParams() {
  const core = ["work","services","pricing","studio","insights","start-project","contact","care","estimate","project-fit","legal/privacy","legal/terms"];
  const serviceRoutes = services.map(s=>`services/${s.slug}`);
  const articleRoutes = articleData.map(a=>`insights/${a.slug}`);
  const all = [...core,...serviceRoutes,...articleRoutes,...seoPages];
  return [{ slug: [] },{slug:["en"]},...all.flatMap(route=>[{slug:route.split("/")},{slug:["en",...route.split("/")]}])];
}

export default async function MarketingPage({ params }: Props) {
  const { locale, routeParts, path } = resolve((await params).slug);
  let page: React.ReactNode;
  if(path==="/") page=<DytamaHome locale={locale}/>;
  else if(path==="/work") page=<WorkPage locale={locale}/>;
  else if(routeParts[0]==="work"&&routeParts[1]) page=<WorkPage locale={locale} project={routeParts[1]}/>;
  else if(path==="/services") page=<ReferenceServices locale={locale}/>;
  else if(routeParts[0]==="services"&&services.some(s=>s.slug===routeParts[1])) page=<ServicesPage locale={locale} slug={routeParts[1]}/>;
  else if(path==="/pricing") page=<PricingPage locale={locale}/>;
  else if(path==="/studio") page=<StudioPage locale={locale}/>;
  else if(path==="/insights") page=<InsightsPage locale={locale}/>;
  else if(routeParts[0]==="insights"&&articleData.some(a=>a.slug===routeParts[1])) page=<InsightsPage locale={locale} slug={routeParts[1]}/>;
  else if(path==="/estimate") page=<ToolPage locale={locale} type="estimate"/>;
  else if(path==="/project-fit") page=<ToolPage locale={locale} type="fit"/>;
  else if(path==="/start-project") page=<ToolPage locale={locale} type="brief"/>;
  else if(["/contact","/care","/legal/privacy","/legal/terms"].includes(path)||seoPages.includes(routeParts[0] as never)) page=<UtilityPage locale={locale} path={routeParts.join("/")}/>;
  else notFound();
  return <SiteShell locale={locale} path={locale==="en"?`/en${path==="/"?"":path}`:path}>{page}</SiteShell>;
}

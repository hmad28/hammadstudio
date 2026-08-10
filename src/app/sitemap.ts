import type { MetadataRoute } from "next";
import { workSlugs } from "@/lib/work-content";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://hammad.studio";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/services",
    "/services/website",
    "/services/e-commerce",
    "/services/web-application",
    "/services/business-system",
    "/services/automation-ai",
    "/services/custom-development",
    "/work",
    ...workSlugs.map((slug) => `/work/${slug}`),
    "/pricing",
    "/studio",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly",
    priority: route === "" ? 1.0 : 0.8,
  }));
}

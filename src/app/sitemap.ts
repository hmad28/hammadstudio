import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://hammad.studio";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/services", "/pricing", "/security", "/portofolio", "/about", "/insight", "/product"];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly",
    priority: route === "" ? 1.0 : 0.8,
  }));
}

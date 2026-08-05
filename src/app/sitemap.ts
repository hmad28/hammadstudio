import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://dytama.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/services", "/product", "/portofolio", "/about", "/insight"];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly",
    priority: route === "" ? 1.0 : 0.8,
  }));
}

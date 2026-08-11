import type { MetadataRoute } from "next";
import { workProjects, workSlugs } from "@/lib/work-content";
import { insightArticles } from "@/lib/insight-content";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://hammad.studio";

const staticRoutes = [
  { path: "", priority: 1, changeFrequency: "weekly" },
  { path: "/services", priority: 0.9, changeFrequency: "monthly" },
  { path: "/jasa-pembuatan-website", priority: 0.95, changeFrequency: "monthly" },
  { path: "/jasa-website-umkm", priority: 0.9, changeFrequency: "monthly" },
  { path: "/jasa-website-company-profile", priority: 0.9, changeFrequency: "monthly" },
  { path: "/redesign-website", priority: 0.85, changeFrequency: "monthly" },
  { path: "/industri/logistik", priority: 0.85, changeFrequency: "monthly" },
  { path: "/services/website", priority: 0.8, changeFrequency: "monthly" },
  { path: "/services/e-commerce", priority: 0.8, changeFrequency: "monthly" },
  { path: "/services/web-application", priority: 0.8, changeFrequency: "monthly" },
  { path: "/services/business-system", priority: 0.8, changeFrequency: "monthly" },
  { path: "/services/automation-ai", priority: 0.8, changeFrequency: "monthly" },
  { path: "/services/custom-development", priority: 0.8, changeFrequency: "monthly" },
  { path: "/work", priority: 0.9, changeFrequency: "weekly" },
  { path: "/harga-website", priority: 0.9, changeFrequency: "monthly" },
  { path: "/studio", priority: 0.7, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.7, changeFrequency: "yearly" },
  { path: "/insight", priority: 0.8, changeFrequency: "weekly" },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${siteUrl}${route.path}`,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const projects: MetadataRoute.Sitemap = workSlugs.map((slug) => {
    const image = workProjects[slug].image;

    return {
      url: `${siteUrl}/work/${slug}`,
      changeFrequency: "monthly",
      priority: 0.8,
      images: image ? [`${siteUrl}${image}`] : undefined,
    };
  });

  const insights: MetadataRoute.Sitemap = insightArticles.map((article) => ({
    url: `${siteUrl}/insight/${article.slug}`,
    lastModified: article.updatedAt,
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  return [...pages, ...projects, ...insights];
}

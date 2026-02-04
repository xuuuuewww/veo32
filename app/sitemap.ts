import type { MetadataRoute } from "next";
import { BASE_URL, LOCALES } from "@/lib/site";
import { getAllPostsMeta } from "@/lib/blog";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();
  const homeAndLocales: MetadataRoute.Sitemap = LOCALES.map(({ path }) => ({
    url: path ? `${BASE_URL}/${path}` : BASE_URL,
    lastModified: now,
    changeFrequency: "daily" as const,
    priority: path ? 0.9 : 1,
  }));

  const blogList: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/blog`,
      lastModified: now,
      changeFrequency: "daily" as const,
      priority: 0.8,
    },
  ];

  const posts = await getAllPostsMeta();
  const blogPosts: MetadataRoute.Sitemap = posts.map(({ slug, meta }) => ({
    url: `${BASE_URL}/blog/${slug}`,
    lastModified: new Date(meta.date),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [...homeAndLocales, ...blogList, ...blogPosts];
}

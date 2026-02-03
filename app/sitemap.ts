import type { MetadataRoute } from "next";
import { BASE_URL, LOCALES } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return LOCALES.map(({ path }) => ({
    url: path ? `${BASE_URL}/${path}` : BASE_URL,
    lastModified: now,
    changeFrequency: "daily" as const,
    priority: path ? 0.9 : 1,
  }));
}

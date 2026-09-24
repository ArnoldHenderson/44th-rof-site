import type { MetadataRoute } from "next";

/**
 * Sitemap configuration for the website.
 * @module Sitemap
 */

const siteUrl = "https://44th-rof-site.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/about`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}

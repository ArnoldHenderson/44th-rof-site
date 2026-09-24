import { MetadataRoute } from "next";

/**
 * Robots configuration for search engines and blocking malicious/unwanted bots
 * @module Robots
 */

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: [
          "AhrefsBot",
          "SemrushBot",
          "MJ12bot",
          "DotBot",
          "PetalBot",
          "Bytespider",
          "BLEXBot",
          "DataForSeoBot",
          "GPTBot",
          "CCBot",
        ],
        disallow: "/",
      },
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin/", "/private/", "/api/", "/components/", "/data/"],
      },
    ],
    sitemap: "https://44th-rof-site.vercel.app/sitemap.xml",
  };
}

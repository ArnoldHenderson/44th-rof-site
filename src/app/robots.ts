import { MetadataRoute } from "next";
import sitemap from "./sitemap";

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

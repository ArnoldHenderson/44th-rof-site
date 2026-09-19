import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin/", "/private/", "/api/", "/components/", "/data/"],
    },
    sitemap: "https://44th-rof-site.vercel.app/sitemap.xml",
  };
}

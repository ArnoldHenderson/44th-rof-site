import type { MetadataRoute } from "next";

/**
 * Web App Manifest configuration for the website.
 * @module Manifest
 */

export default function manifest(): MetadataRoute.Manifest {
  return {
    id: "/",
    name: "44th Regiment of Foot - Official Site",
    short_name: "44th RoF",
    description:
      "Official website for the 44th Regiment of Foot for the game Holdfast: Nations at War.",
    start_url: "/",
    scope: "/",
    lang: "en-GB",
    dir: "ltr",
    display: "standalone",
    orientation: "landscape",
    theme_color: "#121212",
    background_color: "#121212",
    icons: [
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}

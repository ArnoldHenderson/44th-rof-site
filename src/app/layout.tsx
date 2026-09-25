import { Analytics } from "@vercel/analytics/next";
import { cookies } from "next/headers";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Roboto, Ubuntu } from "next/font/google";
import "./globals.css";

import { SiteHeader, SiteFooter } from "@/app/components/site-header-footer";
/**
 * Root layout for the website.
 * @module RootLayout
 */

type RootLayoutProps = {
  children: ReactNode;
};

const ubuntu = Ubuntu({
  variable: "--font-ubuntu",
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "44th Regiment of Foot - Official Site",
  description:
    "Official website for the 44th Regiment of Foot for the game Holdfast: Nations at War.",
  metadataBase: new URL("https://44th-rof-site.vercel.app"),
  keywords: [
    "44th Regiment of Foot",
    "Official Site",
    "Holdfast: Nations at War",
    "holdfast nations at war",
    "holdfast",
    "holdfast regiment",
    "holdfast game",
    "holdfast console",
    "holdfast eu regiment",
    "holdfast na regiment",
    "holdfast oce regiment",
    "holdfast british regiment",
    "holdfast uk regiment",
    "holdfast casual regiment",
    "anvil game studios",
  ],
  authors: [{ name: "44th Regiment of Foot Regiment Command" }],
  icons: {
    icon: [
      {
        url: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  openGraph: {
    title: "44th Regiment of Foot - Official Site",
    description:
      "Official website for the 44th Regiment of Foot for the game Holdfast: Nations at War. 44th on top!",
    url: "https://44th-rof-site.vercel.app",
    siteName: "44th Regiment of Foot - Official Site",
    images: [
      {
        url: "https://44th-rof-site.vercel.app/media/images/branding/og-image.png",
        width: 1100,
        height: 440,
        alt: "44th Regiment of Foot",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
};

export default async function RootLayout({ children }: RootLayoutProps) {
  const theme = (await cookies()).get("theme")?.value;
  const isDark = theme === "dark";

  return (
    <html
      lang="en-GB"
      className={`${ubuntu.variable} ${roboto.variable} ${
        isDark ? "dark" : ""
      } h-full antialiased`}
    >
      <head>
        <noscript>You need to enable JavaScript to run this website.</noscript>
      </head>
      <body className="min-h-full flex flex-col">
        <SiteHeader />
        {children}
        <SiteFooter />
        <Analytics />
      </body>
    </html>
  );
}

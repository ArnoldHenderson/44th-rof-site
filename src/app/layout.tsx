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
    "Official website for the 44th Regiment of Foot for the game Holdfast: Nations at War. 44th on top!",
  metadataBase: new URL("https://44thholdfast.com"),
  keywords: [
    "44th regiment of foot",
    "44th holdfast",
    "44th regiment",
    "official site",
    "Holdfast: Nations at War",
    "holdfast nations at war",
    "holdfast",
    "holdfast naw",
    "holdfast regiment",
    "holdfast game",
    "holdfast console",
    "holdfast eu regiment",
    "holdfast na regiment",
    "holdfast oce regiment",
    "holdfast british regiment",
    "holdfast uk regiment",
    "holdfast casual regiment",
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
    url: "https://44thholdfast.com",
    siteName: "44th Regiment of Foot - Official Site",
    images: [
      {
        url: "https://44thholdfast.com/media/images/branding/og-image.png",
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
      suppressHydrationWarning
      className={`${ubuntu.variable} ${roboto.variable} ${
        isDark ? "dark" : ""
      } h-full antialiased`}
    >
      <head>
        {/* Runs before paint to apply system dark preference when no explicit theme cookie is set. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var m=document.cookie.match(/(?:^|; )theme=([^;]*)/);var t=m?decodeURIComponent(m[1]):null;var d=t?t==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches;document.documentElement.classList.toggle("dark",d);}catch(e){}})();`,
          }}
        />
        <noscript>You need to enable JavaScript to run this website.</noscript>
      </head>
      <body className="min-h-full flex flex-col">
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}

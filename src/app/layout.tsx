import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Sans, Roboto, Ubuntu } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const ubuntu = Ubuntu({
  variable: "--font-ubuntu",
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "44th Regiment of Foot - Official Site",
  description:
    "Official website for the 44th Regiment of Foot for the game Holdfast: Nations at War.",
  keywords: [
    "44th Regiment of Foot",
    "Holdfast: Nations at War",
    "Official Site",
    "holdfast regiment",
  ],
  authors: [{ name: "44th Regiment of Foot Regiment Command" }],
  openGraph: {
    title: "44th Regiment of Foot - Official Site",
    description:
      "Official website for the 44th Regiment of Foot for the game Holdfast: Nations at War. 44th on top!",
    url: "https://www.44thregimentoffoot.com",
    siteName: "44th Regiment of Foot - Official Site",
    images: [
      {
        url: "https://www.44thregimentoffoot.com/images/branding/og-image.png",
        width: 1100,
        height: 440,
        alt: "44th Regiment of Foot",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-GB"
      className={`${geistSans.variable} ${geistMono.variable} ${ubuntu.variable} ${roboto.variable} ${notoSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

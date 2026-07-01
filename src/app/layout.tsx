import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import JsonLd from "@/components/JsonLd";

const openSans = Open_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.amtrak.com"),
  title: {
    default: "Train Tickets, Schedules & Routes | Amtrak",
    template: "%s | Amtrak",
  },
  description:
    "Book your Amtrak train and bus tickets today by choosing from over 30 U.S. train routes and 500 destinations in North America.",
  openGraph: {
    title: "Train Tickets, Schedules & Routes | Amtrak",
    description:
      "Book your Amtrak train and bus tickets today by choosing from over 30 U.S. train routes and 500 destinations in North America.",
    type: "website",
    locale: "en_US",
    siteName: "Amtrak",
  },
  twitter: {
    card: "summary_large_image",
    title: "Train Tickets, Schedules & Routes | Amtrak",
    description:
      "Book your Amtrak train and bus tickets today by choosing from over 30 U.S. train routes and 500 destinations in North America.",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-US">
      <body className={`${openSans.variable} font-sans antialiased`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-amtrak-blue focus:text-white"
        >
          skip to Content
        </a>
        <a
          href="#primary-nav"
          className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-amtrak-blue focus:text-white"
        >
          skip to Navigation
        </a>
        <JsonLd />
        <Script
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1847522558443253"
          strategy="afterInteractive"
          crossOrigin="anonymous"
        />
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

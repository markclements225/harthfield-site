import type { Metadata } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Harthfield Holdings | Brentwood Real Estate & Custom Home Builder",
  description: "Brentwood, Tennessee real estate investments, custom home building, and property management. Building legacies and creating places to call home in the Nashville area.",
  openGraph: {
    title: "Harthfield Holdings | Brentwood Real Estate & Custom Home Builder",
    description: "Brentwood, Tennessee real estate investments, custom home building, and property management. Building legacies and creating places to call home in the Nashville area.",
    url: "https://harthfield.com",
    siteName: "Harthfield Holdings",
    images: [
      {
        url: "https://harthfield.com/images/logos/hartfieldLogoMain.png",
        width: 1200,
        height: 630,
        alt: "Harthfield Holdings Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Harthfield Holdings | Brentwood Real Estate & Custom Home Builder",
    description: "Brentwood, Tennessee real estate investments, custom home building, and property management.",
    images: ["https://harthfield.com/images/logos/hartfieldLogoMain.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "name": "Harthfield Holdings",
    "description": "Real estate investments, custom home building, and property management in Brentwood, Tennessee",
    "url": "https://harthfield.com",
    "telephone": "+1-615-899-5100",
    "email": "info@harthfield.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Brentwood",
      "addressRegion": "TN",
      "addressCountry": "US"
    },
    "areaServed": {
      "@type": "City",
      "name": "Brentwood"
    },
    "sameAs": [
      "https://www.facebook.com/profile.php?id=61589155873931",
      "https://www.instagram.com/harthfieldholdings/"
    ]
  };

  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${playfair.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

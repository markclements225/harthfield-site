import ContactPageClient from './ContactPageClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact Us | Harthfield Holdings - Brentwood Real Estate",
  description: "Contact Harthfield Holdings for real estate investments, custom home building, and property management in Brentwood, Tennessee. Let's start a conversation.",
  openGraph: {
    title: "Contact Us | Harthfield Holdings - Brentwood Real Estate",
    description: "Contact Harthfield Holdings for real estate investments, custom home building, and property management in Brentwood, Tennessee. Let's start a conversation.",
    url: "https://harthfield.com/contact",
    siteName: "Harthfield Holdings",
    images: [
      {
        url: "https://harthfield.com/images/logos/hartfieldLogoMain.png",
        width: 1200,
        height: 630,
        alt: "Contact Harthfield Holdings",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function ContactPage() {
  return <ContactPageClient />;
}

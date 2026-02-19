import { Metadata } from "next";
import { BRAND } from "./constants";

export const defaultMetadata: Metadata = {
  metadataBase: new URL("https://stuccord.com"),
  title: {
    default: `${BRAND.name} - ${BRAND.tagline}`,
    template: `%s | ${BRAND.name}`,
  },
  description: BRAND.coreMessage,
  keywords: [
    "digital agency",
    "web development",
    "graphic design",
    "UI/UX design",
    "SaaS development",
    "SEO services",
    "social media marketing",
    "Ghana",
    "Koforidua",
  ],
  authors: [{ name: BRAND.name }],
  creator: BRAND.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: BRAND.name,
    title: `${BRAND.name} - ${BRAND.tagline}`,
    description: BRAND.coreMessage,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: BRAND.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${BRAND.name} - ${BRAND.tagline}`,
    description: BRAND.coreMessage,
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export function generatePageMetadata(
  title: string,
  description: string,
  path: string = ""
): Metadata {
  return {
    title,
    description,
    openGraph: {
      ...defaultMetadata.openGraph,
      title: `${title} | ${BRAND.name}`,
      description,
      url: path || "/",
    },
    twitter: {
      ...defaultMetadata.twitter,
      title: `${title} | ${BRAND.name}`,
      description,
    },
  };
}

export function generateStructuredData(type: "Organization" | "WebSite" | "LocalBusiness") {
  const baseData = {
    "@context": "https://schema.org",
    "@type": type,
    name: BRAND.name,
    description: BRAND.coreMessage,
    url: "https://stuccord.com",
    logo: "https://stuccord.com/logo.png",
  };

  if (type === "LocalBusiness") {
    return {
      ...baseData,
      address: {
        "@type": "PostalAddress",
        streetAddress: BRAND.location,
        addressLocality: "Koforidua",
        addressCountry: "GH",
      },
      telephone: BRAND.phone,
      email: BRAND.email,
    };
  }

  return baseData;
}

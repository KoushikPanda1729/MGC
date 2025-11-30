import type { Metadata } from "next";

export const siteConfig = {
  name: "Manobikash Guide Centre",
  description:
    "A trusted learning centre in Medinipur offering school tuition, spoken English training, skill development, career guidance, and personal growth programs since 2015.",
  url: "https://manobikashguidecentre.com",
  ogImage: "https://manobikashguidecentre.com/images/og-image.jpg",
  links: {
    twitter: "#", // Update when real handle is available
    github: "#", // Update if required
  },
  keywords: [
    "manobikash guide centre",
    "medinipur tuition",
    "school coaching",
    "spoken english classes",
    "skill development",
    "career guidance",
    "english speaking course",
    "student improvement",
    "education centre medinipur",
    "WBBSE",
    "WBCHSE",
    "West Bengal",
    "Medinipur tuition",
  ],
};

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [
    {
      name: "Manobikash Guide Centre",
      url: siteConfig.url,
    },
  ],
  creator: "Manobikash Guide Centre",
  publisher: "Manobikash Guide Centre",

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@manobikash", // Replace with the real Twitter handle later
  },

  icons: {
    icon: "/images/center_logo.jpeg",
    shortcut: "/images/center_logo.jpeg",
    apple: "/images/center_logo.jpeg",
  },

  manifest: "/site.webmanifest",

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

  verification: {
    google: "your-google-verification-code", // Add real Google Search Console code
  },
};

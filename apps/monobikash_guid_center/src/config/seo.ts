import type { Metadata } from "next";

export const siteConfig = {
  name: "Manobikash Guide Centre",
  description:
    "Leading educational institution in Medinipur since 2014. Expert coaching for WBBSE, WBCHSE, spoken English, skill development, and career guidance. Best tuition centre in Medinipur, West Bengal for academic excellence and personality development.",
  url: "https://mgc-three.vercel.app",
  ogImage: "/images/center_logo.jpeg",
  links: {
    twitter: "#", // Update when real handle is available
    github: "#", // Update if required
  },
  keywords: [
    // Primary Keywords
    "manobikash guide centre",
    "medinipur coaching centre",
    "best tuition in medinipur",
    "educational institution medinipur",
    "coaching institute medinipur",

    // Location-based Keywords
    "medinipur tuition centre",
    "paschim medinipur coaching",
    "west medinipur education",
    "medinipur town coaching classes",
    "coaching centre near me medinipur",

    // Course-specific Keywords
    "school tuition medinipur",
    "spoken english classes medinipur",
    "english speaking course medinipur",
    "WBBSE coaching medinipur",
    "WBCHSE coaching medinipur",
    "class 10 tuition medinipur",
    "class 12 tuition medinipur",
    "madhyamik coaching medinipur",
    "higher secondary coaching medinipur",

    // Skill Development Keywords
    "skill development centre medinipur",
    "personality development medinipur",
    "career guidance medinipur",
    "career counseling medinipur",
    "student mentoring medinipur",

    // General Education Keywords
    "best coaching centre west bengal",
    "top tuition centre medinipur",
    "education centre medinipur",
    "learning centre medinipur",
    "study centre medinipur",
    "private tuition medinipur",
    "home tuition medinipur",
    "group tuition medinipur",

    // Subject-specific Keywords
    "english tuition medinipur",
    "mathematics coaching medinipur",
    "science tuition medinipur",
    "bengali tuition medinipur",

    // Board Keywords
    "WBBSE",
    "WBCHSE",
    "West Bengal Board",
    "West Bengal",
    "Paschim Medinipur",

    // Long-tail Keywords
    "best institution for spoken english in medinipur",
    "top coaching centre in medinipur",
    "affordable tuition centre medinipur",
    "experienced teachers medinipur",
    "quality education medinipur",
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

// Structured Data for better SEO
export const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "EducationalOrganization",
      "@id": `${siteConfig.url}/#organization`,
      name: siteConfig.name,
      url: siteConfig.url,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}${siteConfig.ogImage}`,
      },
      description: siteConfig.description,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Medinipur",
        addressRegion: "West Bengal",
        addressCountry: "IN",
      },
      areaServed: {
        "@type": "City",
        name: "Medinipur",
      },
      foundingDate: "2014",
      knowsAbout: [
        "School Education",
        "Spoken English",
        "WBBSE Coaching",
        "WBCHSE Coaching",
        "Career Guidance",
        "Skill Development",
        "Personality Development",
      ],
    },
    {
      "@type": "LocalBusiness",
      "@id": `${siteConfig.url}/#localbusiness`,
      name: siteConfig.name,
      image: `${siteConfig.url}${siteConfig.ogImage}`,
      description: siteConfig.description,
      url: siteConfig.url,
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Medinipur",
        addressRegion: "West Bengal",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "22.4241", // Update with actual coordinates
        longitude: "87.3212", // Update with actual coordinates
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          opens: "09:00",
          closes: "20:00",
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      url: siteConfig.url,
      name: siteConfig.name,
      description: siteConfig.description,
      publisher: {
        "@id": `${siteConfig.url}/#organization`,
      },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${siteConfig.url}/?s={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "ItemList",
      "@id": `${siteConfig.url}/#courses`,
      name: "Courses Offered",
      itemListElement: [
        {
          "@type": "Course",
          name: "WBBSE Coaching (Class 5-10)",
          description: "Comprehensive coaching for West Bengal Board of Secondary Education",
          provider: {
            "@id": `${siteConfig.url}/#organization`,
          },
        },
        {
          "@type": "Course",
          name: "WBCHSE Coaching (Class 11-12)",
          description: "Expert coaching for West Bengal Council of Higher Secondary Education",
          provider: {
            "@id": `${siteConfig.url}/#organization`,
          },
        },
        {
          "@type": "Course",
          name: "Spoken English Training",
          description: "Professional spoken English and communication skills development",
          provider: {
            "@id": `${siteConfig.url}/#organization`,
          },
        },
        {
          "@type": "Course",
          name: "Career Guidance & Counseling",
          description: "Expert career guidance and counseling for students",
          provider: {
            "@id": `${siteConfig.url}/#organization`,
          },
        },
        {
          "@type": "Course",
          name: "Skill Development Programs",
          description: "Comprehensive skill development and personality enhancement programs",
          provider: {
            "@id": `${siteConfig.url}/#organization`,
          },
        },
      ],
    },
  ],
};

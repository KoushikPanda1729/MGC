import { siteConfig } from "@/config/seo";

export function OrganizationStructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    logo: `${siteConfig.url}/images/center_logo.jpeg`,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91 9735836582",
      contactType: "Customer Service",
      email: "dash.jyotirmoy1987@gmail.com",
      areaServed: "IN",
      availableLanguage: ["English", "Bengali"],
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Rangamati (Near - High school), Mitra- Compound (Near -Hotel Deblok), Abash (Near Shitola Temple)",
      addressLocality: "Medinipur",
      addressRegion: "West Bengal",
      addressCountry: "IN",
    },
    sameAs: [
      siteConfig.links.twitter,
      siteConfig.links.github,
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

export function WebSiteStructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteConfig.url}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

export function EducationalOrganizationStructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Rangamati (Near - High school), Mitra- Compound (Near -Hotel Deblok), Abash (Near Shitola Temple)",
      addressLocality: "Medinipur",
      addressRegion: "West Bengal",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "22.4257", // Approximate latitude for Medinipur
      longitude: "87.3199", // Approximate longitude for Medinipur
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Educational Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Course",
            name: "School Tuition (Class 5-12)",
            description: "Comprehensive tuition for WBBSE and WBCHSE boards.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Course",
            name: "Spoken English",
            description: "Fluency and communication skills training.",
          },
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

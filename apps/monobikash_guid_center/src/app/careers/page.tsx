import type { Metadata } from "next";
import { siteConfig } from "@/config/seo";
import CareersSection from "./careers-section";

export const metadata: Metadata = {
  title: "Careers",
  description: `Join the ${siteConfig.name} team and help us empower students with quality education. Explore career opportunities and grow with us.`,
  openGraph: {
    title: `Careers | ${siteConfig.name}`,
    description: `Join the ${siteConfig.name} team and help us empower students with quality education.`,
    type: "website",
    url: `${siteConfig.url}/careers`,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
};

export default function CareersPage() {
  return <CareersSection />;
}

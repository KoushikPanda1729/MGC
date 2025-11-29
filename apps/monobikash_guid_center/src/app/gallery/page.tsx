import type { Metadata } from "next";
import GallerySection from "@/components/gallery";
import { siteConfig } from "@/config/seo";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Explore moments from our offline classes, events, and student activities at Manobikash Guide Centre.",
  openGraph: {
    title: `Gallery - ${siteConfig.name}`,
    description:
      "See real classroom moments, student interactions, and learning experiences from Manobikash Guide Centre.",
    type: "website",
    url: `${siteConfig.url}/gallery`,
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

export default function GalleryPage() {
  return (
    <div>
      <GallerySection />
    </div>
  );
}

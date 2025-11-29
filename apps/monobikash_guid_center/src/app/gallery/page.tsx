import type { Metadata } from "next";
import GallerySection from "@/components/gallery";
import { siteConfig } from "@/config/seo";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Explore our vibrant community and educational journey through these moments at Bunni Education Service Pvt Ltd",
  openGraph: {
    title: `Gallery - ${siteConfig.name}`,
    description: "Explore our vibrant community and educational journey through these moments",
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

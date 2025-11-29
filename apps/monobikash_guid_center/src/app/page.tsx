import type { Metadata } from "next";
import AboutUsSection from "@/components/about-us";
import FaqSection from "@/components/faq";
import HeroSection from "@/components/hero";
import OurBrandsSection from "@/components/our-brands";
import TestimonalSection from "@/components/testimonal";
import { siteConfig } from "@/config/seo";
import TeamSection from "../components/team";

export const metadata: Metadata = {
  title: "Home",
  description: siteConfig.description,
  openGraph: {
    title: `${siteConfig.name} - Improve Your English Fluency`,
    description: siteConfig.description,
    type: "website",
    url: siteConfig.url,
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

export default function Home() {
  return (
    <div>
      <HeroSection />
      {/* <OurBrandsSection /> */}
      <TestimonalSection />
      <AboutUsSection />
      <TeamSection />
      <FaqSection />
    </div>
  );
}

import type { Metadata } from "next";
import AboutUsSection from "@/components/about-us";
import FaqSection from "@/components/faq";
import HeroSection from "@/components/hero";
import CourseSections from "@/components/courses";
import TestimonalSection from "@/components/testimonal";
import { siteConfig } from "@/config/seo";
import TeamSection from "../components/team";
import FeatureSections from "../components/features";
import OurBrandsSection from "../components/our-brands";

export const metadata: Metadata = {
  title: "Home",
  description: siteConfig.description,
  openGraph: {
    title: `${siteConfig.name}`,
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
      <FeatureSections />
      <OurBrandsSection />
      <CourseSections />
      <TestimonalSection />
      <AboutUsSection />
      <TeamSection />
      <FaqSection />
    </div>
  );
}

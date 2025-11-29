"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function OurBrandsSection() {
  const [expandedBrands, setExpandedBrands] = useState<{
    [key: number]: boolean;
  }>({});

  const toggleDescription = (index: number) => {
    setExpandedBrands((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const brands = [
    {
      name: "Young Guru Academy",
      tagline: "Transform Your English Skills",
      description:
        "Young Guru Academy is an online and offline Institute for Learning English Spoken, Personality Development, Interview Preparation, Career Counselling, and other Career and Educational skills in west Vinod nagar, Delhi. Young Guru Academy has been Teaching since 2015 & Trained more than 50K Students Across the Country. We have developed an environment where you must Learn English & Improve Yourself. We provide spoken classes from Zero to intermediate or advanced level to nurture the students from the level they want to pursue. So Join Now Our Course to fulfill your Dreams.",
      features: [
        "English Spoken Classes (Zero to Advanced)",
        "Personality Development",
        "Interview Preparation",
        "Career Counselling",
      ],
      location: "West Vinod Nagar, Mandawali, Delhi",
      established: "2015",
      students: "50K+",
      rating: "4.7",
      link: "https://youngguruacademy.com",
      playStoreLink:
        "https://play.google.com/store/apps/details?id=co.classplus.yga",
      appStoreLink: "",
      icon: (
        <div className="w-16 h-16 relative">
          <Image
            src="https://yt3.googleusercontent.com/XgCAEu0Ar62WrwLCvpd9QDF26kyru58_PwmkL7ANdquIqnKRbdj8KQL3GOY97ZvrIQGcbw19=s160-c-k-c0x00ffffff-no-rj"
            alt="Young Guru Academy Logo"
            fill
            className="object-contain rounded-lg"
          />
        </div>
      ),
      color: "from-blue-500 to-purple-600",
      bgGradient: "from-blue-50 to-purple-50",
      darkBgGradient: "dark:from-blue-950/20 dark:to-purple-950/20",
    },
    {
      name: "Talk2Partners",
      tagline: "Connect, Learn & Grow Together",
      description:
        "Talk2Partners™ is an online English learning app for anyone who struggles to speak with confidence. It connects learners with same-level partners for natural practice and also offers recorded lessons, vocabulary, quizzes, and expert chat support. Suitable for students, professionals, housewives, and leaders — learn anytime, at your own pace.",
      features: [
        "Learning Management System",
        "Live Interactive Classes",
        "Progress Tracking & Analytics",
        "Community Learning",
      ],
      location: "Pan India",
      established: "2025",
      students: "1K+",
      rating: "4.9",
      link: "https://talk2partners.com",
      playStoreLink:
        "https://play.google.com/store/apps/details?id=com.app.talk2partners",
      appStoreLink: "https://apps.apple.com/us/app/talk2partners/id6754528740",
      icon: (
        <div className="w-16 h-16 relative">
          <Image
            src="https://play-lh.googleusercontent.com/S1zRD6OEBhAvOd08F6uFH3y9dWW1BtixZqiOYpT426mSkfTJJr5FWHgQ8Y7rbn3JtN4j2zWhDOnxetTn0lJd=s96-rw"
            alt="Talk2Partners Logo"
            fill
            className="object-contain rounded-lg"
          />
        </div>
      ),
      color: "from-purple-500 to-pink-600",
      bgGradient: "from-purple-50 to-pink-50",
      darkBgGradient: "dark:from-purple-950/20 dark:to-pink-950/20",
    },
  ];

  return (
    <section
      id="our-brands"
      className="relative py-12 md:py-20 lg:py-28 px-4 md:px-6 lg:px-12 xl:px-20 bg-gradient-to-b from-background via-muted/20 to-background"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-6">
            Our <span className="text-primary">Brands</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            Bunni Education Service operates multiple brands, each focused on
            delivering excellence in education and skill development across
            India.
          </p>
        </div>

        {/* Brands Grid */}
        <div className="flex overflow-x-auto gap-4 md:gap-6 lg:gap-8 px-2 md:px-0 lg:grid lg:grid-cols-2 snap-x snap-mandatory scrollbar-hide">
          {brands.map((brand, index) => (
            <div
              key={index}
              className={`group relative rounded-3xl border bg-gradient-to-br ${brand.bgGradient} ${brand.darkBgGradient} p-4 sm:p-6 md:p-8 lg:p-10 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col h-full w-[85vw] flex-shrink-0 snap-center lg:w-full`}
            >
              {/* Icon */}
              <div className="inline-flex mb-3 md:mb-6">{brand.icon}</div>

              {/* Brand Name & Tagline */}
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 md:mb-2 group-hover:text-primary transition-colors">
                {brand.name}
              </h3>
              <p
                className={`text-xs sm:text-sm font-semibold bg-gradient-to-r ${brand.color} bg-clip-text text-transparent mb-3 md:mb-4`}
              >
                {brand.tagline}
              </p>

              {/* Description */}
              <div className="mb-4 md:mb-6">
                <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
                  {expandedBrands[index]
                    ? brand.description
                    : `${brand.description.slice(0, 150)}...`}
                </p>
                <button
                  onClick={() => toggleDescription(index)}
                  className="text-primary hover:underline text-xs sm:text-sm font-medium mt-1 md:mt-2"
                >
                  {expandedBrands[index] ? "Show less" : "Learn more"}
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-2 md:gap-4 mb-4 md:mb-6 pb-4 md:pb-6 border-b border-gray-200 dark:border-gray-700">
                <div className="text-center">
                  <p className="text-lg sm:text-xl md:text-2xl font-bold text-foreground">
                    {brand.established}
                  </p>
                  <p className="text-[10px] sm:text-xs text-muted-foreground">
                    Established
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-lg sm:text-xl md:text-2xl font-bold text-foreground">
                    {brand.students}
                  </p>
                  <p className="text-[10px] sm:text-xs text-muted-foreground">
                    Students
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-base sm:text-lg md:text-xl font-bold text-foreground">
                    ⭐ {brand.rating}
                  </p>
                  <p className="text-[10px] sm:text-xs text-muted-foreground">
                    Rating
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-1.5 md:gap-2 mb-4 md:mb-6 text-xs sm:text-sm text-muted-foreground">
                <svg
                  className="w-3 h-3 sm:w-4 sm:h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>{brand.location}</span>
              </div>

              {/* CTA Button and App Store Icons Row */}
              <div className="mt-auto flex flex-wrap items-center gap-2 md:gap-3">
                {/* Explore Button */}
                <Link
                  href={brand.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-1.5 md:gap-2 px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 rounded-full bg-gradient-to-r ${brand.color} text-white text-sm sm:text-base font-semibold hover:opacity-90 transition-opacity shadow-lg`}
                >
                  Explore
                  <svg
                    className="w-3 h-3 sm:w-4 sm:h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>

                {/* App Store Icons */}
                <Link
                  href={brand.playStoreLink || "#"}
                  target={brand.playStoreLink ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 px-3 py-2 bg-black text-white rounded-lg shadow-md ${
                    brand.playStoreLink
                      ? "hover:bg-gray-800 transition-colors"
                      : "opacity-50 cursor-not-allowed"
                  }`}
                  onClick={
                    brand.playStoreLink ? undefined : (e) => e.preventDefault()
                  }
                >
                  <svg
                    className="w-4 h-4 md:w-5 md:h-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                  </svg>
                  <div className="flex flex-col items-start">
                    <span className="text-[8px] leading-none">GET IT ON</span>
                    <span className="text-[10px] md:text-xs font-semibold leading-none">
                      Google Play
                    </span>
                  </div>
                </Link>

                <Link
                  href={brand.appStoreLink || "#"}
                  target={brand.appStoreLink ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 px-3 py-2 bg-black text-white rounded-lg shadow-md ${
                    brand.appStoreLink
                      ? "hover:bg-gray-800 transition-colors"
                      : "opacity-50 cursor-not-allowed"
                  }`}
                  onClick={
                    brand.appStoreLink ? undefined : (e) => e.preventDefault()
                  }
                >
                  <svg
                    className="w-4 h-4 md:w-5 md:h-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                  </svg>
                  <div className="flex flex-col items-start">
                    <span className="text-[8px] leading-none">
                      Download on the
                    </span>
                    <span className="text-[10px] md:text-xs font-semibold leading-none">
                      App Store
                    </span>
                  </div>
                </Link>
              </div>

              {/* Decorative Element */}
              <div
                className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${brand.color} opacity-5 rounded-full blur-3xl -z-10`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

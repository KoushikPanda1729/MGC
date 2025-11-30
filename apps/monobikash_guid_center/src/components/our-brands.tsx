"use client";

import { motion } from "motion/react";
import React, { useState } from "react";
import { cn } from "../lib/utils";
import { brico } from "./fonts";

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
      name: "Manobikash Guide Centre",
      tagline: "Excellence in School Education",
      description:
        "A premier institute offering comprehensive tuition for students from Class 5 to 12 (WBBSE & WBCHSE). We focus on building a strong foundation, concept clarity, and academic excellence through experienced faculty and personalized attention.",
      features: [
        "Class 5-12 Tuition (All Subjects)",
        "Experienced Faculty",
        "Regular Assessments",
        "Doubt Clearing Sessions",
      ],
      location: "Medinipur, West Bengal",
      established: "2015",
      students: "5000+",
      rating: "4.8",
      link: "/",
      playStoreLink: "",
      appStoreLink: "",
      icon: (
        <div className="w-16 h-16 relative flex items-center justify-center bg-blue-100 rounded-lg text-3xl">
          📚
        </div>
      ),
      color: "from-blue-500 to-cyan-600",
      bgGradient: "from-blue-50 to-cyan-50",
      darkBgGradient: "dark:from-blue-950/20 dark:to-cyan-950/20",
    },
    {
      name: "Dr. B. C Roy Institute",
      tagline: "Gateway to Medical & Engineering",
      description:
        "Specialized coaching for Joint Entrance Examinations (JEE) and NEET. Our rigorous curriculum, expert guidance, and mock test series ensure students are well-prepared for competitive entrance exams.",
      features: [
        "JEE (Main & Advanced) Coaching",
        "NEET Preparation",
        "Mock Test Series",
        "Study Material",
      ],
      location: "Medinipur, West Bengal",
      established: "2018",
      students: "1000+",
      rating: "4.9",
      link: "#",
      playStoreLink: "",
      appStoreLink: "",
      icon: (
        <div className="w-16 h-16 relative flex items-center justify-center bg-green-100 rounded-lg text-3xl">
          🩺
        </div>
      ),
      color: "from-green-500 to-emerald-600",
      bgGradient: "from-green-50 to-emerald-50",
      darkBgGradient: "dark:from-green-950/20 dark:to-emerald-950/20",
    },
    {
      name: "Excel Academy",
      tagline: "Unlock Your Potential",
      description:
        "Dedicated to competitive exam preparation and general academic excellence. We provide specialized coaching for various government job exams and scholarship tests, helping students achieve their career goals.",
      features: [
        "Competitive Exam Coaching",
        "Scholarship Test Prep",
        "General Knowledge",
        "Aptitude Training",
      ],
      location: "Medinipur, West Bengal",
      established: "2019",
      students: "2000+",
      rating: "4.7",
      link: "#",
      playStoreLink: "",
      appStoreLink: "",
      icon: (
        <div className="w-16 h-16 relative flex items-center justify-center bg-purple-100 rounded-lg text-3xl">
          🚀
        </div>
      ),
      color: "from-purple-500 to-violet-600",
      bgGradient: "from-purple-50 to-violet-50",
      darkBgGradient: "dark:from-purple-950/20 dark:to-violet-950/20",
    },
    {
      name: "J.D Academy",
      tagline: "Sparkle ABACUS & Vedic Math",
      description:
        "Enhancing mental math skills and cognitive development through Abacus and Vedic Mathematics. Our programs are designed to improve concentration, speed, and accuracy in calculations for young learners.",
      features: [
        "Sparkle ABACUS",
        "Vedic Mathematics",
        "Brain Development",
        "Speed Calculation",
      ],
      location: "Medinipur, West Bengal",
      established: "2020",
      students: "1500+",
      rating: "4.8",
      link: "#",
      playStoreLink: "",
      appStoreLink: "",
      icon: (
        <div className="w-16 h-16 relative flex items-center justify-center bg-orange-100 rounded-lg text-3xl">
          🧮
        </div>
      ),
      color: "from-orange-500 to-amber-600",
      bgGradient: "from-orange-50 to-amber-50",
      darkBgGradient: "dark:from-orange-950/20 dark:to-amber-950/20",
    },
    {
      name: "Career Counselling",
      tagline: "Guiding Your Future",
      description:
        "Professional career guidance to help students make informed decisions about their future. We offer psychometric testing, one-on-one counseling, and career path planning to align with your strengths and interests.",
      features: [
        "One-on-One Counseling",
        "Psychometric Tests",
        "Stream Selection",
        "College Application Support",
      ],
      location: "Medinipur, West Bengal",
      established: "2015",
      students: "10000+",
      rating: "4.9",
      link: "#",
      playStoreLink: "",
      appStoreLink: "",
      icon: (
        <div className="w-16 h-16 relative flex items-center justify-center bg-pink-100 rounded-lg text-3xl">
          🎯
        </div>
      ),
      color: "from-pink-500 to-rose-600",
      bgGradient: "from-pink-50 to-rose-50",
      darkBgGradient: "dark:from-pink-950/20 dark:to-rose-950/20",
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

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={cn(
              "mb-6 bg-gradient-to-b from-foreground via-foreground/90 to-foreground/60 bg-clip-text text-4xl font-bold text-transparent sm:text-6xl",
              brico.className
            )}
          >
              We Also{" "}
            <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
             Provide
            </span>
          </motion.h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            Empowering students through diverse educational verticals, from school
            tuition and competitive exam prep to skill development and career
            guidance.
          </p>
        </div>

        {/* Brands Grid */}
        <div className="flex overflow-x-auto gap-4 md:gap-6 lg:gap-8 px-2 md:px-0 pb-8 snap-x snap-mandatory scrollbar-hide [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {brands.map((brand, index) => (
            <div
              key={index}
              className={`group relative rounded-3xl border bg-gradient-to-br ${brand.bgGradient} ${brand.darkBgGradient} p-6 md:p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col h-full w-[80vw] sm:w-[400px] md:w-[450px] flex-shrink-0 snap-center`}
            >
              {/* Icon */}
              <div className="inline-flex mb-4 md:mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {brand.icon}
              </div>

              {/* Brand Name & Tagline */}
              <h3 className="text-xl sm:text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                {brand.name}
              </h3>
              <p
                className={`text-sm font-semibold bg-gradient-to-r ${brand.color} bg-clip-text text-transparent mb-4`}
              >
                {brand.tagline}
              </p>

              {/* Description */}
              <div className="mb-6 flex-grow">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {expandedBrands[index]
                    ? brand.description
                    : `${brand.description.slice(0, 120)}...`}
                </p>
                <button
                  onClick={() => toggleDescription(index)}
                  className="text-primary hover:underline text-xs font-medium mt-2"
                >
                  {expandedBrands[index] ? "Show less" : "Read more"}
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-2 py-4 border-t border-gray-200 dark:border-gray-700/50">
                <div className="text-center">
                  <p className="text-lg font-bold text-foreground">
                    {brand.established}
                  </p>
                  <p className="text-[10px] uppercase tracking-wider text-muted-foreground">
                    Est.
                  </p>
                </div>
                <div className="text-center border-l border-r border-gray-200 dark:border-gray-700/50">
                  <p className="text-lg font-bold text-foreground">
                    {brand.students}
                  </p>
                  <p className="text-[10px] uppercase tracking-wider text-muted-foreground">
                    Students
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-lg font-bold text-foreground">
                    {brand.rating}
                  </p>
                  <p className="text-[10px] uppercase tracking-wider text-muted-foreground">
                    Rating
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-2 mt-4 text-xs text-muted-foreground bg-background/50 p-2 rounded-lg backdrop-blur-sm">
                <svg
                  className="w-4 h-4 text-primary"
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
                <span className="truncate">{brand.location}</span>
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

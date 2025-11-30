"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Button } from "@t2p-admin/ui/components/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@t2p-admin/ui/components/card";
import { Badge } from "@t2p-admin/ui/components/badge";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

type CourseType = "middle" | "secondary" | "higher";

export default function CourseSection() {
  const [selectedHeading] = useState("Our Academic Programs");
  const [activeTab, setActiveTab] = useState<CourseType>("middle");

  const coursesData = {
    middle: [
      {
        title: "Class 6 (WBBSE)",
        description: "Strong foundation in WB Board curriculum for Class 6.",
        image: "/images/monobikash_group_image.jpg",
        duration: "Annual Program",
        price: "₹800/month",
        originalPrice: "₹1000",
        link: "https://docs.google.com/forms/d/e/1FAIpQLSeN_lMFa5Jnfk18NrTJHYlPLSvK28_EwmHDIeZ6NmVOW5w1Mw/viewform?usp=dialog",
        includes: ["Bengali, English, Math, Science, Social Science", "Weekly Tests"],
        learningMaterial: ["WBBSE Textbooks", "Chapter-wise Practice Sheets"],
        outcomes: ["Strong Foundation", "School Topper"],
      },
      {
        title: "Class 7 (WBBSE)",
        description: "Comprehensive WB Board preparation for Class 7.",
        image: "/images/monobikash_group_image.jpg",
        duration: "Annual Program",
        price: "₹900/month",
        originalPrice: "₹1100",
        link: "https://docs.google.com/forms/d/e/1FAIpQLSeN_lMFa5Jnfk18NrTJHYlPLSvK28_EwmHDIeZ6NmVOW5w1Mw/viewform?usp=dialog",
        includes: ["All WBBSE Subjects", "Regular Assessments"],
        learningMaterial: ["WBBSE Syllabus Based", "Model Questions"],
        outcomes: ["Concept Mastery", "Academic Excellence"],
      },
      {
        title: "Class 8 (WBBSE)",
        description: "Prepare for Madhyamik with strong Class 8 foundation.",
        image: "/images/monobikash_group_image.jpg",
        duration: "Annual Program",
        price: "₹1000/month",
        originalPrice: "₹1200",
        link: "https://docs.google.com/forms/d/e/1FAIpQLSeN_lMFa5Jnfk18NrTJHYlPLSvK28_EwmHDIeZ6NmVOW5w1Mw/viewform?usp=dialog",
        includes: ["Complete WBBSE Syllabus", "Unit Tests"],
        learningMaterial: ["Board Prescribed Books", "Advanced Practice"],
        outcomes: ["Madhyamik Ready", "Top Grades"],
      },
    ],
    secondary: [
      {
        title: "Class 9 (WBBSE)",
        description: "Build strong base for Madhyamik Pariksha (Class 10).",
        image: "/images/monobikash_group_image.jpg",
        duration: "Annual Program",
        price: "₹1100/month",
        originalPrice: "₹1300",
        link: "https://docs.google.com/forms/d/e/1FAIpQLSeN_lMFa5Jnfk18NrTJHYlPLSvK28_EwmHDIeZ6NmVOW5w1Mw/viewform?usp=dialog",
        includes: ["All Madhyamik Subjects", "Monthly Mock Tests"],
        learningMaterial: ["WBBSE Books", "Previous Year Questions"],
        outcomes: ["Madhyamik Foundation", "Strong Concepts"],
      },
      {
        title: "Class 10 - Madhyamik (WBBSE)",
        description: "Complete preparation for WB Madhyamik Pariksha.",
        image: "/images/monobikash_group_image.jpg",
        duration: "Annual Program",
        price: "₹1200/month",
        originalPrice: "₹1500",
        link: "https://docs.google.com/forms/d/e/1FAIpQLSeN_lMFa5Jnfk18NrTJHYlPLSvK28_EwmHDIeZ6NmVOW5w1Mw/viewform?usp=dialog",
        includes: ["Full Madhyamik Coverage", "Board Pattern Tests", "Doubt Classes"],
        learningMaterial: ["WBBSE Syllabus", "Last 10 Years Papers", "Sample Papers"],
        outcomes: ["Madhyamik Success", "90%+ Target"],
      },
    ],
    higher: [
      {
        title: "Class 11 - Science (WBCHSE)",
        description: "Complete WB HS Science stream preparation.",
        image: "/images/monobikash_group_image.jpg",
        duration: "Annual Program",
        price: "₹1500/month",
        originalPrice: "₹1800",
        link: "https://docs.google.com/forms/d/e/1FAIpQLSeN_lMFa5Jnfk18NrTJHYlPLSvK28_EwmHDIeZ6NmVOW5w1Mw/viewform?usp=dialog",
        includes: ["Physics, Chemistry, Math/Biology", "Bengali/English", "Weekly Tests"],
        learningMaterial: ["WBCHSE Textbooks", "Reference Materials"],
        outcomes: ["HS Foundation", "WBJEE Preparation"],
      },
      {
        title: "Class 11 - Commerce (WBCHSE)",
        description: "Expert coaching for WB HS Commerce stream.",
        image: "/images/monobikash_group_image.jpg",
        duration: "Annual Program",
        price: "₹1300/month",
        originalPrice: "₹1600",
        link: "https://docs.google.com/forms/d/e/1FAIpQLSeN_lMFa5Jnfk18NrTJHYlPLSvK28_EwmHDIeZ6NmVOW5w1Mw/viewform?usp=dialog",
        includes: ["Accountancy, Business Studies, Economics", "Regular Practice"],
        learningMaterial: ["WBCHSE Syllabus Based", "Case Studies"],
        outcomes: ["Commerce Excellence", "HS Ready"],
      },
      {
        title: "Class 12 - Higher Secondary (WBCHSE)",
        description: "Complete preparation for WB Higher Secondary Exam.",
        image: "/images/monobikash_group_image.jpg",
        duration: "Annual Program",
        price: "₹1600/month",
        originalPrice: "₹2000",
        link: "https://docs.google.com/forms/d/e/1FAIpQLSeN_lMFa5Jnfk18NrTJHYlPLSvK28_EwmHDIeZ6NmVOW5w1Mw/viewform?usp=dialog",
        includes: ["All HS Subjects", "Board Pattern Tests", "Special Doubt Sessions"],
        learningMaterial: ["WBCHSE Study Material", "Previous Year Papers", "Model Papers"],
        outcomes: ["HS Exam Success", "95%+ Target"],
      },
    ],
  };

  const courses = coursesData[activeTab];

  return (
    <section
      id="courses"
      className="relative flex w-full items-center justify-center overflow-hidden py-16"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="relative mx-auto max-w-4xl text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className={cn(
              "mb-4 cursor-crosshair bg-gradient-to-b from-foreground via-foreground/80 to-foreground/40 bg-clip-text text-4xl font-bold text-transparent sm:text-6xl"
            )}
          >
            {selectedHeading.split(" ").map((word, index) => (
              <span key={index}>
                {["Academic", "Programs"].includes(word) ? (
                  <span className="bg-primary from-foreground via-blue-300 to-primary bg-clip-text text-transparent dark:bg-gradient-to-b">
                    {word}
                  </span>
                ) : (
                  word
                )}{" "}
              </span>
            ))}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mb-8 mt-2 text-muted-foreground sm:text-lg"
          >
            Comprehensive coaching for classes 6 to 12 with expert faculty.
            <br className="hidden sm:block" />
            Build a strong foundation and excel in your academic journey.
          </motion.p>
        </div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex items-center gap-2 p-1 bg-muted rounded-lg">
            <button
              onClick={() => setActiveTab("middle")}
              className={cn(
                "px-6 py-2 rounded-md text-sm font-medium transition-all",
                activeTab === "middle"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              Class 6-8
            </button>
            <button
              onClick={() => setActiveTab("secondary")}
              className={cn(
                "px-6 py-2 rounded-md text-sm font-medium transition-all",
                activeTab === "secondary"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              Class 9-10
            </button>
            <button
              onClick={() => setActiveTab("higher")}
              className={cn(
                "px-6 py-2 rounded-md text-sm font-medium transition-all",
                activeTab === "higher"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              Class 11-12
            </button>
          </div>
        </motion.div>

        {/* Courses Grid */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto flex md:grid overflow-x-auto md:overflow-x-visible md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-0 snap-x snap-mandatory md:snap-none no-scrollbar"
        >
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex justify-center flex-shrink-0 w-[70vw] md:w-auto snap-center"
            >
              <Card className="overflow-hidden rounded-xl shadow-md border pt-0 w-full flex flex-col">
                {/* Gradient Header */}
                <motion.div
                  className="relative w-full h-48 flex-shrink-0 bg-muted flex items-center justify-center rounded-t-xl overflow-hidden"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20" /> {/* Overlay for better badge visibility if needed */}
                  <Badge className="absolute top-2 left-2 bg-yellow-400 text-black rounded-full px-2 py-0.5 text-xs font-medium z-10">
                    {course.duration}
                  </Badge>
                </motion.div>

                {/* Text Content */}
                <CardHeader className="pb-2 pt-3 px-4 flex-shrink-0">
                  <CardTitle className="text-blue-600 text-xl leading-tight">
                    {course.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground text-sm leading-tight">
                    {course.description}
                  </CardDescription>
                </CardHeader>

                {/* Batch Details */}
                <div className="px-4 space-y-2 pb-3 flex-1">
                  {course.includes && (
                    <div>
                      <h4 className="font-semibold text-sm mb-1">
                        Batch Includes
                      </h4>
                      <ul className="space-y-0">
                        {course.includes.map((item, i) => (
                          <li
                            key={i}
                            className="text-sm text-muted-foreground flex items-start leading-tight"
                          >
                            <span className="mr-1 text-primary">✓</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {course.learningMaterial && (
                    <div>
                      <h4 className="font-semibold text-sm mb-1">
                        Learning Material
                      </h4>
                      <ul className="space-y-0">
                        {course.learningMaterial.map((item, i) => (
                          <li
                            key={i}
                            className="text-sm text-muted-foreground flex items-start leading-tight"
                          >
                            <span className="mr-1">📚</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {course.outcomes && (
                    <div>
                      <h4 className="font-semibold text-sm mb-1">
                        After Completion
                      </h4>
                      <ul className="space-y-0">
                        {course.outcomes.map((item, i) => (
                          <li
                            key={i}
                            className="text-sm text-muted-foreground flex items-start leading-tight"
                          >
                            <span className="mr-1">🎯</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <CardFooter className="flex flex-col items-start gap-2 pt-3 px-3 sm:px-6 pb-3 sm:pb-4 flex-shrink-0 mt-auto border border-white">
                  <div className="flex items-center justify-between w-full gap-1.5 sm:gap-2">
                    <div className="flex items-center gap-1 sm:gap-1.5 flex-shrink min-w-0">
                      <span className="text-sm sm:text-lg font-bold text-gray-900 whitespace-nowrap">
                        {course.price}
                      </span>
                      {course.originalPrice && (
                        <span className="text-xs text-gray-400 line-through whitespace-nowrap">
                          {course.originalPrice}
                        </span>
                      )}
                    </div>
                    <Button
                      asChild
                      className="px-2 sm:px-4 py-1 h-7 sm:h-8 text-[10px] sm:text-sm flex-shrink-0 whitespace-nowrap"
                    >
                      <Link href={course.link} target="_blank" rel="noopener noreferrer">Register Now</Link>
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

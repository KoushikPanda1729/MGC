"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Button } from "@t2p-admin/ui/components/button";
import {
  Card,
  CardDescription,
} from "@t2p-admin/ui/components/card";
import { Badge } from "@t2p-admin/ui/components/badge";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { brico } from "./fonts";

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
      className="relative flex w-full items-center justify-center overflow-hidden py-20 md:py-28"
    >
      {/* Enhanced Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--primary)/0.15),transparent_50%)]" />
        <div className="absolute right-1/4 top-1/4 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute left-1/3 bottom-1/4 h-80 w-80 rounded-full bg-purple-500/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        {/* Header with Enhanced Typography */}
        <div className="relative mx-auto max-w-4xl text-center mb-16">
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
            {selectedHeading.split(" ").map((word, index) => (
              <span key={index}>
                {["Academic", "Programs"].includes(word) ? (
                  <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
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
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground text-lg leading-relaxed"
          >
            Comprehensive coaching for classes 6 to 12 with expert faculty.
            <br className="hidden sm:block" />
            Build a strong foundation and excel in your academic journey.
          </motion.p>
        </div>

        {/* Enhanced Tabs with Pill Design */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center mb-14"
        >
          <div className="inline-flex items-center gap-2 p-1.5 bg-gradient-to-r from-muted/80 to-muted/60 backdrop-blur-sm rounded-full border border-border/50 shadow-lg">
            <button
              onClick={() => setActiveTab("middle")}
              className={cn(
                "px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300",
                activeTab === "middle"
                  ? "bg-gradient-to-r from-primary to-purple-600 text-white shadow-lg scale-105"
                  : "text-muted-foreground hover:text-foreground hover:bg-background/50"
              )}
            >
              Class 6-8
            </button>
            <button
              onClick={() => setActiveTab("secondary")}
              className={cn(
                "px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300",
                activeTab === "secondary"
                  ? "bg-gradient-to-r from-primary to-purple-600 text-white shadow-lg scale-105"
                  : "text-muted-foreground hover:text-foreground hover:bg-background/50"
              )}
            >
              Class 9-10
            </button>
            <button
              onClick={() => setActiveTab("higher")}
              className={cn(
                "px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300",
                activeTab === "higher"
                  ? "bg-gradient-to-r from-primary to-purple-600 text-white shadow-lg scale-105"
                  : "text-muted-foreground hover:text-foreground hover:bg-background/50"
              )}
            >
              Class 11-12
            </button>
          </div>
        </motion.div>

        {/* Enhanced Courses Grid */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-0"
        >
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group"
            >
              <Card className="overflow-hidden rounded-3xl shadow-lg border border-border/50 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm hover:shadow-2xl hover:border-primary/30 transition-all duration-300 h-full flex flex-col">
                {/* Enhanced Image Header */}
                <div className="relative w-full h-56 flex-shrink-0 overflow-hidden">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                  {/* Floating Badge */}
                  <Badge className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-black rounded-full px-3 py-1 text-xs font-bold shadow-lg z-10">
                    {course.duration}
                  </Badge>

                  {/* Course Title Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
                    <h3 className="text-white text-xl font-bold drop-shadow-lg">
                      {course.title}
                    </h3>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-5 flex-1 flex flex-col">
                  <CardDescription className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {course.description}
                  </CardDescription>

                  {/* Compact Feature Lists */}
                  <div className="space-y-3 mb-4 flex-1">
                    {course.includes && (
                      <div>
                        <h4 className="font-bold text-xs text-primary mb-1.5">
                          INCLUDES
                        </h4>
                        <ul className="space-y-1">
                          {course.includes.slice(0, 2).map((item, i) => (
                            <li
                              key={i}
                              className="text-xs text-muted-foreground flex items-start"
                            >
                              <span className="mr-1.5 text-primary">✓</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* Enhanced Footer with Pricing */}
                  <div className="pt-4 border-t border-border/50 mt-auto">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                          {course.price}
                        </span>
                        {course.originalPrice && (
                          <span className="text-sm text-muted-foreground line-through">
                            {course.originalPrice}
                          </span>
                        )}
                      </div>
                      {course.originalPrice && (
                        <Badge variant="secondary" className="bg-green-500/10 text-green-600 border-green-500/20">
                          Save {Math.round(((parseInt(course.originalPrice.replace(/[^0-9]/g, '')) - parseInt(course.price.replace(/[^0-9]/g, ''))) / parseInt(course.originalPrice.replace(/[^0-9]/g, ''))) * 100)}%
                        </Badge>
                      )}
                    </div>
                    <Button
                      asChild
                      className="w-full bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <Link href={course.link} target="_blank" rel="noopener noreferrer">
                        Register Now
                      </Link>
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

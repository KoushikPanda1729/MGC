"use client";

import { ContainerTextFlip } from "@t2p-admin/ui/components/container-text-flip";
import { motion } from "motion/react";
import Image from "next/image";
import React from "react";
import { Button } from "@t2p-admin/ui/components/button";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-20 py-20 mt-20 lg:mt-[50px] overflow-hidden"
    >
      {/* Enhanced Background with Gradients and Floating Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-purple-500/10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--primary)/0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />

        {/* Floating Orbs */}
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl"
          animate={{
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
          animate={{
            y: [0, -40, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto w-full">
        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left Side - Content */}
          <motion.div
            className="lg:col-span-6 space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Company Badge with Animation */}
            <motion.div
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-primary/30 bg-gradient-to-r from-primary/10 to-purple-500/10 backdrop-blur-sm shadow-lg"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-sm font-semibold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                Leading Educational Guidance Centre
              </span>
            </motion.div>

            {/* Main Headline with Enhanced Typography */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-[1.05] tracking-tight">
                <span className="bg-gradient-to-br from-foreground via-foreground/90 to-foreground/70 bg-clip-text text-transparent">
                  Empowering Students to{" "}
                </span>
                <br />
                <ContainerTextFlip
                  words={["Learn", "Improve", "Achieve", "Excel", "Grow"]}
                  interval={3000}
                  animationDuration={700}
                  className="inline-block text-5xl sm:text-6xl md:text-7xl"
                  textClassName="text-primary font-extrabold"
                />
              </h1>
            </motion.div>

            {/* Company Description with Better Readability */}
            <motion.p
              className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <strong className="text-foreground font-bold">
                Manobikash GUIDE Centre
              </strong>{" "}
              established in{" "}
              <strong className="text-primary font-bold">2018</strong>, is a
              trusted academic and skill-development institute in Medinipur. We
              provide comprehensive{" "}
              <strong className="text-foreground font-semibold">
                school tuition, competitive exam preparation, spoken English,
                and career guidance programs
              </strong>{" "}
              designed to support students in achieving academic excellence.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-4 pt-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Link href="#courses">Explore Courses</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 hover:bg-primary/5 transition-all duration-300"
              >
                <Link href="#contact">Contact Us</Link>
              </Button>
            </motion.div>

            {/* Key Features - Enhanced Cards with Glassmorphism */}
            <motion.div
              className="md:grid md:grid-cols-1 md:grid-cols-3 gap-4 pt-6 hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              {[
                {
                  icon: (
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                  ),
                  title: "Class 6–8",
                  description: "Foundation Building",
                },
                {
                  icon: (
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  ),
                  title: "Class 9–10",
                  description: "Board Exam Prep",
                },
                {
                  icon: (
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  ),
                  title: "Class 11–12",
                  description: "Competitive Edge",
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="group p-4 rounded-2xl border border-primary/20 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm hover:shadow-xl hover:border-primary/40 transition-all duration-300 hover:-translate-y-1"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex flex-col items-center text-center space-y-2">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center mb-1 group-hover:scale-110 transition-transform duration-300">
                      <div className="text-primary">{feature.icon}</div>
                    </div>
                    <h3 className="text-base font-bold text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side - Enhanced Image with Decorative Elements */}
          <motion.div
            className="lg:col-span-6 relative hidden md:block"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Decorative Background Elements */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-3xl blur-2xl opacity-50" />

              {/* Main Image with Enhanced Styling */}
              <motion.div
                className="relative z-10"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <Image
                  src="/images/monobikash_group_image.jpg"
                  alt="Manobikash Guide Centre"
                  width={800}
                  height={600}
                  className="w-full h-auto rounded-3xl shadow-2xl object-cover border-4 border-white/10"
                  priority
                />

                {/* Floating Stats Badge */}
                <motion.div
                  className="absolute -bottom-6 -left-6 bg-gradient-to-br from-primary to-purple-600 text-white p-6 rounded-2xl shadow-2xl backdrop-blur-sm"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1, duration: 0.6 }}
                >
                  <div className="text-center">
                    <div className="text-3xl font-bold">2018</div>
                    <div className="text-sm opacity-90">Est. Since</div>
                  </div>
                </motion.div>

                {/* Floating Achievement Badge */}
                <motion.div
                  className="absolute -top-6 -right-6 bg-white dark:bg-gray-900 p-4 rounded-2xl shadow-2xl border border-primary/20"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2, duration: 0.6 }}
                >
                  <div className="flex items-center gap-2">
                    <div className="text-2xl">🏆</div>
                    <div>
                      <div className="text-sm font-bold text-foreground">
                        1000+
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Students
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

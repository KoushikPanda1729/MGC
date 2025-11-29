"use client";

import { ContainerTextFlip } from "@t2p-admin/ui/components/container-text-flip";
import Image from "next/image";
import React from "react";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-20 py-20 mt-20 lg:mt-[50px] overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/5" />
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
      </div>

      <div className="max-w-7xl mx-auto w-full">
        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left Side - Content */}
          <div className="lg:col-span-6 space-y-10">
            {/* Company Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5">
              <span className="text-sm font-medium text-primary">
                Leading Educational Guidance Centre
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight">
                Empowering Students to{" "}
                <ContainerTextFlip
                  words={["Learn", "Improve", "Achieve", "Excel", "Grow"]}
                  interval={3000}
                  animationDuration={700}
                  className="inline-block text-4xl sm:text-5xl md:text-6xl"
                  textClassName="text-primary"
                />
              </h1>
            </div>

            {/* Company Description */}
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              <strong className="text-foreground font-semibold">
                Manobikash GUIDE Centre
              </strong>{" "}
              established in{" "}
              <strong className="text-foreground font-semibold">2018</strong>,
              is a trusted academic and skill-development institute in
              Medinipur. We provide{" "}
              <strong className="text-foreground font-semibold">
                school tuition, competitive exam preparation, spoken English,
                personality development, soft-skills training, and career
                guidance programs
              </strong>{" "}
              designed to support{" "}
              <strong className="text-foreground font-semibold">
                students, job seekers, and young learners
              </strong>
              . Over the years, the centre has helped thousands of students
              strengthen their academic foundation and build confidence for a
              brighter future.
            </p>

            {/* Key Features - Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-4">
              <div className="p-5 rounded-xl border bg-card hover:shadow-md transition-shadow">
                <div className="flex flex-col items-center text-center space-y-2">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                    <svg
                      className="w-6 h-6 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    Online
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Digital classes & learning support
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-xl border bg-card hover:shadow-md transition-shadow">
                <div className="flex flex-col items-center text-center space-y-2">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                    <svg
                      className="w-6 h-6 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    Offline
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Classroom coaching & guidance
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-xl border bg-card hover:shadow-md transition-shadow">
                <div className="flex flex-col items-center text-center space-y-2">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                    <svg
                      className="w-6 h-6 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0-00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    Professional
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Skill-building & personality development
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="lg:col-span-6 relative">
            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                src="/images/monobikash_group_image.jpg"
                alt="Manobikash Guide Centre"
                width={800}
                height={600}
                className="w-full h-auto rounded-2xl shadow-2xl object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

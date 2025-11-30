"use client";

import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { brico } from "./fonts";
import Image from "next/image";
import { Badge } from "@t2p-admin/ui/components/badge";

export default function TeamSection() {
  const teamMembers = [
    {
      name: "Jyotirmoy Dash",
      role: "Founder & CEO",
      description:
        "Founder of Manobikash Guide Centre, committed to providing quality academic support, spoken English training, and personal guidance to students across Medinipur. With a passion for teaching and community development, he has played a key role in shaping the institute since its early years.",
      image: "/images/founder_image.jpg",
      linkedin: "#",
      email: "jyotirmoy@manobikash.in",
    },
    {
      name: "Koushik Panda",
      role: "Software Engineer",
      description:
        "Technology expert driving innovation in digital learning platforms and creating seamless educational experiences.",
      image: "/images/software_engineer.jpg",
      linkedin: "#",
      email: "koushik@gmail.com",
    },
    {
      name: "Academic Team",
      role: "Lead Educators",
      description:
        "A highly dedicated group of teachers who specialise in school tuition, spoken English, skill development, and exam preparation—ensuring quality education for every student.",
      image: "/images/center_logo.jpeg",
      linkedin: "#",
      email: "academic@manobikash.in",
    },
  ];

  return (
    <section className="relative py-20 md:py-28 px-6 md:px-12 lg:px-20 overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--primary)/0.15),transparent_50%)]" />
        <div className="absolute left-1/4 top-1/3 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute right-1/3 bottom-1/4 h-80 w-80 rounded-full bg-purple-500/10 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Enhanced Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className={cn(
              "mb-6 bg-gradient-to-b from-foreground via-foreground/90 to-foreground/60 bg-clip-text text-4xl font-bold text-transparent sm:text-6xl",
              brico.className
            )}
          >
            The Minds Behind{" "}
            <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              Your Success
            </span>
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            A passionate team dedicated to transforming education and empowering
            students to achieve their dreams.
          </motion.p>
        </motion.div>

        {/* Enhanced Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group"
            >
              <div className="relative h-full bg-gradient-to-br from-card/90 to-card/60 backdrop-blur-sm rounded-3xl border border-border/50 p-8 hover:shadow-2xl hover:border-primary/30 transition-all duration-300 flex flex-col">
                {/* Enhanced Profile Image */}
                <div className="relative mb-6">
                  <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-primary/20 shadow-lg">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  {/* Animated Decorative Ring */}
                  <div className="absolute inset-0 w-32 h-32 mx-auto rounded-full border-2 border-primary/30 scale-110 group-hover:scale-125 group-hover:border-primary/50 transition-all duration-300" />

                  {/* Floating Glow Effect */}
                  <div className="absolute inset-0 w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-primary/20 to-purple-500/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Member Info */}
                <div className="text-center mb-6 flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    {member.name}
                  </h3>
                  <Badge className="mb-3 bg-gradient-to-r from-primary/20 to-purple-500/20 text-primary border-primary/30 font-semibold">
                    {member.role}
                  </Badge>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {member.description}
                  </p>
                </div>

                {/* Enhanced Contact Links */}
                <div className="flex items-center justify-center gap-3 pt-6 border-t border-border/50">
                  {/* LinkedIn */}
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-full bg-gradient-to-br from-primary/10 to-purple-500/10 hover:from-primary hover:to-purple-600 text-primary hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-md hover:shadow-lg"
                    aria-label={`${member.name} LinkedIn`}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>

                  {/* Email */}
                  <a
                    href={`mailto:${member.email}`}
                    className="w-11 h-11 rounded-full bg-gradient-to-br from-primary/10 to-purple-500/10 hover:from-primary hover:to-purple-600 text-primary hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-md hover:shadow-lg"
                    aria-label={`Email ${member.name}`}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </a>
                </div>

                {/* Enhanced Decorative Background Element */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-purple-500/10 rounded-full blur-3xl -z-10 group-hover:scale-150 transition-transform duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

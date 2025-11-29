"use client";

import React from "react";

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
    <section className="relative py-20 md:py-28 px-6 md:px-12 lg:px-20 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            The Minds Behind <span className="text-primary">Your Success</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            A passionate team dedicated to transforming education and empowering
            students to achieve their dreams.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-2xl border border-gray-200 dark:border-gray-700 p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Profile Image */}
              <div className="relative mb-6">
                <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-primary/20 shadow-lg">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Decorative Ring */}
                <div className="absolute inset-0 w-32 h-32 mx-auto rounded-full border-2 border-primary/30 scale-110 group-hover:scale-125 transition-transform duration-300" />
              </div>

              {/* Member Info */}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {member.name}
                </h3>
                <p className="text-sm font-semibold text-primary mb-3">
                  {member.role}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {member.description}
                </p>
              </div>

              {/* Contact Links */}
              <div className="flex items-center justify-center gap-4 pt-6 border-t border-gray-200 dark:border-gray-700">
                {/* LinkedIn */}
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary text-primary hover:text-white flex items-center justify-center transition-all duration-300"
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
                  className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary text-primary hover:text-white flex items-center justify-center transition-all duration-300"
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

              {/* Decorative Background Element */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-2xl -z-10 group-hover:scale-150 transition-transform duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { cn } from "@/lib/utils";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@t2p-admin/ui/components/avatar";
import { motion } from "motion/react";
import { brico } from "./fonts";
import Image from "next/image";

const testimonials = [
  {
    speaker: "Sritama Bhunia",
    avatar: "",
    image:
      "https://scontent.fccu9-4.fna.fbcdn.net/v/t39.30808-6/488683303_1112383454239453_155557094319131258_n.jpg?stp=c0.99.600.600a_dst-jpg_s552x414_tt6&_nc_cat=101&ccb=1-7&_nc_sid=50ad20&_nc_ohc=tnQnq7Dv65AQ7kNvwFE1UQs&_nc_oc=Adk-5NRLMnWrou-fWZO9TX3AqG4P6R1hTeq-rsQpqSROySQaWiPGoYT7hn4du-oeFhzwIEZW3Nh9hghWV1KuGpAF&_nc_zt=23&_nc_ht=scontent.fccu9-4.fna&_nc_gid=hiMPGlk04-xCD0Y_CPP2Tw&oh=00_AfhiGWEUlDMhbJA6zQksXOOhgDHgG-9JzrfxQkZ12AMcng&oe=69307EB7",
    location: "Midnapore, India",
    badge: "5th Position - Class V",
    title: "How Manobikash Guide Centre Helped Sritama Improve",
    category: "Student Testimonial",
    testimonial:
      "Manobikash Guide Centre helped me build a strong foundation in my studies. The teachers explain concepts very clearly, and I gained a lot of confidence after joining...",
    rating: 5,
    timeAgo: "1 month ago",
  },
  {
    speaker: "Srijita Patra",
    avatar: "",
    image:
      "https://scontent.fccu9-3.fna.fbcdn.net/v/t39.30808-6/488864987_1112380237573108_8703327777285704006_n.jpg?stp=c0.99.600.600a_dst-jpg_s552x414_tt6&_nc_cat=109&ccb=1-7&_nc_sid=50ad20&_nc_ohc=d2StxOcvPqwQ7kNvwE9DWSY&_nc_oc=Adm--aBgksp6fIQCeRR25kzPe2lPAyFylftOkLuefj35xx73Ew-MCBO8ar1DtsvEdobjK0VvRBE46CUwRy4dw1fj&_nc_zt=23&_nc_ht=scontent.fccu9-3.fna&_nc_gid=qjzp5VWpEnJCz8BjVnqU2w&oh=00_Afg2F-1nbSFOMQjPjqw-SvMZrUJd73RJjc3puNMnN0nDaw&oe=69307D53",
    location: "Kharagpur, India",
    badge: "3rd Position - Class X",
    title: "Srijita Shares Her Experience at Manobikash Guide Centre",
    category: "Student Journey",
    testimonial:
      "Thanks to the guidance and support at Manobikash Guide Centre, I improved my academic performance significantly. The environment is supportive and motivating...",
    rating: 5,
    timeAgo: "2 months ago",
  },
  {
    speaker: "Soumya Bera",
    avatar: "",
    image:
      "https://scontent.fccu9-5.fna.fbcdn.net/v/t39.30808-6/488778978_1112380174239781_7808486960970416461_n.jpg?stp=c0.99.600.600a_dst-jpg_s552x414_tt6&_nc_cat=107&ccb=1-7&_nc_sid=50ad20&_nc_ohc=V7GecTg8qMwQ7kNvwHhRQC0&_nc_oc=AdnCfYmXAkrDvZiQbHUIn89kmXu6TAsX7LkumnPWEu3IELiZGsmQ1faF2j7yDCkhBYa6s02oplMsm0hyVTYeN1ZN&_nc_zt=23&_nc_ht=scontent.fccu9-5.fna&_nc_gid=hiMPGlk04-xCD0Y_CPP2Tw&oh=00_AfiHsXj-l9-SkV1Tef1gG8ACunHL1QoB1lcXHM6MhQ_vIQ&oe=693081C1",
    location: "Medinipur, India",
    badge: "3rd Position - Class VIII",
    title: "Soumya Talks About His Growth at Manobikash Guide Centre",
    category: "Success Story",
    testimonial:
      "The personalized attention at Manobikash Guide Centre made a huge difference for me. I improved in subjects I once found difficult. Highly recommended...",
    rating: 5,
    timeAgo: "3 months ago",
  },
];

export default function TestimonialSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    containScroll: "trimSnaps",
    dragFree: true,
  });

  useEffect(() => {
    if (!emblaApi) return;
    const autoplay = setInterval(() => emblaApi.scrollNext(), 6000);
    return () => clearInterval(autoplay);
  }, [emblaApi]);

  return (
    <section
      id="testimonial"
      className="relative overflow-hidden py-16 md:py-24"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.2),transparent_60%)]" />
        <div className="absolute left-1/4 top-1/4 h-32 w-32 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute inset-0 bg-[length:20px_20px] bg-grid-foreground/[0.02]" />
      </div>

      {/* Heading */}
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative mb-12 text-center md:mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className={cn(
              "mb-4 cursor-crosshair bg-gradient-to-b from-foreground via-foreground/80 to-foreground/40 bg-clip-text text-4xl font-bold text-transparent sm:text-7xl",
              brico.className
            )}
          >
            See what{" "}
            <span className="bg-primary from-foreground via-rose-300 to-primary bg-clip-text text-transparent dark:bg-gradient-to-b">
              learners are saying
            </span>
          </motion.h2>

          <motion.p
            className="mx-auto max-w-2xl text-base text-muted-foreground md:text-lg"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Real feedback from students who have improved their skills and
            confidence through Manobikash Guide Centre’s dedicated guidance and
            supportive learning environment.
          </motion.p>
        </motion.div>

        {/* Carousel */}
        <div className="overflow-hidden py-4" ref={emblaRef}>
          <div className="flex">
            {testimonials.map((testimonial, index) => (
              <div
                key={`${testimonial.speaker}-${index}`}
                className="flex justify-center px-2 md:px-4"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="w-[75vw] sm:w-[360px] md:w-[400px] lg:w-[460px] overflow-hidden rounded-3xl  shadow-sm"
                >
                  {/* Image Section */}
                  <div className="relative aspect-square w-full overflow-hidden">
                    <Image
                      src={testimonial.image}
                      alt={`${testimonial.speaker} testimonial`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 75vw, (max-width: 768px) 360px, (max-width: 1024px) 400px, 460px"
                    />
                  </div>

                  {/* Content Section */}
                  <div className="bg-white p-3 md:p-6 rounded-b-3xl">
                    {/* Title and Duration */}
                    <div className="mb-2 md:mb-4">
                      <h3 className="text-sm md:text-lg font-bold text-gray-900 mb-1">
                        {testimonial.title}
                      </h3>
                      <p className="text-xs md:text-sm text-gray-600">
                        {testimonial.category}
                      </p>
                    </div>

                    {/* User Profile */}
                    <div className="flex items-start gap-2 md:gap-3 mb-2 md:mb-4">
                      <Avatar className="h-10 w-10 md:h-14 md:w-14 border-2 border-gray-200 flex-shrink-0">
                        <AvatarImage src={testimonial.avatar} alt={testimonial.speaker} />
                        <AvatarFallback className="bg-gradient-to-br from-indigo-400 to-purple-500 text-white text-sm md:text-lg font-bold">
                          {testimonial.speaker
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center gap-1 md:gap-2 mb-0.5 md:mb-1">
                          <h4 className="text-sm md:text-lg font-bold text-gray-900">
                            {testimonial.speaker}
                          </h4>
                          <div className="flex items-center gap-0.5 md:gap-1 rounded-full bg-green-500 px-1.5 md:px-2 py-0.5">
                            <svg
                              className="h-2.5 w-2.5 md:h-3 md:w-3 text-white"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                            <span className="text-[10px] md:text-xs font-semibold text-white">
                              Verified
                            </span>
                          </div>
                        </div>
                        <p className="text-xs md:text-sm text-gray-500 flex items-center gap-1">
                          <svg
                            className="h-3 w-3 md:h-4 md:w-4 text-red-500"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" />
                          </svg>
                          {testimonial.location}
                        </p>
                      </div>
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-gray-700 text-xs md:text-sm leading-relaxed mb-2 md:mb-4">
                      &ldquo;{testimonial.testimonial}&rdquo;
                    </p>

                    {/* Rating and Time */}
                    <div className="flex items-center gap-2 md:gap-3">
                      <div className="flex gap-0.5">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <svg
                            key={i}
                            className="h-4 w-4 md:h-6 md:w-6 text-yellow-400"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-xs md:text-sm font-semibold text-gray-900">
                        {testimonial.rating}.0
                      </span>
                      <span className="text-xs md:text-sm text-gray-500">
                        • {testimonial.timeAgo}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { BorderBeam } from "@/components/ui/border-beam";
import { Award, Rocket, Target, Users } from "lucide-react";
import { cn } from "@/lib/utils";
import { StatItem } from "./statsItem";
import { brico } from "./fonts";

export default function AboutUsSection() {
  const aboutData = {
    title: "About Us",
    subtitle:
      "Manobikash Guide Centre is a trusted academic and skill-development institute based in Medinipur, West Bengal. Since 2018, we have been dedicated to providing quality education, including school tuition, spoken English training, personality development, career counselling, and exam preparation. With experienced teachers and a supportive learning environment, we have helped thousands of students build strong foundations and achieve academic and personal growth.",
    mission:
      "To offer accessible, structured, and high-quality learning support that helps students strengthen their academics, improve communication skills, and develop essential abilities for future success. Our mission is to guide learners of all levels with personalized attention, modern teaching methods, and a positive learning atmosphere.",
    vision:
      "To become a leading educational hub in Medinipur by providing reliable, affordable, and impactful learning opportunities that empower every student to reach their highest potential and build a successful future.",
  };

  const stats = [
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      label: "Students",
      value: 10000,
      title: "Successfully Taught Students",
      delay: 0.1,
      decimalPlaces: 0,
      color: "primary",
    },
    {
      icon: <Award className="h-6 w-6 text-amber-500" />,
      label: "Experience",
      value: 10,
      title: "Years of Experience",
      delay: 0.2,
      decimalPlaces: 0,
      color: "amber",
    },
  ];
  const statsRef = useRef(null);
  const missionRef = useRef(null);
  const missionInView = useInView(missionRef, { once: true, amount: 0.3 });

  return (
    <section id="about" className="relative w-full overflow-hidden py-20">
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        {/* CTA-Style Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mx-auto mb-6 max-w-2xl text-center"
        >
          <h2
            className={cn(
              "cursor-crosshair bg-gradient-to-b from-foreground via-foreground/80 to-foreground/40 bg-clip-text text-4xl font-bold text-transparent sm:text-6xl",
              brico.className
            )}
          >
            About <span className="text-primary">Us</span>
          </h2>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mx-auto mb-16 max-w-2xl text-center text-muted-foreground sm:text-lg"
        >
          {aboutData.subtitle}
        </motion.p>

        {/* Stats Section */}
        {/* Stats Section */}
        <div ref={statsRef} className="mb-20">
          <div className="flex justify-center">
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-2 max-w-2xl">
              {stats.map((stat, index) => (
                <StatItem
                  key={index}
                  value={stat.value}
                  label={stat.label}
                  icon={stat.icon}
                  delay={stat.delay || index * 0.1}
                  decimalPlaces={stat.decimalPlaces}
                  color={stat.color}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Mission & Vision Section */}
        <div ref={missionRef} className="relative mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={
              missionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
            }
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative z-10 grid gap-12 md:grid-cols-2"
          >
            {/* Mission */}
            <motion.div
              whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
              className="group relative block overflow-hidden rounded-2xl border border-border/40 bg-gradient-to-br p-10 backdrop-blur-3xl"
            >
              <BorderBeam
                duration={8}
                size={300}
                className="from-transparent via-primary/40 to-transparent"
              />
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 backdrop-blur-sm">
                <Rocket className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-4 bg-gradient-to-r from-primary/90 to-primary/70 bg-clip-text text-3xl font-bold text-transparent">
                Our Mission
              </h3>
              <p className="text-lg leading-relaxed text-muted-foreground">
                At{" "}
                <strong className="text-foreground font-semibold">
                  Manobikash Guide Centre
                </strong>
                , our mission is to provide
                <strong className="text-foreground font-semibold">
                  {" "}
                  quality academic support
                </strong>
                ,
                <strong className="text-foreground font-semibold">
                  {" "}
                  spoken English training
                </strong>
                ,
                <strong className="text-foreground font-semibold">
                  {" "}
                  personality development
                </strong>
                , and
                <strong className="text-foreground font-semibold">
                  {" "}
                  career-guidance programs
                </strong>
                . We aim to help students of all levels build strong
                fundamentals, gain confidence, and excel in both studies and
                life through
                <strong className="text-foreground font-semibold">
                  {" "}
                  consistent guidance and a supportive learning environment
                </strong>
                .
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
              className="group relative block overflow-hidden rounded-2xl border border-border/40 bg-gradient-to-br p-10 backdrop-blur-3xl"
            >
              <BorderBeam
                duration={8}
                size={300}
                className="from-transparent via-blue-500/40 to-transparent"
                reverse
              />
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 backdrop-blur-sm">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-4 bg-gradient-to-r from-primary/90 to-primary/70 bg-clip-text text-3xl font-bold text-transparent">
                Our Vision
              </h3>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Our vision is to create a learning ecosystem where every student
                from Medinipur and surrounding areas can access
                <strong className="text-foreground font-semibold">
                  affordable, reliable, and high-quality education
                </strong>
                . We aim to shape confident learners by using effective teaching
                methods, skilled educators, and continuous motivation—
                empowering each student to build a brighter and successful
                future.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

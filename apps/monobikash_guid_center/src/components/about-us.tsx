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
      "Manobikash Guide Centre is a trusted academic and skill-development institute based in Medinipur, West Bengal. Since 2015, we have been dedicated to providing quality education, including school tuition, spoken English training, personality development, career counselling, and exam preparation. With experienced teachers and a supportive learning environment, we have helped thousands of students build strong foundations and achieve academic and personal growth.",
    mission:
      "To offer accessible, structured, and high-quality learning support that helps students strengthen their academics, improve communication skills, and develop essential abilities for future success. Our mission is to guide learners of all levels with personalized attention, modern teaching methods, and a positive learning atmosphere.",
    vision:
      "To become a leading educational hub in Medinipur by providing reliable, affordable, and impactful learning opportunities that empower every student to reach their highest potential and build a successful future.",
  };

  const stats = [
    {
      icon: <Users className="h-6 w-6" />,
      label: "Students",
      value: 10000,
      title: "Successfully Taught Students",
      delay: 0.1,
      decimalPlaces: 0,
      color: "primary",
    },
    {
      icon: <Award className="h-6 w-6" />,
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
    <section id="about" className="relative w-full overflow-hidden py-20 md:py-28">
      {/* Enhanced Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.15),transparent_50%)]" />
        <div className="absolute right-1/3 top-1/4 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute left-1/4 bottom-1/4 h-80 w-80 rounded-full bg-purple-500/10 blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        {/* Enhanced Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <h2
            className={cn(
              "mb-6 bg-gradient-to-b from-foreground via-foreground/90 to-foreground/60 bg-clip-text text-4xl font-bold text-transparent sm:text-6xl",
              brico.className
            )}
          >
            About{" "}
            <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              Us
            </span>
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground text-lg leading-relaxed"
          >
            {aboutData.subtitle}
          </motion.p>
        </motion.div>

        {/* Enhanced Stats Section */}
        <div ref={statsRef} className="mb-20">
          <div className="flex justify-center">
            <div className="grid gap-6 sm:grid-cols-2 max-w-3xl w-full">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: stat.delay }}
                  whileHover={{ y: -5, transition: { duration: 0.3 } }}
                >
                  <StatItem
                    value={stat.value}
                    label={stat.label}
                    icon={stat.icon}
                    delay={stat.delay || index * 0.1}
                    decimalPlaces={stat.decimalPlaces}
                    color={stat.color}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Mission & Vision Section */}
        <div ref={missionRef} className="relative mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={
              missionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
            }
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative z-10 grid gap-8 md:grid-cols-2"
          >
            {/* Enhanced Mission Card */}
            <motion.div
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative block overflow-hidden rounded-3xl border border-border/50 bg-gradient-to-br from-card/90 to-card/60 backdrop-blur-sm p-8 md:p-10 shadow-lg hover:shadow-2xl hover:border-primary/30 transition-all duration-300"
            >
              <BorderBeam
                duration={8}
                size={300}
                className="from-transparent via-primary/40 to-transparent"
              />
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-purple-500/20 shadow-md group-hover:scale-110 transition-transform duration-300">
                <Rocket className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-4 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-3xl font-bold text-transparent">
                Our Mission
              </h3>
              <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
                At{" "}
                <strong className="text-foreground font-bold">
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

            {/* Enhanced Vision Card */}
            <motion.div
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative block overflow-hidden rounded-3xl border border-border/50 bg-gradient-to-br from-card/90 to-card/60 backdrop-blur-sm p-8 md:p-10 shadow-lg hover:shadow-2xl hover:border-primary/30 transition-all duration-300"
            >
              <BorderBeam
                duration={8}
                size={300}
                className="from-transparent via-blue-500/40 to-transparent"
                reverse
              />
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-purple-500/20 shadow-md group-hover:scale-110 transition-transform duration-300">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-4 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-3xl font-bold text-transparent">
                Our Vision
              </h3>
              <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
                Our vision is to create a learning ecosystem where every student
                from Medinipur and surrounding areas can access
                <strong className="text-foreground font-bold">
                  {" "}
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

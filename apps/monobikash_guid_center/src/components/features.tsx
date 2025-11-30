"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import { Users, ClipboardCheck, PlayCircle, MessageCircle } from "lucide-react";
import { brico } from "./fonts";
import Image from "next/image";

const features = [
  {
    step: "Step 1",
    title: "One-to-One Tuition",
    content:
      "Personalised offline tuition focused on academic improvement, spoken English, and concept clarity.",
    icon: <Users className="h-6 w-6" />,
    thumbnail: "https://scontent.fccu9-5.fna.fbcdn.net/v/t39.30808-6/571304498_1279587320852398_1056823564323495737_n.jpg?stp=c256.0.1536.1536a_cp6_dst-jpg_s552x414_tt6&_nc_cat=107&ccb=1-7&_nc_sid=50ad20&_nc_ohc=F2zIJFWXDyAQ7kNvwEDLb9S&_nc_oc=Adn39sxdKkdlvRV4yvBWBYlXqAscLn8Ky_MSfTB3X6cl3wzJUM-B3pk4Aa2NdzZ9BUG3HTgBRZHCQTg5sFewErAz&_nc_zt=23&_nc_ht=scontent.fccu9-5.fna&_nc_gid=VTWfwuUOnMYcGNug3QxpFg&oh=00_AfhIUHMHbJfBIElBhVncy6BtdPff0fBmqwAyKErVm8WYJQ&oe=69308AE5",
    videoUrl: "#",
  },
  {
    step: "Step 2",
    title: "Small Batch Coaching",
    content:
      "Offline group classes designed for interactive learning, doubt clearing, and steady improvement.",
    icon: <Users className="h-6 w-6" />,
    thumbnail: "https://scontent.fccu9-2.fna.fbcdn.net/v/t39.30808-6/518153886_1186641350146996_7675214779226681273_n.jpg?stp=c448.0.1152.1152a_cp6_dst-jpg_s552x414_tt6&_nc_cat=106&ccb=1-7&_nc_sid=50ad20&_nc_ohc=Vps3KlEh8uUQ7kNvwFjvkGS&_nc_oc=Adl3YELwzMIHILLXXJX-mP_ZVsp8C5Z2Ar_DbtRe5eUXblJDezH46JvsE1MdGa0UCn0anYH6LNinL0KjaeQiunSp&_nc_zt=23&_nc_ht=scontent.fccu9-2.fna&_nc_gid=KxMJ0pTULfZmB9xbmgXxfQ&oh=00_AfghH3GYMURlygcxirlj5xfRg0BhQKx662oziiy8gIb7Ag&oe=6930651F",
    videoUrl: "#",
  },
  {
    step: "Step 3",
    title: "Activity & Practice Sessions",
    content:
      "Regular classroom-based activities, spoken English practice, and worksheets for concept reinforcement.",
    icon: <PlayCircle className="h-6 w-6" />,
    thumbnail: "https://scontent.fccu9-3.fna.fbcdn.net/v/t39.30808-6/518313760_1185755766902221_597611069112097202_n.jpg?stp=c144.0.864.864a_dst-jpg_s552x414_tt6&_nc_cat=111&ccb=1-7&_nc_sid=50ad20&_nc_ohc=63EBYqLqF4EQ7kNvwEulBlb&_nc_oc=AdnGVl5qiaUqutQmaZGVEO2JGJ_WMS5X2VKknbYK-eNSPpCZX1uUnNpPIMg6DCYZWI7bdoE9Jso6MfLqUhpD9337&_nc_zt=23&_nc_ht=scontent.fccu9-3.fna&_nc_gid=SfBjrmay7DRyJv-yLgMOeQ&oh=00_Afj59nR_Im9P5LBQ_f5Kcko2ojnj3Pox-fInlVy_3iwNcw&oe=693080CF",
    videoUrl: "#",
  },
  {
    step: "Step 4",
    title: "Weekly Tests & Evaluation",
    content:
      "Offline weekly tests to assess progress, improve accuracy, and strengthen learning ability.",
    icon: <ClipboardCheck className="h-6 w-6" />,
    thumbnail: "https://scontent.fccu9-5.fna.fbcdn.net/v/t39.30808-6/492074040_1122924569852008_4623805019664803626_n.jpg?stp=c352.0.576.576a_dst-jpg_s552x414_tt6&_nc_cat=107&ccb=1-7&_nc_sid=50ad20&_nc_ohc=xYQrPIfTJuIQ7kNvwGLFmld&_nc_oc=AdkJY1EX-o44yH4Q-dI3XIEQZSfDRTmJZO17VskRE7RadWRd0j16a-qH5Eq3EE20DovcCF1TnOau33msPAtCKzd6&_nc_zt=23&_nc_ht=scontent.fccu9-5.fna&_nc_gid=tOtECw2iT8ljPEA7WPX-BA&oh=00_AfgzO6N1uZ2vn2TIseo4I0JU5A93OPERRCAtxphQPbkFgw&oe=69308459",
    videoUrl: "#",
  },
  {
    step: "Step 5",
    title: "Personal Guidance & Support",
    content:
      "Continuous support from experienced teachers to guide students academically and personally.",
    icon: <MessageCircle className="h-6 w-6" />,
    thumbnail: "https://scontent.fccu9-3.fna.fbcdn.net/v/t39.30808-6/492382897_1122925766518555_6894931983649129643_n.jpg?stp=c144.0.864.864a_dst-jpg_s552x414_tt6&_nc_cat=110&ccb=1-7&_nc_sid=50ad20&_nc_ohc=z13kwFV_uKsQ7kNvwFzHxSV&_nc_oc=AdkAIc4j-2zUtpgewed0IH-B9jDxQyldTNxYTKs6qYRH3vmurBHaWdkgAEn2QTnKGuiaaMscKGOo-I6q_y8z6odd&_nc_zt=23&_nc_ht=scontent.fccu9-3.fna&_nc_gid=tOtECw2iT8ljPEA7WPX-BA&oh=00_AfgNcbEQD_eMHtYHmZHS2BMLXjtR6PSEga_56J_WWG9n-Q&oe=69306A56",
    videoUrl: "#",
  },
];

export default function FeatureSections() {
  const [currentFeature, setCurrentFeature] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (progress < 100) {
        setProgress((prev) => prev + 100 / (4000 / 100));
      } else {
        setCurrentFeature((prev) => (prev + 1) % features.length);
        setProgress(0);
      }
    }, 100);

    return () => clearInterval(timer);
  }, [progress]);

  return (
    <section
      id="features"
      className="relative z-10 py-24 md:py-32 overflow-hidden"
    >
      {/* Enhanced Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.1),transparent_70%)]" />
        <div className="absolute left-1/3 top-1/4 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute right-1/4 bottom-1/4 h-80 w-80 rounded-full bg-purple-500/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        {/* Heading Section with Enhanced Styling */}
        <div className="mb-16 text-center max-w-3xl mx-auto">
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
            Learning that{" "}
            <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              Builds Confidence
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground text-lg leading-relaxed"
          >
            At Manobikash Guide Centre, we focus entirely on offline classroom
            learning with personalised support to help students grow
            academically and personally.
          </motion.p>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Feature List */}
          <div className="space-y-6">
            {/* Mobile View */}
            <div className="block md:hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={features[currentFeature].step}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.5 }}
                  className="group relative p-6 rounded-2xl border border-primary/20 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-purple-500/20 text-primary shadow-md">
                      {features[currentFeature].icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded-full">
                          {features[currentFeature].step}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-2">
                        {features[currentFeature].title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {features[currentFeature].content}
                      </p>
                    </div>
                  </div>
                  {/* Progress Bar */}
                  <div className="mt-4 h-1 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-primary to-purple-600"
                      style={{ width: `${progress}%` }}
                      transition={{ ease: "linear" }}
                    />
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Desktop View */}
            <div className="hidden md:block space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onClick={() => {
                    setCurrentFeature(index);
                    setProgress(0);
                  }}
                  className={cn(
                    "group relative p-5 rounded-2xl border cursor-pointer transition-all duration-300",
                    index === currentFeature
                      ? "border-primary/40 bg-gradient-to-br from-primary/10 to-purple-500/10 shadow-lg scale-[1.02]"
                      : "border-border/50 bg-card/50 hover:border-primary/20 hover:bg-card/80"
                  )}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={cn(
                        "flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl transition-all duration-300",
                        index === currentFeature
                          ? "bg-gradient-to-br from-primary/30 to-purple-500/30 text-primary scale-110 shadow-md"
                          : "bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary"
                      )}
                    >
                      {feature.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span
                          className={cn(
                            "text-xs font-semibold px-2 py-0.5 rounded-full transition-colors",
                            index === currentFeature
                              ? "text-primary bg-primary/20"
                              : "text-muted-foreground bg-muted"
                          )}
                        >
                          {feature.step}
                        </span>
                      </div>
                      <h3
                        className={cn(
                          "text-lg font-bold mb-1 transition-colors",
                          index === currentFeature
                            ? "text-foreground"
                            : "text-foreground/80"
                        )}
                      >
                        {feature.title}
                      </h3>
                      <p
                        className={cn(
                          "text-sm leading-relaxed transition-colors",
                          index === currentFeature
                            ? "text-muted-foreground"
                            : "text-muted-foreground/70"
                        )}
                      >
                        {feature.content}
                      </p>
                    </div>
                  </div>
                  {/* Progress Bar for Active Item */}
                  {index === currentFeature && (
                    <div className="mt-3 h-1 bg-muted/50 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-primary to-purple-600"
                        style={{ width: `${progress}%` }}
                        transition={{ ease: "linear" }}
                      />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Side - Enhanced Image Display */}
          <div className="relative w-full flex justify-center">
            <div className="w-full max-w-2xl relative">
              {/* Decorative Background */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-3xl blur-2xl opacity-50" />

              <AnimatePresence mode="wait">
                <motion.div
                  key={features[currentFeature].thumbnail}
                  className="relative z-10"
                  initial={{ y: 50, opacity: 0, scale: 0.95 }}
                  animate={{ y: 0, opacity: 1, scale: 1 }}
                  exit={{ y: -50, opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                  <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 group">
                    <Image
                      src={features[currentFeature].thumbnail}
                      alt={features[currentFeature].title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Floating Step Badge */}
                  <motion.div
                    className="absolute -top-4 -left-4 bg-gradient-to-br from-primary to-purple-600 text-white px-4 py-2 rounded-xl shadow-xl font-bold"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                  >
                    {features[currentFeature].step}
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

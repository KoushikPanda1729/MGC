"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import { Users, ClipboardCheck, PlayCircle, MessageCircle } from "lucide-react";
import { brico } from "./fonts";

const features = [
  {
    step: "Step 1",
    title: "One-to-One Tuition",
    content:
      "Personalised offline tuition focused on academic improvement, spoken English, and concept clarity.",
    icon: <Users className="h-6 w-6 text-primary" />,
    thumbnail: "https://scontent.fccu9-5.fna.fbcdn.net/v/t39.30808-6/571304498_1279587320852398_1056823564323495737_n.jpg?stp=c256.0.1536.1536a_cp6_dst-jpg_s552x414_tt6&_nc_cat=107&ccb=1-7&_nc_sid=50ad20&_nc_ohc=F2zIJFWXDyAQ7kNvwEDLb9S&_nc_oc=Adn39sxdKkdlvRV4yvBWBYlXqAscLn8Ky_MSfTB3X6cl3wzJUM-B3pk4Aa2NdzZ9BUG3HTgBRZHCQTg5sFewErAz&_nc_zt=23&_nc_ht=scontent.fccu9-5.fna&_nc_gid=VTWfwuUOnMYcGNug3QxpFg&oh=00_AfhIUHMHbJfBIElBhVncy6BtdPff0fBmqwAyKErVm8WYJQ&oe=69308AE5",
    videoUrl: "#",
  },
  {
    step: "Step 2",
    title: "Small Batch Coaching",
    content:
      "Offline group classes designed for interactive learning, doubt clearing, and steady improvement.",
    icon: <Users className="h-6 w-6 text-primary" />,
    thumbnail: "https://scontent.fccu9-2.fna.fbcdn.net/v/t39.30808-6/518153886_1186641350146996_7675214779226681273_n.jpg?stp=c448.0.1152.1152a_cp6_dst-jpg_s552x414_tt6&_nc_cat=106&ccb=1-7&_nc_sid=50ad20&_nc_ohc=Vps3KlEh8uUQ7kNvwFjvkGS&_nc_oc=Adl3YELwzMIHILLXXJX-mP_ZVsp8C5Z2Ar_DbtRe5eUXblJDezH46JvsE1MdGa0UCn0anYH6LNinL0KjaeQiunSp&_nc_zt=23&_nc_ht=scontent.fccu9-2.fna&_nc_gid=KxMJ0pTULfZmB9xbmgXxfQ&oh=00_AfghH3GYMURlygcxirlj5xfRg0BhQKx662oziiy8gIb7Ag&oe=6930651F",
    videoUrl: "#",
  },
  {
    step: "Step 3",
    title: "Activity & Practice Sessions",
    content:
      "Regular classroom-based activities, spoken English practice, and worksheets for concept reinforcement.",
    icon: <PlayCircle className="h-6 w-6 text-primary" />,
    thumbnail: "https://scontent.fccu9-3.fna.fbcdn.net/v/t39.30808-6/518313760_1185755766902221_597611069112097202_n.jpg?stp=c144.0.864.864a_dst-jpg_s552x414_tt6&_nc_cat=111&ccb=1-7&_nc_sid=50ad20&_nc_ohc=63EBYqLqF4EQ7kNvwEulBlb&_nc_oc=AdnGVl5qiaUqutQmaZGVEO2JGJ_WMS5X2VKknbYK-eNSPpCZX1uUnNpPIMg6DCYZWI7bdoE9Jso6MfLqUhpD9337&_nc_zt=23&_nc_ht=scontent.fccu9-3.fna&_nc_gid=SfBjrmay7DRyJv-yLgMOeQ&oh=00_Afj59nR_Im9P5LBQ_f5Kcko2ojnj3Pox-fInlVy_3iwNcw&oe=693080CF",
    videoUrl: "#",
  },
  {
    step: "Step 4",
    title: "Weekly Tests & Evaluation",
    content:
      "Offline weekly tests to assess progress, improve accuracy, and strengthen learning ability.",
    icon: <ClipboardCheck className="h-6 w-6 text-primary" />,
    thumbnail: "https://scontent.fccu9-5.fna.fbcdn.net/v/t39.30808-6/492074040_1122924569852008_4623805019664803626_n.jpg?stp=c352.0.576.576a_dst-jpg_s552x414_tt6&_nc_cat=107&ccb=1-7&_nc_sid=50ad20&_nc_ohc=xYQrPIfTJuIQ7kNvwGLFmld&_nc_oc=AdkJY1EX-o44yH4Q-dI3XIEQZSfDRTmJZO17VskRE7RadWRd0j16a-qH5Eq3EE20DovcCF1TnOau33msPAtCKzd6&_nc_zt=23&_nc_ht=scontent.fccu9-5.fna&_nc_gid=tOtECw2iT8ljPEA7WPX-BA&oh=00_AfgzO6N1uZ2vn2TIseo4I0JU5A93OPERRCAtxphQPbkFgw&oe=69308459",
    videoUrl: "#",
  },
  {
    step: "Step 5",
    title: "Personal Guidance & Support",
    content:
      "Continuous support from experienced teachers to guide students academically and personally.",
    icon: <MessageCircle className="h-6 w-6 text-primary" />,
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
      className="relative z-10 py-24 md:py-32 bg-background"
    >
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        {/* Heading Section */}
        <div className="mb-12 text-center max-w-2xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className={cn(
              "mb-4 cursor-crosshair bg-gradient-to-b from-foreground via-foreground/80 to-foreground/40 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl",
              brico.className
            )}
          >
            Learning that{" "}
            <span className="bg-primary bg-clip-text text-transparent">
              Builds Confidence
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-4 text-muted-foreground text-lg"
          >
            At Manobikash Guide Centre, we focus entirely on offline classroom
            learning with personalised support to help students grow
            academically and personally.
          </motion.p>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Mobile View */}
          <div className="block md:hidden space-y-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={features[currentFeature].step}
                className="flex items-center gap-6 md:gap-8"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 md:h-14 md:w-14 border-primary bg-primary/10 text-primary scale-110 shadow-md">
                  {features[currentFeature].icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold md:text-2xl">
                    {features[currentFeature].title}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground">
                    {features[currentFeature].content}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Desktop View */}
          <div className="hidden md:block space-y-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-6 md:gap-8"
                initial={{ opacity: 0.3, x: -20 }}
                animate={{
                  opacity: index === currentFeature ? 1 : 0.3,
                  x: 0,
                  scale: index === currentFeature ? 1.05 : 1,
                }}
                transition={{ duration: 0.5 }}
              >
                <div
                  className={cn(
                    "flex h-12 w-12 items-center justify-center rounded-full border-2 md:h-14 md:w-14",
                    index === currentFeature
                      ? "scale-110 border-primary bg-primary/10 text-primary shadow-md"
                      : "border-muted-foreground bg-muted"
                  )}
                >
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold md:text-2xl">
                    {feature.title}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground">
                    {feature.content}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Side – Placeholder Image */}
          <div className="relative w-full flex justify-center">
            <div className="w-full max-w-2xl">
              <AnimatePresence mode="wait">
                <motion.a
                  key={features[currentFeature].thumbnail}
                  href="#"
                  className="relative block w-full aspect-video rounded-xl overflow-hidden shadow-2xl group"
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -100, opacity: 0 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                  <img
                    src={features[currentFeature].thumbnail}
                    alt={features[currentFeature].title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </motion.a>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

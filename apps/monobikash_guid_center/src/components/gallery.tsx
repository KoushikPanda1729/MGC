"use client";

import React, { useState, useCallback, useRef } from "react";
import Image from "next/image";
import { X, Play, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogClose,
} from "@t2p-admin/ui/components/dialog";
import { Button } from "@t2p-admin/ui/components/button";
import { motion, AnimatePresence, useInView } from "motion/react";
import { cn } from "@/lib/utils";
import { brico } from "./fonts";

const galleryImages = [
  {
    id: 1,
    url: "https://scontent.fixb4-1.fna.fbcdn.net/v/t39.30808-6/484172548_1093199516157847_8757313203464467693_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=0DCaYK2_cV4Q7kNvwHp53HE&_nc_oc=Adkq0cHg6gLTwzgz0JoGc7j3ZWARjb7dqM7YH5V7yYUDDmYxps7DDkJ-2acU3M83uRo&_nc_zt=23&_nc_ht=scontent.fixb4-1.fna&_nc_gid=sLYPNi6gpnXZGuSfT1lYiw&oh=00_Afgh3waqOxQAlufkvUdqUqSdsYPQD_BLaXocvYNl-2uh9A&oe=6930F549",
    alt: "Students Activity - Manobikash Guide Centre",
    category: "Activity",
  },
  {
    id: 2,
    url: "https://scontent.fixb4-1.fna.fbcdn.net/v/t39.30808-6/485951137_1100052822139183_794776518194228385_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=Bg6i0RVFEuUQ7kNvwESC9iV&_nc_oc=Adl11lSuEqtN75MZcHBXx4miLpz-i_KJM6ZFle4DT6Z1uv-ctECgydpQCClhJH4n9sA&_nc_zt=23&_nc_ht=scontent.fixb4-1.fna&_nc_gid=YriTlhCrtGHVPSC4lr3N5A&oh=00_AfjWNQkxek2YwW_H5saBokcphhGweig46PI9_cmHVrkJDQ&oe=69310711",
    alt: "Classroom Session - Manobikash Guide Centre",
    category: "Classroom",
  },
  {
    id: 3,
    url: "https://scontent.fixb4-1.fna.fbcdn.net/v/t39.30808-6/485962808_1100052845472514_3789085118709553466_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=09dxOH5n0IMQ7kNvwEqReJU&_nc_oc=AdmmkBedqBVU8Bz-Lv8OvUA-dRQMz6SADUsEYuIsTErIWG3_173Qdsacqrq-HsGYle0&_nc_zt=23&_nc_ht=scontent.fixb4-1.fna&_nc_gid=wSKjyeyEq5P6FqkFRlqx5Q&oh=00_Afjv2WbqsGuai3O1ENtuw3PmswgoECKvjnX34JVluOlHnw&oe=6931058C",
    alt: "Achievement Ceremony - Manobikash Guide Centre",
    category: "Events",
  },
  {
    id: 4,
    url: "https://scontent.fixb4-1.fna.fbcdn.net/v/t39.30808-6/491988221_1122926866518445_5625229780507695187_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=IHDTfT89BTAQ7kNvwH9DlIx&_nc_oc=Adm318i7thcqQsGYPrwv_K0QDyxfSPc5yb4zSWGUwPtAxByRraDZordKMAySskxF-Aw&_nc_zt=23&_nc_ht=scontent.fixb4-1.fna&_nc_gid=LbxBKEscl_qoPCh_Q2sSlA&oh=00_AfgVi0Xdokb1Kz8M0XB5PUI1App2OsVq1btYNATxxZu4Pw&oe=693107ED",
    alt: "Student Success - Manobikash Guide Centre",
    category: "Success",
  },
  {
    id: 5,
    url: "https://scontent.fixb4-1.fna.fbcdn.net/v/t39.30808-6/494764473_1134745802003218_7293921621459059810_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=sSlTxQbk9XEQ7kNvwGUJHRF&_nc_oc=Adm8faifQsRH9Fryty2eAxmdFyk6k_ksosOV_Vd0TNTbuHvX_2ttrfMnUPtAkFXk1S0&_nc_zt=23&_nc_ht=scontent.fixb4-1.fna&_nc_gid=olmo_agexIWZr4POp9YqZA&oh=00_AfjvprjVkCzczdPr2WXPWfZdcWzpx50bRA2gg56ErS9WWA&oe=69311131",
    alt: "Learning Environment - Manobikash Guide Centre",
    category: "Campus",
  },
  {
    id: 6,
    url: "https://scontent.fixb4-1.fna.fbcdn.net/v/t39.30808-6/518304557_1186640720147059_5291493154162694086_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=schD2c4fgngQ7kNvwGJVmfH&_nc_oc=AdmCjq5mlHDvVpuqnHXfvK7rBsg9GaELZx6vl_xzo7PqYYG0F1bKhKG0bOBNUguaTsM&_nc_zt=23&_nc_ht=scontent.fixb4-1.fna&_nc_gid=KDkfKgUJkkWgQMvkTHaf9g&oh=00_Afj1nzHTR_dBjYFBaXkoKeYmcrGKJmxFo2WVqYf6cql6pA&oe=693123BE",
    alt: "Interactive Class - Manobikash Guide Centre",
    category: "Classroom",
  },
  {
    id: 7,
    url: "https://scontent.fixb4-1.fna.fbcdn.net/v/t39.30808-6/531930436_1215959760548488_3783783490103317218_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=q9dt3-HCXTsQ7kNvwF-Vk3w&_nc_oc=Adkj75O-PC7jStZgipHbWD1oHP8zqH_AXh_fROFrdXlmWXTfcRxCpNXX48yHt5HTm1k&_nc_zt=23&_nc_ht=scontent.fixb4-1.fna&_nc_gid=NDY0dgKel6wWNMWZolC7yQ&oh=00_AfgSkviZ5z3wUa4tLi0MQbEZSCfWlIJBrBftP7utWbt6Tw&oe=693102D9",
    alt: "Study Group - Manobikash Guide Centre",
    category: "Study",
  },
  {
    id: 8,
    url: "https://scontent.fixb4-1.fna.fbcdn.net/v/t39.30808-6/484109992_1093199592824506_5549970847149146677_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=HzZJ_C5oe6YQ7kNvwFVJsGS&_nc_oc=AdkzqXjmaOnHFGXoScLkcf9pIUEkK7uSqiP9Q1-oaQQatD3Lpc6wSO4gxNeefOKZhJM&_nc_zt=23&_nc_ht=scontent.fixb4-1.fna&_nc_gid=FrnTP6mdMnQFDoJM6Tb4kw&oh=00_AfiecSDsoiwDGifjYMF62t-1UtZMygeELtMwAe-OkfKn3w&oe=693129B3",
    alt: "Educational Event - Manobikash Guide Centre",
    category: "Events",
  },
  {
    id: 9,
    url: "https://scontent.fixb4-1.fna.fbcdn.net/v/t39.30808-6/482060532_1087986810012451_5663149904587740984_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=Dv3NQ9EfK2oQ7kNvwH84lcw&_nc_oc=AdkhVTGSdQ2Cr09uEqiLQ4Jd3bt0d-016YEKFVqSnEqSbiRuSLZZs3CxgtUDlKwUjzQ&_nc_zt=23&_nc_ht=scontent.fixb4-1.fna&_nc_gid=5GbQ5V34DAVr0XyaG1dfow&oh=00_AfiJdB7xcYWjxcf7dHigp0w0RvWezGDu8AMP3hYBz0bANQ&oe=6930FEA7",
    alt: "Campus Life - Manobikash Guide Centre",
    category: "Campus",
  },
  {
    id: 10,
    url: "https://scontent.fixb4-1.fna.fbcdn.net/v/t39.30808-6/482218466_1087986750012457_2011831892574517485_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=7DJUN6D-mnkQ7kNvwGjhFa7&_nc_oc=Adkl3UdL_DBQU1co2noWi7bZuaKtyg3HiHF8B-BYREOlOeTcj5zV_zk7tp2HfhUa-OY&_nc_zt=23&_nc_ht=scontent.fixb4-1.fna&_nc_gid=903nPHiB9B8stzAh9w0dCw&oh=00_AfiQ3UKErdDHp_hdoP5RG24EOA3WXiNQ4TEK-A3Nn9YPxQ&oe=69312276",
    alt: "Special Events - Manobikash Guide Centre",
    category: "Events",
  },
];

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"photos" | "videos">("photos");
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [carouselIndex, setCarouselIndex] = useState<number>(0);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const handleClose = () => {
    setOpen(false);
    setTimeout(() => {
      setSelectedImage(null);
    }, 200);
  };

  const handlePreviousImage = useCallback(() => {
    const newIndex =
      currentImageIndex === 0
        ? galleryImages.length - 1
        : currentImageIndex - 1;
    setCurrentImageIndex(newIndex);
    setSelectedImage(galleryImages[newIndex].url);
  }, [currentImageIndex]);

  const handleNextImage = useCallback(() => {
    const newIndex =
      currentImageIndex === galleryImages.length - 1
        ? 0
        : currentImageIndex + 1;
    setCurrentImageIndex(newIndex);
    setSelectedImage(galleryImages[newIndex].url);
  }, [currentImageIndex]);

  // Auto-swipe carousel for photos
  React.useEffect(() => {
    if (activeTab === "photos") {
      const interval = setInterval(() => {
        setCarouselIndex((prev) => (prev + 1) % galleryImages.length);
      }, 5000); // Change image every 5 seconds

      return () => clearInterval(interval);
    }
  }, [activeTab]);

  // Keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (open && selectedImage) {
        if (e.key === "ArrowLeft") {
          handlePreviousImage();
        } else if (e.key === "ArrowRight") {
          handleNextImage();
        } else if (e.key === "Escape") {
          handleClose();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, selectedImage, handlePreviousImage, handleNextImage]);



  const goToPreviousSlide = () => {
    setCarouselIndex(
      (prev) => (prev - 1 + galleryImages.length) % galleryImages.length
    );
  };

  const goToNextSlide = () => {
    setCarouselIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setSelectedImage(galleryImages[index].url);
    setOpen(true);
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden bg-background"
    >
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-background to-background" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-secondary/5 via-background to-background" />
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl translate-x-1/2" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
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
            Our{" "}
            <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              Gallery
            </span>
          </motion.h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Explore our vibrant community and educational journey through these
            captured moments of success and learning.
          </p>
        </motion.div>

        {/* Custom Tab Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex p-1.5 rounded-2xl bg-muted/50 backdrop-blur-sm border border-border/50">
            <Button
              variant={activeTab === "photos" ? "default" : "ghost"}
              onClick={() => setActiveTab("photos")}
              className={cn(
                "rounded-xl px-8 py-6 text-base font-medium transition-all duration-300",
                activeTab === "photos"
                  ? "shadow-lg shadow-primary/25"
                  : "hover:bg-background/50"
              )}
            >
              Photos
            </Button>
            <Button
              variant={activeTab === "videos" ? "default" : "ghost"}
              onClick={() => setActiveTab("videos")}
              className={cn(
                "rounded-xl px-8 py-6 text-base font-medium transition-all duration-300",
                activeTab === "videos"
                  ? "shadow-lg shadow-primary/25"
                  : "hover:bg-background/50"
              )}
            >
              Videos
            </Button>
          </div>
        </motion.div>

        {/* Photos Content */}
        <AnimatePresence mode="wait">
          {activeTab === "photos" && (
            <motion.div
              key="photos"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              {/* Main Featured Carousel */}
              <div className="relative w-full max-w-6xl mx-auto">
                <div className="relative overflow-hidden rounded-[2rem] shadow-2xl aspect-[16/9] md:aspect-[21/9] bg-muted">
                  <AnimatePresence mode="popLayout">
                    <motion.div
                      key={carouselIndex}
                      initial={{ opacity: 0, scale: 1.1 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.7 }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={galleryImages[carouselIndex].url}
                        alt={galleryImages[carouselIndex].alt}
                        fill
                        sizes="100vw"
                        className="object-cover"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    </motion.div>
                  </AnimatePresence>

                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 z-20">
                    <motion.div
                      key={`text-${carouselIndex}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="max-w-4xl"
                    >
                      <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/90 backdrop-blur-md mb-4 shadow-lg shadow-primary/20">
                        <span className="text-white text-sm font-bold uppercase tracking-wider">
                          {galleryImages[carouselIndex].category}
                        </span>
                      </div>
                      <h3 className="text-2xl md:text-4xl font-bold text-white mb-2 drop-shadow-lg">
                        {galleryImages[carouselIndex].alt.split(" - ")[0]}
                      </h3>
                    </motion.div>
                  </div>

                  {/* Navigation Buttons */}
                  <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10 flex gap-3 z-30">
                    <button
                      onClick={goToPreviousSlide}
                      className="p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white transition-all hover:scale-105 active:scale-95"
                      aria-label="Previous slide"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                      onClick={goToNextSlide}
                      className="p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white transition-all hover:scale-105 active:scale-95"
                      aria-label="Next slide"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Thumbnails Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
                {galleryImages.map((image, index) => (
                  <motion.button
                    key={image.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    onClick={() => openLightbox(index)}
                    className={cn(
                      "group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer transition-all duration-300",
                      index === carouselIndex
                        ? "ring-2 ring-primary ring-offset-2 ring-offset-background"
                        : "hover:ring-2 hover:ring-primary/50 hover:ring-offset-2 hover:ring-offset-background"
                    )}
                  >
                    <Image
                      src={image.url}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="p-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30">
                        <ZoomIn className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === "videos" && (
            <motion.div
              key="videos"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col items-center justify-center py-24 text-center"
            >
              <div className="w-24 h-24 rounded-full bg-muted/50 flex items-center justify-center mb-6 animate-pulse">
                <Play className="w-10 h-10 text-muted-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Video Gallery Coming Soon
              </h3>
              <p className="text-muted-foreground max-w-md">
                We are curating a collection of inspiring moments and educational
                content. Stay tuned for our video updates!
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Lightbox Modal */}
      <Dialog open={open} onOpenChange={handleClose}>
        <DialogContent className="max-w-[95vw] w-full h-[95vh] p-0 bg-black/95 border-none shadow-2xl overflow-hidden">
          <DialogClose className="absolute top-4 right-4 z-50 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors backdrop-blur-md border border-white/10">
            <X className="h-5 w-5" />
          </DialogClose>

          {selectedImage && (
            <div className="relative w-full h-full flex flex-col items-center justify-center">
              <div className="relative w-full h-full flex-1">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentImageIndex}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="relative w-full h-full"
                  >
                    <Image
                      src={selectedImage}
                      alt="Gallery Image"
                      fill
                      sizes="95vw"
                      className="object-contain p-4 md:p-8"
                      priority
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Lightbox Controls */}
              <button
                onClick={handlePreviousImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/10 transition-all hover:scale-110"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-8 w-8" />
              </button>

              <button
                onClick={handleNextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/10 transition-all hover:scale-110"
                aria-label="Next image"
              >
                <ChevronRight className="h-8 w-8" />
              </button>

              {/* Caption */}
              <div className="absolute bottom-8 left-0 right-0 text-center z-50 pointer-events-none">
                <div className="inline-block px-6 py-3 rounded-2xl bg-black/50 backdrop-blur-md border border-white/10 pointer-events-auto">
                  <p className="text-white font-medium text-lg">
                    {galleryImages[currentImageIndex].alt.split(" - ")[0]}
                  </p>
                  <p className="text-white/60 text-sm mt-1">
                    {currentImageIndex + 1} / {galleryImages.length}
                  </p>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}

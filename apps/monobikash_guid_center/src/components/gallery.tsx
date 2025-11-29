"use client";

import React, { useState, useCallback } from "react";
import Image from "next/image";
import { X, Play, ChevronLeft, ChevronRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogClose,
} from "@t2p-admin/ui/components/dialog";
import { Button } from "@t2p-admin/ui/components/button";

const galleryImages = [
  {
    id: 1,
    url: "https://scontent.fixb4-1.fna.fbcdn.net/v/t39.30808-6/484172548_1093199516157847_8757313203464467693_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=0DCaYK2_cV4Q7kNvwHp53HE&_nc_oc=Adkq0cHg6gLTwzgz0JoGc7j3ZWARjb7dqM7YH5V7yYUDDmYxps7DDkJ-2acU3M83uRo&_nc_zt=23&_nc_ht=scontent.fixb4-1.fna&_nc_gid=sLYPNi6gpnXZGuSfT1lYiw&oh=00_Afgh3waqOxQAlufkvUdqUqSdsYPQD_BLaXocvYNl-2uh9A&oe=6930F549",
    alt: "Students Activity - Manobikash Guide Centre",
  },
  {
    id: 2,
    url: "https://scontent.fixb4-1.fna.fbcdn.net/v/t39.30808-6/485951137_1100052822139183_794776518194228385_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=Bg6i0RVFEuUQ7kNvwESC9iV&_nc_oc=Adl11lSuEqtN75MZcHBXx4miLpz-i_KJM6ZFle4DT6Z1uv-ctECgydpQCClhJH4n9sA&_nc_zt=23&_nc_ht=scontent.fixb4-1.fna&_nc_gid=YriTlhCrtGHVPSC4lr3N5A&oh=00_AfjWNQkxek2YwW_H5saBokcphhGweig46PI9_cmHVrkJDQ&oe=69310711",
    alt: "Classroom Session - Manobikash Guide Centre",
  },
  {
    id: 3,
    url: "https://scontent.fixb4-1.fna.fbcdn.net/v/t39.30808-6/485962808_1100052845472514_3789085118709553466_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=09dxOH5n0IMQ7kNvwEqReJU&_nc_oc=AdmmkBedqBVU8Bz-Lv8OvUA-dRQMz6SADUsEYuIsTErIWG3_173Qdsacqrq-HsGYle0&_nc_zt=23&_nc_ht=scontent.fixb4-1.fna&_nc_gid=wSKjyeyEq5P6FqkFRlqx5Q&oh=00_Afjv2WbqsGuai3O1ENtuw3PmswgoECKvjnX34JVluOlHnw&oe=6931058C",
    alt: "Achievement Ceremony - Manobikash Guide Centre",
  },
  {
    id: 4,
    url: "https://scontent.fixb4-1.fna.fbcdn.net/v/t39.30808-6/491988221_1122926866518445_5625229780507695187_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=IHDTfT89BTAQ7kNvwH9DlIx&_nc_oc=Adm318i7thcqQsGYPrwv_K0QDyxfSPc5yb4zSWGUwPtAxByRraDZordKMAySskxF-Aw&_nc_zt=23&_nc_ht=scontent.fixb4-1.fna&_nc_gid=LbxBKEscl_qoPCh_Q2sSlA&oh=00_AfgVi0Xdokb1Kz8M0XB5PUI1App2OsVq1btYNATxxZu4Pw&oe=693107ED",
    alt: "Student Success - Manobikash Guide Centre",
  },
  {
    id: 5,
    url: "https://scontent.fixb4-1.fna.fbcdn.net/v/t39.30808-6/494764473_1134745802003218_7293921621459059810_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=sSlTxQbk9XEQ7kNvwGUJHRF&_nc_oc=Adm8faifQsRH9Fryty2eAxmdFyk6k_ksosOV_Vd0TNTbuHvX_2ttrfMnUPtAkFXk1S0&_nc_zt=23&_nc_ht=scontent.fixb4-1.fna&_nc_gid=olmo_agexIWZr4POp9YqZA&oh=00_AfjvprjVkCzczdPr2WXPWfZdcWzpx50bRA2gg56ErS9WWA&oe=69311131",
    alt: "Learning Environment - Manobikash Guide Centre",
  },
  {
    id: 6,
    url: "https://scontent.fixb4-1.fna.fbcdn.net/v/t39.30808-6/518304557_1186640720147059_5291493154162694086_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=schD2c4fgngQ7kNvwGJVmfH&_nc_oc=AdmCjq5mlHDvVpuqnHXfvK7rBsg9GaELZx6vl_xzo7PqYYG0F1bKhKG0bOBNUguaTsM&_nc_zt=23&_nc_ht=scontent.fixb4-1.fna&_nc_gid=KDkfKgUJkkWgQMvkTHaf9g&oh=00_Afj1nzHTR_dBjYFBaXkoKeYmcrGKJmxFo2WVqYf6cql6pA&oe=693123BE",
    alt: "Interactive Class - Manobikash Guide Centre",
  },
  {
    id: 7,
    url: "https://scontent.fixb4-1.fna.fbcdn.net/v/t39.30808-6/531930436_1215959760548488_3783783490103317218_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=q9dt3-HCXTsQ7kNvwF-Vk3w&_nc_oc=Adkj75O-PC7jStZgipHbWD1oHP8zqH_AXh_fROFrdXlmWXTfcRxCpNXX48yHt5HTm1k&_nc_zt=23&_nc_ht=scontent.fixb4-1.fna&_nc_gid=NDY0dgKel6wWNMWZolC7yQ&oh=00_AfgSkviZ5z3wUa4tLi0MQbEZSCfWlIJBrBftP7utWbt6Tw&oe=693102D9",
    alt: "Study Group - Manobikash Guide Centre",
  },
  {
    id: 8,
    url: "https://scontent.fixb4-1.fna.fbcdn.net/v/t39.30808-6/484109992_1093199592824506_5549970847149146677_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=HzZJ_C5oe6YQ7kNvwFVJsGS&_nc_oc=AdkzqXjmaOnHFGXoScLkcf9pIUEkK7uSqiP9Q1-oaQQatD3Lpc6wSO4gxNeefOKZhJM&_nc_zt=23&_nc_ht=scontent.fixb4-1.fna&_nc_gid=FrnTP6mdMnQFDoJM6Tb4kw&oh=00_AfiecSDsoiwDGifjYMF62t-1UtZMygeELtMwAe-OkfKn3w&oe=693129B3",
    alt: "Educational Event - Manobikash Guide Centre",
  },
  {
    id: 9,
    url: "https://scontent.fixb4-1.fna.fbcdn.net/v/t39.30808-6/482060532_1087986810012451_5663149904587740984_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=Dv3NQ9EfK2oQ7kNvwH84lcw&_nc_oc=AdkhVTGSdQ2Cr09uEqiLQ4Jd3bt0d-016YEKFVqSnEqSbiRuSLZZs3CxgtUDlKwUjzQ&_nc_zt=23&_nc_ht=scontent.fixb4-1.fna&_nc_gid=5GbQ5V34DAVr0XyaG1dfow&oh=00_AfiJdB7xcYWjxcf7dHigp0w0RvWezGDu8AMP3hYBz0bANQ&oe=6930FEA7",
    alt: "Campus Life - Manobikash Guide Centre",
  },
  {
    id: 10,
    url: "https://scontent.fixb4-1.fna.fbcdn.net/v/t39.30808-6/482218466_1087986750012457_2011831892574517485_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=7DJUN6D-mnkQ7kNvwGjhFa7&_nc_oc=Adkl3UdL_DBQU1co2noWi7bZuaKtyg3HiHF8B-BYREOlOeTcj5zV_zk7tp2HfhUa-OY&_nc_zt=23&_nc_ht=scontent.fixb4-1.fna&_nc_gid=903nPHiB9B8stzAh9w0dCw&oh=00_AfiQ3UKErdDHp_hdoP5RG24EOA3WXiNQ4TEK-A3Nn9YPxQ&oe=69312276",
    alt: "Special Events - Manobikash Guide Centre",
  },
];

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"photos" | "videos">("photos");
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [carouselIndex, setCarouselIndex] = useState<number>(0);

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
      }, 4000); // Change image every 4 seconds

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
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, selectedImage, handlePreviousImage, handleNextImage]);

  const goToSlide = (index: number) => {
    setCarouselIndex(index);
  };

  const goToPreviousSlide = () => {
    setCarouselIndex(
      (prev) => (prev - 1 + galleryImages.length) % galleryImages.length
    );
  };

  const goToNextSlide = () => {
    setCarouselIndex((prev) => (prev + 1) % galleryImages.length);
  };

  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our <span className="text-primary">Gallery</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Explore our vibrant community and educational journey through these
            moments
          </p>
        </div>

        {/* Custom Tab Buttons */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex h-10 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground">
            <Button
              variant={activeTab === "photos" ? "default" : "ghost"}
              onClick={() => setActiveTab("photos")}
              className="rounded-md px-6"
            >
              Photos
            </Button>
            <Button
              variant={activeTab === "videos" ? "default" : "ghost"}
              onClick={() => setActiveTab("videos")}
              className="rounded-md px-6"
            >
              Videos
            </Button>
          </div>
        </div>

        {/* Photos Carousel - Full Width Auto-Swipe */}
        {activeTab === "photos" && (
          <div className="relative w-full max-w-full mx-auto space-y-6">
            {/* Main Carousel Container */}
            <div className="relative overflow-hidden rounded-3xl shadow-2xl h-[400px] md:h-[500px] lg:h-[600px]">
              {/* Images */}
              <div className="relative w-full h-full">
                {galleryImages.map((image, index) => (
                  <div
                    key={image.id}
                    className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                      index === carouselIndex
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-105"
                    }`}
                  >
                    <Image
                      src={image.url}
                      alt={image.alt}
                      fill
                      sizes="100vw"
                      className="object-cover"
                      priority={index === 0}
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  </div>
                ))}
              </div>

              {/* Image Category Badge */}
              <div className="absolute top-6 left-6 md:top-8 md:left-8 z-20">
                <div className="inline-flex items-center px-6 py-2.5 rounded-full bg-primary/90 backdrop-blur-sm">
                  <span className="text-white text-sm md:text-base font-bold uppercase tracking-wider">
                    {galleryImages[carouselIndex].alt.split(" - ")[0]}
                  </span>
                </div>
              </div>

              {/* Image Title and Description */}
              <div className="absolute bottom-8 left-8 right-8 md:bottom-12 md:left-12 md:right-12 text-white z-20">
                <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold drop-shadow-2xl mb-3 md:mb-4">
                  Interactive Learning Experience
                </h3>
                <p className="text-sm md:text-base lg:text-lg text-white/90 drop-shadow-lg max-w-3xl">
                  Engaging students through interactive standing sessions that
                  promote active participation and collaborative learning
                </p>
              </div>

              {/* Previous Button */}
              <button
                onClick={goToPreviousSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-30 rounded-full bg-white/90 hover:bg-white p-3 md:p-4 transition-all shadow-xl group"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-5 w-5 md:h-6 md:w-6 text-gray-800 group-hover:scale-110 transition-transform" />
              </button>

              {/* Next Button */}
              <button
                onClick={goToNextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-30 rounded-full bg-white/90 hover:bg-white p-3 md:p-4 transition-all shadow-xl group"
                aria-label="Next image"
              >
                <ChevronRight className="h-5 w-5 md:h-6 md:w-6 text-gray-800 group-hover:scale-110 transition-transform" />
              </button>

              {/* Dots Indicator */}
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2 md:hidden">
                {galleryImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`transition-all duration-300 rounded-full ${
                      index === carouselIndex
                        ? "bg-white w-8 h-2"
                        : "bg-white/50 w-2 h-2 hover:bg-white/75"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Thumbnail Grid with Labels */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
              {galleryImages.map((image, index) => {
                const label = image.alt.split(" - ")[0];
                return (
                  <button
                    key={image.id}
                    onClick={() => goToSlide(index)}
                    className={`group relative overflow-hidden rounded-2xl transition-all duration-300 aspect-[4/3] ${
                      index === carouselIndex
                        ? "ring-4 ring-primary shadow-2xl"
                        : "ring-2 ring-gray-200 hover:ring-primary/50 hover:shadow-xl"
                    }`}
                  >
                    {/* Thumbnail Image */}
                    <Image
                      src={image.url}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />

                    {/* Label Badge */}
                    <div className="absolute bottom-3 left-3 right-3 z-10">
                      <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/90 backdrop-blur-sm">
                        <span className="text-white text-xs md:text-sm font-bold">
                          {label}
                        </span>
                      </div>
                    </div>

                    {/* Active Indicator */}
                    {index === carouselIndex && (
                      <div className="absolute inset-0 border-4 border-primary rounded-2xl pointer-events-none" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Videos Grid */}
        {activeTab === "videos" && (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="text-center space-y-4">
              <div className="mx-auto w-24 h-24 rounded-full bg-muted flex items-center justify-center">
                <Play className="w-12 h-12 text-muted-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">No Videos Available</h3>
              <p className="text-muted-foreground max-w-md">
                We&apos;re working on bringing you exciting video content soon. Stay tuned!
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Modal Dialog */}
      <Dialog open={open} onOpenChange={handleClose}>
        <DialogContent className="max-w-7xl w-[95vw] h-[95vh] p-0 bg-black/95 border-none">
          <DialogClose className="absolute top-4 right-4 z-50 rounded-full bg-white/10 hover:bg-white/20 p-2 transition-colors backdrop-blur-sm">
            <X className="h-6 w-6 text-white" />
          </DialogClose>
          {selectedImage && (
            <div className="relative w-full h-full flex items-center justify-center p-4">
              <Image
                src={selectedImage}
                alt="Gallery Image"
                fill
                sizes="95vw"
                className="object-contain"
                priority
              />
              {/* Previous Button */}
              <button
                onClick={handlePreviousImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-50 rounded-full bg-white/10 hover:bg-white/20 p-3 transition-all backdrop-blur-sm group"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-8 w-8 text-white group-hover:scale-110 transition-transform" />
              </button>
              {/* Next Button */}
              <button
                onClick={handleNextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-50 rounded-full bg-white/10 hover:bg-white/20 p-3 transition-all backdrop-blur-sm group"
                aria-label="Next image"
              >
                <ChevronRight className="h-8 w-8 text-white group-hover:scale-110 transition-transform" />
              </button>
              {/* Image Counter */}
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-50 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <span className="text-white text-sm font-medium">
                  {currentImageIndex + 1} / {galleryImages.length}
                </span>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}

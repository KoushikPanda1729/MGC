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
    url: "/images/debate_competition.jpg",
    alt: "Debate Competition - Young Guru Academy",
  },
  {
    id: 2,
    url: "/images/public_speaking.jpg",
    alt: "Public Speaking - Young Guru Academy",
  },
  {
    id: 3,
    url: "/images/q&a_session.jpg",
    alt: "Q & A Session - Young Guru Academy",
  },
  {
    id: 4,
    url: "/images/standing_session.jpg",
    alt: "Standing Session - Young Guru Academy",
  },
];

const galleryVideos = [
  {
    id: 1,
    youtubeId: "RspV9xg1T44",
    thumbnail: "https://img.youtube.com/vi/RspV9xg1T44/hqdefault.jpg",
  },
  {
    id: 2,
    youtubeId: "QQmW7IUcl50",
    thumbnail: "https://img.youtube.com/vi/QQmW7IUcl50/hqdefault.jpg",
  },
  {
    id: 3,
    youtubeId: "sju21iJBuyE",
    thumbnail: "https://img.youtube.com/vi/sju21iJBuyE/hqdefault.jpg",
  },
  {
    id: 4,
    youtubeId: "NOuL104PkKc",
    thumbnail: "https://img.youtube.com/vi/NOuL104PkKc/hqdefault.jpg",
    url: "https://www.youtube.com/watch?v=NOuL104PkKc",
  },
  {
    id: 5,
    youtubeId: "txnt8rRYsUA",
    thumbnail: "https://img.youtube.com/vi/txnt8rRYsUA/hqdefault.jpg",
  },
  {
    id: 6,
    youtubeId: "y9K4QxX83sI",
    thumbnail: "https://img.youtube.com/vi/y9K4QxX83sI/hqdefault.jpg",
  },
];

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"photos" | "videos">("photos");
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [playingVideoId, setPlayingVideoId] = useState<string | null>(null);
  const [carouselIndex, setCarouselIndex] = useState<number>(0);
  const [videoTitles, setVideoTitles] = useState<{ [key: string]: string }>({});

  const handleVideoClick = (youtubeId: string) => {
    setPlayingVideoId(youtubeId);
  };

  const handleClose = () => {
    setOpen(false);
    setPlayingVideoId(null);
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

  // Fetch YouTube video titles
  React.useEffect(() => {
    const fetchVideoTitles = async () => {
      const titles: { [key: string]: string } = {};

      for (const video of galleryVideos) {
        try {
          // Use oEmbed API to fetch video title
          const response = await fetch(
            `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${video.youtubeId}&format=json`
          );
          const data = await response.json();
          titles[video.youtubeId] = data.title;
        } catch (error) {
          console.error(`Failed to fetch title for ${video.youtubeId}:`, error);
          titles[video.youtubeId] = "Untitled Video";
        }
      }

      setVideoTitles(titles);
    };

    fetchVideoTitles();
  }, []);

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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {galleryVideos.map((video, index) => (
              <div
                key={video.id}
                className="group relative overflow-hidden rounded-sm shadow-sm hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-primary/20 via-blue-500/10 to-cyan-500/20"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div className="relative">
                  {/* Video Thumbnail or Player */}
                  {playingVideoId === video.youtubeId ? (
                    <div className="aspect-video">
                      <iframe
                        width="100%"
                        height="100%"
                        src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
                        title={videoTitles[video.youtubeId] || "YouTube Video"}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        className="rounded-t-3xl w-full h-full"
                      ></iframe>
                    </div>
                  ) : (
                    <div
                      className="cursor-pointer relative aspect-video"
                      onClick={() => handleVideoClick(video.youtubeId)}
                    >
                      <Image
                        src={video.thumbnail}
                        alt={videoTitles[video.youtubeId] || "YouTube Video"}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover rounded-t-3xl"
                      />
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/30 via-blue-500/20 to-transparent group-hover:from-cyan-400/40 transition-all duration-300" />

                      {/* Play Button */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-white rounded-full p-4 group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                          <Play className="w-6 h-6 text-primary fill-primary" />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Video Info Section - Always Visible */}
                  {videoTitles[video.youtubeId] && (
                    <div className="p-4 md:p-5 bg-gradient-to-br from-white/50 to-white/30 backdrop-blur-sm rounded-b-3xl">
                      <h4 className="text-foreground text-sm md:text-base font-bold mb-2 line-clamp-2">
                        {videoTitles[video.youtubeId]}
                      </h4>
                      <div className="flex items-center gap-3 text-muted-foreground text-xs md:text-sm">
                        <div className="flex items-center gap-1.5">
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                            />
                          </svg>
                          <span className="font-medium">Practice Session</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          <span className="font-medium">18:45</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
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

"use client";

import React, { useEffect, useMemo, useState } from "react";
import { Button } from "@t2p-admin/ui/components/button";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@t2p-admin/ui/components/sheet";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./logo";

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const navLinks = useMemo(
    () => [
      { href: "#home", label: "Home" },
      { href: "#our-brands", label: "Our Brands" },
      { href: "#testimonial", label: "Testimonials" },
      { href: "/gallery", label: "Gallery" },
      { href: "#about", label: "About" },
      { href: "#faqs", label: "FAQs" },
      // { href: "/careers", label: "Careers" },
    ],
    []
  );

  const [activeSection, setActiveSection] = useState<string>("");
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  useEffect(() => {
    if (!isHome) return;

    const handleScroll = () => {
      let current = "";
      for (const link of navLinks) {
        if (link.href.startsWith("/")) continue;

        const section = document.querySelector(link.href);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 80 && rect.bottom > 80) {
            current = link.href;
            break;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [navLinks, isHome]);

  const linkClass = useMemo(
    () => (href: string) => {
      // For full routes like /careers, check pathname
      let isActive = false;

      if (href.startsWith("/")) {
        // Route-based links (e.g., /careers)
        isActive = pathname === href;
      } else {
        // Hash-based links (e.g., #home, #about)
        // Only show as active if we're on the home page
        isActive = isHome && activeSection === href;
      }

      return `text-sm font-medium transition-colors ${
        isActive
          ? "text-primary font-semibold"
          : "text-muted-foreground hover:text-foreground"
      }`;
    },
    [activeSection, pathname, isHome]
  );

  const getHref = (hash: string) => {
    // For full routes like /careers, return as-is
    if (hash.startsWith("/")) return hash;
    // For hash links, prepend / if not on home page
    return isHome ? hash : `/${hash}`;
  };

  return (
    <>
      {/* Announcement Banner */}
      <div className="fixed top-0 left-0 w-full z-[20] bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-3 px-4 shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-3">
          <div className="flex items-center gap-2">
            <svg
              className="w-5 h-5 animate-pulse"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
            </svg>
            <span className="text-sm sm:text-base font-semibold">
              {/* Mobile view */}
              <span className="sm:hidden">
                Empowering 50K+ Students Nationwide
              </span>
              {/* Desktop view */}
              <span className="hidden sm:inline">
                Empowering 10,000+ Students with Quality Education | Explore Our
                Brands
              </span>
            </span>
          </div>
          <Link
            href="#our-brands"
            className="hidden sm:inline-flex items-center gap-1 px-3 py-1 bg-white/20 hover:bg-white/30 rounded-full text-xs font-medium transition-colors backdrop-blur-sm"
          >
            Learn More
            <svg
              className="w-3 h-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`fixed left-0 w-full z-50 transition-all duration-300 top-[55px]`}
      >
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between px-4 py-2 bg-background/70 backdrop-blur-md border border-border shadow-sm rounded-full">
            {/* Brand */}
            <Logo />

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center gap-6 px-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={getHref(link.href)}
                  className={linkClass(link.href)}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Mobile Hamburger */}
            <div className="flex md:hidden">
              <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent
                  side="right"
                  className="w-full sm:max-w-sm h-full p-6 flex flex-col items-center justify-start bg-background z-[100] backdrop-blur-lg backdrop-brightness-90"
                >
                  <SheetHeader className="w-full items-center">
                    <SheetTitle className="text-2xl font-bold text-center">
                      <span className="text-primary">Manobikash </span> GUIDE
                      Centre
                    </SheetTitle>
                  </SheetHeader>

                  {/* Mobile Nav Links */}
                  <div className="flex flex-col gap-4 mt-6 w-full max-w-xs text-center">
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={getHref(link.href)}
                        className={linkClass(link.href)}
                        onClick={() => setIsSheetOpen(false)}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

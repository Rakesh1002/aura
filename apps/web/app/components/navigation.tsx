"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const threshold = window.innerHeight * 0.05;
      setScrolled(scrollY > threshold);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-4 border-b transition-all duration-300 ${
        scrolled 
          ? "bg-[#0d0015]/70 backdrop-blur-xl border-white/5" 
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-3 items-center">
        {/* Logo - Left */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-pop-pink to-pop-purple flex items-center justify-center">
            <span className="text-base sm:text-xl">✦</span>
          </div>
          <span className="text-xl sm:text-2xl font-bold font-[family-name:var(--font-syne)]">aura</span>
        </Link>
        
        {/* Nav Links - Center */}
        <div className="hidden md:flex items-center justify-center gap-6 lg:gap-8 text-sm font-medium text-white/70 font-[family-name:var(--font-jakarta)]">
          <a href="/#vibes" className="hover:text-white transition-colors">Vibes</a>
          <a href="/#features" className="hover:text-white transition-colors">Features</a>
          <a href="/#faq" className="hover:text-white transition-colors">FAQ</a>
        </div>
        
        {/* CTA Button - Right */}
        <div className="flex justify-end">
          <a href="/#download" className="btn-primary text-xs sm:text-sm py-2 px-4 sm:py-3 sm:px-6">
            <span>Download App</span>
          </a>
        </div>
      </div>
    </nav>
  );
}

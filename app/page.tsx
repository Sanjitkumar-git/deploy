"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import AnimatedBackground from "@/components/AnimatedBackground";
import Intro from "@/components/Intro";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Achievements from "@/components/Achievements";
import AppsSection from "@/components/AppsSection";
import ReviewSection from "@/components/ReviewSection";
import Footer from "@/components/Footer";

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);

  // Prevent scrolling during intro
  useEffect(() => {
    if (showIntro) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showIntro]);

  return (
    <main className="min-h-screen relative overflow-hidden text-white selection:bg-cyan-500/30">
      <AnimatedBackground />

      <AnimatePresence mode="wait">
        {showIntro && <Intro onComplete={() => setShowIntro(false)} />}
      </AnimatePresence>

      {!showIntro && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Header/Nav */}
          <header className="fixed top-0 left-0 right-0 z-40 bg-black/50 backdrop-blur-md border-b border-white/5">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_10px_#22d3ee]"></span>
                <span className="font-bold tracking-tight text-white">the Rickyverse_</span>
              </div>
              <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-400">
                <a href="#experience" className="hover:text-white transition-colors">Experience</a>
                <a href="#apps" className="hover:text-white transition-colors">Apps</a>
                <a href="#reviews" className="hover:text-white transition-colors">Reviews</a>
              </nav>
            </div>
          </header>

          <Hero />
          
          <div id="apps">
            <AppsSection />
          </div>

          <Experience />
          
          <Achievements />
          
          <div id="reviews">
            <ReviewSection />
          </div>

          <Footer />
        </motion.div>
      )}
    </main>
  );
}

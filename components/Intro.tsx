"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Intro({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500); // Wait a bit after 100%
          return 100;
        }
        return prev + 2; // Adjust speed here
      });
    }, 20);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -50, transition: { duration: 0.8, ease: "easeInOut" } }}
    >
      <motion.div
        className="text-6xl font-black tracking-tighter mb-8"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
          SK
        </span>
      </motion.div>

      <div className="w-64 h-1 bg-gray-800 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-cyan-400 to-purple-600"
          style={{ width: `${progress}%` }}
        />
      </div>
      <p className="mt-4 text-xs text-gray-500 font-mono">INITIALIZING RICKYVERSE...</p>
    </motion.div>
  );
}

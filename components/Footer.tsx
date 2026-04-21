"use client";

import { motion } from "framer-motion";
import { Linkedin, Mail } from "lucide-react";
import resumeData from "@/src/resume.json";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-black/40 backdrop-blur-xl mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 p-[2px]">
               <div className="w-full h-full rounded-full bg-black flex items-center justify-center overflow-hidden">
                  <span className="text-2xl font-bold text-white">SK</span>
               </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">{resumeData.basics.name}</h2>
              <p className="text-gray-400 text-sm">8th semester · B.Tech · Full‑stack Developer</p>
            </div>
          </div>

          <div className="flex gap-4">
             <a 
               href={`mailto:${resumeData.basics.email}`}
               className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white transition-colors border border-white/10"
             >
               <Mail className="w-4 h-4" /> Email
             </a>
             <a 
               href={resumeData.basics.linkedin}
               target="_blank"
               rel="noopener noreferrer"
               className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#0077b5]/20 hover:bg-[#0077b5]/30 text-[#0077b5] hover:text-white transition-colors border border-[#0077b5]/30"
             >
               <Linkedin className="w-4 h-4" /> LinkedIn
             </a>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-white/5 text-center text-gray-600 text-sm">
          <p>© 2025 {resumeData.basics.name} · Made in India · The Rickyverse keeps expanding 🚀</p>
        </div>
      </div>
    </footer>
  );
}

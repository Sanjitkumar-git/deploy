"use client";

import { motion } from "framer-motion";
import resumeData from "@/src/resume.json";
import { Trophy, Star, Award, Code } from "lucide-react";

export default function Achievements() {
  return (
    <section className="py-24 px-6 bg-black/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Achievements & Certifications</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Milestones and recognitions from my journey.
          </p>
        </motion.div>

        {/* Top Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {resumeData.achievements.map((ach, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-to-br from-gray-900 to-gray-950 p-6 rounded-2xl border border-white/5 text-center hover:border-cyan-500/30 transition-colors"
            >
              <h3 className="text-3xl md:text-4xl font-black text-white mb-1">{ach.metric}</h3>
              <p className="text-xs text-cyan-400 font-bold uppercase tracking-wider mb-2">{ach.title}</p>
              <p className="text-xs text-gray-500">{ach.context}</p>
            </motion.div>
          ))}
          {/* Fillers for grid balance if needed, or derived from skills */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-950 p-6 rounded-2xl border border-white/5 text-center">
             <h3 className="text-3xl md:text-4xl font-black text-white mb-1">{resumeData.skills.length}</h3>
             <p className="text-xs text-purple-400 font-bold uppercase tracking-wider mb-2">Skill Categories</p>
             <p className="text-xs text-gray-500">Across Mobile & Web</p>
          </div>
          <div className="bg-gradient-to-br from-gray-900 to-gray-950 p-6 rounded-2xl border border-white/5 text-center">
             <h3 className="text-3xl md:text-4xl font-black text-white mb-1">{resumeData.projects.length}</h3>
             <p className="text-xs text-emerald-400 font-bold uppercase tracking-wider mb-2">Major Apps</p>
             <p className="text-xs text-gray-500">Deployed & Live</p>
          </div>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {resumeData.certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-start gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
            >
              <div className="p-3 rounded-xl bg-cyan-500/20 text-cyan-400">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-1">{cert.title}</h4>
                <p className="text-sm text-gray-400">{cert.issuer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import resumeData from "@/src/resume.json";
import { Briefcase, Calendar, MapPin } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Experience & Projects</h2>
          <div className="h-1 w-20 bg-cyan-500 rounded-full"></div>
        </motion.div>

        <div className="space-y-12">
          {/* Projects as Experience since resume lacks corporate history */}
          {resumeData.projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative pl-8 md:pl-0"
            >
              {/* Timeline Line for Desktop */}
              <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-[1px] bg-white/10 -translate-x-1/2"></div>
              
              <div className={`md:flex items-center justify-between gap-10 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Date/Role Side */}
                <div className="md:w-1/2 mb-4 md:mb-0 text-left md:text-right">
                   <div className={`flex flex-col ${index % 2 === 0 ? 'md:items-start md:text-left' : 'md:items-end'}`}>
                      <span className="inline-block px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-mono mb-2 border border-cyan-500/20">
                        {project.techStack.join(" • ")}
                      </span>
                      <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 font-medium">{project.role}</p>
                   </div>
                </div>

                {/* Center Dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-gray-800 border-2 border-cyan-500 rounded-full -translate-x-[5px] md:-translate-x-1/2 z-10 group-hover:scale-125 transition-transform shadow-[0_0_10px_rgba(6,182,212,0.5)]"></div>

                {/* Content Side */}
                <div className="md:w-1/2">
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-all hover:border-cyan-500/30 shadow-lg">
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                      {project.description}
                    </p>
                    <ul className="space-y-2">
                      {project.bullets.map((bullet, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                          <span className="text-cyan-500 mt-1">▹</span>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                    {project.link && (
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-block mt-4 text-xs font-bold text-white border-b border-cyan-500 pb-0.5 hover:text-cyan-400 transition-colors"
                      >
                        VIEW PROJECT
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

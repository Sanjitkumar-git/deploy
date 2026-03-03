"use client";

import { motion } from "framer-motion";
import { Star, Download, Globe, Smartphone, Monitor, Shield, HeartPulse, MessageSquare } from "lucide-react";
import Image from "next/image";

// Helper for star rating
const Rating = ({ stars }: { stars: number }) => (
  <div className="flex text-yellow-400 text-sm tracking-widest">
    {Array.from({ length: 5 }).map((_, i) => (
      <span key={i}>{i < Math.floor(stars) ? "★" : "☆"}</span>
    ))}
  </div>
);

export default function AppsSection() {
  const apps = [
    {
      id: "notedeck",
      name: "NoteDeck Cv",
      tagline: "Generate notes, PPTs & resumes with AI",
      badge: "✨ notes·ppt·resume",
      desc: "Your AI co‑pilot: polished notes, stunning PPTs, and tailored resumes — all in one place.",
      rating: 4.9,
      reviews: "1.3K",
      features: [
        { icon: "🧠", text: "AI smart notes" },
        { icon: "📊", text: "PPT generator" },
        { icon: "📄", text: "Resume builder" },
        { icon: "☁️", text: "Cloud sync" },
      ],
      links: [
        { label: "web app", url: "https://notedeckcv.netlify.app", type: "web" },
        { label: "android", url: "notesaigenerator/NoteDeckCv.apk", type: "android" },
        { label: "desktop", action: "alert", type: "desktop" },
      ],
      color: "blue",
      version: "2.1.0",
      size: "48 MB",
    },
    {
      id: "safety",
      name: "Safety Alert App",
      tagline: "emergency companion · SOS",
      badge: "top safety",
      desc: "One-tap SOS with live location. Instantly alert trusted contacts.",
      rating: 4.9,
      reviews: "1.2K",
      features: [
        { icon: "🚨", text: "Instant SOS" },
        { icon: "👥", text: "Emergency contacts" },
        { icon: "🛡️", text: "End-to-end encrypted" },
      ],
      links: [
        { label: "android app", url: "https://drive.google.com/file/d/17iZN1nPNNmYzLNb2eu3TOfB_3gVFcWXj/view?usp=sharing", type: "android" },
      ],
      color: "red",
      version: "1.0.0",
      size: "60 MB",
    },
    {
      id: "medico",
      name: "Medico",
      tagline: "AI health scanner · PDF reports",
      badge: "new release",
      desc: "Detect health conditions using on‑device ML. Shareable PDF reports.",
      rating: 4.5,
      reviews: "500+",
      features: [
        { icon: "🧠", text: "TFLite detection" },
        { icon: "📄", text: "PDF generator" },
        { icon: "❤️", text: "Multi‑condition" },
      ],
      links: [
        { label: "web", action: "alert", type: "web" },
        { label: "android", url: "https://drive.google.com/file/d/1pGRd184OL_IVy7SjDoCA0jH9KaEuCIIB/view?usp=sharing", type: "android" },
        { label: "desktop", action: "alert", type: "desktop" },
      ],
      color: "amber",
      version: "1.0.0",
      size: "127 MB",
    },
    {
      id: "chetchat",
      name: "ChetChat",
      tagline: "messaging · groups · privacy",
      badge: "beta",
      desc: "Full‑featured chat with group conversations, press & hold to forward/reply/delete, and privacy controls.",
      rating: 4.8,
      reviews: "Beta",
      features: [
        { icon: "👥", text: "Unlimited groups" },
        { icon: "👆", text: "Press & hold actions" },
        { icon: "🔒", text: "Hidden private lock" },
        { icon: "📞", text: "Video/Audio calls" },
      ],
      links: [
        { label: "web app", url: "https://chetchat.netlify.app/", type: "web" },
        { label: "android apk", url: "ChetChat/ChetChat.apk", type: "android" },
      ],
      color: "indigo",
      version: "2.0-beta",
      size: "43 MB",
    },
  ];

  const handleAction = (action: string) => {
    if (action === "alert") {
      alert("Coming soon!");
    }
  };

  return (
    <section className="py-24 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-10">
           <Smartphone className="w-8 h-8 text-white" />
           <h2 className="text-3xl font-bold text-white">The Rickyverse Apps</h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-10">
          {apps.map((app) => (
            <motion.div
              key={app.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 hover:border-cyan-500/30 hover:-translate-y-1 transition-all shadow-2xl group relative overflow-hidden"
            >
              {/* Top Gradient Line */}
              <div className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-${app.color}-400 via-purple-500 to-cyan-400`}></div>

              <div className="flex gap-5 mb-6">
                <div className="w-20 h-20 rounded-3xl bg-gray-900 border border-white/10 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                    {/* Placeholder Icon */}
                    <span className="text-3xl">📱</span>
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className={`text-2xl font-extrabold text-${app.color}-400`}>{app.name}</h3>
                    <span className="text-[0.65rem] px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300 uppercase tracking-wider">
                      {app.badge}
                    </span>
                  </div>
                  <p className="text-sm font-medium text-gray-400 mt-1">{app.tagline}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <Rating stars={app.rating} />
                    <span className="text-lg font-bold text-white">{app.rating}</span>
                    <span className="text-xs text-gray-500">({app.reviews})</span>
                  </div>
                </div>
              </div>

              <p className="text-gray-300 mb-6 font-light leading-relaxed">{app.desc}</p>

              <div className="grid grid-cols-2 gap-3 mb-8">
                {app.features.map((feat, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-gray-400">
                    <span>{feat.icon}</span> {feat.text}
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 mb-4">
                {app.links.map((link, i) => (
                  <a
                    key={i}
                    href={link.url || "#"}
                    onClick={link.action ? (e) => { e.preventDefault(); handleAction(link.action!); } : undefined}
                    target={link.url ? "_blank" : undefined}
                    className={`px-5 py-2.5 rounded-full text-sm font-bold flex items-center gap-2 transition-all ${
                      link.type === "web" ? "bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-900/20" :
                      link.type === "android" ? "bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-900/20" :
                      "bg-white/5 border border-white/10 text-gray-400 hover:bg-white/10 cursor-not-allowed"
                    }`}
                  >
                    {link.type === "web" && <Globe className="w-4 h-4" />}
                    {link.type === "android" && <Smartphone className="w-4 h-4" />}
                    {link.type === "desktop" && <Monitor className="w-4 h-4" />}
                    {link.label}
                  </a>
                ))}
              </div>

              <div className="flex justify-between items-center text-xs text-gray-500 border-t border-white/5 pt-4">
                <span>v{app.version} · {app.size}</span>
                <span className="font-mono text-cyan-500/50">RICKYVERSE</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import {
  Globe,
  Smartphone,
  Monitor,
  Music,
  HeartPulse,
  Shield,
  MessageSquare,
} from "lucide-react";

// ⭐ Rating Component
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
      desc: "Your AI co-pilot: polished notes, stunning PPTs, and tailored resumes — all in one place.",
      rating: 4.9,
      reviews: "1.3K",
      features: ["AI smart notes", "PPT generator", "Resume builder", "Cloud sync"],
      links: [
        { label: "web app", url: "https://notedeckcv.netlify.app", type: "web" },
        { label: "android", url: "/notesaigenerator/NoteDeckCv.apk", type: "android" },
        { label: "desktop", action: "alert", type: "desktop" },
      ],
      color: "blue",
      icon: <MessageSquare />,
      version: "2.1.0",
      size: "48 MB",
    },

    {
      id: "musicverse",
      name: "MusicVerse",
      tagline: "Stream music · discover vibes",
      badge: "🎵 music player",
      desc: "Stream songs online with search, trending playlists, and smooth playback experience.",
      rating: 4.7,
      reviews: "800+",
      features: ["Online streaming", "Smart search", "Trending songs", "Fast UI"],
      links: [
        {
          label: "android app",
          url: "https://drive.google.com/drive/folders/1O6Dij76A85xanDT5U81cmvhyWgDDU-qg?usp=sharing",
          type: "android",
        },
      ],
      color: "purple",
      icon: <Music />,
      version: "1.0.0",
      size: "35 MB",
    },

    {
      id: "dermalens",
      name: "Derma Lens",
      tagline: "AI skin disease detector",
      badge: "🧬 healthcare AI",
      desc: "Detect skin diseases using AI with image input and generate instant reports.",
      rating: 4.6,
      reviews: "600+",
      features: ["Image detection", "AI model", "PDF reports", "Health insights"],
      links: [
        {
          label: "android app",
          url: "https://drive.google.com/drive/folders/1k4NvUT8DKfUUcQSvNsdkI4Fl8ulZI53K?usp=sharing",
          type: "android",
        },
      ],
      color: "emerald",
      icon: <HeartPulse />,
      version: "1.0.0",
      size: "95 MB",
    },

    {
      id: "safety",
      name: "Safety Alert App",
      tagline: "emergency companion · SOS",
      badge: "top safety",
      desc: "One-tap SOS with live location and instant alert system.",
      rating: 4.9,
      reviews: "1.2K",
      features: ["Instant SOS", "Emergency contacts", "Encrypted alerts"],
      links: [
        {
          label: "android app",
          url: "https://drive.google.com/file/d/17iZN1nPNNmYzLNb2eu3TOfB_3gVFcWXj/view?usp=sharing",
          type: "android",
        },
      ],
      color: "red",
      icon: <Shield />,
      version: "1.0.0",
      size: "60 MB",
    },

    {
      id: "medico",
      name: "Medico",
      tagline: "AI health scanner · PDF reports",
      badge: "new release",
      desc: "AI-powered health detection with shareable reports.",
      rating: 4.5,
      reviews: "500+",
      features: ["TFLite detection", "PDF reports", "Multi-condition"],
      links: [
        { label: "web", action: "alert", type: "web" },
        {
          label: "android",
          url: "https://drive.google.com/file/d/1pGRd184OL_IVy7SjDoCA0jH9KaEuCIIB/view?usp=sharing",
          type: "android",
        },
        { label: "desktop", action: "alert", type: "desktop" },
      ],
      color: "amber",
      icon: <HeartPulse />,
      version: "1.0.0",
      size: "127 MB",
    },

    {
      id: "chetchat",
      name: "ChetChat",
      tagline: "messaging · groups · privacy",
      badge: "beta",
      desc: "Chat app with groups, privacy lock, and calling features.",
      rating: 4.8,
      reviews: "Beta",
      features: ["Unlimited groups", "Hold actions", "Private lock", "Calls"],
      links: [
        { label: "web app", url: "https://chetchat.netlify.app/", type: "web" },
        { label: "android apk", url: "/ChetChat/ChetChat.apk", type: "android" },
      ],
      color: "indigo",
      icon: <MessageSquare />,
      version: "2.0-beta",
      size: "43 MB",
    },
  ];

  const handleAction = (action: string) => {
    if (action === "alert") alert("Coming soon!");
  };

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-10 flex items-center gap-3">
          <Smartphone /> Apps I've Built
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {apps.map((app) => (
            <motion.div
              key={app.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 hover:scale-[1.02] transition-all shadow-xl"
            >
              {/* Header */}
              <div className="flex gap-4 mb-4">
                <div className="w-16 h-16 flex items-center justify-center bg-black/40 rounded-xl text-white">
                  {app.icon}
                </div>

                <div>
                  <h3 className={`text-xl font-bold text-${app.color}-400`}>
                    {app.name}
                  </h3>
                  <p className="text-sm text-gray-400">{app.tagline}</p>

                  <div className="flex items-center gap-2 mt-1">
                    <Rating stars={app.rating} />
                    <span className="text-white text-sm">{app.rating}</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-300 text-sm mb-4">{app.desc}</p>

              {/* Features */}
              <div className="grid grid-cols-2 gap-2 text-sm text-gray-400 mb-4">
                {app.features.map((f, i) => (
                  <span key={i}>• {f}</span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-2 flex-wrap">
                {app.links.map((link, i) => (
                  <a
                    key={i}
                    href={link.url || "#"}
                    target="_blank"
                    onClick={
                      link.action
                        ? (e) => {
                            e.preventDefault();
                            handleAction(link.action!);
                          }
                        : undefined
                    }
                    className={`px-4 py-2 rounded-full text-sm font-semibold ${
                      link.type === "web"
                        ? "bg-blue-600"
                        : link.type === "android"
                        ? "bg-emerald-600"
                        : "bg-gray-600"
                    } text-white`}
                  >
                    {link.type === "web" && <Globe className="inline w-4 mr-1" />}
                    {link.type === "android" && <Smartphone className="inline w-4 mr-1" />}
                    {link.type === "desktop" && <Monitor className="inline w-4 mr-1" />}
                    {link.label}
                  </a>
                ))}
              </div>

              {/* Footer */}
              <div className="mt-4 text-xs text-gray-500 flex justify-between">
                <span>
                  v{app.version} · {app.size}
                </span>
                <span className="text-cyan-400">RICKYVERSE</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
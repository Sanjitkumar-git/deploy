"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, Star, User } from "lucide-react";

interface Review {
  id: string;
  name: string;
  initials: string;
  rating: number;
  text: string;
  app: string;
  color: string;
}

const initialReviews: Review[] = [
  {
    id: "1",
    name: "Tanya R.",
    initials: "TR",
    rating: 5,
    text: "NoteDeck Cv is unreal — built my resume and ppt in one go. The AI notes are actually useful. ✨",
    app: "NoteDeck Cv user",
    color: "bg-blue-600",
  },
  {
    id: "2",
    name: "Aryan S.",
    initials: "AS",
    rating: 4,
    text: "Medico scan gave me clarity, and ChetChat is super smooth. Hidden lock is a game changer.",
    app: "Medico & ChetChat",
    color: "bg-purple-600",
  },
  {
    id: "3",
    name: "Lakshya P.",
    initials: "LP",
    rating: 5,
    text: "Safety alert gave my family peace of mind. UI is crisp and SOS works instantly.",
    app: "Safety Alert user",
    color: "bg-red-600",
  },
];

export default function ReviewSection() {
  const [reviews, setReviews] = useState<Review[]>(initialReviews);
  const [name, setName] = useState("");
  const [rating, setRating] = useState(5);
  const [text, setText] = useState("");

  const handleSubmit = () => {
    if (!name.trim() || !text.trim()) {
      alert("Please enter your name and review.");
      return;
    }

    const initials = name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .substring(0, 2);
    
    const colors = ["bg-blue-600", "bg-purple-600", "bg-pink-600", "bg-orange-600", "bg-emerald-600"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    const newReview: Review = {
      id: Date.now().toString(),
      name,
      initials: initials || "U",
      rating,
      text,
      app: "Rickyverse user",
      color: randomColor,
    };

    setReviews([newReview, ...reviews].slice(0, 9)); // Keep top 9
    setName("");
    setText("");
    setRating(5);
    alert("✨ Your review has been posted! (live)");
  };

  return (
    <section className="py-20 px-6 relative z-10">
      <div className="max-w-7xl mx-auto bg-white/5 backdrop-blur-2xl rounded-[2rem] p-8 md:p-12 border border-white/10">
        <div className="flex items-center gap-4 mb-10">
          <MessageSquare className="w-10 h-10 text-cyan-400" />
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Share your review <span className="text-xl font-light text-gray-500 block md:inline">#Rickyverse</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <AnimatePresence>
            {reviews.map((review) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                layout
                className="bg-white/5 backdrop-blur-md border border-white/5 rounded-3xl p-6 hover:bg-white/10 transition-colors shadow-lg"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-full ${review.color} flex items-center justify-center font-bold text-white shadow-lg`}>
                    {review.initials}
                  </div>
                  <div>
                    <p className="font-semibold text-white text-lg">{review.name}</p>
                    <div className="flex text-yellow-400 text-sm tracking-widest">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <span key={i}>{i < review.rating ? "★" : "☆"}</span>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 italic text-sm leading-relaxed">“{review.text}”</p>
                <span className="mt-4 block text-cyan-500/60 text-xs font-mono uppercase">— {review.app}</span>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Review Form */}
        <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 max-w-2xl mx-auto">
          <h3 className="text-xl font-semibold mb-6 flex items-center gap-2 text-white">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Add your genuine review
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              placeholder="Your name *"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors"
            />
            <select
              value={rating}
              onChange={(e) => setRating(Number(e.target.value))}
              className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors"
            >
              <option value="5">★★★★★ (5 stars)</option>
              <option value="4">★★★★☆ (4 stars)</option>
              <option value="3">★★★☆☆ (3 stars)</option>
              <option value="2">★★☆☆☆ (2 stars)</option>
              <option value="1">★☆☆☆☆ (1 star)</option>
            </select>
          </div>
          
          <textarea
            rows={3}
            placeholder="Write your review... (mention which app)"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 mb-6 transition-colors"
          />

          <div className="flex items-center justify-between gap-4">
            <p className="text-xs text-cyan-500/70 hidden sm:block">
              Your name & review will appear live immediately.
            </p>
            <button
              onClick={handleSubmit}
              className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold py-3 px-8 rounded-full shadow-lg shadow-indigo-900/20 transition-all transform hover:scale-105"
            >
              Post Review
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

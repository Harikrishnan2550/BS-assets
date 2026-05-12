"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// FIX: Added 'as const' to resolve the TypeScript Easing build error
const premiumEase = [0.25, 1, 0.5, 1] as const;

const CATEGORIES = ["All", "Construction", "Glam Up", "Consultancy"];

// High-end placeholder data with varied grid sizing for an editorial look
const PORTFOLIO_ITEMS = [
  { 
    id: 1, 
    category: "Construction", 
    title: "The Azure Villa", 
    meta: "Premium Residential",
    img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop",
    span: "md:col-span-2 md:row-span-2",
    aspect: "aspect-square md:aspect-auto" 
  },
  { 
    id: 2, 
    category: "Glam Up", 
    title: "Kochi Signature Studio", 
    meta: "Interior Architecture",
    img: "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1974&auto=format&fit=crop",
    span: "md:col-span-1 md:row-span-1",
    aspect: "aspect-[4/5]" 
  },
  { 
    id: 3, 
    category: "Consultancy", 
    title: "Financial HQ", 
    meta: "Corporate Advisory Space",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
    span: "md:col-span-1 md:row-span-1",
    aspect: "aspect-[4/5]" 
  },
  { 
    id: 4, 
    category: "Construction", 
    title: "Skyline Axis Tower", 
    meta: "Commercial Infrastructure",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
    span: "md:col-span-1 md:row-span-2",
    aspect: "aspect-square md:aspect-[3/4]" 
  },
  { 
    id: 5, 
    category: "Glam Up", 
    title: "Bridal Suite", 
    meta: "Aesthetic Wellness",
    img: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=2069&auto=format&fit=crop",
    span: "md:col-span-2 md:row-span-1",
    aspect: "aspect-video" 
  },
  { 
    id: 6, 
    category: "Construction", 
    title: "Central Plaza", 
    meta: "Retail Showroom",
    img: "https://images.unsplash.com/photo-1555636222-cae831e670b3?q=80&w=2077&auto=format&fit=crop",
    span: "md:col-span-1 md:row-span-1",
    aspect: "aspect-[4/5]" 
  },
];

export default function GalleryPage() {
  const [filter, setFilter] = useState("All");

  const filteredItems = filter === "All" 
    ? PORTFOLIO_ITEMS 
    : PORTFOLIO_ITEMS.filter(item => item.category === filter);

  return (
    <main className="min-h-screen bg-[#FAFAFA] text-zinc-950 pt-32 pb-40 selection:bg-zinc-900 selection:text-white">
      
      {/* 1. Minimalist Editorial Header */}
      <section className="px-6 md:px-12 max-w-[1600px] mx-auto mb-20 md:mb-32">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: premiumEase }}
          className="flex flex-col items-center text-center"
        >
          <div className="flex items-center gap-6 mb-8">
            <span className="w-12 h-[1px] bg-zinc-950" />
            <span className="font-orbitron text-[10px] tracking-[0.5em] text-zinc-500 uppercase">
              BS Group Divisions
            </span>
            <span className="w-12 h-[1px] bg-zinc-950" />
          </div>
          
          <h1 className="font-audiowide text-5xl md:text-7xl lg:text-[8rem] uppercase tracking-tighter leading-[0.85] mb-8">
            Curated <br />
            <span className="text-zinc-300 italic">Archive.</span>
          </h1>
          
          <p className="text-zinc-500 max-w-2xl text-lg md:text-xl font-light">
            A visual ledger of our uncompromising standards across luxury aesthetics, financial strategy, and structural engineering.
          </p>
        </motion.div>
      </section>

      {/* 2. Magnetic Filter Navigation */}
      <section className="px-6 max-w-[1600px] mx-auto mb-16 flex justify-center">
        <div className="flex flex-wrap justify-center gap-2 p-2 bg-white border border-zinc-200 rounded-full shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)]">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className="relative px-6 py-3 text-[10px] md:text-xs font-orbitron uppercase tracking-[0.3em] transition-colors duration-500 z-10"
            >
              <span className={`relative z-20 ${filter === cat ? "text-white" : "text-zinc-500 hover:text-zinc-950"}`}>
                {cat}
              </span>
              
              {/* The sliding pill background */}
              {filter === cat && (
                <motion.div
                  layoutId="activeFilter"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  className="absolute inset-0 bg-zinc-950 rounded-full z-10"
                />
              )}
            </button>
          ))}
        </div>
      </section>

      {/* 3. Fluid Masonry Grid */}
      <section className="px-6 md:px-12 max-w-[1600px] mx-auto">
        {/* We use Framer Motion's AnimatePresence to handle items entering/leaving the DOM */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[300px] md:auto-rows-[400px]">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.8, ease: premiumEase }}
                key={item.id}
                className={`relative group overflow-hidden bg-zinc-200 rounded-[2rem] cursor-pointer ${item.span} ${item.aspect} h-full w-full`}
              >
                {/* Cinematic Image Hover (Reverse Parallax) */}
                <div 
                  className="absolute inset-0 bg-cover bg-center grayscale opacity-80 scale-110 group-hover:scale-100 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-[1.5s] ease-[0.25,1,0.5,1]"
                  style={{ backgroundImage: `url('${item.img}')` }}
                />
                
                {/* Frosted Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-700" />

                {/* ID Tag */}
                <div className="absolute top-8 right-8 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-500 -rotate-90 group-hover:rotate-0 scale-50 group-hover:scale-100 z-30">
                   <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                   </svg>
                </div>

                {/* Text Content */}
                <div className="absolute bottom-8 left-8 right-8 z-20 overflow-hidden">
                  <motion.div 
                    initial={false}
                    className="translate-y-8 opacity-70 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-[0.25,1,0.5,1]"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
                      <span className="font-orbitron text-[9px] uppercase tracking-[0.3em] text-zinc-300">
                        {item.category} // {item.meta}
                      </span>
                    </div>
                    <h4 className="font-audiowide text-2xl md:text-4xl text-white uppercase tracking-tight">
                      {item.title}
                    </h4>
                  </motion.div>
                </div>
                
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        {/* Empty State Fallback */}
        {filteredItems.length === 0 && (
          <div className="w-full py-32 flex justify-center text-zinc-400 font-orbitron text-xs uppercase tracking-widest">
            No archives available for this division.
          </div>
        )}
      </section>

    </main>
  );
}
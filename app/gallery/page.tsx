"use client";

import { motion } from "framer-motion";

// Clean, simple data structure using your local images
const PORTFOLIO_ITEMS = [
  { 
    id: 1, 
    category: "Construction", 
    title: "The Azure Villa", 
    img: "/house1.jpeg" 
  },
  { 
    id: 2, 
    category: "Glam Up", 
    title: "Glam up", 
    img: "/glam-up.png" 
  },
  { 
    id: 3, 
    category: "Consultancy", 
    title: "Financial HQ", 
    img: "/office-interior-1.png" 
  },
  { 
    id: 4, 
    category: "Construction", 
    title: "Skyline Axis Tower", 
    img: "/house2.jpeg" 
  },
  { 
    id: 5, 
    category: "Charity", 
    title: "Charity Award", 
    img: "/boss3.jpeg" 
  },
  { 
    id: 6, 
    category: "Construction", 
    title: "Central Plaza", 
    img: "/house3.jpeg" 
  },
];

const premiumEase = [0.25, 1, 0.5, 1] as const;

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-[#FAFAFA] text-zinc-950 pt-32 pb-40 selection:bg-zinc-900 selection:text-white">
      
      {/* 1. Minimalist Editorial Header */}
      <section className="px-6 md:px-12 max-w-[1400px] mx-auto mb-20 md:mb-32">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: premiumEase }}
          className="flex flex-col items-center text-center"
        >
          <div className="flex items-center gap-6 mb-8">
            <span className="w-12 h-[1px] bg-zinc-950" />
            <span className="font-orbitron text-[10px] tracking-[0.5em] text-zinc-500 uppercase font-semibold">
              The Archive
            </span>
            <span className="w-12 h-[1px] bg-zinc-950" />
          </div>
          
          <h1 className="font-audiowide text-5xl md:text-7xl lg:text-[8rem] uppercase tracking-tighter leading-[0.85] mb-8 text-zinc-950">
            Selected <br />
            <span className="text-zinc-300 italic">Works.</span>
          </h1>
          
          <p className="text-zinc-500 max-w-2xl text-lg md:text-xl font-light">
            A visual ledger of our uncompromising standards across luxury aesthetics, financial strategy, and structural engineering.
          </p>
        </motion.div>
      </section>

      {/* 2. Clean, Uniform Gallery Grid */}
      <section className="px-6 md:px-12 max-w-[1600px] mx-auto">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {PORTFOLIO_ITEMS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.1, ease: premiumEase }}
              className="group relative overflow-hidden bg-zinc-200 rounded-[2rem] aspect-[4/5] cursor-pointer shadow-sm hover:shadow-2xl transition-shadow duration-700"
            >
              {/* Image with subtle zoom on hover */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-[1.5s] ease-[0.25,1,0.5,1] group-hover:scale-110"
                style={{ backgroundImage: `url('${item.img}')` }}
              />
              
              {/* Dark Gradient Overlay that fades in on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-40 group-hover:opacity-80 transition-opacity duration-700" />

              {/* Text Content: Slides up slightly on hover */}
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10 z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-700 ease-[0.25,1,0.5,1]">
                <div className="flex items-center gap-3 mb-3 opacity-80 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
                  <span className="font-orbitron text-[9px] uppercase tracking-[0.3em] text-zinc-300">
                    {item.category}
                  </span>
                </div>
                <h4 className="font-audiowide text-2xl md:text-3xl text-white uppercase tracking-tight">
                  {item.title}
                </h4>
              </div>
              
            </motion.div>
          ))}
        </motion.div>
      </section>

    </main>
  );
}
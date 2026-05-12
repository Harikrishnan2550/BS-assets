"use client";

import Link from "next/link";
import { motion, AnimatePresence, useScroll, useTransform, Variants } from "framer-motion";
import { useState, useRef } from "react";

const PROJECTS = [
  {
    id: "01",
    title: "Commercial Axis",
    category: "Infrastructure",
    img: "/construction.png",
    grid: "md:col-span-2 md:row-span-2",
    tag: "Blue-Print // V.1"
  },
  {
    id: "02",
    title: "Consultancy HQ",
    category: "Strategic Hub",
    img: "/consultancy.png",
    grid: "md:col-span-1 md:row-span-1",
    tag: "Financial Index"
  },
  {
    id: "03",
    title: "Saloon Elite",
    category: "Luxury Studio",
    img: "/saloon.png",
    grid: "md:col-span-1 md:row-span-1",
    tag: "Aesthetic Hub"
  },
  {
    id: "04",
    title: "Structural Detail",
    category: "Architectural",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
    grid: "md:col-span-1 md:row-span-1",
    tag: "Detail Index"
  },
  {
    id: "05",
    title: "Residential Elite",
    category: "Property",
    img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
    grid: "md:col-span-1 md:row-span-1",
    tag: "Living Standard"
  },
  {
    id: "06",
    title: "Global Outreach",
    category: "Impact",
    img: "/charity.png",
    grid: "md:col-span-1 md:row-span-1",
    tag: "Social Core"
  },
];

// FIX: Added 'as const' to resolve the TypeScript Easing build error
const premiumEase = [0.76, 0, 0.24, 1] as const;

export default function GallerySection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const gridY = useTransform(scrollYProgress, [0, 1], ["0px", "-50px"]);

  return (
    <section 
      ref={containerRef}
      className="py-4 md:py-40 px-6 md:px-12 bg-white text-zinc-950 overflow-hidden"
    >
      <div className="max-w-[1500px] mx-auto">
        
        {/* CENTERED HEADER */}
        <div className="flex flex-col items-center text-center mb-20 md:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: premiumEase }}
            className="flex flex-col items-center"
          >
            <div className="flex items-center gap-4 mb-6">
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: 48 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="h-[1px] bg-zinc-300" 
              />
              <span className="font-orbitron text-[9px] tracking-[0.5em] text-zinc-400 uppercase">Institutional Archive</span>
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: 48 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="h-[1px] bg-zinc-300" 
              />
            </div>
            
            <h2 className="font-audiowide text-[3rem] md:text-[6.5rem] uppercase tracking-tighter leading-none mb-8">
              Visual <br />
              <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="text-zinc-300"
              >
                Registry.
              </motion.span>
            </h2>

            <p className="font-orbitron text-[10px] text-zinc-400 uppercase tracking-widest max-w-sm leading-relaxed mb-10">
              Curating high-value developments and luxury industrial spaces // Unit 04.
            </p>

            <Link href="/gallery" className="group flex flex-col items-center gap-4">
              <span className="font-audiowide text-[11px] uppercase tracking-[0.3em] relative overflow-hidden pb-2">
                View Full Registry
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-zinc-950 transition-transform duration-500 origin-left scale-x-100 group-hover:scale-x-0" />
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-zinc-400 transition-transform duration-500 origin-right scale-x-0 group-hover:scale-x-100" />
              </span>
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 45 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="w-14 h-14 rounded-full border border-zinc-100 flex items-center justify-center bg-white shadow-sm group-hover:bg-zinc-950 group-hover:text-white transition-all duration-700"
              >
                <svg className="w-5 h-5 -rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </motion.div>
            </Link>
          </motion.div>
        </div>

        {/* Animated Bento Grid */}
        <motion.div 
          style={{ y: gridY }}
          className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 gap-6 h-auto md:h-[1000px]"
        >
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 1, 
                delay: index * 0.1, 
                ease: premiumEase 
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`relative group overflow-hidden rounded-[2rem] bg-zinc-50 ${project.grid} cursor-pointer min-h-[400px] md:min-h-0`}
            >
              <motion.div 
                animate={{ 
                  scale: hoveredIndex === index ? 1.12 : 1,
                  filter: hoveredIndex === null 
                    ? "grayscale(0.6) blur(0px)" 
                    : hoveredIndex === index 
                      ? "grayscale(0%) blur(0px) brightness(0.8)" 
                      : "grayscale(1) blur(4px) brightness(0.5)"
                }}
                transition={{ duration: 1, ease: premiumEase }}
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${project.img})` }}
              />

              <motion.div 
                animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent z-10" 
              />
              
              {/* TOP CENTERED ID Reveal */}
              <div className="absolute top-8 left-0 w-full z-20 pointer-events-none text-center">
                <div className="flex flex-col items-center gap-2 overflow-hidden">
                  <motion.span 
                    animate={{ y: hoveredIndex === index ? 0 : 20, opacity: hoveredIndex === index ? 0.3 : 0.1 }}
                    className="font-audiowide text-4xl text-white transition-colors"
                  >
                    {project.id}
                  </motion.span>
                  <motion.span 
                    animate={{ scale: hoveredIndex === index ? 1 : 0.8, opacity: hoveredIndex === index ? 1 : 0 }}
                    className="font-orbitron text-[9px] text-zinc-400 tracking-[0.4em] uppercase"
                  >
                    {project.tag}
                  </motion.span>
                </div>
              </div>

              <AnimatePresence>
                {hoveredIndex === index && (
                  <motion.div 
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 20, opacity: 0 }}
                    transition={{ duration: 0.6, ease: premiumEase }}
                    className="absolute inset-x-8 bottom-8 p-6 md:p-8 z-20 text-center"
                  >
                    <div className="bg-white/5 backdrop-blur-2xl border border-white/10 p-6 rounded-2xl shadow-2xl flex flex-col items-center">
                      <span className="font-orbitron text-[9px] text-zinc-400 tracking-[0.4em] uppercase block mb-2">
                        {project.category}
                      </span>
                      <h3 className="font-audiowide text-white text-xl md:text-2xl uppercase tracking-wide">
                        {project.title}
                      </h3>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>        
      </div>
    </section>
  );
}
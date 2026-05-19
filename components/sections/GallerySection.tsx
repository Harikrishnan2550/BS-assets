"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { useState } from "react";

// Using 3 primary images from your portfolio
const PROJECTS = [
  {
    id: "01",
    title: "The Azure Villa",
    category: "Construction",
    img: "/house1.jpeg",
    tag: "Residential Index"
  },
  {
    id: "02",
    title: "Signature Studio",
    category: "Glam Up",
    img: "/glam-up.png",
    tag: "Aesthetic Hub"
  },
  {
    id: "03",
    title: "Financial HQ",
    category: "Consultancy",
    img: "/office-interior-1.png",
    tag: "Corporate Index"
  },
];

const premiumEase = [0.76, 0, 0.24, 1] as const;

export default function GallerySection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-24 md:py-40 px-6 md:px-12 bg-white text-zinc-950 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        
        {/* CENTERED HEADER */}
        <div className="flex flex-col items-center text-center mb-20 md:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: premiumEase }}
            className="font-audiowide text-[3rem] md:text-[6rem] uppercase tracking-tighter leading-none mb-8"
          >
            Visual <br />
            <span className="text-zinc-300 italic">Registry.</span>
          </motion.h2>
          <p className="font-orbitron text-[10px] text-zinc-400 uppercase tracking-widest max-w-sm leading-relaxed">
            Curating high-value developments and luxury industrial spaces.
          </p>
        </div>

        {/* 3-IMAGE GRID */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-20">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: index * 0.15, ease: premiumEase }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative overflow-hidden rounded-[2rem] aspect-[4/5] cursor-pointer bg-zinc-100 group"
            >
              <motion.div 
                animate={{ scale: hoveredIndex === index ? 1.1 : 1 }}
                transition={{ duration: 0.8, ease: premiumEase }}
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${project.img})` }}
              />
              
              <div className="absolute inset-0 bg-zinc-950/20 group-hover:bg-zinc-950/40 transition-colors duration-500 z-10" />
              
              <div className="absolute bottom-8 left-8 z-20">
                <span className="font-orbitron text-[9px] text-white/70 tracking-[0.3em] uppercase block mb-2">
                  {project.tag}
                </span>
                <h3 className="font-audiowide text-2xl text-white uppercase tracking-tight">
                  {project.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* EXPLORE MORE BUTTON */}
        <div className="flex justify-center">
          <Link href="/gallery" className="group relative inline-flex items-center gap-6 text-zinc-950 w-max">
            <span className="font-orbitron text-[10px] uppercase tracking-[0.3em] font-bold border-b border-zinc-950 pb-1 group-hover:border-zinc-400 transition-colors">
              Explore More
            </span>
            <div className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center group-hover:bg-zinc-950 group-hover:text-white transition-all duration-500">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </Link>
        </div>

      </div>
    </section>
  );
}
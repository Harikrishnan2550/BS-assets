"use client";

import Link from "next/link";
import { motion } from "framer-motion";

// Buttery smooth, luxurious easing
const luxuryEase = [0.25, 1, 0.5, 1];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.5, ease: luxuryEase } }
};

const CAPABILITIES = [
  { id: "01", title: "Bespoke Residences", desc: "Crafting timeless family estates and luxury villas. Every line, texture, and material is curated to perfection." },
  { id: "02", title: "Commercial Hubs", desc: "Architecturally significant corporate towers and premium retail environments designed to inspire and endure." },
  { id: "03", title: "Spatial Reimagination", desc: "Transforming existing structures with high-end renovations, blending historic bones with modern elegance." },
  { id: "04", title: "Landscape Integration", desc: "Seamlessly connecting indoor spaces with the natural environment for holistic architectural harmony." }
];

export default function ConstructionPage() {
  return (
    <main className="min-h-screen bg-[#FAF9F6] text-[#1A1A1A] selection:bg-[#1A1A1A] selection:text-[#FAF9F6] font-light">
      
      {/* 1. Immersive Zen Hero */}
      <section className="relative flex flex-col justify-end px-6 pt-32 pb-0 md:min-h-[95vh] md:p-12 overflow-hidden">
        
        {/* Background Image & Smart Overlays */}
        <motion.div 
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.5, ease: luxuryEase }}
          className="absolute inset-0 z-0"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/house1.jpeg')" }} 
          />
          
          {/* OVERLAYS FOR TEXT READABILITY */}
          {/* 1. Base wash & subtle blur to soften the busy image globally */}
          <div className="absolute inset-0 bg-[#FAF9F6]/20 backdrop-blur-[2px]" />
          
          {/* 2. Desktop: Gradient from left to right (protects text on the left side) */}
          <div className="hidden md:block absolute inset-0 w-3/4 bg-gradient-to-r from-[#FAF9F6] via-[#FAF9F6]/80 to-transparent" />
          
          {/* 3. Mobile: Stronger gradient from bottom to top (protects text at the bottom) */}
          <div className="md:hidden absolute inset-0 bg-gradient-to-t from-[#FAF9F6] via-[#FAF9F6]/90 to-[#FAF9F6]/10" />
          
          {/* 4. Universal bottom fade to seamlessly blend the image into the next section */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#FAF9F6] to-transparent" />
        </motion.div>

        <div className="relative z-10 w-full max-w-[1600px] mx-auto pb-4 md:pb-12">
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-12"
          >
            <div className="max-w-4xl">
              <motion.div variants={itemVariants} className="flex items-center gap-6 mb-6 md:mb-10">
                 <div className="h-[1px] w-12 bg-[#1A1A1A]" />
                 <span className="font-orbitron text-[10px] tracking-[0.4em] uppercase font-semibold">BS Construction</span>
              </motion.div>

              <motion.h1 
                variants={itemVariants}
                className="font-audiowide text-5xl md:text-7xl lg:text-[6rem] leading-[1.1] uppercase tracking-tighter drop-shadow-sm"
              >
                Crafting <br />
                Timeless Spaces.
              </motion.h1>
            </div>

            <motion.div variants={itemVariants} className="max-w-sm flex flex-col gap-10 md:gap-8">
              <p className="text-base md:text-lg leading-relaxed text-stone-800 font-medium mt-10 md:mt-0">
                We believe architecture is the ultimate expression of human intention. Constructing premium residential and commercial environments across Kerala.
              </p>
              
              <Link 
                href="/contact" 
                className="group relative inline-flex items-center gap-6 text-[#1A1A1A] w-max"
              >
                 <span className="font-orbitron text-[10px] uppercase tracking-[0.3em] font-bold border-b border-[#1A1A1A] pb-1">Begin Dialogue</span>
                 <svg className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                 </svg>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. Airy Capabilities Grid */}
      <section className="pt-4 pb-16 md:py-48 px-6 md:px-12 bg-[#FAF9F6]">
        <div className="max-w-[1600px] mx-auto grid lg:grid-cols-12 gap-12 md:gap-24">
          
          <div className="lg:col-span-4 lg:sticky lg:top-40 h-max">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="font-orbitron text-[10px] tracking-[0.4em] text-stone-500 uppercase mb-4 md:mb-6 block"
            >
              Our Philosophy
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: luxuryEase }}
              className="font-audiowide text-4xl md:text-5xl uppercase tracking-tighter mb-8"
            >
              The <br/> Foundation.
            </motion.h2>
          </div>
          
          <div className="lg:col-span-8">
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-16 md:gap-y-24">
              {CAPABILITIES.map((cap, i) => (
                <motion.div 
                  key={cap.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1.2, delay: i * 0.1, ease: luxuryEase }}
                  className="group flex flex-col"
                >
                  <span className="font-orbitron text-3xl text-stone-300 mb-6 md:mb-8 font-medium">{cap.id}</span>
                  <h3 className="font-audiowide text-2xl uppercase mb-4 md:mb-6 text-[#1A1A1A]">{cap.title}</h3>
                  <p className="text-stone-500 text-base md:text-lg leading-relaxed flex-1">
                    {cap.desc}
                  </p>
                  <div className="h-[1px] w-full bg-stone-200 mt-8 md:mt-12 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[#1A1A1A] -translate-x-full group-hover:translate-x-0 transition-transform duration-1000 ease-[0.25,1,0.5,1]" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 3. ULTRA-PREMIUM EDITORIAL GALLERY */}
      <section className="py-16 md:py-40 bg-white">
        <div className="max-w-[1800px] mx-auto px-6 md:px-12">
          
          {/* Section Header */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: luxuryEase }}
            className="flex flex-col items-center text-center mb-16 md:mb-48"
          >
            <span className="font-orbitron text-[10px] tracking-[0.4em] text-stone-500 uppercase mb-4 md:mb-6 block">Masterpieces</span>
            <h2 className="font-audiowide text-4xl md:text-7xl uppercase tracking-tighter text-[#1A1A1A]">Selected Works.</h2>
          </motion.div>

          <div className="flex flex-col gap-16 md:gap-64">
            
            {/* PROJECT 1: Massive Panoramic Showcase */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, ease: luxuryEase }}
              className="w-full group cursor-pointer"
            >
              <div className="flex justify-between items-end mb-6 md:mb-8">
                <div>
                  <h3 className="font-audiowide text-3xl md:text-5xl uppercase tracking-tight text-[#1A1A1A]">The Azure Retreat</h3>
                  <span className="font-orbitron text-[10px] tracking-[0.3em] text-stone-400 uppercase mt-3 md:mt-4 block">01 / Private Residence</span>
                </div>
                <span className="font-orbitron text-xs text-stone-400 hidden md:block">Scale: 14,500 SQ.FT</span>
              </div>
              
              <div className="w-full aspect-video md:aspect-[21/9] overflow-hidden rounded-sm bg-stone-200">
                <motion.div 
                  className="w-full h-full bg-cover bg-center scale-110 group-hover:scale-100 transition-transform duration-[2s] ease-[0.25,1,0.5,1]"
                  style={{ backgroundImage: "url('/house1.jpeg')" }}
                />
              </div>
            </motion.div>

            {/* PROJECTS 2 & 3: The Asymmetrical Stagger */}
            <div className="grid md:grid-cols-2 gap-16 md:gap-32 items-start">
              
              {/* Left Side: Stays high */}
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.5, ease: luxuryEase }}
                className="w-full group cursor-pointer"
              >
                <div className="w-full aspect-[4/5] overflow-hidden rounded-sm bg-stone-200 mb-6 md:mb-8">
                  <motion.div 
                    className="w-full h-full bg-cover bg-center scale-110 group-hover:scale-100 transition-transform duration-[2s] ease-[0.25,1,0.5,1]"
                    style={{ backgroundImage: "url('/house2.jpeg')" }}
                  />
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-audiowide text-2xl md:text-3xl uppercase tracking-tight text-[#1A1A1A]">PROJECT 1</h3>
                    <span className="font-orbitron text-[9px] tracking-[0.3em] text-stone-400 uppercase mt-2 md:mt-3 block">02 / Commercial Hub</span>
                  </div>
                </div>
              </motion.div>

              {/* Right Side: Pushed down significantly to create an editorial layout */}
              <motion.div 
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.5, delay: 0.2, ease: luxuryEase }}
                className="w-full md:mt-48 group cursor-pointer"
              >
                <div className="w-full aspect-square overflow-hidden rounded-sm bg-stone-200 mb-6 md:mb-8">
                  <motion.div 
                    className="w-full h-full bg-cover bg-center scale-110 group-hover:scale-100 transition-transform duration-[2s] ease-[0.25,1,0.5,1]"
                    style={{ backgroundImage: "url('/house3.jpeg')" }}
                  />
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-audiowide text-2xl md:text-3xl uppercase tracking-tight text-[#1A1A1A]">PROJECT 2</h3>
                    <span className="font-orbitron text-[9px] tracking-[0.3em] text-stone-400 uppercase mt-2 md:mt-3 block">03 / Commercial Hub</span>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-16 md:mt-48 text-center"
          >
            <Link 
              href="/gallery" 
              className="inline-flex items-center gap-4 font-orbitron text-[10px] uppercase tracking-[0.3em] text-[#1A1A1A] hover:text-stone-500 transition-colors"
            >
              Explore Full Archive
              <div className="w-8 h-8 rounded-full border border-[#1A1A1A] flex items-center justify-center">
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </Link>
          </motion.div>

        </div>
      </section>

      {/* 4. Elegant Footer CTA */}
      <section className="py-20 md:py-48 px-6 text-center bg-[#FAF9F6]">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: luxuryEase }}
          className="max-w-3xl mx-auto flex flex-col items-center"
        >
          <div className="w-px h-16 md:h-24 bg-stone-300 mb-8 md:mb-12" />
          <h2 className="font-audiowide text-4xl md:text-6xl uppercase tracking-tighter mb-8 md:mb-12 text-[#1A1A1A]">
            Envision <br/> Your Project.
          </h2>
          
          <Link 
            href="/contact" 
            className="group relative inline-flex items-center justify-center gap-6 bg-[#1A1A1A] text-[#FAF9F6] px-10 md:px-12 py-5 md:py-6 overflow-hidden"
          >
             <span className="relative z-10 font-orbitron text-[10px] uppercase tracking-widest font-medium">Contact The Studio</span>
             <div className="absolute inset-0 bg-stone-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700 ease-[0.25,1,0.5,1]" />
          </Link>
        </motion.div>
      </section>

    </main>
  );
}
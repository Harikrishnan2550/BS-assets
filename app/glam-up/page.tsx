"use client";

import Link from "next/link";
// FIX: Imported Variants from framer-motion
import { motion, Variants } from "framer-motion";

// FIX: Added 'as const' to satisfy TypeScript's Easing tuple requirement
const premiumEase = [0.76, 0, 0.24, 1] as const;

// FIX: Added ': Variants' typing
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 }
  }
};

// FIX: Added ': Variants' typing
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 1.2, 
      ease: premiumEase 
    } 
  }
};

const CORE_EXPERIENCES = [
  { title: "Precision Hair Architecture", desc: "Expert styling and structural cuts designed for your specific profile." },
  { title: "Signature Bridal Makeovers", desc: "Comprehensive, flawless styling for your most important moments." },
  { title: "Advanced Skin Therapeutics", desc: "Deep cleansing, hydration, and rejuvenating facial protocols." },
  { title: "Luxury Wellness Protocols", desc: "Premium spa, manicure, and pedicure treatments for total relaxation." }
];

const STUDIOS = [
  { id: "01", city: "Kundara", tag: "Flagship Base", img: "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1974&auto=format&fit=crop" },
  { id: "02", city: "Perumpuzha", tag: "Premium Lounge", img: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=2070&auto=format&fit=crop" },
  { id: "03", city: "Mulavana", tag: "Elite Hub", img: "https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?q=80&w=2070&auto=format&fit=crop" },
  { id: "04", city: "Kallambalam", tag: "Signature Studio", img: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=2069&auto=format&fit=crop" }
];

export default function GlamUpPage() {
  return (
    <main className="min-h-screen bg-[#FAFAFA] text-zinc-950 selection:bg-zinc-950 selection:text-white">
      
      {/* 1. Framed Editorial Hero */}
      <section className="relative pt-32 pb-24 px-6 md:px-12 flex flex-col items-center">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full max-w-[1500px] flex flex-col items-center"
        >
          {/* Top Title Sequence */}
          <div className="text-center mb-12">
            <motion.div variants={itemVariants} className="flex items-center justify-center gap-4 mb-6">
              <span className="w-1.5 h-1.5 bg-zinc-950 rounded-full animate-pulse" />
              <span className="font-orbitron text-[9px] tracking-[0.4em] text-zinc-500 uppercase">BS Asset Wellness</span>
            </motion.div>
            <motion.h1 variants={itemVariants} className="font-audiowide text-5xl md:text-8xl lg:text-[10rem] uppercase tracking-tighter leading-none mb-6">
              Glam Up
            </motion.h1>
            <motion.p variants={itemVariants} className="font-light text-zinc-500 max-w-xl mx-auto text-lg md:text-xl">
              Redefining personal excellence through uncompromising aesthetic mastery.
            </motion.p>
          </div>

          {/* Framed Hero Image */}
          <motion.div 
            variants={itemVariants}
            className="w-full aspect-video md:aspect-[15/8] rounded-[2rem] overflow-hidden relative shadow-2xl"
          >
            <div 
              className="absolute inset-0 bg-cover bg-center transition-all duration-1000 scale-105 hover:scale-100"
              style={{ backgroundImage: "url('/glam-up.png')" }} 
            />
            <div className="absolute inset-0 bg-zinc-950/20" />
            
            {/* CTA Button Overlaid on Image */}
          </motion.div>

          {/* Floating Development Teaser */}
          
        </motion.div>
      </section>

      {/* 2. Sticky Editorial Menu */}
      <section className="py-24 md:py-40 px-6 md:px-12 border-t border-zinc-200">
        <div className="max-w-[1400px] mx-auto relative">
          <div className="grid md:grid-cols-12 gap-16 md:gap-8 items-start">
            
            {/* Sticky Left Column */}
            <div className="md:col-span-5 md:sticky top-40">
              <span className="font-orbitron text-[10px] tracking-[0.5em] text-zinc-400 uppercase mb-6 block">Our Expertise</span>
              <h2 className="font-audiowide text-4xl md:text-6xl uppercase tracking-tight mb-8">
                Core <br /> Experiences.
              </h2>
              <p className="text-zinc-500 font-light text-lg max-w-sm">
                A curated selection of premium makeover protocols designed to elevate your personal brand. Detailed menus will be available on our dedicated platform.
              </p>
            </div>

            {/* Scrolling Right Column */}
            <div className="md:col-span-7 flex flex-col gap-8 md:gap-12">
              {CORE_EXPERIENCES.map((exp, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: premiumEase }}
                  className="group border-b border-zinc-200 pb-12 cursor-default"
                >
                  <div className="flex items-end justify-between mb-4">
                    <span className="font-orbitron text-xs text-zinc-300 group-hover:text-zinc-950 transition-colors">0{i+1}</span>
                  </div>
                  <h3 className="font-audiowide text-2xl md:text-4xl uppercase tracking-tight text-zinc-900 mb-4 group-hover:translate-x-4 transition-transform duration-500">
                    {exp.title}
                  </h3>
                  <p className="font-light text-zinc-500 text-lg md:text-xl max-w-xl group-hover:translate-x-4 transition-transform duration-500 delay-75">
                    {exp.desc}
                  </p>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 3. Cinematic Zig-Zag Studios */}
      <section className="py-24 md:py-40 bg-zinc-950 text-white rounded-t-[4rem]">
        <div className="max-w-[1500px] mx-auto px-6 md:px-12">
          
          <div className="text-center mb-32">
            <span className="font-orbitron text-[10px] tracking-[0.5em] text-zinc-500 uppercase mb-4 block">Physical Infrastructure</span>
            <h2 className="font-audiowide text-5xl md:text-7xl uppercase tracking-tight">Premium Studios</h2>
          </div>

          <div className="flex flex-col gap-32 md:gap-48">
            {STUDIOS.map((studio, index) => {
              // Alternate layout based on even/odd index
              const isEven = index % 2 === 0;

              return (
                <div key={studio.id} className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 md:gap-24`}>
                  
                  {/* Studio Image */}
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1.2, ease: premiumEase }}
                    className="w-full md:w-3/5 aspect-[4/3] md:aspect-[16/10] rounded-[2rem] overflow-hidden relative group"
                  >
                    <div 
                      className="absolute inset-0 bg-cover bg-center grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-105"
                      style={{ backgroundImage: `url('${studio.img}')` }}
                    />
                    <div className="absolute inset-0 bg-zinc-950/10 group-hover:bg-transparent transition-colors duration-500" />
                  </motion.div>

                  {/* Studio Info */}
                  <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1, delay: 0.2, ease: premiumEase }}
                    className="w-full md:w-2/5 flex flex-col justify-center"
                  >
                    <div className="flex items-center gap-4 mb-8">
                       <span className="font-audiowide text-4xl text-zinc-700">{studio.id}</span>
                       <div className="h-[1px] w-12 bg-zinc-700" />
                    </div>
                    
                    <h3 className="font-audiowide text-4xl md:text-6xl uppercase tracking-tight mb-4">
                      {studio.city}
                    </h3>
                    
                    <p className="font-orbitron text-[10px] tracking-[0.4em] text-zinc-400 uppercase mb-12">
                      {studio.tag}
                    </p>

                    <Link 
                      href="/contact" 
                      className="inline-flex items-center justify-center gap-4 bg-transparent border border-zinc-700 hover:border-white text-white px-8 py-4 rounded-full font-orbitron text-[9px] uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all duration-500 w-max"
                    >
                      Reserve Location
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </motion.div>

                </div>
              );
            })}
          </div>

        </div>
      </section>

    </main>
  );
}
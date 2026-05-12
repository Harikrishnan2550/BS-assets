"use client";

import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const SERVICES = [
  {
    id: '01',
    title: 'BS Consultancy',
    tag: 'Strategic Architecture',
    desc: 'Capital management and home acquisition strategies engineered for long-term institutional stability.',
    img: '/consultancy.png',
    href: '/consultancy',
  },
  {
    id: '02',
    title: 'Glam Up Saloon',
    tag: 'Aesthetic Wellness',
    desc: 'Luxury unisex makeover studios operating across four prime regional hubs. Redefining personal excellence.',
    img: '/saloon.png',
    href: '/glam-up',
  },
  {
    id: '03',
    title: 'BS Construction',
    tag: 'Structural Engineering',
    desc: 'High-performance residential and commercial builds. We define the landscape of premium real estate.',
    img: '/construction.png',
    href: '/construction',
  },
  {
    id: '04',
    title: 'BS Charity',
    tag: 'Social Infrastructure',
    desc: 'Building community resilience through housing and essential outreach. Our quiet commitment to Kerala.',
    img: '/charity.png',
    href: '/impact',
  }
];

const premiumEase = [0.76, 0, 0.24, 1];

export default function ServicesSection() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="relative py-24 md:py-40 bg-[#080808] text-white overflow-hidden">
      
      {/* 1. Animated SVG Blueprint Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <motion.svg 
          animate={{ rotate: 360 }}
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
          className="w-full h-full" viewBox="0 0 100 100"
        >
          <circle cx="50" cy="50" r="40" fill="none" stroke="white" strokeWidth="0.1" strokeDasharray="1 2" />
          <line x1="0" y1="50" x2="100" y2="50" stroke="white" strokeWidth="0.1" />
          <line x1="50" y1="0" x2="50" y2="100" stroke="white" strokeWidth="0.1" />
        </motion.svg>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* ONLY THIS SECTION IS CENTERED */}
        <div className="mb-20 md:mb-32 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: premiumEase }}
            className="flex flex-col items-center"
          >
            <span className="font-orbitron text-[10px] tracking-[0.5em] text-zinc-500 uppercase mb-4 block">Institutional Sectors</span>
            <h2 className="font-audiowide text-4xl md:text-7xl uppercase tracking-tighter leading-none">
              Group <span className="text-zinc-600 italic">Expertise.</span>
            </h2>
          </motion.div>
        </div>

        {/* The Animated Drawer Container (Left-Aligned restored) */}
        <div className="flex flex-col border-t border-zinc-800/50">
          {SERVICES.map((service, index) => {
            const isHovered = hovered === index;
            
            return (
              <motion.div
                key={service.id}
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
                className="relative group border-b border-zinc-800/50 cursor-pointer"
              >
                {/* Always Visible Header Area */}
                <div className="h-20 md:h-32 flex items-center justify-between px-2 md:px-8 relative z-20">
                  <div className="flex items-center gap-6 md:gap-16">
                    <span className="font-orbitron text-[10px] md:text-xs text-zinc-600 group-hover:text-zinc-300 transition-colors">
                      {service.id}
                    </span>
                    <h3 className="font-audiowide text-lg md:text-4xl uppercase tracking-wide group-hover:translate-x-4 transition-transform duration-700">
                      {service.title}
                    </h3>
                  </div>
                  
                  <div className="flex items-center gap-10">
                    <span className="font-orbitron text-[8px] md:text-[10px] tracking-[0.4em] text-zinc-600 uppercase hidden lg:block">
                      {service.tag}
                    </span>
                    {/* Minimalist Arrow Toggle */}
                    <motion.div 
                      animate={{ rotate: isHovered ? 0 : -45 }}
                      className={`w-8 h-8 md:w-12 md:h-12 rounded-full border border-zinc-800 flex items-center justify-center transition-colors ${isHovered ? 'bg-white text-black border-white' : 'text-zinc-500'}`}
                    >
                      <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </motion.div>
                  </div>
                </div>

                {/* Animated Expanding Content (Left-Aligned restored) */}
                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.8, ease: premiumEase }}
                      className="overflow-hidden"
                    >
                      <div className="flex flex-col md:flex-row items-center gap-10 md:gap-20 px-4 md:px-24 pb-16 pt-4">
                        
                        {/* Image Container with Parallax Internal Scale */}
                        <motion.div 
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ delay: 0.1, duration: 0.8 }}
                          className="w-full md:w-2/5 aspect-video md:aspect-square overflow-hidden rounded-xl bg-zinc-900 border border-zinc-800"
                        >
                          <motion.div 
                            animate={{ scale: [1, 1.05, 1] }}
                            transition={{ duration: 10, repeat: Infinity }}
                            className="w-full h-full bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-1000"
                            style={{ backgroundImage: `url(${service.img})` }}
                          />
                        </motion.div>

                        {/* Text Reveal */}
                        <div className="flex-1 max-w-xl">
                          <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                          >
                            <p className="font-orbitron text-xs md:text-sm text-zinc-400 leading-relaxed mb-10 uppercase tracking-[0.15em]">
                              {service.desc}
                            </p>
                            
                            <Link 
                              href={service.href}
                              className="inline-flex items-center gap-4 py-4 px-10 rounded-full bg-zinc-900 border border-zinc-700 hover:bg-white hover:text-black hover:border-white transition-all duration-500 shadow-xl"
                            >
                              <span className="font-audiowide text-[10px] uppercase tracking-widest">Inquire Sector</span>
                              <div className="w-1 h-1 rounded-full bg-current animate-ping" />
                            </Link>
                          </motion.div>
                        </div>

                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Subtle Hover Shadow Glow */}
                <motion.div 
                  animate={{ opacity: isHovered ? 0.03 : 0 }}
                  className="absolute inset-0 bg-white pointer-events-none transition-opacity"
                />
              </motion.div>
            );
          })}
        </div>

        {/* Dynamic Coordinate Footer (Left/Right restored) */}
        <div className="mt-20 pt-8 border-t border-zinc-900 flex justify-between items-center opacity-20 font-orbitron text-[8px] tracking-[0.4em] uppercase">
          <div className="flex gap-4">
            <span>SECURE PROTCOL // ENABLED</span>
            <span className="animate-pulse text-green-500">●</span>
          </div>
          <span className="hidden md:block">BS Asset Core Management // v. 4.0.1</span>
          <span>Verified 2026</span>
        </div>
      </div>
    </section>
  );
}
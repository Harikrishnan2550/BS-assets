"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';

const SECTORS = [
  {
    id: '01',
    name: 'Consultancy',
    desc: 'Strategic Growth & Financial Advisory',
    img: '/consultancy.png',
    href: '/consultancy',
  },
  {
    id: '02',
    name: 'Glam Up',
    desc: 'Premium Makeover & Beauty Studios',
    img: '/saloon.png',
    href: '/glam-up',
  },
  {
    id: '03',
    name: 'Construction',
    desc: 'Architectural Excellence & Builds',
    img: '/construction.png',
    href: '/construction',
  },
  {
    id: '04',
    name: 'Charity',
    desc: 'Community Impact & Outreach',
    img: '/charity.png',
    href: '/impact',
  }
];

// FIX: Added 'as const' to prevent the Framer Motion Easing type error
const premiumEase = [0.76, 0, 0.24, 1] as const;

export default function HeroSection() {
  const [active, setActive] = useState(0);

  return (
    // Mobile: Auto height (scrollable text). Desktop: Fixed 100vh (no scroll).
    <section className="relative w-full h-auto md:h-screen bg-[#050505] text-white flex flex-col md:block overflow-hidden pt-20 md:pt-0">
      
      {/* Editorial Header 
          MOBILE: Stays exactly as it was (Order-2, below images).
          DESKTOP: Uses a centered max-width container to perfectly align with Navbar/Footer constraints.
      */}
      <div className="order-2 md:order-none relative md:absolute md:top-[22%] md:left-1/2 md:-translate-x-1/2 w-full max-w-[1400px] z-20 pt-6 md:pt-0 px-6 md:px-12 pointer-events-none mix-blend-normal md:mix-blend-difference shrink-0 pb-10 md:pb-0">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: premiumEase, delay: 0.2 }}
        >
          <h1 className="font-audiowide text-[3rem] xs:text-[3.5rem] md:text-[4rem] lg:text-[5.5rem] leading-[0.95] tracking-tight uppercase">
            BS Asset <br />
            <span className="text-zinc-400">Group.</span>
          </h1>
          
          <p className="font-orbitron mt-4 md:mt-6 text-[9px] md:text-xs uppercase tracking-[0.2em] font-medium text-zinc-400 md:text-zinc-300 max-w-xs md:max-w-sm leading-relaxed border-l border-zinc-700 md:border-zinc-500 pl-4">
            Managing High-Value Assets & Building Futures Across Four Distinct Sectors.
          </p>
        </motion.div>
      </div>

      {/* Interactive Accordion Pillars 
          MOBILE: Stays exactly at 65vh (Order-1, top).
          DESKTOP: Fixed to full height but within the 100vh container.
      */}
      <div className="order-1 md:order-none flex flex-col md:flex-row w-full h-[65vh] md:h-full">
        {SECTORS.map((sector, index) => {
          const isActive = active === index;

          return (
            <motion.div
              key={sector.id}
              onClick={() => setActive(index)} 
              onMouseEnter={() => setActive(index)}
              animate={{ 
                flexGrow: isActive ? 6 : 1.5,
                opacity: isActive ? 1 : 0.6
              }}
              transition={{ duration: 0.8, ease: premiumEase }}
              className="relative basis-0 border-b md:border-b-0 md:border-r border-zinc-900 overflow-hidden cursor-pointer group"
            >
              {/* Background Image */}
              <motion.div 
                animate={{ scale: isActive ? 1 : 1.1 }}
                transition={{ duration: 0.8, ease: premiumEase }}
                className="absolute inset-0 bg-cover bg-center grayscale-[0.4] group-hover:grayscale-0 transition-all duration-700"
                style={{ backgroundImage: `url(${sector.img})` }}
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-80" />
              <div className="absolute inset-0 bg-black/20" />

              {/* DESKTOP Inactive State: Scaled text down for desktop elegance */}
              <motion.div
                animate={{ opacity: isActive ? 0 : 1 }}
                transition={{ duration: 0.4 }}
                className="hidden md:flex absolute bottom-12 left-1/2 -translate-x-1/2 flex-col items-center justify-end h-full pb-12 pointer-events-none"
              >
                <span className="font-audiowide text-base lg:text-lg tracking-widest uppercase [writing-mode:vertical-lr] rotate-180 text-white/70 whitespace-nowrap">
                  {sector.name}
                </span>
              </motion.div>

              {/* MOBILE Inactive State: NO CHANGES */}
              <motion.div
                animate={{ opacity: isActive ? 0 : 1 }}
                transition={{ duration: 0.4 }}
                className="md:hidden absolute top-1/2 left-6 right-6 -translate-y-1/2 flex items-center justify-between pointer-events-none"
              >
                <div className="flex items-center gap-4">
                  <span className="font-orbitron text-[10px] font-bold tracking-[0.3em] text-white/60">{sector.id}</span>
                  <span className="font-audiowide text-sm tracking-widest uppercase text-white/80">{sector.name}</span>
                </div>
                <motion.div 
                  animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.8, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="w-7 h-7 rounded-full border border-white/20 flex items-center justify-center bg-white/5"
                >
                  <svg className="w-3.5 h-3.5 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </motion.div>
              </motion.div>

              {/* Active State Content */}
              <motion.div
                animate={{ 
                  opacity: isActive ? 1 : 0, 
                  y: isActive ? 0 : 20 
                }}
                transition={{ duration: 0.5, ease: premiumEase, delay: isActive ? 0.1 : 0 }}
                className="absolute bottom-6 md:bottom-20 left-6 md:left-12 right-6 flex flex-row items-end justify-between gap-4 pointer-events-none"
              >
                <div className="flex-1">
                   <div className="hidden md:flex items-center gap-4 mb-4">
                    <span className="w-12 h-[1px] bg-white"></span>
                    <span className="font-orbitron text-[12px] font-bold tracking-[0.3em] text-white uppercase">{sector.id}</span>
                  </div>
                  <h2 className="font-audiowide text-2xl md:text-4xl lg:text-5xl tracking-wide text-white mb-1 uppercase">
                    {sector.name}.
                  </h2>
                  <p className="font-orbitron text-zinc-300 text-[8px] md:text-[10px] tracking-widest uppercase max-w-xs hidden sm:block">
                    {sector.desc}
                  </p>
                </div>

                <Link 
                  href={sector.href}
                  className="pointer-events-auto flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full border border-white/30 bg-white/5 backdrop-blur-md hover:bg-white hover:text-zinc-950 transition-all duration-500 shrink-0 group/btn"
                >
                  <svg className="w-4 h-4 md:w-6 md:h-6 -rotate-45 group-hover/btn:rotate-0 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const softEase = [0.43, 0.13, 0.23, 0.96];

export default function AboutSection() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const imgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section 
      ref={containerRef}
      className="relative bg-[#FDFDFD] text-zinc-950 py-20 md:py-40 px-6 md:px-12 overflow-hidden"
    >
      
      {/* Ambient Soft Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3] 
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[100%] md:w-[60%] h-[60%] bg-zinc-200 blur-[100px] md:blur-[150px] rounded-full opacity-20" 
        />
      </div>

      <div className="max-w-[1200px] mx-auto relative z-10 flex flex-col items-center text-center">
        
        {/* Header Section - Centered */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: softEase }}
          className="mb-16 md:mb-24 flex flex-col items-center"
        >
          
          <h2 className="font-audiowide text-[2.8rem] xs:text-[3.5rem] md:text-[7rem] lg:text-[8.5rem] uppercase leading-[0.85] tracking-tighter">
            Refined <br />
            <span className="text-zinc-300 italic">Perspective.</span>
          </h2>
        </motion.div>

        {/* Centered Content Block */}
        <div className="w-full max-w-4xl flex flex-col items-center gap-16 md:gap-24">
          
          {/* Main Image - Center Aligned with responsive sizing */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: softEase }}
            className="relative w-full max-w-5xl p-3 md:p-4 bg-white shadow-[0_40px_100px_-20px_rgba(0,0,0,0.06)] rounded-[2.5rem] md:rounded-[3.5rem] overflow-visible"
          >
            <div className="relative aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-[2rem] md:rounded-[3rem]">
              <motion.div 
                style={{ y: imgY }}
                className="absolute inset-x-0 -top-[30%] -bottom-[30%] bg-cover bg-center  transition-all duration-1000"
                style={{ backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')` }} 
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-zinc-950/30 opacity-60" />
            </div>

            {/* Soft Floating Badge - Repositioned for center layout */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="absolute -bottom-6 right-8 md:right-16 bg-white/90 backdrop-blur-xl p-6 md:p-8 rounded-3xl shadow-2xl border border-white/50 hidden sm:block"
            >
              <p className="font-audiowide text-[10px] md:text-xs tracking-widest text-zinc-500 uppercase">Premium Build</p>
              <p className="font-orbitron text-[8px] md:text-[10px] text-zinc-300 mt-1 uppercase tracking-tighter">Verified Standard 2026</p>
            </motion.div>
          </motion.div>

          {/* Text Content - Centered */}
          <div className="flex flex-col items-center max-w-3xl">
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: softEase }}
              className="font-audiowide text-2xl md:text-4xl uppercase tracking-wide text-zinc-800 leading-[1.2] mb-10"
            >
              Crafting Assets with <br /> Human Intuition.
            </motion.h3>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: softEase, delay: 0.2 }}
              className="space-y-6 text-zinc-500 font-light leading-relaxed"
            >
              <p className="text-lg md:text-2xl text-zinc-700 font-medium leading-snug">
                We believe that the most valuable assets are those that breathe life into the communities they serve.
              </p>
              <p className="text-sm md:text-lg max-w-2xl mx-auto">
                Our management style is a blend of hard architectural data and soft human-centric design. By prioritizing the "feeling" of an environment alongside its "function," BS Asset Solutions creates spaces and services that stand the test of time.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
              className="mt-12 md:mt-16"
            >
              <Link 
                href="/about" 
                className="group relative inline-flex items-center gap-6"
              >
                <div className="w-16 h-16 rounded-full border border-zinc-100 flex items-center justify-center bg-white shadow-sm group-hover:shadow-xl group-hover:bg-zinc-950 group-hover:text-white transition-all duration-500">
                  <svg className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
                <span className="font-orbitron text-[11px] font-bold uppercase tracking-[0.4em] text-zinc-400 group-hover:text-zinc-800 transition-colors">
                  Explore Our Vision
                </span>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Centered Stats Section - Upgraded with Refreshing Teal Sequential Illumination */}
        <div className="mt-32 md:mt-48 w-full grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 py-16 border-y border-zinc-100">
          {[
            { label: "Design Axis", val: "Alpha" },
            { label: "Community Hubs", val: "08" },
            { label: "Asset Value", val: "Elite" },
            { label: "Satisfaction", val: "99%" }
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.8, ease: softEase }}
              className="flex flex-col items-center cursor-default"
            >
              {/* Sequential Color Pulse Animation - Now Refreshing Teal */}
              <motion.p 
                animate={{ 
                  color: ["#d4d4d8", "#09090b", "#0d9488", "#d4d4d8"], // zinc-300 -> zinc-950 -> teal-600 -> zinc-300
                  scale: [1, 1.05, 1.05, 1],
                  textShadow: [
                    "0px 0px 0px transparent", 
                    "0px 10px 20px rgba(9, 9, 11, 0.15)", 
                    "0px 0px 20px rgba(13, 148, 136, 0.3)", // Teal shadow
                    "0px 0px 0px transparent"
                  ]
                }}
                transition={{
                  duration: 4,           // Total loop time
                  repeat: Infinity,      // Loop forever
                  delay: i * 0.8,        // Stagger each item so they blink one after another
                  times: [0, 0.15, 0.5, 1], // Timing distribution of the colors
                  ease: "easeInOut"
                }}
                className="font-audiowide text-3xl md:text-5xl"
              >
                {stat.val}
              </motion.p>
              
              {/* Sub-label opacity pulse to match */}
              <motion.p 
                animate={{ opacity: [0.5, 1, 1, 0.5] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: i * 0.8,
                  times: [0, 0.15, 0.5, 1],
                  ease: "easeInOut"
                }}
                className="font-orbitron text-[9px] md:text-[10px] uppercase tracking-[0.3em] text-zinc-500 mt-4"
              >
                {stat.label}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
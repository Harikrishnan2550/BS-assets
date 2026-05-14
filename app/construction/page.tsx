"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const luxuryEase = [0.25, 1, 0.5, 1] as const;

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.2 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 1.5, 
      ease: luxuryEase 
    } 
  }
};

const CAPABILITIES = [
  { id: "01", title: "Bespoke Residences", desc: "Crafting timeless family estates and luxury villas. Every line, texture, and material is curated to perfection." },
  { id: "02", title: "Commercial Hubs", desc: "Architecturally significant corporate towers and premium retail environments designed to inspire and endure." },
  { id: "03", title: "Spatial Reimagination", desc: "Transforming existing structures with high-end renovations, blending historic bones with modern elegance." },
  { id: "04", title: "Landscape Integration", desc: "Seamlessly connecting indoor spaces with the natural environment for holistic architectural harmony." }
];

export default function ConstructionPage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (videoRef.current) {
              videoRef.current.play().catch((error) => {
                console.log("Autoplay blocked, ensuring muted state.", error);
                if (videoRef.current) {
                  videoRef.current.muted = true;
                  setIsMuted(true);
                  videoRef.current.play();
                }
              });
            }
          } else {
            if (videoRef.current) {
              videoRef.current.pause();
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) observer.unobserve(videoRef.current);
    };
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <main className="min-h-screen bg-[#FAF9F6] text-[#1A1A1A] selection:bg-[#1A1A1A] selection:text-[#FAF9F6] font-light overflow-hidden">
      
      {/* 1. Immersive Zen Hero */}
      <section className="relative flex flex-col justify-end px-6 pt-32 pb-0 md:min-h-[95vh] md:p-12 overflow-hidden">
        
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
          
          <div className="absolute inset-0 bg-[#FAF9F6]/30 backdrop-blur-[2px]" />
          <div className="hidden md:block absolute inset-0 w-3/4 bg-gradient-to-r from-[#FAF9F6] via-[#FAF9F6]/90 to-transparent" />
          <div className="md:hidden absolute inset-0 bg-gradient-to-t from-[#FAF9F6] via-[#FAF9F6] to-[#FAF9F6]/20" />
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
                className="font-audiowide text-5xl md:text-7xl lg:text-[8rem] leading-[1.1] uppercase tracking-tighter drop-shadow-sm text-zinc-950"
              >
                Crafting <br />
                Timeless Spaces.
              </motion.h1>
            </div>

            <motion.div variants={itemVariants} className="max-w-sm flex flex-col gap-10 md:gap-8">
              <p className="text-base md:text-lg leading-relaxed text-zinc-800 font-medium mt-10 md:mt-0">
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
      <section className="pt-4 pb-16 md:py-32 px-6 md:px-12 bg-[#FAF9F6]">
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

      {/* 3. Architectural Vertical Walkthrough Video */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-white border-y border-stone-200">
        {/* FIX: max-w-[1600px] ensures it aligns perfectly with the navbar edges */}
        <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          
          {/* Text Content: Hugs the left side */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: luxuryEase }}
            className="w-full md:w-[55%] text-center md:text-left"
          >
            <span className="font-orbitron text-[10px] tracking-[0.4em] text-stone-400 uppercase mb-4 md:mb-6 block">Inside The Build</span>
            <h2 className="font-audiowide text-4xl md:text-6xl lg:text-7xl uppercase tracking-tighter text-[#1A1A1A] mb-8">
              Living <br className="hidden md:block" /> Masterpiece.
            </h2>
            {/* Increased max-w to 2xl so the text naturally fills the large space */}
            <p className="text-stone-500 font-light text-lg md:text-xl leading-relaxed max-w-2xl mx-auto md:mx-0">
              Witness the culmination of structural integrity and bespoke interior design. Take an exclusive guided walkthrough of a recently completed client residence, showcasing our obsessive attention to detail.
            </p>
          </motion.div>

          {/* Vertical Video Player: Hugs the right side */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: luxuryEase }}
            /* md:justify-end pushes the video to the absolute right edge */
            className="w-full md:w-[45%] flex justify-center md:justify-end"
          >
            {/* Slightly increased max-w to 420px for desktop to close the gap naturally */}
            <div className="w-full max-w-[380px] lg:max-w-[420px] aspect-[9/16] bg-stone-900 rounded-[2.5rem] overflow-hidden shadow-[0_40px_80px_-20px_rgba(0,0,0,0.2)] relative border border-stone-200 group">
              <video 
                ref={videoRef}
                className="w-full h-full object-cover"
                loop 
                playsInline
                muted={isMuted} 
                poster="/video-thumbnail.jpg" 
              >
                <source src="/construction-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              <button 
                onClick={toggleMute}
                className="absolute bottom-6 right-6 z-20 flex items-center justify-center w-12 h-12 rounded-full bg-zinc-950/60 backdrop-blur-md border border-white/30 text-white hover:bg-zinc-900 hover:scale-110 transition-all duration-300 opacity-100 md:opacity-0 md:group-hover:opacity-100"
              >
                {isMuted ? (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                  </svg>
                )}
              </button>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 4. ULTRA-PREMIUM EDITORIAL GALLERY */}
      <section className="py-24 md:py-40 bg-[#FAF9F6]">
        <div className="max-w-[1800px] mx-auto px-6 md:px-12">
          
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
            
            {/* PROJECT 1 */}
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

            {/* PROJECTS 2 & 3 */}
            <div className="grid md:grid-cols-2 gap-16 md:gap-32 items-start">
              
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
                    <h3 className="font-audiowide text-2xl md:text-3xl uppercase tracking-tight text-[#1A1A1A]">Skyline Pavilion</h3>
                    <span className="font-orbitron text-[9px] tracking-[0.3em] text-stone-400 uppercase mt-2 md:mt-3 block">02 / Commercial Hub</span>
                  </div>
                </div>
              </motion.div>

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
                    <h3 className="font-audiowide text-2xl md:text-3xl uppercase tracking-tight text-[#1A1A1A]">Central Atrium</h3>
                    <span className="font-orbitron text-[9px] tracking-[0.3em] text-stone-400 uppercase mt-2 md:mt-3 block">03 / Retail Architecture</span>
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

      {/* 5. Elegant Footer CTA */}
      <section className="py-20 md:py-48 px-6 text-center bg-white border-t border-stone-200">
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
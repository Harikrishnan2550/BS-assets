"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";

// FIX: Added 'as const' to satisfy Framer Motion's Easing type requirements
const premiumEase = [0.76, 0, 0.24, 1] as const;

const VALUES = [
  { id: "01", title: "Integrity", desc: "100% transparency across all financial, structural, and charitable endeavors." },
  { id: "02", title: "Quality", desc: "Uncompromising standards in materials, aesthetic design, and client service." },
  { id: "03", title: "Empathy", desc: "Measuring true corporate success by the silent, positive impact made within our communities." },
  { id: "04", title: "Innovation", desc: "Adapting modern systems for seamless architectural and financial solutions." }
];

// Staggered Animation Variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 1, 
      ease: premiumEase 
    } 
  }
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-zinc-950 overflow-hidden">
      
      {/* 1. Cinematic Corporate Hero */}
      <section className="relative py-32 md:py-52 px-6 md:px-12 flex flex-col items-center text-center border-b border-zinc-100">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#f4f4f5_0%,_transparent_70%)] opacity-50 pointer-events-none" />
        
        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center"
          >
            <motion.div variants={itemVariants} className="flex items-center gap-4 mb-8">
              <motion.div initial={{ width: 0 }} animate={{ width: 48 }} transition={{ duration: 1, delay: 0.5 }} className="h-[1px] bg-zinc-300" />
              <span className="font-orbitron text-[10px] tracking-[0.5em] text-zinc-500 uppercase">The BS Group Narrative</span>
              <motion.div initial={{ width: 0 }} animate={{ width: 48 }} transition={{ duration: 1, delay: 0.5 }} className="h-[1px] bg-zinc-300" />
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="font-audiowide text-4xl md:text-7xl lg:text-[7rem] tracking-tighter leading-[0.85] mb-10 uppercase">
              Excellence <br />
              <span className="text-zinc-300 italic">Is Protocol.</span>
            </motion.h1>
            
            <motion.p variants={itemVariants} className="font-orbitron text-[10px] md:text-xs text-zinc-500 uppercase tracking-[0.2em] max-w-3xl leading-relaxed mx-auto">
              Founded on a singular vision: to bring unparalleled quality, institutional integrity, and premium service to every sector we touch in Kerala and beyond.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* 2. FOUNDER'S VISION & ACCOLADES */}
      <section className="py-24 md:py-48 px-6 md:px-12 bg-zinc-950 text-white relative">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">
            
            {/* Left: Dual Image Composition */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, ease: premiumEase }}
              className="lg:col-span-5 relative group mt-10 lg:mt-0"
            >
              {/* Main Portrait */}
              <div className="aspect-[3/4] md:aspect-[4/5] w-[85%] overflow-hidden rounded-[2rem] bg-zinc-900 border border-zinc-800 relative shadow-2xl">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
                  style={{ backgroundImage: "url('/boss.jpeg')" }} 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-80 pointer-events-none" />
                
                <div className="absolute bottom-10 left-8 pointer-events-none">
                  <p className="font-audiowide text-2xl uppercase">Director's</p>
                  <p className="font-orbitron text-[9px] tracking-[0.4em] text-zinc-400 uppercase mt-1">Vision & Philanthropy</p>
                </div>
              </div>

              {/* FLOATING Medal Memento Image */}
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                animate={{ y: [0, -15, 0] }}
                transition={{ 
                  y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                  opacity: { duration: 1, delay: 0.5, ease: premiumEase }
                }}
                className="absolute -bottom-12 -right-4 md:-right-8 w-[55%] aspect-square rounded-full border-[8px] border-zinc-950 overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] z-20"
              >
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="absolute inset-0 bg-cover bg-center cursor-pointer"
                  style={{ backgroundImage: "url('/medal.jpeg')" }} 
                />
              </motion.div>
              
              <div className="absolute -top-6 left-[85%] w-16 h-16 border-t border-r border-zinc-800 pointer-events-none hidden md:block" />
              <div className="absolute top-[80%] -left-6 w-16 h-16 border-b border-l border-zinc-800 pointer-events-none hidden md:block" />
            </motion.div>

            {/* Right: Founder's Philosophy & Charity Mission */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="lg:col-span-7 flex flex-col justify-center"
            >
              <motion.div variants={itemVariants} className="flex items-center gap-4 mb-10">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                <span className="font-orbitron text-[9px] tracking-[0.4em] text-zinc-400 uppercase">Leadership Directive</span>
              </motion.div>

              <motion.h2 variants={itemVariants} className="font-audiowide text-3xl md:text-5xl uppercase leading-[1.1] mb-8">
                "True wealth is defined by the <span className="text-zinc-500">communities we uplift.</span>"
              </motion.h2>

              <motion.div variants={itemVariants} className="space-y-6 font-light text-zinc-400 leading-relaxed text-lg">
                <p>
                  The momentum behind BS Asset Solutions is driven by a dual mandate: engineering premium commercial success while utilizing it as a formidable tool for social infrastructure.
                </p>
                <p>
                  Through the <span className="text-white font-medium">BS Charity</span> division, we redirect our growth into essential community outreach across Kerala. We don't just build assets; we build the future.
                </p>
              </motion.div>

              {/* Honors Block with Hover Lift */}
              <motion.div 
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="mt-10 bg-zinc-900/50 border border-zinc-800 p-6 md:p-8 rounded-3xl flex flex-col sm:flex-row items-center sm:items-center gap-8 shadow-2xl cursor-default"
              >
                  <div className="w-32 sm:w-36 shrink-0 aspect-[4/5] rounded-xl overflow-hidden border border-zinc-700 shadow-xl bg-zinc-950">
                    <motion.div 
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.8 }}
                      className="w-full h-full bg-cover bg-center"
                      style={{ backgroundImage: "url('/rotary-award.png')" }} 
                    />
                  </div>

                  <div className="text-center sm:text-left">
                    <p className="font-orbitron text-[9px] tracking-[0.3em] text-amber-500 uppercase mb-3">Honors & Recognition</p>
                    <p className="font-light text-sm md:text-base text-zinc-300 leading-relaxed">
                      Conferred with an <strong className="text-white font-medium">Honorary Doctorate</strong> in recognition of distinguished contributions to Social Work & Business Management. Proudly acknowledged by the <strong className="text-white font-medium">Rotary Club of Kundara, 2026</strong>.
                    </p>
                  </div>
              </motion.div>

              <motion.div variants={itemVariants} className="mt-12 pt-8 border-t border-zinc-800 flex items-center gap-8">
                <div>
                  <p className="font-audiowide text-lg text-white uppercase">DR. BIJU K.</p>
                  <p className="font-orbitron text-[9px] tracking-[0.3em] text-zinc-500 uppercase mt-1">Founder & Managing Director</p>
                </div>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 3. Vision & Mission */}
      <section className="py-24 md:py-40 px-6 md:px-12 max-w-[1400px] mx-auto">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 gap-12 md:gap-24"
        >
          {/* Vision Card */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -15, boxShadow: "0px 40px 80px -20px rgba(0,0,0,0.1)" }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="bg-zinc-50 p-12 md:p-16 rounded-[2.5rem] border border-zinc-100 relative overflow-hidden group cursor-default"
          >
            <motion.div 
              initial={{ opacity: 0.05, rotate: 0 }}
              whileHover={{ opacity: 0.1, rotate: 5, scale: 1.1 }}
              transition={{ duration: 0.8 }}
              className="absolute top-0 right-0 p-8"
            >
              <span className="font-audiowide text-7xl md:text-8xl text-zinc-950">V</span>
            </motion.div>
            
            <h2 className="font-audiowide text-3xl mb-8 uppercase relative z-10">Our Vision</h2>
            <p className="text-zinc-500 leading-relaxed font-light text-lg relative z-10">
              To unite diverse industries through uncompromising premium quality. From financial strategy to landmark structures and social upliftment, our ultimate goal is to leave a lasting, positive legacy in Kerala.
            </p>
          </motion.div>

          {/* Mission Card */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -15, boxShadow: "0px 40px 80px -20px rgba(0,0,0,0.1)" }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="bg-zinc-50 p-12 md:p-16 rounded-[2.5rem] border border-zinc-100 relative overflow-hidden group cursor-default"
          >
            <motion.div 
              initial={{ opacity: 0.05, rotate: 0 }}
              whileHover={{ opacity: 0.1, rotate: -5, scale: 1.1 }}
              transition={{ duration: 0.8 }}
              className="absolute top-0 right-0 p-8"
            >
              <span className="font-audiowide text-7xl md:text-8xl text-zinc-950">M</span>
            </motion.div>

            <h2 className="font-audiowide text-3xl mb-8 uppercase relative z-10">Our Mission</h2>
            <p className="text-zinc-500 leading-relaxed font-light text-lg relative z-10">
              To operate with absolute transparency, innovative solutions, and deep empathy for our communities. We don't just establish balance sheets and businesses; we engineer trust.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* 4. Core Values */}
      <section className="py-24 md:py-40 px-6 md:px-12 bg-white border-t border-zinc-100">
        <div className="max-w-[1400px] mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: premiumEase }}
            className="flex flex-col items-center text-center mb-20 md:mb-32"
          >
            <span className="font-orbitron text-[10px] tracking-[0.5em] text-zinc-400 uppercase mb-4 block">Foundational Architecture</span>
            <h2 className="font-audiowide text-4xl md:text-6xl uppercase tracking-tight">The Pillars</h2>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          >
            {VALUES.map((val) => (
              <motion.div 
                key={val.id}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02, backgroundColor: "#09090b", color: "#ffffff" }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="p-10 border border-zinc-200 rounded-[2rem] text-zinc-950 transition-colors group cursor-default shadow-sm hover:shadow-2xl"
              >
                <motion.div 
                  initial={{ x: 0 }}
                  whileHover={{ x: 10 }}
                  className="font-orbitron text-sm text-zinc-300 group-hover:text-zinc-600 transition-colors mb-12"
                >
                  {val.id} //
                </motion.div>
                <h3 className="font-audiowide text-2xl uppercase mb-4">{val.title}</h3>
                <p className="font-light text-zinc-500 group-hover:text-zinc-400 leading-relaxed transition-colors">
                  {val.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 5. Institutional CTA */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-zinc-50 text-center border-t border-zinc-200">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: premiumEase }}
          className="max-w-3xl mx-auto flex flex-col items-center"
        >
          <span className="font-orbitron text-[10px] tracking-[0.5em] text-zinc-400 uppercase mb-6 block">Strategic Alignment</span>
          <h2 className="font-audiowide text-4xl md:text-5xl uppercase tracking-tight mb-8">Partner With Excellence</h2>
          <p className="text-zinc-500 mb-12 leading-relaxed font-light text-lg">
            Discover how BS Asset Solutions can assist you across our diverse range of premium services and developments.
          </p>
          
          <Link 
            href="/contact" 
            className="group flex items-center justify-between gap-8 bg-zinc-950 text-white px-8 py-5 rounded-full shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-500"
          >
            <span className="font-orbitron text-[10px] font-bold tracking-[0.4em] uppercase ml-4">Engage Our Team</span>
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-zinc-950 group-hover:rotate-45 transition-transform duration-500">
               <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
               </svg>
            </div>
          </Link>
        </motion.div>
      </section>

    </main>
  );
}
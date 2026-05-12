"use client";

import Link from "next/link";
import { motion } from "framer-motion";

// Smooth, elegant easing
const etherealEase = [0.22, 1, 0.36, 1];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 }
  }
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: etherealEase } }
};

const INITIATIVES = [
  {
    id: "01",
    title: "Safe Shelter",
    desc: "We build and provide secure housing for those fighting severe poverty or illness. A safe roof is a fundamental human right, treated as our absolute highest priority."
  },
  {
    id: "02",
    title: "Sustenance",
    desc: "Eradicating hunger in local communities. We supply essential food provisions to struggling families, ensuring no one within our reach goes to sleep hungry."
  },
  {
    id: "03",
    title: "Dignity & Care",
    desc: "Providing quality clothing and basic daily necessities. We aim to quietly restore hope and preserve the self-worth of individuals facing life's toughest chapters."
  }
];

const CORE_VALUES = [
  { title: "100%", subtitle: "Direct Allocation", desc: "Every resource goes directly to the source of need." },
  { title: "Zero", subtitle: "Media Exploitation", desc: "No cameras. No PR stunts. Just quiet, effective help." },
  { title: "Rapid", subtitle: "Deployment", desc: "Bypassing red tape to deliver aid when it matters most." },
  { title: "Enduring", subtitle: "Commitment", desc: "We don't just fix today; we build foundations for tomorrow." }
];

export default function ImpactPage() {
  return (
    <main className="min-h-screen bg-[#FCFCFD] text-zinc-600 font-light selection:bg-zinc-200 selection:text-zinc-950 overflow-hidden">
      
      {/* 1. Ambient Light Hero (CENTERED) */}
      <section className="relative min-h-[90vh] flex flex-col justify-center px-6 md:px-12 pt-20 border-b border-zinc-100">
        
        {/* Soft Ethereal Glows */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <motion.div 
            animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-[10%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-zinc-200/50 blur-[100px]"
          />
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute top-[30%] -right-[10%] w-[40vw] h-[40vw] rounded-full bg-stone-200/40 blur-[120px]"
          />
        </div>

        {/* Centered Hero Content */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-[1400px] mx-auto w-full relative z-10 flex flex-col items-center text-center"
        >
          <motion.div variants={fadeUp} className="flex items-center justify-center gap-6 mb-12">
            <div className="flex gap-2">
              <span className="w-1.5 h-1.5 bg-zinc-400 rounded-full animate-pulse" />
              <span className="w-1.5 h-1.5 bg-zinc-300 rounded-full" />
            </div>
            <span className="font-orbitron text-[10px] tracking-[0.4em] text-zinc-500 uppercase border border-zinc-200 px-4 py-1.5 rounded-full bg-white/50 backdrop-blur-md">
              BS Charity Initiative
            </span>
          </motion.div>

          <motion.h1 variants={fadeUp} className="font-audiowide text-5xl md:text-7xl lg:text-[8.5rem] text-zinc-950 uppercase tracking-tighter leading-[0.9] mb-10 text-center">
            Silent <br />
            <span className="text-zinc-400 italic">Impact.</span>
          </motion.h1>

          <motion.p variants={fadeUp} className="text-lg md:text-2xl leading-relaxed text-zinc-500 max-w-2xl mx-auto text-center">
            True impact doesn't require an audience. We provide shelter, sustenance, and dignity to those who need it most, <strong className="text-zinc-900 font-medium">without exposing their struggles to the world.</strong>
          </motion.p>
        </motion.div>
      </section>

      {/* 2. Floating Ethereal Cards */}
      <section className="py-32 md:py-48 px-6 md:px-12 relative z-20">
        <div className="max-w-[1400px] mx-auto">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: etherealEase }}
            className="mb-20 flex justify-center"
          >
            <h2 className="font-audiowide text-4xl md:text-5xl uppercase tracking-tighter text-zinc-950 text-center">The Mandate</h2>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid lg:grid-cols-3 gap-6 md:gap-10"
          >
            {INITIATIVES.map((item, index) => (
              <motion.div 
                key={item.id}
                variants={fadeUp}
                whileHover={{ y: -15, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="group relative p-10 md:p-14 rounded-[2.5rem] bg-white border border-zinc-100 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.12)] transition-all duration-700 overflow-hidden flex flex-col justify-between min-h-[420px] cursor-default"
              >
                {/* Giant watermark number for visual texture */}
                <div className="absolute -bottom-10 -right-10 text-[14rem] font-audiowide text-zinc-50 group-hover:text-zinc-100 transition-colors duration-700 pointer-events-none select-none">
                  {item.id}
                </div>

                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-full border border-zinc-200 flex items-center justify-center mb-10 group-hover:bg-zinc-950 group-hover:border-zinc-950 transition-colors duration-700">
                    <span className="font-orbitron text-xs text-zinc-400 group-hover:text-white transition-colors duration-700">{item.id}</span>
                  </div>
                  <h3 className="font-audiowide text-3xl text-zinc-950 uppercase tracking-tight mb-6">
                    {item.title}
                  </h3>
                </div>

                <p className="relative z-10 text-zinc-500 text-lg leading-relaxed group-hover:text-zinc-700 transition-colors duration-700">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* 3. Clean Metrics Grid */}
      <section className="py-24 px-6 md:px-12 bg-white border-y border-zinc-100 relative">
        <div className="max-w-[1400px] mx-auto">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-zinc-100 rounded-[2.5rem] overflow-hidden border border-zinc-100"
          >
            {CORE_VALUES.map((val, i) => (
              <motion.div 
                key={i}
                variants={fadeUp}
                className="bg-white p-12 hover:bg-zinc-50 transition-colors duration-500 group"
              >
                <h4 className="font-audiowide text-4xl text-zinc-950 mb-3 group-hover:translate-x-2 transition-transform duration-500">{val.title}</h4>
                <h5 className="font-orbitron text-[10px] tracking-[0.3em] text-zinc-400 uppercase mb-6 group-hover:translate-x-2 transition-transform duration-500 delay-75">{val.subtitle}</h5>
                <p className="text-zinc-500 font-light leading-relaxed text-sm">
                  {val.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. Elegant Footer CTA */}
      <section className="py-32 md:py-48 px-6 text-center relative overflow-hidden bg-[#FCFCFD]">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: etherealEase }}
          className="max-w-2xl mx-auto flex flex-col items-center relative z-10"
        >
          <div className="w-px h-16 bg-gradient-to-b from-transparent to-zinc-300 mb-12" />
          
          <h2 className="font-audiowide text-4xl md:text-6xl text-zinc-950 uppercase tracking-tighter mb-8 leading-tight">
            Quiet <br /> Contribution.
          </h2>
          
          <p className="text-zinc-500 text-lg md:text-xl mb-12 font-light leading-relaxed">
            If you wish to fund our initiatives or know someone who desperately requires our assistance, please reach out. All communications remain strictly confidential.
          </p>
          
          <Link 
            href="/contact" 
            className="group relative inline-flex items-center justify-center gap-6 bg-transparent border border-zinc-200 text-zinc-950 px-10 py-5 rounded-full overflow-hidden transition-all duration-500 hover:border-zinc-950 shadow-sm hover:shadow-xl"
          >
             <span className="relative z-10 font-orbitron text-[10px] uppercase tracking-widest font-medium group-hover:text-white transition-colors duration-500">
               Contact Confidentially
             </span>
             <div className="absolute inset-0 bg-zinc-950 scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-500 ease-[0.22,1,0.36,1]" />
          </Link>
        </motion.div>
      </section>

    </main>
  );
}
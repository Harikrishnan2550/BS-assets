"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";

const etherealEase = [0.22, 1, 0.36, 1] as const;

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 }
  }
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: etherealEase } }
};

const INITIATIVES = [
  {
    id: "01",
    title: "Safe Shelter",
    desc: "We build and provide secure housing for those fighting severe poverty or illness. A safe roof is a fundamental human right, treated as our absolute highest priority.",
    img: "/charity-shelter.jpeg"
  },
  {
    id: "02",
    title: "Sustenance",
    desc: "Eradicating hunger in local communities. We supply essential food provisions to struggling families, ensuring no one within our reach goes to sleep hungry.",
    img: "/charity-sustenance.jpeg"
  },
  {
    id: "03",
    title: "Dignity & Care",
    desc: "Providing quality clothing and basic daily necessities. We aim to quietly restore hope and preserve the self-worth of individuals facing life's toughest chapters.",
    img: "/charity-care.jpeg"
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

      {/* ── HERO: Full-bleed image with layered text ── */}
      <section className="relative w-full min-h-[60vh] md:min-h-[80vh] lg:min-h-screen flex flex-col justify-end overflow-hidden">

        {/* Background image */}
        <motion.div
          initial={{ scale: 1.06, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.6, ease: etherealEase }}
          className="absolute inset-0 z-0"
        >
          <img
            src="/charity2.png"
            alt="BS Charity Rotary Club Initiative"
            className="w-full h-full object-cover object-[40%_center] md:object-center"
          />
        </motion.div>

        {/* Gradient overlay — darker at bottom for legible text, lighter at top */}
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-zinc-950/80 via-zinc-950/30 to-zinc-950/10" />

        

        {/* Text content — sits at the bottom of the hero */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-20 px-6 md:px-12 pb-10 md:pb-16 lg:pb-20 max-w-[1400px] mx-auto w-full"
        >
          <motion.div variants={fadeUp} className="flex items-center gap-3 mb-4">
            <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
            <span className="w-1.5 h-1.5 bg-white/40 rounded-full" />
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="font-audiowide text-4xl sm:text-6xl md:text-7xl lg:text-[8rem] text-white uppercase tracking-tighter leading-[0.9] mb-4 md:mb-6"
          >
            Silent <br />
            <span className="text-white/50 italic">Impact.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-sm sm:text-base md:text-xl leading-relaxed text-white/70 max-w-xl"
          >
            True impact doesn't require an audience. We provide shelter, sustenance, and dignity to those who need it most,{" "}
            <strong className="text-white font-medium">without exposing their struggles to the world.</strong>
          </motion.p>
        </motion.div>
      </section>

      {/* 3. The Mandate Cards Grid */}
      <section className="py-20 md:py-32 px-6 md:px-12 relative z-20 border-t border-zinc-100 bg-white/50">
        <div className="max-w-[1400px] mx-auto">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: etherealEase }}
            className="mb-12 md:mb-20 flex justify-center"
          >
            <h2 className="font-audiowide text-4xl md:text-5xl uppercase tracking-tighter text-zinc-950 text-center">The Mandate</h2>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid lg:grid-cols-3 gap-6 md:gap-8"
          >
            {INITIATIVES.map((item) => (
              <motion.div 
                key={item.id}
                variants={fadeUp}
                className="group bg-white p-4 md:p-5 rounded-[2.5rem] border border-zinc-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-shadow duration-500 flex flex-col"
              >
                <div className="w-full aspect-[9/16] overflow-hidden rounded-[1.5rem] bg-zinc-950 relative mb-6">
                  <img 
                    src={item.img} 
                    alt={`${item.title} field capture`} 
                    className="w-full h-full object-cover opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none select-none"
                  />
                </div>

                <div className="flex items-center gap-3 px-2 mb-4">
                  <div className="w-8 h-8 rounded-full border border-zinc-200 flex items-center justify-center shrink-0">
                    <span className="font-orbitron text-[9px] text-zinc-400">{item.id}</span>
                  </div>
                  <h3 className="font-audiowide text-xl md:text-2xl text-zinc-900 uppercase tracking-tight">
                    {item.title}
                  </h3>
                </div>

                <p className="px-2 pb-2 text-zinc-500 font-light text-sm md:text-base leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* 4. Clean Metrics Grid */}
      <section className="py-16 md:py-24 px-6 md:px-12 bg-white border-y border-zinc-100 relative">
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
                className="bg-white p-8 md:p-12 hover:bg-zinc-50 transition-colors duration-500 group"
              >
                <h4 className="font-audiowide text-3xl md:text-4xl text-zinc-950 mb-2 md:mb-3 group-hover:translate-x-2 transition-transform duration-500">{val.title}</h4>
                <h5 className="font-orbitron text-[9px] md:text-[10px] tracking-[0.3em] text-zinc-400 uppercase mb-4 md:mb-6 group-hover:translate-x-2 transition-transform duration-500 delay-75">{val.subtitle}</h5>
                <p className="text-zinc-500 font-light leading-relaxed text-sm">
                  {val.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 5. Elegant Footer CTA */}
      <section className="py-20 md:py-48 px-6 text-center relative overflow-hidden bg-[#FCFCFD]">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: etherealEase }}
          className="max-w-2xl mx-auto flex flex-col items-center relative z-10"
        >
          <div className="w-px h-12 md:h-16 bg-gradient-to-b from-transparent to-zinc-300 mb-8 md:mb-12" />
          
          <h2 className="font-audiowide text-3xl md:text-6xl text-zinc-950 uppercase tracking-tighter mb-6 md:mb-8 leading-tight">
            Quiet <br /> Contribution.
          </h2>
          
          <p className="text-zinc-500 text-base md:text-xl mb-8 md:mb-12 font-light leading-relaxed">
            If you wish to fund our initiatives or know someone who desperately requires our assistance, please reach out. All communications remain strictly confidential.
          </p>
          
          <Link 
            href="/contact" 
            className="group relative inline-flex items-center justify-center gap-6 bg-transparent border border-zinc-200 text-zinc-950 px-8 py-4 md:px-10 md:py-5 rounded-full overflow-hidden transition-all duration-500 hover:border-zinc-950 shadow-sm hover:shadow-xl"
          >
             <span className="relative z-10 font-orbitron text-[9px] md:text-[10px] uppercase tracking-widest font-medium group-hover:text-white transition-colors duration-500">
               Contact Confidentially
             </span>
             <div className="absolute inset-0 bg-zinc-950 scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-500 ease-[0.22,1,0.36,1]" />
          </Link>
        </motion.div>
      </section>

    </main>
  );
}
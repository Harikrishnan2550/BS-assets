"use client";

import { motion } from "framer-motion";
import { useState } from "react";

// FIX: Added 'as const' to resolve the TypeScript Easing build error
const premiumEase = [0.76, 0, 0.24, 1] as const;

export default function ContactSection() {
  const [focusedField, setFocusedField] = useState<string | null>(null);

  return (
    <section className="relative py-4 md:py-10  px-6 md:px-12 bg-white text-zinc-950 overflow-hidden">
      
      {/* Background Visual: Center Radial Gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none opacity-[0.03] z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_black_1px,_transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="max-w-[1200px] mx-auto relative z-10">
        
        {/* CENTERED HEADER SECTION */}
        <div className="flex flex-col items-center text-center mb-20 md:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: premiumEase }}
          >
            <div className="flex items-center justify-center gap-4 mb-8">
              <motion.div initial={{ width: 0 }} whileInView={{ width: 40 }} transition={{ duration: 1 }} className="h-[1px] bg-zinc-300" />
              <span className="font-orbitron text-[10px] tracking-[0.5em] text-zinc-400 uppercase">Direct Inquiry</span>
              <motion.div initial={{ width: 0 }} whileInView={{ width: 40 }} transition={{ duration: 1 }} className="h-[1px] bg-zinc-300" />
            </div>
            
            <h2 className="font-audiowide text-5xl md:text-8xl uppercase tracking-tighter leading-[0.85] mb-12">
              Let's <br /> 
              <span className="text-zinc-300 italic">Connect.</span>
            </h2>
            
            <p className="font-orbitron text-[11px] text-zinc-400 uppercase tracking-widest max-w-xl leading-relaxed mx-auto">
              Please define your sector requirements below for precise institutional routing to our Kerala headquarters.
            </p>
          </motion.div>
        </div>

        {/* INTERACTIVE CONTENT GRID */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
          
          {/* LEFT: THE COMMAND FORM (Clean Elegant Text) */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: premiumEase }}
            className="bg-zinc-950 p-10 md:p-16 rounded-[3rem] shadow-[0_60px_100px_-20px_rgba(0,0,0,0.15)] relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
              <span className="font-audiowide text-4xl">SECURE</span>
            </div>

            <form className="space-y-12 relative z-10">
              {/* Name Field */}
              <div className="relative group">
                <label className={`font-orbitron text-[10px] tracking-[0.3em] uppercase transition-all duration-500 ${focusedField === 'name' ? 'text-white' : 'text-zinc-400'}`}>
                  Full Name
                </label>
                <div className="relative mt-2 ">
                  <input 
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    type="text" 
                    className="w-full bg-zinc-900/50 border border-zinc-800 text-white p-5 rounded-2xl focus:outline-none focus:border-white transition-all font-light text-lg placeholder:text-zinc-500" 
                    placeholder="Enter your name"
                  />
                  {focusedField === 'name' && <motion.div layoutId="glow" className="absolute -inset-[1px] rounded-2xl border border-white/50 blur-[2px] pointer-events-none" />}
                </div>
              </div>

              {/* Email Field */}
              <div className="relative group">
                <label className={`font-orbitron text-[10px] tracking-[0.3em] uppercase transition-all duration-500 ${focusedField === 'email' ? 'text-white' : 'text-zinc-400'}`}>
                  Email Address
                </label>
                <div className="relative mt-2">
                  <input 
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    type="email" 
                    className="w-full bg-zinc-900/50 border border-zinc-800 text-white p-5 rounded-2xl focus:outline-none focus:border-white transition-all font-light text-lg placeholder:text-zinc-500" 
                    placeholder="name@example.com"
                  />
                  {focusedField === 'email' && <motion.div layoutId="glow" className="absolute -inset-[1px] rounded-2xl border border-white/50 blur-[2px] pointer-events-none" />}
                </div>
              </div>

              {/* Message Field */}
              <div className="relative group">
                <label className={`font-orbitron text-[10px] tracking-[0.3em] uppercase transition-all duration-500 ${focusedField === 'message' ? 'text-white' : 'text-zinc-400'}`}>
                  Message
                </label>
                <div className="relative mt-2">
                  <textarea 
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    rows={4} 
                    className="w-full bg-zinc-900/50 border border-zinc-800 text-white p-5 rounded-2xl focus:outline-none focus:border-white transition-all font-light text-lg resize-none placeholder:text-zinc-500" 
                    placeholder="How can we help you?"
                  />
                  {focusedField === 'message' && <motion.div layoutId="glow" className="absolute -inset-[1px] rounded-2xl border border-white/50 blur-[2px] pointer-events-none" />}
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-between bg-white text-zinc-950 p-6 rounded-2xl shadow-xl group"
              >
                <span className="font-orbitron text-[11px] font-bold tracking-[0.4em] uppercase">Submit Inquiry</span>
                <div className="w-10 h-10 rounded-full bg-zinc-950 flex items-center justify-center text-white transition-transform duration-500 group-hover:rotate-45">
                   <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                   </svg>
                </div>
              </motion.button>
            </form>
          </motion.div>

          {/* RIGHT: MAP & COORDINATES */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: premiumEase }}
            className="flex flex-col gap-8"
          >
            {/* Google Map Embed centered on Kundara, Kollam */}
            <div className="w-full h-full min-h-[400px] rounded-[3rem] overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000 border border-zinc-100 shadow-lg relative">
               {/* Map Loading Skeleton / Overlay to prevent harsh map load pop-in */}
               <div className="absolute inset-0 bg-zinc-100 -z-10" />
               <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15764.3312061266!2d76.6631!3d8.8849!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05fd4c2f6d0f17%3A0x6b8d3b8449c25f6c!2sKundara%2C%20Kerala!5e0!3m2!1sen!2sin!4v1715200000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="relative z-10 opacity-90 hover:opacity-100 transition-opacity duration-700 mix-blend-multiply"
              />
            </div>

            <div className="bg-zinc-50 p-8 rounded-[2rem] flex justify-between items-center border border-zinc-100">
               <div>
                  <p className="font-orbitron text-[9px] tracking-widest text-zinc-400 uppercase mb-2">Headquarters</p>
                  <p className="font-audiowide text-lg">Kundara, Kollam, Kerala</p>
               </div>
               <div className="flex flex-col items-end">
                  <p className="font-orbitron text-[9px] tracking-widest text-zinc-400 uppercase mb-2">Operational Status</p>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="font-audiowide text-sm">ACTIVE</span>
                  </div>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
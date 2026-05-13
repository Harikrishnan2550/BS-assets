"use client";

import Link from "next/link";
// FIX 1: Import Variants from framer-motion
import { motion, Variants } from "framer-motion";
import { Mail, Phone, MapPin, Send, Globe, ShieldCheck } from "lucide-react";

// FIX 2: Add 'as const' so TypeScript knows this is a fixed 4-number array
const premiumEase = [0.76, 0, 0.24, 1] as const;

// FIX 3: Add explicit ': Variants' typing
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const slideInDiagonal: Variants = {
  hidden: { opacity: 0, x: -40, y: 20 },
  visible: { 
    opacity: 1, 
    x: 0, 
    y: 0, 
    transition: { duration: 1, ease: premiumEase } 
  }
};

const CONTACT_CHANNELS = [
  {
    title: "General & Corporate",
    email: "info@bsassetsolutions.com",
    icon: <Globe className="w-5 h-5" />,
    tag: "HQ Support"
  },
  {
    title: "Loans & Consultancy",
    email: "finance@bsassetsolutions.com",
    icon: <ShieldCheck className="w-5 h-5" />,
    tag: "BS Consultancy"
  },
  {
    title: "Construction Division",
    email: "build@bsassetsolutions.com",
    icon: <MapPin className="w-5 h-5" />,
    tag: "BS Construction"
  }
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-zinc-950 overflow-hidden selection:bg-zinc-950 selection:text-white">
      
      {/* 1. Institutional Hero */}
      <section className="relative pt-32 pb-20 px-6 md:px-12 border-b border-zinc-100 bg-[#FAFAFA]">
        <div className="max-w-[1400px] mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: premiumEase }}
            className="flex flex-col items-center text-center"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="h-[1px] w-12 bg-zinc-300" />
              <span className="font-orbitron text-[10px] tracking-[0.5em] text-zinc-500 uppercase">Communication Protocol</span>
              <div className="h-[1px] w-12 bg-zinc-300" />
            </div>
            
            <h1 className="font-audiowide text-5xl md:text-8xl uppercase tracking-tighter leading-none mb-8">
              Let's <span className="text-zinc-400 italic">Connect.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-zinc-500 font-light max-w-2xl leading-relaxed">
              Initiate a dialogue with our specialized departments. We ensure a swift and precise response to all global and regional inquiries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Form & Info Layout */}
      <section className="py-24 px-6 md:px-12 max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 md:gap-24">
          
          {/* Left Column: Direct Channels */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-12"
          >
            <motion.div variants={slideInDiagonal}>
              <h3 className="font-orbitron text-[10px] tracking-[0.4em] text-zinc-400 uppercase mb-8">Established Channels</h3>
              <div className="space-y-4">
                {CONTACT_CHANNELS.map((channel, i) => (
                  <div 
                    key={i} 
                    className="group p-6 border border-zinc-100 rounded-2xl hover:border-zinc-950 hover:shadow-2xl transition-all duration-500 cursor-pointer"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-zinc-50 rounded-full group-hover:bg-zinc-950 group-hover:text-white transition-colors duration-500">
                        {channel.icon}
                      </div>
                      <span className="font-orbitron text-[9px] tracking-widest text-zinc-400 uppercase">{channel.tag}</span>
                    </div>
                    <h4 className="font-audiowide text-lg mb-1 uppercase">{channel.title}</h4>
                    <p className="text-zinc-500 font-light group-hover:text-zinc-950 transition-colors">{channel.email}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={slideInDiagonal} className="pt-8 border-t border-zinc-100">
              <h3 className="font-orbitron text-[10px] tracking-[0.4em] text-zinc-400 uppercase mb-4">Administrative HQ</h3>
              <p className="text-2xl font-light text-zinc-950 mb-2">Kerala, India</p>
              <div className="flex items-center gap-4 text-zinc-500">
                <Phone className="w-4 h-4" />
                <span className="font-light">+91 9846724677</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Inquiry Engine */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: premiumEase }}
            className="lg:col-span-7"
          >
            <form className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-zinc-200 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.05)] space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="relative">
                  <input type="text" id="name" placeholder=" " className="peer w-full bg-transparent border-b border-zinc-200 py-3 focus:outline-none focus:border-zinc-950 transition-colors" />
                  <label htmlFor="name" className="absolute left-0 top-3 text-zinc-400 text-sm font-orbitron uppercase tracking-widest pointer-events-none transition-all peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-zinc-950 peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-[10px]">Full Name</label>
                </div>
                <div className="relative">
                  <input type="email" id="email" placeholder=" " className="peer w-full bg-transparent border-b border-zinc-200 py-3 focus:outline-none focus:border-zinc-950 transition-colors" />
                  <label htmlFor="email" className="absolute left-0 top-3 text-zinc-400 text-sm font-orbitron uppercase tracking-widest pointer-events-none transition-all peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-zinc-950 peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-[10px]">Email Address</label>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="relative">
                  <input type="tel" id="phone" placeholder=" " className="peer w-full bg-transparent border-b border-zinc-200 py-3 focus:outline-none focus:border-zinc-950 transition-colors" />
                  <label htmlFor="phone" className="absolute left-0 top-3 text-zinc-400 text-sm font-orbitron uppercase tracking-widest pointer-events-none transition-all peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-zinc-950 peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-[10px]">Phone Number</label>
                </div>
                <div className="relative">
                  <select id="dept" defaultValue="" className="w-full bg-transparent border-b border-zinc-200 py-3 focus:outline-none focus:border-zinc-950 transition-colors text-zinc-500 text-sm font-orbitron uppercase tracking-widest cursor-pointer">
                    <option value="" disabled>Select Department</option>
                    <option value="loans">BS Consultancy (Loans)</option>
                    <option value="build">BS Construction</option>
                    <option value="saloon">Glam Up Saloon</option>
                    <option value="impact">BS Charity Impact</option>
                  </select>
                </div>
              </div>

              <div className="relative">
                <textarea id="message" rows={4} placeholder=" " className="peer w-full bg-transparent border-b border-zinc-200 py-3 focus:outline-none focus:border-zinc-950 transition-colors resize-none"></textarea>
                <label htmlFor="message" className="absolute left-0 top-3 text-zinc-400 text-sm font-orbitron uppercase tracking-widest pointer-events-none transition-all peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-zinc-950 peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-[10px]">Your Message Details</label>
              </div>

              <button type="submit" className="group flex items-center justify-between w-full bg-zinc-950 text-white p-6 rounded-2xl overflow-hidden relative">
                <span className="relative z-10 font-orbitron text-xs font-bold tracking-[0.4em] uppercase ml-4">Transmit Inquiry</span>
                <div className="relative z-10 w-10 h-10 rounded-full bg-white flex items-center justify-center text-zinc-950 group-hover:rotate-45 transition-transform duration-500">
                  <Send className="w-4 h-4" />
                </div>
                <div className="absolute inset-0 bg-zinc-800 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* 3. Global Reach (Google Map) */}
      <section className="relative w-full h-[600px] bg-zinc-100 overflow-hidden border-t border-zinc-200">
        <div className="absolute top-12 left-1/2 -translate-x-1/2 z-10">
          <div className="bg-white px-8 py-4 rounded-full shadow-2xl border border-zinc-200 flex items-center gap-4">
             <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
             <span className="font-orbitron text-[10px] tracking-[0.3em] uppercase text-zinc-900">Regional HQ Status: Online</span>
          </div>
        </div>

        {/* Google Map Embed - Centered on Kerala */}
        <iframe 
          title="BS Group Regional HQ"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1003445.1950266012!2d75.52906103366835!3d10.51860829837941!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0812ffd4a2d277%3A0x1ecba3a8b418439!2sKerala!5e0!3m2!1sen!2sin!4v1715421000000!5m2!1sen!2sin"
          className="w-full h-full grayscale opacity-80 contrast-125 invert-[0.05]"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        
        {/* Subtle Map Vignette */}
        <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_100px_rgba(0,0,0,0.05)]" />
      </section>

    </main>
  );
}
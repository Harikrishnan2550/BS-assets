"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';

// FIX: Added 'as const' to satisfy TypeScript's Easing tuple requirement
const premiumEase = [0.76, 0, 0.24, 1] as const;

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5, ease: premiumEase }}
      className="relative bg-[#050505] text-white pt-24 pb-12 px-6 md:px-12 border-t border-zinc-900 mt-auto overflow-hidden"
    >
      {/* Background Watermark */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 whitespace-nowrap pointer-events-none select-none opacity-[0.02] z-0">
        <span className="font-audiowide text-[12vw] uppercase leading-none">BS ASSET</span>
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 lg:gap-12 mb-24">
          
          {/* Brand Column (Col Span 4) */}
          <div className="md:col-span-12 lg:col-span-4 flex flex-col justify-between">
            <div>
              <Link href="/" className="inline-block group mb-8">
                <h2 className="font-audiowide text-2xl md:text-3xl uppercase tracking-widest">
                  BS ASSET
                </h2>
                <div className="flex items-center gap-4 mt-2">
                  <div className="h-[1px] w-12 bg-zinc-700 group-hover:w-20 transition-all duration-500" />
                  <span className="font-orbitron text-[9px] tracking-[0.4em] text-zinc-500 uppercase">Solutions</span>
                </div>
              </Link>
              <p className="text-zinc-400 text-sm font-light leading-relaxed max-w-sm">
                Managing Assets, Enhancing Lives, Building Futures. A diversified corporate group committed to excellence across finance, wellness, infrastructure, and philanthropy.
              </p>
            </div>
            
            <div className="mt-12 hidden lg:block">
               <div className="w-12 h-12 rounded-full border border-zinc-800 flex items-center justify-center bg-zinc-950">
                  <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
               </div>
            </div>
          </div>

          {/* Quick Links (Col Span 2) */}
          <div className="md:col-span-4 lg:col-span-2">
            <h4 className="font-orbitron text-[10px] uppercase tracking-[0.4em] mb-8 text-zinc-600">Index_Directory</h4>
            <ul className="space-y-4">
              {[
                { name: 'About Us', href: '/about', id: '01' },
                { name: 'Our Gallery', href: '/gallery', id: '02' },
                { name: 'Contact', href: '/contact', id: '03' }
              ].map((link) => (
                <li key={link.id}>
                  <Link href={link.href} className="group flex items-center gap-4">
                    <span className="font-orbitron text-[9px] text-zinc-700 group-hover:text-white transition-colors duration-300">{link.id}</span>
                    <span className="font-audiowide text-sm text-zinc-400 group-hover:text-white transition-colors duration-300">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Sectors (Col Span 3) */}
          <div className="md:col-span-4 lg:col-span-3">
            <h4 className="font-orbitron text-[10px] uppercase tracking-[0.4em] mb-8 text-zinc-600">Active_Sectors</h4>
            <ul className="space-y-4">
              {[
                { name: 'BS Consultancy', href: '/consultancy', id: 'FN' },
                { name: 'Glam Up Saloon', href: '/glam-up', id: 'WL' },
                { name: 'BS Construction', href: '/construction', id: 'IN' },
                { name: 'BS Charity', href: '/impact', id: 'IM' }
              ].map((link) => (
                <li key={link.id}>
                  <Link href={link.href} className="group flex items-center gap-4">
                    <span className="font-orbitron text-[9px] text-zinc-700 group-hover:text-white transition-colors duration-300">{link.id}</span>
                    <span className="font-audiowide text-sm text-zinc-400 group-hover:text-white transition-colors duration-300">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info (Col Span 3) */}
          <div className="md:col-span-4 lg:col-span-3">
            <h4 className="font-orbitron text-[10px] uppercase tracking-[0.4em] mb-8 text-zinc-600">HQ_Connection</h4>
            <div className="space-y-6">
              <div className="group cursor-default">
                <p className="font-orbitron text-[8px] tracking-[0.3em] text-zinc-600 uppercase mb-1">Location_Primary</p>
                <p className="font-audiowide text-sm text-zinc-300">Kundara, Kollam<br/>Kerala, India</p>
              </div>
              
              <div className="group">
                <p className="font-orbitron text-[8px] tracking-[0.3em] text-zinc-600 uppercase mb-1">Digital_Transmission</p>
                <a href="mailto:info@bsassetsolutions.com" className="font-audiowide text-sm text-zinc-300 border-b border-zinc-800 hover:border-white hover:text-white transition-colors pb-1 inline-block">
                  info@bsassetsolutions.com
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Technical Bottom Footer (Centered Alignment) */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col items-center justify-center gap-6">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 text-center">
             <span className="font-orbitron text-[8px] tracking-[0.4em] uppercase text-zinc-500">
               © {currentYear} BS Asset Solutions // All Rights Reserved
             </span>
             
             {/* Divider for desktop */}
             <div className="hidden md:block w-1 h-1 bg-zinc-800 rounded-full" />
             
             {/* Developed By Link */}
             <span className="font-orbitron text-[8px] tracking-[0.4em] uppercase text-zinc-500">
               Engineered by{" "}
               <a 
                 href="https://winshineinfotech.com/" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="text-zinc-300 hover:text-white transition-colors border-b border-zinc-800 hover:border-white pb-0.5 ml-1"
               >
                 Winshine Infotech
               </a>
             </span>

             {/* Divider for desktop */}
             <div className="hidden md:block w-1 h-1 bg-zinc-800 rounded-full" />
             
             <div className="flex gap-6 font-orbitron text-[8px] tracking-[0.4em] uppercase">
                <Link href="#" className="text-zinc-600 hover:text-zinc-300 transition-colors">Privacy</Link>
                <Link href="#" className="text-zinc-600 hover:text-zinc-300 transition-colors">Terms</Link>
             </div>
          </div>
        </div>

      </div>
    </motion.footer>
  );
}
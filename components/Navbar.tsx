"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS_LEFT = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
];

const NAV_LINKS_RIGHT = [
  { name: 'Gallery', href: '/gallery' },
];

const SECTORS = [
  {
    name: 'BS Consultancy',
    desc: 'Financial & Advisory Services',
    href: '/consultancy',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    name: 'Glam Up Saloon',
    desc: 'Premium Makeover Studios',
    href: '/glam-up',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    )
  },
  {
    name: 'BS Construction',
    desc: 'Architectural Excellence',
    href: '/construction',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    )
  },
  {
    name: 'BS Charity',
    desc: 'Our Community Impact',
    href: '/impact',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
      </svg>
    ),
    isDark: true
  }
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSectorsOpen, setIsSectorsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMobileMenuOpen(false);
    setIsSectorsOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className={`fixed left-0 w-full z-50 transition-all duration-700 ease-out flex justify-center px-6 pointer-events-none ${
          scrolled ? 'top-4' : 'top-8'
        }`}
      >
        <div className={`pointer-events-auto relative w-full max-w-7xl flex justify-between items-center transition-all duration-700 ${
          scrolled 
            ? 'bg-neutral-50/85 backdrop-blur-3xl border border-white/80 shadow-[0_16px_40px_-10px_rgba(0,0,0,0.08)] rounded-[2.5rem] px-5 py-3' 
            : 'bg-transparent px-2 py-2'
        }`}>
          
          {/* Logo Updated: Dynamic background based on scroll state */}
          <Link href="/" className="z-50 flex items-center outline-none">
            <div className={`w-32 h-11 flex items-center justify-center transition-all duration-500 rounded-full ${
              !scrolled 
                ? 'bg-white/90 backdrop-blur-md px-4 py-1.5 shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-white' 
                : 'bg-transparent border border-transparent'
            }`}>
              <img 
                src="/logo.png" 
                alt="BS Asset Logo" 
                className="w-full h-full object-contain" 
              />
            </div>
          </Link>

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center gap-2 bg-neutral-100/50 backdrop-blur-2xl border border-white/60 p-2 rounded-full shadow-sm font-orbitron">
            {NAV_LINKS_LEFT.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className="relative px-7 py-3 rounded-full text-[9px] uppercase tracking-[0.2em] font-semibold transition-colors duration-300 z-10 text-neutral-500 hover:text-neutral-900"
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 bg-white rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-white/80 -z-10"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className={`relative z-10 ${isActive ? 'text-neutral-900' : ''}`}>{link.name}</span>
                </Link>
              );
            })}

            {/* Sectors Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsSectorsOpen(true)}
              onMouseLeave={() => setIsSectorsOpen(false)}
            >
              <button className="relative px-7 py-3 rounded-full text-[9px] uppercase tracking-[0.2em] font-semibold transition-colors duration-300 z-10 flex items-center gap-2 text-neutral-500 hover:text-neutral-900">
                {pathname && pathname.match(/(consultancy|glam-up|construction|impact)/) && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 bg-white rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-white/80 -z-10"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <span className={`relative z-10 ${pathname && pathname.match(/(consultancy|glam-up|construction|impact)/) ? 'text-neutral-900' : ''}`}>Sectors</span>
                <motion.svg 
                  animate={{ rotate: isSectorsOpen ? 180 : 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="w-3.5 h-3.5 relative z-10" 
                  fill="none" viewBox="0 0 24 24" stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </motion.svg>
              </button>

              <AnimatePresence>
                {isSectorsOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 20, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 15, scale: 0.96 }}
                    transition={{ type: "spring", stiffness: 350, damping: 25 }}
                    className="absolute top-[130%] left-1/2 -translate-x-1/2 w-[400px] bg-white/95 backdrop-blur-3xl border border-neutral-100 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] rounded-[2rem] p-4 flex flex-col gap-2 z-50 origin-top"
                  >
                    {SECTORS.map((sector, idx) => (
                      <motion.div
                        key={sector.name}
                        initial={{ opacity: 0, x: -15 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 + 0.05, type: "spring", stiffness: 300 }}
                      >
                        <Link 
                          href={sector.href} 
                          className={`group/item flex items-center gap-5 p-4 rounded-3xl transition-all duration-400 ${
                            sector.isDark ? 'bg-neutral-900 hover:bg-neutral-800' : 'hover:bg-neutral-50'
                          }`}
                        >
                          <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                            sector.isDark 
                              ? 'bg-neutral-800 text-white group-hover/item:scale-110 group-hover/item:bg-neutral-700' 
                              : 'bg-white shadow-[0_4px_15px_rgba(0,0,0,0.03)] text-neutral-400 group-hover/item:text-neutral-900 group-hover/item:scale-105'
                          }`}>
                            {sector.icon}
                          </div>
                          <div>
                            <div className={`font-audiowide text-[10px] tracking-widest uppercase mb-1 transition-colors ${sector.isDark ? 'text-white' : 'text-neutral-900'}`}>
                              {sector.name}
                            </div>
                            <div className={`font-orbitron text-[8px] uppercase tracking-wider font-medium ${sector.isDark ? 'text-neutral-400' : 'text-neutral-500'}`}>
                              {sector.desc}
                            </div>
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {NAV_LINKS_RIGHT.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className="relative px-7 py-3 rounded-full text-[9px] uppercase tracking-[0.2em] font-semibold transition-colors duration-300 z-10 text-neutral-500 hover:text-neutral-900"
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 bg-white rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-white/80 -z-10"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className={`relative z-10 ${isActive ? 'text-neutral-900' : ''}`}>{link.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Link 
              href="/contact" 
              className="group relative inline-flex items-center gap-3 bg-neutral-900 text-white px-8 py-4 rounded-full font-orbitron text-[9px] uppercase tracking-[0.25em] font-semibold overflow-hidden transition-all hover:shadow-[0_12px_30px_-10px_rgba(0,0,0,0.3)] active:scale-95"
            >
              <span className="relative z-10">Get in touch</span>
              <div className="relative z-10 w-6 h-6 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </div>
              <motion.div 
                className="absolute inset-0 bg-neutral-800"
                initial={{ y: "100%" }}
                whileHover={{ y: "0%" }}
                transition={{ type: "tween", ease: "circOut", duration: 0.5 }}
              />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden relative z-50 w-12 h-12 bg-white/80 backdrop-blur-xl border border-neutral-200/50 rounded-full flex items-center justify-center text-neutral-900 shadow-[0_4px_20px_rgba(0,0,0,0.05)] active:scale-90 transition-all"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            <motion.div 
              animate={mobileMenuOpen ? "open" : "closed"}
              className="w-5 h-4 flex flex-col justify-between"
            >
              <motion.span 
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: 45, y: 7 },
                }}
                className="w-full h-[1.5px] bg-neutral-900 block rounded-full origin-center transition-transform duration-400"
              />
              <motion.span 
                variants={{
                  closed: { opacity: 1 },
                  open: { opacity: 0 },
                }}
                className="w-full h-[1.5px] bg-neutral-900 block rounded-full transition-opacity duration-400"
              />
              <motion.span 
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: -45, y: -7 },
                }}
                className="w-full h-[1.5px] bg-neutral-900 block rounded-full origin-center transition-transform duration-400"
              />
            </motion.div>
          </button>
        </div>
      </motion.header>

      {/* Full Screen Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "circle(0% at top right)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at top right)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at top right)" }}
            transition={{ type: "spring", damping: 30, stiffness: 150 }}
            className="fixed inset-0 z-40 bg-neutral-50/95 backdrop-blur-3xl md:hidden overflow-y-auto"
          >
            <div className="min-h-[100dvh] flex flex-col px-8 pt-40 pb-16">
              <div className="flex-1 flex flex-col gap-8">
                {[...NAV_LINKS_LEFT, ...NAV_LINKS_RIGHT].map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + i * 0.08, type: "spring", damping: 25 }}
                  >
                    <Link 
                      href={link.href}
                      className="font-audiowide text-4xl uppercase tracking-tighter text-neutral-900 hover:text-neutral-400 transition-colors inline-block"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}

                <motion.div 
                  initial={{ opacity: 0, scaleX: 0 }}
                  animate={{ opacity: 1, scaleX: 1 }}
                  transition={{ delay: 0.4, duration: 0.6, ease: "circOut" }}
                  className="w-full h-px bg-neutral-200/80 my-4 origin-left"
                />

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.45, type: "spring", damping: 25 }}
                >
                  <div className="font-orbitron text-[9px] font-bold uppercase tracking-[0.25em] text-neutral-400 mb-8">Our Sectors</div>
                  <div className="flex flex-col gap-6">
                    {SECTORS.map((sector, idx) => (
                      <motion.div
                        key={sector.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + idx * 0.08 }}
                      >
                        <Link 
                          href={sector.href}
                          className="flex items-center gap-5 group/mob"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <div className={`w-14 h-14 rounded-[1.25rem] flex items-center justify-center transition-transform duration-400 group/mob:scale-105 ${
                            sector.isDark ? 'bg-neutral-900 text-white' : 'bg-white shadow-[0_4px_20px_rgba(0,0,0,0.04)] text-neutral-500'
                          }`}>
                            {sector.icon}
                          </div>
                          <div>
                            <div className="font-audiowide text-sm uppercase tracking-wider text-neutral-900 mb-1">{sector.name}</div>
                            <div className="font-orbitron text-[9px] uppercase font-medium text-neutral-500">{sector.desc}</div>
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, type: "spring", damping: 25 }}
                className="mt-16"
              >
                <Link 
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-5 rounded-full bg-neutral-900 text-white flex items-center justify-center gap-3 font-orbitron text-[9px] uppercase tracking-[0.2em] font-semibold active:scale-95 transition-transform shadow-[0_10px_30px_rgba(0,0,0,0.15)]"
                >
                  Get in touch
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
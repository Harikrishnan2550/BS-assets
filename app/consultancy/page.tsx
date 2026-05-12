"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";

// FIX: Added 'as const' to satisfy Framer Motion's Easing tuple requirement
const premiumEase = [0.76, 0, 0.24, 1] as const;

// Staggered Animation Variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 1.2, 
      ease: premiumEase 
    } 
  }
};

const LOAN_SERVICES = [
  {
    id: "01",
    title: "Home Loans",
    desc: "Turn your architectural vision into reality. We offer end-to-end processing for new home construction and plot purchases with optimal interest rates.",
    action: "Inquire Now"
  },
  {
    id: "02",
    title: "Purchase Loans",
    desc: "Fast-tracked financing for purchasing ready-to-move-in apartments, luxury villas, or premium commercial properties.",
    action: "Inquire Now"
  },
  {
    id: "03",
    title: "Loan Takeover",
    desc: "Paying excessive interest? Transfer your existing high-interest loans to superior banking partners through our seamless balance transfer protocol.",
    action: "Calculate Savings"
  },
  {
    id: "04",
    title: "Mortgage (LAP)",
    desc: "Unlock the equity of your existing property. Secure high-value Loans Against Property for business expansion or critical financial requirements.",
    action: "Inquire Now"
  }
];

const BANKING_PARTNERS = [
  { name: "Federal Bank", img: "/federal bank.png" },
  { name: "HDFC Bank", img: "/HDFC Bank logo.png" },
  { name: "Union Bank", img: "/Union-Bank-of-India-Logo.png" },
  { name: "ICICI Bank", img: "/icici-bank-logo.png" },
  { name: "Repco Bank", img: "/Repco_Bank_Logo.png" },
  { name: "ESAF Small Finance", img: "/esaf-small-finance-bank-logo-1.png" },
  { name: "Chola", img: "/Chola-Logo.png" },
  { name: "Punjab National Bank", img: "/pnb.png" }
];

export default function ConsultancyPage() {
  return (
    <main className="min-h-screen bg-white text-zinc-950 overflow-hidden">
      
      {/* 1. Financial Hero Section */}
      <section className="relative py-32 md:py-52 px-6 md:px-12 flex flex-col items-center text-center border-b border-zinc-100 bg-[#FAFAFA] overflow-hidden">
        
        {/* Animated Breathing Radial Glow */}
        <motion.div 
          animate={{ scale: [1, 1.05, 1], opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#e4e4e7_0%,_transparent_70%)] pointer-events-none" 
        />
        
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center"
          >
            <motion.div variants={itemVariants} className="flex items-center gap-4 mb-8">
              <motion.div initial={{ width: 0 }} animate={{ width: 48 }} transition={{ duration: 1.5, ease: premiumEase }} className="h-[1px] bg-zinc-300" />
              <span className="font-orbitron text-[10px] tracking-[0.5em] text-zinc-500 uppercase">BS Consultancy Division</span>
              <motion.div initial={{ width: 0 }} animate={{ width: 48 }} transition={{ duration: 1.5, ease: premiumEase }} className="h-[1px] bg-zinc-300" />
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="font-audiowide text-5xl md:text-8xl lg:text-[9rem] tracking-tighter leading-[0.85] mb-8 uppercase">
              Financial <br />
              <span className="text-zinc-400 italic font-light">Future.</span>
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-lg md:text-xl text-zinc-500 font-light max-w-2xl mx-auto mb-12 leading-relaxed">
              Expert advisory and seamless processing for home loans, mortgages, and financial takeovers. We navigate the complexities of capital so you don't have to.
            </motion.p>
            
            <motion.div variants={itemVariants} whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400, damping: 25 }}>
              <Link 
                href="/contact" 
                className="group flex items-center justify-between gap-8 bg-zinc-950 text-white px-8 py-5 rounded-full shadow-[0_20px_40px_-10px_rgba(0,0,0,0.3)] hover:shadow-2xl transition-all duration-500"
              >
                <span className="font-orbitron text-[10px] font-bold tracking-[0.4em] uppercase ml-4">Request Callback</span>
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-zinc-950 group-hover:rotate-45 transition-transform duration-500">
                   <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                   </svg>
                </div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. Trust Banner */}
      <section className="py-20 px-6 md:px-12 bg-zinc-950 text-white text-center relative overflow-hidden">
        <motion.div 
          animate={{ backgroundPosition: ["0px 0px", "40px 40px"] }}
          transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
          className="absolute inset-0 opacity-[0.04] pointer-events-none" 
          style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} 
        />
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-center gap-16 md:gap-32 relative z-10"
        >
          <motion.div variants={itemVariants} className="group cursor-default">
            <div className="font-audiowide text-5xl md:text-6xl text-white mb-4 group-hover:scale-110 group-hover:text-zinc-300 transition-all duration-500">100%</div>
            <div className="font-orbitron text-[10px] text-zinc-500 uppercase tracking-[0.4em] group-hover:text-white transition-colors">Transparency</div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="hidden md:block w-px h-24 bg-gradient-to-b from-transparent via-zinc-700 to-transparent" />
          
          <motion.div variants={itemVariants} className="group cursor-default">
            <div className="font-audiowide text-5xl md:text-6xl text-white mb-4 group-hover:scale-110 group-hover:text-zinc-300 transition-all duration-500">Fast</div>
            <div className="font-orbitron text-[10px] text-zinc-500 uppercase tracking-[0.4em] group-hover:text-white transition-colors">Processing Engine</div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="hidden md:block w-px h-24 bg-gradient-to-b from-transparent via-zinc-700 to-transparent" />
          
          <motion.div variants={itemVariants} className="group cursor-default">
            <div className="font-audiowide text-5xl md:text-6xl text-white mb-4 group-hover:scale-110 group-hover:text-zinc-300 transition-all duration-500">Tier 1</div>
            <div className="font-orbitron text-[10px] text-zinc-500 uppercase tracking-[0.4em] group-hover:text-white transition-colors">Banking Partners</div>
          </motion.div>
        </motion.div>
      </section>

      {/* 3. Loan Services Grid */}
      <section className="py-24 md:py-40 px-6 md:px-12 max-w-[1400px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: premiumEase }}
          className="mb-20 flex flex-col md:flex-row justify-between items-end gap-8"
        >
          <div className="max-w-2xl">
            <span className="font-orbitron text-[10px] tracking-[0.5em] text-zinc-400 uppercase mb-4 block flex items-center gap-3">
               <span className="w-2 h-2 bg-zinc-950 rounded-full animate-pulse" /> Capital Allocation
            </span>
            <h2 className="font-audiowide text-4xl md:text-6xl uppercase tracking-tight mb-6">Financial Products</h2>
            <p className="text-zinc-500 font-light text-lg">Tailored loan structures designed to meet your specific personal and commercial requirements with industry-leading rates.</p>
          </div>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-6 md:gap-8"
        >
          {LOAN_SERVICES.map((service) => (
            <motion.div 
              key={service.id}
              variants={itemVariants}
              whileHover={{ y: -15, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="p-10 md:p-14 border border-zinc-200 rounded-[2.5rem] bg-zinc-50 hover:bg-zinc-950 hover:text-white hover:border-zinc-800 transition-colors duration-700 group flex flex-col justify-between cursor-pointer shadow-sm hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.4)]"
            >
              <div>
                <div className="flex justify-between items-start mb-12">
                  <motion.div 
                    whileHover={{ rotate: 90 }}
                    transition={{ duration: 0.5, ease: premiumEase }}
                    className="w-16 h-16 rounded-full border border-zinc-200 flex items-center justify-center group-hover:border-zinc-800 transition-colors"
                  >
                    <span className="font-audiowide text-xl text-zinc-400 group-hover:text-white transition-colors">{service.id}</span>
                  </motion.div>
                  <div className="w-12 h-12 rounded-full bg-zinc-200 flex items-center justify-center text-zinc-950 opacity-0 group-hover:opacity-100 group-hover:bg-white transition-all duration-500 -rotate-45 group-hover:rotate-0 scale-50 group-hover:scale-100">
                     <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                     </svg>
                  </div>
                </div>
                
                <h3 className="font-audiowide text-3xl uppercase mb-6 group-hover:translate-x-2 transition-transform duration-500">{service.title}</h3>
                <p className="font-light text-zinc-500 group-hover:text-zinc-400 leading-relaxed text-lg mb-12 transition-colors">
                  {service.desc}
                </p>
              </div>
              
              <div>
                <Link href="/contact" className="inline-block font-orbitron text-[10px] uppercase tracking-[0.3em] text-zinc-950 group-hover:text-white border-b border-zinc-950 group-hover:border-white pb-2 transition-colors">
                  {service.action}
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 4. Partner Gallery */}
      <section className="relative py-24 md:py-40 px-6 md:px-12 bg-[#FAFAFA] border-t border-zinc-200 overflow-hidden">
        <div className="absolute inset-0 bg-white opacity-50" style={{ backgroundImage: 'linear-gradient(#f4f4f5 1px, transparent 1px), linear-gradient(90deg, #f4f4f5 1px, transparent 1px)', backgroundSize: '100px 100px' }} />
        
        <div className="max-w-[1400px] mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: premiumEase }}
            className="mb-20 flex flex-col items-center text-center"
          >
            <span className="font-orbitron text-[10px] tracking-[0.5em] text-zinc-500 uppercase mb-4 block">Verified Network</span>
            <h2 className="font-audiowide text-4xl md:text-6xl uppercase tracking-tight text-zinc-900">Institutional Partners</h2>
            <p className="text-zinc-400 font-light max-w-md mt-6">Aligned with the nation's premier financial institutions to guarantee security and optimal capital routing.</p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 pb-16"
          >
            {BANKING_PARTNERS.map((bank, index) => {
              const isOffset = index % 2 !== 0;
              return (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  className={`w-full ${isOffset ? 'md:mt-16' : ''}`}
                >
                  <motion.div
                    whileHover={{ scale: 1.05, y: -12 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    className="aspect-[4/3] bg-white rounded-[2.5rem] p-8 flex items-center justify-center relative group shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.12)] border border-zinc-100/50 cursor-pointer"
                  >
                    <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-zinc-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                    <img 
                      src={bank.img} 
                      alt={`${bank.name} logo`} 
                      className="w-full h-full object-contain transition-all duration-700 group-hover:scale-110 relative z-10"
                    />
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </main>
  );
}
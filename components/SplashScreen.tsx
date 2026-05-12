"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function SplashScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Lock scrolling
    document.body.style.overflow = 'hidden';
    
    // Exact 2.2-second timer for a slower, more deliberate pace
    const timeout = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = ''; 
    }, 2200);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="splash"
          // FIX: Added 'as const' to the easing array
          exit={{ 
            y: "-100%", 
            transition: { duration: 1.2, ease: [0.85, 0, 0.15, 1] as const, delay: 0.1 } 
          }}
          className="fixed inset-0 z-[99999] bg-[#050505] flex items-center justify-center m-0 p-0"
        >
          {/* Logo Container */}
          <motion.div
            // Cinematic fade-in with a very slight blur removal and slow scale
            initial={{ opacity: 0, filter: "blur(8px)", scale: 0.95 }}
            animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
            // FIX: Added 'as const' to the easing array here as well
            exit={{ 
              opacity: 0, 
              filter: "blur(4px)", 
              scale: 1.02,
              y: -20,
              transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] as const } 
            }}
            transition={{ duration: 1.4, ease: "easeOut" }}
            className="flex flex-col items-center gap-6"
          >
            {/* Logo Image Replacement */}
            <div className="w-80 h-80 md:w-80 md:h-80 flex items-center justify-center">
              <img 
                src="/logo-white.png" 
                alt="BS Asset Logo" 
                className="w-full h-full object-contain"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
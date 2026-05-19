"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function WhatsAppButton() {
  // TODO: Replace with your actual WhatsApp number (include country code, exclude '+' or '00')
  // Example: "919876543210" for India
  const phoneNumber = "+919846724677"; 
  
  // The default message that will populate in the user's chat box
  const message = encodeURIComponent("Hello BS Asset Solutions, I would like to inquire about your services.");

  // Outer div handles the initial pop-in entrance after the splash screen
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 2.5, ease: [0.76, 0, 0.24, 1] }} 
      className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[9999]"
    >
      {/* Inner div handles the continuous floating/bobbing animation */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ 
          duration: 3, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      >
        <Link
          href={`https://wa.me/${phoneNumber}?text=${message}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-[#25D366] rounded-full shadow-[0_8px_30px_rgba(37,211,102,0.4)] hover:shadow-[0_8px_40px_rgba(37,211,102,0.8)] hover:scale-110 transition-all duration-300"
        >
          {/* Subtle Ping Animation Ring on Hover */}
          <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 group-hover:animate-ping" />
          
          {/* WhatsApp SVG Icon */}
          <svg 
            className="w-7 h-7 md:w-8 md:h-8 text-white relative z-10" 
            fill="currentColor" 
            viewBox="0 0 24 24"
          >
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.88-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.347-.272.297-1.04 1.016-1.04 2.479 0 1.463 1.065 2.876 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
          </svg>
        </Link>
      </motion.div>
    </motion.div>
  );
}
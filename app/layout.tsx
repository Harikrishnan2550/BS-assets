import type { Metadata } from "next";
import { Inter, Audiowide, Emilys_Candy, Orbitron } from "next/font/google"; 
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SplashScreen from "@/components/SplashScreen";

// 1. Configure standard font
const inter = Inter({ subsets: ["latin"] });

// 2. Configure Audiowide
const audiowide = Audiowide({ 
  weight: "400", 
  subsets: ["latin"],
  variable: "--font-audiowide" 
});

// 3. Configure Emily's Candy
const emilysCandy = Emilys_Candy({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-emilys"
});

// 4. Configure Orbitron (Supports multiple weights automatically)
const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron"
});

// --- ADVANCED GLOBAL SEO METADATA ---
export const metadata: Metadata = {
  title: {
    default: "BS Asset Solutions | Managing Assets, Building Futures",
    template: "%s | BS Asset Solutions" // This automatically appends to individual page titles
  },
  description: "A diversified corporate group based in Kerala, committed to excellence across financial consultancy, aesthetic wellness, structural engineering, and philanthropy.",
  keywords: [
    "BS Asset Solutions", 
    "Kerala Corporate Group", 
    "BS Consultancy", 
    "Glam Up Saloon", 
    "BS Construction", 
    "BS Charity",
    "Kollam Business",
    "Kundara"
  ],
  openGraph: {
    title: "BS Asset Solutions",
    description: "Managing Assets, Enhancing Lives, Building Futures.",
    url: "https://bsassetsolutions.com", // Remember to update this to your live domain later
    siteName: "BS Asset Solutions",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* 5. Inject all font variables into the body */}
      <body className={`${inter.className} ${audiowide.variable} ${emilysCandy.variable} ${orbitron.variable} bg-[#050505] text-white antialiased flex flex-col min-h-screen`}>
        <SplashScreen /> 
        <Navbar />
        <div className="flex-grow">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
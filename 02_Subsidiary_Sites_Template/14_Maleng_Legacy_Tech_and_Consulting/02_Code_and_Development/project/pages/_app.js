import '../styles/globals.css';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }) {
  const [isClient, setIsClient] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [bgImage, setBgImage] = useState(0);
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const router = useRouter();
  
  // Tech-themed background images
  const backgrounds = [
    'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&q=80',
    'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&q=80',
    'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1920&q=80',
    'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1920&q=80',
    'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80',
    'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1920&q=80',
    'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1920&q=80',
    'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1920&q=80',
  ];

  useEffect(() => {
    setIsClient(true);
    const handleScroll = () => setIsScrolled(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isClient) return;
    const interval = setInterval(() => {
      setBgImage((prev) => (prev + 1) % backgrounds.length);
    }, 30000);
    return () => clearInterval(interval);
  }, [isClient, backgrounds.length]);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [router.pathname]);

  return (
    <>
      <Head>
        <meta name="format-detection" content="telephone=no, date=no, email=no, address=no" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#003366" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </Head>

      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-highlight to-accent z-50"
        style={{ scaleX, transformOrigin: '0%' }}
      />

      {/* Global Page Background */}
      {isClient && (
        <div className="fixed inset-0 z-[-2] overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 scale-105"
            style={{ 
              backgroundImage: `url(${backgrounds[bgImage]})`,
              animation: 'kenBurns 20s ease-in-out infinite'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/80" />
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `
                linear-gradient(rgba(20, 210, 209, 0.15) 1px, transparent 1px),
                linear-gradient(90deg, rgba(20, 210, 209, 0.15) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px',
            }}
          />
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-highlight/15 rounded-full blur-3xl animate-float-slow" />
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/15 rounded-full blur-3xl animate-float-slower" />
          <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-secondary/10 rounded-full blur-3xl animate-float-medium" />
          
          <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 200 L200 200 L250 150 L400 150 L450 200 L600 200" fill="none" stroke="#14d2d1" strokeWidth="1" strokeDasharray="5 5"/>
            <path d="M800 400 L950 400 L1000 350 L1150 350 L1200 400 L1350 400" fill="none" stroke="#14d2d1" strokeWidth="1" strokeDasharray="5 5"/>
            <circle cx="250" cy="150" r="3" fill="#14d2d1" opacity="0.5"/>
            <circle cx="1000" cy="350" r="3" fill="#14d2d1" opacity="0.5"/>
          </svg>
        </div>
      )}

      {/* Floating CTA Button - Appears when scrolled */}
      {isClient && isScrolled && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          className="fixed bottom-8 right-8 z-50"
        >
          <Link
            href="/contact"
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-highlight to-accent text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <span>📞</span>
            <span>Free Consultation</span>
          </Link>
        </motion.div>
      )}

      {/* Back to Top Button */}
      {isClient && isScrolled && (
        <motion.button
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 left-8 z-50 w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center hover:bg-highlight/20 hover:border-highlight transition-all duration-300"
        >
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </motion.button>
      )}

      <Component {...pageProps} />
    </>
  );
}
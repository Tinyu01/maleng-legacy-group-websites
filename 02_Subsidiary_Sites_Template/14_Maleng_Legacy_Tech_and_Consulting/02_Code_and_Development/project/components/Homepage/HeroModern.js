import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { FaArrowRight, FaPlay, FaPause, FaChevronDown } from 'react-icons/fa';

const slides = [
  {
    id: 1,
    badge: "☁️ CLOUD INFRASTRUCTURE",
    title: "Cloud &",
    highlight: "Hosting",
    description: "Scalable cloud solutions, managed hosting, and enterprise infrastructure for growing businesses.",
    ctaPrimary: "Explore Solutions",
    ctaSecondary: "View Pricing",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=2000&q=90",
  },
  {
    id: 2,
    badge: "💼 PROFESSIONAL SERVICES",
    title: "Maleng Legacy",
    highlight: "Tech & Consulting",
    description: "Transforming businesses through innovative technology solutions and strategic IT consulting.",
    ctaPrimary: "Request Consultation",
    ctaSecondary: "Our Services",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=2000&q=90",
  },
  {
    id: 3,
    badge: "🔒 ENTERPRISE SECURITY",
    title: "Cybersecurity",
    highlight: "Solutions",
    description: "Protect your business with enterprise-grade security, 24/7 monitoring, and compliance expertise.",
    ctaPrimary: "Learn More",
    ctaSecondary: "Get Protected",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=2000&q=90",
  },
  {
    id: 4,
    badge: "💡 DIGITAL TRANSFORMATION",
    title: "Digital",
    highlight: "Innovation",
    description: "Future-proof your business with cutting-edge digital solutions and transformation strategies.",
    ctaPrimary: "Start Journey",
    ctaSecondary: "Case Studies",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=2000&q=90",
  },
  {
    id: 5,
    badge: "🌐 GLOBAL CONNECTIVITY",
    title: "Network",
    highlight: "Solutions",
    description: "Connect your business worldwide with enterprise-grade networking and SD-WAN solutions.",
    ctaPrimary: "Get Connected",
    ctaSecondary: "Learn More",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=2000&q=90",
  }
];

export default function HeroModern() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsPlaying(false);
    setTimeout(() => setIsPlaying(true), 8000);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
    setIsPlaying(false);
    setTimeout(() => setIsPlaying(true), 8000);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
    setIsPlaying(false);
    setTimeout(() => setIsPlaying(true), 8000);
  };

  const current = slides[currentIndex];

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* Background Image */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current.id}
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 1.1, opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${current.image})` }}
        />
      </AnimatePresence>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/15 via-black/70 to-black/50" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:60px_60px] opacity-40 pointer-events-none" />

      {/* Content - Perfectly centered vertically between nav and scroll indicator */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Spacer to push content down from navigation */}
        <div className="flex-1"></div>
        
        {/* Main Content - Centered */}
        <div className="flex-1 flex flex-col items-center justify-center">
          <div className="max-w-5xl mx-auto px-6 md:px-8 w-full">
            <div className="text-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  {/* Badge */}
                  <div className="inline-flex items-center gap-2 mb-6 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
                    <span className="text-2xl">{current.badge.split(' ')[0]}</span>
                    <span className="uppercase tracking-[2px] text-sm font-semibold text-white/90">
                      {current.badge.split(' ').slice(1).join(' ')}
                    </span>
                  </div>

                  {/* Title */}
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.15] tracking-tight">
                    {current.title}{' '}
                    <span className="bg-gradient-to-r from-highlight via-accent to-highlight bg-clip-text text-transparent">
                      {current.highlight}
                    </span>
                  </h1>

                  {/* Description */}
                  <p className="text-base md:text-lg lg:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed mt-4">
                    {current.description}
                  </p>

                  {/* CTAs */}
                  <div className="flex flex-wrap justify-center gap-3 pt-6">
                    <Link
                      href="/contact"
                      className="group px-6 py-2.5 bg-gradient-to-r from-highlight to-accent text-white font-semibold rounded-lg flex items-center gap-2 hover:scale-105 active:scale-95 transition-all duration-300 text-sm md:text-base"
                    >
                      {current.ctaPrimary}
                      <FaArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>

                    <Link
                      href="/services"
                      className="px-6 py-2.5 border border-white/30 hover:border-white text-white font-semibold rounded-lg flex items-center gap-2 transition-all duration-300 backdrop-blur-sm hover:bg-white/10 text-sm md:text-base"
                    >
                      {current.ctaSecondary}
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
        
        {/* Spacer after content */}
        <div className="flex-1"></div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-20 left-0 right-0 z-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between">
            {/* Slide Counter */}
            <div className="hidden md:flex items-center gap-2">
              <span className="text-3xl font-bold text-white tabular-nums">{String(currentIndex + 1).padStart(2, '0')}</span>
              <span className="text-white/30 text-xl">/</span>
              <span className="text-white/50 text-xl">{String(slides.length).padStart(2, '0')}</span>
            </div>

            {/* Center Controls */}
            <div className="flex items-center gap-6 mx-auto md:mx-0">
              {/* LEFT BUTTON - Fixed to point LEFT */}
              <button
                onClick={prevSlide}
                className="p-3 rounded-full bg-white/10 backdrop-blur border border-white/20 hover:bg-white/20 hover:border-highlight/50 transition-all group"
                aria-label="Previous slide"
              >
                <svg className="w-5 h-5 text-white group-hover:-translate-x-0.5 transition" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Dots */}
              <div className="flex gap-3">
                {slides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => goToSlide(idx)}
                    className={`transition-all duration-500 rounded-full ${
                      idx === currentIndex 
                        ? 'bg-highlight w-8 h-2.5' 
                        : 'bg-white/40 hover:bg-white/70 w-2.5 h-2.5'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              {/* RIGHT BUTTON - Fixed to point RIGHT */}
              <button
                onClick={nextSlide}
                className="p-3 rounded-full bg-white/10 backdrop-blur border border-white/20 hover:bg-white/20 hover:border-highlight/50 transition-all group"
                aria-label="Next slide"
              >
                <svg className="w-5 h-5 text-white group-hover:translate-x-0.5 transition" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Play/Pause Button */}
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full bg-white/10 backdrop-blur border border-white/20 hover:border-white/50 transition-all"
            >
              {isPlaying ? (
                <>
                  <FaPause className="w-3 h-3" />
                  <span>Pause</span>
                </>
              ) : (
                <>
                  <FaPlay className="w-3 h-3" />
                  <span>Play</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden lg:flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity cursor-pointer"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <span className="text-xs text-white/60 uppercase tracking-wider font-medium">Scroll to explore</span>
        <FaChevronDown className="w-4 h-4 text-white/60 animate-bounce" />
      </motion.div>
    </section>
  );
}
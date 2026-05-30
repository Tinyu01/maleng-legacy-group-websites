import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function ParallaxHero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);

  return (
    <section ref={ref} className="relative h-screen overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-primary opacity-90"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920")',
            backgroundAttachment: 'fixed'
          }}
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-7xl font-bold mb-6 text-white">
              Diversified Solutions <br />
              <span className="gradient-text">Built for Growth</span>
            </h1>
            <p className="text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
              South Africa&apos;s premier holding company delivering integrated business solutions across 18+ subsidiaries and 4 strategic clusters
            </p>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-8">
              <div className="backdrop-blur-lg bg-white/10 rounded-xl p-6 border border-white/20">
                <div className="text-4xl font-bold text-white mb-2">18+</div>
                <div className="text-sm text-gray-200">Subsidiaries</div>
              </div>
              <div className="backdrop-blur-lg bg-white/10 rounded-xl p-6 border border-white/20">
                <div className="text-4xl font-bold text-white mb-2">4</div>
                <div className="text-sm text-gray-200">Core Clusters</div>
              </div>
              <div className="backdrop-blur-lg bg-white/10 rounded-xl p-6 border border-white/20">
                <div className="text-4xl font-bold text-white mb-2">5K+</div>
                <div className="text-sm text-gray-200">Team Members</div>
              </div>
              <div className="backdrop-blur-lg bg-white/10 rounded-xl p-6 border border-white/20">
                <div className="text-4xl font-bold text-white mb-2">BEE L1</div>
                <div className="text-sm text-gray-200">Certified</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/solutions" className="btn-primary">
                Explore Our Solutions
              </a>
              <a href="#video" className="btn-outline backdrop-blur-lg bg-white/10 border-white/30 hover:bg-white/20">
                Watch Demo
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="flex flex-col items-center gap-2 text-white">
          <span className="text-sm">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

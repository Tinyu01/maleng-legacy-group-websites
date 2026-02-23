import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function NewsUpdates() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const news = [
    {
      date: 'Feb 15, 2026',
      category: 'Expansion',
      headline: 'Maleng Legacy Group announces acquisition of 3 new subsidiaries in Western Cape',
      badge: 'NEW'
    },
    {
      date: 'Feb 10, 2026',
      category: 'Recognition',
      headline: 'Achieved B-BBEE Level 1 status for third consecutive year',
      badge: 'ACHIEVEMENT'
    },
    {
      date: 'Feb 5, 2026',
      category: 'Partnership',
      headline: 'Strategic partnership signed with Gauteng Provincial Government for R250M infrastructure project',
      badge: 'PARTNERSHIP'
    },
    {
      date: 'Jan 28, 2026',
      category: 'Innovation',
      headline: 'Launched AI-powered property management platform across portfolio',
      badge: 'TECH'
    },
    {
      date: 'Jan 20, 2026',
      category: 'Awards',
      headline: 'Named "Fastest Growing Holding Company" at SA Business Awards 2025',
      badge: 'AWARD'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % news.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [news.length]);

  return (
    <section className="py-6 bg-gradient-to-r from-secondary via-primary to-secondary relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 50px, rgba(233, 69, 96, 0.1) 50px, rgba(233, 69, 96, 0.1) 51px)'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="flex items-center gap-2 shrink-0">
            <div className="px-4 py-2 bg-accent rounded-lg">
              <span className="text-white font-bold text-sm">📰 LATEST NEWS</span>
            </div>
          </div>

          <div className="flex-1 overflow-hidden">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3"
            >
              <span className="px-2 py-1 bg-gold/20 border border-gold/40 rounded text-gold text-xs font-bold shrink-0">
                {news[currentIndex].badge}
              </span>
              <span className="text-gray-400 text-sm shrink-0">
                {news[currentIndex].date}
              </span>
              <span className="text-white font-semibold">
                {news[currentIndex].headline}
              </span>
            </motion.div>
          </div>

          <div className="flex gap-2 shrink-0">
            {news.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all ${
                  idx === currentIndex ? 'bg-accent w-6' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

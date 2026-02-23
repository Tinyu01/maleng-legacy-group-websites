import { motion } from 'framer-motion';
import { useState } from 'react';

export default function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/30 to-primary/30"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            See Our <span className="gradient-text">Impact</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover how we're building sustainable economic legacies across South Africa's key sectors.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl group"
        >
          {/* Video Placeholder */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
            <div className="text-center">
              {!isPlaying ? (
                <button
                  onClick={() => setIsPlaying(true)}
                  className="w-20 h-20 bg-accent rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg hover:shadow-accent/50"
                >
                  <svg className="w-10 h-10 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                  </svg>
                </button>
              ) : (
                <div className="text-white">
                  <div className="text-6xl mb-4">📹</div>
                  <p className="text-lg">Video Player Coming Soon</p>
                  <p className="text-sm text-gray-300 mt-2">CEO Welcome Message & Company Overview</p>
                </div>
              )}
            </div>
          </div>

          {/* Overlay Text */}
          {!isPlaying && (
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  CEO Welcome: Building Economic Legacies
                </h3>
                <p className="text-gray-300 text-sm">
                  Masingita Ottis Maluleke shares the vision behind Maleng Legacy Group • 3:45
                </p>
              </div>
            </div>
          )}
        </motion.div>

        {/* Video Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 mt-8"
        >
          <div className="card text-center">
            <div className="text-3xl mb-2">🎥</div>
            <div className="text-2xl font-bold gradient-text mb-1">2.5K+</div>
            <div className="text-sm text-gray-400">Views This Month</div>
          </div>
          <div className="card text-center">
            <div className="text-3xl mb-2">💬</div>
            <div className="text-2xl font-bold gradient-text mb-1">150+</div>
            <div className="text-sm text-gray-400">Consultation Requests</div>
          </div>
          <div className="card text-center">
            <div className="text-3xl mb-2">⭐</div>
            <div className="text-2xl font-bold gradient-text mb-1">4.9/5</div>
            <div className="text-sm text-gray-400">Viewer Rating</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

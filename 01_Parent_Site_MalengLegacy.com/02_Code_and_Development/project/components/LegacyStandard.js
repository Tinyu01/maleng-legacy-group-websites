import React from 'react';
import { motion } from 'framer-motion';

const standards = [
  { 
    title: 'National Reach', 
    desc: 'Headquartered in Gauteng with a service footprint across all 9 provinces.',
    icon: '🌍'
  },
  { 
    title: 'Vertical Integration', 
    desc: 'We capture 100% value through our internal supply chain "Closed-Loop".',
    icon: '⛓️'
  },
  { 
    title: 'Heritage Rooted', 
    desc: 'Built on the legacy of Malenga, Phikela, and Yingwani/Tinyukunyuku.',
    icon: '🏛️'
  },
];

const LegacyStandard = () => (
  <motion.section
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    className="mb-16 py-12 bg-gradient-to-r from-earth-brown/20 to-earth-green/20 p-8 rounded-3xl"
  >
    <h2 className="text-4xl font-bold text-gold-accent mb-12 text-center">The Maleng Legacy Standard</h2>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
      {standards.map((standard, idx) => (
        <motion.div
          key={idx}
          className="bg-white/80 p-6 rounded-xl shadow-lg card-hover"
          whileHover={{ scale: 1.05 }}
        >
          <div className="text-5xl mb-4">{standard.icon}</div>
          <h3 className="text-xl font-bold text-earth-brown mb-2">{standard.title}</h3>
          <p className="text-gray-700">{standard.desc}</p>
        </motion.div>
      ))}
    </div>

    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="bg-white/80 p-8 rounded-xl shadow-lg"
      >
        <h3 className="text-2xl font-bold text-earth-brown mb-3">Mission</h3>
        <p className="text-lg text-gray-700">
          To build sustainable economic legacies through a diversified National Holding Company that provides world-class, integrated solutions across infrastructure, professional, operational, and consumer sectors — while maintaining a commitment to black excellence and heritage.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="bg-white/80 p-8 rounded-xl shadow-lg"
      >
        <h3 className="text-2xl font-bold text-earth-brown mb-3">Vision</h3>
        <p className="text-lg text-gray-700">
          To become South Africa's leading heritage-rooted National Holding Company with 4 profitable clusters, 18+ subsidiaries, and R100 million+ annual turnover by 2030 — recognized as a household name for quality, reliability, and black-owned industrial excellence.
        </p>
      </motion.div>
    </div>
  </motion.section>
);

export default LegacyStandard;

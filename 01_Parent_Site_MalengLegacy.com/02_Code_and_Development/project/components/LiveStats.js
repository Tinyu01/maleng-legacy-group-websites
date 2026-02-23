import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function LiveStats() {
  const [counts, setCounts] = useState({
    subsidiaries: 0,
    projects: 0,
    jobs: 0,
    investment: 0
  });

  useEffect(() => {
    const targets = {
      subsidiaries: 18,
      projects: 247,
      jobs: 1450,
      investment: 450
    };

    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      
      setCounts({
        subsidiaries: Math.floor(targets.subsidiaries * progress),
        projects: Math.floor(targets.projects * progress),
        jobs: Math.floor(targets.jobs * progress),
        investment: Math.floor(targets.investment * progress)
      });

      if (step >= steps) {
        clearInterval(timer);
        setCounts(targets);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const stats = [
    { 
      value: `${counts.subsidiaries}+`, 
      label: 'Active Subsidiaries', 
      icon: '🏢',
      subtitle: 'Across 4 Core Clusters'
    },
    { 
      value: `${counts.projects}+`, 
      label: 'Projects Delivered', 
      icon: '✅',
      subtitle: 'Since 2020 Inception'
    },
    { 
      value: `${counts.jobs.toLocaleString()}+`, 
      label: 'Jobs Created', 
      icon: '👥',
      subtitle: 'Direct & Indirect Employment'
    },
    { 
      value: `R${counts.investment}M+`, 
      label: 'Investment Value', 
      icon: '💰',
      subtitle: 'Portfolio Capitalization'
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary to-secondary opacity-40"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our Impact <span className="gradient-text">By The Numbers</span>
          </h2>
          <p className="text-xl text-gray-300">Real-time insights into our growth and economic contribution</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card text-center group hover:border-accent/50 transition-all"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>
              <div className="text-4xl font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-lg font-semibold text-white mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-gray-400">
                {stat.subtitle}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

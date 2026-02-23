import React from 'react';
import { motion } from 'framer-motion';

const TrustSignals = () => {
  const certifications = [
    { name: 'B-BBEE Level 1', icon: '⭐' },
    { name: 'ISO 9001:2015', icon: '✓' },
    { name: 'NOSA 5-Star', icon: '🏆' },
    { name: 'BEE Enterprise', icon: '💼' },
  ];

  const achievements = [
    {
      title: 'Industry Recognition',
      items: ['Top Holding Companies in SA', 'Best Diversification Strategy', 'Innovation Leaders'],
    },
    {
      title: 'Client Satisfaction',
      items: ['98% Client Retention', '500+ Active Corporate Clients', 'Zero Major Incidents'],
    },
    {
      title: 'Financial Strength',
      items: ['Conservative Debt Ratios', 'Profitable Operations', 'Consistent Growth'],
    },
  ];

  return (
    <section className="py-section px-4 bg-surface/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Trusted by Industry Leaders</h2>
          <p className="section-subtitle mx-auto">
            Our commitment to excellence is backed by certifications, achievements, and transparent operations.
          </p>
        </motion.div>

        {/* Certifications */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              className="card text-center"
            >
              <div className="text-4xl mb-3">{cert.icon}</div>
              <p className="font-semibold text-sm">{cert.name}</p>
            </motion.div>
          ))}
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {achievements.map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              className="card"
            >
              <h3 className="text-xl font-bold mb-6 text-accent">{section.title}</h3>
              <ul className="space-y-3">
                {section.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-accent text-lg">✓</span>
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-16 p-12 card bg-gradient-to-r from-accent/20 to-transparent border-l-4 border-accent"
        >
          <p className="text-lg text-gray-300 mb-4 italic">
            "Maleng Legacy Group's integrated approach to business has transformed how we operate across multiple sectors. Their expertise and commitment to excellence is unmatched in the South African market."
          </p>
          <div>
            <p className="font-bold">CEO, Fortune 500 Company</p>
            <p className="text-sm text-gray-400">Enterprise Client</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustSignals;

import React from 'react';
import { motion } from 'framer-motion';

const InvestorRelations = () => {
  const highlights = [
    {
      title: 'B-BBEE Status',
      description: 'Level 1 Contributor - Enterprise Development',
      icon: '✓'
    },
    {
      title: 'Diversified Portfolio',
      description: '4 core clusters spanning multiple sectors',
      icon: '◆'
    },
    {
      title: 'Vertical Integration',
      description: 'Asset protection & operational efficiency',
      icon: '≡'
    },
    {
      title: 'Growth Strategy',
      description: 'R50-100M+ revenue target (Phase 2)',
      icon: '→'
    }
  ];

  return (
    <section id="investor" className="py-20 px-4 bg-white/2">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-2">Investor Relations</h2>
          <p className="text-gray-300">Transparent, institutional-grade business fundamentals</p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {highlights.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-gradient-to-br from-earth-brown/20 to-transparent border border-earth-brown/30 rounded-lg p-6"
            >
              <div className="text-3xl text-gold-accent mb-3">{item.icon}</div>
              <h3 className="font-bold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-gray-300">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white/5 border border-white/10 rounded-lg p-12"
        >
          <h3 className="text-2xl font-bold text-white mb-6">Key Investment Highlights</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <p className="text-gold-accent font-bold mb-2">Financial Discipline</p>
              <p className="text-gray-300 text-sm">Conservative capital deployment with focus on sustainable growth and asset protection across the group.</p>
            </div>
            <div>
              <p className="text-gold-accent font-bold mb-2">Strategic Positioning</p>
              <p className="text-gray-300 text-sm">Positioned in high-growth sectors with proven management capability and clear expansion roadmap.</p>
            </div>
            <div>
              <p className="text-gold-accent font-bold mb-2">Stakeholder Value</p>
              <p className="text-gray-300 text-sm">Committed to creating long-term sustainable value for employees, partners, and investors.</p>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-white/10">
            <p className="text-gray-300 text-sm mb-4">For investor inquiries and financial information:</p>
            <a href="mailto:investors@malenglegacy.co.za" className="inline-block px-6 py-3 bg-earth-brown text-white font-medium rounded hover:bg-opacity-90 transition">
              Contact Investor Relations
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InvestorRelations;

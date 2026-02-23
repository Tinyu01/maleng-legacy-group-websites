import React from 'react';
import { motion } from 'framer-motion';

const Management = () => {
  const executives = [
    {
      name: 'Masingita Ottis Maluleke',
      title: 'Founder & Group CEO',
      bio: 'Visionary leader with 20+ years of experience in diversified business operations, strategic investments, and holding company management.',
      focus: 'Strategic direction, M&A, investor relations'
    },
    {
      name: 'TBD',
      title: 'Chief Financial Officer',
      bio: 'Responsible for financial strategy, treasury management, and group-wide financial compliance.',
      focus: 'Finance, Treasury, Risk Management'
    },
    {
      name: 'TBD',
      title: 'Chief Operating Officer',
      bio: 'Oversees operational excellence across all subsidiaries and ensures alignment with group strategy.',
      focus: 'Operations, Quality, Performance'
    },
    {
      name: 'TBD',
      title: 'Chief Human Capital Officer',
      bio: 'Leads talent strategy, organizational development, and culture across the group.',
      focus: 'HR, Talent, Compliance'
    }
  ];

  return (
    <section id="management" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-2">Executive Leadership</h2>
          <p className="text-gray-300">Building sustainable value through experienced leadership</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {executives.map((exec, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-gold-accent/50 transition"
            >
              <h3 className="text-xl font-bold text-white mb-1">{exec.name}</h3>
              <p className="text-gold-accent text-sm font-medium mb-3">{exec.title}</p>
              <p className="text-gray-300 text-sm mb-3">{exec.bio}</p>
              <div className="pt-3 border-t border-white/10">
                <p className="text-xs text-gray-400">
                  <span className="font-semibold text-white">Focus Areas:</span> {exec.focus}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Management;

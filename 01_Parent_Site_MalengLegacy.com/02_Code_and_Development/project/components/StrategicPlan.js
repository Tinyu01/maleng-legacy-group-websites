import React from 'react';
import { motion } from 'framer-motion';

const phases = [
  {
    phase: 'PHASE 1: Foundation & Consolidation',
    timeline: 'Year 1',
    color: 'from-blue-500 to-blue-600',
    actions: [
      'Establish Maleng Legacy Assets (Pty) Ltd',
      'Launch Professional Services Cluster (Tech, Media, Corporate)',
      'Launch Agri-Consumer initial entities (Catering, Events)',
      'Appoint Group CFO & Director of Professional Services'
    ],
    metrics: ['R3-8M revenue', 'Break-even Month 11-12', '4-6 active subsidiaries']
  },
  {
    phase: 'PHASE 2: Industrial Acceleration',
    timeline: 'Year 2',
    color: 'from-purple-500 to-purple-600',
    actions: [
      'Launch Infrastructure Cluster (Construction, Property, Energy)',
      'Launch Logistics & Fleet to support internal operations',
      'Appoint Director of Infrastructure & Director of Operations',
      'Secure first major government tender'
    ],
    metrics: ['R10-18M revenue', '10-12 active subsidiaries', 'Positive Group net profit']
  },
  {
    phase: 'PHASE 3: Vertical Integration & Training',
    timeline: 'Year 3',
    color: 'from-green-500 to-green-600',
    actions: [
      'Launch Maleng Legacy Training Institute (SETA-accredited)',
      'Full-scale Agri & Livestock production (Mopani + Poultry)',
      'Close 100% internal supply loop (Agri → Catering)',
      'Appoint Director of Agri-Consumer'
    ],
    metrics: ['R20-30M revenue', 'Self-sustaining talent pipeline', '15-16 active subsidiaries']
  },
  {
    phase: 'PHASE 4: National Expansion',
    timeline: 'Year 4',
    color: 'from-amber-500 to-amber-600',
    actions: [
      'Scale Security & Facility Management to national contracts',
      'Launch Maleng Legacy Capital & Investments',
      'Acquire smaller competitors or equity stakes in startups',
      'Appoint Regional Managers (Western Cape, KZN, Limpopo)'
    ],
    metrics: ['R30-45M revenue', 'Multi-province presence', 'First strategic acquisition']
  },
  {
    phase: 'PHASE 5: Legacy & Market Leadership',
    timeline: 'Year 5',
    color: 'from-red-500 to-red-600',
    actions: [
      'National conglomerate status achieved',
      'Potential Group IPO or private equity partnership',
      'International expansion planning (SADC region)',
      'Full 18+ subsidiary portfolio active'
    ],
    metrics: ['R50-100M+ revenue', 'Household name status', 'Billionaire-grade ecosystem']
  }
];

const StrategicPlan = () => (
  <motion.section
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    className="mb-16 py-12"
  >
    <h2 className="text-4xl font-bold text-gold-accent mb-12 text-center">Five-Year Strategic Growth Roadmap</h2>
    <div className="space-y-6">
      {phases.map((phase, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.1 }}
          className={`bg-gradient-to-r ${phase.color} p-8 rounded-xl shadow-lg text-white card-hover`}
        >
          <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">{phase.phase}</h3>
              <p className="text-white/90 text-lg">{phase.timeline}</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-bold text-lg mb-4 border-b border-white/30 pb-2">Key Actions</h4>
              <ul className="space-y-2">
                {phase.actions.map((action, actionIdx) => (
                  <li key={actionIdx} className="flex items-start">
                    <span className="mr-3">✓</span>
                    <span>{action}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4 border-b border-white/30 pb-2">Success Metrics</h4>
              <ul className="space-y-2">
                {phase.metrics.map((metric, metricIdx) => (
                  <li key={metricIdx} className="flex items-start">
                    <span className="mr-3">📊</span>
                    <span>{metric}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </motion.section>
);

export default StrategicPlan;

import React from 'react';
import { motion } from 'framer-motion';

const clusters = [
  {
    title: 'CLUSTER 1: INFRASTRUCTURE & BUILT ENVIRONMENT',
    desc: 'Focuses on the physical development of South Africa.',
    color: 'from-blue-600 to-blue-400',
    subsidiaries: [
      'Maleng Legacy Construction & Infrastructure: Building projects, civil works, renovations, NHBRC compliance.',
      'Maleng Legacy Property Development: Land acquisition, development, property management.',
      'Maleng Legacy Energy Solutions: Solar, renewable energy consulting, energy audits.'
    ]
  },
  {
    title: 'CLUSTER 2: PROFESSIONAL & CAPITAL SERVICES',
    desc: 'The Group\'s intellectual hub.',
    color: 'from-purple-600 to-purple-400',
    subsidiaries: [
      'Maleng Legacy Tech & Consulting: IT consulting, software dev, digital transformation, cybersecurity.',
      'Maleng Legacy Media & Signage: Branding, design, printing, signage, digital media.',
      'Maleng Legacy Corporate Services: CIPC registration, compliance, secretarial, shelf companies.',
      'Maleng Legacy Training Institute: SETA-accredited skills training (security, hospitality, construction).',
      'Maleng Legacy Capital & Investments: Investment arm, acquisitions, equity stakes in startups.'
    ]
  },
  {
    title: 'CLUSTER 3: PROTECTION & OPERATIONS',
    desc: 'Ensures group-wide efficiency and safety.',
    color: 'from-slate-600 to-slate-400',
    subsidiaries: [
      'Maleng Legacy Security Services: Site security, armed response, access control, surveillance.',
      'Maleng Legacy Logistics & Transport: Fleet management, goods transport, warehousing.',
      'Maleng Legacy Facility Management: Commercial cleaning, hygiene, maintenance.',
      'Maleng Legacy Carwash & Grill: Premium carwash, grill/food, fleet contracts.'
    ]
  },
  {
    title: 'CLUSTER 4: AGRI-CONSUMER & LIFESTYLE',
    desc: 'Drives high-volume retail and production.',
    color: 'from-amber-600 to-amber-400',
    subsidiaries: [
      'Maleng Legacy Agri (Mopani Farms + Poultry): Mopani worm farming, poultry production, agri-tourism.',
      'Maleng Legacy Catering & Supplies (Mopani Protein™): Catering services, Signature Mopani Protein brand, equipment rental.',
      'Maleng Legacy Event Management: Corporate events, conferences, weddings, coordination.',
      'Maleng Legacy Retail & Distribution: FMCG distribution, retail partnerships, brand licensing.'
    ]
  }
];

const CoreClusters = () => (
  <motion.section
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    className="mb-16 py-12"
  >
    <h2 className="text-4xl font-bold text-gold-accent mb-12 text-center">Our Core Clusters</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {clusters.map((cluster, idx) => (
        <motion.div
          key={idx}
          className={`bg-gradient-to-br ${cluster.color} p-6 rounded-xl shadow-lg transform card-hover`}
          whileHover={{ rotate: 1 }}
        >
          <h3 className="text-2xl font-bold text-white mb-2">{cluster.title}</h3>
          <p className="text-white/90 mb-4">{cluster.desc}</p>
          <ul className="space-y-2">
            {cluster.subsidiaries.map((sub, subIdx) => (
              <li key={subIdx} className="text-white/80 text-sm flex items-start">
                <span className="mr-2">•</span>
                <span>{sub}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  </motion.section>
);

export default CoreClusters;

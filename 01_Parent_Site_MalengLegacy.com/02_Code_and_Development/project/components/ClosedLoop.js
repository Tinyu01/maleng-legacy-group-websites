import React from 'react';
import { motion } from 'framer-motion';

const closedLoop = [
  { supplier: 'Mopani Farms (Agri)', client: 'Catering & Supplies', value: '100% internal supply of Signature Mopani Protein™', savings: 'R200K-500K/year' },
  { supplier: 'Poultry Farm (Agri)', client: 'Catering & Grill', value: '100% internal chicken supply to Carwash Grill & Events', savings: 'R150K-300K/year' },
  { supplier: 'Media & Signage', client: 'All Subsidiaries', value: 'In-house branding, marketing materials, signage at cost', savings: 'R80K-200K/year' },
  { supplier: 'Tech & Consulting', client: 'All Subsidiaries', value: 'ERP systems, websites, digital tools — Group licensing', savings: 'R100K-250K/year' },
  { supplier: 'Facility Management', client: 'Group Offices & Sites', value: 'Cleaning and maintenance at preferential Group rates', savings: 'R60K-150K/year' },
  { supplier: 'Logistics & Transport', client: 'Construction, Catering, Events', value: 'Internal fleet for materials, equipment, catering deliveries', savings: 'R120K-300K/year' },
  { supplier: 'Security Services', client: 'Construction Sites, Facilities, Farms', value: 'On-site security for Group projects and premises', savings: 'R100K-250K/year' },
];

const ClosedLoop = () => (
  <motion.section
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    className="mb-16 py-12"
  >
    <h2 className="text-4xl font-bold text-gold-accent mb-8 text-center">The "Closed-Loop Economy" — 100% Value Capture</h2>
    <div className="bg-white/80 rounded-xl shadow-lg overflow-hidden">
      <table className="w-full">
        <thead>
          <tr className="bg-earth-brown/20">
            <th className="py-3 px-4 text-left font-bold">Supplier (Internal)</th>
            <th className="py-3 px-4 text-left font-bold">Client (Internal)</th>
            <th className="py-3 px-4 text-left font-bold">Value Captured</th>
            <th className="py-3 px-4 text-left font-bold">Annual Savings</th>
          </tr>
        </thead>
        <tbody>
          {closedLoop.map((item, idx) => (
            <tr key={idx} className={idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
              <td className="py-3 px-4 font-semibold">{item.supplier}</td>
              <td className="py-3 px-4">{item.client}</td>
              <td className="py-3 px-4">{item.value}</td>
              <td className="py-3 px-4 text-gold-accent font-bold">{item.savings}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </motion.section>
);

export default ClosedLoop;

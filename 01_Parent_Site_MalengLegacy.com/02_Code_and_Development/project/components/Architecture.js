import React from 'react';
import { motion } from 'framer-motion';

const Architecture = () => (
  <motion.section
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    className="mb-16 py-12"
  >
    <h2 className="text-4xl font-bold text-gold-accent mb-8 text-center">The "Vault & Engines" Architecture</h2>
    <p className="text-center text-lg text-gray-100 mb-8">Separating Ownership from Operations to protect core wealth.</p>
    <div className="overflow-x-auto">
      <table className="w-full bg-white/80 rounded-xl shadow-lg">
        <thead>
          <tr className="bg-earth-brown/20">
            <th className="py-3 px-4 text-left font-bold">Layer</th>
            <th className="py-3 px-4 text-left font-bold">Entity</th>
            <th className="py-3 px-4 text-left font-bold">Function</th>
            <th className="py-3 px-4 text-left font-bold">Brand Identity</th>
            <th className="py-3 px-4 text-left font-bold">Strategic Purpose</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-3 px-4 font-bold text-earth-brown">THE VAULT</td>
            <td className="py-3 px-4">Maleng Legacy Assets (Pty) Ltd</td>
            <td className="py-3 px-4">Owns all land, vehicles, machinery, IT infrastructure</td>
            <td className="py-3 px-4">Shadow Grey & Platinum</td>
            <td className="py-3 px-4">Legal protection, asset security</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="py-3 px-4 font-bold text-earth-brown">THE PARENT</td>
            <td className="py-3 px-4">Maleng Legacy Group Holdings (Pty) Ltd</td>
            <td className="py-3 px-4">Strategic oversight, finance, legal, HR, IT backbone</td>
            <td className="py-3 px-4">Navy & Gold 'M'</td>
            <td className="py-3 px-4">Centralized governance</td>
          </tr>
          <tr>
            <td className="py-3 px-4 font-bold text-earth-brown">ENGINE 1</td>
            <td className="py-3 px-4">Infrastructure & Built Environment Cluster</td>
            <td className="py-3 px-4">Construction, Property Development, Energy Solutions</td>
            <td className="py-3 px-4">Navy + Steel Blue</td>
            <td className="py-3 px-4">Capital-intensive, government tenders</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="py-3 px-4 font-bold text-earth-brown">ENGINE 2</td>
            <td className="py-3 px-4">Professional & Capital Services Cluster</td>
            <td className="py-3 px-4">Tech, Media, Corporate Services, Training, Capital & Investments</td>
            <td className="py-3 px-4">Navy + Royal Blue</td>
            <td className="py-3 px-4">High-margin, intellectual capital</td>
          </tr>
          <tr>
            <td className="py-3 px-4 font-bold text-earth-brown">ENGINE 3</td>
            <td className="py-3 px-4">Protection & Operations Cluster</td>
            <td className="py-3 px-4">Security, Logistics & Fleet, Facility Management</td>
            <td className="py-3 px-4">Navy + Dark Grey</td>
            <td className="py-3 px-4">Recurring contracts, Group support</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="py-3 px-4 font-bold text-earth-brown">ENGINE 4</td>
            <td className="py-3 px-4">Agri-Consumer & Lifestyle Cluster</td>
            <td className="py-3 px-4">Agri & Livestock, Catering, Events, Carwash & Grill</td>
            <td className="py-3 px-4">Navy + Earth Brown</td>
            <td className="py-3 px-4">Consumer-facing, retail, vertical integration</td>
          </tr>
        </tbody>
      </table>
    </div>
  </motion.section>
);

export default Architecture;

import React from 'react';
import { motion } from 'framer-motion';

const Management = () => (
  <motion.section
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    className="mb-16 py-12"
  >
    <h2 className="text-4xl font-bold text-gold-accent mb-12 text-center">Management & Staffing Plan</h2>
    
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="bg-white/80 p-8 rounded-xl shadow-lg"
      >
        <h3 className="text-2xl font-bold text-earth-brown mb-6">Group Executive Leadership</h3>
        <ul className="space-y-4">
          <li className="flex items-start">
            <span className="text-gold-accent text-2xl mr-4">•</span>
            <div>
              <h4 className="font-bold text-earth-green">Group CEO: Masingita Ottis Maluleke</h4>
              <p className="text-gray-700">Responsible for high-level strategy, government relations, group-wide expansion, and board governance.</p>
            </div>
          </li>
          <li className="flex items-start">
            <span className="text-gold-accent text-2xl mr-4">•</span>
            <div>
              <h4 className="font-bold text-earth-green">Group CFO (Year 1)</h4>
              <p className="text-gray-700">Manages the Capital & Investments arm, oversees financial health of all 4 clusters, treasury, and consolidated Group reporting.</p>
            </div>
          </li>
          <li className="flex items-start">
            <span className="text-gold-accent text-2xl mr-4">•</span>
            <div>
              <h4 className="font-bold text-earth-green">Group COO (Year 2)</h4>
              <p className="text-gray-700">Coordinates shared services, operational synergies, and day-to-day execution across clusters.</p>
            </div>
          </li>
          <li className="flex items-start">
            <span className="text-gold-accent text-2xl mr-4">•</span>
            <div>
              <h4 className="font-bold text-earth-green">Group Legal & Compliance Officer (Year 1)</h4>
              <p className="text-gray-700">Ensures all 18+ subsidiaries meet CIPC, SARS, B-BBEE, and industry-specific regulations.</p>
            </div>
          </li>
          <li className="flex items-start">
            <span className="text-gold-accent text-2xl mr-4">•</span>
            <div>
              <h4 className="font-bold text-earth-green">Group CHRO (Year 2)</h4>
              <p className="text-gray-700">Talent acquisition, payroll, SETA compliance, intern programme, performance management.</p>
            </div>
          </li>
          <li className="flex items-start">
            <span className="text-gold-accent text-2xl mr-4">•</span>
            <div>
              <h4 className="font-bold text-earth-green">Group CTO (Year 1)</h4>
              <p className="text-gray-700">IT infrastructure, ERP, cybersecurity, digital backbone for all subsidiaries.</p>
            </div>
          </li>
        </ul>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="bg-white/80 p-8 rounded-xl shadow-lg"
      >
        <h3 className="text-2xl font-bold text-earth-brown mb-6">Cluster Directors</h3>
        <ul className="space-y-3">
          <li className="flex items-center text-lg">
            <span className="text-gold-accent text-2xl mr-4">→</span>
            <span><strong>Director of Infrastructure & Built Environment</strong> (Year 3)</span>
          </li>
          <li className="flex items-center text-lg">
            <span className="text-gold-accent text-2xl mr-4">→</span>
            <span><strong>Director of Professional & Capital Services</strong> (Year 1)</span>
          </li>
          <li className="flex items-center text-lg">
            <span className="text-gold-accent text-2xl mr-4">→</span>
            <span><strong>Director of Protection & Operations</strong> (Year 2)</span>
          </li>
          <li className="flex items-center text-lg">
            <span className="text-gold-accent text-2xl mr-4">→</span>
            <span><strong>Director of Agri-Consumer & Lifestyle</strong> (Year 4)</span>
          </li>
        </ul>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="bg-gradient-to-r from-earth-brown/10 to-earth-green/10 p-8 rounded-xl border border-earth-brown/20"
      >
        <h3 className="text-2xl font-bold text-earth-brown mb-3">Shared Services Model</h3>
        <p className="text-gray-700 text-lg">
          Centralized support for finance, HR, legal, IT, and marketing to reduce costs and maintain consistency across all subsidiaries.
        </p>
      </motion.div>
    </div>
  </motion.section>
);

export default Management;

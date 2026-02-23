import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Subsidiaries = () => {
  const subsidiaries = [
    {
      id: 1,
      name: 'Property Development & Land',
      cluster: 'Infrastructure & Built Environment',
      description: 'Strategic land acquisitions and property development across Gauteng and beyond.',
      services: ['Land Acquisition', 'Development', 'Asset Management'],
      website: '/subsidiaries/property',
      icon: '🏢',
      color: 'from-blue-600',
    },
    {
      id: 2,
      name: 'Tech & Consulting',
      cluster: 'Professional & Capital Services',
      description: 'Business transformation, digital solutions, and strategic consulting.',
      services: ['Digital Transformation', 'ERP Systems', 'Business Strategy'],
      website: '/subsidiaries/tech',
      icon: '💻',
      color: 'from-purple-600',
    },
    {
      id: 3,
      name: 'Events & Experiences',
      cluster: 'Agri-Consumer & Lifestyle',
      description: 'End-to-end event management and experiential marketing solutions.',
      services: ['Event Management', 'Sponsorships', 'Brand Activation'],
      website: '/subsidiaries/events',
      icon: '🎯',
      color: 'from-pink-600',
    },
    {
      id: 4,
      name: 'Catering Services',
      cluster: 'Agri-Consumer & Lifestyle',
      description: 'Premium catering and hospitality solutions for corporate and private clients.',
      services: ['Corporate Catering', 'Event Catering', 'Menu Curation'],
      website: '/subsidiaries/catering',
      icon: '🍽️',
      color: 'from-orange-600',
    },
    {
      id: 5,
      name: 'Security & Logistics',
      cluster: 'Protection & Operations',
      description: 'Comprehensive security, asset protection, and logistics management.',
      services: ['Security Services', 'Asset Protection', 'Fleet Management'],
      website: '/subsidiaries/security',
      icon: '🔒',
      color: 'from-red-600',
    },
    {
      id: 6,
      name: 'Corporate Services',
      cluster: 'Professional & Capital Services',
      description: 'HR Solutions, payroll management, and corporate governance support.',
      services: ['HR Solutions', 'Payroll', 'Compliance'],
      website: '/subsidiaries/corporate',
      icon: '📋',
      color: 'from-green-600',
    },
  ];

  return (
    <section id="subsidiaries" className="py-section px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="section-title">Our Business Ecosystem</h2>
          <p className="section-subtitle mx-auto">
            A diversified portfolio of subsidiaries delivering specialized solutions across multiple sectors.
          </p>
        </motion.div>

        {/* Subsidiaries Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {subsidiaries.map((sub, idx) => (
            <motion.div
              key={sub.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group"
            >
              <Link href={sub.website}>
                <div className="card h-full flex flex-col cursor-pointer">
                  {/* Icon */}
                  <div className="text-5xl mb-4">{sub.icon}</div>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition">
                    {sub.name}
                  </h3>

                  {/* Cluster Badge */}
                  <span className="text-xs text-accent font-semibold mb-3 inline-block">
                    {sub.cluster}
                  </span>

                  {/* Description */}
                  <p className="text-gray-400 text-sm mb-4 flex-grow">
                    {sub.description}
                  </p>

                  {/* Services */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {sub.services.slice(0, 2).map((service) => (
                      <span key={service} className="text-xs bg-white/5 px-3 py-1 rounded-full text-gray-300">
                        {service}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="flex items-center text-accent font-semibold text-sm group-hover:gap-3 gap-2 transition-all">
                    <span>Learn More</span>
                    <span>→</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Interconnection */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-16 p-8 card bg-gradient-to-r from-accent/10 to-gold/10 border border-accent/30"
        >
          <h3 className="text-2xl font-bold mb-4">Integrated Growth Model</h3>
          <p className="text-gray-300 mb-4">
            Our subsidiaries don't operate in silos. Through vertical integration, shared services, and strategic partnerships, we create synergies that drive superior returns for our stakeholders.
          </p>
          <ul className="grid md:grid-cols-2 gap-4 text-sm text-gray-300">
            <li className="flex items-start gap-2">
              <span className="text-accent">✓</span>
              <span>Cost optimization through centralized services</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent">✓</span>
              <span>Cross-subsidiary collaboration opportunities</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent">✓</span>
              <span>Risk diversification across sectors</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent">✓</span>
              <span>Scalable solutions for enterprise clients</span>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Subsidiaries;

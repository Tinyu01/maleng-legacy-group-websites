// components/Services/TrustIndicators.js
import React from 'react';
import { motion } from 'framer-motion';
import { FaAward, FaChartLine, FaCheckCircle, FaShieldAlt } from 'react-icons/fa';

export default function TrustIndicators({ indicators }) {
  const defaultIndicators = [
    {
      icon: 'award',
      label: 'Certifications',
      value: 'ISO 27001 • SOC 2 • GDPR',
    },
    {
      icon: 'trending',
      label: 'Client Success',
      value: '98% Satisfaction Rate',
    },
    {
      icon: 'check',
      label: 'Experience',
      value: '15+ Years in Business',
    },
    {
      icon: 'shield',
      label: 'Security',
      value: 'Enterprise-Grade Protection',
    },
  ];

  const displayIndicators = indicators || defaultIndicators;

  const getIcon = (iconName) => {
    switch(iconName) {
      case 'award':
        return <FaAward className="w-8 h-8 text-highlight" />;
      case 'trending':
        return <FaChartLine className="w-8 h-8 text-highlight" />;
      case 'check':
        return <FaCheckCircle className="w-8 h-8 text-highlight" />;
      case 'shield':
        return <FaShieldAlt className="w-8 h-8 text-highlight" />;
      default:
        return <FaAward className="w-8 h-8 text-highlight" />;
    }
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {displayIndicators.map((indicator, index) => {
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
            className="relative bg-gradient-to-br from-soft to-surface border border-white/10 rounded-lg p-6 hover:border-highlight/30 transition-all duration-300"
          >
            {/* Icon */}
            <div className="mb-3">
              {getIcon(indicator.icon)}
            </div>

            {/* Label */}
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">
              {indicator.label}
            </p>

            {/* Value */}
            <p className="text-sm font-bold text-white leading-tight">
              {indicator.value}
            </p>

            {/* Hover effect */}
            <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-highlight/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.div>
        );
      })}
    </div>
  );
}
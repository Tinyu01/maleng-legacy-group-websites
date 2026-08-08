import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCheck, FaTimes } from 'react-icons/fa';

export default function PricingComparisonTable({ services, tiers }) {
  const [selectedTiers, setSelectedTiers] = useState(tiers.slice(0, 4).map(t => t.name));

  const toggleTier = (tierName) => {
    setSelectedTiers(prev =>
      prev.includes(tierName)
        ? prev.filter(t => t !== tierName)
        : [...prev, tierName]
    );
  };

  return (
    <div className="w-full">
      {/* Tier selector */}
      <div className="mb-8 flex flex-wrap gap-3">
        {tiers.map(tier => (
          <motion.button
            key={tier.name}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => toggleTier(tier.name)}
            className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
              selectedTiers.includes(tier.name)
                ? 'bg-highlight text-white shadow-lg shadow-highlight/30'
                : 'bg-white/10 border border-white/20 text-gray-400 hover:border-highlight/50'
            }`}
          >
            {tier.name}
          </motion.button>
        ))}
      </div>

      {/* Comparison table */}
      <div className="overflow-x-auto rounded-xl border border-white/10 bg-gradient-to-br from-soft to-surface">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/10 bg-white/5">
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300 w-48">
                Feature
              </th>
              {selectedTiers.map(tierName => {
                const tier = tiers.find(t => t.name === tierName);
                return (
                  <th key={tierName} className="px-6 py-4 text-center min-w-[180px]">
                    <div className="text-sm font-semibold text-white mb-1">{tierName}</div>
                    {tier.price && (
                      <div className="text-xs text-highlight">
                        ${tier.price}/{tier.billingModel || 'month'}
                      </div>
                    )}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {services?.map((service, serviceIndex) => (
              <tr
                key={serviceIndex}
                className={`border-b border-white/5 ${serviceIndex % 2 === 0 ? 'bg-white/2' : ''} hover:bg-white/5 transition-colors duration-300`}
              >
                <td className="px-6 py-4">
                  <div className="text-sm font-medium text-gray-300">{service.name}</div>
                  {service.description && (
                    <div className="text-xs text-gray-500 mt-1">{service.description}</div>
                  )}
                </td>
                {selectedTiers.map(tierName => {
                  const tierService = service.tiers?.[tierName];
                  const included = tierService?.included;
                  const value = tierService?.value;

                  return (
                    <td key={tierName} className="px-6 py-4 text-center">
                      {included === true ? (
                        <div className="flex justify-center">
                          <FaCheck className="w-5 h-5 text-accent" />
                        </div>
                      ) : included === false ? (
                        <div className="flex justify-center">
                          <FaTimes className="w-5 h-5 text-gray-600" />
                        </div>
                      ) : value ? (
                        <div className="text-sm text-gray-300 font-medium">{value}</div>
                      ) : (
                        <div className="text-sm text-gray-500">-</div>
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Legend */}
      <div className="mt-6 flex gap-6 text-sm">
        <div className="flex items-center gap-2">
          <FaCheck className="w-4 h-4 text-accent" />
          <span className="text-gray-400">Included</span>
        </div>
        <div className="flex items-center gap-2">
          <FaTimes className="w-4 h-4 text-gray-600" />
          <span className="text-gray-400">Not Included</span>
        </div>
      </div>
    </div>
  );
}

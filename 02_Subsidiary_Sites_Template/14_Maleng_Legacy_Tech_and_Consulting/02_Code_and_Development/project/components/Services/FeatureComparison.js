import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

export default function FeatureComparison({ categories, allFeatures }) {
  const [expandedCategory, setExpandedCategory] = useState(0);

  return (
    <div className="space-y-4">
      {categories?.map((category, categoryIndex) => (
        <motion.div
          key={categoryIndex}
          className="border border-white/10 rounded-xl overflow-hidden bg-gradient-to-br from-soft to-surface hover:border-highlight/30 transition-all duration-300"
        >
          {/* Category header */}
          <motion.button
            onClick={() =>
              setExpandedCategory(
                expandedCategory === categoryIndex ? -1 : categoryIndex
              )
            }
            className="w-full px-6 py-4 flex items-center justify-between bg-white/5 hover:bg-white/10 transition-all duration-300"
          >
            <h3 className="text-lg font-semibold text-white text-left">
              {category.name || `Category ${categoryIndex + 1}`}
            </h3>
            <motion.div
              animate={{
                rotate: expandedCategory === categoryIndex ? 180 : 0,
              }}
              transition={{ duration: 0.3 }}
            >
              <FaChevronDown className="w-5 h-5 text-highlight" />
            </motion.div>
          </motion.button>

          {/* Expandable content */}
          <AnimatePresence>
            {expandedCategory === categoryIndex && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="border-t border-white/10"
              >
                <div className="px-6 py-4 space-y-3">
                  {category.features?.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: featureIndex * 0.05, duration: 0.3 }}
                      className="flex items-start gap-3 group"
                    >
                      <div className="w-5 h-5 rounded-full bg-gradient-to-br from-highlight to-accent flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white text-xs font-bold">✓</span>
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-300 font-medium">
                          {feature.name}
                        </p>
                        {feature.description && (
                          <p className="text-gray-500 text-sm mt-1">
                            {feature.description}
                          </p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
}

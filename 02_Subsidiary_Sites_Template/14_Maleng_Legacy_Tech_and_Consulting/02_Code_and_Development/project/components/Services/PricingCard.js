import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaCheck, FaTimes, FaRocket } from 'react-icons/fa';

export default function PricingCard({ tier, price, description, features, isPopular, cta, index }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Format price function
  const formatPrice = (rawPrice) => {
    if (typeof rawPrice === 'number') {
      return rawPrice.toLocaleString();
    }
    return rawPrice;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.15, duration: 0.6, type: 'spring' }}
      viewport={{ once: true }}
      className={`group relative rounded-2xl border overflow-hidden transition-all duration-300 h-full flex flex-col ${
        isPopular
          ? 'border-highlight shadow-2xl shadow-highlight/30 bg-gradient-to-br from-soft to-surface md:scale-105'
          : 'border-white/10 bg-gradient-to-br from-soft via-surface to-surface hover:border-highlight/40 hover:shadow-xl hover:shadow-highlight/10'
      }`}
    >
      {/* Top accent bar */}
      {isPopular && (
        <motion.div 
          className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-highlight via-accent to-highlight"
          animate={{ backgroundPosition: ['0% center', '100% center', '0% center'] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      )}

      {/* Accent corner blob */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-highlight/20 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -mr-20 -mt-20" />

      <div className="p-8 relative z-10 flex flex-col h-full">
        {/* Popular badge */}
        {isPopular && (
          <motion.div 
            className="inline-flex items-center gap-2 mb-6 px-3 py-2 rounded-full bg-gradient-to-r from-highlight/20 to-accent/20 border border-highlight/40"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <FaRocket className="w-4 h-4 text-highlight animate-pulse" />
            <span className="text-xs font-bold text-highlight uppercase tracking-widest">Most Popular</span>
          </motion.div>
        )}

        {/* Tier name */}
        <h3 className="text-3xl font-bold text-white mb-2 leading-tight">{tier}</h3>
        <p className="text-sm text-gray-400 mb-8 leading-relaxed">{description}</p>

        {/* Price section - FIXED with suppressHydrationWarning */}
        <div className="mb-8 p-6 rounded-xl bg-gradient-to-br from-highlight/15 to-accent/15 border border-highlight/20 group-hover:border-highlight/40 transition-all duration-300">
          {typeof price === 'number' || (typeof price === 'string' && price.startsWith('$')) ? (
            <div>
              <p className="text-sm text-gray-400 mb-2 uppercase font-semibold tracking-wider">Pricing</p>
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-black text-highlight" suppressHydrationWarning>
                  {typeof price === 'number' ? `$${isClient ? formatPrice(price) : price}` : price}
                </span>
                {typeof price === 'number' && <span className="text-lg text-gray-400">/month</span>}
              </div>
              <p className="text-xs text-gray-500 mt-2">Billed monthly • Cancel anytime</p>
            </div>
          ) : (
            <div className="text-lg font-bold text-highlight">{price}</div>
          )}
        </div>

        {/* CTA Button */}
        <motion.button
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.98 }}
          className={`w-full py-3 px-4 rounded-xl font-semibold transition-all duration-300 mb-8 text-base ${
            isPopular
              ? 'bg-gradient-to-r from-highlight via-accent to-highlight text-white shadow-lg shadow-highlight/40 hover:shadow-xl hover:shadow-highlight/50 relative overflow-hidden group/btn'
              : 'bg-white/10 border border-white/20 text-white hover:bg-white/20 hover:border-highlight/50 hover:text-highlight'
          }`}
        >
          <span className="relative z-10">{cta || 'Get Started'}</span>
          {isPopular && (
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-accent via-highlight to-accent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"
              initial={{ x: -100 }}
              animate={{ x: [0, 100, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          )}
        </motion.button>

        {/* Features list */}
        <div className="space-y-4 flex-grow">
          <div className="flex items-center justify-between mb-4">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Includes</p>
            <span className="text-xs px-2 py-1 rounded-full bg-highlight/20 text-highlight font-bold">
              {features?.length} Features
            </span>
          </div>
          <ul className="space-y-3">
            {features?.map((feature, i) => (
              <motion.li 
                key={i} 
                className="flex items-start gap-3 group/item"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ x: 4 }}
              >
                <div className="flex-shrink-0 mt-0.5 w-5 h-5 flex items-center justify-center rounded-full bg-gradient-to-br from-highlight/20 to-accent/20">
                  {feature.included !== false ? (
                    <FaCheck className="w-3 h-3 text-accent" />
                  ) : (
                    <FaTimes className="w-3 h-3 text-gray-600" />
                  )}
                </div>
                <span className={`text-sm leading-relaxed ${
                  feature.included !== false 
                    ? 'text-gray-300 group-hover/item:text-white transition-colors' 
                    : 'text-gray-600 line-through'
                }`}>
                  {feature.name || feature}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Footer note */}
        <p className="text-xs text-gray-500 pt-6 border-t border-white/5 mt-6">
          {isPopular ? '⭐ Recommended for most teams' : '📊 Great for getting started'}
        </p>
      </div>
    </motion.div>
  );
}
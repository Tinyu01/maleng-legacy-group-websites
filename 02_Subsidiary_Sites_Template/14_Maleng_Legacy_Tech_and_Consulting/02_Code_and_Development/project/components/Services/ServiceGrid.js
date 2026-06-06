import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

export default function ServiceGrid({ services, categorySlug }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const formatPrice = (price) => {
    if (typeof price === 'number') {
      return price.toLocaleString();
    }
    return price;
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {services?.map((service, index) => (
        <motion.div
          key={service.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
          viewport={{ once: true }}
          className="group h-full"
        >
          <Link href={`/services/${categorySlug}/${service.slug}`} className="block h-full">
            <motion.div 
              whileHover={{ y: -12, boxShadow: '0 20px 40px rgba(0, 168, 150, 0.15)' }}
              className="h-full relative bg-gradient-to-br from-soft via-surface to-surface border border-white/10 rounded-2xl p-7 hover:border-highlight/50 transition-all duration-300 cursor-pointer overflow-hidden shadow-lg hover:shadow-xl"
            >
              {/* Animated background gradient */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-highlight/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />

              {/* Accent blob */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-highlight/20 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -mr-12 -mt-12" />

              <div className="relative z-10 h-full flex flex-col">
                {/* Icon with background */}
                <motion.div 
                  className="w-14 h-14 rounded-xl bg-gradient-to-br from-highlight/20 to-accent/20 border border-highlight/30 flex items-center justify-center mb-5 group-hover:border-highlight/60 transition-all duration-300"
                  whileHover={{ scale: 1.15, rotate: 5 }}
                >
                  <span className="text-3xl transform group-hover:scale-120 transition-transform duration-300">
                    {service.icon}
                  </span>
                </motion.div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-highlight transition-colors duration-300 line-clamp-2 leading-tight">
                  {service.name}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-400 mb-5 line-clamp-2 leading-relaxed flex-grow">
                  {service.description}
                </p>

                {/* Price info if available */}
                {service.pricing && (
                  <motion.div 
                    className="mb-5 p-4 rounded-lg bg-gradient-to-br from-highlight/15 to-accent/15 border border-highlight/20 group-hover:border-highlight/40 transition-all duration-300"
                    whileHover={{ borderColor: '#00D084' }}
                  >
                    <p className="text-xs text-gray-400 mb-1 uppercase font-semibold tracking-wider">Starting from</p>
                    <p className="text-xl font-bold text-highlight" suppressHydrationWarning>
                      ${isClient ? formatPrice(service.pricing?.starter?.price) : service.pricing?.starter?.price}
                    </p>
                  </motion.div>
                )}

                {/* Key features preview */}
                {service.features?.starter && Array.isArray(service.features.starter) && (
                  <div className="mb-5 pt-4 border-t border-white/5 space-y-2">
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Key Features</p>
                    <div className="space-y-2">
                      {service.features.starter.slice(0, 3).map((feature, i) => (
                        <motion.div 
                          key={i} 
                          className="flex items-start gap-2 group/feature"
                          whileHover={{ x: 4 }}
                        >
                          <span className="text-highlight text-sm mt-0.5 flex-shrink-0">◆</span>
                          <span className="text-xs text-gray-400 group-hover/feature:text-gray-200 transition-colors leading-snug">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

                {/* CTA */}
                <motion.div 
                  className="flex items-center gap-2 text-highlight font-semibold text-sm pt-4 border-t border-white/5 mt-auto group-hover:gap-3 transition-all duration-300"
                  whileHover={{ gap: 8 }}
                >
                  <span>Learn More</span>
                  <motion.div
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <FaArrowRight className="w-4 h-4" />
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
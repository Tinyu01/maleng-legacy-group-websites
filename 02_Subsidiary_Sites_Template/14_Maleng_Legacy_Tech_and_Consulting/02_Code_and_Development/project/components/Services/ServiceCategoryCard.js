import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

export default function ServiceCategoryCard({ category, index }) {
  const { name, description, icon, slug, services } = category;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
      className="group"
    >
      <Link href={`/services/${slug}`} className="block h-full">
        <motion.div 
          whileHover={{ y: -12 }}
          className="relative h-full bg-gradient-to-br from-soft via-surface to-surface border border-white/10 rounded-2xl p-8 hover:border-highlight/50 transition-all duration-300 cursor-pointer overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-highlight/20"
        >
          {/* Animated background gradient */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-highlight/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
          />
          
          {/* Accent corner */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-highlight/20 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -mr-16 -mt-16" />
          
          {/* Content */}
          <div className="relative z-10">
            {/* Icon with background */}
            <motion.div 
              className="w-16 h-16 rounded-xl bg-gradient-to-br from-highlight/20 to-accent/20 border border-highlight/30 flex items-center justify-center mb-6 group-hover:border-highlight/60 transition-all duration-300"
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <span className="text-4xl transform group-hover:scale-110 transition-transform duration-300">
                {icon}
              </span>
            </motion.div>

            {/* Title */}
            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-highlight transition-colors duration-300 leading-tight">
              {name}
            </h3>

            {/* Description */}
            <p className="text-gray-400 text-sm mb-6 line-clamp-3 leading-relaxed">
              {description}
            </p>

            {/* Services preview */}
            {services && services.length > 0 && (
              <div className="mb-6 space-y-2">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Featured Services</p>
                  <span className="text-xs px-2 py-1 rounded-full bg-highlight/20 text-highlight font-bold">
                    {services.length}
                  </span>
                </div>
                <div className="space-y-2">
                  {services.slice(0, 2).map((service, i) => (
                    <motion.div 
                      key={i} 
                      className="flex items-center gap-2 text-xs text-gray-400 group/item"
                      whileHover={{ x: 4 }}
                    >
                      <span className="text-highlight text-lg">◆</span>
                      <span className="group-hover/item:text-gray-200 transition-colors">{service.name}</span>
                    </motion.div>
                  ))}
                  {services.length > 2 && (
                    <p className="text-xs text-highlight font-semibold pt-2">
                      +{services.length - 2} more services →
                    </p>
                  )}
                </div>
              </div>
            )}

            {/* CTA */}
            <motion.div 
              className="flex items-center gap-2 text-highlight font-semibold text-sm pt-4 border-t border-white/5"
              whileHover={{ gap: 8 }}
            >
              <span>Explore Services</span>
              <motion.div
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <FaArrowRight className="w-4 h-4" />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}
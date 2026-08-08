import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight, FaStar, FaArrowRight } from 'react-icons/fa';

export default function FeaturedServicesCarousel({ services }) {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Auto-scroll every 5 seconds
  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % services.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [autoPlay, services.length]);

  const next = () => {
    setCurrent(prev => (prev + 1) % services.length);
    setAutoPlay(false);
  };

  const prev = () => {
    setCurrent(prev => (prev - 1 + services.length) % services.length);
    setAutoPlay(false);
  };

  const visibleServices = [
    services[current],
    services[(current + 1) % services.length],
  ];

  const formatPrice = (price) => {
    if (typeof price === 'number') {
      return price.toLocaleString();
    }
    return price;
  };

  const getStartingPriceLabel = (service) => {
    const startingTier = service.pricing?.starter;

    if (!startingTier) {
      return 'Request Quote';
    }

    if (typeof startingTier.price === 'string') {
      return startingTier.price;
    }

    if (startingTier.billingModel === 'contact' || startingTier.price === null || startingTier.price === undefined) {
      return startingTier.name || 'Request Quote';
    }

    return `$${formatPrice(startingTier.price)}`;
  };

  return (
    <div className="relative w-full">
      {/* Carousel container */}
      <div className="relative overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="wait">
            {visibleServices.map((service, idx) => (
              <motion.div
                key={`${current}-${idx}`}
                initial={{ opacity: 0, x: idx === 0 ? -100 : 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: idx === 0 ? -100 : 100 }}
                transition={{ duration: 0.5, type: 'spring' }}
                className="group"
              >
                <Link href={`/services/${service.categorySlug}/${service.slug}`} className="block h-full">
                  <motion.div 
                    whileHover={{ y: -12 }}
                    className="relative h-full bg-gradient-to-br from-soft via-surface to-surface border border-white/10 rounded-2xl p-8 hover:border-highlight/50 transition-all duration-300 cursor-pointer overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-highlight/20"
                  >
                    {/* Animated background gradient */}
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-br from-highlight/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    />

                    {/* Accent corner */}
                    <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-highlight/15 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -mr-20 -mt-20" />

                    <div className="relative z-10 h-full flex flex-col">
                      {/* Icon with background */}
                      <motion.div 
                        className="w-16 h-16 rounded-xl bg-gradient-to-br from-highlight/20 to-accent/20 border border-highlight/30 flex items-center justify-center mb-6 group-hover:border-highlight/60 transition-all duration-300"
                        whileHover={{ scale: 1.12, rotate: 5 }}
                      >
                        <span className="text-4xl transform group-hover:scale-120 transition-transform duration-300">
                          {service.icon}
                        </span>
                      </motion.div>

                      {/* Service name */}
                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-highlight transition-colors duration-300 leading-tight">
                        {service.name}
                      </h3>

                      {/* Rating */}
                      <motion.div 
                        className="flex items-center gap-3 mb-5"
                        whileHover={{ x: 4 }}
                      >
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <motion.div key={i} whileHover={{ scale: 1.2 }}>
                              <FaStar className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            </motion.div>
                          ))}
                        </div>
                        <span className="text-sm text-gray-400">
                          ({service.reviews || 0} Reviews)
                        </span>
                      </motion.div>

                      {/* Description */}
                      <p className="text-gray-300 text-sm mb-6 line-clamp-2 leading-relaxed flex-grow">
                        {service.description}
                      </p>

                      {/* Key benefits */}
                      <div className="mb-6 space-y-2 border-t border-white/5 pt-6">
                        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Key Benefits</p>
                        {service.features?.starter?.slice(0, 3).map((feature, i) => (
                          <motion.div 
                            key={i} 
                            className="flex items-start gap-2 text-sm text-gray-300 group/feature"
                            whileHover={{ x: 4 }}
                          >
                            <span className="text-accent text-lg mt-0.5 flex-shrink-0">◆</span>
                            <span className="group-hover/feature:text-white transition-colors">{feature}</span>
                          </motion.div>
                        ))}
                      </div>

                      {/* Pricing - FIXED with suppressHydrationWarning */}
                      <motion.div 
                        className="mb-6 p-5 rounded-xl bg-gradient-to-br from-highlight/15 to-accent/15 border border-highlight/20 group-hover:border-highlight/40 transition-all duration-300"
                        whileHover={{ borderColor: '#00D084' }}
                      >
                        <p className="text-xs text-gray-400 mb-2 uppercase font-semibold tracking-wider">Starting from</p>
                        <p className="text-3xl font-black text-highlight" suppressHydrationWarning>
                          {isClient ? getStartingPriceLabel(service) : getStartingPriceLabel(service)}
                          {service.pricing?.starter?.billingModel !== 'contact' && service.pricing?.starter?.price !== null && service.pricing?.starter?.price !== undefined && (
                            <span className="text-lg text-gray-400">/mo</span>
                          )}
                        </p>
                      </motion.div>

                      {/* CTAs */}
                      <div className="flex gap-3 mt-auto">
                        <motion.div
                          whileHover={{ scale: 1.05, boxShadow: '0 10px 20px rgba(0, 168, 150, 0.3)' }}
                          whileTap={{ scale: 0.95 }}
                          className="flex-1 py-3 px-4 bg-gradient-to-r from-highlight to-accent text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 text-sm flex items-center justify-center gap-2 group/btn"
                        >
                          <span>Learn More</span>
                          <motion.div
                            animate={{ x: [0, 3, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          >
                            <FaArrowRight className="w-3.5 h-3.5" />
                          </motion.div>
                        </motion.div>
                        <motion.div
                          whileHover={{ scale: 1.05, borderColor: '#00A896' }}
                          whileTap={{ scale: 0.95 }}
                          className="flex-1 py-3 px-4 bg-white/10 border border-white/20 text-white font-semibold rounded-lg hover:border-highlight/50 hover:bg-white/20 transition-all duration-300 text-sm text-center"
                        >
                          Get Quote
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation controls */}
      <motion.div 
        className="flex items-center justify-center gap-6 mt-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
      >
        <motion.button
          whileHover={{ scale: 1.15, x: -4 }}
          whileTap={{ scale: 0.85 }}
          onClick={prev}
          className="p-3 rounded-full bg-gradient-to-br from-white/20 to-white/10 border border-white/30 hover:border-highlight/60 text-white transition-all duration-300 shadow-lg hover:shadow-highlight/30"
        >
          <FaChevronLeft className="w-5 h-5" />
        </motion.button>

        <motion.div 
          className="flex gap-3"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.4 }}
        >
          {services.map((_, idx) => (
            <motion.button
              key={idx}
              onClick={() => {
                setCurrent(idx);
                setAutoPlay(false);
              }}
              whileHover={{ scale: 1.3 }}
              animate={{
                width: idx === current ? 32 : 8,
                backgroundColor: idx === current ? '#00A896' : 'rgba(255,255,255,0.3)'
              }}
              className="h-2 rounded-full transition-all duration-300 hover:bg-white/50"
            />
          ))}
        </motion.div>

        <motion.button
          whileHover={{ scale: 1.15, x: 4 }}
          whileTap={{ scale: 0.85 }}
          onClick={next}
          className="p-3 rounded-full bg-gradient-to-br from-white/20 to-white/10 border border-white/30 hover:border-highlight/60 text-white transition-all duration-300 shadow-lg hover:shadow-highlight/30"
        >
          <FaChevronRight className="w-5 h-5" />
        </motion.button>
      </motion.div>

      {/* Auto-play toggle */}
      <motion.button
        onClick={() => setAutoPlay(!autoPlay)}
        className="absolute top-4 right-4 px-4 py-2 text-xs rounded-full bg-gradient-to-r from-white/15 to-white/10 border border-white/20 text-gray-300 hover:text-white hover:border-highlight/50 transition-all duration-300 font-semibold"
        whileHover={{ scale: 1.05, borderColor: '#00A896' }}
        whileTap={{ scale: 0.95 }}
      >
        {autoPlay ? '⏸ Pause' : '▶ Play'}
      </motion.button>
    </div>
  );
}
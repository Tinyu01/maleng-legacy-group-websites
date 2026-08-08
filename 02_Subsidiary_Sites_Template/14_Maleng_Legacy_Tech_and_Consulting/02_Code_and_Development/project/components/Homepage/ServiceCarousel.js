import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import services from '../../data/services.json';
import { FaChevronLeft, FaChevronRight, FaStar } from 'react-icons/fa';

export default function ServiceCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Get featured services - take first 2 from first 3 categories (with category info)
  const featuredServices = services.categories
    .slice(0, 3)
    .flatMap(cat => 
      cat.services.slice(0, 2).map(service => ({
        ...service,
        categorySlug: cat.slug
      }))
    )
    .slice(0, 6);

  // Auto-scroll every 5 seconds
  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % featuredServices.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [autoPlay, featuredServices.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % featuredServices.length);
    setAutoPlay(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + featuredServices.length) % featuredServices.length);
    setAutoPlay(false);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setAutoPlay(false);
  };

  // Get visible slides
  const getVisibleSlides = () => {
    const slides = [];
    slides.push(currentIndex);
    slides.push((currentIndex + 1) % featuredServices.length);
    return slides;
  };

  const visibleIndices = getVisibleSlides();

  return (
    <section className="py-20 bg-gradient-to-b from-primary/10 to-transparent">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-block px-4 py-2 bg-accent/10 border border-accent/30 rounded-full mb-6">
            <span className="text-accent font-bold text-sm">🎯 FEATURED SERVICES</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Popular Enterprise <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">Solutions</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Explore our most requested services with transparent pricing and flexible tiers
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div
          className="relative"
          onMouseEnter={() => setAutoPlay(false)}
          onMouseLeave={() => setAutoPlay(true)}
        >
          {/* Slides */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 min-h-[500px]">
            <AnimatePresence mode="popLayout">
              {visibleIndices.map((index) => {
                const service = featuredServices[index];
                const isVisible = index === currentIndex;
                return (
                  <motion.div
                    key={`${index}-${service.id}`}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                    className={`hidden md:block ${isVisible ? 'md:col-span-1' : 'md:col-span-1'}`}
                  >
                    <ServiceSlide service={service} isClient={isClient} />
                  </motion.div>
                );
              })}
              {/* Mobile - single slide */}
              {visibleIndices.length > 0 && (
                <motion.div
                  key={`mobile-${currentIndex}-${featuredServices[currentIndex].id}`}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="md:hidden col-span-1"
                >
                  <ServiceSlide service={featuredServices[currentIndex]} isClient={isClient} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-8">
            {/* Dot Indicators */}
            <div className="flex gap-2">
              {featuredServices.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-2 transition-all ${
                    index === currentIndex
                      ? 'bg-accent w-8'
                      : 'bg-gray-500 hover:bg-gray-400 w-2'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.95 }}
                />
              ))}
            </div>

            {/* Arrow Controls */}
            <div className="flex gap-3">
              <motion.button
                onClick={prevSlide}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 bg-primary/30 hover:bg-accent/20 border border-primary/50 hover:border-accent/50 rounded-lg transition-all text-accent"
              >
                <FaChevronLeft size={20} />
              </motion.button>
              <motion.button
                onClick={nextSlide}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 bg-accent/20 hover:bg-accent/30 border border-accent/50 rounded-lg transition-all text-accent"
              >
                <FaChevronRight size={20} />
              </motion.button>
            </div>
          </div>

          {/* Auto-play Indicator */}
          <div className="text-center mt-6">
            <p className="text-sm text-gray-400">
              {autoPlay ? 'Auto-playing' : 'Paused'} • Slide {currentIndex + 1} of {featuredServices.length}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// Individual Service Slide Component
function ServiceSlide({ service, isClient }) {
  const tiers = ['starter', 'professional', 'enterprise'];
  const visibleTiers = tiers.filter(tier => service.pricing?.[tier]);

  const formatPrice = (price) => {
    if (typeof price === 'number') {
      return price.toLocaleString();
    }
    return price;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group h-full"
    >
      <div className="h-full bg-gradient-to-br from-primary/50 to-primary/20 border border-primary/30 rounded-xl p-8 hover:border-accent/50 transition-all duration-300 flex flex-col">
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-start justify-between mb-3">
            <div>
              <h3 className="text-2xl font-bold mb-2 group-hover:text-accent transition-colors">
                {service.name}
              </h3>
              <p className="text-gray-400 text-sm">
                {service.description?.substring(0, 80)}...
              </p>
            </div>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-2 py-3 border-b border-primary/30">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-accent" size={14} />
              ))}
            </div>
            <span className="text-xs text-gray-400">(4.8/5 from 150+ reviews)</span>
          </div>
        </div>

        {/* Key Features */}
        <div className="mb-6 flex-grow">
          <p className="text-xs font-semibold text-gray-400 mb-3 uppercase">Key Features:</p>
          <div className="space-y-2">
            {service.features?.professional?.slice(0, 3).map((feature, idx) => {
              const featureText = typeof feature === 'string' ? feature : feature?.name || feature?.description || JSON.stringify(feature);
              return (
                <div key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                  <span className="text-accent">✓</span>
                  <span>{featureText}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Pricing Tiers - FIXED: Added suppressHydrationWarning */}
        <div className="mb-6 pb-6 border-b border-primary/30">
          <p className="text-xs font-semibold text-gray-400 mb-3 uppercase">Pricing Tiers:</p>
          <div className="grid grid-cols-3 gap-2">
            {visibleTiers.map((tier) => (
              <div key={tier} className="text-center">
                <div className="text-xs text-gray-400 capitalize mb-1">{tier}</div>
                <div className="text-lg font-bold text-accent" suppressHydrationWarning>
                  ${isClient ? formatPrice(service.pricing[tier].price) : service.pricing[tier].price}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTAs - Already correct with Link */}
        <div className="flex flex-col sm:flex-row gap-3">
          <Link 
            href={`/services/${service.categorySlug}/${service.slug}`}
            className="flex-1 px-4 py-3 bg-accent/10 hover:bg-accent/20 border border-accent text-accent font-semibold rounded-lg transition-all text-center text-sm"
          >
            Learn More
          </Link>
          <Link 
            href="/contact"
            className="flex-1 px-4 py-3 bg-accent hover:bg-accent/90 text-dark font-semibold rounded-lg transition-all text-center text-sm"
          >
            Get Quote
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
import Head from 'next/head';
import Header from '../components/Navigation';
import Footer from '../components/Footer';
import HeroModern from '../components/Homepage/HeroModern';
import HighlightGrid from '../components/Homepage/HighlightGrid';
import HowItWorks from '../components/Homepage/HowItWorks';
import Testimonials from '../components/Homepage/Testimonials';
import FinalCTA from '../components/Homepage/FinalCTA';

const seoMetaTags = {
  title: 'Enterprise Tech Solutions & Digital Transformation | Maleng Legacy Tech Johannesburg',
  description: 'Maleng Legacy Tech & Consulting - 15+ years of enterprise software development, digital transformation, cloud infrastructure, and cybersecurity solutions. Serving 500+ enterprise clients across South Africa.',
  keywords: 'software development, digital transformation, enterprise solutions, cloud infrastructure, cybersecurity, tech consulting, Johannesburg, South Africa, Azure, AWS, Python, enterprise architecture',
  ogTitle: 'Enterprise Tech Solutions for Digital Transformation',
  ogDescription: 'Custom software development and technology consulting for enterprises. We transform businesses through digital innovation.',
  ogImage: 'https://tech.malenglegacy.co.za/og-tech-hero.png'
};
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaArrowRight, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import services from '../data/services.json';
import { useState, useEffect } from 'react';

export default function HomePage() {
  // Get featured services for Most Trusted Services carousel
  const featuredServices = services.categories
    .slice(0, 3)
    .flatMap(cat => 
      cat.services.slice(0, 2).map(service => ({
        ...service,
        categorySlug: cat.slug,
        categoryName: cat.name
      }))
    )
    .slice(0, 6);

  // Carousel state
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Auto-scroll every 5 seconds
  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 2) % featuredServices.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [autoPlay, featuredServices.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 2) % featuredServices.length);
    setAutoPlay(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 2 + featuredServices.length) % featuredServices.length);
    setAutoPlay(false);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setAutoPlay(false);
  };

  const visibleIndices = [currentIndex, (currentIndex + 1) % featuredServices.length];

  return (
    <>
      <Head>
        <title>{seoMetaTags.title}</title>
        <meta name="description" content={seoMetaTags.description} />
        <meta name="keywords" content={seoMetaTags.keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#003366" />
        <meta name="format-detection" content="telephone=no, date=no, email=no, address=no" />
        
        {/* Open Graph */}
        <meta property="og:title" content={seoMetaTags.ogTitle} />
        <meta property="og:description" content={seoMetaTags.ogDescription} />
        <meta property="og:image" content={seoMetaTags.ogImage} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tech.malenglegacy.co.za" />
        
        {/* Canonical */}
        <link rel="canonical" href="https://tech.malenglegacy.co.za/" />
      </Head>

      <Header isSubsidiary={true} subsidiaryName="Tech & Consulting" />

      <main>
        {/* Modern Hero Section */}
        <HeroModern />

        {/* ===== 6 Core Service Lines Section (KEPT - has own background) ===== */}
        <section id="services" className="py-20 md:py-28 bg-gradient-to-b from-primary via-primary/95 to-soft">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <div className="inline-block px-4 py-2 bg-accent/10 border border-accent/30 rounded-full mb-4">
                <span className="text-accent font-bold text-sm">OUR SERVICES</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                6 Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-highlight to-accent">Service Lines</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Each category offers specialized expertise, proven methodologies, and dedicated support.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.categories.map((category, index) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <Link href={`/services/${category.slug}`} className="block h-full">
                    <div className="relative h-full bg-gradient-to-br from-soft via-surface to-surface border border-white/10 rounded-2xl p-8 hover:border-highlight/50 transition-all duration-300 overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-highlight/20">
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-br from-highlight/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      />
                      <div className="relative z-10">
                        <motion.div 
                          className="w-16 h-16 rounded-xl bg-gradient-to-br from-highlight/20 to-accent/20 border border-highlight/30 flex items-center justify-center mb-6 group-hover:border-highlight/60 transition-all duration-300"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                        >
                          <span className="text-4xl">{category.icon}</span>
                        </motion.div>
                        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-highlight transition-colors">
                          {category.name}
                        </h3>
                        <p className="text-gray-400 text-sm mb-6 line-clamp-2">
                          {category.description}
                        </p>
                        <div className="mb-4">
                          <div className="flex items-center gap-2 mb-3">
                            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Featured Services</span>
                            <span className="text-xs px-2 py-0.5 rounded-full bg-highlight/20 text-highlight font-bold">
                              {category.services.length}
                            </span>
                          </div>
                          <div className="space-y-2">
                            {category.services.slice(0, 2).map((service) => (
                              <div key={service.id} className="flex items-center gap-2 text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                                <span className="text-highlight">◆</span>
                                <span>{service.name}</span>
                              </div>
                            ))}
                            {category.services.length > 2 && (
                              <p className="text-xs text-highlight font-semibold pt-1">
                                +{category.services.length - 2} more services →
                              </p>
                            )}
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-highlight font-semibold text-sm pt-4 border-t border-white/10 group-hover:gap-3 transition-all">
                          <span>Explore Services</span>
                          <FaArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== Most Trusted Services - Carousel (TRANSPARENT - shows page background) ===== */}
        <section className="py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <div className="inline-block px-4 py-2 bg-accent/10 backdrop-blur-sm border border-accent/30 rounded-full mb-4">
                <span className="text-accent font-bold text-sm">🎯 FEATURED SERVICES</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Our Most <span className="text-transparent bg-clip-text bg-gradient-to-r from-highlight to-accent">Trusted Services</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                These are the services our clients choose most often
              </p>
            </motion.div>

            <div
              className="relative"
              onMouseEnter={() => setAutoPlay(false)}
              onMouseLeave={() => setAutoPlay(true)}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 min-h-[500px]">
                {visibleIndices.map((index) => {
                  const service = featuredServices[index];
                  if (!service) return null;
                  return (
                    <div key={`${index}-${service.id}`} className="hidden md:block">
                      <ServiceSlide service={service} isClient={isClient} />
                    </div>
                  );
                })}
                <div className="md:hidden">
                  <ServiceSlide service={featuredServices[currentIndex]} isClient={isClient} />
                </div>
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center justify-between mt-8">
                <div className="flex gap-2">
                  {[...Array(Math.ceil(featuredServices.length / 2))].map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => goToSlide(idx * 2)}
                      className={`h-2 rounded-full transition-all duration-500 ${
                        Math.floor(currentIndex / 2) === idx
                          ? 'bg-highlight w-10'
                          : 'bg-white/30 hover:bg-white/50 w-2'
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={prevSlide}
                    className="p-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:border-highlight hover:bg-highlight/20 transition-all duration-300 group"
                    aria-label="Previous slide"
                  >
                    <FaChevronLeft className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="p-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:border-highlight hover:bg-highlight/20 transition-all duration-300 group"
                    aria-label="Next slide"
                  >
                    <FaChevronRight className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                  </button>
                </div>
              </div>

              <div className="text-center mt-6">
                <p className="text-sm text-gray-400">
                  {autoPlay ? '✨ Auto-playing' : '⏸ Paused'} • Slide {Math.floor(currentIndex / 2) + 1} of {Math.ceil(featuredServices.length / 2)}
                </p>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-center mt-12"
            >
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-8 py-3 bg-white/5 backdrop-blur-sm border border-white/10 text-white font-semibold rounded-xl hover:border-highlight/50 hover:bg-highlight/10 transition-all duration-300 group"
              >
                View All Services
                <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Why Choose Us - Highlights (KEPT - has own gradient) */}
        <HighlightGrid />

        {/* How It Works (TRANSPARENT - shows page background) */}
        <HowItWorks />

        {/* Client Testimonials (KEPT - has own gradient) */}
        <Testimonials />

        {/* Final CTA (KEPT - has own gradient banner) */}
        <FinalCTA />
      </main>

      <Footer />
    </>
  );
}

// Individual Service Slide Component - Modern Styling
function ServiceSlide({ service, isClient }) {
  const rawPrice = service.pricing?.starter?.price;
  const formattedPrice = rawPrice ? rawPrice.toLocaleString() : '0';

  return (
    <Link href={`/services/${service.categorySlug}/${service.slug}`} className="block h-full group">
      <div className="h-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-highlight/50 transition-all duration-300 overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-highlight/20">
        <div className="flex items-start gap-4 mb-4">
          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-highlight/20 to-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <span className="text-3xl">{service.icon}</span>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white group-hover:text-highlight transition-colors">
              {service.name}
            </h3>
            <div className="flex items-center gap-2 mt-1">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="w-3.5 h-3.5 text-yellow-400" />
                ))}
              </div>
              <span className="text-xs text-gray-500">(24 reviews)</span>
            </div>
            <p className="text-xs text-gray-500 mt-1">{service.categoryName}</p>
          </div>
        </div>

        <p className="text-gray-400 text-sm mb-4 line-clamp-2 leading-relaxed">
          {service.description}
        </p>

        <div className="mb-4 pt-3 border-t border-white/10">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Key Benefits</p>
          <div className="space-y-1.5">
            {service.features?.starter?.slice(0, 3).map((feature, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="text-highlight text-sm">◆</span>
                <span className="text-xs text-gray-400">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-4 p-3 rounded-xl bg-gradient-to-br from-highlight/15 to-accent/15 border border-highlight/20">
          <p className="text-xs text-gray-400 mb-1">Starting from</p>
          <p className="text-2xl font-bold text-highlight" suppressHydrationWarning>
            ${formattedPrice}<span className="text-sm text-gray-400">/month</span>
          </p>
        </div>

        <div className="flex gap-3">
          <span className="flex-1 px-3 py-2.5 bg-accent/10 hover:bg-accent/20 border border-accent text-accent font-semibold rounded-xl transition-all text-center text-sm cursor-pointer">
            Learn More
          </span>
          <span className="flex-1 px-3 py-2.5 bg-gradient-to-r from-highlight to-accent hover:from-highlight/90 hover:to-accent/90 text-white font-semibold rounded-xl transition-all text-center text-sm cursor-pointer">
            Get Quote
          </span>
        </div>
      </div>
    </Link>
  );
}
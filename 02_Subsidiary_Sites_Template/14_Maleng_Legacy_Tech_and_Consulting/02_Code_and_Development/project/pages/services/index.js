import React from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import ServiceCategoryCard from '../../components/Services/ServiceCategoryCard';
import FeaturedServicesCarousel from '../../components/Services/FeaturedServicesCarousel';
import TrustIndicators from '../../components/Services/TrustIndicators';
import services from '../../data/services.json';

export default function ServicesHub() {
  // Prepare featured services from all categories
  const featuredServices = services.categories.flatMap(category =>
    category.services.slice(0, 2).map(service => ({
      ...service,
      categorySlug: category.slug,
    }))
  ).slice(0, 5);

  return (
    <>
      <Head>
        <title>Our Services | Tech & Consulting - Enterprise Solutions</title>
        <meta
          name="description"
          content="Explore our 5 core service lines: Software Solutions, Hosting & Infrastructure, Consulting, Connectivity, and Security & Surveillance."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-primary text-white">
        <Navigation />

        {/* Hero Section */}
        <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 px-6">
          <div className="mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Enterprise Tech Infrastructure <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-highlight to-accent">
                  & Security Solutions
                </span>
              </h1>

              <p className="text-xl text-gray-300 max-w-3xl mb-8">
                Specialized Infrastructure, Consulting, Security & Connectivity Services
                for Growth-Focused Enterprises. Choose from 5 core service lines, 24 specialized
                services, and 100+ implementation options.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="#categories"
                  className="px-8 py-3 bg-gradient-to-r from-highlight to-accent text-white font-bold rounded-lg hover:shadow-lg hover:shadow-highlight/50 transition-all duration-300 text-center"
                >
                  Explore All Services
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-3 border-2 border-highlight text-highlight font-bold rounded-lg hover:bg-highlight/10 transition-all duration-300 text-center"
                >
                  Request Demo
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Service Categories Grid */}
        <section id="categories" className="py-16 md:py-24 px-6 bg-gradient-to-b from-primary to-soft">
          <div className="mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                5 Core Service Lines
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Each category offers specialized expertise, proven methodologies, and dedicated support.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.categories.map((category, index) => (
                <ServiceCategoryCard
                  key={category.id}
                  category={category}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Featured Services Carousel */}
        <section className="py-16 md:py-24 px-6 bg-soft">
          <div className="mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our Most Trusted Services
              </h2>
              <p className="text-gray-400 text-lg">
                These are the services our clients choose most often
              </p>
            </motion.div>

            <FeaturedServicesCarousel services={featuredServices} />
          </div>
        </section>

        {/* Service Highlights Grid */}
        <section className="py-16 md:py-24 px-6 bg-gradient-to-b from-soft to-surface">
          <div className="mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Why Choose Our Services
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: '🎯',
                  title: 'Specialized',
                  description: '5 Core Services Only - No Generalist Offerings',
                },
                {
                  icon: '👥',
                  title: 'Expert Team',
                  description: '15+ Years Experience in Enterprise Solutions',
                },
                {
                  icon: '🕐',
                  title: '24/7 Support',
                  description: 'Always There For You - Round-the-Clock Assistance',
                },
                {
                  icon: '📊',
                  title: 'ROI Focused',
                  description: 'Measurable Results - Proven Business Impact',
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="text-center p-6 rounded-xl bg-white/5 border border-white/10 hover:border-highlight/30 transition-all duration-300"
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="py-16 md:py-24 px-6 bg-surface">
          <div className="mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Enterprise Trust & Credibility
              </h2>
              <p className="text-gray-400 text-lg">
                Built on proven expertise, certifications, and client success
              </p>
            </motion.div>

            <TrustIndicators />
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 md:py-24 px-6 bg-soft">
          <div className="mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                How It Works
              </h2>
              <p className="text-gray-400 text-lg mb-12">
                3 Simple Steps to Transform Your Infrastructure
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  step: 1,
                  title: 'Explore Services',
                  description: 'Browse our 5 service lines and explore 24+ specialized services tailored to enterprise needs',
                  icon: '🔍',
                },
                {
                  step: 2,
                  title: 'Customize Package',
                  description: 'Select your preferred tier (Starter, Professional, Enterprise) and customize features',
                  icon: '⚙️',
                },
                {
                  step: 3,
                  title: 'Deploy & Support',
                  description: 'Go live with full support, training, and ongoing optimization from our expert team',
                  icon: '🚀',
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="text-center p-8 rounded-xl bg-gradient-to-br from-soft to-surface border border-white/10 hover:border-highlight/30 transition-all duration-300">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-highlight to-accent flex items-center justify-center text-2xl font-bold text-white mx-auto mb-4">
                      {item.step}
                    </div>
                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-16 md:py-24 px-6 bg-gradient-to-r from-b2b-primary via-b2b-secondary to-b2b-primary relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-highlight rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl" />
          </div>

          <div className="mx-auto max-w-4xl text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                Ready to Transform Your Infrastructure?
              </h2>

              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Get started with a free consultation, explore pricing options, or schedule a personalized demo with our experts.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white text-b2b-primary font-bold rounded-lg hover:shadow-2xl transition-all duration-300"
                >
                  Start Free Consultation
                </Link>
                <Link
                  href="/pricing"
                  className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-all duration-300"
                >
                  View Pricing
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-all duration-300"
                >
                  Schedule Demo
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
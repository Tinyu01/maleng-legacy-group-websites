import React from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import Navigation from '../../../components/Navigation';
import Footer from '../../../components/Footer';
import ServiceGrid from '../../../components/Services/ServiceGrid';
import TrustIndicators from '../../../components/Services/TrustIndicators';
import services from '../../../data/services.json';

export default function ServiceCategory({ category }) {
  if (!category) {
    return (
      <>
        <Head>
          <title>Service Category Not Found</title>
        </Head>
        <Navigation />
        <div className="min-h-screen bg-primary flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Category Not Found</h1>
            <Link href="/services" className="text-highlight hover:text-accent transition">
              ← Back to Services
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Head>
        <title>{category.name} | Tech & Consulting Services</title>
        <meta name="description" content={category.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-primary text-white">
        <Navigation />

        {/* Breadcrumb */}
        <div className="pt-20 md:pt-24 px-6 pb-4">
          <div className="mx-auto max-w-6xl">
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Link href="/services" className="hover:text-highlight transition">
                Services
              </Link>
              <span>→</span>
              <span className="text-highlight">{category.name}</span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="pb-16 md:pb-24 px-6">
          <div className="mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="text-5xl md:text-6xl">{category.icon}</div>
                <div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2">
                    {category.name}
                  </h1>
                  <p className="text-lg text-highlight">{category.tagline}</p>
                </div>
              </div>

              <p className="text-xl text-gray-300 max-w-3xl mb-8">
                {category.description}
              </p>

              {/* Category stats */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                  <p className="text-sm text-gray-400 mb-1">Services Available</p>
                  <p className="text-2xl font-bold text-highlight">
                    {category.services?.length || 0}
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                  <p className="text-sm text-gray-400 mb-1">Support Level</p>
                  <p className="text-lg font-bold text-white">24/7 Available</p>
                </div>
                <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                  <p className="text-sm text-gray-400 mb-1">Setup Time</p>
                  <p className="text-lg font-bold text-white">2-4 Weeks</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="px-8 py-3 bg-gradient-to-r from-highlight to-accent text-white font-bold rounded-lg hover:shadow-lg hover:shadow-highlight/50 transition-all duration-300 text-center"
                >
                  Get Started
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-3 border-2 border-highlight text-highlight font-bold rounded-lg hover:bg-highlight/10 transition-all duration-300 text-center"
                >
                  Request Custom Quote
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Why Choose This Category */}
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
                Why Choose {category.name}?
              </h2>
              <p className="text-gray-400 text-lg">
                Enterprise-grade solutions tailored to your business needs
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                'Specialized Expertise',
                'Proven Track Record',
                'Enterprise Support',
                'Scalable Solutions',
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-lg bg-gradient-to-br from-soft to-surface border border-white/10 hover:border-highlight/30 transition-all duration-300 text-center"
                >
                  <div className="text-3xl mb-3">✓</div>
                  <p className="font-semibold">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Available Services Grid */}
        <section className="py-16 md:py-24 px-6 bg-primary">
          <div className="mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our {category.name} Services
              </h2>
              <p className="text-gray-400 text-lg">
                Click on any service to view detailed pricing and features
              </p>
            </motion.div>

            <ServiceGrid
              services={category.services}
              categorySlug={category.slug}
            />
          </div>
        </section>

        {/* Use Cases */}
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
                Perfect For These Industries
              </h2>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {category.services?.[0]?.industries?.map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="p-4 rounded-lg bg-gradient-to-br from-soft to-surface border border-white/10 hover:border-highlight/30 transition-all duration-300 text-center"
                >
                  <p className="font-semibold text-white">{industry}</p>
                </motion.div>
              )) || []}
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
            </motion.div>

            <TrustIndicators />
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24 px-6 bg-primary">
          <div className="mx-auto max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Frequently Asked Questions
              </h2>
            </motion.div>

            <div className="space-y-4">
              {[
                {
                  q: 'How quickly can you implement these services?',
                  a: 'Most services can be deployed within 2-4 weeks depending on complexity and customization requirements.',
                },
                {
                  q: 'What support is included?',
                  a: '24/7 support is included with all Enterprise tier services. Professional tiers include business hours support.',
                },
                {
                  q: 'Can I upgrade or customize?',
                  a: 'Yes, all services are fully customizable. You can upgrade tiers at any time with no penalty.',
                },
                {
                  q: 'Do you offer migration assistance?',
                  a: 'Yes, we provide full migration support from your existing systems to ensure smooth transitions.',
                },
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-lg border border-white/10 bg-white/5 hover:border-highlight/30 transition-all duration-300"
                >
                  <h3 className="text-lg font-bold text-white mb-2">Q: {faq.q}</h3>
                  <p className="text-gray-400">A: {faq.a}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 md:py-24 px-6 bg-soft">
          <div className="mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Get Started?
              </h2>

              <p className="text-lg text-gray-300 mb-8">
                Our experts are ready to help you find the perfect solution for your business.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-highlight to-accent text-white font-bold rounded-lg hover:shadow-lg hover:shadow-highlight/50 transition-all duration-300"
                >
                  Get Started Now
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-4 border-2 border-highlight text-highlight font-bold rounded-lg hover:bg-highlight/10 transition-all duration-300"
                >
                  Schedule Consultation
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

export async function getStaticProps({ params }) {
  const category = services.categories.find(cat => cat.slug === params.category);

  if (!category) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      category,
    },
  };
}

export async function getStaticPaths() {
  const paths = services.categories.map(category => ({
    params: { category: category.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}
import React from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import Navigation from '../../../components/Navigation';
import Footer from '../../../components/Footer';
import Breadcrumb from '../../../components/Breadcrumb';
import ServiceBackground from '../../../components/ServiceBackground';
import ServiceGrid from '../../../components/Services/ServiceGrid';
import TrustIndicators from '../../../components/Services/TrustIndicators';
import services from '../../../data/services.json';
import { FaArrowRight } from 'react-icons/fa';

export default function ServiceCategory({ category }) {
  if (!category) {
    return (
      <>
        <Head><title>Service Category Not Found</title></Head>
        <Navigation isSubsidiary={true} subsidiaryName="Tech & Consulting" />
        <div className="min-h-screen bg-primary flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Category Not Found</h1>
            <Link href="/services" className="text-highlight hover:text-accent transition">← Back to Services</Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  // Get color for the category
  const categoryColors = {
    'software-solutions': { border: 'border-blue-500/30', text: 'text-blue-400', bg: 'bg-blue-500/10' },
    'hosting-infrastructure': { border: 'border-cyan-500/30', text: 'text-cyan-400', bg: 'bg-cyan-500/10' },
    'consulting': { border: 'border-amber-500/30', text: 'text-amber-400', bg: 'bg-amber-500/10' },
    'connectivity': { border: 'border-red-500/30', text: 'text-red-400', bg: 'bg-red-500/10' },
    'security-surveillance': { border: 'border-purple-500/30', text: 'text-purple-400', bg: 'bg-purple-500/10' },
    'design-creative': { border: 'border-pink-500/30', text: 'text-pink-400', bg: 'bg-pink-500/10' },
  };
  const colors = categoryColors[category.id] || categoryColors['software-solutions'];

  return (
    <>
      <Head>
        <title>{category.name} | Maleng Legacy Tech & Consulting</title>
        <meta name="description" content={category.description} />
      </Head>

      <div className="min-h-screen bg-primary text-white">
        <Navigation isSubsidiary={true} subsidiaryName="Tech & Consulting" />

        {/* Hero Section with Dynamic Background */}
        <section className="relative pt-6 pb-12 md:pt-8 md:pb-16 px-6 overflow-hidden">
          {/* Dynamic Background */}
          <ServiceBackground category={category} variant="hero" />
          
          <div className="mx-auto max-w-6xl relative z-10">
            <Breadcrumb 
              items={[
                { label: 'Services', href: '/services' },
                { label: category.name, href: '#' }
              ]} 
            />
            
            {/* Category Header with Cultural Elements */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mt-6">
              <div className="flex items-center gap-5">
                <motion.div 
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className={`w-20 h-20 rounded-2xl ${colors.bg} border ${colors.border} flex items-center justify-center`}
                >
                  <span className="text-5xl">{category.icon}</span>
                </motion.div>
                <div>
                  <motion.h1 
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-3xl md:text-4xl lg:text-5xl font-bold"
                  >
                    {category.name}
                  </motion.h1>
                  <motion.p 
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className={`${colors.text} text-base md:text-lg mt-2`}
                  >
                    {category.tagline}
                  </motion.p>
                </div>
              </div>
              
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex gap-3"
              >
                <Link
                  href="/contact"
                  className="px-6 py-2.5 bg-gradient-to-r from-highlight to-accent text-white font-semibold rounded-lg hover:shadow-lg transition-all text-sm"
                >
                  Get Started
                </Link>
                <Link
                  href="/contact"
                  className="px-6 py-2.5 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all text-sm"
                >
                  Request Quote
                </Link>
              </motion.div>
            </div>

            {/* Category Description */}
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-gray-300 text-base md:text-lg max-w-3xl mt-6 leading-relaxed"
            >
              {category.description}
            </motion.p>

            {/* Quick Stats */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8"
            >
              <div className={`p-3 rounded-lg ${colors.bg} border ${colors.border} backdrop-blur-sm`}>
                <p className="text-2xl font-bold">{category.services?.length || 0}</p>
                <p className="text-xs text-gray-400">Services Available</p>
              </div>
              <div className={`p-3 rounded-lg ${colors.bg} border ${colors.border} backdrop-blur-sm`}>
                <p className="text-2xl font-bold">24/7</p>
                <p className="text-xs text-gray-400">Support Available</p>
              </div>
              <div className={`p-3 rounded-lg ${colors.bg} border ${colors.border} backdrop-blur-sm`}>
                <p className="text-2xl font-bold">2-4 Weeks</p>
                <p className="text-xs text-gray-400">Avg. Setup Time</p>
              </div>
              <div className={`p-3 rounded-lg ${colors.bg} border ${colors.border} backdrop-blur-sm`}>
                <p className="text-2xl font-bold">99.9%</p>
                <p className="text-xs text-gray-400">Uptime SLA</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Available Services Grid */}
        <section className="py-16 md:py-20 px-6 bg-gradient-to-b from-transparent to-soft/20">
          <div className="mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <div className={`inline-block px-4 py-1.5 ${colors.bg} border ${colors.border} rounded-full mb-4`}>
                <span className={`${colors.text} font-bold text-sm`}>🎯 OUR SERVICES</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-3">
                Explore Our {category.name}
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Click on any service to view detailed pricing, features, and tiers
              </p>
            </motion.div>

            <ServiceGrid services={category.services} categorySlug={category.slug} />
          </div>
        </section>

        {/* Why Choose This Category */}
        <section className="py-16 md:py-20 px-6 bg-soft/30">
          <div className="mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-3">
                Why Choose {category.name}?
              </h2>
              <p className="text-gray-400 text-lg">
                Enterprise-grade solutions tailored to your business needs
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: '🎯', title: 'Specialized Expertise', desc: 'Dedicated team of experts in this domain' },
                { icon: '📊', title: 'Proven Track Record', desc: '100+ successful implementations' },
                { icon: '🕐', title: 'Enterprise Support', desc: '24/7 dedicated support team' },
                { icon: '📈', title: 'Scalable Solutions', desc: 'Grow from startup to enterprise' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-xl bg-gradient-to-br from-soft to-surface border border-white/10 hover:border-highlight/30 transition-all text-center group"
                >
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-highlight transition">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="py-16 md:py-20 px-6 bg-primary">
          <div className="mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-3">
                Enterprise Trust & Credibility
              </h2>
            </motion.div>
            <TrustIndicators />
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 md:py-20 px-6 bg-soft/30">
          <div className="mx-auto max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-3">Frequently Asked Questions</h2>
            </motion.div>

            <div className="space-y-4">
              {[
                { q: 'How quickly can you implement these services?', a: 'Most services can be deployed within 2-4 weeks depending on complexity.' },
                { q: 'What support is included?', a: '24/7 support is included with all Enterprise tier services.' },
                { q: 'Can I upgrade or customize?', a: 'Yes, all services are fully customizable. You can upgrade tiers anytime.' },
                { q: 'Do you offer migration assistance?', a: 'Yes, we provide full migration support from your existing systems.' },
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-5 rounded-xl border border-white/10 bg-white/5 hover:border-highlight/30 transition-all"
                >
                  <h3 className="text-base font-bold text-white mb-2">Q: {faq.q}</h3>
                  <p className="text-gray-400 text-sm">A: {faq.a}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-6 bg-gradient-to-r from-highlight/20 to-accent/20">
          <div className="mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="text-gray-300 mb-6">Our experts are ready to help you find the perfect solution.</p>
              <Link href="/contact" className="inline-block px-8 py-3 bg-gradient-to-r from-highlight to-accent text-white font-bold rounded-lg hover:shadow-lg transition-all">
                Get Started Now
              </Link>
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
    return { notFound: true };
  }

  return {
    props: { category },
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
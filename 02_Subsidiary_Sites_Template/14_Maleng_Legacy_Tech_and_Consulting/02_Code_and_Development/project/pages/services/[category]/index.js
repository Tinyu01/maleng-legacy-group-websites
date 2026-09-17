import React from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import Navigation from '../../../components/Navigation';
import Footer from '../../../components/Footer';
import PageHeader from '../../../components/PageHeader';
import ServiceGrid from '../../../components/Services/ServiceGrid';
import TrustIndicators from '../../../components/Services/TrustIndicators';
import services from '../../../data/services.json';

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

  return (
    <>
      <Head>
        <title>{category.name} | Maleng Legacy Tech & Consulting</title>
        <meta name="description" content={category.description} />
      </Head>

      <div className="min-h-screen bg-primary text-white">
        <Navigation isSubsidiary={true} subsidiaryName="Tech & Consulting" />

        <PageHeader
          badge={category.serviceNature ? `SERVICE NATURE: ${category.serviceNature.toUpperCase()}` : 'OUR SERVICES'}
          icon={category.icon}
          title={category.name}
          description={`${category.tagline} ${category.description}`}
          breadcrumb={[{ label: 'Services', href: '/services' }, { label: category.name, href: '#' }]}
          bg={category.slug}
          isService={true}
          cta={{ text: 'Get Started', link: '/contact' }}
          ctaSecondary={{ text: 'Request Quote', link: '/contact' }}
        />

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
              <div className="inline-block px-4 py-1.5 bg-accent/10 border border-accent/30 rounded-full mb-4">
                <span className="text-accent font-bold text-sm">OUR SERVICES</span>
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
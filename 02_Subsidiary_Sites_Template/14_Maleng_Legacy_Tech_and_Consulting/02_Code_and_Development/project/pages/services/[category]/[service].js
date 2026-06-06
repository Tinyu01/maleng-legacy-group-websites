import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import Navigation from '../../../components/Navigation';
import Footer from '../../../components/Footer';
import PricingCard from '../../../components/Services/PricingCard';
import FeatureComparison from '../../../components/Services/FeatureComparison';
import TestimonialCard from '../../../components/Services/TestimonialCard';
import TrustIndicators from '../../../components/Services/TrustIndicators';
import services from '../../../data/services.json';

export default function IndividualService({ category, service }) {
  const [selectedTier, setSelectedTier] = useState('professional');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!service) {
    return (
      <>
        <Head>
          <title>Service Not Found</title>
        </Head>
        <Navigation />
        <div className="min-h-screen bg-primary flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Service Not Found</h1>
            <Link href="/services" className="text-highlight hover:text-accent transition">
              ← Back to Services
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  const pricingTiers = Object.entries(service.pricing || {}).map(([key, value]) => ({
    id: key,
    ...value,
  }));

  const popularTier = 'professional';

  return (
    <>
      <Head>
        <title>{service.name} | Tech & Consulting Services</title>
        <meta name="description" content={service.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-primary text-white">
        <Navigation />

        {/* Breadcrumb - FIXED: Removed nested a tags */}
        <div className="pt-20 md:pt-24 px-6 pb-4">
          <div className="mx-auto max-w-6xl">
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Link href="/services" className="hover:text-highlight transition">
                Services
              </Link>
              <span>→</span>
              <Link href={`/services/${category.slug}`} className="hover:text-highlight transition">
                {category.name}
              </Link>
              <span>→</span>
              <span className="text-highlight">{service.name}</span>
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
                <div className="text-6xl md:text-7xl">{service.icon}</div>
                <div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2">
                    {service.name}
                  </h1>
                  <p className="text-lg text-gray-400">
                    Part of {category.name}
                  </p>
                </div>
              </div>

              <p className="text-xl text-gray-300 max-w-3xl mb-8">
                {service.description}
              </p>

              {/* Service info badges */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                  <p className="text-sm text-gray-400 mb-1">Setup Time</p>
                  <p className="font-bold text-highlight">{service.setupTime}</p>
                </div>
                <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                  <p className="text-sm text-gray-400 mb-1">Mobile Optimized</p>
                  <p className="font-bold text-white">{service.mobile ? 'Yes ✓' : 'No'}</p>
                </div>
                <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                  <p className="text-sm text-gray-400 mb-1">SEO Ready</p>
                  <p className="font-bold text-white">{service.seo ? 'Yes ✓' : 'No'}</p>
                </div>
                <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                  <p className="text-sm text-gray-400 mb-1">Hosting</p>
                  <p className="font-bold text-white text-sm">{service.hosting}</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="px-8 py-3 bg-gradient-to-r from-highlight to-accent text-white font-bold rounded-lg hover:shadow-lg hover:shadow-highlight/50 transition-all duration-300 text-center"
                >
                  Start Free Trial
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-3 border-2 border-highlight text-highlight font-bold rounded-lg hover:bg-highlight/10 transition-all duration-300 text-center"
                >
                  Chat with Expert
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Service Overview */}
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
                Service Overview
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* What we offer */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold mb-6">What We Offer</h3>
                <div className="space-y-4">
                  <p className="text-gray-300 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="space-y-3">
                    {[
                      'Professional implementation and deployment',
                      'Comprehensive training and documentation',
                      'Ongoing optimization and support',
                      'Scalability for future growth',
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <span className="w-2 h-2 rounded-full bg-highlight" />
                        <span className="text-gray-300">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Why it matters */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold mb-6">Why It Matters</h3>
                <div className="bg-gradient-to-br from-soft to-surface border border-white/10 rounded-lg p-6 space-y-4">
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Key Differentiators</p>
                    <p className="text-white font-semibold">
                      Industry-leading expertise and proven methodologies
                    </p>
                  </div>
                  <div className="h-px bg-white/5" />
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Expected Impact</p>
                    <p className="text-white font-semibold">
                      Measurable ROI and operational efficiency improvements
                    </p>
                  </div>
                  <div className="h-px bg-white/5" />
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Support Level</p>
                    <p className="text-white font-semibold">
                      24/7 Expert support and continuous optimization
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Pricing Tiers */}
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
                Pricing & Packages
              </h2>
              <p className="text-gray-400 text-lg">
                Choose the tier that best fits your needs, or contact us for custom pricing
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {pricingTiers.map((tier, index) => (
                <PricingCard
                  key={tier.id}
                  tier={tier.name}
                  price={tier.price !== null ? tier.price : tier.name}
                  description={tier.description}
                  features={service.features?.[tier.id] || []}
                  isPopular={tier.id === popularTier}
                  cta={tier.billingModel === 'contact' ? 'Get Quote' : 'Get Started'}
                  index={index}
                />
              ))}
            </div>

            {/* Support comparison */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mt-12 p-6 rounded-xl border border-white/10 bg-white/5"
            >
              <h3 className="text-xl font-bold mb-6">Support & Services Comparison</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {pricingTiers.map(tier => (
                  <div key={tier.id}>
                    <p className="font-semibold text-white mb-2">{tier.name}</p>
                    <p className="text-sm text-gray-400">
                      {service.support?.[tier.id] || 'Custom Support'}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Detailed Features */}
        <section className="py-16 md:py-24 px-6 bg-soft">
          <div className="mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Detailed Features Breakdown
              </h2>
            </motion.div>

            <FeatureComparison
              categories={[
                {
                  name: 'Core Features',
                  features: service.features?.starter?.slice(0, 5).map(f => ({
                    name: f,
                  })) || [],
                },
                {
                  name: 'Advanced Features',
                  features: service.features?.professional?.slice(5, 10).map(f => ({
                    name: f,
                  })) || [],
                },
                {
                  name: 'Enterprise Features',
                  features: service.features?.enterprise?.slice(5, 10).map(f => ({
                    name: f,
                  })) || [],
                },
              ]}
            />
          </div>
        </section>

        {/* Use Cases */}
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
                Real-World Use Cases
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {service.useCases?.map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-lg bg-gradient-to-br from-soft to-surface border border-white/10 hover:border-highlight/30 transition-all duration-300"
                >
                  <h3 className="text-lg font-bold mb-2">{useCase}</h3>
                  <p className="text-gray-400 text-sm">
                    Perfect solution for businesses looking to implement {useCase}.
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        {service.testimonials && service.testimonials.length > 0 && (
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
                  What Our Clients Say
                </h2>
                <p className="text-gray-400 text-lg">
                  Real experiences from businesses using {service.name}
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {service.testimonials.map((testimonial, index) => (
                  <TestimonialCard
                    key={index}
                    testimonial={testimonial}
                    index={index}
                  />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Industries */}
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
                Perfect For These Industries
              </h2>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {service.industries?.map((industry, index) => (
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
              ))}
            </div>
          </div>
        </section>

        {/* Trust Indicators */}
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
                Why Enterprise Clients Trust Us
              </h2>
            </motion.div>

            <TrustIndicators />
          </div>
        </section>

        {/* FAQ */}
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
                  q: `How long does ${service.name} typically take to implement?`,
                  a: `Most implementations take ${service.setupTime || '2-4 weeks'} depending on your specific requirements and customization needs.`,
                },
                {
                  q: `What level of support is included?`,
                  a: `All tiers include comprehensive support. Check your chosen tier for specific support hours and availability.`,
                },
                {
                  q: `Can I upgrade or downgrade my plan?`,
                  a: `Yes, you can upgrade or downgrade at any time. Changes take effect on your next billing cycle.`,
                },
                {
                  q: `Is there a free trial available?`,
                  a: `Yes, we offer a 30-day free trial for most services. No credit card required to get started.`,
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Ready to Get Started with {service.name}?
              </h2>

              <p className="text-lg text-white/80 mb-8">
                Join hundreds of enterprise clients who trust us for their {service.name.toLowerCase()} needs.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white text-b2b-primary font-bold rounded-lg hover:shadow-2xl transition-all duration-300"
                >
                  Start 30-Day Free Trial
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-all duration-300"
                >
                  Get Detailed Quote
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-all duration-300"
                >
                  Chat with Expert
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

  const service = category.services.find(svc => svc.slug === params.service);

  if (!service) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      category,
      service,
    },
  };
}

export async function getStaticPaths() {
  const paths = [];

  services.categories.forEach(category => {
    category.services.forEach(service => {
      paths.push({
        params: {
          category: category.slug,
          service: service.slug,
        },
      });
    });
  });

  return {
    paths,
    fallback: false,
  };
}
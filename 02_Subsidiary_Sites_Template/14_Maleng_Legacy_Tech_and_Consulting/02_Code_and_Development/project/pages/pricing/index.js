import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import PricingCard from '../../components/Services/PricingCard';
import TrustIndicators from '../../components/Services/TrustIndicators';
import services from '../../data/services.json';

export default function PricingPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Flatten all services with their category info
  const allServices = [];
  services.categories.forEach(category => {
    category.services.forEach(service => {
      allServices.push({
        ...service,
        categorySlug: category.slug,
        categoryName: category.name,
      });
    });
  });

  // Filter services based on selected category
  const filteredServices = selectedCategory === 'all'
    ? allServices
    : allServices.filter(s => s.categorySlug === selectedCategory);

  return (
    <>
      <Head>
        <title>Pricing | Tech & Consulting Services</title>
        <meta
          name="description"
          content="Transparent, competitive pricing for all our enterprise tech services. Choose from starter, professional, enterprise, or custom tiers."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-primary text-white">
        <Navigation isSubsidiary={true} subsidiaryName="Tech & Consulting" />

        {/* Hero Section */}
        <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 px-6">
          <div className="mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-center">
                Transparent <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-highlight to-accent">
                  Pricing for All
                </span>
              </h1>

              <p className="text-xl text-gray-300 max-w-3xl mx-auto text-center mb-8">
                Choose the perfect plan for your business. All tiers include 24/7 support,
                SSL certificates, and access to our expert team.
              </p>

              <div className="flex justify-center">
                <div className="inline-flex items-center gap-4 p-3 rounded-full bg-white/10 border border-white/20">
                  <span className="text-sm text-gray-300">💡 Tip:</span>
                  <span className="text-sm">
                    Need custom pricing? <span className="text-highlight font-semibold">Contact us</span>
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 px-6 bg-soft">
          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-8">
              <p className="text-gray-400 mb-4">Filter by Service Category</p>
              <div className="flex flex-wrap justify-center gap-3">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory('all')}
                  className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                    selectedCategory === 'all'
                      ? 'bg-highlight text-white shadow-lg shadow-highlight/30'
                      : 'bg-white/10 border border-white/20 text-gray-300 hover:border-highlight/50'
                  }`}
                >
                  All Services
                </motion.button>

                {services.categories.map(category => (
                  <motion.button
                    key={category.slug}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedCategory(category.slug)}
                    className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                      selectedCategory === category.slug
                        ? 'bg-highlight text-white shadow-lg shadow-highlight/30'
                        : 'bg-white/10 border border-white/20 text-gray-300 hover:border-highlight/50'
                    }`}
                  >
                    {category.name}
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Cards Grid */}
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
                Our Service Offerings
              </h2>
              <p className="text-gray-400 text-lg">
                {filteredServices.length} {filteredServices.length === 1 ? 'service' : 'services'} available
              </p>
            </motion.div>

            <div className="space-y-12">
              {filteredServices.map((service, serviceIndex) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: serviceIndex * 0.05, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  {/* Service header */}
                  <div className="mb-6">
                    <Link 
                      href={`/services/${service.categorySlug}/${service.slug}`}
                      className="group inline-flex items-center gap-3 mb-2 hover:text-highlight transition-colors duration-300"
                    >
                      <span className="text-3xl">{service.icon}</span>
                      <div>
                        <h3 className="text-2xl font-bold text-white group-hover:text-highlight transition-colors">
                          {service.name}
                        </h3>
                        <p className="text-sm text-gray-400">{service.categoryName}</p>
                      </div>
                    </Link>
                  </div>

                  {/* Pricing tiers for this service */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {Object.entries(service.pricing || {}).map(([tierKey, tierData], tierIndex) => (
                      <PricingCard
                        key={tierKey}
                        tier={tierData.name}
                        price={
                          tierData.price !== null
                            ? `$${typeof tierData.price === 'number' ? tierData.price.toLocaleString() : tierData.price}`
                            : 'Custom'
                        }
                        description={tierData.description}
                        features={service.features?.[tierKey]?.slice(0, 4) || []}
                        isPopular={tierKey === 'professional'}
                        cta={tierData.billingModel === 'contact' ? 'Get Quote' : 'Get Started'}
                        index={tierIndex}
                      />
                    ))}
                  </div>

                  {/* Service link */}
                  <div className="mt-6 text-center">
                    <Link 
                      href={`/services/${service.categorySlug}/${service.slug}`}
                      className="inline-flex items-center gap-2 text-highlight font-semibold hover:gap-3 transition-all duration-300"
                    >
                      View Full Details →
                    </Link>
                  </div>

                  {/* Divider */}
                  {serviceIndex < filteredServices.length - 1 && (
                    <div className="mt-12 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Comparison */}
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
                What's Included in Each Tier
              </h2>
              <p className="text-gray-400 text-lg">
                Compare our standard tier inclusions across all service categories
              </p>
            </motion.div>

            <div className="overflow-x-auto rounded-xl border border-white/10 bg-gradient-to-br from-soft to-surface">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10 bg-white/5">
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300 w-48">
                      Feature
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-300">
                      Starter
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-white bg-highlight/5">
                      Professional
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-300">
                      Enterprise
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: 'Setup & Deployment', starter: true, professional: true, enterprise: true },
                    { feature: 'Training & Documentation', starter: true, professional: true, enterprise: true },
                    { feature: 'Email Support', starter: true, professional: true, enterprise: true },
                    { feature: 'Phone Support (Business Hours)', starter: false, professional: true, enterprise: true },
                    { feature: '24/7 Phone Support', starter: false, professional: false, enterprise: true },
                    { feature: 'Dedicated Account Manager', starter: false, professional: false, enterprise: true },
                    { feature: 'Performance Optimization', starter: false, professional: true, enterprise: true },
                    { feature: 'Advanced Security Features', starter: false, professional: true, enterprise: true },
                    { feature: 'Quarterly Business Reviews', starter: false, professional: false, enterprise: true },
                    { feature: 'Custom Integrations', starter: false, professional: true, enterprise: true },
                  ].map((row, index) => (
                    <tr
                      key={index}
                      className={`border-b border-white/5 transition-colors duration-300 hover:bg-white/5 ${
                        index % 2 === 0 ? 'bg-white/2' : ''
                      }`}
                    >
                      <td className="px-6 py-4 text-sm font-medium text-gray-300">
                        {row.feature}
                      </td>
                      <td className="px-6 py-4 text-center">
                        {row.starter ? (
                          <span className="text-accent font-bold">✓</span>
                        ) : (
                          <span className="text-gray-600">—</span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-center bg-highlight/5">
                        {row.professional ? (
                          <span className="text-accent font-bold">✓</span>
                        ) : (
                          <span className="text-gray-600">—</span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-center">
                        {row.enterprise ? (
                          <span className="text-accent font-bold">✓</span>
                        ) : (
                          <span className="text-gray-600">—</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Trust Indicators */}
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
                Enterprise Trust
              </h2>
            </motion.div>

            <TrustIndicators />
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 md:py-24 px-6 bg-soft">
          <div className="mx-auto max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Pricing FAQ
              </h2>
            </motion.div>

            <div className="space-y-4">
              {[
                {
                  q: 'Do you offer annual discounts?',
                  a: 'Yes! Contact our sales team for volume discounts and annual payment options that can save you up to 20%.',
                },
                {
                  q: 'What is your refund policy?',
                  a: 'We offer a 30-day money-back guarantee for all services. If you are not satisfied, we will refund your payment.',
                },
                {
                  q: 'Can I mix and match different tiers?',
                  a: 'Absolutely! Many clients use different tier levels for different services based on their specific needs.',
                },
                {
                  q: 'Do prices include tax?',
                  a: 'Prices shown are before tax. Applicable VAT/GST will be added at checkout based on your location.',
                },
                {
                  q: 'What happens if I need to scale up?',
                  a: 'Upgrades are instant and pro-rated. You only pay the difference for the remainder of your billing period.',
                },
                {
                  q: 'Is there a long-term contract required?',
                  a: 'No! All our services are month-to-month. You can cancel anytime with 30 days notice.',
                },
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-lg border border-white/10 bg-gradient-to-br from-soft to-surface hover:border-highlight/30 transition-all duration-300"
                >
                  <h3 className="text-lg font-bold text-white mb-2">Q: {faq.q}</h3>
                  <p className="text-gray-400">A: {faq.a}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 md:py-24 px-6 bg-gradient-to-r from-primary to-secondary relative overflow-hidden">
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
                Not Sure Which Plan Is Right for You?
              </h2>

              <p className="text-xl text-white/80 mb-8">
                Our experts are ready to help you choose the perfect combination of services and pricing for your business.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white text-primary font-bold rounded-lg hover:shadow-2xl transition-all duration-300"
                >
                  Get Personalized Quote
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-all duration-300"
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
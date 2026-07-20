import React from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import PageHeader from '../../components/PageHeader';
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
        <title>Our Services | Maleng Legacy Tech & Consulting</title>
        <meta
          name="description"
          content="Explore our 6 core service lines: Software Solutions, Hosting & Infrastructure, Consulting, Connectivity, Security, and Design & Creative."
        />
      </Head>

      <div className="min-h-screen bg-primary text-white">
        <Navigation isSubsidiary={true} subsidiaryName="Tech & Consulting" />

        {/* Page Header with Image Background */}
        <PageHeader
          badge="OUR SERVICES"
          title="Enterprise Tech"
          highlight="Infrastructure & Security Solutions"
          description="Specialized software, cloud, connectivity, security, and creative services for growth-focused enterprises. Choose from 6 core service lines and 34 specialized services."
          breadcrumb={[{ label: 'Services', href: '#' }]}
          bg="default"
          cta={{ text: 'Explore All Services', link: '#categories' }}
          ctaSecondary={{ text: 'Request Demo', link: '/contact' }}
        />

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
                6 Core Service Lines
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

        {/* CTA */}
        <section className="py-16 px-6 bg-gradient-to-r from-highlight/20 to-accent/20">
          <div className="mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Transform Your Infrastructure?</h2>
              <p className="text-gray-300 mb-6">Get started with a free consultation or schedule a personalized demo.</p>
              <Link href="/contact" className="inline-block px-8 py-3 bg-gradient-to-r from-highlight to-accent text-white font-bold rounded-lg hover:shadow-lg transition-all">
                Start Free Consultation
              </Link>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
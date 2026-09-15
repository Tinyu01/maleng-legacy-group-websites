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
  const categories = services.categories || [];
  const pillarOrder = ['Development', 'Support / Managed Operations', 'Networking'];

  const pillarNarratives = {
    Development: 'Build differentiated software and digital capabilities that accelerate growth.',
    'Support / Managed Operations':
      'Run environments with disciplined operations, security, and reliability ownership.',
    Networking:
      'Connect teams, branches, and platforms with enterprise-grade telecom and network engineering.',
  };

  const pillarCards = pillarOrder.map((pillar) => {
    const pillarCategories = categories.filter((category) => category.serviceNature === pillar);
    const serviceCount = pillarCategories.reduce((sum, category) => sum + category.services.length, 0);
    return {
      name: pillar,
      narrative: pillarNarratives[pillar],
      categoryCount: pillarCategories.length,
      serviceCount,
      primaryCategory: pillarCategories[0],
    };
  });

  const featuredServices = pillarOrder.flatMap((pillar) =>
    categories
      .filter((category) => category.serviceNature === pillar)
      .flatMap((category) =>
        category.services.slice(0, 1).map((service) => ({
          ...service,
          categorySlug: category.slug,
        }))
      )
      .slice(0, 2)
  );

  const orderedCategories = [
    ...pillarOrder.flatMap((pillar) => categories.filter((category) => category.serviceNature === pillar)),
    ...categories.filter((category) => !pillarOrder.includes(category.serviceNature)),
  ];

  return (
    <>
      <Head>
        <title>Our Services | Maleng Legacy Tech & Consulting</title>
        <meta
          name="description"
          content="Engineering and managed services organized by Development, Support/Managed Operations, and Networking, with full access to our wider specialist catalog."
        />
      </Head>

      <div className="min-h-screen bg-primary text-white">
        <Navigation isSubsidiary={true} subsidiaryName="Tech & Consulting" />

        {/* Page Header with Image Background */}
        <PageHeader
          badge="OUR SERVICES"
          title="Enterprise Tech"
          highlight="Engineering & Managed Services"
          description="We deliver engineering, managed operations, and networking outcomes through specialized service lines. Hosting plans and product subscriptions are provided via Legacy Hosting Platform."
          breadcrumb={[{ label: 'Services', href: '#' }]}
          bg="default"
          cta={{ text: 'Explore Primary Pillars', link: '#pillars' }}
          ctaSecondary={{ text: 'Request Demo', link: '/contact' }}
        />

        <section id="pillars" className="py-16 md:py-20 px-6 bg-soft/40">
          <div className="mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our 3 Primary Service Pillars</h2>
              <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                Tech & Consulting is focused on engineering delivery and managed operations outcomes. Hosting product plans are delivered through Legacy Hosting Platform.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {pillarCards.map((pillar, index) => (
                <motion.div
                  key={pillar.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="rounded-2xl border border-white/10 bg-gradient-to-br from-soft to-surface p-6"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-3">{pillar.name}</p>
                  <p className="text-sm text-gray-300 leading-relaxed mb-5">{pillar.narrative}</p>
                  <p className="text-xs text-gray-500 mb-5">
                    {pillar.categoryCount} categories · {pillar.serviceCount} services
                  </p>
                  <Link
                    href={pillar.primaryCategory ? `/services/${pillar.primaryCategory.slug}` : '#categories'}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-highlight hover:text-accent transition-colors"
                  >
                    Explore pillar services <span>→</span>
                  </Link>
                </motion.div>
              ))}
            </div>
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
                Full Service Catalog
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Discover every specialist category while staying aligned to Development, Support / Managed Operations, and Networking priorities.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {orderedCategories.map((category, index) => (
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
                High-demand engineering and managed service outcomes clients choose first
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
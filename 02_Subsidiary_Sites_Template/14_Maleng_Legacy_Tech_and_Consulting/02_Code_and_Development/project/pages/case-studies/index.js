import { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import caseStudiesData from '../../data/caseStudies.json';

export default function CaseStudiesPage() {
  const [filter, setFilter] = useState('all');
  const caseStudies = caseStudiesData.caseStudies;

  const industries = ['all', ...new Set(caseStudies.map(cs => cs.industry))];

  const filteredStudies = filter === 'all'
    ? caseStudies
    : caseStudies.filter(cs => cs.industry === filter);

  return (
    <>
      <Head>
        <title>Case Studies | Maleng Legacy Tech & Consulting</title>
        <meta
          name="description"
          content="Explore our enterprise success stories: Infrastructure consolidation, digital transformation, cybersecurity, and more."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-primary text-white">
        <Navigation isSubsidiary={true} subsidiaryName="Tech & Consulting" />

        {/* Hero Section */}
        <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 px-6 overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 left-10 w-72 h-72 bg-highlight rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl" />
          </div>

          <div className="mx-auto max-w-6xl relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="inline-block px-4 py-2 bg-accent/10 border border-accent/30 rounded-full mb-6">
                <span className="text-accent font-bold text-sm">CLIENT SUCCESS</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Enterprise{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-highlight to-accent">
                  Success Stories
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See how we've helped enterprises transform their infrastructure, security, and digital capabilities.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filter */}
        <section className="py-8 px-6 bg-soft">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-wrap justify-center gap-3">
              {industries.map(industry => (
                <button
                  key={industry}
                  onClick={() => setFilter(industry)}
                  className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 capitalize ${
                    filter === industry
                      ? 'bg-highlight text-white shadow-lg shadow-highlight/30'
                      : 'bg-white/10 border border-white/20 text-gray-300 hover:border-highlight/50'
                  }`}
                >
                  {industry === 'all' ? 'All Industries' : industry}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-16 md:py-24 px-6">
          <div className="mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredStudies.map((study, index) => (
                <motion.div
                  key={study.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <Link href={`/case-studies/${study.slug}`} className="block h-full">
                    <div className="h-full bg-gradient-to-br from-soft to-surface border border-white/10 rounded-2xl overflow-hidden hover:border-highlight/50 transition-all duration-300 hover:shadow-2xl hover:shadow-highlight/20">
                      <div className="p-6">
                        <div className="text-5xl mb-4">{study.image}</div>
                        <div className="text-sm text-highlight mb-2">{study.industry}</div>
                        <h3 className="text-xl font-bold mb-3 line-clamp-2">{study.title}</h3>
                        <p className="text-gray-400 text-sm mb-4 line-clamp-3">{study.challenge.substring(0, 120)}...</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {study.services.slice(0, 2).map((service, i) => (
                            <span key={i} className="text-xs px-2 py-1 rounded-full bg-white/5 border border-white/10">
                              {service.name}
                            </span>
                          ))}
                        </div>
                        <div className="flex items-center justify-between pt-4 border-t border-white/10">
                          <span className="text-highlight font-semibold text-sm">Read Case Study →</span>
                          <span className="text-xs text-gray-500">{study.timeline}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-6 bg-gradient-to-r from-b2b-primary via-b2b-secondary to-b2b-primary">
          <div className="mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Write Your Success Story?</h2>
              <Link
                href="/contact"
                className="inline-block px-8 py-4 bg-white text-b2b-primary font-bold rounded-lg hover:shadow-2xl transition-all"
              >
                Start Your Transformation
              </Link>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
import Head from 'next/head';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import PageHeader from '../../components/PageHeader';
import services from '../../data/services.json';
import faqs from '../../data/faqs.json';
import { FaCheck, FaRocket, FaArrowRight } from 'react-icons/fa';

// ---------------------------------------------------------------------------
// Engagement models — mirrors the tiers surfaced in the Pricing mega-menu in
// Navigation.js so the story is consistent whether a visitor hovers the nav
// or lands directly on this page.
// ---------------------------------------------------------------------------
const engagementTiers = [
  {
    name: 'Advisory',
    summary: 'Fast-start strategy, discovery, and roadmap design',
    price: 'From R18k',
    tag: 'Best for pilots',
    outcome: 'Clear priorities, delivery blueprints, and executive alignment',
    includes: ['Discovery workshop', 'Scope framing', 'Execution roadmap'],
  },
  {
    name: 'Growth',
    summary: 'Ongoing delivery, automation, and operating leverage',
    price: 'From R45k',
    tag: 'Most popular',
    isPopular: true,
    outcome: 'Measurable delivery momentum with stronger internal systems',
    includes: ['Implementation support', 'Performance tracking', 'Retained optimisation'],
  },
  {
    name: 'Enterprise',
    summary: 'Complex programs, governance, and dedicated squads',
    price: 'Custom',
    tag: 'Scale-ready',
    outcome: 'Multi-site transformation with disciplined execution and control',
    includes: ['Program governance', 'Cross-functional delivery', 'Executive reporting'],
  },
];

export default function PricingHub() {
  const categories = services.categories;
  const totalServices = categories.reduce((sum, c) => sum + c.services.length, 0);
  const pricingFaqs = faqs.pricing || [];

  return (
    <>
      <Head>
        <title>Pricing | Maleng Legacy Tech & Consulting</title>
        <meta
          name="description"
          content="Transparent pricing across every service line — 34 specialized services and three flexible engagement models, from fast-start advisory to enterprise transformation."
        />
      </Head>

      <div className="min-h-screen bg-primary text-white">
        <Navigation isSubsidiary={true} subsidiaryName="Tech & Consulting" />

        <PageHeader
          badge="TRANSPARENT PRICING"
          title="Pricing Built Around"
          highlight="Your Ambition"
          description="Choose an engagement model for how we work together, or browse detailed pricing comparisons by service category. No hidden fees — every number is a real starting point."
          breadcrumb={[{ label: 'Pricing', href: '#' }]}
          bg="pricing"
          cta={{ text: 'Browse by Category', link: '#categories' }}
          ctaSecondary={{ text: 'Talk to Sales', link: '/contact' }}
        />

        {/* Engagement Models */}
        <section className="py-16 md:py-20 px-6">
          <div className="mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent mb-3">How we engage</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Three Ways to Work With Us</h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Every engagement is structured to balance speed, governance, and measurable outcomes.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {engagementTiers.map((tier, index) => (
                <motion.div
                  key={tier.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className={`relative rounded-2xl border p-8 flex flex-col transition-all duration-300 ${
                    tier.isPopular
                      ? 'border-highlight shadow-2xl shadow-highlight/20 bg-gradient-to-br from-soft to-surface md:scale-105'
                      : 'border-white/10 bg-gradient-to-br from-soft to-surface hover:border-highlight/40'
                  }`}
                >
                  {tier.isPopular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-highlight to-accent text-white text-xs font-bold">
                      <FaRocket className="w-3 h-3" /> MOST POPULAR
                    </div>
                  )}
                  <span className="inline-block self-start rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-accent mb-4">
                    {tier.tag}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <p className="text-sm text-gray-400 mb-6">{tier.summary}</p>
                  <p className="text-4xl font-black text-highlight mb-6">{tier.price}</p>

                  <div className="mb-6 p-4 rounded-xl bg-white/5 border border-white/10">
                    <p className="text-[11px] uppercase tracking-[0.2em] text-gray-500 mb-1">Outcome</p>
                    <p className="text-sm text-gray-300">{tier.outcome}</p>
                  </div>

                  <ul className="space-y-3 mb-8 flex-grow">
                    {tier.includes.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <FaCheck className="w-3.5 h-3.5 text-accent mt-1 flex-shrink-0" />
                        <span className="text-sm text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className={`text-center py-3 px-4 rounded-lg font-semibold transition-all ${
                      tier.isPopular
                        ? 'bg-gradient-to-r from-highlight to-accent text-white hover:shadow-lg'
                        : 'bg-white/10 border border-white/20 text-white hover:bg-white/20'
                    }`}
                  >
                    Explore {tier.name} →
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Browse Pricing by Category — mirrors the /services hub's category grid */}
        <section id="categories" className="py-16 md:py-20 px-6 bg-soft scroll-mt-20">
          <div className="mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent mb-3">Full breakdown</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Browse Pricing by Category</h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                {totalServices} services across {categories.length} categories. Pick a category for a full
                Starter / Professional / Enterprise / Custom comparison.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((category, index) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <Link
                    href={`/pricing/${category.slug}`}
                    className="group block h-full bg-gradient-to-br from-soft to-surface border border-white/10 rounded-2xl p-6 hover:border-highlight/50 transition-all duration-300 hover:shadow-xl hover:shadow-highlight/10"
                  >
                    <span className="text-4xl mb-4 block">{category.icon}</span>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-highlight transition-colors leading-snug">
                      {category.name}
                    </h3>
                    <p className="text-sm text-gray-400 mb-5 line-clamp-2 leading-relaxed">{category.tagline}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-white/5">
                      <span className="text-xs text-gray-500">{category.services.length} services</span>
                      <span className="flex items-center gap-2 text-highlight font-semibold text-sm">
                        Compare pricing
                        <FaArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        {pricingFaqs.length > 0 && (
          <section className="py-16 md:py-20 px-6">
            <div className="mx-auto max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center mb-10"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-3">Pricing FAQs</h2>
                <p className="text-gray-400 text-lg">Straight answers to the questions we hear most</p>
              </motion.div>

              <div className="space-y-4">
                {pricingFaqs.map((faq, index) => (
                  <motion.div
                    key={faq.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="p-5 rounded-xl border border-white/10 bg-white/5 hover:border-highlight/30 transition-all"
                  >
                    <h3 className="text-base font-bold text-white mb-2">Q: {faq.question}</h3>
                    <p className="text-gray-400 text-sm">A: {faq.answer}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="py-16 px-6 bg-gradient-to-r from-highlight/20 to-accent/20">
          <div className="mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Not Sure Which Tier Fits?</h2>
              <p className="text-gray-300 mb-6">
                Tell us about your goals and we'll recommend the right service and pricing tier — free of charge.
              </p>
              <Link
                href="/contact"
                className="inline-block px-8 py-3 bg-gradient-to-r from-highlight to-accent text-white font-bold rounded-lg hover:shadow-lg transition-all"
              >
                Get a Free Recommendation
              </Link>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
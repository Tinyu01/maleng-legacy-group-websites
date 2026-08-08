import Head from 'next/head';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Navigation from '../../../components/Navigation';
import Footer from '../../../components/Footer';
import Breadcrumb from '../../../components/Breadcrumb';
import services from '../../../data/services.json';

// Comparison-table columns — order matters, and every service in services.json
// carries all four of these tiers (starter/professional/enterprise/custom).
const TIER_LABELS = [
  { key: 'starter', label: 'Starter' },
  { key: 'professional', label: 'Professional' },
  { key: 'enterprise', label: 'Enterprise' },
  { key: 'custom', label: 'Custom' },
];

export default function PricingCategory({ category }) {
  if (!category) {
    return (
      <>
        <Head><title>Pricing Category Not Found</title></Head>
        <Navigation isSubsidiary={true} subsidiaryName="Tech & Consulting" />
        <div className="min-h-screen bg-primary flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Category Not Found</h1>
            <Link href="/pricing" className="text-highlight hover:text-accent transition">← Back to Pricing</Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Head>
        <title>{category.name} Pricing | Maleng Legacy Tech & Consulting</title>
        <meta
          name="description"
          content={`Compare Starter, Professional, Enterprise, and Custom pricing across every service in ${category.name}.`}
        />
      </Head>

      <div className="min-h-screen bg-primary text-white">
        <Navigation isSubsidiary={true} subsidiaryName="Tech & Consulting" />

        {/* Hero */}
        <section className="pt-8 pb-12 md:pt-12 md:pb-16 px-6">
          <div className="mx-auto max-w-6xl">
            <Breadcrumb
              items={[
                { label: 'Pricing', href: '/pricing' },
                { label: category.name, href: '#' },
              ]}
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-soft to-surface border border-white/10 rounded-3xl p-8 md:p-10"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                <div>
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-highlight/20 to-accent/20 border border-highlight/30 flex items-center justify-center text-4xl mb-4">
                    {category.icon}
                  </div>
                  <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">{category.name} Pricing</h1>
                  <p className="text-gray-400 text-sm max-w-xl">{category.tagline}</p>
                </div>

                <div className="flex flex-wrap gap-3 md:flex-shrink-0">
                  <Link
                    href={`/services/${category.slug}`}
                    className="px-6 py-3 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all text-sm text-center"
                  >
                    View Full Service Details
                  </Link>
                  <Link
                    href="/contact"
                    className="px-6 py-3 bg-gradient-to-r from-highlight to-accent text-white font-semibold rounded-lg hover:shadow-lg transition-all text-sm text-center"
                  >
                    Talk to Sales
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="pb-16 md:pb-20 px-6">
          <div className="mx-auto max-w-6xl">
            <div className="flex items-center justify-between gap-4 mb-6">
              <h2 className="text-xl md:text-2xl font-bold text-white">Compare All {category.services.length} Services</h2>
              <span className="text-xs text-gray-500 whitespace-nowrap">Professional tier is our most popular</span>
            </div>

            <div className="overflow-x-auto rounded-xl border border-white/10 bg-gradient-to-br from-soft to-surface">
              <table className="w-full min-w-[720px]">
                <thead>
                  <tr className="border-b border-white/10 bg-white/5">
                    <th className="px-5 py-4 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider w-64">
                      Service
                    </th>
                    {TIER_LABELS.map((tier) => (
                      <th
                        key={tier.key}
                        className={`px-5 py-4 text-center text-xs font-semibold uppercase tracking-wider ${
                          tier.key === 'professional' ? 'text-highlight bg-highlight/5' : 'text-gray-300'
                        }`}
                      >
                        {tier.label}
                        {tier.key === 'professional' && (
                          <span className="block text-[10px] font-normal normal-case text-accent mt-0.5">Most Popular</span>
                        )}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {category.services.map((service, idx) => (
                    <tr
                      key={service.id}
                      className={`border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors ${
                        idx % 2 === 0 ? 'bg-white/[0.02]' : ''
                      }`}
                    >
                      <td className="px-5 py-4">
                        <Link
                          href={`/services/${category.slug}/${service.slug}`}
                          className="flex items-center gap-2 group"
                        >
                          <span className="text-lg">{service.icon}</span>
                          <span className="text-sm font-medium text-gray-200 group-hover:text-highlight transition line-clamp-1">
                            {service.name}
                          </span>
                        </Link>
                      </td>
                      {TIER_LABELS.map((tier) => {
                        const tierData = service.pricing?.[tier.key];
                        return (
                          <td
                            key={tier.key}
                            className={`px-5 py-4 text-center text-sm ${
                              tier.key === 'professional' ? 'bg-highlight/5 text-highlight font-semibold' : 'text-gray-300'
                            }`}
                          >
                            {tierData?.price || '—'}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-xs text-gray-500 mt-4">
              Click any service name for its full feature breakdown, use cases, and client success stories.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-6 bg-gradient-to-r from-highlight/20 to-accent/20">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Not Sure Which Tier Fits {category.name}?</h2>
            <p className="text-gray-300 mb-6">Talk to our team about the right tier and timeline for your business.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/pricing"
                className="px-8 py-3 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all"
              >
                ← All Pricing Categories
              </Link>
              <Link
                href="/contact"
                className="px-8 py-3 bg-gradient-to-r from-highlight to-accent text-white font-bold rounded-lg hover:shadow-lg transition-all"
              >
                Book a Free Consultation
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export async function getStaticProps({ params }) {
  const category = services.categories.find((c) => c.slug === params.category);

  if (!category) {
    return { notFound: true };
  }

  return {
    props: { category },
  };
}

export async function getStaticPaths() {
  const paths = services.categories.map((category) => ({
    params: { category: category.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}
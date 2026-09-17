import Head from 'next/head';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Navigation from '../../../components/Navigation';
import Footer from '../../../components/Footer';
import PageHeader from '../../../components/PageHeader';
import services from '../../../data/services.json';
import { FaCheck, FaArrowRight, FaRocket } from 'react-icons/fa';

const TIER_ORDER = ['starter', 'professional', 'enterprise', 'custom'];

function formatPrice(tier) {
  if (!tier) return { label: 'Request Quote', suffix: '' };
  const { price, billingModel } = tier;
  if (
    price === 'Request Quote' ||
    price === 'Included' ||
    billingModel === 'contact' ||
    billingModel === 'included'
  ) {
    return { label: price || 'Request Quote', suffix: '' };
  }
  const suffixMap = {
    monthly: '/mo',
    'one-time': ' once-off',
    project: ' per project',
  };
  return { label: price, suffix: suffixMap[billingModel] || '' };
}

export default function PricingServicePage({ category, service }) {
  if (!category || !service) {
    return (
      <>
        <Head><title>Pricing Not Found</title></Head>
        <Navigation isSubsidiary={true} subsidiaryName="Tech & Consulting" />
        <div className="min-h-screen bg-primary flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Pricing Page Not Found</h1>
            <Link href="/pricing" className="text-highlight hover:text-accent transition">
              ← Back to Pricing
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  const tiers = TIER_ORDER.map((key) => ({
    key,
    ...(service.pricing?.[key] || {}),
  })).filter((t) => t.price || t.name);

  return (
    <>
      <Head>
        <title>{service.name} Pricing | Maleng Legacy Tech & Consulting</title>
        <meta
          name="description"
          content={`Transparent pricing for ${service.name}. Compare Starter, Professional, Enterprise and Custom packages.`}
        />
      </Head>

      <div className="min-h-screen bg-primary text-white">
        <Navigation isSubsidiary={true} subsidiaryName="Tech & Consulting" />

        <PageHeader
          badge={service.serviceNature ? `SERVICE NATURE: ${service.serviceNature.toUpperCase()}` : category.name.toUpperCase()}
          icon={service.icon}
          title={service.name}
          highlight="Pricing"
          description={service.description}
          breadcrumb={[{ label: 'Pricing', href: '/pricing' }, { label: category.name, href: `/pricing/${category.slug}` }, { label: service.name, href: '#' }]}
          bg="pricing"
          cta={{ text: 'View Full Service Details', link: `/services/${category.slug}/${service.slug}` }}
          ctaSecondary={{ text: 'Talk to Sales', link: '/contact' }}
        />
        {(service.slug === 'managed-web-hosting-platforms' || category.slug === 'hosting-infrastructure') && (
          <p className="mx-auto max-w-6xl px-6 pt-4 text-xs text-gray-500">
            Pricing shown is for setup, migration, and managed operations scope. For hosting product plans, use Legacy Hosting Platform.
          </p>
        )}

        {/* Pricing Packages */}
        <section className="pb-16 md:pb-20 px-6">
          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent mb-3">
                Pricing & Packages
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your Perfect Plan</h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Select the tier that best fits your needs. All plans include enterprise-grade features and 24/7 support.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {tiers.map((tier, index) => {
                const { label, suffix } = formatPrice(tier);
                const isPopular = tier.key === 'professional';
                const features = tier.features || tier.includes || [];

                return (
                  <motion.div
                    key={tier.key}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className={`relative rounded-2xl border p-6 flex flex-col transition-all duration-300 ${
                      isPopular
                        ? 'border-highlight shadow-2xl shadow-highlight/20 bg-gradient-to-br from-soft to-surface md:scale-105'
                        : 'border-white/10 bg-gradient-to-br from-soft to-surface hover:border-highlight/40'
                    }`}
                  >
                    {isPopular && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-highlight to-accent text-white text-xs font-bold">
                        <FaRocket className="w-3 h-3" /> MOST POPULAR
                      </div>
                    )}

                    <h3 className="text-xl font-bold text-white mb-1 capitalize">
                      {tier.name || tier.key}
                    </h3>
                    <p className="text-sm text-gray-400 mb-5">
                      {tier.summary || tier.description || 'Flexible package'}
                    </p>

                    <p className="text-3xl font-black text-highlight mb-1">
                      {label}
                      {suffix && <span className="text-sm text-gray-400 font-medium">{suffix}</span>}
                    </p>

                    <ul className="space-y-3 my-6 flex-grow">
                      {features.length > 0 ? (
                        features.map((item) => (
                          <li key={item} className="flex items-start gap-3">
                            <FaCheck className="w-3.5 h-3.5 text-accent mt-1 flex-shrink-0" />
                            <span className="text-sm text-gray-300">{item}</span>
                          </li>
                        ))
                      ) : (
                        <li className="text-sm text-gray-500">Contact us for full feature list</li>
                      )}
                    </ul>

                    <Link
                      href="/contact"
                      className={`text-center py-3 px-4 rounded-lg font-semibold transition-all ${
                        isPopular
                          ? 'bg-gradient-to-r from-highlight to-accent text-white hover:shadow-lg'
                          : 'bg-white/10 border border-white/20 text-white hover:bg-white/20'
                      }`}
                    >
                      {tier.key === 'custom' ? 'Get Quote' : 'Get Started'}
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            <p className="text-center text-sm text-gray-500 mt-10">
              Need a custom plan?{' '}
              <Link href="/contact" className="text-highlight hover:text-accent font-medium">
                Contact our sales team
              </Link>{' '}
              for volume discounts and enterprise pricing.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-6 bg-gradient-to-r from-highlight/20 to-accent/20">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to get started with {service.name}?
            </h2>
            <p className="text-gray-300 mb-6">
              Our team will help you choose the right tier and timeline.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href={`/pricing/${category.slug}`}
                className="px-8 py-3 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all"
              >
                ← Back to {category.name} Pricing
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
  if (!category) return { notFound: true };

  const service = category.services.find((s) => s.slug === params.service);
  if (!service) return { notFound: true };

  return {
    props: { category, service },
  };
}

export async function getStaticPaths() {
  const paths = [];
  services.categories.forEach((category) => {
    category.services.forEach((service) => {
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
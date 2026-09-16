import Head from 'next/head';
import Link from 'next/link';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import PageHeader from '../../components/PageHeader';

const clusters = [
  {
    id: 'infrastructure',
    name: 'Infrastructure & Built Environment',
    icon: '🏗️',
    description: 'Construction, property, and energy businesses creating physical infrastructure and long-term value.',
    subsidiaries: [
      { slug: 'construction', name: 'Construction & Infrastructure' },
      { slug: 'property', name: 'Property Development' },
      { slug: 'energy', name: 'Energy Solutions' },
    ],
  },
  {
    id: 'professional',
    name: 'Professional & Capital Services',
    icon: '💼',
    description: 'Technology, advisory, media, training, and investment businesses supporting enterprise growth.',
    subsidiaries: [
      { slug: 'tech', name: 'Tech & Consulting' },
      { slug: 'media', name: 'Media & Signage' },
      { slug: 'corporate', name: 'Corporate Services' },
      { slug: 'training', name: 'Training Institute' },
      { slug: 'capital', name: 'Capital & Investments' },
    ],
  },
  {
    id: 'protection',
    name: 'Protection & Operations',
    icon: '🛡️',
    description: 'Security, logistics, facilities, and customer operations that keep organisations protected and moving.',
    subsidiaries: [
      { slug: 'security', name: 'Security Services' },
      { slug: 'logistics', name: 'Logistics & Transport' },
      { slug: 'facility', name: 'Facility Management' },
      { slug: 'carwash', name: 'Carwash & Grill' },
    ],
  },
  {
    id: 'agri',
    name: 'Agri-Consumer & Lifestyle',
    icon: '🌾',
    description: 'Agriculture, food, events, and retail businesses strengthening local supply chains and experiences.',
    subsidiaries: [
      { slug: 'agri', name: 'Agri (Mopani Farms + Poultry)' },
      { slug: 'catering', name: 'Catering & Supplies (Mopani Protein™)' },
      { slug: 'events', name: 'Event Management' },
      { slug: 'retail', name: 'Retail & Distribution' },
    ],
  },
];

export default function SubsidiariesOverview() {
  const totalSubsidiaries = clusters.reduce((sum, cluster) => sum + cluster.subsidiaries.length, 0);

  return (
    <>
      <Head>
        <title>Our Group | Maleng Legacy Tech & Consulting</title>
        <meta
          name="description"
          content="Explore the Maleng Legacy Group structure across four strategic clusters and the subsidiaries within each business unit."
        />
      </Head>

      <div className="min-h-screen bg-primary text-white">
        <Navigation isSubsidiary={true} subsidiaryName="Tech & Consulting" />

        <PageHeader
          badge="OUR GROUP"
          title="Maleng Legacy"
          highlight="Group Network"
          description="A diversified portfolio of business units operating across infrastructure, professional services, protection, and agri-consumer sectors."
          breadcrumb={[{ label: 'Our Group', href: '#' }]}
          bg="subsidiaries"
          cta={{ text: 'Explore Companies', link: '#clusters' }}
          ctaSecondary={{ text: 'Request a Consultation', link: '/contact' }}
        />

        <section id="clusters" className="px-6 py-16 md:py-20">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent mb-3">The 4-Cluster Model</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white">{totalSubsidiaries}+ subsidiaries across four strategic clusters</h2>
            </div>

                <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
              {clusters.map((cluster) => (
                <div key={cluster.id} className="rounded-2xl border border-white/10 bg-gradient-to-br from-soft to-surface p-5 md:p-6">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-highlight/10 text-2xl">{cluster.icon}</div>
                    <h3 className="text-lg font-bold text-white">{cluster.name}</h3>
                  </div>
                  <p className="mb-5 text-sm leading-relaxed text-gray-400">{cluster.description}</p>

                  <ul className="space-y-3">
                    {cluster.subsidiaries.map((sub) => (
                      <li key={sub.slug}>
                        <Link
                          href={`/subsidiaries/${sub.slug}`}
                          className="group flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-gray-200 transition hover:border-highlight/40 hover:bg-highlight/5"
                        >
                          <span>{sub.name}</span>
                          <span className="text-accent transition group-hover:translate-x-1">→</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/subsidiaries/${cluster.id}`}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent transition hover:text-highlight"
                  >
                    Explore cluster <span>→</span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

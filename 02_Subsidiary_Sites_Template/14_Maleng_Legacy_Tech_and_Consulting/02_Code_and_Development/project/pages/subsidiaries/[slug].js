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
    description: 'Construction, property, and energy businesses creating physical and digital infrastructure for long-term growth.',
    subsidiaries: [
      { slug: 'construction', name: 'Construction & Infrastructure', focus: 'Civil works, project delivery, renovations and compliance-driven execution.', website: 'https://construction.malenglegacy.co.za', clients: 'Government, commercial, residential' },
      { slug: 'property', name: 'Property Development', focus: 'Land acquisition, development planning, property management and investment support.', website: 'https://property.malenglegacy.co.za', clients: 'Investors, corporates, government' },
      { slug: 'energy', name: 'Energy Solutions', focus: 'Solar, renewable energy consulting and efficiency-led infrastructure upgrades.', website: 'https://energy.malenglegacy.co.za', clients: 'Industrial, commercial, residential' },
    ],
  },
  {
    id: 'professional',
    name: 'Professional & Capital Services',
    icon: '💼',
    description: 'Professional advisory, technology, media, and capital structures supporting enterprise growth and strategic execution.',
    subsidiaries: [
      { slug: 'tech', name: 'Tech & Consulting', focus: 'Software, IT consulting, cloud, security and digital transformation services.', website: 'https://tech.malenglegacy.co.za', clients: 'SMEs, corporates, government' },
      { slug: 'media', name: 'Media & Signage', focus: 'Branding, media production, printing and signage for business visibility.', website: 'https://media.malenglegacy.co.za', clients: 'All clusters + external clients' },
      { slug: 'corporate', name: 'Corporate Services', focus: 'Registration, governance, compliance and business setup support for founders.', website: 'https://corporate.malenglegacy.co.za', clients: 'Entrepreneurs, startups, investors' },
      { slug: 'training', name: 'Training Institute', focus: 'Skills development, workforce readiness and industry-accredited learning.', website: 'https://training.malenglegacy.co.za', clients: 'Internal + external trainees' },
      { slug: 'capital', name: 'Capital & Investments', focus: 'Strategic investments, portfolio growth and capital-based business expansion.', website: 'https://capital.malenglegacy.co.za', clients: 'Portfolio companies, strategic partners' },
    ],
  },
  {
    id: 'protection',
    name: 'Protection & Operations',
    icon: '🛡️',
    description: 'Security, operations, fleet, maintenance and facility services that keep business environments stable and protected.',
    subsidiaries: [
      { slug: 'security', name: 'Security Services', focus: 'Risk control, armed response, access control and site surveillance.', website: 'https://security.malenglegacy.co.za', clients: 'Corporates, estates, construction sites' },
      { slug: 'logistics', name: 'Logistics & Transport', focus: 'Fleet movement, warehousing and distribution for commercial operations.', website: 'https://logistics.malenglegacy.co.za', clients: 'SMEs, construction, retail, internal' },
      { slug: 'facility', name: 'Facility Management', focus: 'Commercial cleaning, maintenance and operational support services.', website: 'https://facility.malenglegacy.co.za', clients: 'Corporates, government, schools, hospitals' },
      { slug: 'carwash', name: 'Carwash & Grill', focus: 'Customer service, fleet support and hospitality at high-traffic locations.', website: 'https://carwash.malenglegacy.co.za', clients: 'Private, commercial fleets' },
    ],
  },
  {
    id: 'agri',
    name: 'Agri-Consumer & Lifestyle',
    icon: '🌾',
    description: 'Agriculture, events, retail and catering businesses supporting culture, food security and local commerce.',
    subsidiaries: [
      { slug: 'agri', name: 'Agri (Mopani Farms + Poultry)', focus: 'Food production, agriculture operations and sustainable rural value chains.', website: 'https://agri.malenglegacy.co.za', clients: 'Catering (internal), retail, export' },
      { slug: 'catering', name: 'Catering & Supplies (Mopani Protein™)', focus: 'Catering, branded supply chains and equipment-based food services.', website: 'https://catering.malenglegacy.co.za', clients: 'Events, corporates, private, retail' },
      { slug: 'events', name: 'Event Management', focus: 'Weddings, conferences, corporate functions and cultural experiences.', website: 'https://events.malenglegacy.co.za', clients: 'Corporates, private clients' },
      { slug: 'retail', name: 'Retail & Distribution', focus: 'FMCG retail, brand distribution and market access across channels.', website: 'https://retail.malenglegacy.co.za', clients: 'Retailers, wholesalers, consumers' },
    ],
  },
];

const allSubsidiaries = clusters.flatMap((cluster) =>
  cluster.subsidiaries.map((sub) => ({ ...sub, kind: 'company', clusterName: cluster.name, clusterId: cluster.id }))
);

const catalog = Object.fromEntries(allSubsidiaries.map((sub) => [sub.slug, sub]));
const clusterCatalog = Object.fromEntries(
  clusters.map((cluster) => [cluster.id, { ...cluster, kind: 'cluster', clusterName: cluster.name }])
);

export const groupClusters = clusters;
export const subsidiaryCatalog = catalog;

export async function getStaticPaths() {
  return {
    paths: clusters.map((cluster) => ({ params: { slug: cluster.id } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const entry = clusterCatalog[params?.slug] || catalog[params?.slug];

  if (!entry) {
    return { notFound: true };
  }

  return {
    props: {
      entry,
    },
  };
}

export default function SubsidiaryPage({ entry }) {
  const cluster = clusters.find((item) => item.id === entry.clusterId);

  if (entry.kind === 'cluster') {
    return (
      <>
        <Head>
          <title>{entry.name} | Our Group | Maleng Legacy</title>
          <meta name="description" content={entry.description} />
        </Head>

        <div className="min-h-screen bg-primary text-white">
          <Navigation isSubsidiary={true} subsidiaryName="Tech & Consulting" />

          <PageHeader
            badge="OUR GROUP"
            title={entry.name}
            description={entry.description}
            breadcrumb={[{ label: 'Our Group', href: '/subsidiaries' }, { label: entry.name, href: '#' }]}
            bg="subsidiaries"
            cta={{ text: 'View All Group Companies', link: '/subsidiaries' }}
            ctaSecondary={{ text: 'Contact Us', link: '/contact' }}
          />

          <main className="px-6 py-16 md:py-20">
            <div className="mx-auto max-w-6xl">
              <div className="mb-10 max-w-3xl">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent mb-4">Cluster Companies</p>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Businesses within this cluster</h2>
                <p className="text-lg leading-relaxed text-gray-300">Explore each operating company and visit its dedicated website for detailed services, capabilities, and contact information.</p>
              </div>

              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {entry.subsidiaries.map((sub) => (
                  <article key={sub.slug} className="rounded-2xl border border-white/10 bg-gradient-to-br from-soft to-surface p-6 transition hover:border-highlight/40">
                    <h3 className="text-xl font-bold text-white">{sub.name}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-gray-300">{sub.focus}</p>
                    <p className="mt-4 text-xs uppercase tracking-[0.16em] text-gray-500">Serving {sub.clients}</p>
                    <div className="mt-6 flex flex-wrap gap-3">
                      <Link href={`/subsidiaries/${entry.id}/${sub.slug}`} className="inline-flex items-center rounded-lg bg-gradient-to-r from-highlight to-accent px-4 py-2 text-sm font-semibold text-white transition hover:shadow-lg">
                        Company profile
                      </Link>
                      <a href={sub.website} target="_blank" rel="noreferrer" className="inline-flex items-center rounded-lg border border-white/15 px-4 py-2 text-sm font-semibold text-white transition hover:border-highlight/40 hover:bg-white/5">
                        Visit website
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </main>

          <Footer />
        </div>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>{entry.name} | Maleng Legacy Tech & Consulting</title>
        <meta
          name="description"
          content={`${entry.name} is part of the ${entry.clusterName} cluster within the Maleng Legacy Group.`}
        />
      </Head>

      <div className="min-h-screen bg-primary text-white">
        <Navigation isSubsidiary={true} subsidiaryName="Tech & Consulting" />

        <PageHeader
          badge={entry.clusterName.toUpperCase()}
          title={entry.name}
          description={entry.focus}
          breadcrumb={[
            { label: 'Our Group', href: '/subsidiaries' },
            { label: entry.clusterName, href: `/subsidiaries/${entry.clusterId}` },
            { label: entry.name, href: '#' },
          ]}
          bg="about"
          cta={{ text: 'Visit Website', link: entry.website }}
          ctaSecondary={{ text: 'Back to Group', link: '/subsidiaries' }}
        />

        <main className="px-6 py-16 md:py-20">
          <div className="mx-auto max-w-6xl grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-soft to-surface p-6 md:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent mb-4">Company Overview</p>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Operating within the {entry.clusterName}</h2>
              <p className="text-base leading-relaxed text-gray-300">
                {entry.name} supports the wider Maleng Legacy ecosystem by delivering specialized services, operational capacity,
                and business execution across its market segment. This unit is positioned to serve both internal group needs and external clients.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-gray-400">Primary Focus</p>
                  <p className="mt-2 text-lg font-semibold text-white">{entry.focus}</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-gray-400">Client Profile</p>
                  <p className="mt-2 text-lg font-semibold text-white">{entry.clients}</p>
                </div>
              </div>
            </div>

            <aside className="rounded-2xl border border-white/10 bg-gradient-to-br from-highlight/10 to-accent/10 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent mb-4">Quick View</p>
              <div className="space-y-4 text-sm text-gray-200">
                <div>
                  <p className="text-gray-400">Cluster</p>
                  <p className="font-semibold text-white">{entry.clusterName}</p>
                </div>
                <div>
                  <p className="text-gray-400">Business Type</p>
                  <p className="font-semibold text-white">Specialized operating subsidiary</p>
                </div>
                <div>
                  <p className="text-gray-400">Website</p>
                  <a href={entry.website} target="_blank" rel="noreferrer" className="font-semibold text-highlight hover:text-accent transition">
                    {entry.website}
                  </a>
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-3">
                <a
                  href={entry.website}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-highlight to-accent px-5 py-3 font-semibold text-white transition hover:shadow-lg"
                >
                  Visit Website
                </a>
                <Link href={`/subsidiaries/${entry.clusterId}`} className="inline-flex items-center justify-center rounded-lg border border-white/15 px-5 py-3 font-semibold text-white transition hover:border-highlight/40 hover:bg-white/5">
                  Back to Cluster
                </Link>
              </div>
            </aside>
          </div>

          <section className="mx-auto mt-10 max-w-6xl">
            <div className="rounded-2xl border border-white/10 bg-soft p-6 md:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent mb-4">Cluster Overview</p>
              <h3 className="text-2xl font-bold text-white mb-4">{cluster.name}</h3>
              <p className="max-w-3xl text-gray-300 leading-relaxed">{cluster.description}</p>

              <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {cluster.subsidiaries.map((sub) => (
                  <Link
                    key={sub.slug}
                    href={`/subsidiaries/${entry.clusterId}/${sub.slug}`}
                    className={`rounded-xl border p-4 transition ${sub.slug === entry.slug ? 'border-highlight/60 bg-highlight/5' : 'border-white/10 bg-white/5 hover:border-highlight/40 hover:bg-highlight/5'}`}
                  >
                    <p className="text-sm font-semibold text-white">{sub.name}</p>
                    <p className="mt-2 text-sm text-gray-400">{sub.focus}</p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}

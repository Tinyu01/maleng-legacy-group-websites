import Head from 'next/head';
import Link from 'next/link';
import Navigation from '../../../components/Navigation';
import Footer from '../../../components/Footer';
import PageHeader from '../../../components/PageHeader';
import { groupClusters, subsidiaryCatalog } from '../[slug]';

const companyEntries = Object.values(subsidiaryCatalog);

export async function getStaticPaths() {
  return {
    paths: companyEntries.map((entry) => ({
      params: { slug: entry.clusterId, company: entry.slug },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const entry = subsidiaryCatalog[params?.company];
  if (!entry || entry.clusterId !== params?.slug) {
    return { notFound: true };
  }

  return { props: { entry } };
}

export default function SubsidiaryCompanyPage({ entry }) {
  const cluster = groupClusters.find((item) => item.id === entry.clusterId);

  return (
    <>
      <Head>
        <title>{entry.name} | {entry.clusterName} | Maleng Legacy</title>
        <meta name="description" content={`${entry.name} is part of the ${entry.clusterName} cluster within the Maleng Legacy Group.`} />
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
          bg="subsidiaries"
          cta={{ text: 'Visit Website', link: entry.website }}
          ctaSecondary={{ text: 'Back to Cluster', link: `/subsidiaries/${entry.clusterId}` }}
        />

        <main className="px-6 py-16 md:py-20">
          <div className="mx-auto max-w-6xl grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-soft to-surface p-6 md:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent mb-4">Company Overview</p>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Operating within the {entry.clusterName}</h2>
              <p className="text-base leading-relaxed text-gray-300">
                {entry.name} supports the wider Maleng Legacy ecosystem by delivering specialized services, operational capacity,
                and business execution across its market segment. This unit serves both internal group needs and external clients.
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
                <div><p className="text-gray-400">Cluster</p><p className="font-semibold text-white">{entry.clusterName}</p></div>
                <div><p className="text-gray-400">Business Type</p><p className="font-semibold text-white">Specialized operating subsidiary</p></div>
                <div><p className="text-gray-400">Website</p><a href={entry.website} target="_blank" rel="noreferrer" className="font-semibold text-highlight hover:text-accent transition">{entry.website}</a></div>
              </div>
              <div className="mt-6 flex flex-col gap-3">
                <a href={entry.website} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-highlight to-accent px-5 py-3 font-semibold text-white transition hover:shadow-lg">Visit Website</a>
                <Link href={`/subsidiaries/${entry.clusterId}`} className="inline-flex items-center justify-center rounded-lg border border-white/15 px-5 py-3 font-semibold text-white transition hover:border-highlight/40 hover:bg-white/5">Back to Cluster</Link>
              </div>
            </aside>
          </div>

          <section className="mx-auto mt-10 max-w-6xl">
            <div className="rounded-2xl border border-white/10 bg-soft p-6 md:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent mb-4">Cluster Companies</p>
              <h3 className="text-2xl font-bold text-white mb-4">More from {cluster.name}</h3>
              <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {cluster.subsidiaries.map((sub) => (
                  <Link key={sub.slug} href={`/subsidiaries/${entry.clusterId}/${sub.slug}`} className={`rounded-xl border p-4 transition ${sub.slug === entry.slug ? 'border-highlight/60 bg-highlight/5' : 'border-white/10 bg-white/5 hover:border-highlight/40 hover:bg-highlight/5'}`}>
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
import Head from 'next/head';
import Link from 'next/link';
import Navigation from '../../../components/Navigation';
import Footer from '../../../components/Footer';
import PageHeader from '../../../components/PageHeader';
import portfolioData from '../../../data/portfolio.json';
import services from '../../../data/services.json';
import { getPortfolioCategorySlug } from '../../../data/portfolioServiceCategories';

const serviceCategories = Object.fromEntries((services.categories || []).map((category) => [category.slug, category]));

export async function getStaticPaths() {
  return {
    paths: (services.categories || []).map((category) => ({ params: { slug: category.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const category = serviceCategories[params?.slug];
  if (!category) return { notFound: true };

  const projects = (portfolioData.projects || []).filter((project) => getPortfolioCategorySlug(project) === category.slug);
  return { props: { category, projects } };
}

export default function PortfolioCategoryPage({ category, projects }) {
  return (
    <>
      <Head>
        <title>{category.name} Portfolio | Maleng Legacy Tech & Consulting</title>
        <meta name="description" content={`Selected portfolio work related to ${category.name}.`} />
      </Head>

      <div className="min-h-screen bg-primary text-white">
        <Navigation isSubsidiary={true} subsidiaryName="Tech & Consulting" />

        <PageHeader
          badge="PORTFOLIO BY SERVICE"
          icon={category.icon}
          title={category.name}
          highlight="Portfolio"
          description="Explore selected work delivered through this service category. Each project shows the practical outcomes, technology choices, and delivery context behind our engagements."
          breadcrumb={[{ label: 'Portfolio', href: '/portfolio' }, { label: category.name, href: '#' }]}
          bg="portfolio"
          cta={{ text: 'View All Portfolio', link: '/portfolio' }}
          ctaSecondary={{ text: 'Discuss a Project', link: '/contact' }}
        />

        <main className="px-6 py-16 md:py-20">
          <div className="mx-auto max-w-6xl">
            <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">Showcase</p>
                <h2 className="mt-2 text-3xl font-bold text-white">Selected projects</h2>
              </div>
              <Link href="/portfolio" className="text-sm font-semibold text-accent hover:text-highlight">View all portfolio <span>→</span></Link>
            </div>

            {projects.length > 0 ? (
              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {projects.map((project) => (
                  <Link key={project.id} href={`/portfolio/${category.slug}/${project.slug}`} className="group rounded-2xl border border-white/10 bg-gradient-to-br from-soft to-surface p-6 transition hover:border-highlight/50">
                    <div className="mb-5 flex items-center justify-between">
                      <span className="text-3xl">{category.icon}</span>
                      <span className="text-xs text-gray-500">{project.year}</span>
                    </div>
                    <p className="text-xs uppercase tracking-[0.16em] text-accent">{project.industry}</p>
                    <h3 className="mt-2 text-xl font-bold text-white transition group-hover:text-highlight">{project.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-gray-400">{project.shortDescription}</p>
                    <span className="mt-6 inline-flex text-sm font-semibold text-accent">View showcase <span className="ml-2">→</span></span>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-gray-300">
                Portfolio examples for this service category are being added. Contact our team to discuss a relevant case study.
                <Link href="/contact" className="ml-2 font-semibold text-accent hover:text-highlight">Talk to us →</Link>
              </div>
            )}
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}

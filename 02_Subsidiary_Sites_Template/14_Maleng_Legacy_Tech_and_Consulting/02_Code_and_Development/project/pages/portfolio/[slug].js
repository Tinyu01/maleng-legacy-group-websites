import Head from 'next/head';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import Breadcrumb from '../../components/Breadcrumb';
import portfolioData from '../../data/portfolio.json';
import { FaCheck, FaArrowLeft } from 'react-icons/fa';

export default function PortfolioDetail({ project, category }) {
  if (!project) {
    return (
      <>
        <Head><title>Project Not Found</title></Head>
        <Navigation isSubsidiary={true} subsidiaryName="Tech & Consulting" />
        <div className="min-h-screen bg-primary flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Project Not Found</h1>
            <Link href="/portfolio" className="text-highlight hover:text-accent transition">
              ← Back to Portfolio
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Head>
        <title>{project.title} | Portfolio | Maleng Legacy Tech & Consulting</title>
        <meta name="description" content={project.shortDescription} />
      </Head>

      <div className="min-h-screen bg-primary text-white">
        <Navigation isSubsidiary={true} subsidiaryName="Tech & Consulting" />

        {/* Hero */}
        <section className="pt-8 pb-12 md:pt-12 md:pb-16 px-6">
          <div className="mx-auto max-w-6xl">
            <Breadcrumb
              items={[
                { label: 'Portfolio', href: '/portfolio' },
                { label: project.title, href: '#' },
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
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="text-[10px] text-accent bg-accent/10 rounded px-2 py-1 font-semibold uppercase tracking-wider">
                      {project.industry}
                    </span>
                    <span className="text-[11px] text-gray-500">{project.year}</span>
                    {project.location && (
                      <span className="text-[11px] text-gray-500">• {project.location}</span>
                    )}
                  </div>

                  <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    {project.title}
                  </h1>
                  <p className="text-sm text-gray-400 mb-4">Client: {project.client}</p>
                  <p className="text-gray-300 text-sm max-w-2xl leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <Link
                  href="/contact"
                  className="px-6 py-3 bg-gradient-to-r from-highlight to-accent text-white font-semibold rounded-lg hover:shadow-lg transition-all text-sm text-center whitespace-nowrap"
                >
                  Discuss a Similar Project
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Results + Tech */}
        <section className="pb-16 md:pb-20 px-6">
          <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-8">
            {/* Results */}
            <div className="bg-gradient-to-br from-soft to-surface border border-white/10 rounded-2xl p-7">
              <h2 className="text-lg font-bold text-white mb-5">Key Results</h2>
              <ul className="space-y-3">
                {project.results?.map((result, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <FaCheck className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-300">{result}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div className="bg-gradient-to-br from-soft to-surface border border-white/10 rounded-2xl p-7">
              <h2 className="text-lg font-bold text-white mb-5">Technologies Used</h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies?.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-sm text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {category && (
                <div className="mt-6 pt-5 border-t border-white/10">
                  <p className="text-xs text-gray-500 mb-1">Category</p>
                  <p className="text-sm text-white font-medium">
                    {category.icon} {category.name}
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-6 bg-gradient-to-r from-highlight/20 to-accent/20">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Want results like these?
            </h2>
            <p className="text-gray-300 mb-6">
              Let’s talk about your next website, platform or system.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 px-8 py-3 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all"
              >
                <FaArrowLeft className="w-3.5 h-3.5" />
                Back to Portfolio
              </Link>
              <Link
                href="/contact"
                className="px-8 py-3 bg-gradient-to-r from-highlight to-accent text-white font-bold rounded-lg hover:shadow-lg transition-all"
              >
                Start a Conversation
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
  const project = (portfolioData.projects || []).find((p) => p.slug === params.slug);
  if (!project) return { notFound: true };

  const category = (portfolioData.categories || []).find((c) => c.id === project.category) || null;

  return {
    props: { project, category },
  };
}

export async function getStaticPaths() {
  const paths = (portfolioData.projects || []).map((project) => ({
    params: { slug: project.slug },
  }));
  return { paths, fallback: false };
}
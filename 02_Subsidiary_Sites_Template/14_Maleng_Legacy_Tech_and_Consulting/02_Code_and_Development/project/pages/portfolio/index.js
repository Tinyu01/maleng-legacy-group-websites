import Head from 'next/head';
import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import PageHeader from '../../components/PageHeader';
import portfolioData from '../../data/portfolio.json';
import { FaArrowRight } from 'react-icons/fa';

export default function PortfolioHub() {
  const [activeCategory, setActiveCategory] = useState('all');
  const categories = portfolioData.categories || [];
  const projects = portfolioData.projects || [];

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'all') return projects;
    return projects.filter((p) => p.category === activeCategory);
  }, [activeCategory, projects]);

  return (
    <>
      <Head>
        <title>Portfolio | Maleng Legacy Tech & Consulting</title>
        <meta
          name="description"
          content="Explore our portfolio of websites, platforms, business systems and infrastructure projects delivered for clients across South Africa."
        />
      </Head>

      <div className="min-h-screen bg-primary text-white">
        <Navigation isSubsidiary={true} subsidiaryName="Tech & Consulting" />

        <PageHeader
          badge="OUR WORK"
          title="Selected"
          highlight="Projects"
          description="A showcase of websites, platforms and systems we have designed and delivered for clients across retail, healthcare, finance and manufacturing."
          breadcrumb={[{ label: 'Portfolio', href: '#' }]}
          bg="portfolio"
          cta={{ text: 'Browse Projects', link: '#projects' }}
          ctaSecondary={{ text: 'Discuss a Project', link: '/contact' }}
        />

        {/* Filter */}
        <section className="pt-10 pb-6 px-6">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={() => setActiveCategory('all')}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                  activeCategory === 'all'
                    ? 'bg-gradient-to-r from-highlight to-accent text-white'
                    : 'bg-white/5 border border-white/10 text-gray-300 hover:border-highlight/40'
                }`}
              >
                All Projects
              </button>
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                    activeCategory === cat.id
                      ? 'bg-gradient-to-r from-highlight to-accent text-white'
                      : 'bg-white/5 border border-white/10 text-gray-300 hover:border-highlight/40'
                  }`}
                >
                  {cat.icon} {cat.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Project Grid */}
        <section id="projects" className="pb-16 md:pb-20 px-6">
          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08, duration: 0.45 }}
                  viewport={{ once: true }}
                >
                  <Link
                    href={`/portfolio/${project.slug}`}
                    className="group block h-full bg-gradient-to-br from-soft to-surface border border-white/10 rounded-2xl overflow-hidden hover:border-highlight/50 transition-all duration-300 hover:shadow-xl hover:shadow-highlight/10"
                  >
                    {/* Image placeholder */}
                    <div className="h-44 bg-gradient-to-br from-highlight/10 to-accent/10 flex items-center justify-center border-b border-white/5">
                      <span className="text-4xl opacity-60">
                        {categories.find((c) => c.id === project.category)?.icon || '📁'}
                      </span>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[10px] text-accent bg-accent/10 rounded px-2 py-1 font-semibold uppercase tracking-wider">
                          {project.industry}
                        </span>
                        <span className="text-[11px] text-gray-500">{project.year}</span>
                      </div>

                      <h3 className="text-lg font-bold text-white mb-1 group-hover:text-highlight transition-colors leading-snug">
                        {project.title}
                      </h3>
                      <p className="text-xs text-gray-500 mb-3">{project.client}</p>

                      <p className="text-sm text-gray-400 mb-5 line-clamp-2 leading-relaxed">
                        {project.shortDescription}
                      </p>

                      <div className="flex items-center gap-2 text-highlight font-semibold text-sm pt-4 border-t border-white/5">
                        <span>View Project</span>
                        <FaArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            {filteredProjects.length === 0 && (
              <p className="text-center text-gray-500 py-16">No projects found in this category.</p>
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-6 bg-gradient-to-r from-highlight/20 to-accent/20">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Have a project in mind?</h2>
            <p className="text-gray-300 mb-6">
              We would love to discuss how we can help you deliver something exceptional.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-3 bg-gradient-to-r from-highlight to-accent text-white font-bold rounded-lg hover:shadow-lg transition-all"
            >
              Start a Conversation
            </Link>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
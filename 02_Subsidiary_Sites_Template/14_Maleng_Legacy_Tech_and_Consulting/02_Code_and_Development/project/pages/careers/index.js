import { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import { FaDownload, FaFilePdf, FaFileAlt, FaChartLine, FaSearch } from 'react-icons/fa';

const resources = [
  {
    id: 1,
    title: '2026 Enterprise Cybersecurity Trends Report',
    type: 'Whitepaper',
    format: 'PDF',
    pages: 24,
    size: '2.4 MB',
    description: 'Comprehensive analysis of emerging threats and defense strategies for enterprise security leaders.',
    category: 'Cybersecurity',
    downloadUrl: '/resources/cybersecurity-trends-2026.pdf',
  },
  {
    id: 2,
    title: 'Digital Transformation ROI Calculator',
    type: 'Tool',
    format: 'Excel',
    size: '1.1 MB',
    description: 'Calculate the potential ROI of your digital transformation initiatives.',
    category: 'Digital Transformation',
    downloadUrl: '/resources/dx-roi-calculator.xlsx',
  },
  {
    id: 3,
    title: 'Cloud Migration Checklist',
    type: 'Checklist',
    format: 'PDF',
    pages: 12,
    size: '0.8 MB',
    description: 'Step-by-step guide for migrating enterprise workloads to the cloud.',
    category: 'Cloud',
    downloadUrl: '/resources/cloud-migration-checklist.pdf',
  },
  {
    id: 4,
    title: 'HIPAA Compliance Guide for SaaS',
    type: 'Guide',
    format: 'PDF',
    pages: 32,
    size: '3.1 MB',
    description: 'Complete guide to building HIPAA-compliant SaaS applications.',
    category: 'Compliance',
    downloadUrl: '/resources/hipaa-saas-guide.pdf',
  },
  {
    id: 5,
    title: 'UX Research Methods Guide',
    type: 'Guide',
    format: 'PDF',
    pages: 18,
    size: '1.5 MB',
    description: 'Framework for conducting effective user research.',
    category: 'Design',
    downloadUrl: '/resources/ux-research-guide.pdf',
  },
  {
    id: 6,
    title: 'Enterprise Tech Stack Comparison 2026',
    type: 'Report',
    format: 'PDF',
    pages: 45,
    size: '4.2 MB',
    description: 'Compare leading enterprise technology solutions.',
    category: 'Technology',
    downloadUrl: '/resources/tech-stack-comparison.pdf',
  },
];

const categories = ['All', 'Cybersecurity', 'Digital Transformation', 'Cloud', 'Compliance', 'Design', 'Technology'];

export default function ResourcesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredResources = resources.filter(res => {
    const matchesCategory = selectedCategory === 'All' || res.category === selectedCategory;
    const matchesSearch = res.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         res.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Head>
        <title>Resources & Whitepapers | Maleng Legacy Tech & Consulting</title>
        <meta name="description" content="Free enterprise technology resources, whitepapers, guides, and ROI calculators." />
      </Head>

      <div className="min-h-screen bg-primary text-white">
        <Navigation isSubsidiary={true} subsidiaryName="Tech & Consulting" />

        {/* Hero */}
        <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 px-6 overflow-hidden">
          <div className="mx-auto max-w-6xl text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-block px-4 py-2 bg-accent/10 border border-accent/30 rounded-full mb-6">
                <span className="text-accent font-bold text-sm">FREE RESOURCES</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Enterprise Tech{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-highlight to-accent">Resource Library</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Whitepapers, guides, checklists, and tools to help you make informed technology decisions.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search & Filter */}
        <section className="py-8 px-6 bg-soft">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-col md:flex-row gap-6 justify-between items-center">
              <div className="relative w-full md:w-96">
                <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search resources..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-highlight"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                      selectedCategory === cat ? 'bg-highlight text-white' : 'bg-white/10 text-gray-400 hover:bg-white/20'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Resources Grid */}
        <section className="py-16 px-6">
          <div className="mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredResources.map((resource, index) => (
                <motion.div
                  key={resource.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="h-full bg-gradient-to-br from-soft to-surface border border-white/10 rounded-xl p-6 hover:border-highlight/30 transition-all">
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-3xl">{resource.type === 'Whitepaper' ? '📄' : resource.type === 'Tool' ? '📊' : '📋'}</div>
                      <div className="flex gap-1">
                        <span className="text-xs px-2 py-1 rounded-full bg-white/10">{resource.format}</span>
                        {resource.pages && <span className="text-xs px-2 py-1 rounded-full bg-white/10">{resource.pages} pages</span>}
                      </div>
                    </div>
                    <h3 className="text-lg font-bold mb-2 group-hover:text-highlight transition-colors">{resource.title}</h3>
                    <p className="text-gray-400 text-sm mb-4">{resource.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">{resource.size}</span>
                      <button className="flex items-center gap-2 px-4 py-2 bg-highlight/20 text-highlight rounded-lg text-sm font-semibold hover:bg-highlight/30 transition">
                        <FaDownload className="w-3 h-3" /> Download
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Lead Capture for Premium Resources */}
        <section className="py-16 px-6 bg-gradient-to-r from-b2b-primary via-b2b-secondary to-b2b-primary">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Get Exclusive Enterprise Resources</h2>
            <p className="text-white/80 mb-6">Subscribe to access premium whitepapers, case studies, and research reports.</p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input type="email" placeholder="Work email" className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50" />
              <button className="px-6 py-3 bg-white text-b2b-primary font-semibold rounded-lg hover:shadow-xl transition">Subscribe</button>
            </form>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
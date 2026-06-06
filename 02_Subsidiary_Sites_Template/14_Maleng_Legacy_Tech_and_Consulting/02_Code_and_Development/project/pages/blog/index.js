import { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import PageHeader from '../../components/PageHeader';
import { FaSearch, FaCalendar, FaUser, FaArrowRight } from 'react-icons/fa';

// Sample blog data - replace with your CMS
const blogPosts = [
  {
    id: 1,
    slug: 'cybersecurity-trends-2026',
    title: 'Top 10 Cybersecurity Trends for Enterprise in 2026',
    excerpt: 'From AI-powered threats to zero-trust architecture, here\'s what enterprise security leaders need to know.',
    author: 'Thabo Maleng',
    date: 'June 1, 2026',
    readTime: '8 min read',
    category: 'Cybersecurity',
    image: '🔒',
    featured: true,
  },
  {
    id: 2,
    slug: 'digital-transformation-roadmap',
    title: 'The 2026 Enterprise Digital Transformation Roadmap',
    excerpt: 'A step-by-step guide to modernizing your legacy systems while maintaining business continuity.',
    author: 'Dr. Nomvula Dlamini',
    date: 'May 25, 2026',
    readTime: '12 min read',
    category: 'Digital Transformation',
    image: '🚀',
    featured: true,
  },
  {
    id: 3,
    slug: 'cloud-cost-optimization',
    title: 'How to Reduce Cloud Costs by 40% Without Sacrificing Performance',
    excerpt: 'Practical strategies for optimizing your AWS, Azure, or Google Cloud spending.',
    author: 'James Peterson',
    date: 'May 18, 2026',
    readTime: '6 min read',
    category: 'Cloud',
    image: '☁️',
    featured: false,
  },
  {
    id: 4,
    slug: 'ux-design-roi',
    title: 'The ROI of UX Design: Why Enterprise Companies Are Investing in Design',
    excerpt: 'How good design drives revenue, reduces costs, and improves customer retention.',
    author: 'Sarah Chen',
    date: 'May 10, 2026',
    readTime: '7 min read',
    category: 'Design',
    image: '🎨',
    featured: false,
  },
  {
    id: 5,
    slug: 'hipaa-compliance-guide',
    title: 'Complete HIPAA Compliance Guide for Healthcare Technology',
    excerpt: 'Everything you need to know about building HIPAA-compliant applications.',
    author: 'Michael Rodriguez',
    date: 'May 5, 2026',
    readTime: '15 min read',
    category: 'Compliance',
    image: '🏥',
    featured: true,
  },
  {
    id: 6,
    slug: 'ai-in-software-development',
    title: 'How AI is Transforming Software Development in 2026',
    excerpt: 'From code generation to testing automation, AI is changing how we build software.',
    author: 'Dr. Nomvula Dlamini',
    date: 'April 28, 2026',
    readTime: '10 min read',
    category: 'AI/ML',
    image: '🤖',
    featured: false,
  },
];

const categories = ['All', 'Cybersecurity', 'Digital Transformation', 'Cloud', 'Design', 'Compliance', 'AI/ML'];

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <>
      <Head>
        <title>Insights & Blog | Maleng Legacy Tech & Consulting</title>
        <meta name="description" content="Expert insights on cybersecurity, digital transformation, cloud computing, and enterprise technology trends." />
      </Head>

      <div className="min-h-screen bg-primary text-white">
        <Navigation isSubsidiary={true} subsidiaryName="Tech & Consulting" />

        {/* Page Header with Image Background */}
        <PageHeader
          badge="INSIGHTS & EXPERTISE"
          title="Tech Insights for"
          highlight="Enterprise Leaders"
          description="Expert insights on cybersecurity, digital transformation, cloud computing, and enterprise technology trends."
          breadcrumb={[{ label: 'Blog', href: '#' }]}
          bg="blog"
        />

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <section className="py-12 px-6">
            <div className="mx-auto max-w-6xl">
              <h2 className="text-2xl font-bold mb-8">Featured Insights</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {featuredPosts.map((post, index) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <Link href={`/blog/${post.slug}`} className="block h-full">
                      <div className="h-full bg-gradient-to-br from-soft to-surface border border-white/10 rounded-2xl overflow-hidden hover:border-highlight/50 transition-all duration-300 hover:shadow-2xl hover:shadow-highlight/20">
                        <div className="p-8">
                          <div className="text-5xl mb-4">{post.image}</div>
                          <div className="flex items-center gap-3 text-sm text-gray-400 mb-3">
                            <span className="flex items-center gap-1"><FaCalendar className="w-3 h-3" /> {post.date}</span>
                            <span className="flex items-center gap-1"><FaUser className="w-3 h-3" /> {post.author}</span>
                            <span className="px-2 py-1 rounded-full bg-highlight/20 text-highlight text-xs">{post.category}</span>
                          </div>
                          <h3 className="text-xl font-bold mb-3 group-hover:text-highlight transition-colors">
                            {post.title}
                          </h3>
                          <p className="text-gray-400 mb-4 line-clamp-2">{post.excerpt}</p>
                          <div className="flex items-center gap-2 text-highlight font-semibold">
                            Read More <FaArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Search & Filter */}
        <section className="py-8 px-6 bg-soft">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-col md:flex-row gap-6 justify-between items-center">
              <div className="relative w-full md:w-96">
                <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-highlight transition text-white"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                      selectedCategory === cat
                        ? 'bg-highlight text-white'
                        : 'bg-white/10 text-gray-400 hover:bg-white/20'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="py-16 px-6">
          <div className="mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <Link href={`/blog/${post.slug}`} className="block h-full">
                    <div className="h-full bg-gradient-to-br from-soft to-surface border border-white/10 rounded-xl p-6 hover:border-highlight/30 transition-all">
                      <div className="text-3xl mb-3">{post.image}</div>
                      <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                        <span>{post.date}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>
                      <h3 className="text-lg font-bold mb-2 group-hover:text-highlight transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-400 text-sm line-clamp-2">{post.excerpt}</p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-16 px-6 bg-gradient-to-r from-highlight/20 to-accent/20">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-gray-300 mb-6">Get the latest tech insights delivered straight to your inbox.</p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-highlight"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-highlight to-accent text-white font-semibold rounded-lg hover:shadow-lg transition">
                Subscribe
              </button>
            </form>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
import Head from 'next/head';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import PageHeader from '../../components/PageHeader';
import { FaArrowLeft, FaCalendar, FaUser, FaTag, FaTwitter, FaLinkedin, FaFacebook } from 'react-icons/fa';

// Sample blog posts data - replace with your CMS
const blogPosts = {
  'cybersecurity-trends-2026': {
    title: 'Top 10 Cybersecurity Trends for Enterprise in 2026',
    excerpt: 'From AI-powered threats to zero-trust architecture, here\'s what enterprise security leaders need to know.',
    content: `
      <p>As we move through 2026, the cybersecurity landscape continues to evolve at an unprecedented pace. Enterprise security leaders face new challenges from AI-powered threats, regulatory changes, and expanding attack surfaces.</p>
      
      <h2>1. AI-Powered Security Operations</h2>
      <p>Artificial intelligence is no longer optional for security teams. AI-driven SOCs can detect and respond to threats in real-time, reducing mean time to detection (MTTD) from days to minutes.</p>
      
      <h2>2. Zero Trust Architecture Maturity</h2>
      <p>Zero trust has moved from buzzword to necessity. Enterprises are implementing micro-segmentation, continuous verification, and least-privilege access across all systems.</p>
      
      <h3>Conclusion</h3>
      <p>Staying ahead of these trends requires investment in people, processes, and technology. Contact our security team to discuss how we can help strengthen your security posture.</p>
    `,
    author: 'Thabo Maleng',
    authorRole: 'CEO & Founder',
    authorBio: '15+ years in enterprise security and infrastructure.',
    date: 'June 1, 2026',
    readTime: '8 min read',
    category: 'Cybersecurity',
    image: '🔒',
    tags: ['Cybersecurity', 'AI', 'Zero Trust'],
  },
};

export default function BlogPost() {
  const router = useRouter();
  const { slug } = router.query;
  const post = blogPosts[slug];

  if (!post) {
    return (
      <div className="min-h-screen bg-primary text-white">
        <Navigation isSubsidiary={true} subsidiaryName="Tech & Consulting" />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
            <Link href="/blog" className="text-highlight hover:text-accent">← Back to Blog</Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{post.title} | Maleng Legacy Tech & Consulting</title>
        <meta name="description" content={post.excerpt} />
      </Head>

      <div className="min-h-screen bg-primary text-white">
        <Navigation isSubsidiary={true} subsidiaryName="Tech & Consulting" />

        {/* Page Header for Blog Detail */}
        <PageHeader
          badge={post.category}
          title={post.title}
          highlight=""
          description={`By ${post.author} • ${post.date} • ${post.readTime}`}
          breadcrumb={[
            { label: 'Blog', href: '/blog' },
            { label: post.title.substring(0, 40) + '...', href: '#' }
          ]}
          bg="blog"
        />

        <article className="py-12 px-6">
          <div className="mx-auto max-w-3xl">
            {/* Content */}
            <div 
              className="prose prose-invert prose-lg max-w-none
                prose-headings:text-white prose-headings:font-bold
                prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl
                prose-p:text-gray-300 prose-p:leading-relaxed
                prose-a:text-highlight prose-a:no-underline hover:prose-a:underline
                prose-strong:text-white prose-code:text-highlight
                prose-li:text-gray-300"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Author Bio */}
            <div className="mt-12 p-6 rounded-xl bg-gradient-to-br from-soft to-surface border border-white/10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-highlight to-accent flex items-center justify-center text-xl">
                  👤
                </div>
                <div>
                  <h3 className="font-bold text-white">{post.author}</h3>
                  <p className="text-sm text-highlight mb-2">{post.authorRole}</p>
                  <p className="text-sm text-gray-400">{post.authorBio}</p>
                </div>
              </div>
            </div>

            {/* Share */}
            <div className="mt-8 pt-8 border-t border-white/10">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <FaTag className="text-gray-400" />
                  {post.tags.map(tag => (
                    <span key={tag} className="text-sm px-2 py-1 rounded-full bg-white/5">#{tag}</span>
                  ))}
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-gray-400">Share:</span>
                  <button className="p-2 rounded-full bg-white/10 hover:bg-[#1DA1F2]/20 transition">
                    <FaTwitter className="w-4 h-4" />
                  </button>
                  <button className="p-2 rounded-full bg-white/10 hover:bg-[#0A66C2]/20 transition">
                    <FaLinkedin className="w-4 h-4" />
                  </button>
                  <button className="p-2 rounded-full bg-white/10 hover:bg-[#1877F2]/20 transition">
                    <FaFacebook className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* CTA */}
        <section className="py-16 px-6 bg-gradient-to-r from-highlight/20 to-accent/20">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Need Expert Guidance?</h2>
            <p className="text-gray-300 mb-6">Our experts are ready to help you implement these strategies.</p>
            <Link href="/contact" className="inline-block px-8 py-3 bg-gradient-to-r from-highlight to-accent text-white font-bold rounded-lg hover:shadow-lg transition">
              Schedule a Consultation
            </Link>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
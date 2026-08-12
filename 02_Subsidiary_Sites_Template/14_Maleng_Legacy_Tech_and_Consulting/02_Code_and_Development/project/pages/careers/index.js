import { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import PageHeader from '../../components/PageHeader';
import { FaMapMarkerAlt, FaBriefcase, FaUsers, FaGraduationCap, FaArrowRight } from 'react-icons/fa';

const careersMetaTags = {
  title: 'Tech Careers in Johannesburg | Join Maleng Legacy Tech & Consulting',
  description: 'Join our team of 500+ enterprise clients. Explore career opportunities in software development, cloud infrastructure, cybersecurity, and digital transformation in Johannesburg, South Africa.',
  keywords: 'tech jobs, careers, software developer jobs, Johannesburg careers, tech consulting jobs, cloud architect jobs, cybersecurity jobs, enterprise tech roles'
};

const jobOpenings = [
  {
    title: 'Senior Software Developer',
    level: 'Mid to Senior',
    location: 'Johannesburg',
    type: 'Full-time',
    description: 'Build scalable enterprise applications using Python, Node.js, and cloud technologies.'
  },
  {
    title: 'Cloud Infrastructure Architect',
    level: 'Senior',
    location: 'Johannesburg',
    type: 'Full-time',
    description: 'Design and implement cloud solutions on Azure and AWS for enterprise clients.'
  },
  {
    title: 'Cybersecurity Consultant',
    level: 'Mid to Senior',
    location: 'Johannesburg',
    type: 'Full-time',
    description: 'Provide security assessments, vulnerability management, and compliance solutions.'
  },
  {
    title: 'Graduate Developer Program',
    level: 'Graduate',
    location: 'Johannesburg',
    type: 'Full-time',
    description: 'Launch your tech career with mentorship and real-world project experience.'
  },
];

const benefits = [
  { icon: FaBriefcase, title: 'Competitive Salary', desc: 'Market-competitive compensation packages' },
  { icon: FaUsers, title: 'Team Culture', desc: 'Collaborative and inclusive work environment' },
  { icon: FaGraduationCap, title: 'Learning & Development', desc: 'Continuous training and certification support' },
  { icon: '🏆', title: 'Growth Opportunities', desc: 'Clear career progression paths' },
];

export default function CareersPage() {
    const [cvEmail, setCvEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleCVSubmit = (e) => {
      e.preventDefault();
      // Handle CV submission logic
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
    };

    return (
        <>
            <Head>
                <title>{careersMetaTags.title}</title>
                <meta name="description" content={careersMetaTags.description} />
                <meta name="keywords" content={careersMetaTags.keywords} />
                <meta property="og:title" content={careersMetaTags.title} />
                <meta property="og:description" content={careersMetaTags.description} />
                <link rel="canonical" href="https://tech.malenglegacy.co.za/careers" />
                
                {/* Job Posting Schema for SEO */}
                <script type="application/ld+json">
                  {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "JobPosting",
                    "title": "Multiple Positions Available",
                    "description": "Join Maleng Legacy Tech & Consulting in Johannesburg. We are hiring talented developers, architects, and consultants.",
                    "hiringOrganization": {
                      "@type": "Organization",
                      "name": "Maleng Legacy Tech & Consulting",
                      "sameAs": "https://tech.malenglegacy.co.za"
                    },
                    "jobLocation": {
                      "@type": "Place",
                      "address": {
                        "@type": "PostalAddress",
                        "streetAddress": "Johannesburg",
                        "addressRegion": "Gauteng",
                        "postalCode": "2000",
                        "addressCountry": "ZA"
                      }
                    },
                    "employmentType": "FULL_TIME",
                    "datePosted": "2026-08-11"
                  })}
                </script>
            </Head>

            <div className="min-h-screen bg-primary text-white">
                <Navigation isSubsidiary={true} subsidiaryName="Tech & Consulting" />

                {/* Unified Page Header */}
                <PageHeader
                    badge="JOIN OUR TEAM"
                    title="Start Your Career in"
                    highlight="Enterprise Tech"
                    description="500+ enterprise clients trust us. Join our growing team of developers, architects, and consultants in Johannesburg."
                    breadcrumb={[{ label: 'Careers', href: '#' }]}
                    bg="careers"
                    cta={{ text: 'View Open Positions', link: '#openings' }}
                />

                {/* Value Proposition Section - Similar to Capitec */}
                <section className="py-20 px-6 bg-soft">
                  <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                    >
                      <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        We focus on finding the right people for the right roles
                      </h2>
                      <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                        At Maleng Legacy Tech & Consulting, we're passionate about building a team of energetic and talented individuals who are excited about enterprise technology. We offer competitive compensation, continuous learning opportunities, and the chance to work on impactful projects serving 500+ enterprise clients across Africa.
                      </p>
                    </motion.div>
                  </div>

                  {/* Benefits Grid */}
                  <div className="max-w-6xl mx-auto mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {benefits.map((benefit, idx) => {
                      const Icon = typeof benefit.icon === 'string' ? () => <span className="text-4xl">{benefit.icon}</span> : benefit.icon;
                      return (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          viewport={{ once: true }}
                          className="text-center p-6 rounded-xl bg-gradient-to-br from-primary to-surface border border-white/10"
                        >
                          <Icon className="w-10 h-10 text-highlight mx-auto mb-4" />
                          <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                          <p className="text-gray-400 text-sm">{benefit.desc}</p>
                        </motion.div>
                      );
                    })}
                  </div>
                </section>

                {/* CV Registration Section - Capitec-style CTA */}
                <section className="py-20 px-6 bg-gradient-to-r from-highlight/20 to-accent/20">
                  <div className="max-w-2xl mx-auto text-center">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                    >
                      <h2 className="text-3xl md:text-4xl font-bold mb-6">Register Your CV Online</h2>
                      <p className="text-lg text-gray-300 mb-8">
                        Don't see your perfect role right now? Register your CV with us and receive notifications as new opportunities are posted.
                      </p>
                      
                      <form onSubmit={handleCVSubmit} className="flex flex-col sm:flex-row gap-3 mb-6">
                        <input
                          type="email"
                          placeholder="Enter your email"
                          value={cvEmail}
                          onChange={(e) => setCvEmail(e.target.value)}
                          required
                          className="flex-1 px-6 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-highlight"
                        />
                        <button
                          type="submit"
                          className="px-8 py-3 bg-gradient-to-r from-highlight to-accent text-white font-bold rounded-lg hover:shadow-lg transition-all"
                        >
                          Register CV
                        </button>
                      </form>
                      
                      {submitted && (
                        <p className="text-green-400 font-semibold">✓ CV registered successfully! We'll be in touch.</p>
                      )}
                    </motion.div>
                  </div>
                </section>

                {/* Open Positions */}
                <section id="openings" className="py-20 px-6">
                  <div className="max-w-6xl mx-auto">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="text-center mb-16"
                    >
                      <h2 className="text-3xl md:text-4xl font-bold mb-4">Open Positions</h2>
                      <p className="text-gray-400 text-lg">Explore career opportunities in Johannesburg</p>
                    </motion.div>

                    <div className="grid gap-6">
                      {jobOpenings.map((job, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          viewport={{ once: true }}
                          className="bg-gradient-to-br from-soft to-surface border border-white/10 rounded-xl p-8 hover:border-highlight/50 transition-all"
                        >
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                            <div>
                              <h3 className="text-2xl font-bold text-white mb-2">{job.title}</h3>
                              <div className="flex flex-wrap gap-3">
                                <span className="inline-flex items-center gap-1 text-gray-400">
                                  <FaMapMarkerAlt className="w-4 h-4" /> {job.location}
                                </span>
                                <span className="inline-flex items-center gap-1 text-gray-400">
                                  <FaBriefcase className="w-4 h-4" /> {job.type}
                                </span>
                                <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm font-semibold">
                                  {job.level}
                                </span>
                              </div>
                            </div>
                            <Link
                              href={`/careers/apply/${job.title.replace(/\s+/g, '-').toLowerCase()}`}
                              className="px-6 py-3 bg-accent text-white font-bold rounded-lg hover:shadow-lg transition-all flex items-center gap-2 whitespace-nowrap"
                            >
                              Apply Now <FaArrowRight className="w-4 h-4" />
                            </Link>
                          </div>
                          <p className="text-gray-300">{job.description}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </section>

                {/* Contact Section */}
                <section className="py-20 px-6 bg-soft">
                  <div className="max-w-2xl mx-auto text-center">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                    >
                      <h2 className="text-3xl md:text-4xl font-bold mb-6">Get In Touch</h2>
                      <p className="text-gray-300 mb-8">
                        Have questions about career opportunities? We'd love to hear from you.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                          href="mailto:careers@malenglegacy.co.za"
                          className="px-8 py-4 bg-gradient-to-r from-highlight to-accent text-white font-bold rounded-lg hover:shadow-lg transition-all"
                        >
                          Email Us
                        </a>
                        <Link
                          href="/contact"
                          className="px-8 py-4 border-2 border-white/30 text-white font-bold rounded-lg hover:bg-white/10 transition-all"
                        >
                          Contact Form
                        </Link>
                      </div>
                    </motion.div>
                  </div>
                </section>

                <Footer />
            </div>
        </>
    );
}
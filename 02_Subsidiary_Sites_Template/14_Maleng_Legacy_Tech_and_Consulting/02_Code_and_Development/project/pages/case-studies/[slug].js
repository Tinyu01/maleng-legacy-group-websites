import Head from 'next/head';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import PageHeader from '../../components/PageHeader';
import caseStudiesData from '../../data/caseStudies.json';
import { FaArrowLeft, FaCheckCircle } from 'react-icons/fa';

export default function CaseStudyDetail({ caseStudy }) {
  if (!caseStudy) {
    return (
      <>
        <Head><title>Case Study Not Found</title></Head>
        <Navigation isSubsidiary={true} subsidiaryName="Tech & Consulting" />
        <div className="min-h-screen bg-primary flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Case Study Not Found</h1>
            <Link href="/case-studies" className="text-highlight hover:text-accent">← Back to Case Studies</Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Head>
        <title>{caseStudy.title} | Maleng Legacy Tech & Consulting</title>
        <meta name="description" content={`${caseStudy.company} - ${caseStudy.challenge.substring(0, 150)}`} />
      </Head>

      <div className="min-h-screen bg-primary text-white">
        <Navigation isSubsidiary={true} subsidiaryName="Tech & Consulting" />

        {/* Page Header with Industry-specific background */}
        <PageHeader
          badge={caseStudy.industry}
          title={caseStudy.company}
          highlight="Success Story"
          description={`${caseStudy.companySize} • ${caseStudy.locations || caseStudy.growth || ''}`}
          breadcrumb={[
            { label: 'Case Studies', href: '/case-studies' },
            { label: caseStudy.title.substring(0, 30) + '...', href: '#' }
          ]}
          bg="default"
        />

        <div className="mx-auto max-w-4xl px-6 py-12">
          {/* Challenge Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-highlight">The Challenge</h2>
            <div className="bg-gradient-to-br from-soft to-surface border border-white/10 rounded-2xl p-8">
              <p className="text-gray-300 leading-relaxed whitespace-pre-line">{caseStudy.challenge}</p>
            </div>
          </motion.div>

          {/* Solution Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-highlight">Our Solution</h2>
            <div className="bg-gradient-to-br from-soft to-surface border border-white/10 rounded-2xl p-8">
              <p className="text-gray-300 leading-relaxed whitespace-pre-line">{caseStudy.solution}</p>
            </div>
          </motion.div>

          {/* Results Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-highlight">Results & Impact</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {caseStudy.results?.metrics?.map((metric, i) => (
                <div key={i} className="bg-gradient-to-br from-soft to-surface border border-white/10 rounded-2xl p-6 text-center">
                  <div className="text-3xl font-bold text-highlight mb-2">{metric.value}</div>
                  <div className="text-sm font-semibold mb-1">{metric.label}</div>
                  <div className="text-xs text-gray-400">{metric.description}</div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-gradient-to-br from-soft to-surface border border-white/10 rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-4">Business Impact</h3>
              <ul className="space-y-3">
                {caseStudy.results?.businessImpact?.map((impact, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <FaCheckCircle className="w-5 h-5 text-highlight mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{impact}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Services Used */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-highlight">Services Delivered</h2>
            <div className="flex flex-wrap gap-3">
              {caseStudy.services?.map((service, i) => (
                <Link
                  key={i}
                  href={service.href}
                  className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-gray-300 hover:border-highlight hover:text-highlight transition"
                >
                  {service.name}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Testimonial */}
          {caseStudy.testimonial && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="bg-gradient-to-br from-highlight/10 to-accent/10 border border-highlight/30 rounded-2xl p-8 text-center">
                <div className="text-4xl mb-4">❝</div>
                <p className="text-lg italic text-gray-200 mb-6">{caseStudy.testimonial.quote}</p>
                <div>
                  <p className="font-bold text-white">{caseStudy.testimonial.author}</p>
                  <p className="text-sm text-gray-400">{caseStudy.testimonial.role}, {caseStudy.testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          )}

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center pt-8"
          >
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-gradient-to-r from-highlight to-accent text-white font-bold rounded-lg hover:shadow-lg transition-all"
            >
              Discuss Your Project
            </Link>
          </motion.div>
        </div>

        <Footer />
      </div>
    </>
  );
}

export async function getStaticProps({ params }) {
  const caseStudy = caseStudiesData.caseStudies.find(cs => cs.slug === params.slug);

  if (!caseStudy) {
    return { notFound: true };
  }

  return {
    props: { caseStudy },
  };
}

export async function getStaticPaths() {
  const paths = caseStudiesData.caseStudies.map(caseStudy => ({
    params: { slug: caseStudy.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}
import Head from 'next/head';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { FaCheckCircle, FaUsers, FaAward, FaChartLine, FaGlobe, FaClock } from 'react-icons/fa';

export default function AboutPage() {
  const stats = [
    { value: '15+', label: 'Years in Business', icon: FaClock },
    { value: '500+', label: 'Enterprise Clients', icon: FaUsers },
    { value: '1200+', label: 'Projects Delivered', icon: FaChartLine },
    { value: '12', label: 'Industry Awards', icon: FaAward },
  ];

  const values = [
    {
      title: 'Excellence',
      description: 'We deliver nothing less than exceptional quality in every engagement.',
    },
    {
      title: 'Innovation',
      description: 'We stay ahead of technology trends to future-proof your business.',
    },
    {
      title: 'Integrity',
      description: 'Transparent pricing, honest advice, and unwavering ethics.',
    },
    {
      title: 'Partnership',
      description: 'We succeed only when our clients achieve their goals.',
    },
  ];

  const leadership = [
    {
      name: 'Thabo Maleng',
      title: 'Group CEO & Founder',
      bio: '15+ years in enterprise technology and infrastructure. Previously led digital transformation at Fortune 500 firms.',
      image: '👨‍💼',
    },
    {
      name: 'Dr. Nomvula Dlamini',
      title: 'Chief Technology Officer',
      bio: 'PhD in Computer Science, 12+ years in cloud architecture and AI/ML implementation.',
      image: '👩‍🔬',
    },
    {
      name: 'James Peterson',
      title: 'Head of Client Success',
      bio: 'Enterprise account management expert ensuring 98% client satisfaction rate.',
      image: '👨‍💻',
    },
  ];

  return (
    <>
      <Head>
        <title>About Us | Maleng Legacy Tech & Consulting</title>
        <meta
          name="description"
          content="Learn about Maleng Legacy Tech & Consulting - 15+ years of enterprise technology expertise, 500+ clients, and a commitment to digital transformation excellence."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-primary text-white">
        <Navigation isSubsidiary={true} subsidiaryName="Tech & Consulting" />

        {/* Hero Section */}
        <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 px-6 overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 left-10 w-72 h-72 bg-highlight rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl" />
          </div>

          <div className="mx-auto max-w-6xl relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center">
                <div className="inline-block px-4 py-2 bg-accent/10 border border-accent/30 rounded-full mb-6">
                  <span className="text-accent font-bold text-sm">ABOUT US</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Building Digital Legacies{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-highlight to-accent">
                    Since 2011
                  </span>
                </h1>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Maleng Legacy Tech & Consulting delivers enterprise-grade technology solutions,
                  digital transformation, and creative design services to growth-focused organizations.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-6 bg-soft">
          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center p-6 rounded-xl bg-gradient-to-br from-soft to-surface border border-white/10"
                  >
                    <Icon className="w-8 h-8 text-highlight mx-auto mb-3" />
                    <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 md:py-28 px-6">
          <div className="mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl bg-gradient-to-br from-soft to-surface border border-white/10"
              >
                <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                <p className="text-gray-300 leading-relaxed">
                  To empower enterprises with cutting-edge technology solutions, expert consulting,
                  and human-centered design that drives measurable business growth and operational excellence.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl bg-gradient-to-br from-soft to-surface border border-white/10"
              >
                <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
                <p className="text-gray-300 leading-relaxed">
                  To become Africa's most trusted technology partner for enterprise digital transformation,
                  recognized for innovation, reliability, and client success.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-20 md:py-28 px-6 bg-soft">
          <div className="mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
              <p className="text-gray-400 text-lg">The principles that guide everything we do</p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="text-center p-6 rounded-xl bg-gradient-to-br from-soft to-surface border border-white/10 hover:border-highlight/30 transition-all"
                >
                  <FaCheckCircle className="w-10 h-10 text-highlight mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-gray-400 text-sm">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-20 md:py-28 px-6">
          <div className="mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Leadership Team</h2>
              <p className="text-gray-400 text-lg">Experts driving enterprise transformation</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {leadership.map((leader, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-highlight to-accent flex items-center justify-center text-5xl mx-auto mb-4">
                    {leader.image}
                  </div>
                  <h3 className="text-xl font-bold text-white">{leader.name}</h3>
                  <p className="text-highlight text-sm mb-3">{leader.title}</p>
                  <p className="text-gray-400 text-sm">{leader.bio}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-6 bg-gradient-to-r from-b2b-primary via-b2b-secondary to-b2b-primary">
          <div className="mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
              <p className="text-xl text-white/80 mb-8">
                Join 500+ enterprise clients who trust us for their technology needs.
              </p>
              <Link
                href="/contact"
                className="inline-block px-8 py-4 bg-white text-b2b-primary font-bold rounded-lg hover:shadow-2xl transition-all"
              >
                Start a Conversation
              </Link>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
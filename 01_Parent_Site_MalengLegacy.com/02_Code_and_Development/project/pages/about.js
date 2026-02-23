import Head from 'next/head';
import Header from '../components/Navigation';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Us | Maleng Legacy Group</title>
        <meta name="description" content="Learn about Maleng Legacy Group Holdings - South Africa's premier diversified holding company with 18+ subsidiaries." />
      </Head>

      <Header />

      <main className="pt-32 pb-20 min-h-screen">
        <div className="max-w-7xl mx-auto px-6">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About Maleng Legacy Group</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Building sustainable economic legacies through diversified solutions across key sectors.
            </p>
          </motion.div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="card"
            >
              <h2 className="text-3xl font-bold mb-4 gradient-text">Our Mission</h2>
              <p className="text-gray-300 leading-relaxed">
                To create sustainable value for stakeholders through strategic diversification, operational excellence, and innovative solutions across infrastructure, professional services, protection, and lifestyle sectors.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="card"
            >
              <h2 className="text-3xl font-bold mb-4 gradient-text">Our Vision</h2>
              <p className="text-gray-300 leading-relaxed">
                To become South Africa's most trusted and innovative holding company, recognized for creating enduring economic legacies and empowering communities through sustainable business practices.
              </p>
            </motion.div>
          </div>

          {/* Core Values */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-16"
          >
            <h2 className="text-4xl font-bold mb-8 text-center">Our Core Values</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { title: 'Excellence', icon: '⭐', desc: 'Uncompromising quality in everything we do' },
                { title: 'Integrity', icon: '🤝', desc: 'Transparent and ethical business practices' },
                { title: 'Innovation', icon: '💡', desc: 'Continuous improvement and adaptation' },
                { title: 'Empowerment', icon: '🚀', desc: 'Developing people and communities' },
              ].map((value, idx) => (
                <div key={idx} className="card text-center">
                  <div className="text-5xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-sm text-gray-400">{value.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Company Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="card bg-gradient-to-r from-accent/10 to-gold/10 border-accent/30"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold gradient-text mb-2">2020</div>
                <p className="text-gray-400">Founded</p>
              </div>
              <div>
                <div className="text-4xl font-bold gradient-text mb-2">18+</div>
                <p className="text-gray-400">Subsidiaries</p>
              </div>
              <div>
                <div className="text-4xl font-bold gradient-text mb-2">4</div>
                <p className="text-gray-400">Core Clusters</p>
              </div>
              <div>
                <div className="text-4xl font-bold gradient-text mb-2">BEE L1</div>
                <p className="text-gray-400">Certified</p>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </>
  );
}

import Head from 'next/head';
import Header from '../components/Navigation';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

export default function CareersPage() {
  return (
    <>
      <Head>
        <title>Careers | Maleng Legacy Group</title>
        <meta name="description" content="Join Maleng Legacy Group and build your career across a diversified South African business group." />
        <meta name="keywords" content="Maleng Legacy Group careers, jobs in South Africa, graduate programmes, corporate careers, diversified business careers" />
      </Head>

      <Header />

      <main className="pt-32 pb-20 min-h-screen">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl font-bold mb-6">Careers at Maleng Legacy</h1>
            <p className="text-xl text-gray-300 mb-12">
              Join our team of talented professionals driving innovation across multiple sectors.
            </p>

            <div className="card mb-8">
              <h2 className="text-2xl font-bold mb-4">Why Join Us?</h2>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div>
                  <div className="text-4xl mb-2">🚀</div>
                  <h3 className="font-bold mb-2">Growth Opportunities</h3>
                  <p className="text-sm text-gray-400">Diverse career paths across our subsidiaries</p>
                </div>
                <div>
                  <div className="text-4xl mb-2">💼</div>
                  <h3 className="font-bold mb-2">Competitive Benefits</h3>
                  <p className="text-sm text-gray-400">Industry-leading compensation packages</p>
                </div>
                <div>
                  <div className="text-4xl mb-2">🌟</div>
                  <h3 className="font-bold mb-2">Innovation Culture</h3>
                  <p className="text-sm text-gray-400">Work with cutting-edge technologies</p>
                </div>
              </div>
            </div>

            <p className="text-gray-400 mb-8">Career portal coming soon. For immediate inquiries:</p>
            <a href="mailto:careers@malenglegacy.co.za" className="btn-primary inline-block">
              Email: careers@malenglegacy.co.za
            </a>
          </motion.div>
        </div>
      </main>

      <Footer />
    </>
  );
}

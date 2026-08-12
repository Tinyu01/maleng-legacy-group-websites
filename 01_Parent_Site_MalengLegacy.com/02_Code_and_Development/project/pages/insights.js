import Head from 'next/head';
import Header from '../components/Navigation';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

export default function InsightsPage() {
  return (
    <>
      <Head>
        <title>Insights & News | Maleng Legacy Group</title>
        <meta name="description" content="Latest news, insights, and thought leadership from Maleng Legacy Group across its operating clusters." />
        <meta name="keywords" content="Maleng Legacy Group insights, group news, thought leadership, South African business news, diversified group updates, corporate announcements" />
      </Head>

      <Header />

      <main className="pt-32 pb-20 min-h-screen">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold mb-6">Insights & News</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Stay updated with the latest developments, insights, and thought leadership from our group.
            </p>
          </motion.div>

          <div className="card text-center py-16">
            <div className="text-6xl mb-4">📰</div>
            <h2 className="text-2xl font-bold mb-4">Coming Soon</h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Our insights hub is currently under development. Subscribe to our newsletter to stay informed about company updates, industry trends, and thought leadership.
            </p>
            <div className="mt-8">
              <a href="mailto:info@malenglegacy.co.za?subject=Newsletter Subscription" className="btn-primary inline-block">
                Subscribe to Newsletter
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

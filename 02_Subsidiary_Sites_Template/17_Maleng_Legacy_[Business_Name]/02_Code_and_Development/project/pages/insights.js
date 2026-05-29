import Head from 'next/head';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function InsightsPage() {
  return (
    <>
      <Head><title>Insights | Maleng Legacy Subsidiary</title></Head>
      <Navigation />
      <main className="max-w-7xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold mb-6">Insights</h1>
        <p className="text-gray-300 text-lg leading-relaxed">
          Insights, updates, and thought leadership from this subsidiary are published in alignment with the group communications strategy.
        </p>
      </main>
      <Footer />
    </>
  );
}

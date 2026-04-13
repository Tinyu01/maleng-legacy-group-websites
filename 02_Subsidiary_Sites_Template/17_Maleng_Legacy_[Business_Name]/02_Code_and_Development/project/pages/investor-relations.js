import Head from 'next/head';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function InvestorRelationsPage() {
  return (
    <>
      <Head><title>Investor Relations | Maleng Legacy Subsidiary</title></Head>
      <Navigation />
      <main className="max-w-7xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold mb-6">Investor Relations</h1>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          Maleng Legacy Group follows a centralized investment and governance model, with subsidiary performance contributing to consolidated growth targets.
        </p>
        <a href="mailto:investors@malenglegacy.co.za" className="text-accent hover:text-accent/80">investors@malenglegacy.co.za</a>
      </main>
      <Footer />
    </>
  );
}

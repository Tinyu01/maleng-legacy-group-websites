import Head from 'next/head';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function LeadershipPage() {
  return (
    <>
      <Head><title>Leadership | Maleng Legacy Subsidiary</title></Head>
      <Navigation />
      <main className="max-w-7xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold mb-6">Leadership</h1>
        <p className="text-gray-300 text-lg leading-relaxed">
          Subsidiary leadership is accountable for operations, client service, and performance while aligned with group-level strategic oversight.
        </p>
      </main>
      <Footer />
    </>
  );
}

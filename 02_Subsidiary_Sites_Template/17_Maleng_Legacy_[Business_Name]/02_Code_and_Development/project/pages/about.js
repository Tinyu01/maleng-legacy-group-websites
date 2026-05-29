import Head from 'next/head';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function AboutPage() {
  return (
    <>
      <Head><title>About | Maleng Legacy Subsidiary</title></Head>
      <Navigation />
      <main className="max-w-7xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold mb-6">About</h1>
        <p className="text-gray-300 text-lg leading-relaxed">
          Maleng Legacy subsidiaries operate within a unified holding-company model with centralized governance, finance, legal, and digital infrastructure. This ensures consistent quality, compliance, and scalable growth.
        </p>
      </main>
      <Footer />
    </>
  );
}

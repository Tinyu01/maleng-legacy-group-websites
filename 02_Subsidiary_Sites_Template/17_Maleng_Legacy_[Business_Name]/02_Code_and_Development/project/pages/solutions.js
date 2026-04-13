import Head from 'next/head';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function SolutionsPage() {
  return (
    <>
      <Head><title>Solutions | Maleng Legacy Subsidiary</title></Head>
      <Navigation />
      <main className="max-w-7xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold mb-6">Services</h1>
        <p className="text-gray-300 text-lg mb-6">
          This subsidiary delivers sector-specific services aligned to the Maleng Legacy Group business plan and operational standards.
        </p>
        <a href="/#services" className="btn-primary">Back to Service Summary</a>
      </main>
      <Footer />
    </>
  );
}

import Head from 'next/head';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function CareersPage() {
  return (
    <>
      <Head><title>Careers | Maleng Legacy Group</title></Head>
      <Navigation />
      <main className="max-w-7xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold mb-6">Careers</h1>
        <p className="text-gray-300 text-lg mb-6">
          Careers are managed centrally by Maleng Legacy Group Holdings. View all open opportunities on the main group careers page.
        </p>
        <a href="https://malenglegacy.co.za/careers" className="btn-primary">Open Group Careers</a>
      </main>
      <Footer />
    </>
  );
}

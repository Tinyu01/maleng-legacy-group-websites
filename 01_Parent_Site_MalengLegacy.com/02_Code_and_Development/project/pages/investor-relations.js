import Head from 'next/head';
import Header from '../components/Navigation';
import Footer from '../components/Footer';
import InvestorRelations from '../components/InvestorRelations';

export default function InvestorRelationsPage() {
  return (
    <>
      <Head>
        <title>Investor Relations | Maleng Legacy Group</title>
        <meta name="description" content="Access financial information, reports, and investor resources for Maleng Legacy Group Holdings." />
      </Head>

      <Header />

      <main className="pt-32 pb-20 min-h-screen">
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <h1 className="text-5xl font-bold mb-4 text-center">Investor Relations</h1>
          <p className="text-gray-400 text-center max-w-2xl mx-auto">
            Transparent, institutional-grade business fundamentals and investment opportunities.
          </p>
        </div>
        <InvestorRelations />
      </main>

      <Footer />
    </>
  );
}

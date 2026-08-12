import Head from 'next/head';
import Header from '../components/Navigation';
import Footer from '../components/Footer';
import Subsidiaries from '../components/Subsidiaries';

export default function SolutionsPage() {
  return (
    <>
      <Head>
        <title>Maleng Legacy Group Solutions | Diversified Business Clusters</title>
        <meta name="description" content="Explore Maleng Legacy Group's diversified business clusters across infrastructure, professional services, protection, and lifestyle sectors." />
        <meta name="keywords" content="Maleng Legacy Group solutions, diversified business clusters, infrastructure solutions, professional services, protection services, lifestyle businesses" />
      </Head>

      <Header />

      <main className="pt-32 pb-20 min-h-screen">
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <h1 className="text-5xl font-bold mb-4 text-center">Our Solutions</h1>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
            Integrated business solutions across multiple sectors designed to drive growth and create value.
          </p>
        </div>
        <Subsidiaries />
      </main>

      <Footer />
    </>
  );
}

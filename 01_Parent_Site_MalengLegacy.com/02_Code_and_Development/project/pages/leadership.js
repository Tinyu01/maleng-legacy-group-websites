import Head from 'next/head';
import Header from '../components/Navigation';
import Footer from '../components/Footer';
import ManagementTeam from '../components/ManagementTeam';

export default function LeadershipPage() {
  return (
    <>
      <Head>
        <title>Leadership | Maleng Legacy Group</title>
        <meta name="description" content="Meet the executive leadership team driving Maleng Legacy Group's strategic vision and operational excellence." />
      </Head>

      <Header />

      <main className="pt-32 pb-20 min-h-screen">
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <h1 className="text-5xl font-bold mb-4 text-center">Executive Leadership</h1>
          <p className="text-gray-400 text-center max-w-2xl mx-auto">
            Our experienced leadership team brings decades of expertise across diverse industries.
          </p>
        </div>
        <ManagementTeam />
      </main>

      <Footer />
    </>
  );
}

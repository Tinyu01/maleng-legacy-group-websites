import Head from 'next/head';
import Header from '../components/Navigation';
import Footer from '../components/Footer';
import Contact from '../components/Contact';

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact Us | Maleng Legacy Group</title>
        <meta name="description" content="Get in touch with Maleng Legacy Group Holdings. Contact us for business inquiries, partnerships, and investor relations." />
      </Head>

      <Header />

      <main className="pt-32 pb-20 min-h-screen">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-4 text-center">Contact Us</h1>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Ready to explore partnership opportunities or learn more about our group? Get in touch with our team.
          </p>
          <Contact />
        </div>
      </main>

      <Footer />
    </>
  );
}

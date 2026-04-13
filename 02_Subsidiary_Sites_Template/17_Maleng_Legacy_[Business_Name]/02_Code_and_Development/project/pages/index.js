import Head from 'next/head';
import { useMemo } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { getSubdomainFromHostname, getSubdomainMeta } from '../components/subsidiaryData';

export default function SubsidiaryHome() {
  const subdomain = useMemo(() => {
    if (typeof window === 'undefined') return 'tech';
    return getSubdomainFromHostname(window.location.hostname);
  }, []);

  const meta = getSubdomainMeta(subdomain);

  return (
    <>
      <Head>
        <title>Maleng Legacy {meta.name}</title>
        <meta name="description" content={`Maleng Legacy ${meta.name} - ${meta.cluster}`} />
      </Head>

      <Navigation />

      <main>
        <section className="relative py-28 bg-gradient-to-br from-primary via-secondary to-primary">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <p className="text-accent font-semibold mb-4">{meta.cluster}</p>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Maleng Legacy {meta.name}</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Enterprise subsidiary under Maleng Legacy Group delivering professional service quality, governance, and long-term value.
            </p>
            <div className="flex justify-center gap-4">
              <a href="/solutions" className="btn-primary">View Services</a>
              <a href="#contact-section" className="btn-secondary">Contact Us</a>
            </div>
          </div>
        </section>

        <section id="about" className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl font-bold mb-6">About</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              This website represents the {meta.name} business unit operating under the Maleng Legacy Group Holdings structure. 
              Services are delivered with shared governance, compliance, HR, and digital standards from the group level.
            </p>
          </div>
        </section>

        <section id="services" className="py-20 bg-primary/30">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl font-bold mb-6">Services</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Visit the dedicated services page for detailed offerings, delivery model, and engagement options.
            </p>
            <a href="/solutions" className="btn-primary">Open Services Page</a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

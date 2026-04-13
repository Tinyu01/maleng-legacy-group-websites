import { useMemo } from 'react';
import { getSubdomainFromHostname, getSubdomainMeta } from './subsidiaryData';

export default function Footer() {
  const subdomain = useMemo(() => {
    if (typeof window === 'undefined') return 'tech';
    return getSubdomainFromHostname(window.location.hostname);
  }, []);
  const meta = getSubdomainMeta(subdomain);
  const infoEmail = `info@${subdomain}.malenglegacy.co.za`;
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary/50 backdrop-blur border-t border-white/10 mt-16">
      <section id="contact-section" className="max-w-7xl mx-auto px-6 py-16 border-b border-white/10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Visit Our Farm or Order Products</h2>
        <p className="text-gray-300 mb-6">
          Book a farm tour, visit our restaurant, or inquire about wholesale Mopani Protein™ and egg supply
        </p>
        <p className="text-gray-300">Call: +27 (0)12 345 6789</p>
        <p className="text-gray-300 mb-8">Email: {infoEmail}</p>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input className="px-4 py-3 rounded-lg bg-white/5 border border-white/10" placeholder="Full name" />
          <input className="px-4 py-3 rounded-lg bg-white/5 border border-white/10" placeholder="Email address" type="email" />
          <input className="px-4 py-3 rounded-lg bg-white/5 border border-white/10 md:col-span-2" placeholder="Subject" />
          <textarea className="px-4 py-3 rounded-lg bg-white/5 border border-white/10 md:col-span-2" placeholder="Tell us what you need" rows={4}></textarea>
          <button type="submit" className="btn-primary md:col-span-2">Send Enquiry</button>
        </form>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          <div>
            <h3 className="text-lg font-bold gradient-text mb-4">Maleng Legacy Group</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Building sustainable economic legacies through diversified solutions across key sectors.
            </p>
            <p className="text-sm text-gray-400 mt-3">Current Site: {meta.name}</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="/about" className="hover:text-accent transition">About</a></li>
              <li><a href="/solutions" className="hover:text-accent transition">Solutions</a></li>
              <li><a href="https://malenglegacy.co.za/careers" className="hover:text-accent transition">Careers</a></li>
              <li><a href="https://malenglegacy.co.za/privacy" className="hover:text-accent transition">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Our Clusters</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Infrastructure & Built Environment</li>
              <li>Professional & Capital Services</li>
              <li>Protection & Operations</li>
              <li>Agri-Consumer & Lifestyle</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href={`mailto:${infoEmail}`} className="hover:text-accent transition">{infoEmail}</a></li>
              <li><a href="mailto:investors@malenglegacy.co.za" className="hover:text-accent transition">investors@malenglegacy.co.za</a></li>
              <li>Gauteng, South Africa</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-center text-xs text-gray-400">
          © {year} Maleng Legacy Group Holdings (Pty) Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

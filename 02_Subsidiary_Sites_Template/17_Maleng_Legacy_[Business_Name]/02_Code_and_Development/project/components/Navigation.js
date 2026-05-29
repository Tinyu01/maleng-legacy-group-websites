import Link from 'next/link';
import { useMemo, useState } from 'react';
import { CLUSTERS, getSubdomainFromHostname, getSubdomainMeta, toSubdomainUrl } from './subsidiaryData';

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [groupOpen, setGroupOpen] = useState(false);

  const subdomain = useMemo(() => {
    if (typeof window === 'undefined') return 'tech';
    return getSubdomainFromHostname(window.location.hostname);
  }, []);

  const meta = getSubdomainMeta(subdomain);
  const infoEmail = `info@${subdomain}.malenglegacy.co.za`;

  return (
    <>
      <div className="bg-secondary/50 backdrop-blur border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-12 text-base">
            <div className="hidden md:flex items-center gap-6">
              <a href="https://malenglegacy.co.za/investor-relations" className="text-gray-400 hover:text-accent transition flex items-center gap-1">
                <span>📊</span>
                <span>Investor Portal</span>
              </a>
              <a href="https://malenglegacy.co.za/insights" className="text-gray-400 hover:text-accent transition flex items-center gap-1">
                <span>📰</span>
                <span>Media Room</span>
              </a>
              <a href="mailto:partners@malenglegacy.co.za" className="text-gray-400 hover:text-accent transition flex items-center gap-1">
                <span>🤝</span>
                <span>Partner Login</span>
              </a>
            </div>

            <div className="flex items-center gap-6 ml-auto">
              <a href="tel:+27123456789" className="text-gray-400 hover:text-accent transition hidden sm:flex items-center gap-2">
                <span>📞</span>
                <span>+27 (0)12 345 6789</span>
              </a>
              <a href={`mailto:${infoEmail}`} className="text-gray-400 hover:text-accent transition flex items-center gap-2">
                <span>✉️</span>
                <span className="hidden sm:inline">{infoEmail}</span>
              </a>
              <div className="flex items-center gap-1 text-gray-400">
                <span>🌍</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-50 bg-primary/95 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent to-gold flex items-center justify-center text-white font-bold text-xl">
              ML
            </div>
            <div>
              <p className="text-white font-semibold leading-tight">Maleng Legacy {meta.name}</p>
              <p className="text-xs text-gray-400">{meta.cluster}</p>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            <Link href="/about" className="px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5 rounded-md transition">About</Link>
            <Link href="/solutions" className="px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5 rounded-md transition">Solutions</Link>
            <Link href="/leadership" className="px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5 rounded-md transition">Leadership</Link>
            <Link href="/investor-relations" className="px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5 rounded-md transition">Investor Relations</Link>
            <a href="https://malenglegacy.co.za/careers" className="px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5 rounded-md transition">Careers</a>
            <Link href="/insights" className="px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5 rounded-md transition">Insights</Link>

            <div className="relative" onMouseEnter={() => setGroupOpen(true)} onMouseLeave={() => setGroupOpen(false)}>
              <button className="px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5 rounded-md transition flex items-center gap-1">
                Our Group
                <span>▾</span>
              </button>

              {groupOpen && (
                <div className="absolute top-full right-0 mt-2 w-[900px] bg-surface/98 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl p-5 z-50">
                  <div className="grid grid-cols-4 gap-4">
                    {CLUSTERS.map((cluster) => (
                      <div key={cluster.key}>
                        <h4 className="text-sm font-bold text-white mb-2">{cluster.name}</h4>
                        <ul className="space-y-2">
                          {cluster.items.map((item) => (
                            <li key={item.subdomain}>
                              <a href={toSubdomainUrl(item.subdomain)} className="text-sm text-gray-300 hover:text-accent transition">
                                {item.label}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <a href="https://malenglegacy.co.za" className="text-sm font-semibold text-accent hover:text-accent/80 transition">
                      Mainsite → malenglegacy.co.za
                    </a>
                  </div>
                </div>
              )}
            </div>
          </nav>

          <div className="hidden lg:block">
            <a href="#contact-section" className="btn-primary text-sm px-6 py-2">Contact Us</a>
          </div>

          <button className="lg:hidden text-white text-2xl" onClick={() => setMenuOpen((v) => !v)}>
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>

        {menuOpen && (
          <div className="lg:hidden px-6 pb-4 border-t border-white/10 space-y-2">
            <Link href="/about" className="block text-sm text-gray-300 hover:text-accent py-2">About</Link>
            <Link href="/solutions" className="block text-sm text-gray-300 hover:text-accent py-2">Solutions</Link>
            <Link href="/leadership" className="block text-sm text-gray-300 hover:text-accent py-2">Leadership</Link>
            <Link href="/investor-relations" className="block text-sm text-gray-300 hover:text-accent py-2">Investor Relations</Link>
            <a href="https://malenglegacy.co.za/careers" className="block text-sm text-gray-300 hover:text-accent py-2">Careers</a>
            <Link href="/insights" className="block text-sm text-gray-300 hover:text-accent py-2">Insights</Link>
            <a href="https://malenglegacy.co.za" className="block text-sm text-gray-300 hover:text-accent py-2">Mainsite</a>
            <a href="#contact-section" className="btn-primary inline-block text-sm px-4 py-2 mt-2">Contact Us</a>
          </div>
        )}
      </header>
    </>
  );
}

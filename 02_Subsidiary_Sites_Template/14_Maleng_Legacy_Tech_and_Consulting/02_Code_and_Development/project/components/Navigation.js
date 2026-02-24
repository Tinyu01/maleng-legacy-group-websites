import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Navigation({ isSubsidiary = true, subsidiaryName = 'Maleng Legacy Subsidiary' }) {
  const parentUrl = process.env.NEXT_PUBLIC_PARENT_URL || 'https://www.malenglegacy.co.za';

  const links = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '#services' },
    { label: 'Why Us', href: '#why-choose-us' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-primary/95 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent to-gold flex items-center justify-center text-white font-bold">
            ML
          </div>
          <div>
            <p className="text-white font-semibold leading-tight">{isSubsidiary ? subsidiaryName : 'Maleng Legacy'}</p>
            <p className="text-xs text-gray-400">Standalone Site</p>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-2">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5 rounded-md transition"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <motion.a
          href={parentUrl}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="text-sm px-4 py-2 border border-accent/50 text-accent rounded-lg hover:bg-accent hover:text-white transition"
        >
          Parent Site
        </motion.a>
      </div>
    </header>
  );
}

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import services from '../data/services.json';
import portfolioData from '../data/portfolio.json';

// ---------------------------------------------------------------------------
// GROUP STRUCTURE DATA
// ---------------------------------------------------------------------------
const clusters = [
  {
    id: 'infrastructure',
    name: 'Infrastructure & Built Environment',
    icon: '🏗️',
    subsidiaries: [
      { name: 'Construction & Infrastructure', url: '/subsidiaries/construction', focus: 'Building projects, civil works, renovations, NHBRC compliance', clients: 'Government, commercial, residential', price: 'R2-8M' },
      { name: 'Property Development', url: '/subsidiaries/property', focus: 'Land acquisition, development, property management', clients: 'Investors, corporates, government', price: 'R1-5M' },
      { name: 'Energy Solutions', url: '/subsidiaries/energy', focus: 'Solar, renewable energy consulting, energy audits', clients: 'Industrial, commercial, residential', price: 'R500K-2M' },
    ],
  },
  {
    id: 'professional',
    name: 'Professional & Capital Services',
    icon: '💼',
    subsidiaries: [
      { name: 'Tech & Consulting', url: '/subsidiaries/tech', focus: 'IT consulting, software dev, digital transformation, cybersecurity', clients: 'SMEs, corporates, government', price: 'R2-5M' },
      { name: 'Media & Signage', url: '/subsidiaries/media', focus: 'Branding, design, printing, signage, digital media', clients: 'All clusters + external clients', price: 'R1-3M' },
      { name: 'Corporate Services', url: '/subsidiaries/corporate', focus: 'CIPC registration, compliance, secretarial, shelf companies', clients: 'Entrepreneurs, startups, investors', price: 'R500K-1.5M' },
      { name: 'Training Institute', url: '/subsidiaries/training', focus: 'SETA-accredited skills training (security, hospitality, construction)', clients: 'Internal + external trainees', price: 'R300K-1M' },
      { name: 'Capital & Investments', url: '/subsidiaries/capital', focus: 'Investment arm, acquisitions, equity stakes in startups', clients: 'Portfolio companies, strategic partners', price: 'R1-10M' },
    ],
  },
  {
    id: 'protection',
    name: 'Protection & Operations',
    icon: '🛡️',
    subsidiaries: [
      { name: 'Security Services', url: '/subsidiaries/security', focus: 'Site security, armed response, access control, surveillance', clients: 'Corporates, estates, construction sites', price: 'R2-6M' },
      { name: 'Logistics & Transport', url: '/subsidiaries/logistics', focus: 'Fleet management, goods transport, warehousing', clients: 'SMEs, construction, retail, internal', price: 'R1.5-4M' },
      { name: 'Facility Management', url: '/subsidiaries/facility', focus: 'Commercial cleaning, hygiene, maintenance', clients: 'Corporates, government, schools, hospitals', price: 'R1-3M' },
      { name: 'Carwash & Grill', url: '/subsidiaries/carwash', focus: 'Premium carwash, grill/food, fleet contracts', clients: 'Private, commercial fleets', price: 'R500K-1.5M' },
    ],
  },
  {
    id: 'agri',
    name: 'Agri-Consumer & Lifestyle',
    icon: '🌾',
    subsidiaries: [
      { name: 'Agri (Mopani Farms + Poultry)', url: '/subsidiaries/agri', focus: 'Mopani worm farming, poultry production, agri-tourism', clients: 'Catering (internal), retail, export', price: 'R1-4M' },
      { name: 'Catering & Supplies (Mopani Protein™)', url: '/subsidiaries/catering', focus: 'Catering services, Signature Mopani Protein brand, equipment rental', clients: 'Events, corporates, private, retail', price: 'R2-6M' },
      { name: 'Event Management', url: '/subsidiaries/events', focus: 'Corporate events, conferences, weddings, coordination', clients: 'Corporates, private clients', price: 'R800K-2M' },
      { name: 'Retail & Distribution', url: '/subsidiaries/retail', focus: 'FMCG distribution, retail partnerships, brand licensing', clients: 'Retailers, wholesalers, consumers', price: 'R500K-3M' },
    ],
  },
];

const totalSubsidiaries = clusters.reduce((sum, c) => sum + c.subsidiaries.length, 0);

const Header = ({ isSubsidiary = false, subsidiaryName = '', subsidiaryUrl = '' }) => {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [groupDropdownOpen, setGroupDropdownOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [pricingDropdownOpen, setPricingDropdownOpen] = useState(false);
  const [portfolioDropdownOpen, setPortfolioDropdownOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const normalizePath = (p) => {
    if (!p) return p;
    const clean = p.split('?')[0].split('#')[0];
    return clean.length > 1 && clean.endsWith('/') ? clean.slice(0, -1) : clean;
  };

  const isActivePath = (href) => {
    if (!href) return false;
    const path = normalizePath(router.asPath);
    const target = normalizePath(href);
    if (target === '/') return path === '/';
    return path === target || path.startsWith(`${target}/`);
  };

  const isExactPath = (href) => normalizePath(router.asPath) === normalizePath(href);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Careers', href: '/careers' },
    { label: 'Insights', href: '/blog' },
  ];

  const categoryCount = services?.categories?.length || 0;
  const totalServiceCount = services?.categories?.reduce((sum, c) => sum + (c.services?.length || 0), 0) || 0;
  const portfolioCategories = portfolioData?.categories || [];
  const portfolioProjects = portfolioData?.projects || [];
  const portfolioCategoryCount = portfolioCategories.length;
  const portfolioProjectCount = portfolioProjects.length;

  return (
    <>
      {/* Utility Bar */}
      <div className="bg-secondary/50 backdrop-blur border-b border-white/5">
        <div className="mx-auto px-6">
          <div className="flex justify-between items-center h-12 text-base">
            <div className="hidden md:flex items-center gap-6">
              <a href="#investor-portal" className="text-gray-400 hover:text-accent transition flex items-center gap-1">
                <span>📊</span><span>Investor Portal</span>
              </a>
              <a href="#media" className="text-gray-400 hover:text-accent transition flex items-center gap-1">
                <span>📰</span><span>Media Room</span>
              </a>
              <a href="#partners" className="text-gray-400 hover:text-accent transition flex items-center gap-1">
                <span>🤝</span><span>Partner Login</span>
              </a>
            </div>
            <div className="flex items-center gap-6 ml-auto">
              <a href="tel:+27738847449" className="text-gray-400 hover:text-accent transition hidden sm:flex items-center gap-2">
                <span>📞</span><span>+27 73 884 7449</span>
              </a>
              <a href="mailto:info@malenglegacy.co.za" className="text-gray-400 hover:text-accent transition flex items-center gap-2">
                <span>✉️</span><span className="hidden sm:inline">info@malenglegacy.co.za</span>
              </a>
              <div className="flex items-center gap-1 text-gray-400">
                <span>🌍</span>
                <select className="bg-transparent text-gray-400 text-xs border-none outline-none cursor-pointer hover:text-accent">
                  <option>EN</option>
                  <option>ZU</option>
                  <option>AF</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      <header
        className={`sticky top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-primary/98 backdrop-blur-lg border-b border-white/10 shadow-2xl'
            : 'bg-primary/80 backdrop-blur'
        }`}
      >
        <div className="mx-auto px-6">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 cursor-pointer">
              <motion.div className="flex items-center gap-3" whileHover={{ scale: 1.02 }}>
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br from-accent to-gold transition-all shadow-lg ${isScrolled ? 'shadow-accent/30' : 'shadow-accent/50'}`}>
                  <span className="text-white font-bold text-xl">ML</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-xl text-white">
                    {isSubsidiary ? subsidiaryName : 'Maleng Legacy'}
                  </span>
                  <span className="text-sm text-gray-400 font-normal">
                    {isSubsidiary ? 'Part of Maleng Legacy Group' : 'Holdings (Pty) Ltd'}
                  </span>
                </div>
              </motion.div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              <Link
                href="/about"
                className={`px-4 py-2 text-base font-medium transition-colors cursor-pointer relative group rounded-lg ${
                  isActivePath('/about') ? 'bg-white/10 text-white' : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <span>About</span>
                <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-accent scale-x-0 transition-transform group-hover:scale-x-100"></span>
              </Link>

              {/* Services */}
              <div className="relative" onMouseEnter={() => { setServicesDropdownOpen(true); setPricingDropdownOpen(false); setPortfolioDropdownOpen(false); setGroupDropdownOpen(false); }}>
                <button className={`px-4 py-2 text-base font-medium transition-colors flex items-center gap-2 rounded-lg ${isActivePath('/services') ? 'bg-white/10 text-white' : 'text-gray-300 hover:text-white hover:bg-white/5'}`}>
                  Services
                  <svg className={`w-4 h-4 transition-transform ${servicesDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>

              {/* Pricing */}
              <div className="relative" onMouseEnter={() => { setPricingDropdownOpen(true); setServicesDropdownOpen(false); setPortfolioDropdownOpen(false); setGroupDropdownOpen(false); }}>
                <button className={`px-4 py-2 text-base font-medium transition-colors flex items-center gap-2 rounded-lg ${isActivePath('/pricing') ? 'bg-white/10 text-white' : 'text-gray-300 hover:text-white hover:bg-white/5'}`}>
                  Pricing
                  <svg className={`w-4 h-4 transition-transform ${pricingDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>

              {/* Portfolio */}
              <div className="relative" onMouseEnter={() => { setPortfolioDropdownOpen(true); setServicesDropdownOpen(false); setPricingDropdownOpen(false); setGroupDropdownOpen(false); }}>
                <button className={`px-4 py-2 text-base font-medium transition-colors flex items-center gap-2 rounded-lg ${isActivePath('/portfolio') ? 'bg-white/10 text-white' : 'text-gray-300 hover:text-white hover:bg-white/5'}`}>
                  Portfolio
                  <svg className={`w-4 h-4 transition-transform ${portfolioDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>

              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`px-4 py-2 text-base font-medium transition-colors cursor-pointer relative group rounded-lg ${
                    isActivePath(link.href) ? 'bg-white/10 text-white' : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span>{link.label}</span>
                  <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-accent scale-x-0 transition-transform group-hover:scale-x-100"></span>
                </Link>
              ))}

              {/* Our Group */}
              <div className="relative" onMouseEnter={() => { setGroupDropdownOpen(true); setServicesDropdownOpen(false); setPricingDropdownOpen(false); setPortfolioDropdownOpen(false); }}>
                <button className={`px-4 py-2 text-base font-medium transition-colors flex items-center gap-2 rounded-lg ${isActivePath('/subsidiaries') ? 'bg-white/10 text-white' : 'text-gray-300 hover:text-white hover:bg-white/5'}`}>
                  Our Group
                  <svg className={`w-4 h-4 transition-transform ${groupDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
            </nav>

            <div className="hidden lg:flex items-center gap-3">
              <motion.button onClick={() => setSearchOpen(!searchOpen)} className="p-2 text-gray-400 hover:text-accent transition rounded-lg hover:bg-white/5" whileHover={{ scale: 1.05 }}>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </motion.button>
              <Link href="/contact" className="px-8 py-3 bg-accent text-white font-bold rounded-lg hover:shadow-lg transition-all duration-300">
                Contact Us
              </Link>
            </div>

            <button className="lg:hidden text-white text-2xl p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? '✕' : '☰'}
            </button>
          </div>

          {/* Search */}
          <AnimatePresence>
            {searchOpen && (
              <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="hidden lg:block pb-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search our group companies, solutions, insights..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-accent/50 transition"
                    autoFocus
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Mobile Menu */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.nav initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="lg:hidden pb-4 space-y-1 border-t border-white/10 mt-2 pt-4">
                <Link href="/about" className="block text-sm text-gray-300 hover:text-accent hover:bg-white/5 py-2 px-3 rounded" onClick={() => setMobileMenuOpen(false)}>
                  About
                </Link>

                {/* Services */}
                <div className="pt-2">
                  <p className="text-xs text-gray-400 font-semibold mb-2 px-3">Services</p>
                  <div className="space-y-3">
                    {services?.categories?.map((category) => (
                      <div key={category.id}>
                        <Link href={`/services/${category.slug}`} className="block text-sm font-semibold text-white hover:text-accent py-1 px-3 rounded" onClick={() => setMobileMenuOpen(false)}>
                          {category.name}
                        </Link>
                        <div className="pl-3 space-y-1">
                          {category.services?.slice(0, 4).map((svc, i) => (
                            <Link
                              key={i}
                              href={svc.slug ? `/services/${category.slug}/${svc.slug}` : `/services/${category.slug}`}
                              className="block text-xs text-gray-400 hover:text-accent py-1 px-3 rounded"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {svc.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                    <Link href="/services" className="block text-sm text-accent font-semibold py-2 px-3" onClick={() => setMobileMenuOpen(false)}>
                      View All Services →
                    </Link>
                  </div>
                </div>

                {/* Pricing */}
                <div className="pt-3 border-t border-white/10 mt-3">
                  <p className="text-xs text-gray-400 font-semibold mb-2 px-3">Pricing</p>
                  <div className="space-y-3">
                    {services?.categories?.map((category) => (
                      <div key={category.id}>
                        <Link href={`/pricing/${category.slug}`} className="block text-sm font-semibold text-white hover:text-accent py-1 px-3 rounded" onClick={() => setMobileMenuOpen(false)}>
                          {category.name}
                        </Link>
                        <div className="pl-3 space-y-1">
                          {category.services?.slice(0, 4).map((svc, i) => (
                            <Link
                              key={i}
                              href={svc.slug ? `/pricing/${category.slug}/${svc.slug}` : `/pricing/${category.slug}`}
                              className="block text-xs text-gray-400 hover:text-accent py-1 px-3 rounded"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {svc.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                    <Link href="/pricing" className="block text-sm text-accent font-semibold py-2 px-3" onClick={() => setMobileMenuOpen(false)}>
                      View Full Pricing Catalog →
                    </Link>
                  </div>
                </div>

                {/* Portfolio — category based */}
                <div className="pt-3 border-t border-white/10 mt-3">
                  <p className="text-xs text-gray-400 font-semibold mb-2 px-3">Portfolio</p>
                  <div className="space-y-3">
                    {portfolioCategories.map((category) => {
                      const categoryProjects = portfolioProjects.filter((p) => p.category === category.id);
                      return (
                        <div key={category.id}>
                          <p className="text-sm font-semibold text-white py-1 px-3 flex items-center gap-2">
                            <span>{category.icon}</span>
                            {category.name}
                          </p>
                          <div className="pl-3 space-y-1">
                            {categoryProjects.slice(0, 3).map((project) => (
                              <Link
                                key={project.id}
                                href={`/portfolio/${project.slug}`}
                                className="block text-xs text-gray-400 hover:text-accent py-1 px-3 rounded"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {project.title}
                              </Link>
                            ))}
                          </div>
                        </div>
                      );
                    })}
                    <Link href="/portfolio" className="block text-sm text-accent font-semibold py-2 px-3" onClick={() => setMobileMenuOpen(false)}>
                      View Full Portfolio →
                    </Link>
                  </div>
                </div>

                {navLinks.map((link) => (
                  <Link key={link.label} href={link.href} className="block text-sm text-gray-300 hover:text-accent hover:bg-white/5 py-2 px-3 rounded" onClick={() => setMobileMenuOpen(false)}>
                    {link.label}
                  </Link>
                ))}

                {/* Our Group */}
                <div className="pt-3 border-t border-white/10 mt-3">
                  <p className="text-xs text-gray-400 font-semibold mb-2 px-3">Our Subsidiaries</p>
                  <div className="space-y-3">
                    {clusters.map((cluster) => (
                      <div key={cluster.id}>
                        <p className="text-sm font-semibold text-white py-1 px-3 flex items-center gap-2">
                          <span>{cluster.icon}</span>{cluster.name}
                        </p>
                        <div className="pl-3 space-y-1">
                          {cluster.subsidiaries.map((sub) => (
                            <Link key={sub.name} href={sub.url} className="flex items-center justify-between text-xs text-gray-400 hover:text-accent py-1 px-3 rounded" onClick={() => setMobileMenuOpen(false)}>
                              <span>{sub.name}</span>
                              <span className="text-[10px] text-accent/80">{sub.price}</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <Link href="/contact" className="block btn-primary w-full text-sm mt-4 text-center" onClick={() => setMobileMenuOpen(false)}>
                  Contact Us
                </Link>
              </motion.nav>
            )}
          </AnimatePresence>
        </div>

        {/* ===================== DESKTOP MEGA MENUS ===================== */}

        {/* Services Mega Menu */}
        <AnimatePresence>
          {servicesDropdownOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.18 }}
              className="hidden lg:block absolute top-full left-0 right-0 bg-surface backdrop-blur-xl border-b border-white/10 shadow-2xl"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <div className="mx-auto px-6 py-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-sm font-bold text-white">Our Services</h3>
                  <span className="text-xs text-accent">{categoryCount} Categories</span>
                </div>
                <div className="grid gap-8" style={{ gridTemplateColumns: `repeat(${Math.max(categoryCount, 1)}, minmax(0, 1fr))` }}>
                  {services?.categories?.map((category) => {
                    const categoryHref = `/services/${category.slug}`;
                    const categoryActive = isActivePath(categoryHref);
                    return (
                      <div key={category.id} className={categoryActive ? 'rounded-lg bg-highlight/5 -m-2 p-2' : ''}>
                        <Link href={categoryHref} className={`block text-sm font-semibold transition mb-3 pb-2 border-b ${categoryActive ? 'text-highlight border-highlight/30' : 'text-white hover:text-accent border-white/10'}`}>
                          {category.name}
                        </Link>
                        <div className="space-y-2">
                          {category.services?.map((svc, i) => {
                            const href = svc.slug ? `/services/${category.slug}/${svc.slug}` : `/services/${category.slug}`;
                            const svcActive = isExactPath(href);
                            return (
                              <Link key={i} href={href} className={`block text-xs px-2 -mx-2 py-0.5 rounded transition ${svcActive ? 'bg-highlight/10 text-highlight font-medium' : 'text-gray-400 hover:text-accent'}`}>
                                {svc.name}
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="mt-8 pt-4 border-t border-white/10 flex justify-between items-center">
                  <Link href="/services" className="text-xs text-accent hover:text-accent/80 flex items-center gap-2 font-medium">View All Services <span>→</span></Link>
                  <Link href="/pricing" className="text-xs text-accent hover:text-accent/80 flex items-center gap-2 font-medium">See Pricing Per Service <span>→</span></Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Pricing Mega Menu */}
        <AnimatePresence>
          {pricingDropdownOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.18 }}
              className="hidden lg:block absolute top-full left-0 right-0 bg-surface backdrop-blur-xl border-b border-white/10 shadow-2xl"
              onMouseEnter={() => setPricingDropdownOpen(true)}
              onMouseLeave={() => setPricingDropdownOpen(false)}
            >
              <div className="mx-auto px-6 py-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-sm font-bold text-white">Pricing by Service</h3>
                  <span className="text-xs text-accent">{totalServiceCount} Services · {categoryCount} Categories</span>
                </div>
                <div className="grid gap-8" style={{ gridTemplateColumns: `repeat(${Math.max(categoryCount, 1)}, minmax(0, 1fr))` }}>
                  {services?.categories?.map((category) => {
                    const categoryHref = `/pricing/${category.slug}`;
                    const categoryActive = isActivePath(categoryHref);
                    return (
                      <div key={category.id} className={categoryActive ? 'rounded-lg bg-highlight/5 -m-2 p-2' : ''}>
                        <Link href={categoryHref} className={`block text-sm font-semibold transition mb-3 pb-2 border-b ${categoryActive ? 'text-highlight border-highlight/30' : 'text-white hover:text-accent border-white/10'}`}>
                          {category.name}
                        </Link>
                        <div className="space-y-2">
                          {category.services?.map((svc, i) => {
                            const href = svc.slug ? `/pricing/${category.slug}/${svc.slug}` : `/pricing/${category.slug}`;
                            const svcActive = isExactPath(href);
                            return (
                              <Link key={i} href={href} className={`block text-xs px-2 -mx-2 py-0.5 rounded transition ${svcActive ? 'bg-highlight/10 text-highlight font-medium' : 'text-gray-400 hover:text-accent'}`}>
                                {svc.name}
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="mt-8 pt-4 border-t border-white/10 flex justify-between items-center">
                  <Link href="/pricing" className="text-xs text-accent hover:text-accent/80 flex items-center gap-2 font-medium">View Full Pricing Catalog <span>→</span></Link>
                  <Link href="/contact" className="text-xs text-accent hover:text-accent/80 flex items-center gap-2 font-medium">Talk to Sales <span>→</span></Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Portfolio Mega Menu — category based (same style as Services & Pricing) */}
        <AnimatePresence>
          {portfolioDropdownOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.18 }}
              className="hidden lg:block absolute top-full left-0 right-0 bg-surface backdrop-blur-xl border-b border-white/10 shadow-2xl"
              onMouseEnter={() => setPortfolioDropdownOpen(true)}
              onMouseLeave={() => setPortfolioDropdownOpen(false)}
            >
              <div className="mx-auto px-6 py-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-sm font-bold text-white">Our Portfolio</h3>
                  <span className="text-xs text-accent">
                    {portfolioProjectCount} Projects · {portfolioCategoryCount} Categories
                  </span>
                </div>

                <div
                  className="grid gap-8"
                  style={{ gridTemplateColumns: `repeat(${Math.max(portfolioCategoryCount, 1)}, minmax(0, 1fr))` }}
                >
                  {portfolioCategories.map((category) => {
                    const categoryProjects = portfolioProjects.filter((p) => p.category === category.id);
                    return (
                      <div key={category.id}>
                        <p className="flex items-center gap-2 text-sm font-semibold text-white mb-3 pb-2 border-b border-white/10">
                          <span>{category.icon}</span>
                          {category.name}
                        </p>
                        <div className="space-y-2">
                          {categoryProjects.map((project) => {
                            const href = `/portfolio/${project.slug}`;
                            const projectActive = isExactPath(href);
                            return (
                              <Link
                                key={project.id}
                                href={href}
                                className={`block text-xs px-2 -mx-2 py-0.5 rounded transition ${
                                  projectActive
                                    ? 'bg-highlight/10 text-highlight font-medium'
                                    : 'text-gray-400 hover:text-accent'
                                }`}
                              >
                                {project.title}
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-8 pt-4 border-t border-white/10 flex justify-between items-center">
                  <Link href="/portfolio" className="text-xs text-accent hover:text-accent/80 flex items-center gap-2 font-medium">
                    View Full Portfolio <span>→</span>
                  </Link>
                  <Link href="/contact" className="text-xs text-accent hover:text-accent/80 flex items-center gap-2 font-medium">
                    Discuss a Project <span>→</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Our Group Mega Menu */}
        <AnimatePresence>
          {groupDropdownOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.18 }}
              className="hidden lg:block absolute top-full left-0 right-0 bg-surface backdrop-blur-xl border-b border-white/10 shadow-2xl"
              onMouseEnter={() => setGroupDropdownOpen(true)}
              onMouseLeave={() => setGroupDropdownOpen(false)}
            >
              <div className="mx-auto px-6 py-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-sm font-bold text-white">The 4-Cluster Model</h3>
                  <span className="text-xs text-accent">{totalSubsidiaries}+ Subsidiaries · 4 Clusters</span>
                </div>
                <div className="grid grid-cols-4 gap-8">
                  {clusters.map((cluster) => (
                    <div key={cluster.id}>
                      <p className="flex items-center gap-2 text-sm font-semibold text-white mb-3 pb-2 border-b border-white/10">
                        <span>{cluster.icon}</span>{cluster.name}
                      </p>
                      <div className="space-y-3">
                        {cluster.subsidiaries.map((sub) => {
                          const subActive = isActivePath(sub.url);
                          return (
                            <Link key={sub.name} href={sub.url} className={`block group rounded px-2 -mx-2 py-1 transition ${subActive ? 'bg-highlight/10' : ''}`}>
                              <p className={`text-xs font-semibold transition ${subActive ? 'text-highlight' : 'text-gray-300 group-hover:text-accent'}`}>{sub.name}</p>
                              <p className="text-[11px] text-gray-500 mt-0.5 leading-snug">{sub.focus}</p>
                              <span className="inline-block mt-1 text-[10px] text-accent bg-accent/10 rounded px-1.5 py-0.5">{sub.price}</span>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-8 pt-4 border-t border-white/10 flex justify-between items-center">
                  <Link href="/about#group-structure" className="text-xs text-accent hover:text-accent/80 flex items-center gap-2 font-medium">
                    Explore The Full Group Structure <span>→</span>
                  </Link>
                  <Link href="/portfolio" className="text-xs text-accent hover:text-accent/80 flex items-center gap-2 font-medium">
                    View Our Portfolio <span>→</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Header;
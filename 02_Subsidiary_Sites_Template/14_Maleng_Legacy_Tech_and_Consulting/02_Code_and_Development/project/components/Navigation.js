import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import services from '../data/services.json';

const Header = ({ isSubsidiary = false, subsidiaryName = '', subsidiaryUrl = '' }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [groupDropdownOpen, setGroupDropdownOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const subsidiaries = [
    { name: 'Property Development', url: '/subsidiaries/property', cluster: 'Infrastructure', icon: '🏢' },
    { name: 'Tech & Consulting', url: '/subsidiaries/tech', cluster: 'Professional Services', icon: '💻' },
    { name: 'Events & Experiences', url: '/subsidiaries/events', cluster: 'Lifestyle', icon: '🎯' },
    { name: 'Catering Services', url: '/subsidiaries/catering', cluster: 'Lifestyle', icon: '🍽️' },
    { name: 'Security & Logistics', url: '/subsidiaries/security', cluster: 'Protection', icon: '🔒' },
    { name: 'Corporate Services', url: '/subsidiaries/corporate', cluster: 'Professional Services', icon: '📋' },
  ];

  const navLinks = [
    { label: 'About', href: '/about' },
    { label: 'Leadership', href: '/leadership' },
    { label: 'Investor Relations', href: '/resources' },
    { label: 'Careers', href: '/careers' },
    { label: 'Insights', href: '/blog' },
  ];

  return (
    <>
      {/* Utility Bar */}
      <div className="bg-secondary/50 backdrop-blur border-b border-white/5">
        <div className="mx-auto px-6">
          <div className="flex justify-between items-center h-12 text-base">
            <div className="hidden md:flex items-center gap-6">
              <a href="#investor-portal" className="text-gray-400 hover:text-accent transition flex items-center gap-1">
                <span>📊</span>
                <span>Investor Portal</span>
              </a>
              <a href="#media" className="text-gray-400 hover:text-accent transition flex items-center gap-1">
                <span>📰</span>
                <span>Media Room</span>
              </a>
              <a href="#partners" className="text-gray-400 hover:text-accent transition flex items-center gap-1">
                <span>🤝</span>
                <span>Partner Login</span>
              </a>
            </div>

            <div className="flex items-center gap-6 ml-auto">
              <a href="tel:+27738847449" className="text-gray-400 hover:text-accent transition hidden sm:flex items-center gap-2">
                <span>📞</span>
                <span>+27 73 884 7449</span>
              </a>
              <a href="mailto:info@malenglegacy.co.za" className="text-gray-400 hover:text-accent transition flex items-center gap-2">
                <span>✉️</span>
                <span className="hidden sm:inline">info@malenglegacy.co.za</span>
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
            <Link href="/" className="flex items-center gap-3 cursor-pointer">
              <motion.div
                className="flex items-center gap-3"
                whileHover={{ scale: 1.02 }}
              >
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

            <nav className="hidden lg:flex items-center gap-1">
              {/* About link */}
              <Link href="/about" className="px-4 py-2 text-base font-medium text-gray-300 hover:text-white transition-colors cursor-pointer relative group rounded-lg hover:bg-white/5">
                <span>About</span>
                <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-accent scale-x-0 transition-transform group-hover:scale-x-100"></span>
              </Link>

              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setServicesDropdownOpen(true)}
                onMouseLeave={() => setServicesDropdownOpen(false)}
              >
                <button className="px-4 py-2 text-base font-medium text-gray-300 hover:text-white transition-colors flex items-center gap-2 rounded-lg hover:bg-white/5">
                  Services
                  <svg className={`w-4 h-4 transition-transform ${servicesDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                <AnimatePresence>
                  {servicesDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 mt-2 w-80 bg-surface/98 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl overflow-hidden"
                    >
                      <div className="p-4">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-sm font-bold text-white">Our Services</h3>
                          <span className="text-xs text-accent">{services.categories.length} Categories</span>
                        </div>
                        <div className="space-y-2">
                          {services.categories.map((category) => (
                            <Link 
                              key={category.id} 
                              href={`/services/${category.slug}`}
                              className="block p-3 rounded-lg bg-white/5 hover:bg-accent/10 cursor-pointer transition border border-transparent hover:border-accent/30 group"
                            >
                              <p className="text-sm font-semibold text-white group-hover:text-accent transition">
                                {category.name}
                              </p>
                              <p className="text-xs text-gray-400 mt-1">{category.services.length} services</p>
                            </Link>
                          ))}
                        </div>
                        <div className="mt-4 pt-4 border-t border-white/10">
                          <Link href="/services" className="text-xs text-accent hover:text-accent/80 cursor-pointer flex items-center gap-2 font-medium">
                            View All Services & Pricing
                            <span>→</span>
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Remaining nav links */}
              {navLinks.slice(1).map((link) => (
                <Link 
                  key={link.label} 
                  href={link.href}
                  className="px-4 py-2 text-base font-medium text-gray-300 hover:text-white transition-colors cursor-pointer relative group rounded-lg hover:bg-white/5"
                >
                  <span>{link.label}</span>
                  <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-accent scale-x-0 transition-transform group-hover:scale-x-100"></span>
                </Link>
              ))}

              {/* Our Group Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setGroupDropdownOpen(true)}
                onMouseLeave={() => setGroupDropdownOpen(false)}
              >
                <button className="px-4 py-2 text-base font-medium text-gray-300 hover:text-white transition-colors flex items-center gap-2 rounded-lg hover:bg-white/5">
                  Our Group
                  <svg className={`w-4 h-4 transition-transform ${groupDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                <AnimatePresence>
                  {groupDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full right-0 mt-2 w-96 bg-surface/98 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl overflow-hidden"
                    >
                      <div className="p-4">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-sm font-bold text-white">Our Subsidiaries</h3>
                          <span className="text-xs text-accent">{subsidiaries.length} Companies</span>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                          {subsidiaries.map((sub) => (
                            <Link 
                              key={sub.name} 
                              href={sub.url}
                              className="p-3 rounded-lg bg-white/5 hover:bg-accent/10 cursor-pointer transition border border-transparent hover:border-accent/30 group"
                            >
                              <div className="text-2xl mb-2">{sub.icon}</div>
                              <p className="text-sm font-semibold text-white group-hover:text-accent transition">
                                {sub.name}
                              </p>
                              <p className="text-xs text-gray-400 mt-1">{sub.cluster}</p>
                            </Link>
                          ))}
                        </div>
                        <div className="mt-4 pt-4 border-t border-white/10 flex justify-between items-center">
                          <Link href="#subsidiaries" className="text-xs text-accent hover:text-accent/80 cursor-pointer flex items-center gap-2 font-medium">
                            Explore All Subsidiaries
                            <span>→</span>
                          </Link>
                          <span className="text-xs text-gray-500">4 Clusters</span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </nav>

            <div className="hidden lg:flex items-center gap-3">
              <motion.button
                onClick={() => setSearchOpen(!searchOpen)}
                className="p-2 text-gray-400 hover:text-accent transition rounded-lg hover:bg-white/5"
                whileHover={{ scale: 1.05 }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </motion.button>

              <Link
                href="/contact"
                className="px-8 py-3 bg-accent text-white font-bold rounded-lg hover:shadow-lg transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>

            <button
              className="lg:hidden text-white text-2xl p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? '✕' : '☰'}
            </button>
          </div>

          <AnimatePresence>
            {searchOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="hidden lg:block pb-4"
              >
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search our group companies, solutions, insights..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-accent/50 transition"
                    autoFocus
                  />
                  <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.nav
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="lg:hidden pb-4 space-y-1 border-t border-white/10 mt-2 pt-4"
              >
                {/* About - first */}
                <Link 
                  href="/about"
                  className="block text-sm text-gray-300 hover:text-accent hover:bg-white/5 py-2 px-3 rounded cursor-pointer transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </Link>

                {/* Services section */}
                <div className="pt-2">
                  <p className="text-xs text-gray-400 font-semibold mb-2 px-3">Services</p>
                  <div className="space-y-1">
                    {services.categories.map((category) => (
                      <Link 
                        key={category.id} 
                        href={`/services/${category.slug}`}
                        className="block text-sm text-gray-300 hover:text-accent hover:bg-white/5 py-2 px-3 rounded cursor-pointer transition"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {category.name}
                      </Link>
                    ))}
                    <Link 
                      href="/services"
                      className="block text-sm text-accent font-semibold hover:text-accent/80 py-2 px-3 rounded cursor-pointer transition"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      View All Services →
                    </Link>
                  </div>
                </div>

                {/* Remaining nav links */}
                {navLinks.slice(1).map((link) => (
                  <Link 
                    key={link.label} 
                    href={link.href}
                    className="block text-sm text-gray-300 hover:text-accent hover:bg-white/5 py-2 px-3 rounded cursor-pointer transition"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}

                {/* Our Group section */}
                <div className="pt-3 border-t border-white/10 mt-3">
                  <p className="text-xs text-gray-400 font-semibold mb-2 px-3">Our Subsidiaries</p>
                  <div className="grid grid-cols-2 gap-2">
                    {subsidiaries.map((sub) => (
                      <Link 
                        key={sub.name} 
                        href={sub.url}
                        className="text-sm text-gray-300 hover:text-accent hover:bg-white/5 py-2 px-3 rounded cursor-pointer transition"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <span className="mr-2">{sub.icon}</span>
                        {sub.name.split(' ')[0]}
                      </Link>
                    ))}
                  </div>
                </div>

                <Link 
                  href="/contact"
                  className="block btn-primary w-full text-sm mt-4 text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact Us
                </Link>
              </motion.nav>
            )}
          </AnimatePresence>
        </div>
      </header>
    </>
  );
};

export default Header;
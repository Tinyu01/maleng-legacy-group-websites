import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Footer = ({ isSubsidiary = false }) => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: 'About', href: '#about' },
    { label: 'Solutions', href: '#solutions' },
    { label: 'Careers', href: '#careers' },
    { label: 'Privacy Policy', href: '/privacy' },
  ];

  const socialLinks = [
    { icon: 'LinkedIn', url: 'https://linkedin.com/company/maleng-legacy-group' },
    { icon: 'Twitter', url: 'https://twitter.com/malenglegacy' },
    { icon: 'Facebook', url: 'https://facebook.com/malenglegacy' },
  ];

  return (
    <footer className="bg-primary/50 backdrop-blur border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
            <h3 className="text-lg font-bold gradient-text mb-4">Maleng Legacy Group</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Building sustainable economic legacies through diversified solutions across key sectors.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.1 }}>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href}>
                    <span className="text-sm text-gray-400 hover:text-accent transition-colors cursor-pointer">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }}>
            <h4 className="font-semibold mb-4">Our Clusters</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="hover:text-accent cursor-pointer transition">Infrastructure & Built Environment</li>
              <li className="hover:text-accent cursor-pointer transition">Professional & Capital Services</li>
              <li className="hover:text-accent cursor-pointer transition">Protection & Operations</li>
              <li className="hover:text-accent cursor-pointer transition">Agri-Consumer & Lifestyle</li>
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3 }}>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="mailto:info@malenglegacy.co.za" className="hover:text-accent transition">
                  info@malenglegacy.co.za
                </a>
              </li>
              <li>
                <a href="mailto:investors@malenglegacy.co.za" className="hover:text-accent transition">
                  investors@malenglegacy.co.za
                </a>
              </li>
              <li className="pt-2">Gauteng, South Africa</li>
            </ul>
          </motion.div>
        </div>

        <div className="border-t border-white/10 my-8"></div>

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400 mb-4 md:mb-0">
            &copy; {currentYear} Maleng Legacy Group Holdings (Pty) Ltd. All rights reserved.
          </p>
          <div className="flex gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.icon}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-accent transition-colors text-sm font-medium"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <p className="text-xs text-gray-500 mt-8 text-center">
          This website contains confidential investment information. Unauthorized access is prohibited.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

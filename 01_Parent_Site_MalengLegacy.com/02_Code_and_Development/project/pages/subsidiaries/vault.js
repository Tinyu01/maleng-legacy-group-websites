import Head from 'next/head';
import Header from '../../components/Navigation';
import Footer from '../../components/Footer';
import ParallaxSection from '../../components/ParallaxSection';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function TheVaultPage() {
  const assetCategories = [
    {
      icon: '🏢',
      title: 'Land & Property',
      description: 'Strategic property holdings across key economic zones',
      assets: ['Commercial Properties', 'Industrial Land', 'Residential Developments', 'Vacant Land Holdings'],
      value: 'R180M+'
    },
    {
      icon: '🚗',
      title: 'Fleet & Vehicles',
      description: 'Comprehensive vehicle fleet for operational subsidiaries',
      assets: ['Executive Vehicles', 'Commercial Fleet', 'Delivery Vehicles', 'Specialized Transport'],
      value: 'R45M+'
    },
    {
      icon: '⚙️',
      title: 'Machinery & Equipment',
      description: 'Industrial and specialized equipment portfolio',
      assets: ['Construction Equipment', 'Manufacturing Machinery', 'Office Equipment', 'IT Hardware'],
      value: 'R85M+'
    },
    {
      icon: '💻',
      title: 'IT Infrastructure',
      description: 'Enterprise technology assets and digital infrastructure',
      assets: ['Server Infrastructure', 'Network Equipment', 'Software Licenses', 'Cloud Resources'],
      value: 'R30M+'
    }
  ];

  const benefits = [
    {
      icon: '🛡️',
      title: 'Legal Protection',
      description: 'Assets ringfenced in secure holding structure, protected from operational liabilities',
      highlight: 'Asset Security'
    },
    {
      icon: '📊',
      title: 'Centralized Management',
      description: 'Single entity managing all group assets with professional oversight and maintenance',
      highlight: 'Efficiency'
    },
    {
      icon: '💰',
      title: 'Lease Revenue',
      description: 'Assets leased back to operating subsidiaries, generating consistent revenue stream',
      highlight: 'Income Generation'
    },
    {
      icon: '📈',
      title: 'Capital Appreciation',
      description: 'Strategic asset acquisitions focused on long-term value growth',
      highlight: 'Wealth Building'
    }
  ];

  return (
    <>
      <Head>
        <title>The Vault - Maleng Legacy Assets (Pty) Ltd | Asset Holdings & Management</title>
        <meta name="description" content="Secure asset holding company managing land, vehicles, machinery, and IT infrastructure for Maleng Legacy Group subsidiaries." />
        <meta name="keywords" content="asset holding company, property holdings, fleet management, asset protection, South Africa" />
      </Head>

      <Header isSubsidiary={true} subsidiaryName="The Vault - Assets" />

      <main>
        {/* Hero Section */}
        <section className="relative h-screen overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-black opacity-90"></div>
            <div 
              className="absolute inset-0 bg-cover bg-center bg-fixed"
              style={{
                backgroundImage: 'url("https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920")',
                backgroundAttachment: 'fixed'
              }}
            />
          </div>
          <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="inline-block px-4 py-2 bg-gray-700 border border-gray-500 rounded-full mb-6">
                <span className="text-gray-300 font-bold text-sm">🔒 ASSET HOLDING COMPANY</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="text-gray-400">THE VAULT</span>
                <br />
                <span className="text-white">Maleng Legacy Assets (Pty) Ltd</span>
              </h1>
              <p className="text-2xl text-gray-300 mb-8">
                Securing and managing all land, vehicles, machinery, and IT infrastructure for the Maleng Legacy Group
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="btn-outline">
                  Asset Inquiries
                </Link>
                <a href="#portfolio" className="btn-secondary">
                  View Holdings
                </a>
              </div>
            </motion.div>
          </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 bg-gradient-to-r from-gray-800 to-gray-900">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-4xl font-bold text-gray-300 mb-2">R340M+</div>
                <div className="text-sm text-gray-400">Total Asset Value</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-gray-300 mb-2">12</div>
                <div className="text-sm text-gray-400">Property Holdings</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-gray-300 mb-2">85+</div>
                <div className="text-sm text-gray-400">Fleet Vehicles</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-gray-300 mb-2">100%</div>
                <div className="text-sm text-gray-400">Asset Protection</div>
              </div>
            </div>
          </div>
        </section>

        <ParallaxSection backgroundImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920" backgroundColor="bg-gray-900/95">
        <section id="portfolio" className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Asset Portfolio</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive holdings across four strategic asset categories
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {assetCategories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="card group hover:border-gray-600 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="text-5xl group-hover:scale-110 transition-transform">
                      {category.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2 group-hover:text-gray-300 transition-colors">
                        {category.title}
                      </h3>
                      <p className="text-gray-400 mb-4">{category.description}</p>
                      <ul className="space-y-2 mb-4">
                        {category.assets.map((asset, idx) => (
                          <li key={idx} className="text-sm text-gray-300 flex items-center gap-2">
                            <span className="text-gray-500">●</span>
                            {asset}
                          </li>
                        ))}
                      </ul>
                      <div className="inline-block px-3 py-1 bg-gray-800 border border-gray-700 rounded-full">
                        <span className="text-gray-300 text-sm font-bold">{category.value}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        </ParallaxSection>

        {/* Benefits */}
        <section className="py-24 bg-gradient-to-b from-gray-900/50 to-transparent">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Why The Vault Structure?</h2>
              <p className="text-xl text-gray-300">Strategic advantages of centralized asset holding</p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="card text-center hover:border-gray-600 transition-all"
                >
                  <div className="text-5xl mb-4">{benefit.icon}</div>
                  <div className="inline-block px-3 py-1 bg-gray-800 border border-gray-700 rounded-full mb-3">
                    <span className="text-gray-300 text-xs font-bold">{benefit.highlight}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-gray-400">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-24">
          <div className="max-w-5xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="card border-gray-700"
            >
              <h2 className="text-3xl font-bold mb-6 text-center">How The Vault Works</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center font-bold text-gray-300 shrink-0">1</div>
                  <div>
                    <h3 className="font-bold mb-1">Asset Acquisition</h3>
                    <p className="text-gray-400 text-sm">The Vault purchases and owns all major assets (land, vehicles, equipment, IT infrastructure)</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center font-bold text-gray-300 shrink-0">2</div>
                  <div>
                    <h3 className="font-bold mb-1">Lease Agreements</h3>
                    <p className="text-gray-400 text-sm">Assets are leased to operating subsidiaries under formal agreements with market-related rates</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center font-bold text-gray-300 shrink-0">3</div>
                  <div>
                    <h3 className="font-bold mb-1">Asset Management</h3>
                    <p className="text-gray-400 text-sm">Professional maintenance, insurance, and tracking ensure assets remain in optimal condition</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center font-bold text-gray-300 shrink-0">4</div>
                  <div>
                    <h3 className="font-bold mb-1">Legal Protection</h3>
                    <p className="text-gray-400 text-sm">Assets ringfenced from operational risks, litigation, or creditor claims against subsidiaries</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Video Section */}
        <section className="py-24 bg-gradient-to-b from-gray-900/50 to-transparent">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                The Vault <span className="text-gray-400">Overview</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Discover how we protect and grow your asset portfolio
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-black flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🔒</div>
                  <p className="text-lg text-gray-300">Asset Management Overview</p>
                  <p className="text-sm text-gray-400 mt-2">Coming Soon</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="card border-gray-700 text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Asset Inquiries
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                For information about asset leasing, acquisitions, or partnerships
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="mailto:assets@malenglegacy.co.za" className="btn-outline">
                  assets@malenglegacy.co.za
                </a>
                <a href="tel:+27738847449" className="btn-secondary">
                  +27 73 884 7449
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

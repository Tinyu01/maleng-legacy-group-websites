import Head from 'next/head';
import Header from '../../components/Navigation';
import Footer from '../../components/Footer';
import ParallaxSection from '../../components/ParallaxSection';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function CorporateServicesPage() {
  const whyChooseUs = [
    {
      icon: '⚡',
      title: 'Fast Registration',
      description: '24-48 hour company registration with all required CIPC documentation',
      stat: '24-48hr Turnaround'
    },
    {
      icon: '💯',
      title: 'CIPC Experts',
      description: 'Experienced team with 500+ successful company registrations',
      stat: '500+ Companies'
    },
    {
      icon: '🛡️',
      title: 'Compliance Assured',
      description: '100% CIPC and regulatory compliance with all registrations',
      stat: '100% Compliant'
    },
    {
      icon: '💰',
      title: 'Affordable Packages',
      description: 'Transparent pricing starting from R4,500 with no hidden fees',
      stat: 'From R4.5K'
    }
  ];

  const testimonials = [
    {
      quote: "Company registration was seamless. Within 48 hours, I had all my documents and was ready to trade. Highly professional service.",
      author: "Sipho Mahlangu",
      role: "Entrepreneur",
      company: "Tech Startup"
    },
    {
      quote: "The Business Package gave us everything we needed - registration, B-BBEE, and ongoing compliance support. Great value.",
      author: "Linda Naidoo",
      role: "Director",
      company: "Consulting Firm"
    },
    {
      quote: "Their secretarial services keep us compliant and organized. The team is responsive and knowledgeable about CIPC requirements.",
      author: "Andrew Botha",
      role: "CFO",
      company: "Property Development Company"
    }
  ];

  const services = [
    {
      icon: '📋',
      title: 'CIPC Registration',
      description: 'Company registration, amendments, and compliance with CIPC requirements',
      features: ['New Company Registration', 'Name Reservations', 'Annual Returns', 'Director Changes'],
      turnaround: '24-48 hours'
    },
    {
      icon: '⚖️',
      title: 'Compliance Services',
      description: 'Ongoing corporate compliance and regulatory adherence',
      features: ['B-BBEE Compliance', 'Tax Compliance', 'Labour Law Compliance', 'Industry-Specific Licensing'],
      turnaround: 'Ongoing'
    },
    {
      icon: '📄',
      title: 'Secretarial Services',
      description: 'Professional company secretarial and governance support',
      features: ['Board Meeting Minutes', 'Share Certificates', 'Resolution Drafting', 'Statutory Records'],
      turnaround: '48 hours'
    },
    {
      icon: '🏢',
      title: 'Shelf Companies',
      description: 'Pre-registered companies ready for immediate acquisition',
      features: ['Clean History', 'B-BBEE Compliant Options', 'Quick Transfer', 'Full Documentation'],
      turnaround: 'Same Day'
    },
    {
      icon: '💼',
      title: 'Business Structuring',
      description: 'Strategic advice on optimal business structures and ownership',
      features: ['Entity Selection', 'Tax Optimization', 'Shareholder Agreements', 'Trust Structures'],
      turnaround: '1-2 weeks'
    },
    {
      icon: '🔄',
      title: 'Conversions & Amendments',
      description: 'Company conversions, mergers, and structural changes',
      features: ['CC to Pty Conversion', 'Company Mergers', 'MOI Amendments', 'Share Transfers'],
      turnaround: '3-5 days'
    }
  ];

  const packages = [
    {
      name: 'Startup Package',
      price: 'R 4,500',
      ideal: 'New entrepreneurs',
      includes: ['Company Registration', 'Basic MOI', 'CIPC Certificates', 'Tax Registration', 'First Year Returns'],
      cta: 'Get Started'
    },
    {
      name: 'Business Package',
      price: 'R 12,500',
      ideal: 'Growing businesses',
      popular: true,
      includes: ['All Startup Features', 'B-BBEE Registration', 'Secretarial Services (12 months)', 'Shareholder Agreement', 'Compliance Calendar'],
      cta: 'Most Popular'
    },
    {
      name: 'Enterprise Package',
      price: 'R 35,000',
      ideal: 'Established companies',
      includes: ['All Business Features', 'Trust Structure Setup', 'Complex Shareholding', 'Ongoing Legal Support', 'Priority Service'],
      cta: 'Contact Us'
    }
  ];

  return (
    <>
      <Head>
        <title>Maleng Legacy Corporate Services | CIPC Registration, Compliance & Secretarial</title>
        <meta name="description" content="Professional CIPC registration, compliance services, company secretarial support, and shelf companies for entrepreneurs and businesses." />
        <meta name="keywords" content="CIPC registration, company registration South Africa, compliance services, shelf companies, secretarial services" />
      </Head>

      <Header isSubsidiary={true} subsidiaryName="Corporate Services" />

      <main>
        {/* Hero Section */}
        <section className="relative h-screen overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary via-primary to-secondary opacity-90"></div>
            <div 
              className="absolute inset-0 bg-cover bg-center bg-fixed"
              style={{
                backgroundImage: 'url("https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1920")',
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
              <div className="inline-block px-4 py-2 bg-accent/10 border border-accent/30 rounded-full mb-6">
                <span className="text-accent font-bold text-sm">💼 PROFESSIONAL SERVICES</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Maleng Legacy <span className="gradient-text">Corporate Services</span>
              </h1>
              <p className="text-2xl text-gray-300 mb-8">
                Your trusted partner for CIPC registration, compliance, secretarial services, and shelf companies
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="btn-primary">
                  Register Your Company
                </Link>
                <a href="#packages" className="btn-secondary">
                  View Packages
                </a>
              </div>
            </motion.div>
          </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 bg-gradient-to-r from-secondary to-primary">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-4xl font-bold gradient-text mb-2">500+</div>
                <div className="text-sm text-gray-300">Companies Registered</div>
              </div>
              <div>
                <div className="text-4xl font-bold gradient-text mb-2">24hr</div>
                <div className="text-sm text-gray-300">Average Turnaround</div>
              </div>
              <div>
                <div className="text-4xl font-bold gradient-text mb-2">100%</div>
                <div className="text-sm text-gray-300">CIPC Compliance</div>
              </div>
              <div>
                <div className="text-4xl font-bold gradient-text mb-2">R4.5K</div>
                <div className="text-sm text-gray-300">Starting From</div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-24 bg-gradient-to-b from-primary/20 to-transparent">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Why Choose <span className="gradient-text">Maleng Corporate</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Your trusted partner for company registration and compliance
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyChooseUs.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="card group hover:border-accent/50 transition-all text-center"
                >
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 mb-4 text-sm">{item.description}</p>
                  <div className="inline-block px-3 py-1 bg-accent/10 border border-accent/30 rounded-full">
                    <span className="text-accent text-xs font-semibold">{item.stat}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive corporate services for entrepreneurs, startups, and established businesses
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="card group hover:border-accent/50 transition-all"
                >
                  <div className="flex items-start gap-3 mb-4">
                    <div className="text-4xl group-hover:scale-110 transition-transform">
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-1 group-hover:text-accent transition-colors">
                        {service.title}
                      </h3>
                      <div className="inline-block px-2 py-1 bg-accent/10 border border-accent/30 rounded text-accent text-xs font-bold mb-2">
                        {service.turnaround}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-400 mb-4 text-sm">{service.description}</p>
                  <ul className="space-y-1">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-300 flex items-center gap-2">
                        <span className="text-accent">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <ParallaxSection backgroundImage="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920" backgroundColor="bg-secondary/90">
        <section id="packages" className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Pricing Packages</h2>
              <p className="text-xl text-gray-300">Transparent pricing for every business stage</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {packages.map((pkg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`card hover:border-accent/50 transition-all ${pkg.popular ? 'border-accent/30 ring-2 ring-accent/20' : ''}`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="px-4 py-1 bg-accent rounded-full">
                        <span className="text-white text-xs font-bold">MOST POPULAR</span>
                      </div>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                    <div className="text-4xl font-bold gradient-text mb-2">{pkg.price}</div>
                    <div className="text-sm text-gray-400">{pkg.ideal}</div>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {pkg.includes.map((item, idx) => (
                      <li key={idx} className="text-sm text-gray-300 flex items-start gap-2">
                        <span className="text-accent mt-1">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className={pkg.popular ? 'btn-primary w-full block text-center' : 'btn-secondary w-full block text-center'}>
                    {pkg.cta}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        </ParallaxSection>

        {/* Client Testimonials */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">What Our Clients Say</h2>
              <p className="text-xl text-gray-300">Real feedback from entrepreneurs and businesses</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="card hover:border-accent/30 transition-all"
                >
                  <div className="mb-4 text-accent text-4xl">"</div>
                  <p className="text-gray-300 mb-6 italic leading-relaxed">
                    {item.quote}
                  </p>
                  <div className="border-t border-gray-700 pt-4">
                    <div className="font-bold text-white">{item.author}</div>
                    <div className="text-sm text-gray-400">{item.role}</div>
                    <div className="text-xs text-accent mt-1">{item.company}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section className="py-24 bg-gradient-to-b from-primary/20 to-transparent">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Company Registration <span className="gradient-text">Made Simple</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                See how easy it is to register your company with our streamlined process
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">💼</div>
                  <p className="text-lg text-white">Step-by-Step Registration Guide</p>
                  <p className="text-sm text-gray-300 mt-2">Coming Soon</p>
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
              className="card border-accent/30 text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Register Your Company?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Fast, professional, and compliant company registration services
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="mailto:corporate@malenglegacy.co.za" className="btn-primary">
                  corporate@malenglegacy.co.za
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

import Head from 'next/head';
import Header from '../../components/Navigation';
import Footer from '../../components/Footer';
import ParallaxSection from '../../components/ParallaxSection';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function MalengMediaPage() {
  const whyChooseUs = [
    {
      icon: '🎨',
      title: 'Creative Excellence',
      description: 'Award-winning design team with 10+ years of experience across industries',
      stat: '300+ Brands Designed'
    },
    {
      icon: '⚡',
      title: 'Fast Turnaround',
      description: 'Rush services available with 48-hour turnaround for urgent projects',
      stat: '48hr Rush Service'
    },
    {
      icon: '💯',
      title: 'Quality Guarantee',
      description: 'Premium materials and printing processes with satisfaction guarantee',
      stat: '100% Satisfaction'
    },
    {
      icon: '🤝',
      title: 'End-to-End Service',
      description: 'From concept to installation - complete branding and media solutions',
      stat: 'Full Service'
    }
  ];

  const testimonials = [
    {
      quote: "The brand refresh they delivered exceeded our expectations. The new identity perfectly captures our corporate evolution.",
      author: "David Nkosi",
      role: "Marketing Director",
      company: "JSE Listed Company"
    },
    {
      quote: "Our awareness campaign reached 2M+ people thanks to their creative billboard designs and social media content.",
      author: "Thandi Mokoena",
      role: "Communications Manager",
      company: "Government Department"
    },
    {
      quote: "Professional photography, seamless event branding, and flawless execution. Our conference was a huge success.",
      author: "James van Zyl",
      role: "Event Coordinator",
      company: "Corporate Events Company"
    }
  ];

  const services = [
    {
      icon: '🎨',
      title: 'Branding & Identity',
      description: 'Complete brand development from strategy to visual identity systems',
      features: ['Brand Strategy', 'Logo Design', 'Brand Guidelines', 'Corporate Identity']
    },
    {
      icon: '✏️',
      title: 'Graphic Design',
      description: 'Professional design services for print and digital media',
      features: ['Marketing Collateral', 'Packaging Design', 'Infographics', 'Social Media Graphics']
    },
    {
      icon: '🖨️',
      title: 'Printing Services',
      description: 'High-quality commercial printing with quick turnaround times',
      features: ['Business Cards', 'Brochures & Flyers', 'Large Format Printing', 'Promotional Materials']
    },
    {
      icon: '🪧',
      title: 'Signage Solutions',
      description: 'Custom indoor and outdoor signage for businesses and events',
      features: ['3D Signage', 'Vehicle Branding', 'Building Signage', 'Wayfinding Systems']
    },
    {
      icon: '📱',
      title: 'Digital Media',
      description: 'Engaging digital content for web, social media, and advertising',
      features: ['Social Media Content', 'Video Production', 'Animation', 'Digital Advertising']
    },
    {
      icon: '📸',
      title: 'Photography & Video',
      description: 'Professional photography and videography services',
      features: ['Corporate Photography', 'Product Photography', 'Event Coverage', 'Promotional Videos']
    }
  ];

  const portfolio = [
    {
      client: 'JSE Listed Company',
      project: 'Complete Brand Refresh',
      deliverables: ['New Logo', 'Brand Guidelines', '500+ Business Cards', 'Building Signage'],
      impact: 'Enhanced brand perception by 85%'
    },
    {
      client: 'Government Department',
      project: 'Awareness Campaign',
      deliverables: ['Billboard Design', '10K Posters', 'Social Media Campaign', 'Video Content'],
      impact: '2M+ impressions achieved'
    },
    {
      client: 'Corporate Event',
      project: 'Conference Branding',
      deliverables: ['Event Branding', 'Large Format Prints', 'Digital Screens', 'Photography'],
      impact: '500+ attendees, seamless execution'
    }
  ];

  return (
    <>
      <Head>
        <title>Maleng Legacy Media & Signage | Branding, Design & Printing Services</title>
        <meta name="description" content="Professional branding, graphic design, printing, signage, and digital media services. Elevate your brand with creative excellence." />
        <meta name="keywords" content="branding South Africa, graphic design, printing services, signage, digital media, logo design" />
      </Head>

      <Header isSubsidiary={true} subsidiaryName="Media & Signage" />

      <main>
        {/* Hero Section */}
        <section className="relative h-screen overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-br from-accent via-gold to-accent opacity-85"></div>
            <div 
              className="absolute inset-0 bg-cover bg-center bg-fixed"
              style={{
                backgroundImage: 'url("https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1920")',
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
                <span className="text-accent font-bold text-sm">🎨 CREATIVE SERVICES</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Maleng Legacy <span className="gradient-text">Media & Signage</span>
              </h1>
              <p className="text-2xl text-gray-300 mb-8">
                Bringing your brand to life through creative design, printing excellence, and impactful signage
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="btn-primary">
                  Start Your Project
                </Link>
                <a href="#portfolio" className="btn-secondary">
                  View Portfolio
                </a>
              </div>
            </motion.div>
          </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 bg-gradient-to-r from-accent to-gold">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-4xl font-bold text-white mb-2">300+</div>
                <div className="text-sm text-gray-100">Brands Designed</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">1M+</div>
                <div className="text-sm text-gray-100">Prints Delivered</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">500+</div>
                <div className="text-sm text-gray-100">Signage Installed</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">48hr</div>
                <div className="text-sm text-gray-100">Rush Turnaround</div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-24 bg-gradient-to-b from-accent/10 to-transparent">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Why Choose <span className="gradient-text">Maleng Media</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Your brand deserves creative excellence and professional execution
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

        <ParallaxSection backgroundImage="https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1920" backgroundColor="bg-accent/90">
        <section id="services" className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Creative Services</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                End-to-end branding and media solutions for businesses of all sizes
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
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
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
        </ParallaxSection>

        {/* Portfolio */}
        <section id="portfolio" className="py-24 bg-gradient-to-b from-primary/20 to-transparent">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Featured Work</h2>
              <p className="text-xl text-gray-300">Recent projects that made an impact</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {portfolio.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="card hover:border-accent/30 transition-all"
                >
                  <div className="text-sm text-accent font-bold mb-2">{item.client}</div>
                  <h3 className="text-xl font-bold mb-4">{item.project}</h3>
                  <div className="mb-4">
                    <div className="text-xs text-gray-400 mb-2">Deliverables:</div>
                    <ul className="space-y-1">
                      {item.deliverables.map((deliverable, idx) => (
                        <li key={idx} className="text-sm text-gray-300 flex items-center gap-2">
                          <span className="text-accent text-xs">●</span>
                          {deliverable}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="border-t border-gray-700 pt-3">
                    <div className="text-sm font-bold gradient-text">{item.impact}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Client Testimonials */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Client Testimonials</h2>
              <p className="text-xl text-gray-300">Real results from satisfied clients</p>
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
        <section className="py-24 bg-gradient-to-b from-accent/10 to-transparent">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Our Creative <span className="gradient-text">Process</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                See how we bring brands to life through design and innovation
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent to-gold flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🎨</div>
                  <p className="text-lg text-white">Portfolio Showcase Video</p>
                  <p className="text-sm text-gray-100 mt-2">Coming Soon</p>
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
                Let's Create Something Amazing
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                From concept to execution — your brand deserves the best
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="mailto:media@malenglegacy.co.za" className="btn-primary">
                  media@malenglegacy.co.za
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


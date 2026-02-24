import Head from 'next/head';
import Header from '../components/Navigation';
import Footer from '../components/Footer';
import ParallaxSection from '../components/ParallaxSection';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function MalengTechPage() {
  const whyChooseUs = [
    {
      icon: '🎯',
      title: 'Enterprise Expertise',
      description: 'Proven track record delivering mission-critical systems for Fortune 500 and government clients',
      stat: '50+ Enterprise Clients'
    },
    {
      icon: '⚡',
      title: 'Rapid Deployment',
      description: 'Agile methodology ensures faster time-to-market without compromising quality',
      stat: '40% Faster Delivery'
    },
    {
      icon: '🔒',
      title: 'Security First',
      description: 'ISO 27001 certified processes with enterprise-grade security built into every solution',
      stat: '100% Secure'
    },
    {
      icon: '💰',
      title: 'Cost Effective',
      description: 'Competitive pricing with flexible engagement models (fixed price, T&M, dedicated teams)',
      stat: '30% Cost Savings'
    }
  ];

  const services = [
    {
      icon: '💻',
      title: 'IT Consulting',
      description: 'Strategic technology advisory for digital transformation and infrastructure optimization',
      features: ['Technology Roadmapping', 'Infrastructure Audits', 'Cloud Migration Strategy', 'Cybersecurity Assessment']
    },
    {
      icon: '⚙️',
      title: 'Software Development',
      description: 'Custom enterprise applications, web platforms, and mobile solutions',
      features: ['Web Applications', 'Mobile Apps (iOS/Android)', 'Enterprise Systems', 'API Integration']
    },
    {
      icon: '🚀',
      title: 'Digital Transformation',
      description: 'End-to-end digitization of business processes and customer experiences',
      features: ['Process Automation', 'Digital Strategy', 'Change Management', 'Innovation Workshops']
    },
    {
      icon: '☁️',
      title: 'Cloud Solutions',
      description: 'Cloud infrastructure design, migration, and managed services',
      features: ['AWS/Azure/GCP', 'Cloud Architecture', 'DevOps Services', 'Managed Hosting']
    }
  ];

  const testimonials = [
    {
      quote: "Their development team delivered our core banking system ahead of schedule. The quality and attention to detail were exceptional.",
      author: "Michael Chen",
      role: "CTO",
      company: "Leading Financial Institution"
    },
    {
      quote: "Maleng Legacy Tech transformed our citizen services portal. 500K+ users onboarded seamlessly with zero downtime.",
      author: "Dr. Nomvula Dlamini",
      role: "Director of Digital Services",
      company: "Government Department"
    },
    {
      quote: "The e-commerce platform they built handles peak loads effortlessly. Our online revenue grew by 300% in 12 months.",
      author: "Sarah Botha",
      role: "CEO",
      company: "Retail Corporation"
    }
  ];

  const projects = [
    {
      client: 'Financial Services Firm',
      project: 'Core Banking System Modernization',
      tech: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
      result: '40% faster transaction processing'
    },
    {
      client: 'Government Department',
      project: 'Citizen Portal Development',
      tech: ['Next.js', 'Python', 'Azure', 'AI/ML'],
      result: '500K+ users onboarded'
    },
    {
      client: 'Retail Corporation',
      project: 'E-commerce Platform',
      tech: ['React Native', 'Node.js', 'MongoDB', 'Stripe'],
      result: 'R50M+ annual online sales'
    }
  ];

  return (
    <>
      <Head>
        <title>Maleng Legacy Tech & Consulting | IT Solutions & Digital Transformation</title>
        <meta name="description" content="Enterprise IT consulting, custom software development, and digital transformation services. Transform your business with cutting-edge technology solutions." />
        <meta name="keywords" content="IT consulting South Africa, software development, digital transformation, cloud solutions, web development" />
      </Head>

      <Header isSubsidiary={true} subsidiaryName="Tech & Consulting" />

      <main>
        {/* Hero Section */}
        <section className="relative h-screen overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-primary opacity-90"></div>
            <div 
              className="absolute inset-0 bg-cover bg-center bg-fixed"
              style={{
                backgroundImage: 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920")',
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
                <span className="text-accent font-bold text-sm">💼 PROFESSIONAL SERVICES CLUSTER</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Maleng Legacy <span className="gradient-text">Tech & Consulting</span>
              </h1>
              <p className="text-2xl text-gray-300 mb-8">
                Transforming businesses through innovative technology solutions and strategic IT consulting
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="btn-primary">
                  Request Consultation
                </Link>
                <a href="#services" className="btn-secondary">
                  Our Services
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
                <div className="text-4xl font-bold gradient-text mb-2">150+</div>
                <div className="text-sm text-gray-300">Projects Delivered</div>
              </div>
              <div>
                <div className="text-4xl font-bold gradient-text mb-2">50+</div>
                <div className="text-sm text-gray-300">Enterprise Clients</div>
              </div>
              <div>
                <div className="text-4xl font-bold gradient-text mb-2">98%</div>
                <div className="text-sm text-gray-300">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-4xl font-bold gradient-text mb-2">24/7</div>
                <div className="text-sm text-gray-300">Support Available</div>
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
                Why Choose <span className="gradient-text">Maleng Tech</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Your trusted partner for enterprise-grade technology solutions
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

        <ParallaxSection backgroundImage="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1920" backgroundColor="bg-primary/95">
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
                Comprehensive technology solutions tailored to your business needs
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="card group hover:border-accent/50 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="text-5xl group-hover:scale-110 transition-transform">
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2 group-hover:text-accent transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-400 mb-4">{service.description}</p>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="text-sm text-gray-300 flex items-center gap-2">
                            <span className="text-accent">✓</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        </ParallaxSection>

        {/* Case Studies */}
        <section className="py-24 bg-gradient-to-b from-primary/20 to-transparent">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Recent Projects</h2>
              <p className="text-xl text-gray-300">Proven results for leading organizations</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="card hover:border-accent/30 transition-all"
                >
                  <div className="text-sm text-accent font-bold mb-2">{project.client}</div>
                  <h3 className="text-xl font-bold mb-3">{project.project}</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, idx) => (
                      <span key={idx} className="px-2 py-1 bg-surface border border-gray-700 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="border-t border-gray-700 pt-3">
                    <div className="text-sm font-bold gradient-text">{project.result}</div>
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
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Client Success Stories</h2>
              <p className="text-xl text-gray-300">Hear from clients who've transformed their businesses with us</p>
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
                See Our <span className="gradient-text">Technology</span> In Action
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Watch how we deliver enterprise-grade solutions that drive digital transformation
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
                  <div className="text-6xl mb-4">💻</div>
                  <p className="text-lg text-white">Solutions Showcase Video</p>
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
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how our technology solutions can drive your digital transformation
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="mailto:tech@malenglegacy.co.za" className="btn-primary">
                  tech@malenglegacy.co.za
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

